import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

function Button({
  children,
  onPress = () => null,
  styleView,
  styleText,
  ...props
}) {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
       <View style={styleView}> 
        <Text style={styleText}>{children}</Text>
      </View> 
    </TouchableOpacity>
  );
}

export default Button;
