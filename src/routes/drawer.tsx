import { DrawerContent, createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "@src/screens/profile";

export default function MyDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
