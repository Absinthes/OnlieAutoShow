import { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./index.module.scss";

export function Wordbox(
  props: PropsWithChildren<
    {
      direction?: "left" | "right";
    } & HTMLAttributes<HTMLDivElement>
  >
) {
  const { children, direction = "left", className } = props;

  return (
    <div
      className={`${styles["label-box"]} ${
        direction == "left" ? styles.left : styles.right
      } ${className}`}
    >
      {children}
    </div>
  );
}
