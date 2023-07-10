import { View, Text, SafeAreaView, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";

const AdminMoreWallpapaer = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
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
        <Text style={styles.headerContent}>Wallpaper</Text>
      </View>
      <View style={styles.imageRow}>
        <Image
          source={{
            uri: "https://scripturetruthblog.files.wordpress.com/2020/08/white-horse-3010129_1920.jpg?w=930&h=450&crop=1",
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.imageContent}>Bright</Text>
        <Image
          source={{
            uri: "https://outdoorpeople.org.uk/cdn/shop/articles/Image_header_thunder_blog_OP_1024x1024.jpg?v=1529686946",
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.imageContent}>Dark</Text>
      </View>

      <View style={styles.imageRow1}>
        <Image
          source={{
            uri: "https://5.imimg.com/data5/HM/RM/MY-19128414/somany-aegis-beige-anti-slip-tiles-1000x1000.png",
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.imageContent1}>Light</Text>
        <Image
          source={{
            uri: "https://www.theladders.com/wp-content/uploads/wedding_planning_marriage-800x450.jpg",
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.imageContent1}>Grey</Text>
      </View>

      <View style={styles.checkbox}>
      <Fontisto
          name="checkbox-active"
          size={30}
          color="black"
          style={styles.BackIcons}
          onPress={() => navigation.navigate('Group Chats')}
        />
        <Text style={styles.checkboxContent}>Default Wallpaper</Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#e1e1e8",
    flex: 1,
  },
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 60,
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
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 27.24,
    top: 5,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
 
  image: {
    // // flex: 1,
    // aspectRatio: 1,
    // resizeMode: "stretch",
    width: 210,
    height: 200,
    borderRadius: 10,
    margin: 0,
    left: 0,
    padding: 20,
  },
  imageContent: {
    top: 230,
    right: 200,
    fontWeight: '600',
    fontSize: 18,
  },
  imageRow1: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 20,
    top: 80,
    // backgroundColor: 'red'
    // right: 20,
    // paddingRight: 30,

  },
  imageContent1: {
    top: 230,
    right: 200,
    fontWeight: '600',
    fontSize: 18,
    // backgroundColor: 'red'
  },
  checkbox: {
    flexDirection: 'row',
    top: 180,
    left: 30,
  },
  checkboxContent: {
    margin: 15,
    fontWeight: '600',
    fontSize: 18,
  }
})

export default AdminMoreWallpapaer;
