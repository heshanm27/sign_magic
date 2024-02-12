import { horizontalScale, verticalScale } from '@src/utils/metrics';
import { View, Text, StyleSheet, SafeAreaView, Image, Button, Pressable } from 'react-native'
import auth from '@react-native-firebase/auth';

const SignIn = () => {



  return (
    <SafeAreaView className='flex-1 justify-start p-2'>
      <View className='flex flex-row  justify-center'>
        <Text className='text-4xl '>SignMagic</Text>
      </View>

        <View className='flex  justify-between'>
          <Pressable className='bg-blue-500 p-2 mt-2 mb-2 rounded-md' onPress={() => console.log('pressed')}>

            <Text className='text-white'>Sign In with Google</Text>
          </Pressable>

          <Pressable className='bg-blue-500 p-2 mt-2 mb-2  rounded-md' onPress={() => console.log('pressed')}>
            <Text className='text-white'>Sign In with Google</Text>
          </Pressable>

        </View>
    </SafeAreaView>
  )
}


export default SignIn;    