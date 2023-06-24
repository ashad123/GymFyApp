import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Pressable } from "react-native";
import React from "react";


const ChatList = ({ navigation }) => {
  return (
    // <View>

    <ScrollView>
      {/* <View style={styles.container}> */}

      <Text style={styles.content}>CONVERSATIONS</Text>
      {/* <ScrollView> */}
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
          <View style={styles.contentTime}>
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
              uri: "https://s3-alpha-sig.figma.com/img/dfc0/9993/40b953d60acb7f226118bea178e6baa7?Expires=1688342400&Signature=LpnRqmomSU-Kc~leoEMWUWcEGviVf7h9wv1fAw8fB7-HHqJSCvNCNlgxBp699LEgMhaNLnHhD9gFcKv-rESBF1TRJ8txNkDGoVtZ8ni0gRWPvk03ixpoqeoktHnyw~9gH7Ig1Aeo2hlEN127yr9SJjfPc9A5PknotgIIiRMmUWiYi37YAgK2EXsU4UQi6z~VGLMDLchYE21j5IoFVhMiG280p28VI6~MFvpA4X578oxwcQv5ZPz~kcsdnc4Yjltmit8~~GH-V5KwCSm4FWUsxhV8rRpYDUNXWOPVATaVB3ij1A4PUrpkp8G3W95E40RRJOPmkNYTsWt-0e7aPqg4Rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
              uri: "https://s3-alpha-sig.figma.com/img/fbcb/ee5f/f7a127036b03797dd38e1acbfa4aa78a?Expires=1688342400&Signature=N8NtuZpIpJNr4yZdMEfT5JlbV9zziJIFwXwsdWXyWzJlewJdiWh3yfIaE9TjBFzgwglwrogcBxPSJKZkin0FFic5DPCWomYubV4KOPLnGhGCTzaCaAXz-8EX-VtO4d-CxfZ2AAs60z74~NzHRl4PSSC-TPYFrEZc~52Ji~ce1uZR2wFRm3SbglKoWYaUfo6XTK2ib3R55nfBjaQlYb68NEWvZwEb-LuAS83Yz9mHVbYqdnP1mUa3~wh14lW~lLfh4G2nMhZNvAUk8KJ4YMqzJkd0WoR8FPl6Txj2UF6Jt~LPF-4hWfnPo1KsSSwyBVNpc540UBDetx1lmZZj6nsY-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            }}
            style={styles.circle1}
          />
          </TouchableOpacity>
          <View style={styles.contentText}>
            <Text style={styles.chatContentName}>Warrior Group</Text>
            <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
          </View>
          <View style={styles.contentTime}>
            <Text>08:30pm</Text>
            <Text style={styles.circle2}>+15</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/6f0e/3986/2bb757511ed49a4377255ca5ccb89002?Expires=1688342400&Signature=EKyjONaXRIiwFK7Bo4DBA4Svl9Hfei5e1MIIkiBynu641Sy0gNWNyyxkDYKTeWTFnrQE9jolSCJZMxlmxqGKp5j9wnANlrVcdBzsIPv9s9cChRbIlqh2oDolDKcqUU9jP58MCYTVAJ4SxyEbjiVC31zai6kV2ghpCkVGwp4h8GhgW1UBPdA-VCz-r0MnzFYz~vgxYSWvWn~iCST6BRPHi7Fi4P9fSi73K74r624~HllLoDVuoUCOvroPSXvOMNKJE65cnVnZQm5O4BApH4zIzG2D8Z9pSKf5c-gK40dSC80dL82yLXdY1vUxnKFt7ep6OSbiONqitAnuHgC00Xl3Dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
              uri: "https://s3-alpha-sig.figma.com/img/329a/95e2/1a1c27c00beeba634b00a144b85017d2?Expires=1688342400&Signature=dHsw0nLMaf5qBz~t-Qyrk~E9Qwgqe82HYRUAqlkGGYWE85cYJeFznuQBQ-D4xlT68RB0yOUA-W3co0lRdzT4fFdRsDx8Je2nSJJm56xrvn8VZyr8zaEl0YFYe9x~NOVfJ42n3Ye8dkOYTy7TMY2XItjZuw05cTvYdoQk0cJ3OQ2nm8oGcGhD~wlPCj9hSOUqI4sadCs7Gjg5xgx6qxcRwc0~lSb~cQjKz~2TSP9Pv7V9kQsPPEBbDBjvgR9PNdth2nI2LODrPxvXcbyRuu50KoB-sbWg9gvlmukkvGqtLxjEtWgi4lVCQKoYuTDBfy~S2cbRnr6YdQizKlR5gxJz9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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

      {/* </View> */}
    </ScrollView>
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
    fontStyle: "normal",
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
});

export default ChatList;
