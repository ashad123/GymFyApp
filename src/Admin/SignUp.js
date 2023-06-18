import { View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';




const SignUp = ({navigation}) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const handelSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
    }

    const handelSignIn = () => {
        navigation.navigate('ClientProfile')
    }

    const handleSignup = () => {
      navigation.navigate('Dashboard')
    }
    // const toggleSwitch = () => {
    //   setIsSwitchOn((prevState) => !prevState);
    // };

  return (
    <View style={styles.container}>
      <View style={styles.text}>
      
        <Text style={styles.textMain}>Sign Up</Text>
        <Text style={styles.textSec}>Please enter details to Sign up</Text>
      </View>
      <Ionicons name='person-outline' size={22} style={{top:254, left: 30,}} />
      <View style={styles.containerName}>
      {/* <FontAwesomeIcon icon="far fa-user-alt" /> */}
      {/* <FontAwesome name='user' size={32}  />
      <EvilIcons name='user' size={32} color='#ff000'/> eye-outline 80*/}
      
        <Text style={styles.txtName}>Name</Text>
        <View style={styles.inputContainer}>
          <TextInput style={[styles.inputName, { color: 'black' }]} placeholder="Username" />
          <View style={styles.horizontalLine} />
        </View>
      </View>
      <Ionicons name='phone-portrait-outline' size={22} style={{top:329, left: 30,}} />
      <View style={styles.containerPhone}>
        <Text style={styles.txtPhone}>Phone</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputPhone} placeholder="Phone Number" />
          <View style={styles.horizontalLine} />
        </View>
      </View>
      <Ionicons name='lock-closed-outline' size={22} style={{top:405, left: 30,}} />
      <Ionicons name='eye-off-outline' size={22} style={{top:384, left: 450,}} />
      <View style={styles.containerPass}>
  <Text style={styles.txtPass}>Password</Text>
  <View style={styles.inputContainer}>
    <TextInput style={styles.inputPass} placeholder="Password" secureTextEntry={true} />
    <View style={styles.horizontalLine} />
  </View>
</View>
     <View style={styles.containerSavePass}>
        <Text style={styles.txtSavePass}>Save Password</Text>
        <Switch
    style={styles.btnSwitch}    
    value={isSwitchOn} // Set the initial value of the switch
    onValueChange={handelSwitch} // Handle the switch state change
    thumbColor="#007AFF" // Set the color of the switch thumb
    // trackColor={{ false: '#f4f3f4', true: '#007AFF' }}
  />
     </View>
     <View style={styles.container4}>
        <TouchableOpacity style={styles.btn} onPress={handleSignup}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container6}>
        <TouchableOpacity style={styles.btnChangePhone} onPress={handelSignIn}>
          <Text style={styles.textChangePhone}>Already have an account? Sign in</Text>
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
    width: 350,
    left: 15,
    top: 119,
  },
  textMain: {
    left: 12,
    fontSize: 25,
    fontWeight: '600',
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#8071F7',
  },
  textSec: {
    position: 'absolute',
    height: 22,
    left: 15,
    top: 40,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 22,
    lineHeight: 22,
    color: '#7D7D7D',
  },
  containerName: {
    position: 'absolute',
    width: 250,
    height: 19,
    left: 30,
    top: 250,
  },
  txtName: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 19,
    color: '#969696',
  },
  inputContainer: {
    width: 450,
    top: 20,
    borderBottomWidth: 1, // Add a bottom border to create the line
    borderBottomColor: '#969696', // Color of the line
  },
  inputName: {
    // color: '#969696',
    // color: 'black',
    paddingLeft: 35,
  },
  horizontalLine: {
    height: 1, // Height of the line
    backgroundColor: '#969696', // Color of the line
  },
  containerPhone: {
    position: 'absolute',
    width: 250,
    height: 19,
    left: 30,
    top: 350,
  },
  txtPhone: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 19,
    color: '#969696',
  },
  inputPhone: {
    color: '#969696',
    paddingLeft: 35,
  },
  containerPass: {
    position: 'absolute',
    width: 250,
    height: 19,
    left: 30,
    top: 450,
  },
  txtPass: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 19,
    color: '#969696',
  },
  inputPass: {
    color: '#969696',
    paddingLeft: 35,
  },
  containerSavePass: {
    position: 'absolute',
    width: 250,
    height: 19,
    left: 35,
    top: 570,
  },
  txtSavePass: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 19,
    color: '#63C976'
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnSwitch: {
    left: 200,
    bottom: 35,
  },
  container4: {
    // height: 250,
    width: 450,
    left: 27,
    top: 550,
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
    fontFamily: 'Open Sans',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 25,
    color: "#FFFFFF",
  },
  container6: {
    // alignItems: "center",
    // justifyContent: "center",
    width: 450,
    left: 28,
    top: 600,
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
});     

export default SignUp;
