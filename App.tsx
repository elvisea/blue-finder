import React from "react";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { ScanScreen } from "./src/screens/ScanScreen";

import {
  useFonts,
  RobotoSlab_100Thin,
  RobotoSlab_200ExtraLight,
  RobotoSlab_300Light,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  RobotoSlab_600SemiBold,
  RobotoSlab_700Bold,
  RobotoSlab_800ExtraBold,
  RobotoSlab_900Black,
} from "@expo-google-fonts/roboto-slab";

import { Loading } from "./src/components/Loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoSlab_100Thin,
    RobotoSlab_200ExtraLight,
    RobotoSlab_300Light,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
    RobotoSlab_800ExtraBold,
    RobotoSlab_900Black,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      {fontsLoaded ? <ScanScreen /> : <Loading />}
    </SafeAreaView>
  );
}
