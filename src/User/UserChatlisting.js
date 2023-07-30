import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
    Fontisto,
    FontAwesome,
    Entypo,
  } from "@expo/vector-icons";

const UserChatlisting = ({ navigation }) => {
    return (
        // <View>
    
        <ScrollView >
          <View style={styles.container}>
        <MaterialCommunityIcons
          name="less-than"
          size={18}
          color="black"
          style={styles.BackIcons}
          onPress={() => navigation.navigate("Group Chats")}
        />
        <Pressable onPress={() => navigation.navigate("More Option")}>
          <Text style={styles.content1}>Back</Text>
        </Pressable>
        <Text style={styles.headerContent}>Chat</Text>
        <MaterialIcons
          name="search"
          size={32}
          color="black"
          style={styles.searchIcons}
          onPress={() => navigation.navigate("Group Chats")}
        />
      </View>
    
          <Text style={styles.content}>CONVERSATIONS</Text>
          {/* <ScrollView> */}
          <View style={styles.card}>
            <View style={styles.container2}>
            <Pressable onPress={() => navigation.navigate('User Chat Screen')}>
              <Image
                source={{
                  uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
                }}
                style={styles.circle1}
              />
              </Pressable>
              <View style={styles.contentText}>
                <Text style={styles.chatContentName}>Alex Neo</Text>
                <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
              </View>
              <View style={styles.contentTime2}>
                <Text>08:30pm</Text>
                <Text style={styles.circle2}>+10</Text>
              </View>
            </View>
          </View>
    
          <View style={styles.card}>
            <View style={styles.container2}>
            <Pressable onPress={() => navigation.navigate('Group Chats')}>
              <Image
                source={{
                  uri: "https://m.media-amazon.com/images/I/31dsKMV+ZDL._SX331_BO1,204,203,200_.jpg",
                }}
                style={styles.circle1}
              />
              </Pressable>
              <View style={styles.contentText}>
                <Text style={styles.chatContentName}>Public Group</Text>
                <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
              </View>
              <View style={styles.contentTime}>
                <Text>08:30pm</Text>
                <Text style={styles.circle2}>+12</Text>
              </View>
            </View>
          </View>
    
          <View style={styles.card}>
            <View style={styles.container2}>
            <TouchableOpacity onPress={() => {
              
            }}>
              <Image
                source={{
                  uri: "https://simoncamilleri.com/wp-content/uploads/2022/12/apple.jpg",
                }}
                style={styles.circle1}
              />
              </TouchableOpacity>
              <View style={styles.contentText}>
                <Text style={styles.chatContentName}>Warrior Group</Text>
                <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
              </View>
              <View style={styles.contentTime1}>
                <Text>08:30pm</Text>
                <Text style={styles.circle2}>+15</Text>
              </View>
            </View>
          </View>
    
          <View style={styles.card}>
            <View style={styles.container2}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1551292831-023188e78222?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmF3fGVufDB8MHwwfHw%3D&w=1000&q=80",
                }}
                style={styles.circle1}
              />
              <View style={styles.contentText}>
                <Text style={styles.chatContentName}>Jame Son</Text>
                <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
              </View>
              <View style={styles.contentTime}>
                <Text>08:30pm</Text>
                <Text style={styles.circle2}>+12</Text>
              </View>
            </View>
          </View>
    
          <View style={styles.card}>
            <View style={styles.container2}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
                }}
                style={styles.circle1}
              />
              <View style={styles.contentText}>
                <Text style={styles.chatContentName}>Silas Sperow</Text>
                <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
              </View>
              <View style={styles.contentTime3}>
                <Text>08:30pm</Text>
                <Text style={styles.circle2}>+12</Text>
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
                <Text style={styles.chatContentName}>Ashton David</Text>
                <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
              </View>
              <View style={styles.contentTime4}>
                <Text>08:30pm</Text>
                <Text style={styles.circle2}>+12</Text>
              </View>
            </View>
          </View>
    
          {/* </View> */}
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
            left: 320,
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
            left: 145,
            // fontSize: 20,
            // fontWeight: "600",
            // lineHeight: 27.24,
            // top: 5,
            fontFamily: "Open Sans",
            fontSize: 22,
            // fontStyle: "italic",
            fontWeight: "800",
            lineHeight: 35,
            letterSpacing: 0,
            textAlign: "left",
            // fontFamily: "Monotype Corsiva",
            // fontSize: 26,
            // fontStyle: "italic",
            // fonWeight: "400",
            lineHeight: 29,
            letterSpacing: 0,
            textAlign: "left",
          },
          content1: {
            paddingHorizontal: 10,
            paddingVertical: 5,
            fontSize: 16,
            fontWeight: "400",
          },
      content: {
        // fontFamily: 'Open Sans',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 20,
        lineHeight: 27,
        color: "#8071F7",
        left: 13,
        top: 15,
      },
      card: {
        left: 10,
        top: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 1,
        borderRadius: 1,
        width: 450,
        height: 150,
        margin: 5,
      },
      container2: {
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
      },
      contentText: {
        left: 40,
      },
      circle1: {
        width: 100,
        height: 100,
        borderRadius: 50,
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
        left: 115,
        bottom: 5,
      },
      contentTime1: {
        left: 100,
        bottom: 5,
      },
      contentTime2: {
        left: 124,
        bottom: 5,
      },
      contentTime3: {
        left: 106,
        bottom: 5,
      },
      contentTime4: {
        left: 95,
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
export default UserChatlisting