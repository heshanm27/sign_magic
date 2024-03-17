import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Spacing from "@src/theme/Spacing";
import { useNavigation } from "@react-navigation/native";
import { normalize } from "@src/theme/Typography";


export interface LevelData {
  answer:     string;
  completed?: boolean;
  id:         string;
  image:      string;
  qNo:        number;
  question:   string;
  score?:     number;
  difficulty: string;
}


type Props = {
  title: string;
  url: string;
  backgroundColor?: string;
  borderColor?: string;
  isFirst?: boolean;
  isLast?: boolean;
  levelData:LevelData
};

export default function LevelCard({
  title,
  url,
  backgroundColor = "#fff3bf",
  borderColor = "#ffa431",
  isFirst = false,
  isLast = false,
  levelData
}: Props) {
  const navigate = useNavigation<any>();

  return (
    <Pressable onPress={() => navigate.navigate(url,{
      levelData
    })}>
      <View
        style={{
          display: "flex",
          backgroundColor: backgroundColor,
          padding: Spacing.EXTRA_SMALL,
          borderRadius: 10,
          marginTop: isFirst || isLast ? Spacing.SMALL : 0,
          marginBottom: isFirst || isLast ? Spacing.SMALL : 0,
        }}
      >
        <View
          style={{
            display: "flex",
            borderRadius: 10,
            borderWidth: 10,
            borderColor: borderColor,
            padding: Spacing.SMALL,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: normalize(40),
              color: "#48280F",
            }}
          >
            Level
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: normalize(50),
              color: "#48280F",
            }}
          >
            {title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    borderRadius: 40,
    borderWidth: 10,
    borderColor: "#ffa431",
    padding: Spacing.SMALL,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  beginnerTypo: {
    textAlign: "left",
    fontWeight: "800",
    top: "50%",
    position: "absolute",
  },
});
