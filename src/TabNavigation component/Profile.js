import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, EvilIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerContent}>GymiFy</Text>
      <Text style={styles.headerContent1}>Invite a Client</Text>
      <Text style={styles.headerContent3}>
        lorem ipsum dolor sit a amet adipiscing a elit sit Porttitor suspendisse
        cursus.
      </Text>


<View style={styles.IconsContainer}>
<View style={styles.shadowContainer}>
  <Text style={styles.mobileContent}>By Phone</Text>
  <FontAwesome
  name="mobile-phone"
   size={70}
   color={'#F35585'}
   style={styles.mobileIcon}
  />
  <View style={styles.horizontalLine} />
  <View style={styles.emailContainer}>
  <Text style={styles.envelopContent}>By Email</Text>
  <EvilIcons
  name="envelope"
   size={70}
   style={styles.envelopIcon}
  />
  </View>
</View>
</View>

<View style={styles.inputWrapper}>
<TextInput 
  placeholder="+91-1234-567-890"
  style={styles.input}
/>
</View>
<View style={styles.footerContainer}>
  <Text style={styles.footerContent}>lorem ipsum dolor sit a amet adipiscing a elit
Porttitor suspendisse cursuslorem ipsum dolor amet and adipiscing.</Text>
</View>
 <View style={styles.container4}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Accept Invite')}>
          <Text style={styles.btnText}>Invite Client</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  headerContent: {
    left: 215,
    // fontSize: 20,
    // fontWeight: "600",
    // lineHeight: 27.24,
    top: 65,
    fontFamily: "Open Sans",
    fontSize: 26,
    fontStyle: "italic",
    fontWeight: "600",
    lineHeight: 35,
    letterSpacing: 0,
    textAlign: "left",
    // fontFamily: "Monotype Corsiva",
    fontSize: 26,
    fontStyle: "italic",
    fonWeight: "400",
    lineHeight: 29,
    letterSpacing: 0,
    textAlign: "left",
  },
  headerContent1: {
    top: 170,
    left: 170,
    letterSpacing: 1,
    fontSize: 26,
    fontWeight: "600",
    color: "#8071F7",
  },
  headerContent3: {
    fontFamily: 'Open Sans',
fontSize: 16,
fontWeight: '400',
lineHeight: 23,
letterSpacing: 1,
textAlign: 'center',
top: 160,
flex: 1,
padding: 20,
  },
  shadowContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    backgroundColor: "#F4F5F7",
    borderRadius: 6,
    width: 450,
    height: 140,
    right: 90,
    flexDirection: 'row',
  },
  IconsContainer: {
    bottom: 350,
    left: 120,  
    flexDirection: 'row',
    
  },
  mobileIcon: {
    right: -20,
    top: 45,
  },
  horizontalLine: {
    borderBottomColor: "rgba(145, 145, 145, 0.6)",
    borderBottomWidth: 1,
    top: 10,
    width: 80,
    left: 150,
    transform: [{ rotate: '90deg' }],
  },
  emailContainer: {
    left: 130,
    top: 25,
  },
  envelopIcon: {
    left: 0,
    top: 10,
  },
  mobileContent: {
    color: '#F35585',
    fontSize: 16,
    fontWeight: '400',
    left: 70,
    top: 20,
  },
  envelopContent: {
    fontSize: 16,
    fontWeight: '400',
  },
   inputWrapper: {
    bottom: 300,
   },
   input: {
    width: 450,
    left: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    backgroundColor: "#F4F5F7",
    borderRadius: 6,
    color: 'red', 
   },
   footerContainer: {
     bottom: 150,
     padding: 20,
    },
   footerContent: {
    fontFamily: 'Open Sans',
    textAlign: 'center',
     fontSize: 16,
     fontWeight: '400',
     letterSpacing: 1,
   },
    container4: {
    // height: 250,
    width: 450,
    left: 27,
    bottom: 140,
    borderRadius: null,
  },
  btn: {
    height: 56, // Increase the height here
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#51DBFF",
    borderRadius: 6,
  },
  btnText: {
    fontFamily: 'OpenSans-Light',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 25,
    color: "#FFFFFF",
    letterSpacing: 1,
  },
});

export default Profile;
