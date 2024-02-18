import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RoutesStack from './routes/routes';
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { SafeAreaView,StatusBar } from 'react-native'
import { useEffect } from 'react';
import { useCameraPermission } from 'react-native-vision-camera';
import "./i18n/i8n";
const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = () => {

  const { hasPermission,requestPermission} = useCameraPermission();

  useEffect(() => {

    if(!hasPermission){
      requestPermission()
    }

  }, [hasPermission]);
  return (
    <SafeAreaProvider>
    <StatusBar hidden={true}/>
    <ThemeProvider theme={theme}>
    <NavigationContainer>
      <RoutesStack />
    </NavigationContainer>
    </ThemeProvider>

    </SafeAreaProvider>
  );
};

export default App;
