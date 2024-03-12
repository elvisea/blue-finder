import React, { useCallback, useEffect, useReducer } from "react";

import { Text, View, FlatList, ListRenderItemInfo } from "react-native";

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
    dispatch({ type: "ADD-DEVICE", payload: device });
  }, []);

  const handleScanDevices = useCallback(() => {
    if (!state.isGranted) return;

    dispatch({ type: "SET-LOADING", payload: true });
    bluetooth.scanForDevices(updateDevice);

    const timeoutId = setTimeout(() => {
      bluetooth.stopScan();
      dispatch({ type: "SET-LOADING", payload: false });
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      bluetooth.stopScan();
      dispatch({ type: "SET-LOADING", payload: false });
    };
  }, [state.isGranted, updateDevice]);

  const renderItem = ({ item }: ListRenderItemInfo<Device>) => {
    return (
      <ButtonCard
        id={item.id}
        name={item.localName || item.name || "Nome Desconhecido"}
      />
    );
  };

  const handleRequestPermission = async () => {
    const response = await requestPermissions();
    dispatch({ type: "SET-GRANTED", payload: response });
  };

  useEffect(() => {
    handleRequestPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {state.isLoading
          ? "Searching..."
          : `Found Devices: ${state.devices.length}`}
      </Text>

      <FlatList
        data={state.devices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ width: "100%" }}
      />

      <Button
        title={state.isLoading ? "Searching Devices" : "Find Devices"}
        disabled={state.isLoading}
        onPress={handleScanDevices}
      />

      <Button
        title={"Request Permission"}
        disabled={state.isLoading}
        onPress={handleRequestPermission}
      />
    </View>
  );
};

export { ScanScreen };
