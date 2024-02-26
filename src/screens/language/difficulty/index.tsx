import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DifficultyLevelCard from "@src/components/card/difficulty";
import { Image } from "react-native-svg";

type Props = {};

const LanguageDifficulty = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [difficulty, setDifficulty] = useState<any>([]);

  // Function to get the difficulty data
  async function getDifficulty() {
    const languageQuerySnapshot = await firestore()
      .collection("language")
      .orderBy("order")
      .get();
    // Get the size of each difficulty level and set completed questions to 0
    const difficultyData = await Promise.all(
      languageQuerySnapshot.docs.map(async (languageDoc) => {
        const questionSnapshot = await languageDoc.ref
          .collection("question")
          .get();
        return {
          id: languageDoc.id,
          size: questionSnapshot.size,
          completedQuestions: 0,
          img: languageDoc.data().img,
        };
      })
    );
    return difficultyData;
  }

  async function getUserGameHistory(difficultyData: any) {
    const userGameHistoryQuerySnapshot = await firestore()
      .collection("userGameHistory")
      .doc("69eXeT4xIUe2iIVu06ODOlPGJyL2")
      .collection("userGameHistory")
      .get();
    userGameHistoryQuerySnapshot.forEach((doc) => {
      const data = doc.data();
      const difficultyLvl = data.difficultyLvl;
      // Update completed questions in difficultyData if the difficulty level exists
      const difficultyIndex = difficultyData.findIndex(
        (difficulty: any) => difficulty.id === difficultyLvl
      );
      if (difficultyIndex !== -1) {
        difficultyData[difficultyIndex].completedQuestions =
          (difficultyData[difficultyIndex].completedQuestions || 0) + 1;
      }
    });
    return difficultyData;
  }

  useEffect(() => {
    // Use async function to fetch data and update state
    async function fetchData() {
      const difficultyData = await getDifficulty();
      const updateDifficulityData = await getUserGameHistory(difficultyData); // Pass difficultyData to update completed questions
      setDifficulty(updateDifficulityData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView className="flex flex-1">
      <View className="bg-custom-language flex flex-1 p-3 ">
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ScrollView>
            <View>
              <Text className="text-4xl font-bold">Select Difficulty </Text>
              <Text className="text-1xl font-medium">
                {" "}
                Select a difficulty to start playing
              </Text>

              {/* {difficulty.map((item: any, index: number) => {
                return (
                  <View
                    key={`card-${index}`}
                    className="bg-white rounded-md p-3 m-3"
                  >
                    <Image href={{ uri: item.img }} width={100} height={100} />
                    <Text>{item.id}</Text>
                    <Text>{item.size}</Text>
                    <Text>{item.completedQuestions}</Text>
                  </View>
                );
              })} */}
              <DifficultyLevelCard title="Beginner" completed={10}  total={20}  uri="w"/>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default LanguageDifficulty;
