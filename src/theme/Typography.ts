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
        color: "#EF4123",
      },
      h1: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(64, 0.9),
        color: Colors.WHITE,
      },
      h2: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(48, 0.9),
        color: Colors.WHITE,
      },
      h3: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(48, 0.9),
        color: Colors.WHITE,
      },
      h4: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(40, 0.9),
        color: Colors.WHITE,
      },
      h5: {
        fontFamily: Fonts.BOLD_ITALIC,
        fontSize: normalize(40, 0.9),
        color: Colors.WHITE,
      },
      h6: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(58, 0.9),
        color: Colors.WHITE,
      },
      b1: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(36, 0.9),
        color: Colors.WHITE,
      },
      b2: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(32, 0.9),
        color: Colors.WHITE,
      },
      b3: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(27, 0.9),
        color: Colors.WHITE,
      },
      b4: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(27, 0.9),
        color: Colors.WHITE,
      },
      b5: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(24, 0.9),
        color: Colors.WHITE,
      },
      b6: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(24, 0.9),
        color: Colors.WHITE,
      },
      b7: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(22, 0.9),
        color: Colors.WHITE,
      },
      b8: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(20, 0.9),
        color: Colors.WHITE,
      },
      b9: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(20, 0.9),
        color: Colors.WHITE,
      },
      b10: {
        fontFamily: Fonts.ITALIC,
        fontSize: normalize(20, 0.9),
        color: Colors.WHITE,
      },
      b11: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(18, 0.9),
        color: Colors.WHITE,
      },
      b12: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(17, 0.9),
        color: Colors.WHITE,
      },
      b13: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(30, 0.9),
        color: Colors.WHITE,
      },
      b14: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(24, 0.9),
        color: Colors.WHITE,
      },
      b15: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(36, 0.9),
        color: Colors.WHITE,
      },
      b16: {
        fontFamily: Fonts.MEDIUM,
        fontSize: normalize(20, 0.9),
        color: Colors.WHITE,
      },
      b17: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(36, 0.9),
        color: Colors.WHITE,
      },
      b18: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(23, 0.9),
        color: Colors.WHITE,
      },
      b19: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(36, 0.9),
        color: Colors.WHITE,
      },
      b20: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(24, 0.9),
        color: Colors.WHITE,
      },
      b21: {
        fontFamily: Fonts.MEDIUM,
        fontSize: normalize(18, 0.9),
        color: Colors.WHITE,
      },
      b22: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(30, 0.9),
        color: Colors.WHITE,
      },
      b23: {
        fontFamily: Fonts.MEDIUM,
        fontSize: normalize(24, 0.9),
        color: Colors.WHITE,
      },
      b24: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(22, 0.9),
        color: Colors.WHITE,
      },
      b25: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(32, 0.9),
        color: Colors.WHITE,
      },
      b26: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(12, 0.9),
        color: Colors.WHITE,
      },
      b27: {
        fontFamily: Fonts.BLACK_ITALIC,
        fontSize: normalize(31, 0.9),
        color: Colors.WHITE,
      },
      b28: {
        fontFamily: Fonts.BLACK_ITALIC,
        fontSize: normalize(100, 0.9),
        color: Colors.WHITE,
      },
      b29: {
        fontFamily: Fonts.ITALIC,
        fontSize: normalize(16, 0.9),
        color: Colors.WHITE,
      },
      b30: {
        fontFamily: Fonts.ITALIC,
        fontSize: normalize(20, 0.9),
        color: Colors.WHITE,
      },
      b31: {
        fontFamily: Fonts.LIGHT,
        fontSize: normalize(20, 0.9),
        color: Colors.WHITE,
      },
      b32: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(16, 0.9),
        color: Colors.WHITE,
      },
      b33: {
        fontFamily: Fonts.LIGHT,
        fontSize: normalize(13, 0.9),
        color: Colors.WHITE,
      },
      b34: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(14, 0.9),
        color: Colors.WHITE,
      },
      b35: {
        fontFamily: Fonts.LIGHT,
        fontSize: normalize(16, 0.9),
        color: Colors.WHITE,
      },
      b36: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(25, 0.9),
        color: Colors.WHITE,
      },
      b37: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(28, 0.9),
        color: Colors.WHITE,
      },
      b38: {
        fontFamily: Fonts.LIGHT,
        fontSize: normalize(14, 0.9),
        color: Colors.WHITE,
      },
      b39: {
        fontFamily: Fonts.BLACK_ITALIC,
        fontSize: normalize(15, 0.9),
        color: Colors.WHITE,
      },
      b40: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: normalize(27, 0.9),
        color: Colors.WHITE,
      },
      b41: {
        fontFamily: Fonts.ITALIC,
        fontSize: normalize(10, 0.9),
        color: Colors.WHITE,
      },
      b42: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(17, 0.9),
        color: Colors.WHITE,
      },
      b43: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(17, 0.9),
        color: Colors.WHITE,
      },
      b44: {
        fontFamily: Fonts.ITALIC,
        fontSize: normalize(15, 0.9),
        color: Colors.WHITE,
      },
      l_tab_isActive: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(15, 0.9),
        color: Colors.WHITE,
      },
      l_tab_isInactive: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(15, 0.9),
        color: Colors.WHITE,
      },
  
      l_1: {
        fontFamily: Fonts.BLACK,
        fontSize: normalize(65, 0.9),
        color: "#EF4123",
      },
      l_2: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(16, 0.9),
        color: Colors.WHITE,
      },
  
      l_2_bold: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(20, 0.9),
        color: Colors.SECONDARY_COLOR,
      },
      l_2_bold_white: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(14, 0.9),
        color: Colors.WHITE,
      },
  
      l_3: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(13, 0.9),
        color: Colors.GRAY_3,
      },
      l_4: {
        fontFamily: Fonts.BOLD,
        fontSize: normalize(18, 0.9),
        color: Colors.WHITE,
      },
      l_5: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(15, 0.9),
        color: Colors.WHITE,
      },
      l_6: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(15, 0.9),
        color: Colors.WHITE,
      },
      l_7: {
        fontFamily: Fonts.MEDIUM,
        fontSize: normalize(16, 0.9),
        color: Colors.WHITE,
      },
      l_8: {
        fontFamily: Fonts.REGULAR,
        fontSize: normalize(12, 0.9),
        color: Colors.WHITE,
      },
      l_9: {
        fontFamily: Fonts.BLACK_ITALIC,
        fontSize: normalize(100, 0.9),
        color: Colors.WHITE,
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
        color: Colors.WHITE,
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