import React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { LoginForm } from "../Components/LoginForm";

export const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <LoginForm />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
