
import { StyleSheet, Text, View,Image } from 'react-native'
import bg from './../../../assets/img/Mathematics.png'


export default function DifficultyLevelCard() {
  return (
    <View className='flex flex-row flex-1 bg-white'>
        <View className='flex flex-1 border-7 divide-solid border-blue-800 rounded-xl'>
      {/* <View
      className='w-10 h-10  rounded-md p-3 m-3'
      >
        <Image source={bg} width={10} height={10}  />

      </View> */}
      <View className='flex flex-1 border-7 divide-solid border-blue-800 rounded-xl'>
        <Text className='text-2xl font-bold'>Beginner</Text>
        <Text className='text-sm font-medium'>Completed: 8/10</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})