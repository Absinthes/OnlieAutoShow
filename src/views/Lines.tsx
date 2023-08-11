import { useControls } from "leva";
import { Line } from "./components/Line";
import { useCarCtx } from "@/context/car";
import { CountUp } from "@/components/CountUp";
import { ReactNode } from "react";

export function Lines() {
  const { state } = useCarCtx();

  return (
    <>
      <Line
        width={785}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        position={[1.5, 0, 0]}
        minHorizontalAngle={Math.PI * 0.1}
        maxHorizontalAngle={Math.PI * 0.9}
        minVerticalAngle={Math.PI / 5}
        maxVerticalAngle={Math.PI / 2}
      >
        {(show) => {
          if (!show) return;
          return (
            <div className="text-2xl text-light pingfang">
              <CountUp
                startVal={1000}
                endVal={4500}
                options={{
                  duration: 1,
                }}
              />
              <span>mm</span>
            </div>
          ) as ReactNode;
        }}
      </Line>

      <Line
        show={!state.carDoorOpen}
        size="mini"
        width={130}
        rotation={[Math.PI, Math.PI, Math.PI / 2]}
        position={[-1.5, 0.6, 0]}
        minHorizontalAngle={-Math.PI * 1.9}
        maxHorizontalAngle={-Math.PI * 0.1}
        minVerticalAngle={Math.PI / 5}
        maxVerticalAngle={Math.PI / 2}
      >
        {(show) => {
          if (!show) return;
          return (
            <div className="text-xl text-light pingfang">
              <CountUp
                startVal={100}
                endVal={860}
                options={{
                  duration: 1,
                }}
              />
              <span>mm</span>
            </div>
          );
        }}
      </Line>
    </>
  );
}
