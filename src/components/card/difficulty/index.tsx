
import { StyleSheet, Text, View, Image } from 'react-native'
import bg from './../../../assets/img/Mathematics.png'
import GenImg from '@src/assets/env/home.png'
type Props = {
  title: string;
  completed: number;
  total: number;
  uri: string;
}


export default function DifficultyLevelCard({ title, completed, total, uri }: Props) {
  return (
    <View
    style={{
      display:"flex",
      backgroundColor:"#fff3bf",
      padding:10,
      borderRadius:40
    }}
    
    >
    <View style={styles.card}>
      <View style={{
        width: 100,
        height: 100
      }}>
        <Image source={GenImg} style={{
          width: 100,
          height: 100,
          borderRadius: 4,
          resizeMode: 'contain'

        }} />
      </View>
      <View>
        <Text style={{
          fontSize: 10,
          color: "white"
        }}>
          Completed : 8 / 10
        </Text>
        <Text style={{
          fontSize: 10,
          color: "white"
        }}>Beginner</Text>
      </View>
      <View style={[styles.groupChildPosition]}>
        {/* <Image
        style={[styles.groupChild, styles.groupPosition]}
        resizeMode="cover"
        source={GenImg}
      /> */}
        {/* 
      <View style={[styles.rectangleWrapper, styles.vectorParentPosition]}>
        <View style={[styles.groupItem, styles.groupPosition]} />
      </View> */}

      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    borderRadius: 40,
    borderWidth: 10,
    borderColor: "#ffa431",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-evenly"

  },
  groupChildPosition: {
    // left: 0,
    // marginTop: -76,
    // height: 152,
    // width: 346,
  },
  // groupPosition: {
  //   borderRadius: 20,
  //   top: "50%",
  //   position: "absolute",
  // },
  beginnerTypo: {
    textAlign: "left",
    fontWeight: "800",
    top: "50%",
    position: "absolute",
  },
  // vectorParentPosition: {
  //   top: "50%",
  //   position: "absolute",
  // },
  // groupChild: {
  //   left: 0,
  //   marginTop: -76,
  //   height: 152,
  //   width: 346,
  // },
  // completed8: {
  //   // marginTop: -13,
  //   // left: 149,
  //   // fontSize: 13,
  //   // color: "#48280f",
  // },
  // groupItem: {
  //   marginTop: -65,
  //   left: -5,
  //   backgroundColor: "#fff3bf",
  //   borderStyle: "solid",
  //   borderColor: "#ffa431",
  //   borderWidth: 5,
  //   width: 338,
  //   height: 130,
  // },
  // rectangleWrapper: {
  //   // marginTop: -59,
  //   // left: 9,
  //   // width: 328,
  //   // height: 120,
  // },
  // beginner: {
  //   // marginTop: -28,
  //   // left: 166,
  //   // fontSize: 20,
  //   // color: "#88684f",
  // },
  // vectorParent: {
  //   top: "50%",
  //   position: "absolute",
  // },
  // groupParent: {
  //   height: 152,
  //   width: 346,
  // },
});