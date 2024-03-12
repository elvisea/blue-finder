import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.75} style={styles.button} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export { Button };
