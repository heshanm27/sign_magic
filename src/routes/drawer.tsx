import {  createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "@src/components/drawer";
import Home from "@src/screens/home";
import Profile from "@src/screens/profile";

export default function MyDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{
        headerShown: false,
    }}
    drawerContent={(props) => {
  //     const {routeNames,index} = props.state;
  // const focused = routeNames[index];
  // console.log(focused);
      return <DrawerContent {...props} />;
    }}
  
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
