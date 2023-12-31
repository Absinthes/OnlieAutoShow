import { useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";
import { colorState } from "../../contact";
import style from "./index.module.css";

export function Picker() {
  const snap = useSnapshot(colorState);
  return (
    <div
      className={style.picker}
      style={{
        display: snap.current ? "block" : "none",
        // left: colorState.pickerPosition.left + "px",
        // top: colorState.pickerPosition.top + "px",
      }}
    >
      <HexColorPicker
        color={snap.items[snap.current]}
        onChange={(color) => (colorState.items[snap.current] = color)}
      />
      {/* <h1>{snap.current}</h1> */}
    </div>
  );
}
