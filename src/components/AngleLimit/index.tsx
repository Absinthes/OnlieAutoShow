import { PropsWithChildren, createRef, useMemo, useRef } from "react";
import { AngleLimitProps, useAngleLimit } from "./useAngleLimit";
import { GroupProps } from "@react-three/fiber";

export function AngleLimit(
  props: PropsWithChildren<AngleLimitProps & GroupProps>
) {
  const { children } = props;

  const { groupRef, isShow } = useAngleLimit(props);

  return (
    <group visible={isShow} ref={groupRef}>
      {children}
    </group>
  );
}
