import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const ChatRow = ({ matchDetails }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="flex-row justify-start items-start py-3 px-5 rounded-lg bg-white mt-1"
      onPress={() => navigation.navigate("Message", { matchDetails })}
    >
      <Image
        className="h-16 w-16 mr-4 rounded-full"
        source={{
          uri: matchDetails.photoURL,
        }}
      />
      <View>
        <Text className="text-lg font-semibold">{matchDetails.firstName}</Text>
        <Text>Say hi!</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRow;
