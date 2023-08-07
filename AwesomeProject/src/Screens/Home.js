import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { useNavigation } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        style: {
          backgroundColor: "#171F33",
        },

        tabBarShowLabel: false,

        tabBarStyle: [
          {
            height: 83,
            paddingTop: 9,
            paddingBottom: 34,
            borderTopWidth: 1,
            borderColor: "#0000004d",
            paddingHorizontal: 67,
          },
          null,
        ],

        tabBarItemStyle: {
          borderRadius: 20,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "PostsScreen") {
            iconName = "grid";
          } else if (route.name === "CreatePostsScreen") {
            iconName = focused ? "plus" : "plus";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "user" : "user";
          }
          return (
            <View
              style={
                focused
                  ? styles.activeIconContainer
                  : (backgroundColor = "#FFFFFF")
              }>
              <Feather
                name={iconName}
                size={24}
                color={focused ? "#FFFFFF" : "rgba(33, 33, 33, 0.8)"}
              />
            </View>
          );
        },
      })}>
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 500,
          },

          headerTintColor: "#212121",
          headerTitleAlign: "center",
          headerStyle: { borderBottomWidth: 1, borderColor: "#0000004d" },

          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{ marginRight: 16 }}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: {
            display: "none",
          },
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 500,
          },
          headerTintColor: "#212121",
          headerTitleAlign: "center",
          title: "Створити публікацію",
          headerStyle: { borderBottomWidth: 1, borderColor: "#0000004d" },

          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("PostsScreen")}
              style={{ marginLeft: 16 }}>
              <Feather name="arrow-left" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),

          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{ marginRight: 16 }}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  activeIconContainer: {
    alignItems: "center",
    justifyContent: "center",

    width: 70,
    height: 40,

    borderRadius: 20,

    backgroundColor: "#FF6C00",
  },
});

export default Home;
