import { useTranslation } from "react-i18next";
import { View, Text, ModalProps, Image } from "react-native";
import { Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

type Props = ModalProps & {
  isOpen: boolean;
  color: string[];
  image: any;
  helpText: string;
  onClose: () => void;
};

export default function HelpModal({
  isOpen,
  image,
  children,
  color,
  helpText,
  onClose,
  ...rest
}: Props) {
    const { t } = useTranslation();
  return (
    <Modal visible={isOpen} transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <LinearGradient
          style={{
            borderRadius: 10,
            width: "80%",
            height: "45%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          colors={color}
        >
          <View
            style={{
              position: "absolute",
              right: 10,
              top: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              name="close"
              size={40}
              color="white"
              onPress={() => onClose()}
            />
          </View>
          <View
          style={{
            display: "flex",
            flex:1,
            flexDirection: "column",
            justifyContent:'space-evenly',
            alignItems:'center',
          }}
          >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              padding: 10,
              textAlign: "center",
            }}
          >
           {t("help_modal_title")}
          </Text>
          <Image
            source={{
              uri: image,
              scale: 2,
            }}
            style={{
              width: 155,
              height: 150,
              borderRadius: 4,
              resizeMode: "contain",
            }}
          />
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
}
