import { View, Text } from "react-native";
import React from "react";

const ReceiverMessage = ({ message }) => {
  return (
    <View className="self-start flex flex-start bg-[#FD297B] rounded-lg rounded-tr-none px-5 py-3 mx-3 my-2">
      <Text className="text-white">{message}</Text>
    </View>
  );
};

export default ReceiverMessage;
