import { useFrame } from "@react-three/fiber";
import { useReactive } from "ahooks";
import { createRef, useMemo } from "react";
import { Group } from "three";
import { OrbitControls } from "three-stdlib";

export type AngleLimitProps = {
  /**
   * 垂直旋转角度下限，0 ~ Math.PI
   */
  minVerticalAngle?: number;
  /**
   * 垂直旋转角度上限，0 ~ Math.PI
   */
  maxVerticalAngle?: number;

  /**
   * 水平旋转的角度下限。如果设置，其有效值范围为[-2 * Math.PI，2 * Math.PI]
   */
  minHorizontalAngle?: number;
  /**
   * 水平旋转的角度上限。如果设置，其有效值范围为[-2 * Math.PI，2 * Math.PI]
   */
  maxHorizontalAngle?: number;
};

export type State = {
  verticalAngle: number | null;
  horizontalAngle: number | null;
};

export function useAngleLimit(props: AngleLimitProps) {
  const {
    minHorizontalAngle = -Math.PI * 2,
    maxHorizontalAngle = Math.PI * 2,
    minVerticalAngle = 0,
    maxVerticalAngle = Math.PI,
  } = props;
  const groupRef = createRef<Group>();

  const state = useReactive<State>({
    verticalAngle: null,
    horizontalAngle: null,
  });

  // useFrame(({ controls, camera }) => {
  //   const group = groupRef.current!;
  //   const cameraPosition = camera.position.clone();
  //   const objectPosition = group.position.clone();
  //   const objectToCameraVector = cameraPosition.sub(objectPosition);
  //   // 计算水平角度（绕Y轴旋转的角度）
  //   const horizontalAngle = Math.atan2(objectToCameraVector.x, objectToCameraVector.z);

  //   // 计算垂直角度（绕X轴旋转的角度）
  //   const verticalAngle = Math.atan2(
  //     objectToCameraVector.y,
  //     Math.sqrt(
  //       objectToCameraVector.x * objectToCameraVector.x +
  //         objectToCameraVector.z * objectToCameraVector.z
  //     )
  //   );
  //   set({
  //     horizontalAngle,
  //     verticalAngle,
  //   });
  // });

  useFrame(({ controls: c }) => {
    const controls = c as OrbitControls;
    const horizontalAngle = controls.getAzimuthalAngle();
    const verticalAngle = controls.getPolarAngle();
    state.verticalAngle = verticalAngle;
    state.horizontalAngle = horizontalAngle;
  });

  const isShow = useMemo(() => {
    const { verticalAngle, horizontalAngle } = state;
    if (!verticalAngle || !horizontalAngle) return false;
    if (
      verticalAngle > minVerticalAngle &&
      verticalAngle < maxVerticalAngle &&
      horizontalAngle > minHorizontalAngle &&
      horizontalAngle < maxHorizontalAngle
    )
      return true;

    return false;
  }, [state.verticalAngle, state.horizontalAngle]);

  return {
    groupRef,
    isShow,
  };
}
