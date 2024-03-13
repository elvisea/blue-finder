import React, { useCallback, useEffect, useReducer } from "react";

import {
  Text,
  View,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
} from "react-native";

import { Device } from "react-native-ble-plx";

import { styles } from "./styles";

import { reducer } from "../../reducer";
import { initialState } from "../../constants";

import { Bluetooth } from "../../bluetooth";
import { requestPermissions } from "../../permissions";

import { Button } from "../../components/Button";
import { ButtonCard } from "../../components/ButtonCard";

const bluetooth = Bluetooth.getInstance();

const ScanScreen: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateDevice = useCallback((device: Device) => {
    dispatch({ type: "ADD_DEVICE", payload: device });
  }, []);

  const handleScanDevices = useCallback(
    (isRefresh = false) => {
      dispatch({ type: "SET_LOADING", payload: true });
      bluetooth.scanForDevices(updateDevice);

      const endScanning = () => {
        bluetooth.stopScan();
        dispatch({ type: "SET_LOADING", payload: false });
        if (isRefresh) {
          dispatch({ type: "SET_REFRESHING", payload: false });
        }
      };

      setTimeout(() => {
        endScanning();
      }, 5000);
    },
    [updateDevice],
  );

  const onRefresh = useCallback(() => {
    if (state.permissionsGranted) {
      dispatch({ type: "SET_REFRESHING", payload: true });
      handleScanDevices(true);
    } else {
      handleRequestPermission();
    }
  }, [state.permissionsGranted, handleScanDevices]);

  const renderItem = ({ item }: ListRenderItemInfo<Device>) => {
    return (
      <ButtonCard
        id={item.id}
        name={item.localName || item.name || "Name Unknown"}
      />
    );
  };

  const handleRequestPermission = async () => {
    const response = await requestPermissions();
    dispatch({ type: "SET_PERMISSIONS_GRANTED", payload: response });
  };

  useEffect(() => {
    handleRequestPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {state.loading
          ? "Searching..."
          : `Found Devices: ${state.devices.length}`}
      </Text>

      <FlatList
        data={state.devices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ width: "100%" }}
        refreshControl={
          <RefreshControl refreshing={state.refreshing} onRefresh={onRefresh} />
        }
      />

      <Button
        title={state.loading ? "Searching Devices" : "Find Devices"}
        disabled={state.loading}
        onPress={() => handleScanDevices(true)}
      />

      <Button
        title={"Request Permission"}
        disabled={state.loading}
        onPress={handleRequestPermission}
      />
    </View>
  );
};

export { ScanScreen };
