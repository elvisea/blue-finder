import { Device } from "react-native-ble-plx";

type State = {
  devices: Device[];
  isLoading: boolean;
  isGranted: boolean;
};

type Action =
  | { type: "ADD-DEVICE"; payload: Device }
  | { type: "SET-LOADING"; payload: boolean }
  | { type: "SET-GRANTED"; payload: boolean }
  | { type: "REMOVE-DEVICE"; payload: string };

export { State, Action };
