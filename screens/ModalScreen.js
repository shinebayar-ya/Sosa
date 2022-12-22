import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const ModalScreen = () => {
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);

  const incompleteForm = !image || !job || !age;

  const updateUserProfile = () => {};
  return (
    <View className="flex-1 items-center pt-1">
      <Image
        className="h-20 w-full"
        resizeMode="contain"
        source={{
          uri: "https://links.papareact.com/2pf",
        }}
      />
      <Text className="text-xl text-gray-500 p-2 font-bold">Welcome {}</Text>
      <Text className="text-center p-4 font-bold text-red-400 w-[70%]">
        Step 1: The Profile Pic
      </Text>
      <TextInput
        value={image}
        onChangeText={setImage}
        className="text-start text-xl p-2 pt-0 w-[70%] border-2 border-gray-300 rounded-xl "
        placeholder="Enter a Profile Pic URL"
      />
      <Text className="text-center p-4 text-red-400 font-bold w-[70%]">
        Step 2: The Job
      </Text>
      <TextInput
        value={job}
        onChangeText={setJob}
        className="text-start text-xl p-2 pt-0 w-[70%] border-2 border-gray-300 rounded-xl"
        placeholder="Enter your job"
      />
      <Text className="text-center p-4 text-red-400 font-bold w-[70%]">
        Step 1: The Age
      </Text>
      <TextInput
        value={age}
        onChangeText={setAge}
        className="text-start text-xl p-2 pt-0 w-[70%] border-2 border-gray-300 rounded-xl"
        placeholder="Enter your age"
      />
      <TouchableOpacity
        disabled={incompleteForm}
        className={
          incompleteForm
            ? "w-64 p-3 rounded-xl absolute bottom-10 bg-gray-400"
            : "w-64 p-3 rounded-xl absolute bottom-10 bg-red-400"
        }
        onPress={updateUserProfile}
      >
        <Text className="text-center text-white text-xl">Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
