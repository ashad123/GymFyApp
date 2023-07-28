import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import {
  MaterialCommunityIcons,
  EvilIcons,
  FontAwesome,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
const AdminAddUserourGroupChatScreen = ({ navigation }) => {
    const [data, setData] = useState("");
 
    

   const handleDelete = () => {
    setTimeout(() =>{
        setData("Lead is deleted");
        setTimeout(() => {
            setData("");
        }, 2000);
    },);
  }

  const handleClientView = () => {
     navigation.navigate('ClientDetail')
  }

    return (
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="less-than"
            size={18}
            color="black"
            style={styles.BackIcons}
            onPress={() => navigation.navigate("Group Chats")}
          />
          <Pressable onPress={() => navigation.navigate("User List Screen")}>
            <Text style={styles.content}>Back</Text>
          </Pressable>
          <Text style={styles.headerContent}>Add Leads</Text>
          {/* <EvilIcons
            name="user"
            size={70}
            color="black"
            style={styles.UserIcons}
            onPress={() => navigation.navigate("Group Chats")}
          /> */}
          <View>
            {/* <Ionicons 
          name="ellipse-outline"
          size={150}
          color="blue"
          style={styles.circleIcon}
          /> */}
            <Image style={styles.imageStyle} source={require("../assets/CA.png")} />
            <View style={styles.iconsContainer}>
              {/* <View style={styles.faceIconWrapper}> */}
              <MaterialCommunityIcons
                name="face-man"
                size={40}
                color="#fff"
                style={[
                  styles.faceIcons,
                  {
                    left: 5,
                    backgroundColor: "#53BEFE",
                    borderRadius: 50,
                    width: 45,
                    height: 43,
                    paddingLeft: 3,
                  },
                ]}
              />
              {/* </View> */}
              {/* <View style={styles.faceIconWrapper}> */}
              <MaterialCommunityIcons
                name="face-woman-outline"
                size={40}
                color="black"
                style={[styles.faceIcons, { left: 10 }]}
              />
    
              {/* </View> */}
            </View>
          </View>
    
          <View style={styles.inputWrapper}>
            {/* <View style={styles.inlineInputs}> */}
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              keyboardType="name-phone-pad"
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
              placeholder="Work"
              keyboardType="number-pad"
              placeholderTextColor="#A0AEC0"
            />
           
              <View style={styles.container4}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('User List Screen')}>
              <Text style={styles.btnText}>Add User</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 60,
        // flex: 1
      },
      BackIcons: {
        paddingVertical: 7,
      },
      UserIcons: {
        bottom: 10,
        left: 240,
      },
      content: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 16,
        fontWeight: "400",
      },
      headerContent: {
        left: 120,
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 27.24,
        top: 5,
      },
      circleIcon: {
        top: 50,
        right: 70,
      },
      imageStyle: {
        width: 100,
        height: 100,
        top: 70,
        left: 20,
      },
      imageSecStyle: {
        width: 170,
        height: 80,
        top: 90,
        right: 100,
      },
      iconsContainer: {
        top: 100,
        left: 10,
        // paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#fff",
        width: 120,
        height: 52,
        flexDirection: "row",
        // padding: 10,
      },
      faceIconWrapper: {
        // flex: 1,
        // flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
      },
      faceIcons: {
        flexDirection: "row",
        margin: 5,
        // left: 15,
        // top: -10,
      },
      inputWrapper: {
        top: 70,
        right: 280,
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
      input1: {
        width: 213,
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
      inputContainer: {
        // flex: 1,
        marginRight: 10,
        flexDirection: "row",
      },
      inlineInputs: {},
      container4: {
        // height: 250,
        width: 450,
        left: 10,
        top: 230,
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
        fontSize: 20,
        lineHeight: 25,
        color: "#FFFFFF",
      },
    });

export default AdminAddUserourGroupChatScreen