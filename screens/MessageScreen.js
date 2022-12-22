import {
  Keyboard,
  FlatList,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Header from "../components/Header";
import { useRoute } from "@react-navigation/native";
import SenderMessage from "../components/SenderMessage";
import ReceiverMessage from "../components/ReceiverMessage";

const messages = [
  {
    message: "Сайн уу?",
    id: 1,
    userId: 1,
  },
  {
    message: "Сайн сайн.",
    id: 2,
    userId: 2,
  },
  {
    message: "Чамтай танилцаж болох уу?",
    id: 3,
    userId: 1,
  },
  {
    message: "Бололгүй яахав.",
    id: 4,
    userId: 2,
  },
  {
    message: "Намайг Шинэбаяр гэдэг. Харин чамайг",
    id: 5,
    userId: 2,
  },
  {
    message: "Ммм. Намайг апп гэдэг хаха.",
    id: 6,
    userId: 1,
  },
  {
    message: "Ямар хөгжилтэй юм бээ.",
    id: 7,
    userId: 2,
  },
  {
    message: "Чи өөр онигоо мэдэх үү?",
    id: 8,
    userId: 2,
  },
];

const MessageScreen = () => {
  const [input, setInput] = useState("");
  //   const [messages, setMessages] = useState([]);
  const { params } = useRoute();

  const { matchDetails } = params;

  const sendMessage = () => {};

  return (
    <SafeAreaView className="flex-1">
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
        showHideTransition="fade"
        hidden={false}
      />
      <Header title={matchDetails.firstName} callEnabled={true} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            data={messages}
            className="pl-4"
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              item.userId == 1 ? (
                <SenderMessage message={item.message} />
              ) : (
                <ReceiverMessage message={item.message} />
              )
            }
          />
        </TouchableWithoutFeedback>
        <View className="flex-row bg-white justify-between items-center bordgray-200 px-5 py-2 m-4 rounded-xl">
          <TextInput
            className="h-10 text-lg"
            placeholder="Send message .."
            onChangeText={setInput}
            value={input}
            onSubmitEditing={sendMessage}
          />
          <Button onPress={sendMessage} title="Илгээх" color={"#FF5864"} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MessageScreen;
