import {Pressable } from 'react-native'


type Props = {
  onPress: () => void,
  style:string,
  icon:JSX.Element
}

const CircularButton = ({
  onPress,
  style,
  icon
}: Props) => {
  return (


    <Pressable className={`mt-2 mb-2 p-2 rounded-full ${style}`  
  } onPress={() => onPress()}>
     {icon}
    </Pressable>
  )
}

export default CircularButton