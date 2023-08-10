import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";

export interface CarState {
  /**
   * 车门是否打开
   */
  carDoorOpen: boolean;
}

const CarContext = createContext<
  | {
      state: CarState;
      dispatch: (action: CarAction) => void;
    }
  | undefined
>(undefined);

const initalState: CarState = {
  carDoorOpen: false,
};

type CarAction = {
  type: "open";
  payload: CarState["carDoorOpen"];
};

export function carReducer(state: CarState, action: CarAction): CarState {
  switch (action.type) {
    case "open":
      return { ...state, carDoorOpen: action.payload };
    default:
      throw new Error("Unexpected Toast Action");
  }
}

export const CarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(carReducer, initalState);
  return (
    <CarContext.Provider value={{ state, dispatch }}>
      {children}
    </CarContext.Provider>
  );
};

export function useCarCtx() {
  const context = useContext(CarContext);
  if (context === undefined)
    throw new Error("useCarCtx must be used within a CarProvider");

  return context;
}
