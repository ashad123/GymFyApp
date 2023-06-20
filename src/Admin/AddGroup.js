import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/FontAwesome";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const AddGroup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.container2}>
          <Icon
            name="user-plus"
            size={40}
            color={"#fff"}
            style={styles.icons}
            onPress={() => {}}
          />
          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Add User</Text>
            <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
          </View>
        </View>
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
          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Invite User</Text>
            <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
          </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 165,
    height: 27,
    left: 14,
  },
  card: {
    left: 10,
    top: 50,
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
});

export default AddGroup;
