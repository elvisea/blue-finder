import { Device } from "react-native-ble-plx";

type State = {
  devices: Device[];
  loading: boolean;
  permissionsGranted: boolean;
  refreshing: boolean;
};

type Action =
  | { type: "ADD_DEVICE"; payload: Device }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_REFRESHING"; payload: boolean }
  | { type: "SET_PERMISSIONS_GRANTED"; payload: boolean }
  | { type: "REMOVE_DEVICE"; payload: string };

export { State, Action };
