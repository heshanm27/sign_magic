import { View, Text, ModalProps, Image, Pressable } from "react-native";
import { Modal } from "react-native";
import LangImg from "../../assets/lang/home.png";
import LinearGradient from "react-native-linear-gradient";
import Spacing from "@src/theme/Spacing";
import { useTranslation } from "react-i18next";

type Props = ModalProps & {
  isOpen: boolean;
  color: string[];
  image: any;
  onSucess: () => void;
  onRetry: () => void;
  msg?: string;
};

export default function ErrorModal({
  isOpen,
  image,
  onRetry,
  onSucess,
  children,
  color,
  msg="Time is up, retry again?",
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
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              padding: 10,
            }}
          >
      {msg}
          </Text>
          <Image
            source={image}
            style={{
              width: 115,
              height: 150,
              borderRadius: 4,
              resizeMode: "contain",
            }}
          />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Pressable
              onPress={()=>onRetry()}
              style={{
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 10,
                width: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  padding: 10,
                  fontWeight: "bold",
                }}
              >
                {t("error_modal_try_btn")}
              </Text>
            </Pressable>

            <Pressable
              onPress={()=>onSucess()}
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                width: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  padding: 10,
                  fontWeight: "bold",
                }}
              >
                    {t("error_modal_next_btn")}
              </Text>
            </Pressable>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
}
