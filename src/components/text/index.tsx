import {  Text } from 'react-native'


type Props = {
    text: string,
    color?: string,
    size?:"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" ,
    align?: "left" | "center" | "right" | "justify" | "start"|"end"
    
}

const CustomText = ({
    text
    ,size="md",
    align="center"
}: Props) => {
  return <Text
  className={`text-${size} text-${align} `}
  >{text}</Text>
 
}

export default CustomText