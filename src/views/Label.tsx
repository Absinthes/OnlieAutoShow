import { AngleLimitByHtml } from "@/components/AngleLimit/Html";
import { Wordbox } from "@/components/Wordbox";
import { useThree } from "@react-three/fiber";
import { origin } from "./contact";
import { Center } from "@react-three/drei";

type Label = {
  target?: string;
  position?: [number, number, number];
  content: string;
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

export function Labels() {
  const { scene } = useThree();

  const labelInfo: Label[] = [
    {
      content: "智能电混系统",
      position: [0.8, 0.7, 2],
      minHorizontalAngle: Math.PI * -0.1,
      maxHorizontalAngle: Math.PI * 0.3,
      minVerticalAngle: Math.PI / 5,
      maxVerticalAngle: Math.PI / 2,
    },
    {
      content: "智能语音交互系统",
      position: [0, 0.8, 0.7],
      minHorizontalAngle: Math.PI * 0.2,
      maxHorizontalAngle: Math.PI * 0.8,
      minVerticalAngle: Math.PI / 5,
      maxVerticalAngle: Math.PI / 2,
    },
    // {
    //   content: "气流冷却智能管理系统",
    //   target: "Object_110",
    //   minVerticalAngle: Math.PI / 5,
    //   maxVerticalAngle: Math.PI / 2,
    // },
    // {
    //   content: "27项智能驾驶辅助系统",
    //   minVerticalAngle: Math.PI / 5,
    //   maxVerticalAngle: Math.PI / 2,
    // },
    // {
    //   content: "太空座舱",

    //   minVerticalAngle: Math.PI / 5,
    //   maxVerticalAngle: Math.PI / 2,
    // },
    // {
    //   content: "V8发动机",
    //   minVerticalAngle: Math.PI / 5,
    //   maxVerticalAngle: Math.PI / 2,
    // },
  ];

  const label = labelInfo.map((it, idx) => {
    const { content, target, position, ...rest } = it;
    let pos;
    if (it.target) {
      const target = scene.getObjectByName(it.target);
      if (!target) return;
      pos = target.getWorldPosition(origin);
    }
    pos = position;

    return (
      <>
        <group position={pos}>
          <AngleLimitByHtml key={idx} {...rest}>
            <Wordbox>{content}</Wordbox>
          </AngleLimitByHtml>
        </group>
      </>
    );
  });

  return <>{label}</>;
}
