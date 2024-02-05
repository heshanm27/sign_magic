import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@src/screens/home';
import Notification from '@src/screens/notification';
import Profile from '@src/screens/profile';
import auth from '@react-native-firebase/auth';
import SignIn from '@src/screens/sign-in';
import SignUp from '@src/screens/sign-up';
type Props = {};

export default function RoutesStack({ }: Props) {
  const [initializing, setInitializing] = useState(true);
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
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Profile" component={Profile} />
        </>
      ) : (
        <>
          <Stack.Screen options={{
            headerShown: false
          }} name="Sign In" navigationKey='Sign In' component={SignIn} />
          <Stack.Screen name="Sign Up" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
}
