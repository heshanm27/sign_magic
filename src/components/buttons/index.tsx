import Colors from '@src/theme/Colors';
import Dimensions from '@src/theme/Dimensions';
import { BUTTON } from '@src/theme/Typography';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';




export const ActionButton01 = ({
  title,
  disabled,
  onPressHandler,
  containerStyle,
  gradientStyle,
  textStyle,
}:any) => {
  return (
    <TouchableOpacity
      disabled={(disabled && (disabled === true)) ? true : false}
      style={[styles.btn01, containerStyle, { borderColor: (disabled && (disabled === true)) ? "#94868f" : "#EF4123" }]}
      onPress={onPressHandler}>
      <LinearGradient
        colors={(disabled && (disabled === true)) ? ["#6A6969", "#9c9ea6"] : ["#C9371D", "#FF4927"]} // FF4927
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.linearGradient, gradientStyle]}>
        <Text style={[BUTTON.b1, styles.btnText, textStyle, { color: (disabled && (disabled === true)) ? "#bebdc9" : "#FFFFFF" }]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const ActionButton02 = ({
  title,
  onPressHandler,
  containerStyle,
  textStyle,
}:any) => {
  return (
    <TouchableOpacity
      style={[styles.btn02, containerStyle]}
      onPress={onPressHandler}>

      <Text style={[BUTTON.b2, styles.btnText02, textStyle]}>{title}</Text>
      {/* <Image
        source={require('../assests/images/ic_arrow_next/ic_arrow_next.png')}
        style={styles.btnImage02}
        resizeMode={'contain'}
      /> */}

    </TouchableOpacity>
  );
};

export const ActionButton03 = ({
  title,
  type,
  onPressHandler,
  containerStyle,
  textStyle,
}:any) => {
  return (
    <TouchableOpacity
      style={[styles.btn03, containerStyle]}
      onPress={onPressHandler}>
      {/* <Image
        source={(type == "fb") ? require('../assests/images/ic_fb_logo/ic_fb_logo.png') : (type == "google") ? require('../assests/images/ic_google_logo/ic_google_logo.png') : require('../assests/images/ic_apple_logo/ic_apple_logo.png')}
        style={styles.btnImage03}
        resizeMode={'contain'}
      /> */}
      <Text style={[BUTTON.b3, styles.btnText03, textStyle]}>{title}</Text>


    </TouchableOpacity>
  );
};

export const ActionButton04 = ({
  title,
  onPressHandler,
  containerStyle,
  textStyle,
  ispositive,
}:any) => {
  return (
    <TouchableOpacity
      style={[styles.btn04, containerStyle, { borderColor: (ispositive && (ispositive === true)) ? "#20C286" : "#EF4123" }]}
      onPress={onPressHandler}>
      <LinearGradient
        colors={(ispositive && (ispositive === true)) ? ["#2A9939", "#2DC741"] : ["#C9371D", "#FF4927"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.linearGradient2]}>
        <Text style={[BUTTON.b5, styles.btnText, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn01: {
    height: 73 * Dimensions.RESPONSIVE_WIDTH,
    width: 200 * Dimensions.RESPONSIVE_WIDTH,
    borderRadius: 18 * Dimensions.RESPONSIVE_WIDTH,
    borderWidth: 1,
    borderColor: '#EF4123',
    overflow: 'hidden'
  },
  btnText: {
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn02: {
    height: 50 * Dimensions.RESPONSIVE_WIDTH,
    width: 145 * Dimensions.RESPONSIVE_WIDTH,
    borderRadius: 7 * Dimensions.RESPONSIVE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#C4C4C433"
  },
  btnText02: {
  },
  btnImage02: {
    height: 18 * Dimensions.RESPONSIVE_WIDTH,
    width: 18 * Dimensions.RESPONSIVE_WIDTH,
    marginLeft: 3
  },
  btn03: {
    height: 48 * Dimensions.RESPONSIVE_WIDTH,
    width: 260 * Dimensions.RESPONSIVE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30 * Dimensions.RESPONSIVE_WIDTH,
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },
  btnText03: {
    includeFontPadding: false,
    justifyContent: 'center',
  },
  btnImage03: {
    height: 28 * Dimensions.RESPONSIVE_WIDTH,
    width: 28 * Dimensions.RESPONSIVE_WIDTH,
    marginRight: 8 * Dimensions.RESPONSIVE_WIDTH
  },

  btnTimeChangeBase: {
    height: 76 * Dimensions.RESPONSIVE_HEIGHT,
    width: 76 * Dimensions.RESPONSIVE_HEIGHT,
    borderRadius: (76 * Dimensions.RESPONSIVE_HEIGHT) / 2,
    shadowColor: "#161440", //"#161440",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5
  },
  btnTimeChange: {
    height: 76 * Dimensions.RESPONSIVE_HEIGHT,
    width: 76 * Dimensions.RESPONSIVE_HEIGHT,
    borderRadius: (76 * Dimensions.RESPONSIVE_HEIGHT) / 2,
  },
  linearGradientTimeChange: {
    flex: 1,
    borderRadius: (76 * Dimensions.RESPONSIVE_HEIGHT) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#FFFFFF"
  },

  ChangeTimeContainer: {
    position: 'absolute',
    top: 8 * Dimensions.RESPONSIVE_WIDTH,
    left: 6 * Dimensions.RESPONSIVE_WIDTH,
    height: 64 * Dimensions.RESPONSIVE_WIDTH,
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
    paddingRight: 6 * Dimensions.RESPONSIVE_WIDTH,
  },
  ChangeTimeIcon: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  ChangeTimeValueText: {
    marginRight: 2 * Dimensions.RESPONSIVE_WIDTH,
  },
  ChangeTimeTitleText: {

  },
  btn04: {
    height: 53 * Dimensions.RESPONSIVE_WIDTH,
    width: 138 * Dimensions.RESPONSIVE_WIDTH,
    borderRadius: 9 * Dimensions.RESPONSIVE_WIDTH,
    borderWidth: 1,
    overflow: 'hidden'
  },
  linearGradient2: {
    flex: 1,
    // borderRadius: 9 * Dimensions.RESPONSIVE_WIDTH,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  controllerButtonContainer: {
    height: 80 * Dimensions.RESPONSIVE_HEIGHT,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  controllerButtonImage1: {
    height: 40 * Dimensions.RESPONSIVE_HEIGHT,
    width: 36 * Dimensions.RESPONSIVE_HEIGHT,
  },
  controllerButtonImage2: {
    height: 40 * Dimensions.RESPONSIVE_HEIGHT,
    width: 36 * Dimensions.RESPONSIVE_HEIGHT,
  },
  controllerButtonImage3: {
    height: 40 * Dimensions.RESPONSIVE_HEIGHT,
    width: 36 * Dimensions.RESPONSIVE_HEIGHT,
  },

  controllerButtonContainer2: {
    height: 80 * Dimensions.RESPONSIVE_HEIGHT,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controllerButtonImage4: {
    height: 16 * Dimensions.RESPONSIVE_HEIGHT,
    width: 36 * Dimensions.RESPONSIVE_HEIGHT,
  },
  controllerButtonImage5: {
    height: 18 * Dimensions.RESPONSIVE_HEIGHT,
    width: 38 * Dimensions.RESPONSIVE_HEIGHT,
  },
  controllerButtonText: {
    marginTop: 6 * Dimensions.RESPONSIVE_WIDTH,
  },

  playButtonContainer: {
    height: 100 * Dimensions.RESPONSIVE_HEIGHT,
    width: 384 * Dimensions.RESPONSIVE_HEIGHT,
    borderRadius: 26 * Dimensions.RESPONSIVE_HEIGHT,
    borderWidth: 1,
    borderColor: "#EF4123",
    shadowColor: "#161440",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 5,
    // overflow: 'hidden'
  },
  playButtonView: {
    flex: 1,
    borderRadius: 26 * Dimensions.RESPONSIVE_HEIGHT,
  },
  linearGradient3: {
    flex: 1,
    borderRadius: 24 * Dimensions.RESPONSIVE_HEIGHT,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonImage: {
    height: 36 * Dimensions.RESPONSIVE_HEIGHT,
    width: 75 * Dimensions.RESPONSIVE_HEIGHT,
  },

  stopButtonContainer: {
    height: 107 * Dimensions.RESPONSIVE_HEIGHT,
    width: 119 * Dimensions.RESPONSIVE_HEIGHT,
    borderRadius: 26 * Dimensions.RESPONSIVE_HEIGHT,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    shadowColor: "#161440",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 5,
    // overflow: 'hidden'
  },
  stopButtonView: {
    flex: 1,
    borderRadius: 26 * Dimensions.RESPONSIVE_HEIGHT,
    borderColor: "#FFFFFF",
  },
  linearGradient4: {
    flex: 1,
    borderRadius: 24 * Dimensions.RESPONSIVE_HEIGHT,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopButtonImage: {
    height: 26 * Dimensions.RESPONSIVE_HEIGHT,
    width: 26 * Dimensions.RESPONSIVE_HEIGHT,
    borderRadius: 5 * Dimensions.RESPONSIVE_HEIGHT,
    backgroundColor: "#EF4123"
  },
});