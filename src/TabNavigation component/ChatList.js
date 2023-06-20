import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

const ChatList = () => {
  return (
    // <View>

    
    <View style={styles.container}>
      <Text style={styles.content}>CONVERSATIONS</Text>
     {/* <ScrollView> */}
      <View style={styles.card}>
            <View style={styles.container2}>
              <Image
                source={{
                  uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
                }}
                style={styles.circle1}
              />
              <View style={styles.contentText}>
              <Text style={styles.chatContentName}>Alex Neo</Text>
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
                  uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
                }}
                style={styles.circle1}
              />
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
              <Image
                source={{
                  uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
                }}
                style={styles.circle1}
              />
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
                  uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
                }}
                style={styles.circle1}
              />
              <View style={styles.contentText}>
              <Text style={styles.chatContentName}>Silas Sperow</Text>
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
                  uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
                }}
                style={styles.circle1}
              />
              <View style={styles.contentText}>
              <Text style={styles.chatContentName}>Ashton David</Text>
              <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
              </View>
              <View style={styles.contentTime}>
                <Text>08:30pm</Text>
                <Text style={styles.circle2}>+12</Text>
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
    top: 60,
  },
  content: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 27,
    color: "#8071F7",
    left: 10,
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
    margin: 5
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
fontStyle: 'normal',
fontWeight: 600,
fontSize: 20,
lineHeight: 27,
color: '#000000'

  },
  lowerContent: {
    // top: 30,
    // right: 80,
    // fontFamily: 'Open Sans',
fontStyle: 'normal',
// fontWeight: 400,
fontSize: 14,
lineHeight: 19,
color: '#888888'
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
  color: '#FFF'
},
});

export default ChatList;
