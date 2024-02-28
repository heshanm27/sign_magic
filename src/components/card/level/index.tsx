import { View, Text, StyleSheet,Image } from 'react-native'

import GenImg from '@src/assets/env/home.png'
export default function index() {
  return (
    <View style={styles.vectorParent}>
    <Image
      style={[styles.groupChild, styles.groupLayout]}
      resizeMode="cover"
      source={GenImg}
    />
    <Text style={[styles.completed8, styles.textTypo]}>
      Completed : 8 / 10
    </Text>
    <Text style={[styles.score173, styles.textTypo]}>Score : 173</Text>
    <View style={styles.rectangleParent}>
      <View style={[styles.groupItem, styles.groupLayout]} />
      <Text style={[styles.level, styles.textTypo]}>Level</Text>
      <Text style={[styles.text, styles.textTypo]}>1</Text>
    </View>
    <Text style={[styles.clickHereTo, styles.textTypo]}>
      Click Here To Play
    </Text>
  </View>
  )
}

const styles = StyleSheet.create({
    groupLayout: {
      borderRadius: 10,
      position: "absolute",
    },
    textTypo: {
      textAlign: "left",
      fontWeight: "800",
      position: "absolute",
    },
    groupChild: {
      top: 0,
      left: 0,
      width: 346,
      height: 152,
    },
    completed8: {
      top: 63,
      color: "#5a3518",
      textAlign: "left",
      fontWeight: "800",
      fontSize: 10,
      left: 149,
    },
    score173: {
      top: 86,
      color: "red",
      textAlign: "left",
      fontWeight: "800",
      fontSize: 10,
      left: 149,
    },
    groupItem: {
      top: -5,
      left: -5,
      backgroundColor: "#ffe5ec",
      borderStyle: "solid",
      borderColor: "red",
      borderWidth: 5,
      width: 127,
      height: 144,
    },
    level: {
      top: 15,
      left: 22,
      fontSize: 29,
      color: "red",
  
      textAlign: "left",
      fontWeight: "800",
    },
    text: {
      top: 58,
      left: 43,
      fontSize: 47,

      color: "#fe80a0",
      textAlign: "left",
      fontWeight: "800",
    },
    rectangleParent: {
      top: 9,
      left: 9,
      width: 117,
      height: 134,
      position: "absolute",
    },
    clickHereTo: {
      top: 30,
      fontSize: 10,
      color: "red",

      textAlign: "left",
      fontWeight: "800",
      left: 149,
    },
    vectorParent: {
      flex: 1,
      width: "100%",
      height: 152,
    },
  });