import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Dimensions from "@src/theme/Dimensions";
import Shadow from "@src/theme/Shadow";
import Spacing from "@src/theme/Spacing";
import GoogleSvg from "@src/assets/global/googlesvg";
import { normalize } from "@src/theme/Typography";
import SocialButton from "@src/components/buttons/social";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import LottieView from "lottie-react-native";
import LinearGradient from "react-native-linear-gradient";
import firestore from "@react-native-firebase/firestore";

const SignIn = () => {
  const navigation = useNavigation<any>();

  GoogleSignin.configure({
    webClientId:
      "782861776804-8e1k0focen5tqkia4qgevop1e0ld662f.apps.googleusercontent.com", // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  });
  const registerUserInFirestore = async (userInfo: any) => {
    try {
      const userDoc = await firestore()
        .collection("user")
        .doc(userInfo.user.uid)
        .get();

      if (!userDoc.exists) {
        await firestore().collection("user").doc(userInfo.user.uid).set({
          email: userInfo.user.email,
          name: userInfo.user.displayName,
          photo: userInfo.user.photoURL,
          level: "beginner",
        });
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  const signIn = async () => {
    try {
      console.log("signing in");
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const result = await auth().signInWithCredential(googleCredential);

      await registerUserInFirestore(result);

      // setState({ userInfo });
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("error", error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("error", error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log("error", error);
      } else {
        console.log("error", error);
        // some other error happened
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LinearGradient
        style={{
          flex: 1,
        }}
        colors={["#ffc400", "#f3df84"]}
      >
        <View style={Styles.topHeaderBg}>
          <Text style={Styles.title}>Welcome to SignMagic</Text>
          <Text style={Styles.subTitle}>Let's start the journy</Text>
          <LottieView
            style={{
              width: 600 * Dimensions.RESPONSIVE_WIDTH,
              height: 600 * Dimensions.RESPONSIVE_HEIGHT,
            }}
            source={require("../../assets/lottie/welcome.json")}
            autoPlay
            loop
          />
        </View>
        <View style={Styles.cardBg}>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: normalize(45),
                color: "#ffc400",
              }}
            >
              Login
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: normalize(24),
                color: "#ffc400",
              }}
            >
              Please sign in to continue
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
              }}
            >
              <SocialButton
                onPress={() => {
                  signIn();
                }}
                title="Sign in with Google"
                startIcon={
                  <GoogleSvg
                    height={36 * Dimensions.RESPONSIVE_WIDTH}
                    width={36 * Dimensions.RESPONSIVE_WIDTH}
                  />
                }
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  cardBg: {
    backgroundColor: "white",
    shadowColor: Shadow.shadowColor,
    shadowOffset: Shadow.shadowOffset,
    shadowOpacity: Shadow.shadowOpacity,
    shadowRadius: Shadow.shadowRadius,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    flex: 1,
    borderTopLeftRadius: 25 * Dimensions.RESPONSIVE_WIDTH,
    borderTopRightRadius: 25 * Dimensions.RESPONSIVE_WIDTH,
    padding: Spacing.SMALL,
  },
  topHeaderBg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 100 * Dimensions.RESPONSIVE_HEIGHT,
  },
  title: {
    fontSize: normalize(45),
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
  },
  subTitle: {
    fontSize: normalize(28),
    fontWeight: "bold",
    color: "white",
  },
});

export default SignIn;
