import { View, Text,StyleSheet,ActivityIndicator,SafeAreaView } from 'react-native'
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera'
import { useRef,useEffect } from 'react'
type Props = {}

const GameScreen = (props: Props) => {
    const camera = useRef<Camera>(null)
    const device = useCameraDevice('front')
    const { hasPermission, requestPermission } = useCameraPermission()

    useEffect(()=>{
        if(!hasPermission){
            requestPermission()
        }
    },[hasPermission])

    if(!hasPermission){
        return <View><ActivityIndicator/></View>
    }

  if (!device) return <View><Text>No CamerDevice </Text></View>

  
  return (

    <SafeAreaView>
    <View className='flex flex-1'>
      <View style={styles.container}>
      <Camera
        ref={camera}
        style={styles.camera}
        device={device}
        isActive={true}
      />
      </View>
      <Text>index</Text>
    
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start', // Align the camera view to the bottom
    alignItems: 'flex-start', 
    borderWidth: 2, // Border width
    borderColor: 'white', // Border color
    borderRadius: 8, //
  },
  camera: {
    width: 120, // Fixed width for the camera view
    height: 200, // Fixed height for the camera view
    position: 'absolute',
    top: 16, // Adjust this value for bottom margin
    right: 16,
    borderRadius:10 // Adjust this value for right margin
  },
});


export default GameScreen