import { View, Text } from 'react-native'
import React from 'react'
import { Camera, useCameraDevice } from 'react-native-vision-camera'
import { useRef } from 'react'
type Props = {}

const GameScreen = (props: Props) => {
    const camera = useRef<Camera>(null)
    const device = useCameraDevice('front')
    // const { hasPermission, requestPermission } = useCameraPermission()

    if (device == null) return <View><Text>No CamerDevice </Text></View>
  return (
    <View>
      <Text>index</Text>
      <Camera
        ref={camera}
        // style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    </View>
  )
}

export default GameScreen