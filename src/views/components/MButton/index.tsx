import { HTMLAttributes, PropsWithChildren } from "react";
import style from "./index.module.scss";

type MButtonProps = {
  show?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function MButton(props: PropsWithChildren<MButtonProps>) {
  const { children, className, show = true, ...rest } = props;
  return (
    <div
      className={`${style.MButton} ${show && style.show} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
