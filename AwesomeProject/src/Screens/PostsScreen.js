import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import avatarImage from "../../assets/images/natali-romanova-avatar.png";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={avatarImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 32,
    paddingLeft: 16,
  },

  userContainer: { flex: 0, flexDirection: "row", alignItems: "center" },
  userInfo: {
    marginLeft: 8,
  },

  userName: {
    fontSize: 13,
    color: "#212121",
    fontWeight: 700,
  },

  userEmail: {
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.80)",
  },
});

export default PostsScreen;
