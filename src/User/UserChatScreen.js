import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";
// import { ScrollView } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Ionicons";
import { Ionicons, Entypo } from "@expo/vector-icons";
import UserChat from './UserChatAttachmentScreen';
import UserChatAttachmentScreen from "./UserChatAttachmentScreen";
const UserChatScreen = ({ navigation }) => {

  return (
    <ScrollView>
  {/* Header */}
  <View style={styles.header}>
        <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" style={styles.headerIcon} onPress={() => {
          navigation.navigate('Add Groups')
        }} />
        <View style={styles.headerContent}>
          <Image
            source={{
              uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
            }}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>John Doe</Text>
          <Text style={styles.lowerText}>Active</Text>
        </View>
        <Ionicons name="ios-call" size={24} color="#FFFFFF" style={styles.headerIconsCall} />
        <Ionicons name="md-videocam-sharp" size={24} color="#FFFFFF" style={styles.headerIconsCamera} />
        <Ionicons name="ellipsis-vertical" size={24} color="#FFFFFF" style={styles.headerIconsDots} />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Yesterday</Text>
      </View>
      <View style={styles.chatMsg}>
        <Image
          source={{
            uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
          }}
          style={styles.circle1}
        />
        <Text style={styles.textMsg}>
          lorem ipsum dolor sit a amet consectetur adipiscing. sit a amet
          consectetur .
        </Text>
        <Text style={styles.time}>20:30</Text>
      </View>

      <View style={styles.chatMsg2}>
        <Text style={styles.textMsg2}>
          lorem ipsum dolor sit a amet consectetur adipiscing. sit a amet
          consectetur .
        </Text>
        <Text style={styles.time2}>20:30</Text>
        <Icon
          name="md-checkmark-done"
          size={20}
          color={"green"}
          style={styles.IconsCheck}
        />
        <Image
          source={{
            uri: "https://images.livemint.com/img/2020/10/08/1140x641/iStock-671091700_1602162868009_1602162936796.jpg",
          }}
          style={styles.circle2}
        />
      </View>

      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/dfc0/9993/40b953d60acb7f226118bea178e6baa7?Expires=1688342400&Signature=LpnRqmomSU-Kc~leoEMWUWcEGviVf7h9wv1fAw8fB7-HHqJSCvNCNlgxBp699LEgMhaNLnHhD9gFcKv-rESBF1TRJ8txNkDGoVtZ8ni0gRWPvk03ixpoqeoktHnyw~9gH7Ig1Aeo2hlEN127yr9SJjfPc9A5PknotgIIiRMmUWiYi37YAgK2EXsU4UQi6z~VGLMDLchYE21j5IoFVhMiG280p28VI6~MFvpA4X578oxwcQv5ZPz~kcsdnc4Yjltmit8~~GH-V5KwCSm4FWUsxhV8rRpYDUNXWOPVATaVB3ij1A4PUrpkp8G3W95E40RRJOPmkNYTsWt-0e7aPqg4Rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        }}
        style={styles.square}
      />
      <Text style={[styles.time3, {}]}>20:30</Text>
      <Icon
        name="md-checkmark-done"
        size={20}
        color={"green"}
        style={styles.IconsCheck1}
      />

<View style={styles.chatMsg}>
        <Image
          source={{
            uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
          }}
          style={styles.circle1}
        />
        <Text style={styles.textMsg}>
          lorem ipsum dolor sit a amet consectetur adipiscing. sit a amet
          consectetur .
        </Text>
        <Text style={styles.time}>20:30</Text>
      </View>

      <View style={styles.chatMsg2}>
        <Text style={styles.textMsg2}>
          lorem ipsum dolor sit a amet consectetur adipiscing. sit a amet
          consectetur .
        </Text>
        <Text style={styles.time2}>20:30</Text>
        <Icon
          name="md-checkmark-done"
          size={20}
          color={"green"}
          style={styles.IconsCheck}
        />
        <Image
          source={{
            uri: "https://images.livemint.com/img/2020/10/08/1140x641/iStock-671091700_1602162868009_1602162936796.jpg",
          }}
          style={styles.circle2}
        />
      </View>

      {/* <View style={styles.container1}>
      <TextInput
        style={styles.inputText}
        placeholder="Message"
        placeholderTextColor="#9093A6"
      />
      <Entypo name="attachment" size={25} color="#8A8A8A" style={styles.inputIcons} />
        <Ionicons name="camera-outline" size={30} color="#8A8A8A" style={styles.inputIcons} />
      <View style={styles.iconsContainer}>
        
      <View style={styles.circle}>
          <Ionicons name="mic-outline" size={32} color="#FFFFFF" />
        </View>
      </View>
    </View> */}

<UserChatAttachmentScreen />

    </ScrollView>
  );
};

const styles = StyleSheet.create({

  header: {
    top: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#8171F7",
    height: 80,
    paddingHorizontal: 10,
  },
  headerIcon: {
    // padding: 5
  },
  headerIconsCall: {
    left: 90,
  },
  headerIconsCamera: {
    left: 45,
  },
  headerIconsDots: {
    // left: 30,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    // marginRight: 10,
    // marginLeft: -60,
    right: 50,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    right: 40,
    bottom: 10,
  },
  lowerText: {
    right: 115,
    top: 10,
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "400",
  },



  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80, // Add top spacing of 20 units
  },
  text: {
    width: 100,
    height: 31,
    borderRadius: 30,
    fontWeight: "400",
    fontSize: 14,
    backgroundColor: "#E5E5E5",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#9093A6",
  },
  chatMsg: {
    flexDirection: "row",
    alignItems: "center",
    margin: 25,
    right: 15,
    top: 10,
  },
  chatMsg2: {
    flexDirection: "row",
    alignItems: "center",
    margin: 25,
    left: 35,
    bottom: 10,
  },
  circle1: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#8171F7",
  },
  circle2: {
    width: 50,
    height: 50,
    right: 20,
    borderRadius: 50,
    backgroundColor: "#8171F7",
  },
  textMsg: {
    flex: 1,
    marginLeft: 10,
    paddingBottom: 30,
    padding: 15,
    borderRadius: 30,
    fontWeight: "400",
    fontSize: 16,
    backgroundColor: "#E5E5E5",
    // textAlign: "center",
    // textAlignVertical: "center",
    color: "#363636",
    lineHeight: 22,
    // width: 300, // 320, 120Adjust the line height as needed
    // height: 100,
  },
  textMsg2: {
    flex: 1,
    marginLeft: 10,
    paddingBottom: 30,
    padding: 15,
    borderRadius: 30,
    fontWeight: "400",
    fontSize: 16,
    backgroundColor: "#E5E5E5",
    // textAlign: "center",
    // textAlignVertical: "center",
    color: "#363636",
    lineHeight: 22,
    // width: 300, // 320, 120Adjust the line height as needed
    // height: 100,
    left: 20,
  },
  time: {
    // flex: 1,
    right: 55,
    top: 30,
    color: "#929292",
  },
  time2: {
    right: 45,
    top: 30,
    color: "#929292",
  },
  time3: {
    left: 370,
    bottom: 20,
    color: "#929292",
  },
  IconsCheck: {
    right: 43,
    top: 30,
  },
  IconsCheck1: {
    left: 410,
    // top: -30,
    bottom: 40,
  },
  square: {
    // position: "absolute",
    width: 150,
    height: 150,
    left: 280,
    // opacity: 0.7,
    // resizeMode: "stretch"
    
    // top: 0,
  },
  // container1: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   marginHorizontal: 20,
  //   marginTop: 20,
  //   width: 550,
  // },
  // inputText: {
  //   flex: 1,
  //   height: 60,
  //   width: 350,
  //   left: 10,
  //   top: 0,
  //   fontWeight: "400",
  //   fontSize: 16,
  //   lineHeight: 22,
  //   borderRadius: 20,
  //   backgroundColor: "#ffff",
  //   paddingHorizontal: 16,
  //   color: "#8A8A8A",
   
    
  // },
  // iconsContainer: {
  //   flexDirection: "row",
  //   marginLeft: 10,
  // },
  // inputIcons: {
  //   right: 80,
  //   margin: 5,
  // },
  // circle: {
  //   width: 60,
  //   height: 60,
  //   right: 70,
  //   borderRadius: 50,
  //   backgroundColor: "#8171F7",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});



export default UserChatScreen;
