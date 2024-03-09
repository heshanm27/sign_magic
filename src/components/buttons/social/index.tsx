import { View, Text, Pressable } from "react-native";
import Dimensions from "@src/theme/Dimensions";
import { normalize } from "@src/theme/Typography";
import Spacing from "@src/theme/Spacing";
type SocialButton = {
  title: string;
  startIcon?: any;
  endIcon?: any;
  fontSize?: number;
  onPress: () => void;
};
const SocialButton = ({
  title,
  startIcon,
  endIcon,
  fontSize = 30,
  onPress,
}: SocialButton) => {
  return (
    <Pressable
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        width: "80%",
        borderColor: "#ffc400",
        borderWidth: 1,
        padding: Spacing.MEDIUM,
        borderRadius: Spacing.EXTRA_LARGE,
        flex:1,
      }}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
            justifyContent: "space-evenly",
        }}
      >
        {startIcon && startIcon}
        <Text
          style={{
            fontWeight: "bold",
            fontSize: normalize(fontSize),
            color:"#ffc400",
            marginLeft: 8 * Dimensions.RESPONSIVE_WIDTH,
            marginRight: 8 * Dimensions.RESPONSIVE_WIDTH,
          }}
        >
          {" "}
          {title}
        </Text>
        {endIcon && endIcon}
      </View>
    </Pressable>
  );
};

export default SocialButton;
