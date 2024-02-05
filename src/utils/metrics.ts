import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

//Use to height ,margin,padding
const horizontalScale = (size: any) => (width / guidelineBaseWidth) * size;

//Use to width ,margin,padding
const verticalScale = (size: any) => (height / guidelineBaseHeight) * size;
//Use to font size,border radius
const moderateScale = (size: any, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };