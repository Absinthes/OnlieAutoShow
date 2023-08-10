import { Wordbox } from "@/components/Wordbox";
import { Line } from "./components/Line";

export function Dom() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full bg-gray-7">
        <Wordbox direction="right">测试数据</Wordbox>
        {/* <Line width={700} /> */}
      </div>
    </>
  );
}
