import { View, Text, StyleSheet, Pressable, Image, Modal } from "react-native";
import React, {useState} from "react";
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

const UserYourGroupsScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
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
          <Text style={styles.content}>Back</Text>
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

      <View style={styles.header}>
        <Text style={styles.headerText}>Your Groups</Text>
        
        <AntDesign
          name="pluscircle"
          size={25}
          color={"#53BFFE"}
          style={styles.plusIcons}
          onPress={() => navigation.navigate('User Package Plan')}
        />
       
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.container2}>
            <View style={{ flexDirection: "row" }}>
              <Pressable onPress={() => navigation.navigate("Chat List")}>
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/I/71ALzpMIJCL._SY355_.jpg",
                  }}
                  style={styles.circle1}
                />
              </Pressable>
              <Fontisto
                name="ellipse"
                size={12}
                color={"#53DA69"}
                style={styles.ellipsisround}
              />

              <Ionicons
                name="ellipsis-horizontal-outline"
                size={24}
                color={"black"}
                style={styles.ellipsishorizontal}
                onPress={() => setModalVisible(true)}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.cardContent}>Morning Workout </Text>
              <Text style={styles.cardContent}>Group</Text>
              <Text style={styles.cardContent}>42 Members</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.container2}>
            <View style={{ flexDirection: "row" , right: 10}}>
              <Pressable onPress={() => navigation.navigate("Chat List")}>
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/I/71ALzpMIJCL._SY355_.jpg",
                  }}
                  style={styles.circle1}
                />
              </Pressable>
              {/* <Fontisto
                name="ellipse"
                size={12}
                color={"#53DA69"}
                style={styles.ellipsisround}
              /> */}

              <Ionicons
                name="ellipsis-horizontal-outline"
                size={24}
                color={"black"}
                style={styles.ellipsishorizontal}
                onPress={() => setModalVisible(true)}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.cardContent}>Morning Workout </Text>
              <Text style={styles.cardContent}>Group</Text>
              <Text style={styles.cardContent}>42 Members</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.container2}>
            <View style={{ flexDirection: "row", right: 10 }}>
              <Pressable onPress={() => navigation.navigate("Chat List")}>
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/I/71ALzpMIJCL._SY355_.jpg",
                  }}
                  style={styles.circle1}
                />
              </Pressable>
              {/* <Fontisto
                name="ellipse"
                size={12}
                color={"#53DA69"}
                style={styles.ellipsisround}
              /> */}

              <Ionicons
                name="ellipsis-horizontal-outline"
                size={24}
                color={"black"}
                style={styles.ellipsishorizontal}
                onPress={() => setModalVisible(true)}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.cardContent}>Morning Workout </Text>
              <Text style={styles.cardContent}>Group</Text>
              <Text style={styles.cardContent}>42 Members</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.container2}>
            <View style={{ flexDirection: "row" }}>
              <Pressable onPress={() => navigation.navigate("Chat List")}>
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/I/71ALzpMIJCL._SY355_.jpg",
                  }}
                  style={styles.circle1}
                />
              </Pressable>
              <Fontisto
                name="ellipse"
                size={12}
                color={"#53DA69"}
                style={styles.ellipsisround}
              />

              <Ionicons
                name="ellipsis-horizontal-outline"
                size={24}
                color={"black"}
                style={styles.ellipsishorizontal}
                onPress={() => setModalVisible(true)}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.cardContent}>Morning Workout </Text>
              <Text style={styles.cardContent}>Group</Text>
              <Text style={styles.cardContent}>42 Members</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.container2}>
            <View style={{ flexDirection: "row" }}>
              <Pressable onPress={() => navigation.navigate("Chat List")}>
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/I/71ALzpMIJCL._SY355_.jpg",
                  }}
                  style={styles.circle1}
                />
              </Pressable>
              <Fontisto
                name="ellipse"
                size={12}
                color={"#53DA69"}
                style={styles.ellipsisround}
              />

              <Ionicons
                name="ellipsis-horizontal-outline"
                size={24}
                color={"black"}
                style={styles.ellipsishorizontal}
                onPress={() => setModalVisible(true)}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.cardContent}>Morning Workout </Text>
              <Text style={styles.cardContent}>Group</Text>
              <Text style={styles.cardContent}>42 Members</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.container2}>
            <View style={{ flexDirection: "row", right: 10 }}>
              <Pressable onPress={() => navigation.navigate("Chat List")}>
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/I/71ALzpMIJCL._SY355_.jpg",
                  }}
                  style={styles.circle1}
                />
              </Pressable>
              {/* <Fontisto
                name="ellipse"
                size={12}
                color={"#53DA69"}
                style={styles.ellipsisround}
              /> */}

              <Ionicons
                name="ellipsis-horizontal-outline"
                size={24}
                color={"black"}
                style={styles.ellipsishorizontal}
                onPress={() => setModalVisible(true)}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.cardContent}>Morning Workout </Text>
              <Text style={styles.cardContent}>Group</Text>
              <Text style={styles.cardContent}>42 Members</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.container2}>
            <View style={{ flexDirection: "row" }}>
              <Pressable onPress={() => navigation.navigate("Chat List")}>
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/I/71ALzpMIJCL._SY355_.jpg",
                  }}
                  style={styles.circle1}
                />
              </Pressable>
              <Fontisto
                name="ellipse"
                size={12}
                color={"#53DA69"}
                style={styles.ellipsisround}
              />

              <Ionicons
                name="ellipsis-horizontal-outline"
                size={24}
                color={"black"}
                style={styles.ellipsishorizontal}
                onPress={() => setModalVisible(true)}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.cardContent}>Morning Workout </Text>
              <Text style={styles.cardContent}>Group</Text>
              <Text style={styles.cardContent}>42 Members</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.container2}>
            <View style={{ flexDirection: "row" }}>
              <Pressable onPress={() => navigation.navigate("Chat List")}>
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/I/71ALzpMIJCL._SY355_.jpg",
                  }}
                  style={styles.circle1}
                />
              </Pressable>
              <Fontisto
                name="ellipse"
                size={12}
                color={"#53DA69"}
                style={styles.ellipsisround}
              />

              <Ionicons
                name="ellipsis-horizontal-outline"
                size={24}
                color={"black"}
                style={styles.ellipsishorizontal}
                onPress={() => setModalVisible(true)}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.cardContent}>Morning Workout </Text>
              <Text style={styles.cardContent}>Group</Text>
              <Text style={styles.cardContent}>42 Members</Text>
            </View>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            
            <View style={styles.removesNotification}>
                <Feather
                  style={styles.squaredIcons}
                  name="edit-2"
                  size={30}
                />
                <Text style={styles.editContent}>
                Edit group name
                </Text>
              </View>
              <View style={styles.saveandhideNotification}>
                <Ionicons
                  style={styles.squaredIcons}
                  name="save-outline"
                  size={30}
                />
                <Text style={styles.SaveContent}>
                Save post
                </Text>
                {/* <Text >Add this to your saved items.</Text> */}
              </View>
              <View style={styles.hideNotification}>
                <MaterialCommunityIcons
                  style={styles.squaredIcons}
                  name="file-excel-box-outline"
                  size={30}
                />
                <Text style={styles.hideContent}>
                Hide post
                </Text>
                {/* <Text >Add this to your saved items.</Text> */}
              </View>
            
              <View style={styles.removesNotification}>
                <Feather
                  style={styles.bellsIcons}
                  name="bell"
                  size={30}
                />
                <Text style={styles.onNotification}>
                Trun on notifications this post
                </Text>
              </View>
              <View style={styles.offNotification}>
                <Feather
                  style={styles.copyIcons}
                  name="link"
                  size={30}
                />
                <Text style={styles.copyContent} onPress={() => navigation.navigate('Admin Notification Detailed')}>
                Copy link
                </Text>
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Entypo
                  style={styles.textStyle}
                  name="circle-with-cross"
                  size={20}
                />
                {/* <Text style={styles.textStyle}>Hide Modal</Text> */}
              </Pressable>
            </View>
          </View>
        </Modal>

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
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: "400",
  },
  header: {
    flexDirection: "row",
  },
  headerContent: {
    left: 130,
    // fontSize: 20,
    // fontWeight: "600",
    // lineHeight: 27.24,
    // top: 5,
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
    left: 290,
  },
  headerText: {
    fontFamily: "Open Sans",
    fontSize: 22,
    fontWeight: "600",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "left",
    left: 27,
    bottom: 20,
    color: "#8071F7",
  },
  plusIcons: {
    left: 330,
    bottom: 15,
  },
  cardContainer: {
    flexDirection: "row",
    margin: 10,
    padding: 11,
  },
  card: {
    right: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1.8,
    borderRadius: 1,
    width: 200,
    height: 210,
    margin: 5,
  },
  container2: {
    alignItems: "center",
    margin: 10,
  },
  // container3: {

  //   alignItems: "center",
  //   margin: 0,
  // },
  circle1: {
    width: 85,
    height: 75,
    right: 20,
    top: 10,
    borderRadius: 10,
    bottom: 0,
    backgroundColor: "#8171F7",
  },
  ellipsisround: {
    top: 70,
    right: 33,
  },
  ellipsishorizontal: {
    left: 20,
    bottom: 0,
  },
  contentText: {
    left: 25,
    bottom: 0,
  },
  chatContentName: {
    margin: 10,
    // fontFamily: 'Open Sans',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 27,
    color: "#000000",
  },
  lowerContent: {
    // top: 30,
    // right: 80,
    // fontFamily: 'Open Sans',
    fontStyle: "normal",
    // fontWeight: 400,
    fontSize: 14,
    lineHeight: 19,
    color: "#888888",
  },
  lowerContent1: {
    top: 45,
    right: 155,
    fontSize: 16,
    lineHeight: 19,
    color: "#494949",
  },
  cardContent: {
    right: 10,
    top: 30,
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 1,
    lineHeight: 24,
  },
  centeredView: {
    // flex: 1,
//     width: 900,
// right: 160,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 620,
  },
  modalView: {
    width: 500,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 45,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  bellIcons: {
    // borderWidth: 1,
    width: 100,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 0.1,
    backgroundColor: "#EDF8FF",
  },
  offNotification: {
    flexDirection: "row",
    margin: 20,
    right: 50,
  },
  copyIcons: {
    right: 112,
  },
  copyContent: {
    right: 96,
    fontFamily: "Open Sans",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: "left",
  },
  modalText: {
    marginBottom: 15,
    top: 10,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 21.79,
    textAlign: "center",
    color: "#494949",
  },
  removesNotification: {
    flexDirection: "row",
    margin: 20,
    right: 50,
  },
  hideNotification: {
    flexDirection: "row",
    margin: 20,
    right: 80, 
  },
  saveandhideNotification: {
    flexDirection: "row",
    margin: 10,
    right: 80,
  },
  editContent: {
    right: 60,
    fontFamily: "Open Sans",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: "left",
  },
  SaveContent: {
    right: 60,
    fontFamily: "Open Sans",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: "left",
  },
  removeContent: {
    right: 30,
    fontFamily: "Open Sans",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: "left",
  },
  onNotification: {
    right: 10,
    fontFamily: "Open Sans",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: "left",
  },
  hideContent: {
    right: 60,
    fontFamily: "Open Sans",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: "left",
  },
  bellsIcons: {
    right: 27, 
  },
  squaredIcons: {
    // marginBottom: 15,
    // top: 10,
    right: 80,
    fontWeight: "400",
    // fontSize: 16,
    // lineHeight: 21.79,
    textAlign: "center",
    },
    removeContent: {
      right: 30,
      fontFamily: "Open Sans",
      fontSize: 18,
      fontWeight: "600",
      lineHeight: 25,
      letterSpacing: 0,
      textAlign: "left",
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "black",
      left: 220,
      bottom: 350,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
});

export default UserYourGroupsScreen