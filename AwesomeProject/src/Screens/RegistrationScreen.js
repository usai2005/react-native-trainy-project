import React, { useState, useReducer } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import backgroundImage from "../../assets/images/photo-bg.jpg";

import { useNavigation } from "@react-navigation/native";

import { reducer } from "../services/reducer";

const initialState = { login: "", email: "", password: "" };

const RegistrationScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isLoginFieldOutline, setIsLoginFieldOutline] = useState(false);
  const [isEmailFieldOutline, setIsEmailFieldOutline] = useState(false);
  const [isPasswordFieldOutline, setIsPasswordFieldOutline] = useState(false);

  const navigation = useNavigation();

  const [state, dispatch] = useReducer(reducer, initialState);

  const onRegister = () => {
    console.log(state);
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
              paddingBottom: isKeyboardShown ? 32 : 78,
            }}>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatarImg}
                source={require("../../assets/images/natali-romanova-avatar.png")}
                alt="closeBtn"
              />
              <TouchableOpacity>
                <Image
                  style={styles.addAvatarBtn}
                  source={require("../../assets/images/add.png")}
                  alt="addAvatarBtn"
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 30,
                lineHeight: 35.16,
                letterSpacing: 0.01,
                textAlign: "center",
                marginBottom: 32,
              }}>
              Реєстрація
            </Text>
            <View>
              <TextInput
                onChangeText={(text) =>
                  dispatch({ type: "login", payload: text })
                }
                style={[
                  styles.input,
                  {
                    borderColor: isLoginFieldOutline ? "#FF6C00" : "#E8E8E8",
                  },
                  styles.notLast,
                ]}
                placeholder="Логін"
                placeholderTextColor="#BDBDBD"
                onFocus={() => {
                  setIsKeyboardShown(true);
                  setIsLoginFieldOutline(true);
                }}
                onBlur={() => setIsLoginFieldOutline(false)}
              />
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
                      borderColor: isPasswordFieldOutline
                        ? "#FF6C00"
                        : "#E8E8E8",
                    },
                    styles.notLast,
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
            </View>
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => {
                onRegister();
                navigation.navigate("Home");
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 18.75,
                  textAlign: "center",
                  color: "#FFFFFF",
                }}>
                Зареєстуватися
              </Text>
            </TouchableOpacity>
            <View style={styles.invitationToLogin}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 18.75,
                  color: "#1B4371",
                }}>
                Вже є акаунт?&nbsp;
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 18.75,
                    color: "#1B4371",
                    textDecorationLine: "underline",
                  }}>
                  Увійти
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
    position: "relative",

    width: "100%",

    flex: 0,
    alignItems: "center",

    paddingTop: 92,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    backgroundColor: "#FFFFFF",
  },

  avatarContainer: {
    position: "absolute",
    top: -60,

    width: 120,
    height: 120,

    borderRadius: 16,
    backgroundColor: "#F6F6F6",
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
    flexDirection: "row",
    justifyContent: "center",
  },

  addAvatarBtn: {
    position: "absolute",
    right: -12,
    bottom: 12,

    width: 25,
    height: 25,
  },

  backgroundImg: {
    flex: 1,
    justifyContent: "flex-end",
  },

  avatarImg: {
    width: 120,
    height: 120,
  },
});

export default RegistrationScreen;
