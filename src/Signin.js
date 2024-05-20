import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native"; 
import Button from "./components/button";
import Input from "./components/input";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./store/slices/userSlices";  
import { jwtDecode } from "jwt-decode";


 
export default function Signin() {
  const navigation = useNavigation();
  const dispatch = useDispatch(); // TBADEL BEHA DATA
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typeInputPassword, setTypeInputPassword] = useState(true);

  // Fonction pour enregistrer le token JWT dans le stockage local
  const saveToken = async (token) => {
    try {
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      console.error("Error saving token:", error);
    }
  };

  // Fonction pour s'authentifier base de donnée
  const login = () => null;
  const [fontsLoaded] = useFonts({
    "SF Pro Text": require("../assets/sf-pro-text-regular.ttf"),
  });
  //  animated page clavier
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );
  handlerDispalyPassword = () => {
    setTypeInputPassword(!typeInputPassword);
  };
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <Animated.ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
      <View style={styles?.signin}>
        <View style={styles?.body}>
          <View style={styles?.button}>
            <Text style={styles?.alreadyhaveanacco}>
              {`New on our platform?`}
              <Text
                style={{
                  fontFamily: "DM Sans",
                  fontSize: 14,
                  fontWeight: "500",
                  textAlign: "center",
                  letterSpacing: -0.20000000298023224,
                  color: "rgba(0, 0, 0, 1)",
                }}
              >{` `}</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("AdventureStarts")}
              >
                <Text
                  style={{
                    fontFamily: "DM Sans",
                    fontSize: 14,
                    fontWeight: "400",
                    textAlign: "center",
                    letterSpacing: -0.20000000298023224,
                    color: "rgba(106, 81, 163, 1)",
                  }}
                >{` Create an account`}</Text>
              </TouchableOpacity>
            </Text>
          </View>

          <View style={styles?.form}>
            <View style={styles?.email}>
              <Text style={styles?.label}>
                {`Please sign-in to your account and start the adventur\n`}
              </Text>
            </View>
          </View>
          <View style={styles?.title}>
            <Text
              style={styles?.gettingStarted}
            >{`Welcome to Cynoia! 👋`}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Forget_Password")}
        >
          <View style={styles?._button}>
            <Text style={styles?._alreadyhaveanacco}>{`Forgot Password?`}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles?._email}>
          <View style={styles?.input}> 

            <Input
              style={styles?._label}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>

        </View>
        
  <View style={styles?.__email}>
          <View style={styles?._input}>
         
            <Input
              style={styles?.__label}
              type={typeInputPassword}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <Button onPress={handlerDispalyPassword}>
        
          </Button>
        </View> 

        <Button
          onPress={login}
          style={styles?.button2}
          styleView={styles.base}
          styleText={styles?.text}
        >
          <Text>Sign In</Text>
        </Button>
        <ImageBackground
          style={styles?.logo_with_text2}
          source={require("../assets/logo_with_text1.png")}
        />
      </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  signin: {
    flexShrink: 0,
    height: 870,
    width: 412,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 0,
  },
  body: {
    position: "absolute",
    flexShrink: 0,
    top: 233,
    height: 591,
    width: 375,
  },

  button: {
    position: "absolute",
    flexShrink: 0,
    top: 375,
    height: 18,
    left: 45,
    width: 305,
  },
  button2: {
    height: 44,
    width: 305,
    position: "absolute",
    flexShrink: 0,
    alignItems: "center",
    top: 525,
    left: 53,
  },

  alreadyhaveanacco: {
    position: "absolute",
    flexShrink: 0,
    width: 305,
    height: 18,
    textAlign: "center",
    color: "rgba(23, 23, 23, 0.6)",
    fontFamily: "DM Sans",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: -0.20000000298023224,
  },
  form: {
    position: "absolute",
    flexShrink: 0,
    top: 60,
    height: 37,
    left: 48,
    width: 312,
  },
  email: {
    position: "absolute",
    flexShrink: 0,
    height: 45,
    width: 312,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 0,
  },
  label: {
    position: "absolute",
    flexShrink: 0,
    right: 20,
    left: 10,
    height: 60,
    textAlign: "left",
    color: "rgba(94, 88, 115, 1)",
    fontFamily: "DM Sans",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: -0.17142857611179352,
  },
  title: {
    position: "absolute",
    flexShrink: 0,
    height: 32,
    left: 50,
    width: 305,
  },
  gettingStarted: {
    position: "absolute",
    flexShrink: 0,
    width: 305,
    height: 32,
    textAlign: "center",
    color: "rgba(94, 88, 115, 1)",
    fontFamily: "DM Sans",
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: -0.800000011920929,
    lineHeight: 32,
  },
  _button: {
    position: "absolute",
    flexShrink: 0,
    top: 650,
    height: 18,
    left: 45,
    width: 305,
  },
  _alreadyhaveanacco: {
    position: "absolute",
    flexShrink: 0,
    width: 305,
    height: 18,
    textAlign: "center",
    color: "rgba(106, 81, 163, 1)",
    fontFamily: "DM Sans",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: -0.20000000298023224,
  },
  _email: {
    position: "absolute",
    flexShrink: 0,
    top: 334,
    height: 68,
    left: 43,
    width: 305,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 0,
  },
  input: {
    position: "absolute",
    flexShrink: 0,
    top: 34,
    height: 45,
    width: 305,
    alignItems: "flex-start",
    rowGap: 0,
  },
  rectangle1: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: "visible",
  },
  _label: {
    position: "absolute",
    flexShrink: 0,
    top: -40,
    right: 34,
    bottom: 14,
    left: 23,
    textAlign: "left",
    color: "rgba(118, 118, 118, 1)",
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 36.63212966918945,
  },
  __email: {
    position: "absolute",
    flexShrink: 0,
    top: 406,
    height: 68,
    left: 43,
    width: 305,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _input: {
    position: "absolute",
    flexShrink: 0,
    top: 30,
    height: 49,
    width: 305,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _rectangle1: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: "visible",
  },
  __label: {
    position: "absolute",
    flexShrink: 0,
    top: -40,
    right: 34,
    bottom: 15,
    left: 23,
    textAlign: "left",
    color: "rgba(118, 118, 118, 1)",
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 36.63212966918945,
  },
  combinedShape: {
    position: "absolute",
    flexShrink: 0,
    top: 42,
    left: 270,
    width: 23,
    height: 18,
    overflow: "visible",
  },
  topBar: {
    position: "absolute",
    flexShrink: 0,
    height: 100,
    width: 375,
  },
  barsTopbarsV4: {
    position: "absolute",
    flexShrink: 0,
    height: 100,
    width: 375,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 0,
  },
  barsStatusBarIPhoneLight: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    bottom: 56,
    left: 0,
    right: 0,
    alignItems: "flex-start",
    rowGap: 0,
  },
  battery: {
    position: "absolute",
    flexShrink: 0,
    top: 17,
    height: 11,
    left: 336,
    width: 24,
  },
  wifi: {
    position: "absolute",
    flexShrink: 0,
    top: 17,
    left: 316,
    width: 15,
    height: 11,
    overflow: "visible",
  },
  cellularConnection: {
    position: "absolute",
    flexShrink: 0,
    top: 18,
    left: 294,
    width: 17,
    height: 11,
    overflow: "visible",
  },
  timeStyle: {
    position: "absolute",
    flexShrink: 0,
    top: 7,
    height: 21,
    left: 21,
    width: 54,
    alignItems: "flex-start",
    rowGap: 0,
  },
  time: {
    position: "absolute",
    flexShrink: 0,
    top: 7,
    bottom: -4,
    width: 54,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "SF Pro Text",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: -0.30000001192092896,
  },
  __button: {
    position: "absolute",
    flexShrink: 0,
    top: 514,
    bottom: 254,
    left: 43,
    right: 27,
    alignItems: "flex-start",
    rowGap: 0,
  },
  base: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderWidth: 1,
    borderColor: "rgba(110, 73, 152, 1)",
    borderRadius: 10,
    justifyContent: "center", // Pour centrer le contenu verticalement
    alignItems: "center", // Pour centrer le contenu horizontalement
  },
  text: {
    position: "absolute",
    flexShrink: 0,
    top: 12,
    right: 123,
    bottom: 12,
    left: 125,
    textAlign: "center",
    color: "rgba(110, 73, 152, 1)",
    fontFamily: "DM Sans",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 1,
    lineHeight: 20,
  },
  logo_with_text2: {
    position: "absolute",
    flexShrink: 0,
    top: 145,
    left: 118,
    width: 130,
    height: 46,
  },
});
