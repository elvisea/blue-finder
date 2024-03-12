import { ActivityIndicator, View } from "react-native";

function Loading() {
  return (
    <View style={{ flex: 1 }}>
      <ActivityIndicator />
    </View>
  );
}

export { Loading };
