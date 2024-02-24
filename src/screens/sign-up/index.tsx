
import { horizontalScale, moderateScale, verticalScale } from '@src/utils/metrics';
import { View, Text, StyleSheet, SafeAreaView, Image,Pressable,ScrollView,KeyboardAvoidingView } from 'react-native'
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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useState } from 'react';
import * as Yup from 'yup';
const SignUp = () => {

  const navigation = useNavigation<any>();
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <KeyboardAvoidingView className='flex-1 items-center justify-start'>  
      <View style={Styles.cardBg}>
        <View>
          <Text style={{
            fontWeight: "bold",
            fontSize: normalize(45)
          }}>SignUp</Text>
             <Text style={{
            fontWeight: "400",
            fontSize: normalize(18)
          }}>Fill the details</Text>
        </View>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => console.log(values)}
          validationSchema={SignupSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
                <Input
                label="First Name"
                onBlur={() => handleBlur('firstname')}
                onChange={() => handleChange('firstname')}
                placeholder='Enter first name'
              />
                   <Input
                label="Last Name"
                onBlur={() => handleBlur('lastname')}
                onChange={() => handleChange('lastname')}
                placeholder='Enter last name '
              />
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
              <PaswordInput
                label='Confirm Password'
                onBlur={() => handleBlur('password')}
                onChange={() => handleChange('password')}
                placeholder='Enter Password'
              />
              <Button title="Sign Up" onPress={() => handleSubmit()} />
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
            <Text className='font-semibold text-custom-main'>Sign In</Text>
          </Pressable>

          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}


const Styles = StyleSheet.create({
  cardBg: {
    width: "100%",
    padding:Spacing.SMALL,
    flex:1,
    justifyContent:"space-evenly"
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