import { Action, State } from "../types";

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_REFRESHING":
      return { ...state, refreshing: action.payload };

    case "SET_PERMISSIONS_GRANTED":
      return { ...state, permissionsGranted: action.payload };

    case "ADD_DEVICE":
      const exists = state.devices.some(
        (device) => device.id === action.payload.id,
      );
      if (!exists) {
        return { ...state, devices: [...state.devices, action.payload] };
      }
      return state;

    case "REMOVE_DEVICE":
      return {
        ...state,
        devices: state.devices.filter((device) => device.id !== action.payload),
      };

    default:
      return state;
  }
};

export { reducer };
