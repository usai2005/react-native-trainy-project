import React, { useState, useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import backgroundImage from "../../assets/images/photo-bg.jpg";

import { useNavigation } from "@react-navigation/native";

import { reducer } from "../services/reducer";

const initialState = { email: "", password: "" };

const LoginScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isEmailFieldOutline, setIsEmailFieldOutline] = useState(false);
  const [isPasswordFieldOutline, setIsPasswordFieldOutline] = useState(false);

  const navigation = useNavigation();

  const [state, dispatch] = useReducer(reducer, initialState);

  // const reset = () => {
  //   dispatch({ type: "reset", payload: initialState });
  // };

  const onLogin = () => {
    console.log(state);
    // reset();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setIsKeyboardShown(false);
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImg}>
          <View
            style={{
              ...styles.formContainer,
              paddingBottom: isKeyboardShown ? 32 : 144,
            }}>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 30,
                lineHeight: 35.16,
                letterSpacing: 0.01,
                textAlign: "center",
                marginBottom: 33,
              }}>
              Увійти
            </Text>

            <TextInput
              onChangeText={(text) =>
                dispatch({ type: "email", payload: text })
              }
              style={[
                {
                  borderColor: isEmailFieldOutline ? "#FF6C00" : "#E8E8E8",
                },
                styles.input,

                styles.notLast,
              ]}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
              onFocus={() => {
                setIsKeyboardShown(true);
                setIsEmailFieldOutline(true);
              }}
              onBlur={() => setIsEmailFieldOutline(false)}
            />
            <View style={styles.last}>
              <TextInput
                onChangeText={(text) =>
                  dispatch({ type: "password", payload: text })
                }
                style={[
                  styles.input,
                  {
                    borderColor: isPasswordFieldOutline ? "#FF6C00" : "#E8E8E8",
                  },
                ]}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                onFocus={() => {
                  setIsKeyboardShown(true);
                  setIsPasswordFieldOutline(true);
                }}
                onBlur={() => setIsPasswordFieldOutline(false)}
              />
              <TouchableOpacity style={styles.passwordShow}>
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 18.75,
                    color: "#1B4371",
                  }}>
                  Показати
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => {
                onLogin();
                // reset();
                navigation.navigate("Home");
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 18.75,
                  textAlign: "center",
                  color: "#FFFFFF",
                }}>
                Увійти
              </Text>
            </TouchableOpacity>

            <View style={styles.invitationToLogin}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 18.75,
                  color: "#1B4371",
                }}>
                Немає акаунту?&nbsp;
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Registration")}>
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 18.75,
                    color: "#1B4371",
                    textDecorationLine: "underline",
                  }}>
                  Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },

  formContainer: {
    width: "100%",

    flex: 0,
    alignItems: "center",

    paddingTop: 32,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    backgroundColor: "#FFFFFF",
  },

  input: {
    width: 343,
    height: 50,

    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 15,

    backgroundColor: "#F6F6F6",

    borderRadius: 8,
    borderWidth: 1,

    fontSize: 16,
    lineHeight: 1.17,
  },

  notLast: { marginBottom: 16 },

  last: {
    position: "relative",
    marginBottom: 43,
  },

  passwordShow: {
    position: "absolute",
    right: 16,
    top: 17,
  },

  submitBtn: {
    width: 343,
    height: 51,

    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,

    backgroundColor: "#FF6C00",

    borderRadius: 100,
  },

  invitationToLogin: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },

  backgroundImg: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default LoginScreen;
