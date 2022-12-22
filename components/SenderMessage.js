import { View, Text } from "react-native";
import React from "react";

const SenderMessage = ({ message }) => {
  return (
    <View className="self-end flex flex-start items-end justify-end bg-[#FF655B] rounded-lg rounded-tr-none px-5 py-3 mx-3 my-2">
      <Text className="text-white">{message}</Text>
    </View>
  );
};

export default SenderMessage;
