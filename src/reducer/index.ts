import { Action, State } from "../types";

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET-LOADING":
      return { ...state, isLoading: action.payload };

    case "SET-GRANTED":
      return { ...state, isGranted: action.payload };

    case "ADD-DEVICE":
      const exists = state.devices.some(
        (device) => device.id === action.payload.id,
      );
      if (!exists) {
        return { ...state, devices: [...state.devices, action.payload] };
      }
      return state;

    case "REMOVE-DEVICE":
      return {
        ...state,
        devices: state.devices.filter((device) => device.id !== action.payload),
      };

    default:
      return state;
  }
};

export { reducer };
