
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import Spacing from '@src/theme/Spacing';
import Dimensions from '@src/theme/Dimensions';
import * as changeCase from "change-case";
import { useNavigation } from '@react-navigation/native';
type Props = {

}


export default function LevelCard({ }: Props) {
  const navigate = useNavigation<any>()

  return (
    <Pressable >
      <View
        style={{
          display: "flex",
          backgroundColor: "#fff3bf",
          padding: Spacing.EXTRA_SMALL,
          borderRadius: 40
        }}
      >
        <View style={{
          display:"flex",flexDirection:"row",
          justifyContent:"space-evenly"
        }}>
          <View 
          style={{
            display: "flex",
            borderRadius: 40,
            borderWidth: 10,
            borderColor: "#ffa431",
            padding: Spacing.SMALL,
            flexDirection: "column",
            justifyContent: "space-around",
           
          }}
          >
            <Text
                 style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 50,
                  color: "#48280F"
                }}
            >Level</Text>
            <Text
                 style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 90,
                  color: "#48280F"
                }}
            >1</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "flex-end",
            }}
          >

            <Text
              style={{
                textAlign: "right",
                fontWeight: "bold",
                fontSize: 28,
                color: "#48280F"
              }}
            >
            Click Here To Play
            </Text>

          </View>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    borderRadius: 40,
    borderWidth: 10,
    borderColor: "#ffa431",
    padding: Spacing.SMALL,
    flexDirection: "row",
    justifyContent: "space-around"

  },
  beginnerTypo: {
    textAlign: "left",
    fontWeight: "800",
    top: "50%",
    position: "absolute",
  },

});