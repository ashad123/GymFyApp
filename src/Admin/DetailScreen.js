import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import React from "react";
import {FontAwesome, Foundation} from '@expo/vector-icons';
import TabNavigation from '../Navigation/TabNavigation';
import { ScrollView } from "react-native-gesture-handler";


const DetailScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.icon}>
        <FontAwesome name='camera' size={50} />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          keyboardType='name-phone-pad'
          placeholderTextColor="#A0AEC0"
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          placeholderTextColor="#A0AEC0"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="number-pad"
          placeholderTextColor="#A0AEC0"
        />
        <TextInput
          style={styles.input}
          placeholder="Residential Address"
          keyboardType='name-phone-pad'
          placeholderTextColor="#A0AEC0"
        />
      </View>
      <Text style={styles.text}>Interest of Package</Text>
      <View style={styles.card}>
      <Foundation name='clipboard-notes' size={70} color={'white'} style={styles.icons} />
      <Text style={styles.amount}>$120</Text>
      <Text style={styles.date}>/Month</Text>
        <Text style={styles.package}>Golden Package</Text>
        <Text style={styles.cardText}>lorem ipsum dolor sit amet a elit.</Text>
      </View>

      <View style={styles.button}>
        <View style={styles.cancleBtn}>
          <Button
            title="Cancel"
            color={"#FF94B2"}
            onPress={() => {}}
          />
        </View>
        <View style={[styles.sendBtn, { height: 60 }]}>
          <Button
            title="Send"
            onPress={() => {}}
          />
        </View>
      </View>
      
    </View>
    <View style={{top: 0,}}>
    <TabNavigation />
    </View>
    </ScrollView>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    bottom: 80,
  },
  icon: {
    top: 120,
  },
  inputWrapper: {
    bottom: 50,
  },
  input: {
    width: 450,
    height: 50,
    top: 200,
    margin: 12,
    padding: 10,
    fontSize: 18,
    color: "black",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    backgroundColor: "#F4F5F7",
    borderRadius: 6,
  },
  text: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 27,
    color: '#8071F7',
    top: 190,
    right: 135,
   },
  card: {
    backgroundColor: "#A99EFE",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 240,
    width: 450,
    height: 170,
  },
  cardText: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 27,
    color: 'white',
  },
  icons: {
    // position: 'absolute',
    left: 30,
    right: 77.38,
    top: 20,
    bottom:40,

background: '#FFFFFF',
  },
  amount: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
     fontSize: 30,
    fontWeight: 700,
    lineHeight: 49,
    left: 130,
    bottom: 55,
    color: 'white',
  },
  date: {
    left: 202,
    bottom: 87,
    color: 'white',
     fontWeight: 400,
     fontSize: 16,
     lineHeight: 22,
  },
  package: {
    fontFamily: 'Open Sans',
    left: 130,
    bottom: 85,
    fontStyle: 'normal',
    fontSize: 22,
   fontWeight: 600,
   lineHeight: 30,
   color: 'white',
  },
  cardText: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: 22,
   fontWeight: 600,
   lineHeight: 30,
   left: 29,
    bottom: 50,
    color: 'white',
  },
  button: {
    flexDirection: 'row',
    // flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    // marginHorizontal: 16,
  },
  cancleBtn: {
    margin: 10,
    width: 185,
    
    // height: 0, // Modify this value to increase the button height
    // paddingBottom: 100,
    // backgroundColor: "#FF94B2", // Add this line to set the button background color
  },
  sendBtn: {
    margin: 10,
    width: 185,
    height: 50, // Modify this value to increase the button height
  },
});

export default DetailScreen;
