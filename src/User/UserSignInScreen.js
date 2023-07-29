import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Platform } from "react-native";
const UserSignInScreen = ({navigation}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    navigation.navigate('PhoneSignIn');
    
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.textMain}>Welcome Back!</Text>
        <Text style={styles.textSec}>Sign in to continue</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.btn1, isPressed && styles.btnPressed]}
          onPress={handlePress}
        >
          <Text>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn2, isPressed && styles.btnPressed]}
          onPress={handlePress}
        >
          <Text>Phone</Text>
        </TouchableOpacity>
        <View style={styles.container3}>
          <Text style={styles.text3}>Phone Number</Text>
          <TextInput style={styles.input} placeholder="+1234567890 " />
        </View>
      </View>
      <View style={styles.container4}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Otp Screen')}>
          <Text style={styles.btnText}>Request OTP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container5}>
        <Text style={styles.footer}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.footer1}> SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
  },
  text: {
    height: 30,
    width: 161,
    left: 15,
    top: 119,
  },
  textMain: {
    fontFamily: 'OpenSans-Light',
    left: 12,
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "left",
    color: "#8071F7",
    // borderRadius: null,
  },
  textSec: {
    position: "absolute",
    width: 139,
    height: 22,
    left: 15,
    top: 40,
    fontFamily:'OpenSans-Light',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 22,
    /* identical to box height */
    color: "#7D7D7D",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width: '62%',
    // marginTop: 269,
    // marginLeft: 90,
    // position: 'absolute',
    width: 450,
    height: 52,
    left: 28,
    top: 254,
    backgroundColor: "#F4F5F7",
    borderRadius: 6,
  },
  btn1: {
    height: 22,
    width: 41,
    left: 84,
    top: 15,
    borderRadius: 10,
    color: "black",
  },
  btn2: {
    fontFamily: 'OpenSans-Light',
    fontSize: 16,
    fontWeight: "400",
    top: 15,
    right: 70,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
  },
  btnPressed: {
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 200,
      },
    }),
  },
  container3: {
    position: "absolute",
    width: 115,
    height: 22,
    left: 0,
    top: 150,
  },
  text3: {
    fontFamily:'OpenSans-Light',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22,
    color: "#010101",
  },
  input: {
    position: "absolute",
    width: 450,
    height: 56,
    left: 0,
    top: 40,
    // borderWidth: 1,
    backgroundColor: "#F4F5F7",
    borderRadius: 6,
    paddingLeft: 20,
  },
  container4: {
    // height: 250,
    width: 450,
    left: 27,
    top: 501,
    borderRadius: null,
  },
  btn: {
    height: 56, // Increase the height here
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8171F7",
    borderRadius: 6,
  },
  btnText: {
    fontFamily: 'OpenSans-Light',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 25,
    color: "#FFFFFF",
  },
  container5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 241,
    left: 140,
    top: 530,
    borderRadius: null,
  },
  footer: {
    fontFamily: 'OpenSans-Light',
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
  },
  footer1: {
    color: "#53BEFE",
    fontFamily: 'OpenSans-Light',
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
    bottom: 1,
  },
});
export default UserSignInScreen