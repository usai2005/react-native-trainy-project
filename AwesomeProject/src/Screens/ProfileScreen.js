import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import backgroundImage from "../../assets/images/photo-bg.jpg";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImg}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarImg}
              source={require("../../assets/images/natali-romanova-avatar.png")}
              alt="closeBtn"
            />
            <TouchableOpacity>
              <Image
                style={styles.closeAvatarBtn}
                source={require("../../assets/images/closeAvatar.png")}
                alt="closeAvatarBtn"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => navigation.navigate("Login")}>
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: 500,
              fontSize: 30,
              lineHeight: 35.16,
              letterSpacing: 0.01,
              textAlign: "center",
              marginBottom: 32,
            }}>
            Natali Romanova
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },

  profileContainer: {
    position: "relative",

    width: "100%",

    flex: 1,
    alignItems: "center",

    marginTop: 119,

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

  closeAvatarBtn: {
    position: "absolute",
    right: -18,
    bottom: 12,

    width: 37,
    height: 37,
  },

  backgroundImg: {
    flex: 1,
    justifyContent: "flex-end",
  },

  avatarImg: {
    width: 120,
    height: 120,
  },

  logoutBtn: {
    position: "absolute",
    top: 22,
    right: 16,
  },
});

export default ProfileScreen;
