import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

const AuthContext = createContext({
  //   expoClientId: "",
  iosClientId:
    "908356547933-srf0lcq4o14nmqt2fq3h3lko0uaf9gc3.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
});

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();
  const [auth, setAuth] = useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "844869342549-crmkmbfnkms9s40dnelrfom7ge4ia591.apps.googleusercontent.com",
    iosClientId:
      "844869342549-0nkf4hu0kmdvpbf0vi4chp3ho6ajhkm4.apps.googleusercontent.com",
    expoClientId:
      "844869342549-oegss8sapcuno9r32v3ghnerda2mokqi.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setAuth(response);

      const persistAuth = async () => {
        await AsyncStorage.setItem("auth", JSON.stringify(response));
      };
      persistAuth();
    }
  }, [response]);

  useEffect(() => {
    const getPersistedAuth = async () => {
      const jsonValue = await AsyncStorage.getItem("auth");
      if (jsonValue != null) {
        setAuth(JSON.parse(jsonValue));
        console.log(auth);
      }
    };
  });

  async function getUserData() {
    let userInfoReponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: {
          Authorization: `Bearer ${auth.authentication.accessToken}`,
        },
      }
    );

    userInfoReponse.json().then((data) => {
      setUserInfo(data);
    });
  }

  function showUserInfo() {
    if (userInfo) {
      return (
        <View className="flex-1">
          <Image source={{ uri: userInfo.picture }} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>Email: {userInfo.email}</Text>
        </View>
      );
    }
  }
  return (
    <AuthContext.Provider
      value={{
        user: "Shinee",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
