
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import Spacing from '@src/theme/Spacing';
import Dimensions from '@src/theme/Dimensions';
import * as changeCase from "change-case";
import { useNavigation } from '@react-navigation/native';
type Props = {
  title: string;
  completed: number;
  total: number;
  uri: string;
  url:string
  isFirst?: boolean;
  isLast?: boolean;
  backgroundColor?: string;
  borderColor?: string;
}


export default function DifficultyLevelCard({ backgroundColor,borderColor,title, completed, total, uri,url ,isFirst,isLast}: Props) {
 const navigate = useNavigation<any>()
 
  return (
    <Pressable onPress={()=>navigate.navigate(url,{
        id:title
    })}>
    <View
    style={{
      display:"flex",
      backgroundColor:backgroundColor,
      padding:Spacing.EXTRA_SMALL,
      borderRadius:40,
      marginTop:isFirst || isLast ?  Spacing.SMALL: 0,
      marginBottom:isFirst || isLast ?  Spacing.SMALL: 0,
    }}
    >
    <View style={{
          display: "flex",
          borderRadius: 40,
          borderWidth: 10,
          borderColor: borderColor,
          padding: Spacing.SMALL,
          flexDirection: "row",
          justifyContent: "space-around"
    }}>
      <View >
        <Image source={{
          uri:uri
        }} style={{
          width: 150*Dimensions.RESPONSIVE_WIDTH,
          height: 150* Dimensions.RESPONSIVE_WIDTH,
          borderRadius: 4,
          resizeMode: 'contain'

        }} />
      </View>
      <View 
      style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignContent:"center",
      }}
      >
      <Text 
      style={{
        textAlign:"left",
        fontWeight:"bold",
        fontSize:30,
        color:borderColor
      }}
      
      >
          {changeCase.capitalCase(title)}
        </Text>
        <Text 
     style={{
      textAlign:"left",
      fontWeight:"bold",
      fontSize:28,
      color:"#48280F"
    }}
      >
          Completed : {completed} / {total}
        </Text>
        
      </View>
    </View>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {


  },
  beginnerTypo: {
    textAlign: "left",
    fontWeight: "800",
    top: "50%",
    position: "absolute",
  },

});