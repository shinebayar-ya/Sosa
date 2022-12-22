import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";

const MatchScreen = () => {
  const navigation = useNavigation();
  //   const { params } = useRoute();

  //   const { loggedInProfile, userSwiped } = params;

  return (
    <View className="flex items-center h-full bg-red-500 opacity-80">
      <View className="flex-row justify-evenly p-5">
        <Image
          className="h-20 w-full rounded-xl mt-10"
          source={{
            uri: "https://e9digital.com/love-at-first-website/images/its-a-match.png",
          }}
        />
      </View>
      <Text className="text-white text-center mt-5 font-bold">
        You and Dulguun have liked each other.
      </Text>
      <View className="flex-row justify-evenly">
        <Image
          className="h-32 w-32 rounded-full m-5"
          source={{
            uri: "https://media.istockphoto.com/id/973481674/photo/stylish-man-posing-on-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=HPsxAehfhQ2qVB7HGui-mbd0DhV59lybxJ_E1eweOCQ=",
          }}
        />
        <Image
          className="h-32 w-32 rounded-full m-5"
          source={{
            uri: "https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/317857560_683893763107395_5173680035371890913_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=60br5_Uq-9EAX9gLVa3&_nc_ht=scontent.fuln6-1.fna&oh=00_AfBUeVANck_Vnwdz3s2VgMq4j0mkdlKcJjXIXPXE29yb-Q&oe=63A89475",
          }}
        />
      </View>
      <TouchableOpacity
        className="bg-white w-[80%] py-3 rounded-full mt-20 justify-center items-center"
        onPress={() => {
          navigation.navigate("Chat");
        }}
      >
        <Text className="text-xl font-bold">Send a message</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MatchScreen;
