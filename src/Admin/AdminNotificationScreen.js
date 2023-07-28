import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import React, { useState } from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Fontisto,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
// import { color } from "react-native-reanimated";

const AdminNotificationScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="less-than"
          size={18}
          color="black"
          style={styles.BackIcons}
          onPress={() => navigation.navigate("Group Chats")}
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
      <Text style={styles.headerText}>Notifications</Text>
      <View style={styles.card}>
        <View style={styles.container2}>
          <Pressable onPress={() => navigation.navigate("Chat List")}>
            <Image
              source={{
                uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
              }}
              style={styles.circle1}
            />
          </Pressable>
          <Fontisto
            name="ellipse"
            size={10}
            color={"red"}
            style={styles.ellipsisround}
          />

          <Ionicons
            name="ellipsis-horizontal-outline"
            size={24}
            color={"black"}
            style={styles.ellipsishorizontal}
            onPress={() => setModalVisible(true)}
          />

          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Alex Neo</Text>
            <Text style={styles.lowerContent}>
              lorem ipsum dolor amet ipsum sit
            </Text>
            <Text style={styles.lowerContent}>Today at 08:30pm</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
          <Pressable onPress={() => navigation.navigate("Chat List")}>
            <Image
              source={{
                uri: "https://m.media-amazon.com/images/I/715IvwGtUmL._AC_SX425_.jpg",
              }}
              style={styles.circle1}
            />
          </Pressable>
          <Ionicons
            name="ellipsis-horizontal-outline"
            size={24}
            color={"black"}
            style={styles.ellipsishorizontal}
          />

          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Jame Son</Text>
            <Text style={styles.lowerContent}>
              lorem ipsum dolor amet ipsum sit
            </Text>
            <Text style={styles.lowerContent}>Today at 08:30pm</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
          <Pressable onPress={() => navigation.navigate("Chat List")}>
            <Image
              source={{
                uri: "https://m.media-amazon.com/images/I/61pMwFSZspL._SY355_.jpg",
              }}
              style={styles.circle1}
            />
          </Pressable>
          <Ionicons
            name="ellipsis-horizontal-outline"
            size={24}
            color={"black"}
            style={styles.ellipsishorizontal}
          />

          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Silas Sperow</Text>
            <Text style={styles.lowerContent}>
              lorem ipsum dolor amet ipsum sit
            </Text>
            <Text style={styles.lowerContent}>Today at 08:30pm</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
          <Pressable onPress={() => navigation.navigate("Chat List")}>
            <Image
              source={{
                uri: "https://www.eatthis.com/wp-content/uploads/sites/4/2022/02/My-project-2022-02-16T105015.528.jpg?resize=640,468&quality=82&strip=all",
              }}
              style={styles.circle1}
            />
          </Pressable>
          <Ionicons
            name="ellipsis-horizontal-outline"
            size={24}
            color={"black"}
            style={styles.ellipsishorizontal}
          />

          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Jacob Rogres</Text>
            <Text style={styles.lowerContent}>
              lorem ipsum dolor amet ipsum sit
            </Text>
            <Text style={styles.lowerContent}>Today at 08:30pm</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
          <Pressable onPress={() => navigation.navigate("Chat List")}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
              }}
              style={styles.circle1}
            />
          </Pressable>
          <Fontisto
            name="ellipse"
            size={10}
            color={"red"}
            style={styles.ellipsisround}
          />
          <Ionicons
            name="ellipsis-horizontal-outline"
            size={24}
            color={"black"}
            style={styles.ellipsishorizontal}
          />

          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Susie Dunn</Text>
            <Text style={styles.lowerContent}>
              lorem ipsum dolor amet ipsum sit
            </Text>
            <Text style={styles.lowerContent}>Today at 08:30pm</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
          <Pressable onPress={() => navigation.navigate("Chat List")}>
            <Image
              source={{
                uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
              }}
              style={styles.circle1}
            />
          </Pressable>
          <Fontisto
            name="ellipse"
            size={10}
            color={"red"}
            style={styles.ellipsisround}
          />
          <Ionicons
            name="ellipsis-horizontal-outline"
            size={24}
            color={"black"}
            style={styles.ellipsishorizontal}
          />

          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Lucas Maria</Text>
            <Text style={styles.lowerContent}>
              lorem ipsum dolor amet ipsum sit
            </Text>
            <Text style={styles.lowerContent}>Today at 08:30pm</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
          <Pressable onPress={() => navigation.navigate("Chat List")}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
              }}
              style={styles.circle1}
            />
          </Pressable>
          <Ionicons
            name="ellipsis-horizontal-outline"
            size={24}
            color={"black"}
            style={styles.ellipsishorizontal}
          />

          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>James Oliver</Text>
            <Text style={styles.lowerContent}>
              lorem ipsum dolor amet ipsum sit
            </Text>
            <Text style={styles.lowerContent}>Today at 08:30pm</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
          <Pressable onPress={() => navigation.navigate("Chat List")}>
            <Image
              source={{
                uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
              }}
              style={styles.circle1}
            />
          </Pressable>
          <Ionicons
            name="ellipsis-horizontal-outline"
            size={24}
            color={"black"}
            style={styles.ellipsishorizontal}
          />

          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Ashton David</Text>
            <Text style={styles.lowerContent}>
              lorem ipsum dolor amet ipsum sit
            </Text>
            <Text style={styles.lowerContent}>Today at 08:30pm</Text>
          </View>
        </View>
      </View>
      <View style={styles.centeredView}>
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
              <View style={styles.bellIcons}>
                <FontAwesome name="bell-o" size={35} color={"#27A9F2"} />
              </View>
              <Text style={styles.modalText}>
                lorem ipsum dolor sit amet to adipiscing a elit Porttitor
                suspendisse cursus.
              </Text>
              <View style={styles.removesNotification}>
                <Entypo
                  style={styles.squaredIcons}
                  name="squared-cross"
                  size={30}
                />
                <Text style={styles.removeContent}>
                  Remove this Notification{" "}
                </Text>
              </View>
              <View style={styles.offNotification}>
                <FontAwesome
                  style={styles.slashbellIcons}
                  name="bell-slash"
                  size={30}
                />
                <Text style={styles.offNotificationContent} onPress={() => navigation.navigate('Admin Notification Detailed')}>
                Turn off Notification 
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
        {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
      </View>
    </ScrollView>
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
  content: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: "400",
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
  card: {
    left: 23,
    // top: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
    borderRadius: 1,
    width: 450,
    height: 115,
    margin: 5,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  contentText: {
    left: 25,
    bottom: 20,
  },
  circle1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    bottom: 13,
    backgroundColor: "#8171F7",
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
  contentTime: {
    left: 125,
    bottom: 5,
  },
  circle2: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 5,
    paddingTop: 7,
    fontSize: 10,
    fontWeight: 700,
    width: 30,
    height: 30,
    top: 15,
    left: 15,
    borderRadius: 25,
    backgroundColor: "#FFC989",
    color: "#FFF",
  },
  ellipsishorizontal: {
    left: 278,
    bottom: 45,
  },
  ellipsisround: {
    right: 10,
    top: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 620,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
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
    left: 200,
    bottom: 295,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
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
  squaredIcons: {
    // marginBottom: 15,
    // top: 10,
    right: 80,
    fontWeight: "400",
    // fontSize: 16,
    // lineHeight: 21.79,
    textAlign: "center",
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
  },
  slashbellIcons: {
    right: 100,
  },
  offNotificationContent: {
    right: 53,
    fontFamily: "Open Sans",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: "left",
  },
});

export default AdminNotificationScreen;
