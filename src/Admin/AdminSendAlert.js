import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";


const AdminSendAlert = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="less-than"
          size={18}
          color="black"
          style={styles.BackIcons}
          onPress={() => navigation.navigate('Group Chats')}
        />
        <Pressable onPress={() => navigation.navigate('More Option')}>
          <Text style={styles.content}>Back</Text>
        </Pressable>
        <Text style={styles.headerContent}>Users</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
        <Pressable onPress={() => navigation.navigate('Chat List')}>
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
         
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
        <Pressable onPress={() => navigation.navigate('Chat List')}>
          <Image
            source={{
              uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
            }}
            style={styles.circle1}
          />
          </Pressable>
          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Jame Son</Text>
            <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
          </View>
         
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
        <Pressable onPress={() => navigation.navigate('Chat List')}>
          <Image
            source={{
              uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
            }}
            style={styles.circle1}
          />
          </Pressable>
          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Silas Sperow</Text>
            <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
          </View>
         
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
        <Pressable onPress={() => navigation.navigate('Chat List')}>
          <Image
            source={{
              uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
            }}
            style={styles.circle1}
          />
          </Pressable>
          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Jacob Rogres</Text>
            <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
          </View>
         
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
        <Pressable onPress={() => navigation.navigate('Chat List')}>
          <Image
            source={{
              uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
            }}
            style={styles.circle1}
          />
          </Pressable>
          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Susie Dunn</Text>
            <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
          </View>
         
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
        <Pressable onPress={() => navigation.navigate('Chat List')}>
          <Image
            source={{
              uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
            }}
            style={styles.circle1}
          />
          </Pressable>
          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Lucas Maria</Text>
            <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
          </View>
         
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
        <Pressable onPress={() => navigation.navigate('Chat List')}>
          <Image
            source={{
              uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
            }}
            style={styles.circle1}
          />
          </Pressable>
          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>James Oliver</Text>
            <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
          </View>
         
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
        <Pressable onPress={() => navigation.navigate('Chat List')}>
          <Image
            source={{
              uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
            }}
            style={styles.circle1}
          />
          </Pressable>
          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Ashton David</Text>
            <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
          </View>
         
        </View>
      </View>

    </ScrollView>
  )
}

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
        left: 145,
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 27.24,
        top: 5,
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
})

export default AdminSendAlert