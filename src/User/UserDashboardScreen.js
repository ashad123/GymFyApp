import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
const UserDashboardScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#e1e1e8", flex: 1 }}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name="less-than"
            size={18}
            color="#fff"
            style={styles.headerIcon}
            onPress={() => navigation.navigate("Group Chats")}
          />
          <Text style={styles.content}>Back</Text>
          <View style={styles.headerContent}>
            <Text style={styles.headerText}>Posts</Text>
          </View>

          <Ionicons
            name="search"
            size={24}
            color="#FFFFFF"
            style={styles.headerIconsCamera}
          />
          <Ionicons
            name="ellipsis-vertical"
            size={24}
            color="#FFFFFF"
            style={styles.headerIconsDots}
            onPress={() => setModalVisible(true)}
          />
        </View>
        <View style={styles.headerMenuIcons}>
          <Ionicons
            name="md-newspaper-outline"
            size={40}
            color="#FFFFFF"
            style={styles.newspaperIcons}
            onPress={() => setModalVisible(true)}
          />
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={40}
            color="#FFFFFF"
            style={styles.chatIcons}
            onPress={() => navigation.navigate("Admin Notification")}
          />
          <FontAwesome
            name="address-book-o"
            size={40}
            color="#FFFFFF"
            style={styles.addressBookIcons}
            onPress={() => navigation.navigate("User Your Groups")}
          />
          <MaterialIcons
            name="chat-bubble-outline"
            size={40}
            color="#FFFFFF"
            style={styles.chatbubbleIcons}
            onPress={() => setModalVisible(true)}
          />
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.userDetailed}>
            <Image
              // source={require('../assets/987987987 1.png')}
              source={{
                uri: "https://t4.ftcdn.net/jpg/01/22/11/39/240_F_122113922_r1DQD7sU7SO7cdAmluxGoq18rpuVHPzz.jpg   ",
              }}
              style={styles.square}
            />
            <Text style={styles.userName}>Alex Neo</Text>
            <Text style={styles.userTime}>Nov 08,2021, 10:20 pm</Text>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.userheadertitle}>
            <Text style={styles.userheadertitleContent}>
              Workout Everyday Shape Your
            </Text>
            <Text style={styles.userheadertitleContent}>
              Body With GymiFy!{" "}
            </Text>
            <Text style={styles.userheadertitleContent1}>
              lorem ipsum dolor sit amet adipiscing a elit
            </Text>
            <Text style={styles.userheadertitleContent1}>
              Porttitor suspendisse cursus.
            </Text>
          </View>
          <View style={styles.workoutimage}>
            <Image
              // source={require('../assets/987987987 1.png')}
              source={{
                uri: "https://as2.ftcdn.net/v2/jpg/00/99/82/15/1000_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg",
              }}
              style={styles.userworkoutPicture}
            />
            <Text style={styles.imageContent}>Workout Everyday Shape</Text>
            <Text style={styles.imageContent1}>Your Body With GymiFy</Text>
          </View>
          <View style={styles.likecommentshareIcons}>
            <View style={styles.heartContainer}>
              <Ionicons
                name="heart-outline"
                size={30}
                color="#FFFFFF"
                style={styles.heartIcons}
                onPress={() => setModalVisible(true)}
              />
              <Text style={styles.heartContent}>4 Likes</Text>
            </View>
            <View style={styles.commentContainer}>
              <MaterialCommunityIcons
                name="comment-outline"
                size={30}
                color="#FFFFFF"
                style={styles.commentIcons}
                onPress={() => setModalVisible(true)}
              />
              <Text style={styles.commentContent}>0 Comments</Text>
              <AntDesign
                name="sharealt"
                size={30}
                color="#27A9F2"
                style={styles.shareIcons}
                onPress={() => setModalVisible(true)}
              />
            </View>
            <View style={styles.horizontalLine} />
          </View>
          <View style={styles.addCommentcontainer}>
            <TextInput
              placeholder="Add Comments"
              style={styles.addcommentinput}
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate()}
            >
              <Text style={styles.btnText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mainContainer1}>
          <View style={styles.userDetailed}>
            <Image
              // source={require('../assets/987987987 1.png')}
              source={{
                uri: "https://t4.ftcdn.net/jpg/01/22/11/39/240_F_122113922_r1DQD7sU7SO7cdAmluxGoq18rpuVHPzz.jpg   ",
              }}
              style={styles.square}
            />
            <Text style={styles.userName}>Alex Neo</Text>
            <Text style={styles.userTime}>Nov 08,2021, 10:20 pm</Text>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.userheadertitle}>
            <Text style={styles.userheadertitleContent}>
              Workout Everyday Shape Your
            </Text>
            <Text style={styles.userheadertitleContent}>
              Body With GymiFy!{" "}
            </Text>
            <Text style={styles.userheadertitleContent1}>
              lorem ipsum dolor sit amet adipiscing a elit
            </Text>
            <Text style={styles.userheadertitleContent1}>
              Porttitor suspendisse cursus.
            </Text>
            <Text style={styles.userheadertitleContentpart}>
              lorem ipsum dolor sit amet adipiscing a elit sit a Porttitor
              suspendisse cursus diam a sit sit a Porttitor suspendisse cursus
              diam a sit egestas euismod vitae a condimentum vita arcu justo
              adipiscing.
            </Text>
            <Text style={styles.userheadertitlename}>Jame Son!</Text>
            <Text style={styles.userheadertitlewises}>Thanks!</Text>
            <Text style={styles.userheadertitlename1}>Alex Neo</Text>
          </View>
          <View style={styles.likecommentshareIcons}>
            <View style={styles.heartContainer}>
              <Ionicons
                name="heart-outline"
                size={30}
                color="#FFFFFF"
                style={styles.heartIcons}
                onPress={() => setModalVisible(true)}
              />
              <Text style={styles.heartContent}>4 Likes</Text>
            </View>
            <View style={styles.commentContainer}>
              <MaterialCommunityIcons
                name="comment-outline"
                size={30}
                color="#FFFFFF"
                style={styles.commentIcons}
                onPress={() => setModalVisible(true)}
              />
              <Text style={styles.commentContent}>0 Comments</Text>
              <AntDesign
                name="sharealt"
                size={30}
                color="#27A9F2"
                style={styles.shareIcons}
                onPress={() => setModalVisible(true)}
              />
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.addCommentcontainer1}>
              <TextInput
                placeholder="Add Comments"
                style={styles.addcommentinput}
              />
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate()}
              >
                <Text style={styles.btnText}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.userDetailed}>
            <Image
              // source={require('../assets/987987987 1.png')}
              source={{
                uri: "https://t4.ftcdn.net/jpg/01/22/11/39/240_F_122113922_r1DQD7sU7SO7cdAmluxGoq18rpuVHPzz.jpg   ",
              }}
              style={styles.square}
            />
            <Text style={styles.userName}>Alex Neo</Text>
            <Text style={styles.userTime}>Nov 08,2021, 10:20 pm</Text>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.userheadertitle}>
            <Text style={styles.userheadertitleContent}>
              Workout Everyday Shape Your
            </Text>
            <Text style={styles.userheadertitleContent}>
              Body With GymiFy!{" "}
            </Text>
            <Text style={styles.userheadertitleContent1}>
              lorem ipsum dolor sit amet adipiscing a elit
            </Text>
            <Text style={styles.userheadertitleContent1}>
              Porttitor suspendisse cursus.
            </Text>
          </View>
          <View style={styles.workoutimage}>
            <Image
              // source={require('../assets/987987987 1.png')}
              source={{
                uri: "https://as2.ftcdn.net/v2/jpg/00/99/82/15/1000_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg",
              }}
              style={styles.userworkoutPicture}
            />
            <Text style={styles.imageContent}>Workout Everyday Shape</Text>
            <Text style={styles.imageContent1}>Your Body With GymiFy</Text>
          </View>
          <View style={styles.likecommentshareIcons}>
            <View style={styles.heartContainer}>
              <Ionicons
                name="heart-outline"
                size={30}
                color="#FFFFFF"
                style={styles.heartIcons}
                onPress={() => setModalVisible(true)}
              />
              <Text style={styles.heartContent}>4 Likes</Text>
            </View>
            <View style={styles.commentContainer}>
              <MaterialCommunityIcons
                name="comment-outline"
                size={30}
                color="#FFFFFF"
                style={styles.commentIcons}
                onPress={() => setModalVisible(true)}
              />
              <Text style={styles.commentContent}>0 Comments</Text>
              <AntDesign
                name="sharealt"
                size={30}
                color="#27A9F2"
                style={styles.shareIcons}
                onPress={() => setModalVisible(true)}
              />
            </View>
            <View style={styles.horizontalLine} />
          </View>
          <View style={styles.addCommentcontainer}>
            <TextInput
              placeholder="Add Comments"
              style={styles.addcommentinput}
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate()}
            >
              <Text style={styles.btnText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    top: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#A99EFE",
    height: 142,
    paddingHorizontal: 10,
  },
  headerIcon: {
    left: 5,
    bottom: 30,
  },
  content: {
    right: 72,
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
    bottom: 30,
  },
  headerIconsCall: {
    left: 90,
  },
  // headerIconsCamera: {
  //   left: 100,
  // },
  headerIconsDots: {
    bottom: 30,
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
    right: 10,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    right: 5,
    bottom: 30,
  },
  lowerText: {
    right: 105,
    top: 10,
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "400",
  },
  headerIconsCall: {
    left: 27,
  },
  headerIconsCamera: {
    left: 80,
    bottom: 30,
  },
  textDay: {
    width: 100,
    height: 31,
    left: 200,
    top: 70,
    borderRadius: 30,
    fontWeight: "400",
    fontSize: 14,
    backgroundColor: "#E5E5E5",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#9093A6",
  },
  container: {
    height: 201,
    width: 259,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    left: 20,
    top: 30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1, // For Android devices, set elevation to 0
    backgroundColor: "#fff",
  },

  textWithNameContainer: {
    top: 15,
    right: 120,
    alignItems: "flex-start",
    right: 0,
    // marginTop: 10, // Adjust the margin according to your design
  },
  textName: {
    // width: 100,
    // height: 31,
    top: 18,
    left: 3,
    borderRadius: 30,
    fontWeight: "400",
    fontSize: 14,
    // backgroundColor: "blue",
    textAlign: "center",
    textAlignVertical: "center",
    // color: "#9093A6",
  },
  newspaperIcons: {
    // top: 50,
  },
  chatIcons: { left: 100 },
  addressBookIcons: { left: 200 },
  chatbubbleIcons: { left: 295 },
  headerMenuIcons: {
    flexDirection: "row",
    // marginLeft: 20,
    paddingLeft: 30,
    bottom: 5,
  },
  mainContainer: {
    width: 480,
    height: 650,
    top: 10,
    margin: 12,
    // paddingRight: 10,
    fontSize: 18,
    color: "black",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    backgroundColor: "#F4F5F7",
    borderRadius: 6,
  },
  mainContainer1: {
    width: 480,
    height: 700,
    top: 10,
    margin: 12,
    // paddingRight: 10,
    fontSize: 18,
    color: "black",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    backgroundColor: "#F4F5F7",
    borderRadius: 6,
  },
  square: {
    // position: "absolute",
    width: 120,
    height: 85,
    left: 23,
    top: 30,
    // backgroundColor: 'red',
    borderRadius: 20,
  },
  userDetailed: {
    flexDirection: "row",
  },
  workoutimage: {
    bottom: 70,
  },
  likecommentshareIcons: {
    bottom: 70,
  },
  userName: {
    top: 40,
    left: 40,
    fontWeight: "600",
    fontSize: 20,
  },
  userTime: {
    top: 65,
    right: 40,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 30,
    color: "#585858",
  },
  horizontalLine: {
    borderBottomColor: "rgba(145, 145, 145, 0.6)",
    borderBottomWidth: 1,
    top: 50,
    width: 425,
    left: 30,
  },
  userheadertitle: {
    top: 80,
    left: 15,
    flex: 1,
    // justifyContent: 'center',
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  userheadertitleContent: {
    fontWeight: "600",
    fontSize: 20,
    // lineHeight: 26,
    textAlign: "left",
  },
  userheadertitleContent1: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 21.79,
    color: "#494949",
    top: 10,
  },
  userheadertitleContentpart: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 21.79,
    color: "#494949",
    top: 30,
  },
  userheadertitlename: {
    fontWeight: "400",
    fontSize: 16,
    top: 80,
  },
  userheadertitlewises: {
    fontWeight: "400",
    fontSize: 16,
    top: 100,
  },
  userheadertitlename1: {
    fontWeight: "400",
    fontSize: 16,
    top: 110,
  },
  userworkoutPicture: {
    width: 430,
    height: 223,
    left: 25,
    top: 100,
    // alignItems: 'center',
    // flexShrink: 0,
    resizeMode: "cover",
  },
  imageContent: {
    left: 35,
    top: 40,
    fontWeight: "600",
    fontSize: 20,
    color: "#fff",
  },
  imageContent1: {
    fontWeight: "600",
    fontSize: 16,
    left: 35,
    top: 40,
    color: "#fff",
  },
  heartContainer: {
    flexDirection: "row",
    top: 60,
    left: 15,
  },
  heartIcons: {
    paddingLeft: 10,
    top: 4,
    color: "#B4B9BD",
  },
  heartContent: {
    color: "#B4B9BD",
    top: 10,
    left: 8,
    fontWeight: "400",
    fontSize: 16,
  },
  commentContainer: {
    flexDirection: "row",
    top: 28,
    left: 200,
  },
  commentIcons: {
    paddingLeft: 10,
    top: 4,
    color: "#B4B9BD",
  },
  commentContent: {
    top: 10,
    left: 8,
    fontWeight: "400",
    fontSize: 16,
    color: "#B4B9BD",
  },
  shareIcons: {
    paddingLeft: 10,
    top: 4,
    left: 85,
  },
  addCommentcontainer: {
    flexDirection: "row",
    bottom: 10,
    left: 30,
  },
  addCommentcontainer1: {
    flexDirection: "row",
    top: 60,
    left: 30,
  },
  addcommentinput: {
    fontWeight: "400",
    fontSize: 16,
    color: "#B4B9BD",
  },
  btn: {
    width: 85,
    height: 35,
    bottom: 3,
    left: 220,
    margin: 12,
    alignItems: "center",
    padding: 4,
    // paddingLeft: 50,
    fontSize: 18,
    right: 10,
    color: "black",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    backgroundColor: "#27A9F2",
    borderRadius: 50,
    fontWeight: "600",
    // fontSize: 18,
  },
  btnText: {
    fontFamily: "OpenSans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 25,
    color: "#FFFFFF",
  },
});

export default UserDashboardScreen;
