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
import { Ionicons, Entypo } from "@expo/vector-icons";
const UserChatAttachmentScreen = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>

<View style={styles.container1}>
      <TextInput
        style={styles.inputText}
        placeholder="Message"
        placeholderTextColor="#9093A6"
      />
      <Entypo name="attachment" size={25} color="#8A8A8A" style={styles.inputIcons}  onPress={toggleModal} />
        <Ionicons name="camera-outline" size={30} color="#8A8A8A" style={styles.inputIcons} />
      <View style={styles.iconsContainer}>
        
      <View style={styles.circle}>
          <Ionicons name="mic-outline" size={32} color="#FFFFFF" />
        </View>
      </View>
    </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* <Text style={styles.modalText}>Select an option:</Text> */}
            <View style={styles.iconContainer}>
              <View style={styles.circleIcons}>
                <Ionicons
                  name="ios-document"
                  size={50}
                  color="#fff"
                  style={styles.docIcons}
                />
              </View>
              <View style={styles.circleIcons}>
                <Ionicons
                  name="ios-musical-notes"
                  size={50}
                  color="#fff"
                  style={styles.musicIcons}
                />
              </View>
              <View style={styles.circleIcons}>
                <Ionicons
                  name="ios-videocam"
                  size={50}
                  color="#fff"
                  style={styles.musicIcons}
                />
              </View>
            </View>
            <View style={styles.circle1}>
              <Ionicons
                name="ios-image"
                size={50}
                color="#fff"
                style={styles.imageIcons}
              />
            </View>
            <View style={{ bottom: 275, left: 200 }}>
              <Button title="Close Modal" onPress={toggleModal} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: 20,
        width: 550,
      },
      inputText: {
        flex: 1,
        height: 60,
        width: 350,
        left: 10,
        top: 0,
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 22,
        borderRadius: 20,
        backgroundColor: "#ffff",
        paddingHorizontal: 16,
        color: "#8A8A8A",
       
        
      },
      iconsContainer: {
        flexDirection: "row",
        marginLeft: 10,
      },
      inputIcons: {
        right: 80,
        margin: 5,
      },
      circle: {
        width: 60,
        height: 60,
        right: 70,
        borderRadius: 50,
        backgroundColor: "#8171F7",
        alignItems: "center",
        justifyContent: "center",
      },

    modalContainer: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        left: 0,
        top: 675,
        // backgroundColor: 'red',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        width: "100%",
        height: 300,
        alignItems: "center",
      },
      modalText: {
        fontSize: 16,
        marginBottom: 10,
      },
      iconContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginVertical: 20,
      },
    //   circle: {
    //     backgroundColor: "#8171F7",
    //     width: 70,
    //     height: 70,
    //     borderRadius: 50,
    //     right: 70,
    //     bottom: 30,
    //      },
      docIcons: {
        textAlign: 'center',
        top: 200,
        left: 100  ,
         },
      musicIcons: {
        textAlign: 'center',
        top: 25,
        right: 5,
          },
          imageIcons: {
            textAlign: 'center',
            top: 0,
            right: 0,
              },
})

export default UserChatAttachmentScreen;

