import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const Header = ({ title, callEnabled }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row p-2 items-center justify-between">
      <View className="flex flex-row items-center">
        <TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={32} color="#FF5864" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold pl-2">{title}</Text>
      </View>

      {callEnabled && (
        <TouchableOpacity className="rounded-full justify-center items-center h-10 w-10 m-4 p-3 bg-red-200">
          <Foundation name="telephone" color="#FF5864" size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
