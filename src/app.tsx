import { NavigationContainer } from '@react-navigation/native';
import RoutesStack from './routes/routes';
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { SafeAreaView } from 'react-native'
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
  return (
    <SafeAreaProvider>
    
      <ThemeProvider theme={theme}>
    <NavigationContainer>
      <RoutesStack />
    </NavigationContainer>
    </ThemeProvider>

    </SafeAreaProvider>
  );
};

export default App;
