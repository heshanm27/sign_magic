import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Image,
  Button,
  Modal,
} from "react-native";
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from "react-native-vision-camera";
import { useRef, useEffect, useState } from "react";
import Dimensions from "@src/theme/Dimensions";
import LinearGradient from "react-native-linear-gradient";
import Spacing from "@src/theme/Spacing";
import CustomModal from "@src/components/modals/SuccessModal";
import storage from "@react-native-firebase/storage";
import SucessModal from "@src/components/modals/SuccessModal";
import ErrorModal from "@src/components/modals/ErrorModal";
import SuccessImage from "../../../assets/lang/emotion/happy.png";
import ErrorImage from "../../../assets/lang/emotion/sad.png";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { LevelData } from "@src/components/card/level";

const LanuageGameScreen = ({ route, navigation }: any) => {
  const levelData: LevelData = route.params.levelData;

  const camera = useRef<Camera>(null);
  const device = useCameraDevice("front");
  const [isRecording, setIsRecording] = useState(false);
  const [isSucessShowPopup, setisSuceessShowPopup] = useState(false);
  const [isErrorPopUp, setIsErrorPopUp] = useState(false);
  const { hasPermission, requestPermission } = useCameraPermission();
  const format = useCameraFormat(device,[
    {
      videoResolution:{
        width: 1920,
        height: 1080
      },
      fps: 30
    },
  ]);
  const [isTimeOut, setIsTimeOut] = useState(false);
  
  const [timer, setTimer] = useState(30);
  const [showPopup, setShowPopup] = useState(false);

  const uploadVVideo = async (file:any) => {
    const parts = file.path.split("/");
    const name = parts[parts.length - 1];
    const reference = storage().ref(`detection/${name}`);
    const uploadTask = reference.putFile(file.path);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
        console.log(snapshot);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  };

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  if (!hasPermission) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  if (!device)
    return (
      <View>
        <Text>No CamerDevice </Text>
      </View>
    );

  useEffect(() => {
    if (camera.current && !isRecording) {
      setIsRecording(true);
      console.log("startRecording");
      camera.current.startRecording({
        videoBitRate: "low",
        videoCodec: "h264",
        fileType: "mp4",

        
        onRecordingFinished: (video) => {
          uploadVVideo(video);
        },
        onRecordingError: (error) => console.error(error),
      });
    }

    if (timer === 20) {
      if (camera.current && isRecording) {
        camera.current.stopRecording();
      }
    }

    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
        setIsTimeOut(true);
      }, 1000);
    }

    if (timer === 1) {
      setIsErrorPopUp(true);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timer]);

  // const retry = () => {
  //   setTimer(30);
  //   setShowPopup(false);
  // };

  // if (showPopup) {
  //   return (
  //     <View>
  //       <Text>Time is up, retry again?</Text>
  //       <Button title="Retry" onPress={retry} />
  //     </View>
  //   );
  // }

  const connectWebSocket = async () => {
    const ws = new WebSocket(
      "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self"
    );
    ws.onopen = () => {
      console.log("connected to websocket");
    };
    ws.onerror = (error) => {
      console.log("websocket error", error);
    };
    ws.onclose = (event) => {
      console.log("websocket connection closed", event.code);
    };
  };

  function base64ToArrayBuffer(base64: string) {
    console.log("sdsd", base64);
  }

  useEffect(() => {
    if (camera.current && isTimeOut) {
      setIsErrorPopUp(true);
    }
  }, [isTimeOut]);

  return (
    <SafeAreaView className="flex flex-1">
      <LinearGradient
        style={{
          flex: 1,
          padding: Spacing.MEDIUM,
        }}
        colors={["#ffc400", "#f3df84"]}
      >
        <View
          style={{
            position: "absolute",
            left: 10,
            top: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            name="arrow-back"
            size={40}
            color="white"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.container}>
          <Camera
            ref={camera}
            style={styles.camera}
            device={device}
            isActive={true}
            video={true}
            format={format}
          />
        </View>
        <View style={{ position: "absolute", top: 10, alignSelf: "center" }}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>{timer}</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: levelData?.image ?? "",
            }}
            style={styles.centerImage}
          />
          <Text style={styles.centerText}>{levelData?.question ?? ""}</Text>
        </View>
      </LinearGradient>

      <SucessModal
        image={SuccessImage}
        color={["#ffc400", "#f3df84"]}
        onRetry={() => {
          setisSuceessShowPopup(false);
          console.log("retry");
        }}
        onSucess={() => {
          setisSuceessShowPopup(false);
        }}
        isOpen={false}
      />
      <ErrorModal
        color={["#ffc400", "#f3df84"]}
        image={ErrorImage}
        onRetry={() => {
          setIsErrorPopUp(false);
        }}
        onSucess={() => {
          setIsErrorPopUp(false);
        }}
        isOpen={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 10,
    top: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 8,
    width: 150 * Dimensions.RESPONSIVE_WIDTH,
    height: 250 * Dimensions.RESPONSIVE_HEIGHT,
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  centerImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  centerText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LanuageGameScreen;
