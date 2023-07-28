import { View, Text, ScrollView, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Fontisto,
  FontAwesome5,
  Entypo,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
const AdminAddNewGroup = ({ navigation }) => {
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
        <Text style={styles.headerText}>Add New Groups</Text>
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
              <MaterialCommunityIcons
                name="pencil-circle"
                size={50}
                color={"#51D5FE"}
                style={styles.ellipsisround}
              />

              <Ionicons
                name="ellipsis-horizontal-outline"
                size={24}
                color={"black"}
                style={styles.ellipsishorizontal}
                onPress={() => navigation.navigate('Add Your Group Chat')}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.cardContent}>Morning Workout Group</Text>
              <Text style={styles.cardContent1}>Edit</Text>
              <Text style={styles.cardContent2}>00 Members</Text>
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
  card: {
    right: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1.8,
    borderRadius: 1,
    width: 480,
    height: 350,
    margin: 5,
  },
  container2: {
    alignItems: "center",
    margin: 10,
  },
  circle1: {
    width: 280,
    height: 230,
    right: 50,
    top: 10,
    borderRadius: 10,
    bottom: 0,
    backgroundColor: "#8171F7",
  },
  ellipsisround: {
    top: 30,
    right: 65,
  },
  ellipsishorizontal: {
    left: 35,
    bottom: 0,
  },
  cardContent: {
    right: 90,
    top: 30,
    fontWeight: "600",
    fontSize: 20,
    letterSpacing: 3,
    lineHeight: 24,
  },
  cardContent1: {
    color: '#53C1FE',
    left: 325,
    top: 7,
    fontWeight: "400",
    fontSize: 16,
  },
  cardContent2: {
    right: 90,
    top: 30,
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 1,
    lineHeight: 24,
  },
});

export default AdminAddNewGroup;
