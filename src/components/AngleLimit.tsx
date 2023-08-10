import { PropsWithChildren } from "react";

export type AngleLimitProps = {
  /**
   * 垂直旋转角度上限，0 ~ Math.PI
   */
  minPolarAngle: number;
  maxPolarAngle: number;
  minAzimuthAngle: number;
  maxAzimuthAngle: number;
};

export function AngleLimit(props: PropsWithChildren<AngleLimitProps>) {}
