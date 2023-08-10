import { PropsWithChildren, createRef, useMemo, useRef } from "react";
import { AngleLimitProps, useAngleLimit } from "./useAngleLimit";

export function AngleLimit(props: PropsWithChildren<AngleLimitProps>) {
  const { children } = props;

  const { groupRef, isShow } = useAngleLimit(props);

  return (
    <group visible={isShow} ref={groupRef}>
      {children}
    </group>
  );
}
