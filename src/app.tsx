import { NavigationContainer } from '@react-navigation/native';
import RoutesStack from './routes/routes';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = () => {
  return (
    <NavigationContainer>
      <RoutesStack />
    </NavigationContainer>
  );
};

export default App;
