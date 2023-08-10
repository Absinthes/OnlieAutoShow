import {
  AngleLimitProps,
  useAngleLimit,
} from "@/components/AngleLimit/useAngleLimit";
import styles from "./index.module.scss";
import {
  CSSProperties,
  PropsWithChildren,
  RefAttributes,
  useMemo,
} from "react";
import { GroupProps } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { HtmlProps } from "@react-three/drei/web/Html";

export type LineProps = {
  width?: number;
  size?: "larger" | "mini";
  show?: boolean;
} & AngleLimitProps &
  GroupProps &
  RefAttributes<HTMLDivElement> &
  HtmlProps;

export function Line(props: PropsWithChildren<LineProps>) {
  const {
    children,
    minHorizontalAngle = -Math.PI * 2,
    maxHorizontalAngle = Math.PI * 2,
    minVerticalAngle = 0,
    maxVerticalAngle = Math.PI,
    distanceFactor = 1,
    size = "larger",
    show = true,
  } = props;

  // @ts-ignore
  const style = useMemo<CSSProperties>(() => {
    const { width = 600 } = props;
    if (size == "mini") {
      return {
        "--width": width * 2,
        "--widthPx": `${width}px`,
      };
    }
    return {
      "--width": width,
      "--widthPx": `${width}px`,
    };
  }, [props.width]);

  const { isShow } = useAngleLimit({
    minHorizontalAngle,
    maxHorizontalAngle,
    minVerticalAngle,
    maxVerticalAngle,
  });

  const model = useMemo(() => {
    const getTiggerStyle = {
      opacity: show && isShow ? 1 : 0,
      transition: `opacity 0.3s`,
    };

    return (
      <group {...props}>
        <Html
          transform
          distanceFactor={distanceFactor}
          className={`${styles.lineBox} ${show && isShow && styles.show} ${
            size == "mini" && "mini"
          } flex items-center`}
          style={{ ...style, ...getTiggerStyle }}
        >
          <img className={styles.leftHorizontalLine} src="/image/Line02.png" />

          <div className={`${styles.lineWarp} flex justify-end`}>
            <div className={styles.leftLine}></div>
          </div>

          <div
            className={`${styles.content} ${size == "mini" && "display-none"} `}
          ></div>

          <div className={styles.lineWarp}>
            <div className={`${styles.leftLine} ${styles.rightLine}`}></div>
          </div>

          <img className={styles.rightHorizontalLine} src="/image/Line02.png" />
        </Html>
        <Html center className={styles.content} style={getTiggerStyle}>
          {children}
        </Html>
      </group>
    );
  }, [isShow, props]);

  return <>{model}</>;
}
