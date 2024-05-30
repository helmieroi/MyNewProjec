import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function Input({
  label,
  type = false,
  leading,
  rules = {},
  trailing,
  ...props
}) {
  return (
    <View style={styles.name}>{/*
      {label ? <Text style={styles.label}>{label}</Text> : <></>}
      <View style={styles.inputContainer}>
        {leading ? leading : <></>}

        <TextInput secureTextEntry={type} style={styles.input} {...props} />
        {trailing ? trailing : <></>}
      </View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
 /* container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dde5f4",
  },
  screen1: {
    flex: 1,
    backgroundColor: "#f1f7fe",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#e6e9f9",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 2,
    shadowRadius: 20,
    elevation: 2,
    width: "90%",
    maxWidth: 400,
  },
  logo: {
    width: "68%",
    height: 160,
    resizeMode: "contain",
    alignSelf: "center",
  },
  form: {
    width: "100%",
    marginBottom: 10,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    position: "absolute",
    flexShrink: 0,
    top: 5,
    right: 34,
    bottom: 14,
    left: 21,
    textAlign: "left",
    color: "rgba(118, 118, 118, 1)",
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 36.63212966918945,
  },
  input: {
    position: "absolute",
    flexShrink: 0,
    top: 31,
    height: 45,
    width: 305,
    alignItems: "flex-start",
    rowGap: 0,
  },
  emailLabel: {
    color: "#571c8a",
    fontWeight: "bold",
    marginBottom: 8,
  },
  phoneLabel: {
    color: "#571c8a",
    fontWeight: "bold",
    marginBottom: 8,
  },
  inputContainer: {
    position: "absolute",
    flexShrink: 0,
    top: 28,
    height: 45,
    width: 305,
    alignItems: "flex-start",
    rowGap: 0,
  },
  passwordLabel: {
    color: "#571c8a",
    fontWeight: "bold",
    marginBottom: 8,
  },
  icon: {
    marginRight: 15,
  },
  showHideIcon: {
    color: "#4d4d4d",
    marginBottom: -2,
    marginRight: -6,
  },
  loginButton: {
    backgroundColor: "#69449c",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
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
*/});

export default Input;
