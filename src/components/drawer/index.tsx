import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
export default function MyDrawer() {
  return (
    <Drawer.Navigator>
    {/* <Drawer.Screen name="Feed" component={Feed} />
    <Drawer.Screen name="Article" component={Article} /> */}
  </Drawer.Navigator>
  )
}