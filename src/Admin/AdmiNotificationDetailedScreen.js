import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Fontisto,
  FontAwesome,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";

const AdmiNotificationDetailedScreen = ({ navigation }) => {
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
      <Text style={styles.headerText}>Notifications Detail</Text>

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
          {/* <Fontisto
            name="ellipse"
            size={10}
            color={"red"}
            style={styles.ellipsisround}
          /> */}

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
            <Text style={styles.lowerContent1}>
              lorem ipsum dolor sit amet to adipiscing amet to Porttitor
              suspendisse cursus.
            </Text>
            <View style={styles.horizontalLine} />
          </View>
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
            <MaterialCommunityIcons
              name="share-outline"
              size={30}
              color="#FFFFFF"
              style={styles.shareIcons}
              onPress={() => setModalVisible(true)}
            />
            <Text style={styles.ShareContent}>Share</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Pressable onPress={() => navigation.navigate("Group List")}>
              <Image
                source={{
                  uri: "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B",
                }}
                style={styles.circle2}
              />
            </Pressable>
            <View style={styles.container3}>
              <TextInput
                style={styles.inputText}
                placeholder="Write a comment..."
                placeholderTextColor="#9093A6"
              />
              <Entypo
                name="attachment"
                size={25}
                color="#8A8A8A"
                style={styles.inputIcons}
              />
              <Ionicons
                name="camera-outline"
                size={30}
                color="#8A8A8A"
                style={styles.inputIcons}
              />
              <View style={styles.iconsContainer}>
                {/* <View style={styles.circle}>
          <Ionicons name="mic-outline" size={32} color="#FFFFFF" />
        </View> */}
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
          <Pressable onPress={() => navigation.navigate("Chat List")}>
            <Image
              source={{
                uri: "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
              }}
              style={styles.circle1}
            />
          </Pressable>
          {/* <Fontisto
            name="ellipse"
            size={10}
            color={"red"}
            style={styles.ellipsisround}
          /> */}

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
            <Text style={styles.lowerContent1}>
              lorem ipsum dolor sit amet to adipiscing amet to Porttitor
              suspendisse cursus.
            </Text>
            <View style={styles.horizontalLine} />
          </View>
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
            <MaterialCommunityIcons
              name="share-outline"
              size={30}
              color="#FFFFFF"
              style={styles.shareIcons}
              onPress={() => setModalVisible(true)}
            />
            <Text style={styles.ShareContent}>Share</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
              }}
              style={styles.circle2}
            />
            <View style={styles.container3}>
              <TextInput
                style={styles.inputText}
                placeholder="Write a comment..."
                placeholderTextColor="#9093A6"
              />
              <Entypo
                name="attachment"
                size={25}
                color="#8A8A8A"
                style={styles.inputIcons}
              />
              <Ionicons
                name="camera-outline"
                size={30}
                color="#8A8A8A"
                style={styles.inputIcons}
              />
              <View style={styles.iconsContainer}>
                {/* <View style={styles.circle}>
          <Ionicons name="mic-outline" size={32} color="#FFFFFF" />
        </View> */}
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
          <Pressable onPress={() => navigation.navigate("Chat List")}>
            <Image
              source={{
                uri: "https://www.verywellmind.com/thmb/Eww5tSxM2eYCfxikvK2THFxRSA0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1411373323-6988f2ee3a17422084a3c7bbff5b4d4a.jpg",
              }}
              style={styles.circle1}
            />
          </Pressable>
          {/* <Fontisto
            name="ellipse"
            size={10}
            color={"red"}
            style={styles.ellipsisround}
          /> */}

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
            <Text style={styles.lowerContent1}>
              lorem ipsum dolor sit amet to adipiscing amet to Porttitor
              suspendisse cursus.
            </Text>
            <View style={styles.horizontalLine} />
          </View>
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
            <MaterialCommunityIcons
              name="share-outline"
              size={30}
              color="#FFFFFF"
              style={styles.shareIcons}
              onPress={() => setModalVisible(true)}
            />
            <Text style={styles.ShareContent}>Share</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri: "https://cdn.shopify.com/s/files/1/0850/2114/files/tips_to_help_heighten_senses_480x480.png?v=1624399167",
              }}
              style={styles.circle2}
            />
            <View style={styles.container3}>
              <TextInput
                style={styles.inputText}
                placeholder="Write a comment..."
                placeholderTextColor="#9093A6"
              />
              <Entypo
                name="attachment"
                size={25}
                color="#8A8A8A"
                style={styles.inputIcons}
              />
              <Ionicons
                name="camera-outline"
                size={30}
                color="#8A8A8A"
                style={styles.inputIcons}
              />
              <View style={styles.iconsContainer}>
                {/* <View style={styles.circle}>
          <Ionicons name="mic-outline" size={32} color="#FFFFFF" />
        </View> */}
              </View>
            </View>
          </View>
        </View>
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
  card: {
    left: 23,
    // top: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1.8,
    borderRadius: 1,
    width: 450,
    height: 350,
    margin: 5,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  container3: {
    flexDirection: "row",
    alignItems: "center",
    margin: 55,
    right: 10,
    width: 50,
  },
  circle1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    bottom: 13,
    backgroundColor: "#8171F7",
  },
  circle2: {
    width: 55,
    height: 53,
    borderRadius: 50,
    top: 50,
    left: 27,
    backgroundColor: "#8171F7",
  },
  ellipsisround: {
    right: 10,
    top: 10,
  },
  ellipsishorizontal: {
    left: 278,
    bottom: 45,
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
  horizontalLine: {
    borderBottomColor: "rgba(145, 145, 145, 0.6)",
    borderBottomWidth: 1,
    top: 70,
    width: 405,
    right: 155,
  },
  likecommentshareIcons: {
    bottom: 0,
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
    left: 160,
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
    left: 35,
    color: "#B4B9BD",
  },
  ShareContent: {
    top: 10,
    left: 45,
    fontWeight: "400",
    fontSize: 16,
    color: "#B4B9BD",
  },
  inputText: {
    // flex: 1,
    height: 50,
    width: 320,
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
  circle: {
    width: 60,
    height: 60,
    right: 70,
    borderRadius: 50,
    backgroundColor: "#8171F7",
    alignItems: "center",
    justifyContent: "center",
  },
  inputIcons: {
    right: 80,
    margin: 5,
  },
});

export default AdmiNotificationDetailedScreen;
