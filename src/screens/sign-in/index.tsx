import { horizontalScale, verticalScale } from '@src/utils/metrics';
import { View, Text, StyleSheet, SafeAreaView, Image, Button, Pressable } from 'react-native'

import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';


const SignIn = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 items-center justify-start p-2 bg-custom-main'>
      <View className='flex flex-row  justify-center'>
        <Text className='text-4xl font-extrabold '>SignMagic</Text>
      </View>
      {/* <Image source={Math} style={{ width: horizontalScale(200), height: verticalScale(200) }} /> */}
      <View className='flex  justify-between'>
        <Pressable className='bg-blue-500 p-2 mt-2 mb-2 rounded-md text-center' onPress={() => console.log('pressed')}>

          <Text className=' text-center'>Sign In with Google</Text>
        </Pressable>

        <Pressable className='bg-white p-2 mt-2 mb-2  rounded-md' onPress={() => console.log('pressed')}>
          <Text className=' text-center'>Sign In with Google</Text>
        </Pressable>

        <View className='flex flex-row justify-center'>

            <Text>Don't have a account? </Text>
            <Pressable onPress={() => navigation.navigate("Sign Up")}>
              <Text className='font-semibold text-custom-main'>Sign Up</Text>
            </Pressable>

        </View>

      </View>
    </SafeAreaView>
  )
}


export default SignIn;    