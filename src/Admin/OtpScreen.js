import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const OtpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.textMain}>Enter your verification code!</Text>
        <Text style={styles.textSec}>We sent a verification code to</Text> 
        {/* <View> */}
        <Text style={styles.textNo}>+123-456-7890</Text>
        {/* </View> */}
      </View>
      <View style={styles.container1}>
        <Text style={styles.textotp}>OTP</Text>
        <View style={styles.otpInputContainer}>
          <TextInput style={styles.otpInput} />
          <TextInput style={styles.otpInput} />
          <TextInput style={styles.otpInput} />
          <TextInput style={styles.otpInput} />
        </View>
      </View>

      <View style={styles.container4}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Verify</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container5}>
        <Text style={styles.footer}>Send the code again</Text>
        {/* <TouchableOpacity>
          <Text style={styles.footer1}> SIGN UP</Text>
        </TouchableOpacity> */}
      </View>
      
      <View style={styles.container6}>
        <TouchableOpacity style={styles.btnChangePhone}>
          <Text style={styles.textChangePhone}>Change phone Number</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
container: {
    top: 0,
  },
   text: {
    height: 30,
    width: 350,
    left: 15,
    top: 119,
  },
    textMain: {
    fontFamily: 'OpenSans-Light',
    left: 12,
    fontSize: 25,
    fontWeight: 600,
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "left",
    color: "#8071F7",
    
    // borderRadius: null,
  },
    textSec: {
    position: "absolute",
    // width: 250,
    height: 22,
    left: 15,
    top: 40,
    // fontFamily: 'Open Sans',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 22,
    lineHeight: 22,
    /* identical to box height */
    color: "#7D7D7D",
    // backgroundColor: 'blue'
  },
  textNo : {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 22,
    lineHeight: 22,
    color: "#7D7D7D",
    top: 50,
    left: 15,
    
  },
  container1 : {
         left: 35,
        top: 250,
       
  },
  textotp : {
          // fontFamily: 'Open Sans',
          // fontStyle: 'normal',
          fontWeight: 600,
          fontSize: 20,
          lineHeight: 19,
           color: "#7D7D7D",
  },
  otpInputContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  otpInput: {
    width: 60,     // Increase the width as desired
    height: 60,    // Increase the height as desired
    borderColor: '#000',
    borderWidth: 1,
    margin: 20,
    right: 15,
    // marginBottom: 10,  // Add margin-bottom as desired
    textAlign: 'center',
    fontSize: 20,
  },
  container4: {
    // height: 250,
    width: 450,
    left: 27,
    top: 350,
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
    top: 380,
    borderRadius: null,
  },

  footer: {
    fontFamily: 'OpenSans-Light',
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
    color: "#63C976",
  },
  footer1: {
    
    fontFamily: 'OpenSans-Light',
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
    bottom: 1,
  },
  container6: {
    // alignItems: "center",
    // justifyContent: "center",
    width: 445,
    left: 32,
    top: 400,
    borderWidth: 1,
    borderRadius: 5,
    
  },
  btnChangePhone: {
    height: 56, // Increase the height here
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#8171F7",
    // borderRadius: 6,
   
  },

  textChangePhone : {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 25,
    color: "black",
    left: 10,
  },
})

export default OtpScreen