import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { styles } from "./styles";

type ButtonCardProps = TouchableOpacityProps & {
  id: string;
  name: string;
};

const ButtonCard: React.FC<ButtonCardProps> = ({ name, id, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} {...rest}>
      <MaterialIcons name="bluetooth" size={28} color="#FFF" />

      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.id}>{id}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { ButtonCard };
