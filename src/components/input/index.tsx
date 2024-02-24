import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';



import Icon from "react-native-vector-icons/Ionicons"
import Dimensions from '@src/theme/Dimensions';
import Colors from '@src/theme/Colors';
import { KeyboardType } from '@src/enum/KeyboardType';
import { LABEL } from '@src/theme/Typography';


type TTextInput ={
  onChangeHandler: ()=>void
  value:any,
  placeholder:string,
  type?:any,
  inputRef?:any,
  onSubmit?:()=>void,
  textStyle?:any,
  returnKeyType?:any, // 'default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call'
  validateInput?:any, // 0 - none, 1 - true, 2 - false
  showErrorText?:any, //  true or false
  errorText?:any, // "" or "Password is not strong enough"
  showInfoText?:any, //  true or false
  infoText?:any, // "" or "Mentioning your weight allows us to enhance the product further"
  onFocus?:any,
  onBlur?:any,
  textLimit?:any
}

export const TextInputItem = ({
  onChangeHandler,
  value,
  placeholder,
  type,
  inputRef,
  onSubmit,
  textStyle,
  returnKeyType, // 'default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call'
  validateInput, // 0 - none, 1 - true, 2 - false
  showErrorText, //  true or false
  errorText, // "" or "Password is not strong enough"
  showInfoText, //  true or false
  infoText, // "" or "Mentioning your weight allows us to enhance the product further"
  onFocus,
  onBlur,
  textLimit = null,
}:TTextInput) => {
  const [showText, setShowText] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputBase}>
        <TextInput
          maxLength={textLimit}
          ref={inputRef}
          style={[
            LABEL.b18,
            styles.input,
            {
              letterSpacing:
                type === KeyboardType.PASSWORD
                  ? value === null || value === ''
                    ? 0
                    : 4
                  : null,
            },
            textStyle,
          ]}
          selectionColor={'white'}
          onChangeText={onChangeHandler}
          placeholder={placeholder}
          placeholderTextColor={Colors.GRAY_1}
          value={value}
          autoCapitalize={
            type === KeyboardType.EMAIL ||
            type === KeyboardType.NUMERIC ||
            type === KeyboardType.PHONE_NUMBER ||
            type === KeyboardType.DECIMAL_PAD ||
            type === KeyboardType.PASSWORD
              ? 'none'
              : 'words'
          }
          keyboardType={
            type === KeyboardType.EMAIL
              ? 'email-address'
              : type === KeyboardType.NUMERIC
              ? 'number-pad'
              : type === KeyboardType.PHONE_NUMBER
              ? 'phone-pad'
              : type === KeyboardType.DECIMAL_PAD
              ? 'decimal-pad'
              : 'default'
          }
          secureTextEntry={
            ((type === KeyboardType.PASSWORD) && !showText) ? true : false
          }
          returnKeyType={
            returnKeyType && returnKeyType !== '' ? returnKeyType : 'next'
          }
          onSubmitEditing={onSubmit}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {type === KeyboardType.PASSWORD ? (
          <TouchableOpacity
            style={styles.viewEye}
            onPress={() => setShowText(!showText)}>
            {showText ? (
               <Icon
               name='eye-off-outline'
               size={32 * Dimensions.RESPONSIVE_WIDTH}
               />
              
            ) : (
              <Icon
              name='eye-outline'
              size={32 * Dimensions.RESPONSIVE_WIDTH}
              />
            )
            }
          </TouchableOpacity>
        ) : null}

        {validateInput && validateInput === 1 ? (
          <View style={styles.viewCheck}>
            <Icon
            name='checkmark'
            size={27 * Dimensions.RESPONSIVE_WIDTH}
            />
          </View>
        ) : null}
      </View>

      {showErrorText && showErrorText === true ? (
        <View style={styles.errorView}>
          <Text
            style={[LABEL.b12, styles.errorText]}
            numberOfLines={1}>
            {errorText && errorText !== '' ? errorText : ''}
          </Text>
        </View>
      ) : null}

      {showInfoText && showInfoText === true ? (
        <View style={styles.infoView}>
          <Text
            style={[LABEL.b38, styles.infoText]}
            numberOfLines={1}>
            {infoText && infoText !== '' ? infoText : ''}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export const TextArea = ({
  onChangeHandler,
  value,
  placeholder,
  type,
  inputRef,
  onSubmit,
}:any) => {
  return (
    <TextInput
      style={[styles.inputArea, LABEL.l_2]}
      onChangeText={onChangeHandler}
      value={value}
      placeholder={placeholder}
      multiline={true}
      placeholderTextColor={Colors.GRAY_1}
      keyboardType={
        type === KeyboardType.EMAIL
          ? 'email-address'
          : type === KeyboardType.NUMERIC
          ? 'number-pad'
          : type === KeyboardType.PHONE_NUMBER
          ? 'phone-pad'
          : 'default'
      }
    />
  );
};

export const TextInputSearch = ({
  onChangeHandler,
  value,
  placeholder,
  type,
  inputRef,
  onSubmit,
}:any) => {
  return (
    <TextInput
      style={LABEL.l_2}
      onChangeText={onChangeHandler}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={Colors.GRAY_1}
      keyboardType={
        type === KeyboardType.EMAIL
          ? 'email-address'
          : type === KeyboardType.NUMERIC
          ? 'number-pad'
          : type === KeyboardType.PHONE_NUMBER
          ? 'phone-pad'
          : 'default'
      }
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
  },
  inputBase: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    borderBottomColor: '#EF4123',
    borderBottomWidth: 2,
    marginTop: -14 * Dimensions.RESPONSIVE_HEIGHT, //Spacing.SUB_MARGIN,
  },
  input: {
    flex: 1,
    height: 66 * Dimensions.RESPONSIVE_WIDTH, // 45
    // right: (Platform.OS === 'android') ? 4 : 0,
    paddingHorizontal: 0,
    marginBottom: Platform.OS === 'android' ? -12 : 0,
    marginTop: Platform.OS === 'android' ? 12 : 0,
    paddingTop: Platform.OS === 'ios' ? 19 : 0,
    // backgroundColor: 'green'
  },
  seperator: {
    backgroundColor: '#EF4123',
    height: 2,
    width: '100%',
    // marginTop: 4,
  },
  inputArea: {
    height: 140 * Dimensions.RESPONSIVE_WIDTH,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: Colors.GRAY_6,
    paddingLeft: 21 * Dimensions.RESPONSIVE_WIDTH,
    paddingRight: 21 * Dimensions.RESPONSIVE_WIDTH,
    paddingTop: 15 * Dimensions.RESPONSIVE_WIDTH,
    paddingBottom: 15 * Dimensions.RESPONSIVE_WIDTH,
    justifyContent: 'center',
    textAlignVertical: 'top',
  },
  viewCheck: {
    // position: 'absolute',
    height: 66 * Dimensions.RESPONSIVE_WIDTH, // 45
    // right: 0,
    // top: -12 * Dimensions.RESPONSIVE_HEIGHT,
    paddingHorizontal: 10 * Dimensions.RESPONSIVE_WIDTH,
    paddingBottom: 12 * Dimensions.RESPONSIVE_WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  viewEye: {
    // position: 'absolute',
    height: 66 * Dimensions.RESPONSIVE_WIDTH, // 45
    // right: 0,
    // top: -12 * Dimensions.RESPONSIVE_HEIGHT,
    paddingHorizontal: 10 * Dimensions.RESPONSIVE_WIDTH,
    paddingBottom: 9 * Dimensions.RESPONSIVE_WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imgEye: {
    height: 21 * Dimensions.RESPONSIVE_WIDTH,
    width: 32 * Dimensions.RESPONSIVE_WIDTH,
  },
  errorView: {
    height: 28 * Dimensions.RESPONSIVE_WIDTH,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  errorText: {
    color: '#FF0000',
  },
  infoView: {
    height: 28 * Dimensions.RESPONSIVE_WIDTH,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  infoText: {
    color: '#FFFFFF',
  },
});