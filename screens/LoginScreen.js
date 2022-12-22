import {
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { promptAsync } = useAuth();
  return (
    <View className="flex-1">
      <ImageBackground
        resizeMode="cover"
        className="flex-1 justify-end"
        source={{ uri: "https://tinder.com/static/tinder.png" }}
      >
        <TouchableOpacity className="bg-white p-4 rounded-2xl items-center m-20">
          <Text className="font-semibold text-center">
            Sign in & get swiping
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
