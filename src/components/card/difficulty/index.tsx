
import { StyleSheet, Text, View,Image } from 'react-native'
import bg from './../../../assets/img/Mathematics.png'

type Props={
  title: string;
  completed: number;
  total: number;
  uri: string;
}


export default function DifficultyLevelCard({title,completed,total,uri}:Props) {
  return (
    <View style={styles.groupParent}>
    <View style={[styles.vectorParent, styles.groupChildPosition]}>
      <Image
        style={[styles.groupChild, styles.groupPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Text style={[styles.completed8, styles.beginnerTypo]}>
        Completed : 8 / 10
      </Text>
      <View style={[styles.rectangleWrapper, styles.vectorParentPosition]}>
        <View style={[styles.groupItem, styles.groupPosition]} />
      </View>
      <Text style={[styles.beginner, styles.beginnerTypo]}>Beginner</Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    marginTop: -76,
    height: 152,
    width: 346,
  },
  groupPosition: {
    borderRadius: 20,
    top: "50%",
    position: "absolute",
  },
  beginnerTypo: {
    textAlign: "left",
    fontWeight: "800",
    top: "50%",
    position: "absolute",
  },
  vectorParentPosition: {
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    left: 0,
    marginTop: -76,
    height: 152,
    width: 346,
  },
  completed8: {
    marginTop: -13,
    left: 149,
    fontSize: 13,
    color: "#48280f",
  },
  groupItem: {
    marginTop: -65,
    left: -5,
    backgroundColor: "#fff3bf",
    borderStyle: "solid",
    borderColor: "#ffa431",
    borderWidth: 5,
    width: 338,
    height: 130,
  },
  rectangleWrapper: {
    marginTop: -59,
    left: 9,
    width: 328,
    height: 120,
  },
  beginner: {
    marginTop: -28,
    left: 166,
    fontSize: 20,
    color: "#88684f",
  },
  vectorParent: {
    top: "50%",
    position: "absolute",
  },
  groupParent: {
    height: 152,
    width: 346,
  },
});