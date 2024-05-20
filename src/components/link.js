import React from "react";
import { StyleSheet, Text, View } from "react-native";

function NavigateLink({ children, style, ...props }) {
  return (
    <View style={styles.footer}>
      <Text style={[styles.footerText, style]} {...props}>
        Have an account? <Text style={styles.signInText}>{children}</Text>
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  footerText: {
    color: "#240170",
    fontWeight: "bold",
  },
  signInText: {
    color: "#240170",
    fontWeight: "bold",
  },
});
export default NavigateLink;
