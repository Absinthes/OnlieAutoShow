import {
  CSSProperties,
  HTMLAttributes,
  PropsWithChildren,
  RefAttributes,
  useMemo,
} from "react";
import { AngleLimitProps, useAngleLimit } from "./useAngleLimit";
import { Html } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { HtmlProps } from "@react-three/drei/web/Html";

export type AngleLimitByHtmlProps = AngleLimitProps & HtmlProps;

export function AngleLimitByHtml(
  props: PropsWithChildren<AngleLimitByHtmlProps>
) {
  const { children, style, ...config } = props;
  const { isShow } = useAngleLimit(props);

  const getStyle = useMemo<CSSProperties>(() => {
    return {
      opacity: isShow ? 1 : 0,
      transition: `opacity 0.3s`,
    };
  }, [isShow]);

  return (
    <Html
      visible={isShow}
      style={{
        ...getStyle,
        ...style,
      }}
      {...config}
    >
      {children}
    </Html>
  );
}
