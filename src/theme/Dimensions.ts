import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default {
  WIDTH: width,
  HEIGHT: height,
  RESPONSIVE_HEIGHT: height / 1309,
  RESPONSIVE_WIDTH: width / 620,
};
