// import { StyleSheet } from 'react-native';
import { StyleSheet, Dimensions, Platform, PixelRatio } from 'react-native';
import Colors from './Colors';
import Dimensions2 from './Dimensions';
import Fonts from './Fonts';

const {
  width,
  height,
} = Dimensions.get('window');

export function normalize(size:any, multiplier = 1) {
  // const scale = (width / height) * multiplier;
  const scale = (width / 620) * multiplier;

  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}


export const LABEL = StyleSheet.create({
    t1: {
        fontFamily: Fonts.BLACK,
        fontSize: normalize(90, 0.9),
        color:Colors.TEXT_COLOR,
      },
      h1: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(64, 0.9),
        color:Colors.TEXT_COLOR,
      },
      h2: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(48, 0.9),
        color: Colors.TEXT_COLOR,
      },
      h3: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(48, 0.9),
        color: Colors.TEXT_COLOR,
      },
      h4: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(40, 0.9),
        color: Colors.TEXT_COLOR,
      },
      h5: {
        fontFamily: Fonts.BOLD_ITALIC,
        fontSize: normalize(40, 0.9),
        color: Colors.TEXT_COLOR,
      },
      h6: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(58, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b1: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(36, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b2: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(32, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b3: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(27, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b4: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(27, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b5: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(24, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b6: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(24, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b7: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(22, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b8: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(20, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b9: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(20, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b10: {
        fontFamily: Fonts.ITALIC,
        fontSize: normalize(20, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b11: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(18, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b12: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(17, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b13: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(30, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b14: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(24, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b15: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(36, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b16: {
        fontFamily: Fonts.MEDIUM,
        fontSize: normalize(20, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b17: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(36, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b18: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(23, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b19: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(36, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b20: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(24, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b21: {
        fontFamily: Fonts.MEDIUM,
        fontSize: normalize(18, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b22: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(30, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b23: {
        fontFamily: Fonts.MEDIUM,
        fontSize: normalize(24, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b24: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(22, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b25: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(32, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b26: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(12, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b27: {
        fontFamily: Fonts.BLACK_ITALIC,
        fontSize: normalize(31, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b28: {
        fontFamily: Fonts.BLACK_ITALIC,
        fontSize: normalize(100, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b29: {
        fontFamily: Fonts.ITALIC,
        fontSize: normalize(16, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b30: {
        fontFamily: Fonts.ITALIC,
        fontSize: normalize(20, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b31: {
        fontFamily: Fonts.LIGHT,
        fontSize: normalize(20, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b32: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(16, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b33: {
        fontFamily: Fonts.LIGHT,
        fontSize: normalize(13, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b34: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(14, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b35: {
        fontFamily: Fonts.LIGHT,
        fontSize: normalize(16, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b36: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(25, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b37: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(28, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b38: {
        fontFamily: Fonts.LIGHT,
        fontSize: normalize(14, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b39: {
        fontFamily: Fonts.BLACK_ITALIC,
        fontSize: normalize(15, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b40: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(27, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b41: {
        fontFamily: Fonts.ITALIC,
        fontSize: normalize(10, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b42: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(17, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b43: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(17, 0.9),
        color: Colors.TEXT_COLOR,
      },
      b44: {
        fontFamily: Fonts.ITALIC,
        fontSize: normalize(15, 0.9),
        color: Colors.TEXT_COLOR,
      },
      l_tab_isActive: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(15, 0.9),
        color: Colors.TEXT_COLOR,
      },
      l_tab_isInactive: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(15, 0.9),
        color: Colors.TEXT_COLOR,
      },
  
      l_1: {
        fontFamily: Fonts.BLACK,
        fontSize: normalize(65, 0.9),
        color: "#EF4123",
      },
      l_2: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(16, 0.9),
        color: Colors.TEXT_COLOR,
      },
  
      l_2_bold: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(20, 0.9),
        color: Colors.SECONDARY_COLOR,
      },
      l_2_bold_TEXT_COLOR: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(14, 0.9),
        color: Colors.TEXT_COLOR,
      },
  
      l_3: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(13, 0.9),
        color: Colors.GRAY_3,
      },
      l_4: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(18, 0.9),
        color: Colors.TEXT_COLOR,
      },
      l_5: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(15, 0.9),
        color: Colors.TEXT_COLOR,
      },
      l_6: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(15, 0.9),
        color: Colors.TEXT_COLOR,
      },
      l_7: {
        fontFamily: Fonts.MEDIUM,
        fontSize: normalize(16, 0.9),
        color: Colors.TEXT_COLOR,
      },
      l_8: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(12, 0.9),
        color: Colors.TEXT_COLOR,
      },
      l_9: {
        fontFamily: Fonts.BLACK_ITALIC,
        fontSize: normalize(100, 0.9),
        color: Colors.TEXT_COLOR,
      },
      n_1: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(13, 0.9),
        color: Colors.BLACK,
      },
      n_2: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(11, 0.9),
        color: Colors.GRAY_3,
      },
      n_3: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(15, 0.9),
        color: Colors.TEXT_COLOR,
      },
    
})


export const BUTTON = StyleSheet.create({
    b1: {
        fontFamily: Fonts.EXTRA_BOLD,
        fontSize: normalize(25, 0.9),
       
      },
      b2: {
        fontFamily: Fonts.MEDIUM,
        fontSize: normalize(24, 0.9),
 
      },
      b3: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(13, 0.9),
    
      },
      b4: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(20, 0.9),

      },
      b5: {
        fontFamily: Fonts.EXTRA_BOLD,
        fontSize: normalize(20, 0.9),
        
      },
      b6: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(18, 0.9),
    
      },
      b7: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(20, 0.9),
        
      },
})