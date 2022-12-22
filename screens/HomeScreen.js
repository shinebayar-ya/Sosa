import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/core";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import { StatusBar } from "expo-status-bar";

const DUMMY_DATA = [
  {
    firstName: "Shinebayar",
    lastName: "Yadmaa",
    job: "Software Developer",
    photoURL:
      "https://scontent.fuln6-2.fna.fbcdn.net/v/t39.30808-1/289582530_732754881370855_5574473562961801099_n.jpg?stp=c40.40.160.160a_dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=OxWI7SyU0OoAX931-KX&_nc_ht=scontent.fuln6-2.fna&oh=00_AfCr696r5DPZiJwBUF56lqS4HhT-kieikq-ouuU6EmwwCw&oe=63A8C8BD",
    age: 22,
  },
  {
    firstName: "Bolor",
    lastName: "B",
    job: "Finance",
    photoURL:
      "https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/320592629_2223376037869274_230172236327160375_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3rjXeH_8rTkAX9gpQrz&tn=7QMfMCc2w7p6iZuy&_nc_ht=scontent.fuln6-1.fna&oh=00_AfA6EbINiftOxJmPg_aXw0SxrpGrdna3gAvb-4QW9fAbNA&oe=63A8B610",
    age: 22,
  },
  {
    firstName: "Nomiko",
    lastName: "D",
    job: "Software Developer",
    photoURL:
      "https://scontent.fuln6-2.fna.fbcdn.net/v/t1.6435-9/123265187_796224380922815_7766135071935308168_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ftwi6L6imsoAX-AD6pe&tn=7QMfMCc2w7p6iZuy&_nc_ht=scontent.fuln6-2.fna&oh=00_AfAtfAopfiyQGAtT-X7yoTOA9sgWN5vUhsKu6cSlg1_yAw&oe=63CB0C94",
    age: 22,
  },
  {
    firstName: "Sara",
    lastName: "D",
    job: "Doctor",
    photoURL:
      "https://scontent.fuln6-2.fna.fbcdn.net/v/t39.30808-6/278840773_2866861540283224_5639155064848767796_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=HOmZqDicnSIAX_KWpjh&_nc_ht=scontent.fuln6-2.fna&oh=00_AfCULsUEa_UUVo0kVrfAFIXucsoXL-622IxR2ibAPl2aKw&oe=63A874E0",
    age: 22,
  },
  {
    firstName: "Yuka",
    lastName: "B",
    photoURL:
      "https://scontent.fuln6-2.fna.fbcdn.net/v/t39.30808-6/291655875_558146765788530_8561636654342976126_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=tE-Q1umdHdgAX9DoqqG&_nc_ht=scontent.fuln6-2.fna&oh=00_AfA-AfGFNlwctHsh9wcxCfs4hYiiU0cRLnS1iW0ZQwbjxg&oe=63A8074E",
    age: 21,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const swipeRef = useRef();

  // useEffect(() => {
  //   onSnapshot((), (snapshot) => {
  //     if (!snapshot.exists) {
  //       navigation.navigate('Modal')
  //     }
  //   })
  // })

  return (
    <SafeAreaView className="flex-1">
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
        showHideTransition="fade"
        hidden={false}
      />
      {/* header */}
      <View className="items-center flex flex-row justify-between px-5">
        <TouchableOpacity>
          <Image
            className="h-10 w-10 rounded-full"
            source={{
              uri: "https://tinder.com/static/tinder.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
          <Image className="h-12 w-12" source={require("../logo.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Ionicons name="chatbubbles-sharp" size={40} color="#FD3A73" />
        </TouchableOpacity>
      </View>
      {/* end of header */}
      <View className="flex-1 -mt-6">
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          onSwipedLeft={() => {
            console.log("Swipe NOPE");
          }}
          onSwipedRight={() => {
            console.log("Swipe MATCH");
          }}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  // textAlign: "left",
                  color: "#00FF00",
                },
              },
            },
          }}
          renderCard={(card) =>
            card ? (
              <View className="bg-white h-5/6 rounded-xl">
                <Image
                  className="h-full w-full rounded-xl"
                  source={{ uri: card.photoURL }}
                />
                <View
                  className="absolute bottom-0 bg-white w-full flex-row justify-between 
                          items-center h-20 px-6 py-2 rounded-b-xl shadow-xl"
                >
                  <View>
                    <Text className="text-xl font-bold">
                      {card.firstName} {card.lastName}
                    </Text>
                    <Text>{card.job}</Text>
                  </View>
                  <Text className="text-2xl font-bold">{card.age}</Text>
                </View>
              </View>
            ) : (
              <View className="relative bg-white h-5/6 rounded-xl justify-center items-center">
                <Text className="font-bold pb-5">No more profiles</Text>
                <Image
                  className="h-20 w-20"
                  height={100}
                  width={100}
                  source={{ uri: "https://links.papareact.com/6gb" }}
                />
              </View>
            )
          }
        />
      </View>
      <View className="flex flex-row justify-evenly pb-5">
        <TouchableOpacity
          className="items-center justify-center bg-red-200 rounded-full w-16 h-16"
          onPress={() => swipeRef.current.swipeLeft()}
        >
          <Entypo name="cross" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center justify-center bg-green-200 rounded-full w-16 h-16"
          onPress={() => swipeRef.current.swipeRight()}
        >
          <AntDesign name="heart" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
