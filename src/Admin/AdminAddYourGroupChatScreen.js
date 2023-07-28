import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/FontAwesome";
import {
  Feather,
  SimpleLineIcons,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Fontisto,
  FontAwesome,
  Entypo,
  AntDesign,
  FontAwesome6
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const AdminAddYourGroupChatScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [isInputOpen, setInputOpen] = useState(false);

  const handleClearText = () => {
    setSearchText('');
    setInputOpen(false);
  };

  
  return (
    <View style={{}}>
      <View style={styles.container4}>
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
        <TouchableOpacity onPress={() => setInputOpen(true)}>
          <MaterialIcons
            name="search"
            size={32}
            color="black"
            style={styles.searchIcons}
          />
        </TouchableOpacity>
        {isInputOpen && (
          <>
         
            <TextInput
              style={styles.TextInput}
              value={searchText}
              onChangeText={setSearchText}
              autoFocus
              placeholder="Search..."
            />
           
            {searchText !== "" && (
              <TouchableOpacity onPress={handleClearText}>
                <Icon name="times" size={20} />
              </TouchableOpacity>
            )}
          </>
        )}
      </View>

      <View style={styles.container}>
        <View style={styles.card}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Add User Your Group Chat")}
          >
            <View style={styles.container2}>
              <Icon
                name="user-plus"
                size={40}
                color={"#fff"}
                style={styles.icons}
                onPress={() => {}}
              />
              <View style={styles.contentText}>
                <Text style={styles.chatContentName}>Add users</Text>
                <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.container2}>
            <Feather
              name="trash-2"
              size={40}
              color={"#fff"}
              style={styles.iconsTrash}
              onPress={() => {}}
            />
            <View style={styles.contentText}>
              <Text style={styles.chatContentName}>Remove User</Text>
              <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.container2}>
            <SimpleLineIcons
              name="envelope-open"
              size={40}
              color={"#fff"}
              style={styles.iconsEnvelop}
              onPress={() => {
                // Handle search icon press
                // navigation.navigate('Add Groups')
              }}
            />
            <Pressable
              onPress={() => navigation.navigate("Invite Users Screen")}
            >
              <View style={styles.contentText}>
                <Text style={styles.chatContentName}>Invite User</Text>
                <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
              </View>
            </Pressable>
            {/* <View style={styles.contentTime}>
                <Text>08:30pm</Text>
                <Text style={styles.circle2}>+12</Text>
              </View> */}
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.container2}>
            <TouchableOpacity onPress={() => navigation.navigate("Chat List")}>
              <Image
                source={{
                  uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
                }}
                style={styles.circle1}
              />
            </TouchableOpacity>
            <View style={styles.contentText}>
              <Text style={styles.chatContentName}>Alex Neo</Text>
              <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.container2}>
            <Image
              source={{
                uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
              }}
              style={styles.circle1}
            />
            <View style={styles.contentText}>
              <Text style={styles.chatContentName}>Jame Son</Text>
              <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.container2}>
            <Image
              source={{
                uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
              }}
              style={styles.circle1}
            />
            <View style={styles.contentText}>
              <Text style={styles.chatContentName}>Silas Sperow</Text>
              <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.container2}>
            <Image
              source={{
                uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
              }}
              style={styles.circle1}
            />
            <View style={styles.contentText}>
              <Text style={styles.chatContentName}>Silas Sperow</Text>
              <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container4: {
    // position: "relative",
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

  container: {
    flex: 1,
    width: 165,
    height: 27,
    left: 14,
    top: 20,
  },
  card: {
    left: 10,
    bottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
    borderRadius: 0.9,
    width: 450,
    height: 120,
    margin: 5,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  icons: {
    backgroundColor: "#FFC989",
    height: 100,
    width: 100,
    borderRadius: 100,
    bottom: 10,
    right: 10,
    paddingLeft: 32,
    paddingTop: 25,
  },
  iconsTrash: {
    backgroundColor: "#51DBFF",
    height: 100,
    width: 100,
    borderRadius: 100,
    bottom: 10,
    right: 10,
    paddingLeft: 32,
    paddingTop: 25,
  },
  iconsEnvelop: {
    backgroundColor: "#FF95B0",
    height: 100,
    width: 100,
    borderRadius: 100,
    bottom: 10,
    right: 10,
    paddingLeft: 32,
    paddingTop: 25,
  },
  circle1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#8171F7",
  },
  contentText: {
    left: 20,
    bottom: 20,
  },
  chatContentName: {
    margin: 1,
    marginVertical: 10,
    // fontFamily: 'Open Sans',
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: 20,
    lineHeight: 25,
    color: "#000000",
  },
  lowerContent: {
    // top: 30,
    // right: 80,
    // fontFamily: 'Open Sans',
    fontStyle: "normal",
    // fontWeight: 400,
    fontSize: 14,
    // lineHeight: 19,
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
  TextInput: {
    marginLeft: 0,
    borderWidth: 1,
    padding: 5,
    width: 480,
    height: 50,
    right: 195,
    bottom: 5,
    fontSize: 18,
    color: "black",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    backgroundColor: "#F4F5F7",
    borderRadius: 6,
  },
  backIcon: {
    left: 30,
  },
});

export default AdminAddYourGroupChatScreen;
