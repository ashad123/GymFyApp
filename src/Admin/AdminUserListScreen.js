import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, {useState} from "react";
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
} from "@expo/vector-icons";


 const AdminUserListScreen = ({ navigation }) => {
  const [showCheckIcon, setShowCheckIcon] = useState(false);
  const [showModal, setShowModal] = useState(false);  

  const handleImageClick = () => {
    setShowCheckIcon(!showCheckIcon);
  };
  
  const handleModalOpen = () => {
    setShowModal(true);
  };
  
  const handleModalClose = () => {
    setShowModal(false);
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
        <MaterialIcons
          name="search"
          size={32}
          color="black"
          style={styles.searchIcons}
          onPress={() => navigation.navigate("Group Chats")}
        />
      </View>

      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.container2}>
            <TouchableOpacity onPress={() => navigation.navigate("Chat List")}>
              <Image
                source={{
                  uri: "https://t4.ftcdn.net/jpg/06/10/64/71/240_F_610647190_RPGRKu9NN0jCvqviPB9QQz0CD3l39idf.jpg",
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
                uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
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
          <TouchableOpacity onPress={handleImageClick}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/800px-Pierre-Person.jpg",
              }}
              style={styles.circle1}
            />
            </TouchableOpacity>
            <View style={styles.contentText}>
              <Text style={styles.chatContentName}>Silas Sperow</Text>
              <Text style={styles.lowerContent}>lorem ipsum dolor sit</Text>
            </View>
          </View>
          {showCheckIcon && (
        <TouchableOpacity onPress={handleModalOpen} style={styles.checkIconContainer}>
          <FontAwesome name="check-circle" size={25} color="green" />
        </TouchableOpacity>
      )}

        </View>

        {showModal && (
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Text style={styles.modalButtonText2}>Delete Silas Sperow</Text>
          <TouchableOpacity onPress={handleModalClose} style={styles.modalButton}>
          
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Implement the delete functionality */ }} style={styles.modalButton}>
            <Text style={styles.modalButtonText1}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    )}

        <View style={styles.card}>
          <View style={styles.container2}>
            <Image
              source={{
                uri: "https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.jpg",
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
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqZCOyJMqGraHiwB0T-0ggN4i8yCJA49mHw&usqp=CAU",
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
                uri: "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
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
                uri: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
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
  checkIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  modalContainer: {
    flex: 1,
    left: 110,
    // justifyContent: "center",
    alignItems: "center",
    
    position: "absolute",
    top: 0,
    // left: 0,
    width: 250,
    height: 150,
    
  },

  modalContent: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
    width: 410,
    height: 190,
    top: 50,
    left: 5,
    alignItems: "center",
    elevation: 3, // Adjust the value as per your desired shadow intensity
    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  modalButton: {
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
  },

  modalButtonText: {
    fontSize: 18,
    color: "black",
    right: 200,
    top: 30,
    paddingRight: 50,
    fontWeight: '600',

  },
  modalButtonText1: {
    fontSize: 18,
    color: "red",
    right: 450,
    top: 30,
    fontWeight: '600',
    // paddingRight: 50,
  },
  modalButtonText2: {
    fontSize: 18,
    color: "black",
    right: 10,
    bottom: 60,
    fontWeight: '600',
    // paddingRight: 50,
  },
});


export default AdminUserListScreen;