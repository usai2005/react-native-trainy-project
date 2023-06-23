import React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { RegistrationForm } from "../Components/RegistrationForm";

export const RegistrationScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <RegistrationForm />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
