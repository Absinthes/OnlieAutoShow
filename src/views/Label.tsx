import { AngleLimitByHtml } from "@/components/AngleLimit/Html";
import { Wordbox } from "@/components/Wordbox";
import { useThree } from "@react-three/fiber";
import { origin } from "./contact";
import { Center } from "@react-three/drei";
import { AngleLimitProps } from "@/components/AngleLimit/useAngleLimit";
import { CSSProperties } from "react";

type Label = {
  target?: string;
  position?: [number, number, number];
  content: string;
  direction?: "left" | "right";
} & AngleLimitProps;

export function Labels() {
  const { scene } = useThree();

  const labelInfo: Label[] = [
    {
      direction: "left",
      content: "智能电混系统",
      position: [0.8, 0.7, 2],
      minHorizontalAngle: Math.PI * -0.1,
      maxHorizontalAngle: Math.PI * 0.3,
      minVerticalAngle: Math.PI / 5,
      maxVerticalAngle: Math.PI / 2,
    },
    {
      direction: "left",
      content: "智能语音交互系统",
      position: [0, 0.8, 0.7],
      minHorizontalAngle: -Math.PI * 0.2,
      maxHorizontalAngle: Math.PI * 0.2,
      minVerticalAngle: Math.PI / 5,
      maxVerticalAngle: Math.PI / 2,
    },
    {
      direction: "left",
      content: "太空座舱",
      position: [0, 0.9, 0],
      minHorizontalAngle: Math.PI * 0.6,
      maxHorizontalAngle: Math.PI * 1,
      minVerticalAngle: Math.PI / 5,
      maxVerticalAngle: Math.PI / 2,
    },
    {
      content: "27项智能驾驶辅助系统",
      position: [-0.8, 0.7, 1.8],
      minHorizontalAngle: -Math.PI * 0.4,
      maxHorizontalAngle: -Math.PI * 0,
      minVerticalAngle: Math.PI / 5,
      maxVerticalAngle: Math.PI / 2,
    },
    {
      content: "气流冷却智能管理系统",
      position: [0, 1, 0],
      maxHorizontalAngle: -Math.PI * 0.3,
      minHorizontalAngle: -Math.PI * 0.59,
      minVerticalAngle: Math.PI / 5,
      maxVerticalAngle: Math.PI / 2,
    },
    {
      direction: "left",
      content: "V8发动机",
      position: [0, 0.9, -1.5],
      minHorizontalAngle: -Math.PI * 1,
      maxHorizontalAngle: -Math.PI * 0.6,
      minVerticalAngle: Math.PI / 5,
      maxVerticalAngle: Math.PI / 2,
    },
  ];

  const label = labelInfo.map((it, idx) => {
    const { content, target, position, direction = "right", ...rest } = it;
    let pos;
    if (it.target) {
      const target = scene.getObjectByName(it.target);
      if (!target) return;
      pos = target.getWorldPosition(origin);
    }
    pos = position;

    const style: CSSProperties = {
      transform: direction == "right" ? "translate(-100%, 0)" : "none",
    };

    return (
      <group position={pos} key={idx}>
        <AngleLimitByHtml style={style} {...rest}>
          <Wordbox direction={direction}>{content}</Wordbox>
        </AngleLimitByHtml>
      </group>
    );
  });

  return <>{label}</>;
}
