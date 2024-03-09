import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@src/screens/home";
import Notification from "@src/screens/notification";
import Profile from "@src/screens/profile";
import auth from "@react-native-firebase/auth";
import SignIn from "@src/screens/sign-in";
import SignUp from "@src/screens/sign-up";
import LanguageDifficulty from "@src/screens/language/difficulty";
import LanguageLevel from "@src/screens/language/level";
import GameScreen from "@src/screens/game";
import EnvironmentDifficulty from "@src/screens/environment/difficulty";
import EnvironmentLevel from "@src/screens/environment/level";
import SocialEduLevel from "@src/screens/socialedu/level";
import LanuageGameScreen from "@src/screens/language/game";
import MathDifficulty from "@src/screens/math/difficulty";
import MathLevel from "@src/screens/math/level";
import MathGameScreen from "@src/screens/math/game";
import SocialEduDifficulty from "@src/screens/socialedu/difficulty";
import SocialEduGameScreen from "@src/screens/socialedu/game";
import EnvironmentGameScreen from "@src/screens/environment/game";
import OnboardingScreen from "@src/screens/on-boarding";

import { useInitStore } from "@src/zustaned/init/store";
type Props = {};

export default function RoutesStack({}: Props) {
  const [initializing, setInitializing] = useState(true);
  const {
    store: { firstLoad, onBoarding },
  } = useInitStore();
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={user ? "Home" : "signin"}>
      {user ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Profile" component={Profile} />

          {/* Lanuage */}
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="LanguageDifficulty"
            component={LanguageDifficulty}
          />

          <Stack.Screen
            name="LanguageLevel"
            options={{
              headerShown: false,
            }}
            component={LanguageLevel}
          />
          <Stack.Screen
            name="LanguageGame"
            options={{
              headerShown: false,
            }}
            component={LanuageGameScreen}
          />

          {/* Math */}
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="MathDifficulty"
            component={MathDifficulty}
          />

          <Stack.Screen
            name="MathLevel"
            options={{
              headerShown: false,
            }}
            component={MathLevel}
          />

          <Stack.Screen
            name="MathGame"
            options={{
              headerShown: false,
            }}
            component={MathGameScreen}
          />

          {/* SocialEdu */}

          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="SocialEduDifficulty"
            component={SocialEduDifficulty}
          />

          <Stack.Screen
            name="SocialEduLevel"
            options={{
              headerShown: false,
            }}
            component={SocialEduLevel}
          />

          <Stack.Screen
            name="SocialEduGame"
            options={{
              headerShown: false,
            }}
            component={SocialEduGameScreen}
          />

          {/* Enviroment */}
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="EnvironmentDifficulty"
            component={EnvironmentDifficulty}
          />

          <Stack.Screen
            name="EnvironmentLevel"
            options={{
              headerShown: false,
            }}
            component={EnvironmentLevel}
          />

          <Stack.Screen
            name="EnvironmentGame"
            options={{
              headerShown: false,
            }}
            component={EnvironmentGameScreen}
          />
          <Stack.Screen
            name="GameScreen"
            options={{
              headerShown: false,
            }}
            component={GameScreen}
          />
        </>
      ) : (
        <>
          {onBoarding ? (
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="onboarding"
              component={OnboardingScreen}
            />
          ) : (
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="signin"
              component={SignIn}
            />
          )}
        </>
      )}
    </Stack.Navigator>
  );
}
