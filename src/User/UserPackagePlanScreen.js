import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Fontisto,
  FontAwesome,
  Entypo,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const UserPackagePlanScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="less-than"
          size={18}
          color="black"
          style={styles.BackIcons}
          onPress={() => navigation.navigate("Admin Notification")}
        />
        <Pressable onPress={() => navigation.navigate("More Option")}>
          <Text style={[styles.content, { top: 3.5 }]}>Back</Text>
        </Pressable>
        <Text style={styles.headerContent}>GymiFy</Text>
        <MaterialIcons
          name="search"
          size={32}
          color="black"
          style={styles.searchIcons}
          onPress={() => navigation.navigate("Group Chats")}
        />
      </View>

      <View style={styles.imageContainer}>
        <View style={styles.circle}>
          {/* <MaterialCommunityIcons name="circle-edit-outline" size={25}  style={styles.penIcons} /> */}
          <Image
            style={styles.image}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0jNWYIlNqFu96GVEjFuLxxpGSQQAkaTtwg9lYD2_ypsO8UTVimL-RTJD2cJohV04k9U&usqp=CAU",
            }}
          />
        </View>
      </View>
      <Text style={styles.imageContent}>Alex Neo</Text>

      <View style={styles.planContainer}>
        <View style={styles.shadowContainer}>
          <View style={styles.planeContent}>
            <Text style={styles.content}>Current Plan</Text>
            <Text style={styles.content1}>Golden Package $120/month</Text>
            <Text style={styles.content2}>
              Your Subscription Valid Till: 01 Dec 2021
            </Text>
          </View>
          <View style={styles.upgradebnt}>
            {/* <TouchableOpacity> */}
            <Text style={styles.btn}>Upgrade Plan</Text>
            {/* </TouchableOpacity> */}
          </View>
        </View>
      </View>

      <Text style={styles.otherBtn}>Other Package</Text>

      <View style={styles.imageContainer}>
      <View style={styles.priceContainer}>
        <View style={styles.circle}>
          {/* <MaterialCommunityIcons name="circle-edit-outline" size={25}  style={styles.penIcons} /> */}
          <Image
            style={styles.image1}
            source={{
              uri: "",
            }}
          />
          <View style={styles.price}>
          <Text style={styles.priceContent}>$ </Text>
         <Text style={styles.priceContent}>80</Text>
         </View>
        </View>
        <View style={styles.priceName}>
            <Text style={styles.priceContent1}>Popular Package</Text>
            <Text style={styles.priceContent2}>Per Month</Text>
        </View>
        </View>
      </View>

      <View style={styles.imageContainer1}>
      <View style={[styles.priceContainer, {}]}>
        <View style={styles.circle}>
          {/* <MaterialCommunityIcons name="circle-edit-outline" size={25}  style={styles.penIcons} /> */}
          <Image
            style={[styles.image1, {backgroundColor: '#A99EFE'}]}
            source={{
              uri: "",
            }}
          />
          <View style={styles.price}>
          <Text style={styles.priceContent}>$ </Text>
         <Text style={styles.priceContent}>50</Text>
         </View>
        </View>
        <View style={styles.priceName}>
            <Text style={styles.priceContent1}>Standard Package</Text>
            <Text style={styles.priceContent2}>Per Month</Text>
        </View>
        </View>
      </View>

      <View style={styles.imageContainer2}>
      <View style={styles.priceContainer}>
        <View style={styles.circle}>
          {/* <MaterialCommunityIcons name="circle-edit-outline" size={25}  style={styles.penIcons} /> */}
          <Image
            style={[styles.image1, {backgroundColor: '#A99EFE'}]}
            source={{
              uri: "",
            }}
          />
          <View style={styles.price}>
          <Text style={styles.priceContent}>$ </Text>
         <Text style={styles.priceContent}>40</Text>
         </View>
        </View>
        <View style={styles.priceName}>
            <Text style={styles.priceContent1}>Golden Package</Text>
            <Text style={styles.priceContent2}>Per Month</Text>
        </View>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 60,
    
    // flex: 1
  },
  BackIcons: {
    paddingVertical: 7,
  },
  content: {
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    // fontSize: 16,
    // fontWeight: "400",
  },
  header: {
    flexDirection: "row",
  },
  headerContent: {
    left: 150,
    // fontSize: 20,
    // fontWeight: "600",
    // lineHeight: 27.24,
    top: 5,
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
  searchIcons: {
    paddingVertical: 5,
    left: 300,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 30,
    bottom: 40,
  },
  imageContainer1: {
    alignItems: "center",
    marginTop: 30,
    bottom: 70,
  },
  imageContainer2: {
    alignItems: "center",
    marginTop: 30,
    bottom: 90,
  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 60.5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 121,
    height: 121,
    borderRadius: 100,
    backgroundColor: "transparent",
    borderWidth: 3,
    borderColor: "yellow",
  },
  priceContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    backgroundColor: "#F4F5F7",
    borderRadius: 6,
    margin: 10,
    width: 440,
    height: 100,
  },
  image1: {
    width: 78,
    height: 78,
    borderRadius: 100,
    backgroundColor: "#51DBFF",
    borderWidth: 3,
    right: 20,
    top: 20,
  },
  price: {
    right: 18,
    bottom: 45,
  },
  priceContent: {
    color: '#FFF',
    textAlign: 'center',
    fontfamily: 'Open Sans',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 26,
    padding: 3,
  },
  priceName: {
    bottom: 105,
    left: 100,
  },
  priceContent1: {
    color: '#000',
    fontfamily: 'Open Sans',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 26,
  },
  priceContent2: {
    color: '#7C7C7C',
    fontfamily: 'Open Sans',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 26,
  },
  imageContent: {
    color: "#000",
    fontFamily: "Open Sans",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "800",
    left: 210,
    bottom: 40,
    letterSpacing: 1,
  },
  planContainer: {
    left: 10,
  },
  shadowContainer: {
    left: 10,
    width: 450,
    height: 250,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    backgroundColor: "#F4F5F7",
    borderRadius: 6,
    margin: 10,
    // paddingTop: 20,
  },
  planeContent: {
    left: 50,
    top: 20,
  },
  content: {
    color: "#000",
    fontFamily: "Open Sans",
    fontSize: 16,
    // fontStyle: 'normal',
    fontWeight: "400",
    //  lineHeight: 'normal',
  },
  content1: {
    color: "#8272F7",
    fontFamily: "Open Sans",
    fontSize: 22,
    letterSpacing: 1,
    top: 30,
    fontWeight: "800",
  },
  content2: {
    color: "#4F4F4F",
    fontFamily: "Open Sans",
    fontSize: 14,
    top: 35,
    fontWeight: "400",
    letterSpacing: 1,
    //  lineHeight: 'normal',
  },
  upgradebnt: {
    backgroundColor: "#51DBFF",
    height: 55,
    // left: 100,
    borderRadius: 7,
    width: 380,
    // right: 100,
    top: 40,
    left: 20,
    margin: 30,
    textAlign: "center",
    justifyContent: "center",
  },
  btn: {
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff",
  },
  otherBtn: {
    fontSize: 22,
    letterSpacing: 1,
    fontWeight: "600",
    left: 10,
    margin: 20,
    color: "#8071F7",
  },
});

export default UserPackagePlanScreen;
