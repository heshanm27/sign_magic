import {
  View,
  Text,
  FlatList,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Avatar, Card, Header } from "@rneui/themed";
import { useTranslation } from "react-i18next";

import LangImg from "../../assets/lang/home.png";
import EnvImg from "../../assets/env/home.png";
import MathImg from "../../assets/math/home.png";
import GenImg from "../../assets/social/home.png";

import { horizontalScale, verticalScale } from "@src/utils/metrics";
import LinearGradient from "react-native-linear-gradient";
import Spacing from "@src/theme/Spacing";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import  Icon  from "react-native-vector-icons/Ionicons";
import MyDrawer from "@src/routes/drawer";
type Props = {};
interface HomeCard {
  title: string;
  description: string;
  image: any;
  color: string;
  url: string;
}
const Home = (props: Props) => {
  const navigation = useNavigation<any>();
  const { t } = useTranslation();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser()  {
     const firestoreUser =  await firestore().collection("user").doc(auth().currentUser?.uid).get();
      console.log("firestoreUser",firestoreUser);
      setUser(firestoreUser.data());
    }
    getUser();
    console.log("user",user);
  }, []);

  const HomeCards: HomeCard[] = [
    {
      description:
        "The idea with React Native Elements is more about component structure than actual design.",
      title:t("lang_home"),
      image: LangImg,
      color: "#FEDB85",
      url: "LanguageDifficulty",
    },
    {
      description:
        "The idea with React Native Elements is more about component structure than actual design.",
      title: t("math_home"),
      image: MathImg,
      color: "#69DFE5",
      url: "MathDifficulty",
    },
    {
      description:
        "The idea with React Native Elements is more about component structure than actual design.",
      title: t("env_home"),
      image: EnvImg,
      color: "#E9FFB6",
      url: "EnvironmentDifficulty",
    },
    {
      description:
        "The idea with React Native Elements is more about component structure than actual design.",
      title: t("gen_home"),
      image: GenImg,
      color: "#FEB3C5",
      url: "SocialEduDifficulty",
    },
  ];

  return (
    <SafeAreaView className="flex flex-1 ">
      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-evenly",
          padding: Spacing.MEDIUM,
          backgroundColor: "#72B056",
        }}
      >
        <View style={{
        
          justifyContent:"flex-end",
          alignItems:"flex-end",
          flexDirection:"row",

        }}>
            <Icon name="menu" onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}  size={40} color="white" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
            margin: 8,
            borderRadius: Spacing.LARGE,
            shadowColor: "#000",
            shadowOffset: {
              width: 1,
              height: 1,
            },
            shadowOpacity: 1,
            shadowRadius: 8,
            elevation: 15, // For Android devices
            backgroundColor: "#fff",
          }}
        >
          <Avatar
            size={"medium"}
            rounded
            source={{uri:auth()?.currentUser?.photoURL ??""}}
            containerStyle={{ backgroundColor: "#6733b9" }}
          />
          <Text
          className="text-black text-lg font-semibold text-center"
          >{auth()?.currentUser?.displayName ?? ""}</Text>
          <View>
            <Text className="text-lg font-semibold text-black text-center">Exp Level</Text>
            <Text className="text-black">
              {user?.level ?? ""}
            </Text>
          </View>
        </View>
        <View>
          <Text className="text-4xl font-bold font mt-2 p-1 text-white">
            {t("lets-play")}
          </Text>
          <Text className="text-1xl font-bold font mb-2 p-1 text-white">
            {" "}
            {t("choose-category")}
          </Text>
        </View>
        <View>
          <FlatList
            data={HomeCards}
            renderItem={({ item, index }) => {
              return (
                <View
                  key={`home-card${index}`}
                  style={{
                    flex: 1,
                    margin: 8,
                    borderRadius: 16,
                  }}
                >
                  <Pressable onPress={() => navigation.navigate(item.url)}>
                    <View
                      style={{
                        flex: 1,
                        borderTopEndRadius: 16,
                        borderTopStartRadius: 16,
                        padding: 16,
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{
                          width: 115,
                          height: 150,
                          borderRadius: 4,
                          resizeMode: "contain",
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flex: 1,
                        borderBottomEndRadius: 16,
                        borderBottomStartRadius: 16,
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        padding: 8,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          textAlign: "center",
                          color: "#fff",
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </Pressable>
                </View>
              );
            }}
            numColumns={2}
          />
        </View>
      </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default Home;
