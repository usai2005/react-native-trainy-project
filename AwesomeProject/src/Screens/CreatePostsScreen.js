import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

const CreatePostScreen = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.pictureContainer}>
            <TouchableOpacity style={styles.cameraIconContainer}>
              <FontAwesome name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={{
                marginBottom: 32,
                fontSize: 16,
                color: "#BDBDBD",
              }}>
              Завантажте фото
            </Text>

            <TextInput
              style={[styles.input, styles.notLast]}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
            />
            <View style={styles.placeField}>
              <View style={styles.mapIcon}>
                <Feather name="map-pin" size={24} color="#BDBDBD" />
              </View>
              <TextInput
                style={[styles.input, styles.last]}
                placeholder="Місцевість..."
                placeholderTextColor="#BDBDBD"
              />
            </View>
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => {
                //   navigation.navigate("...");
              }}>
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  color: "#BDBDBD",
                }}>
                Опубліковати
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.trashButton}>
              <Feather name="trash-2" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    backgroundColor: "#FFFFFF",
    paddingTop: 32,
  },

  topContainer: { flex: 0 },

  pictureContainer: {
    alignItems: "center",
    justifyContent: "center",

    width: 343,
    height: 240,

    marginBottom: 8,

    backgroundColor: "#F6F6F6",

    borderRadius: 8,
    borderWidth: 1,

    borderColor: "#E8E8E8",
  },

  cameraIconContainer: {
    alignItems: "center",
    justifyContent: "center",

    width: 60,
    height: 60,

    borderRadius: 30,

    backgroundColor: "#FFFFFF",
  },

  input: {
    height: 50,

    paddingTop: 16,
    paddingBottom: 15,

    fontSize: 16,
  },

  placeField: {
    width: 343,

    flexDirection: "row",

    marginBottom: 32,
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
  },

  mapIcon: {
    alignItems: "center",

    justifyContent: "center",

    marginRight: 4,
  },
  notLast: {
    marginBottom: 16,
    width: 343,
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
  },

  submitBtn: {
    width: 343,
    height: 51,

    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,

    backgroundColor: "#F6F6F6",

    borderRadius: 100,
  },

  bottomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 34,
  },

  trashButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});

export default CreatePostScreen;
