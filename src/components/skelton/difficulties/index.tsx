import { View } from 'react-native'
import Spacing from '@src/theme/Spacing';
import Dimensions from '@src/theme/Dimensions';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export default function DifficultiesSkelton() {
  return (
<Animated.View style={{
    flex:1
}}
entering={FadeIn}
exiting={FadeOut}
>
    <View
    style={{
      display:"flex",
      backgroundColor:"rgba(255, 255, 255, 0.2)",
      width: "100%",
      borderRadius:Spacing.EXTRA_LARGE,
      height: 250 * Dimensions.RESPONSIVE_HEIGHT,
    }}
    >
    </View>
    </Animated.View>
  )
}