
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import Spacing from '@src/theme/Spacing';
import { useNavigation } from '@react-navigation/native';
import { normalize } from '@src/theme/Typography';


type Props = {
  title:string,
  url:string,
}


export default function LevelCard({
  title,url
 }: Props) {
  const navigate = useNavigation<any>()

  return (
    <Pressable  onPress={()=>navigate.navigate(url)}>
      <View
        style={{
          display: "flex",
          backgroundColor: "#fff3bf",
          padding: Spacing.EXTRA_SMALL,
          borderRadius: Spacing.LARGE
        }}
      >
        <View style={{
          display:"flex",flexDirection:"row",
          justifyContent:"space-evenly"
        }}>
          <View 
          style={{
            display: "flex",
            borderRadius: Spacing.SMALL,
            borderWidth: 8,
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
                  fontSize: normalize(20),
                  color: "#48280F"
                }}
            >Level</Text>
            <Text
                 style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: normalize(40),
                  color: "#48280F"
                }}
            >{title}</Text>
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
                fontSize: normalize(20),
                color: "#48280F"
              }}
            >
            Click here to play
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