import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import auth from "@react-native-firebase/auth";
import LinearGradient from "react-native-linear-gradient";

const DrawerList = [
  { icon: "home-outline", label: "Home", navigateTo: "Home" },
  { icon: "account-multiple", label: "Profile", navigateTo: "Profile" },
];
const DrawerLayout = ({ icon, label, navigateTo,isFocused }: any) => {
  const navigation = useNavigation<any>();
  // console.log(userData);
  return (
    <DrawerItem
      icon={({ color, size }) => <Icon name={icon} color={color} size={size} />}
      label={label}
      activeTintColor="#9bf384"
      focused={isFocused}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    />
  );
};

type DrawerItemsProps = {
focused: string;
}
const DrawerItems = ({focused}:DrawerItemsProps) => {
  return DrawerList.map((el, i) => {
    return (
      <DrawerLayout
        key={i}
        icon={el.icon}
        label={el.label}
        navigateTo={el.navigateTo}
        isFocused={focused === el.navigateTo}
        
      />
    );
  });
};
function DrawerContent(props: DrawerContentComponentProps) {
  const {routeNames,index} = props.state;
  const focused = routeNames[index];
  console.log(focused);
  return (
    // <LinearGradient
    // style={{
    //   flex: 1,
    // }}
    // colors={["#35b007", "#9bf394"]}
    // >
    <View style={{ flex: 1 }}>

      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Avatar.Image
                  source={{
                    uri: auth().currentUser?.photoURL || "",
                  }}
                  size={50}
                  style={{ marginTop: 5 }}
                />
                <View style={{ marginLeft: 10, flexDirection: "column",justifyContent:"center",alignItems:"center" }}>
                  <Title style={styles.title}>{auth().currentUser?.displayName}</Title>
                  <Text style={styles.caption} numberOfLines={1}>
                    {auth().currentUser?.email}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.drawerSection}>
            <DrawerItems focused={focused}  />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          onPress={() => {
            auth().signOut();
          }}
          label="Sign Out"
        />
      </View>
    </View>
    // </LinearGradient>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    color: '#6e6e6e',
    width: "100%",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    // marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#dedede",
    borderTopWidth: 1,

  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
