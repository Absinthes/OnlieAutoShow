import { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./index.module.scss";

export function Wordbox(
  props: PropsWithChildren<
    {
      direction?: "left" | "right";
    } & HTMLAttributes<HTMLDivElement>
  >
) {
  const { children, direction = "right", className } = props;

  return (
    <div
      className={`${styles["label-box"]} ${
        direction == "left" ? styles.left : styles.right
      } ${className}  `}
    >
      <div
        className={`${styles.sign} ${
          direction == "left" ? styles.left : styles.right
        }`}
      ></div>
      {children}
    </div>
  );
}
