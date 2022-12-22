import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ChatRow from "./ChatRow";

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

const ChatList = () => {
  // const [matches, setMatches] = useState([]);

  useEffect(() => {});

  return DUMMY_DATA.length > 0 ? (
    <FlatList
      className="h-full"
      data={DUMMY_DATA}
      renderItem={({ item }) => <ChatRow matchDetails={item} />}
    />
  ) : (
    <View className="p-5">
      <Text className="text-center font-bold text-lg">
        No matches at the moment.
      </Text>
    </View>
  );
};

export default ChatList;
