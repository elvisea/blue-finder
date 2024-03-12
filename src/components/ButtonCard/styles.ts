import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2196F3",
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 82,
    marginTop: 8,
    gap: 8,
  },

  id: {
    color: "#FFF",
    fontSize: 12,
    fontFamily: "RobotoSlab_400Regular",
  },

  name: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "RobotoSlab_400Regular",
  },

  content: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
