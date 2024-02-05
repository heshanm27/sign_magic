import { Pressable, Text } from "react-native"

type Props = {
    onPress: () => void
    title: string
    color: string
    textColor?: string
    disabled?: boolean,
    width?: string

}

const actionButton = ({
    onPress,
    title,
    width = 'w-full'

}: Props) => {
    return (
        <Pressable className={`bg-blue-500 p-2 ${width} mt-2 mb-2 p-2 rounded-md`
} onPress={() => onPress()}>
     <Text className='text-white'>{ title}</Text>
  </Pressable>
  )
}

export default actionButton