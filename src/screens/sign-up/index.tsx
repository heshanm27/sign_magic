
import { horizontalScale, moderateScale, verticalScale } from '@src/utils/metrics';
import { View, Text, StyleSheet, SafeAreaView, Image,Pressable } from 'react-native'
import SignImg from '../../assets/math/login.png'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Dimensions from '@src/theme/Dimensions';
import Shadow from '@src/theme/Shadow';
import Spacing from '@src/theme/Spacing';
import Colors from '@src/theme/Colors';
import { TextInputItem } from '@src/components/input';
import { Formik } from 'formik';
import { ActionButton01 } from '@src/components/buttons';
import { Input, Button } from '@rneui/base';
import FBSvg from '@src/assets/global/fbsvg';
import GoogleSvg from '@src/assets/global/googlesvg';
import { BUTTON, normalize } from '@src/theme/Typography';
import SocialButton from '@src/components/buttons/social';
import Icon from "react-native-vector-icons/Ionicons"
import PaswordInput from '@src/components/input/password';

const SignUp = () => {

  const navigation = useNavigation<any>();

  return (
    <SafeAreaView className='flex-1 items-center justify-start  bg-blue-200'>
      <View style={Styles.topHeaderBg}>
        <Image source={SignImg} style={{
          width: 350 * Dimensions.RESPONSIVE_WIDTH,
          height: 350 * Dimensions.RESPONSIVE_HEIGHT,
          borderRadius: 4,
          resizeMode: 'contain'

        }} />
      </View>
      <View style={Styles.cardBg}>
        <View>
          <Text style={{
            fontWeight: "bold",
            fontSize: normalize(45)
          }}>Login</Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: normalize(16)
            }}
          >Please sign in to continue</Text>
        </View>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <Input
                label="Email"
                onBlur={() => handleBlur('email')}
                onChange={() => handleChange('email')}
                placeholder='Enter valid email address'
              />
              <PaswordInput
                label='Password'
                onBlur={() => handleBlur('password')}
                onChange={() => handleChange('password')}
                placeholder='Enter Password'
              />
              <Button title="Sign In" onPress={() => handleSubmit()} />
            </View>
          )}
        </Formik>
        <View>
          <Text style={{
            textAlign: "center"
          }}>OR Login With</Text>
          <View style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"

          }}>
            <SocialButton onPress={() => { }} title='Facebook' startIcon={<FBSvg height={42 * Dimensions.RESPONSIVE_WIDTH} width={42 * Dimensions.RESPONSIVE_WIDTH} />} />
            <SocialButton onPress={() => { }} title='Google' startIcon={<GoogleSvg height={36 * Dimensions.RESPONSIVE_WIDTH} width={36 * Dimensions.RESPONSIVE_WIDTH} />} />
          </View>
          <View className='flex flex-row justify-center'>

            <Text>Don't have a account? </Text>
            <Pressable onPress={() => navigation.navigate("Sign Up")}>
            <Text className='font-semibold text-custom-main'>Sign Up</Text>
          </Pressable>

          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}


const Styles = StyleSheet.create({
  cardBg: {
    backgroundColor: "white",
    shadowColor: Shadow.shadowColor,
    shadowOffset: Shadow.shadowOffset,
    shadowOpacity: Shadow.shadowOpacity,
    shadowRadius: Shadow.shadowRadius,
    display: "flex",
    justifyContent:"space-evenly",
    width: "100%",
    flex: 1,
    borderTopLeftRadius: 25 * Dimensions.RESPONSIVE_WIDTH,
    borderTopRightRadius: 25 * Dimensions.RESPONSIVE_WIDTH,
    padding: Spacing.SMALL
  },
  topHeaderBg: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 100 * Dimensions.RESPONSIVE_HEIGHT

  }
})

export default SignUp;    