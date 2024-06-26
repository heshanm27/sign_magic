
  import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    SafeAreaView,
    Image,
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
  import SuccessImage from "../../../assets/env/emotion/happy.png";
  import ErrorImage from "../../../assets/env/emotion/sad.png";
  import LoadImage from "../../../assets/env/load.png";
  import { useNavigation } from "@react-navigation/native";
  import Icon from "react-native-vector-icons/Ionicons";
  import { LevelData } from "@src/components/card/level";
  import LoadingModal from "@src/components/modals/LoadingModal";
  import firestore from "@react-native-firebase/firestore";
  import auth from "@react-native-firebase/auth";
import HelpModal from "@src/components/modals/HelpModal";
import { useTranslation } from "react-i18next";
  const EnvironmentGameScreen = ({ route, navigation }: any) => {
    const levelData: LevelData = route.params.levelData;

    console.log(levelData,"levelData")
  
    const camera = useRef<Camera>(null);
    const device = useCameraDevice("front");
    const [isLoaded,setIsloaded] = useState(false)
    const [isRecording, setIsRecording] = useState(false);
    const [isSucessShowPopup, setisSuceessShowPopup] = useState(false);
    const [isErrorPopUp, setIsErrorPopUp] = useState(false);
    const { hasPermission, requestPermission } = useCameraPermission();
    const [isInitialized, setIsInitialized] = useState<boolean>(false);
    const [isHelp, setIsHelp] = useState(false)
    const format = useCameraFormat(device, [
      {
        videoResolution: {
          width: 640,
          height: 480,
        },
        fps: 30,
      },
    ]);
  
    const [timer, setTimer] = useState(30);
    const [isLoading, setIsLoading] = useState(false);
    const [isResultPending, setIsResultPending] = useState(false);
    const { t } = useTranslation();
    const [errorMsg, setErrorMsg] = useState(t("error_modal_time_up_title"));
  
    const uploadVVideo = async (file: any) => {
      setIsResultPending(true);
      const parts = file.path.split("/");
      const name = parts[parts.length - 1];
      const reference = storage().ref(`detection/${name}`);
      const uploadTask = reference.putFile(file.path);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("File available at", downloadURL);
  
            fetch("https://obliging-skink-perfect.ngrok-free.app/detection/env/v2", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                image_url: downloadURL,
                answer:levelData.answer,
              }),
            })
              .then((res) => {
  
                return res.json();
              })
              .then((data) => {
                console.log(data);
                if (data.result) {
                  
                  setisSuceessShowPopup(true);
                  setIsResultPending(false);
                } else {
                  setErrorMsg(t("error_modal_wrong_answer_title"));
                  setIsResultPending(false);
                  setIsErrorPopUp(true);
                }
              })
              .catch((err) => {
                setIsResultPending(false);
                console.log(err);
              }).finally(()=>{
                setIsLoading(false);
              });
          });
          console.log(snapshot);
        },
        (error) => {
          console.log(error);
          setIsResultPending(false);
        },
        () => {}
      );
    };

    const updateUserGameHistoryOfQuestion = async () => {
      try {
       
        const userGameHistoryQuerySnapshot = await firestore()
          .collection("userGameHistory")
          .doc(auth().currentUser?.uid)
          .collection("userGameHistory")
          .get();
  

            await firestore().collection("userGameHistory").doc(auth().currentUser?.uid).collection("userGameHistory").doc(levelData.id).set({
              score: 0,
              completed: false,
              difficultyLevel: levelData.difficulty ? levelData.difficulty : "beginner",
            })
  
        
        
  
        
      } catch (error) {
        console.error("Error fetching user game history:", error);
      }
    }
    useEffect(() => {
      if (!hasPermission) {
        requestPermission();
      }
      setIsloaded(true)
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
      if (isInitialized&&camera.current && !isRecording) {
        setIsRecording(true);
  
        camera.current.startRecording({
          videoBitRate: "extra-low",
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
        }, 1000);
      }
  
      if(timer < 10  && isResultPending ){
        setIsLoading(true);
      }
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }, [timer]);
  
  
    return (
      <SafeAreaView className="flex flex-1">
        <LinearGradient
          style={{
            flex: 1,
            padding: Spacing.MEDIUM,
          }}
          colors={["#35b007", "#9bf384"]}
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
          { isLoaded && <Camera
              ref={camera}
              style={isInitialized ?styles.camera:{
                width:0,
                height:0
              }}
              device={device}
              isActive={true}
              video={true}
              format={format}
              
              onInitialized={
                ()=>{
                  setIsInitialized(true)
                }
              }
            />}
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
          <View
          style={{
            position: "absolute",
            right: 10,
            bottom: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            name="help-circle-outline"
            size={40}
            color="white"
            onPress={() => setIsHelp(true)}
          />
        </View>
        </LinearGradient>
  
        <SucessModal
          image={SuccessImage}
          color={["#35b007", "#9bf384"]}
          onRetry={() => {
            setisSuceessShowPopup(false);
            setIsRecording(false);
            setTimer(30);
          }}
          onSucess={() => {
            updateUserGameHistoryOfQuestion();
            navigation.goBack();
            setisSuceessShowPopup(false);
          }}
          isOpen={isSucessShowPopup}
        />
        <ErrorModal
          color={["#35b007", "#9bf384"]}
          msg={errorMsg}
          image={ErrorImage}
          onRetry={() => {
            setIsErrorPopUp(false);
            setIsRecording(false);
            setTimer(30);
          }}
          onSucess={() => {
            setIsErrorPopUp(false);
            navigation.goBack();
          }}
          isOpen={isErrorPopUp}
        />
        <LoadingModal
          color={["#35b007", "#9bf384"]}
          image={LoadImage}
          isOpen={isLoading}
        />
         <HelpModal
       color={["#35b007", "#9bf384"]}
       image={levelData.helpImg}
       helpText={levelData.help}
       isOpen={isHelp}
       onClose={()=>setIsHelp(false)}
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
      width: 160 * Dimensions.RESPONSIVE_WIDTH,
      height: 280 * Dimensions.RESPONSIVE_HEIGHT,
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
  
  export default EnvironmentGameScreen;
  