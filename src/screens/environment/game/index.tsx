import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    SafeAreaView,
    Image,
    Button,
  } from "react-native";
  import {
    Camera,
    useCameraDevice,
    useCameraPermission,
  } from "react-native-vision-camera";
  import { useRef, useEffect, useState } from "react";
  import Dimensions from "@src/theme/Dimensions";
  type Props = {};
  
  const EnvironmentGameScreen = (props: Props) => {
    const camera = useRef<Camera>(null);
    const device = useCameraDevice("front");
    const { hasPermission, requestPermission } = useCameraPermission();
  
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
  
      // const [timer, setTimer] = useState(30);
      // const [showPopup, setShowPopup] = useState(false);
  
      // useEffect(() => {
      //   let interval: NodeJS.Timeout;
      //   if (timer > 0) {
      //     interval = setInterval(() => {
      //       setTimer(timer - 1);
      //     }, 1000);
      //   } else {
      //     setShowPopup(true);
      //   }
      //   return () => {
      //     if (interval) {
      //       clearInterval(interval);
      //     }
      //   };
      // }, [timer]);
  
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
      
      // const [answer, setAnswer] = useState<string | null>(null);
      // const [isWinning, setIsWinning] = useState(false);
  
      // useEffect(() => {
      //   if (socket) {
      //     socket.onmessage = (event) => {
      //       const data = JSON.parse(event.data);
      //       if (data.answer === answer) {
      //         setIsWinning(true);
      //       }
      //     };
      //   }
      // }, [socket, answer]);
  
      // useEffect(() => {
      //   if (camera.current && socket && socket.readyState === WebSocket.OPEN) {
      //     const handleVideoStream = async () => {
      //       const stream = await device..getStream();
      //       socket.send(JSON.stringify({ stream, answer }));
      //     };
      //     handleVideoStream();
      //   }
      // }, [camera, socket, answer]);
  
      // if (isWinning) {
      //   return (
      //     <View>
      //       <Text>You won!</Text>
      //       <Button title="Play again" onPress={retry} />
      //     </View>
      //   );
      // }
      // const [socket, setSocket] = useState<WebSocket | null>(null);
  
      // useEffect(() => {
      //   const ws = new WebSocket('ws://your-websocket-url');
      //   ws.onopen = () => {
      //     console.log('connected to websocket');
      //   };
      //   ws.onerror = (error) => {
      //     console.log('websocket error', error);
      //   };
      //   ws.onclose = (event) => {
      //     console.log('websocket connection closed', event.code);
      //   };
      //   setSocket(ws);
      //   return () => {
      //     ws.close();
      //   };
      // }, []);
  
      // useEffect(() => {
      //   if (camera.current) {
      //     const handleVideoStream = async () => {
      //       const stream = await camera.current.getStream();
      //       if (socket && socket.readyState === WebSocket.OPEN) {
      //         socket.send(stream);
      //       }
      //     };
      //     handleVideoStream();
      //   }
      // }, [camera, socket]);
  
    return (
      <SafeAreaView className="flex flex-1">
        <View className="flex flex-1 bg-custom-highLight">
  
          <View style={{ position: 'absolute', left: 10, top: 10 }}>
            <Button title="Back" onPress={() => {}} />
          </View>
          <View style={styles.container}>
            <Camera
              ref={camera}
              style={styles.camera}
              device={device}
              isActive={true}
            />
          </View>
          {/* <View style={{ position: 'absolute', top: 10, alignSelf: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{timer}</Text>
          </View> */}
  
  
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
                uri: "https://firebasestorage.googleapis.com/v0/b/sign-magic-3b3bf.appspot.com/o/language%2Fdifficulty%2Fadvanced.png?alt=media&token=bbf999f4-fcb8-44ec-931e-6e8c192b1a2e",
              }}
              style={styles.centerImage}
            />
            <Text
              style={styles.centerText}
            >
              මේ අකුර කුමක්ද?
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      right: 10,
      top: 10,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: 'white',
      borderColor: 'white',
      borderRadius: 8,
      width: 150*Dimensions.RESPONSIVE_WIDTH,
      height: 250*Dimensions.RESPONSIVE_HEIGHT,
    },
    camera: {
      width: '100%',
      height: '100%',
    },
    centerImage: {
      width: 200,
      height: 200,
      resizeMode: "contain",
    },
    centerText: {
      fontSize: 20,
      color: "black",
      fontWeight:'bold'
    },
  });
  
  export default EnvironmentGameScreen;
  