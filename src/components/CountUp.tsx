import { CountUp as _CountUp, CountUpOptions } from "countup.js";
import {
  useRef,
  createRef,
  useEffect,
  RefAttributes,
  PropsWithChildren,
} from "react";

export type CountUpProps = {
  startVal?: number;
  endVal: number;
  options?: CountUpOptions;
} & RefAttributes<HTMLSpanElement>;

export function CountUp(props: PropsWithChildren<CountUpProps>) {
  const spanRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const { startVal = 0, endVal, options } = props;
    const countUpAnim = new _CountUp(spanRef.current!, endVal, {
      startVal,
      ...options,
    });
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
  });

  return <span ref={spanRef} {...props}></span>;
}
