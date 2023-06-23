import React, { useState } from "react";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, TextInput } from "react-native";

export const LoginForm = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [emailFieldOutline, setEmailFieldOutline] = useState(false);
  const [passwordFieldOutline, setPasswordFieldOutline] = useState(false);

  return (
    <View
      style={{
        ...styles.formContainer,
        paddingBottom: isKeyboardShown ? 32 : 144,
      }}>
      <Text
        style={{
          fontFamily: "Roboto-500",
          fontSize: 30,
          lineHeight: 35.16,
          letterSpacing: 0.01,
          textAlign: "center",
          marginBottom: 32,
        }}>
        Увійти
      </Text>

      <TextInput
        style={[
          {
            borderColor: emailFieldOutline ? "#FF6C00" : "#E8E8E8",
          },
          styles.input,

          styles.notLast,
        ]}
        placeholder="Адреса електронної пошти"
        placeholderTextColor="#BDBDBD"
        onFocus={() => {
          setIsKeyboardShown(true);
          setEmailFieldOutline(true);
          setPasswordFieldOutline(false);
        }}
      />
      <View style={styles.last}>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: passwordFieldOutline ? "#FF6C00" : "#E8E8E8",
            },
            styles.notLast,
          ]}
          placeholder="Пароль"
          placeholderTextColor="#BDBDBD"
          onFocus={() => {
            setIsKeyboardShown(true);
            setPasswordFieldOutline(true);
            setEmailFieldOutline(false);
          }}
        />
        <Pressable style={styles.passwordShow}>
          <Text
            style={{
              fontFamily: "Roboto-400",
              fontSize: 16,
              lineHeight: 18.75,
              color: "#1B4371",
            }}>
            Показати
          </Text>
        </Pressable>
      </View>
      <Pressable style={styles.submitBtn}>
        <Text
          style={{
            fontFamily: "Roboto-400",
            fontSize: 16,
            lineHeight: 18.75,
            textAlign: "center",
            color: "#FFFFFF",
          }}>
          Увійти
        </Text>
      </Pressable>
      <View style={styles.invitationToLogin}>
        <Text
          style={{
            fontFamily: "Roboto-400",
            fontSize: 16,
            lineHeight: 18.75,
            color: "#1B4371",
          }}>
          Немає акаунту?&nbsp;
        </Text>
        <Pressable>
          <Text
            style={{
              fontFamily: "Roboto-400",
              fontSize: 16,
              lineHeight: 18.75,
              color: "#1B4371",
              textDecorationLine: "underline",
            }}>
            Зареєструватися
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 0,
    position: "relative",
    alignItems: "center",

    width: "100%",

    backgroundColor: "#FFFFFF",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    paddingTop: 32,
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
    // borderColor: "#E8E8E8",

    fontSize: 16,
    fontFamily: "Roboto-400",
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
  },

  addAvatarBtn: {
    position: "absolute",
    right: -12,
    bottom: 12,

    width: 25,
    height: 25,
  },
});
