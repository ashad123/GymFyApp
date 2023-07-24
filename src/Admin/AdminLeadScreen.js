import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    ScrollView,Pressable,
  } from "react-native";
  import React, { useState } from "react";
  import {
    Feather,
    Ionicons,
    AntDesign,
    Fontisto,
    MaterialIcons,
    MaterialCommunityIcons,
    EvilIcons
  } from "@expo/vector-icons";

const AdminLeadScreen = ({ navigation }) => {
    const [data, setData] = useState("");

   const handleDelete = () => {
    setTimeout(() =>{
        setData("Lead is deleted");
        setTimeout(() => {
            setData("");
        }, 2000);
    },);
  }

  const handleClientView = () => {
     navigation.navigate('ClientDetail')
  }

  return (
    <ScrollView>
      <View style={styles.container}>
      <MaterialCommunityIcons
        name="less-than"
        size={18}
        color="black"
        style={styles.BackIcons}
        onPress={() => navigation.navigate("Group Chats")}
      />
      <Pressable onPress={() => navigation.navigate("More Option")}>
        <Text style={styles.content}>Back</Text>
      </Pressable>
      <Text style={styles.headerContent}>Leads</Text>
      <EvilIcons
        name="user"
        size={70}
        color="black"
        style={styles.UserIcons}
        onPress={() => navigation.navigate("Group Chats")}
      />
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            size={24}
            color="black"
            style={styles.searchIcon}
          />
          <View style={styles.verticalLine} />
          <TextInput
            style={styles.input}
            placeholder="Find client"
            placeholderTextColor="#A0AEC0"
          />
        </View>
        <Ionicons
          name="md-filter"
          size={50}
          color="blue"
          style={styles.filterIcon}
        />
           <Text style={styles.deletedText}>{data}</Text>
        <View style={styles.container1}>
          <Image
            source={{
              uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
            }}
            style={styles.square}
          />

          <Text style={styles.name}>Alex Neo</Text>
          {/* <Text style={styles.contentStart}>
            Package Start Date: 02-11-2021
          </Text>
          <Text style={styles.contentEnd}>Package End Date: 30-11-2021</Text> */}
          <Fontisto
            name="email"
            size={24}
            color="blue"
            style={styles.emailIcon}
          />
          <Text style={styles.emailContent}>Alex.neo@gmail.com</Text>
          <MaterialIcons
            name="phone-in-talk"
            size={24}
            color="blue"
            style={styles.phoneIcon}
          />
          <Text style={styles.phoneContent}>123-456-7890</Text>
          <Feather name="edit" size={17} style={styles.editIcon} onPress={() => navigation.navigate('Admin Add Leads')} />
          <Feather name="eye" size={17} style={styles.eyeIcon} onPress={handleClientView}/>
          <AntDesign name="delete" size={17} style={styles.deleteIcon} onPress={handleDelete} />
        </View>

        <View style={styles.container1}>
          <Image
            source={{
              uri: "https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg",
            }}
            style={styles.square}
          />

          <Text style={styles.name}>Alex Neo</Text>
          {/* <Text style={styles.contentStart}>
            Package Start Date: 02-11-2021
          </Text>
          <Text style={styles.contentEnd}>Package End Date: 30-11-2021</Text> */}
          <Fontisto
            name="email"
            size={24}
            color="blue"
            style={styles.emailIcon}
          />
          <Text style={styles.emailContent}>Alex.neo@gmail.com</Text>
          <MaterialIcons
            name="phone-in-talk"
            size={24}
            color="blue"
            style={styles.phoneIcon}
          />
          <Text style={styles.phoneContent}>123-456-7890</Text>
          <Feather name="edit" size={17} style={styles.editIcon} />
          <Feather name="eye" size={17} style={styles.eyeIcon} />
          <AntDesign name="delete" size={17} style={styles.deleteIcon} />
        </View>

        <View style={styles.container1}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0jNWYIlNqFu96GVEjFuLxxpGSQQAkaTtwg9lYD2_ypsO8UTVimL-RTJD2cJohV04k9U&usqp=CAU",
            }}
            style={styles.square}
          />

          <Text style={styles.name}>Alex Neo</Text>
          {/* <Text style={styles.contentStart}>
            Package Start Date: 02-11-2021
          </Text>
          <Text style={styles.contentEnd}>Package End Date: 30-11-2021</Text> */}
          <Fontisto
            name="email"
            size={24}
            color="blue"
            style={styles.emailIcon}
          />
          <Text style={styles.emailContent}>Alex.neo@gmail.com</Text>
          <MaterialIcons
            name="phone-in-talk"
            size={24}
            color="blue"
            style={styles.phoneIcon}
          />
          <Text style={styles.phoneContent}>123-456-7890</Text>
          <Feather name="edit" size={17} style={styles.editIcon} />
          <Feather name="eye" size={17} style={styles.eyeIcon} />
          <AntDesign name="delete" size={17} style={styles.deleteIcon} />
        </View>

        <View style={styles.container1}>
          <Image
            source={{
              uri: "https://www.mckinsey.com/~/media/mckinsey/our%20people/andre%20de%20oliveira%20vaz%20osorio/andre_profile_1536x1152.jpg?mw=400&car=2:2",
            }}
            style={styles.square}
          />

          <Text style={styles.name}>Alex Neo</Text>
          {/* <Text style={styles.contentStart}>
            Package Start Date: 02-11-2021
          </Text>
          <Text style={styles.contentEnd}>Package End Date: 30-11-2021</Text> */}
          <Fontisto
            name="email"
            size={24}
            color="blue"
            style={styles.emailIcon}
          />
          <Text style={styles.emailContent}>Alex.neo@gmail.com</Text>
          <MaterialIcons
            name="phone-in-talk"
            size={24}
            color="blue"
            style={styles.phoneIcon}
          />
          <Text style={styles.phoneContent}>123-456-7890</Text>
          <Feather name="edit" size={17} style={styles.editIcon} />
          <Feather name="eye" size={17} style={styles.eyeIcon} />
          <AntDesign name="delete" size={17} style={styles.deleteIcon} />
        </View>

        <View style={styles.container1}>
          <Image
            source={{
              uri: "https://www.mckinsey.com/~/media/mckinsey/our%20people/andre%20de%20oliveira%20vaz%20osorio/andre_profile_1536x1152.jpg?mw=400&car=2:2",
            }}
            style={styles.square}
          />

          <Text style={styles.name}>Alex Neo</Text>
          {/* <Text style={styles.contentStart}>
            Package Start Date: 02-11-2021
          </Text>
          <Text style={styles.contentEnd}>Package End Date: 30-11-2021</Text> */}
          <Fontisto
            name="email"
            size={24}
            color="blue"
            style={styles.emailIcon}
          />
          <Text style={styles.emailContent}>Alex.neo@gmail.com</Text>
          <MaterialIcons
            name="phone-in-talk"
            size={24}
            color="blue"
            style={styles.phoneIcon}
          />
          <Text style={styles.phoneContent}>123-456-7890</Text>
          <Feather name="edit" size={17} style={styles.editIcon} />
          <Feather name="eye" size={17} style={styles.eyeIcon} />
          <AntDesign name="delete" size={17} style={styles.deleteIcon} />
        </View>

     
      </View>
      {/* <TabNavigation /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container1: {
    flexDirection: "row",
    elevation: 3,
    borderRadius: 0,
    marginVertical: 5,
    margin: 15,
    paddingBottom: 40,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    bottom: 15,
  },
  BackIcons: {
    paddingVertical: 7,
    top: 68,
    left: 10,
  },
  UserIcons: {
    bottom: 35,
    left: 425,
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    top: 35,
    left: 25,
    fontSize: 16,
    fontWeight: "400",
  },
  headerContent: {
    left: 230,
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 27.24,
    top: 5,
  },
  square: {
    // position: "absolute",
    width: 123,
    height: 135,
    left: 23,
    top: 30,
  },
  searchContainer: {
    width: 400,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#A0AEC0",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    left: 10,
    top: 30,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
    paddingLeft: 8,
  },
  verticalLine: {
    width: 1,
    height: "80%",
    backgroundColor: "#A0AEC0",
    marginHorizontal: 8,
  },
  filterIcon: {
    marginLeft: 440,
    bottom: 20,
  },
  name: {
    left: 70,
    top: 40,
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 24,
  },
  contentStart: {
    right: 5,
    top: 67,
  },
  contentEnd: {
    right: 204,
    top: 90,
  },
  emailIcon: {
    right: 0,
    top: 70,
  },
  emailContent: {
    right: 0,
    top: 72,
    left: 10
  },
  phoneIcon: {
    right: 160,
    top: 102,
  },
  phoneContent: {
    right: 148,
    top: 105,
  },
  editIcon: {
    right: 270,
    top: 143,
    color: "#F35585",
  },
  eyeIcon: {
    right: 255,
    top: 143,
    color: "#F35585",
  },
  deleteIcon: {
    right: 240,
    top: 143,
    color: "#F35585",
  },
  deletedText: {
    margin: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    right: 170,
    color: "blue",
  },
});

export default AdminLeadScreen