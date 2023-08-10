import { CSSProperties, PropsWithChildren, RefAttributes, useMemo } from "react";
import { AngleLimitProps, useAngleLimit } from "./useAngleLimit";
import { Html } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

export type AngleLimitByHtmlProps = AngleLimitProps &
  RefAttributes<HTMLDivElement> &
  GroupProps;

export function AngleLimitByHtml(props: PropsWithChildren<AngleLimitByHtmlProps>) {
  const { children, ...config } = props;
  const { isShow } = useAngleLimit(props);

  const getStyle = useMemo<CSSProperties>(() => {
    return {
      opacity: isShow ? 1 : 0,
      transition: `opacity 0.3s`,
    };
  }, [isShow]);

  return (
    <Html visible={isShow} style={getStyle} {...config}>
      {children}
    </Html>
  );
}
