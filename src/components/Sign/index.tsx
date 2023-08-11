import style from "./index.module.scss";
import { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import { rgb } from "color";

export type SignProps = {
  color?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Sign(props: PropsWithChildren<SignProps>) {
  const { color = "#22dafb", ...rest } = props;
  // @ts-ignore
  const getStyle: CSSProperties = {
    // @ts-ignore
    "--color": rgb(color).color.join(),
  };

  return <div className={style.sign} style={getStyle} {...rest}></div>;
}
