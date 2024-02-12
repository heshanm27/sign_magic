import { View, Text,Pressable } from 'react-native'
import React from 'react'

type Props = {
    onPress: () => void
    title: string
    color: string
    textColor?: string
    disabled?: boolean,
    loading?: boolean,
    Icon?: JSX.Element
}

const RoundedButton = ({
    onPress,
    title,
    color,
    disabled = false,
    loading = false,
    Icon
}: Props) => {
  return (
    <Pressable disabled={disabled} className={`bg-${color} w-full p-2 mt-2 mb-2 rounded-md flex flex-row`} onPress={() => onPress()}>
      <Text className={``}>{title}</Text>
      {Icon}
    </Pressable>
  )
}

export default RoundedButton