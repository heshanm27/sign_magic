import { View, Text, Pressable } from 'react-native'
import Dimensions from '@src/theme/Dimensions'
import { normalize } from '@src/theme/Typography'
type SocialButton = {
    title: string,
    startIcon?: any,
    endIcon?: any
    fontSize?: number,
    onPress: () => void
}
const SocialButton = ({
    title,
    startIcon,
    endIcon,
    fontSize = 16,
    onPress
}: SocialButton) => {
    return (
        <Pressable onPress={onPress}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                margin: 8 * Dimensions.RESPONSIVE_WIDTH
            }}>
                {startIcon && startIcon}
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: normalize(fontSize),
                    marginLeft: 8 * Dimensions.RESPONSIVE_WIDTH,
                    marginRight: 8 * Dimensions.RESPONSIVE_WIDTH
                }}> {title}</Text>
                {endIcon && endIcon}
            </View>
        </Pressable>
    )
}

export default SocialButton