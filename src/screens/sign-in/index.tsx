import { horizontalScale, verticalScale } from '@src/utils/metrics';
import { View, Text, StyleSheet, SafeAreaView, Image, Button, Pressable } from 'react-native'


const SignIn = () => {
  return (
    <SafeAreaView className='flex-1 justify-start p-2'>
      <View className='flex flex-row '>
        <Text className='text-2xl '>SignMagic</Text>
      </View>
      <View className='flex-1 justify-around'>
        <View className='flex justify-center items-center'>
          <Text className='text-2xl text-center mt-2 mb-2 font-bold'>The Best Camping Place in the world</Text>
          <Image source={require('@src/assets/img/hello.png')} className='mt-2 mb-2' style={{ width: horizontalScale(200), height: verticalScale(200) }} />
        </View>

        <View className='flex  justify-between'>
          <Pressable className='bg-blue-500 p-2 rounded-md' onPress={() => console.log('pressed')}>

            <Text className='text-white'>Sign In with Google</Text>
          </Pressable>

          <Pressable className='bg-blue-500 p-2 rounded-md' onPress={() => console.log('pressed')}>
            <Text className='text-white'>Sign In with Google</Text>
          </Pressable>

        </View>
      </View>
    </SafeAreaView>
  )
}


export default SignIn;    