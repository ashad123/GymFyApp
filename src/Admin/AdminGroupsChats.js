import { View, Text, StyleSheet, Image, TextInput,  Modal, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import React, {useState} from "react";
import { Ionicons, Entypo,  Fontisto} from "@expo/vector-icons";
// import { ScrollView } from "react-native-gesture-handler";

const AdminGroupsChats = ({navigation}) => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("");
  

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

   // Function to handle background press and close modal
   const handleBackgroundPress = () => {
    isModalVisible();
  };

  return (
    
    <View style={{ backgroundColor: "#e1e1e8", flex: 1}}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color="#FFFFFF"
          style={styles.headerIcon}
          onPress={() => {
            //   navigation.navigate('Add Groups')
          }}
        />
        <View style={styles.headerContent}>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/dfc0/9993/40b953d60acb7f226118bea178e6baa7?Expires=1688342400&Signature=LpnRqmomSU-Kc~leoEMWUWcEGviVf7h9wv1fAw8fB7-HHqJSCvNCNlgxBp699LEgMhaNLnHhD9gFcKv-rESBF1TRJ8txNkDGoVtZ8ni0gRWPvk03ixpoqeoktHnyw~9gH7Ig1Aeo2hlEN127yr9SJjfPc9A5PknotgIIiRMmUWiYi37YAgK2EXsU4UQi6z~VGLMDLchYE21j5IoFVhMiG280p28VI6~MFvpA4X578oxwcQv5ZPz~kcsdnc4Yjltmit8~~GH-V5KwCSm4FWUsxhV8rRpYDUNXWOPVATaVB3ij1A4PUrpkp8G3W95E40RRJOPmkNYTsWt-0e7aPqg4Rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            }}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>Public Group</Text>
          <Text style={styles.lowerText}>Alex Neo, Jame Son, Silas...</Text>
        </View>
        <Ionicons
          name="ios-call"
          size={24}
          color="#FFFFFF"
          style={styles.headerIconsCall}
        />
        <Ionicons
          name="md-videocam-sharp"
          size={24}
          color="#FFFFFF"
          style={styles.headerIconsCamera}
        />
        <Ionicons
          name="ellipsis-vertical"
          size={24}
          color="#FFFFFF"
          style={styles.headerIconsDots}
          onPress={() => setModalVisible(true)}
        />

<Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
       <TouchableWithoutFeedback onPress={handleBackgroundPress}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalContent}
            onPress={() => {
              setSelectedMenuItem("View Content");
              setModalVisible(false);
            }}
          >
            <Text style={styles.modalText}>View Content</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine} />

          <TouchableOpacity
            style={styles.modalContent}
            onPress={() => {
              setSelectedMenuItem("View Content");
              setModalVisible(false);
            }}
          >
            <Text style={styles.modalText}>Media, links, and docs</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine} />

          <TouchableOpacity
            style={styles.modalContent}
            onPress={() => {
              setSelectedMenuItem("Media View");
              setModalVisible(false);
            }}
          >
            <Text style={styles.modalText}>Search</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine} />

          <TouchableOpacity
            style={styles.modalContent}
            onPress={() => {
              setSelectedMenuItem("Link");
              setModalVisible(false);
            }}
          >
            <Text style={styles.modalText}>Mute Notifications</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine} />

          <TouchableOpacity
            style={styles.modalContent}
            onPress={() => {
              setSelectedMenuItem("Link");
              setModalVisible(false);
            }}
          >
            <Text style={styles.modalText}>Wallpaper</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine} />

          <TouchableOpacity
            style={styles.modalContent}
            onPress={() => {
              setSelectedMenuItem("Link");
              // setModalVisible(false);
              navigation.navigate('More Option')
            }}
          >
            <Text style={styles.modalText}>More</Text>
            <Fontisto name="angle-right" size={13} color="black" style={{left: 185, bottom: 25,}}/>
          </TouchableOpacity>
          {/* <View style={styles.horizontalLine} /> */}

       
          
         
        </View>
        </TouchableWithoutFeedback>
      </Modal>

      </View>
      {/* <ScrollView> */}
      <Text style={styles.textDay}>Yesterday</Text>
      <View style={styles.container}>
        <View style={styles.textWithNameContainer}>
          <Text style={styles.textName}>Alex Neo</Text>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/dfc0/9993/40b953d60acb7f226118bea178e6baa7?Expires=1688342400&Signature=LpnRqmomSU-Kc~leoEMWUWcEGviVf7h9wv1fAw8fB7-HHqJSCvNCNlgxBp699LEgMhaNLnHhD9gFcKv-rESBF1TRJ8txNkDGoVtZ8ni0gRWPvk03ixpoqeoktHnyw~9gH7Ig1Aeo2hlEN127yr9SJjfPc9A5PknotgIIiRMmUWiYi37YAgK2EXsU4UQi6z~VGLMDLchYE21j5IoFVhMiG280p28VI6~MFvpA4X578oxwcQv5ZPz~kcsdnc4Yjltmit8~~GH-V5KwCSm4FWUsxhV8rRpYDUNXWOPVATaVB3ij1A4PUrpkp8G3W95E40RRJOPmkNYTsWt-0e7aPqg4Rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", // Replace with the actual image URL
            }}
            style={styles.textImage}
          />
          <Text style={styles.time}>08:35PM</Text>
        </View>

        <View style={styles.containerIcons}>
          <Entypo
            name="forward"
            size={28}
            color="#FFF"
            style={styles.forwardIcons}
          />
        </View>
      </View>

      <View style={styles.container1}>
      <View style={[styles.containerIcons1, {}]}>
          <Entypo
            name="forward"
            size={28}
            color="#FFF"
            style={styles.forwardIcons1}
          />
        </View>
        <View style={[styles.textWithNameContainer1]}>
      
          <Text style={styles.textName1}>Alex Neo</Text>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/dfc0/9993/40b953d60acb7f226118bea178e6baa7?Expires=1688342400&Signature=LpnRqmomSU-Kc~leoEMWUWcEGviVf7h9wv1fAw8fB7-HHqJSCvNCNlgxBp699LEgMhaNLnHhD9gFcKv-rESBF1TRJ8txNkDGoVtZ8ni0gRWPvk03ixpoqeoktHnyw~9gH7Ig1Aeo2hlEN127yr9SJjfPc9A5PknotgIIiRMmUWiYi37YAgK2EXsU4UQi6z~VGLMDLchYE21j5IoFVhMiG280p28VI6~MFvpA4X578oxwcQv5ZPz~kcsdnc4Yjltmit8~~GH-V5KwCSm4FWUsxhV8rRpYDUNXWOPVATaVB3ij1A4PUrpkp8G3W95E40RRJOPmkNYTsWt-0e7aPqg4Rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", // Replace with the actual image URL
            }}
            style={styles.textImage1}
          />
           <Text style={styles.time1}>08:35PM</Text>
          <Text style={{backgroundColor: '#e1e1e8', height: 60, top: 5, }}>lorem ipsum dolor sit a consectet adipiscing ullamcorper.</Text>
         
          <Text style={{color: 'blue', top: 30}}>https:// ipsum dolor sit consectet adipiscing ullamcorper.</Text>
        </View>


      
     
      </View>

      <View style={styles.container2}>
      <TextInput
        style={styles.inputText}
        placeholder="Message"
        placeholderTextColor="#9093A6"
      />
      <Entypo name="attachment" size={25} color="#8A8A8A" style={styles.inputIcons} />
        <Ionicons name="camera-outline" size={30} color="#8A8A8A" style={styles.inputIcons} />
      <View style={styles.iconsContainer}>
        
      <View style={styles.circle}>
          <Ionicons name="mic-outline" size={32} color="#FFFFFF" />
        </View>
      </View>
</View>
      {/* </ScrollView> */}
    

    </View>
    
  );
};

const styles = StyleSheet.create({
  header: {
    top: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#A99EFE",
    height: 80,
    paddingHorizontal: 10,
  },
  headerIcon: {
    left: 5,
  },
  headerIconsCall: {
    left: 90,
  },
  headerIconsCamera: {
    left: 45,
  },
  headerIconsDots: {
    // left: 30,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    // marginRight: 10,
    // marginLeft: -60,
    right: 10,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    right: 0,
    bottom: 10,
  },
  lowerText: {
    right: 105,
    top: 10,
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "400",
  },
  headerIconsCall: {
    left: 27,
  },
  headerIconsCamera: {
    left: 18,
  },
  textDay: {
    width: 100,
    height: 31,
    left: 200,
    top: 70,
    borderRadius: 30,
    fontWeight: "400",
    fontSize: 14,
    backgroundColor: "#E5E5E5",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#9093A6",
  },
  container: {
    height: 201,
    width: 259,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    left: 20,
    top: 30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1, // For Android devices, set elevation to 0
    backgroundColor: "#fff",
  },

  textWithNameContainer: {
    top: 15,
    right: 120,
    alignItems: "flex-start",
    right: 0,
    // marginTop: 10, // Adjust the margin according to your design
  },
  textName: {
    // width: 100,
    // height: 31,
    top: 18,
    left: 3,
    borderRadius: 30,
    fontWeight: "400",
    fontSize: 14,
    // backgroundColor: "blue",
    textAlign: "center",
    textAlignVertical: "center",
    // color: "#9093A6",
  },
  textImage: {
    width: 239,
    height: 160,
    // top: 130,
    // right: 140,
    borderRadius: 15,
    top: 20,
    // marginRight: 5, // Adjust the margin according to your design
  },
  time: {
    left: 170,
    bottom: 10,
    color: "#fff",
  },
  containerIcons: {
    left: 230,
    bottom: 100,
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "grey",
  },
  forwardIcons: {
    padding: 10,
  },
  container1: {
    height: 350,
    width: 259,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    left: 230,
    top: 30,
    paddingBottom:150,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1, // For Android devices, set elevation to 0
    backgroundColor: "#fff",
    // flex: 1
  },

  textWithNameContainer1: {
    top: 15,
    // right: 120,
    // alignItems: "flex-start",
    right: 0,
    // marginTop: 10, // Adjust the margin according to your design
  },
  textName1: {
    // width: 100,
    // height: 31,
    top: 20,
    right: 90,
    borderRadius: 30,
    fontWeight: "400",
    fontSize: 14,
    // backgroundColor: "blue",
    textAlign: "center",
    textAlignVertical: "center",
    // color: "#9093A6",
  },
  textImage1: {
    width: 239,
    height: 160,
    // top: 130,
    // right: 140,
    // borderRadius: 15,
    top: 25,
    // marginRight: 5, // Adjust the margin according to your design
  },
  time1: {
    left: 170,
    bottom: 30,
    color: "#fff",
  },
  containerIcons1: {
   right: 220,
    top: 170,
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "grey",
  },
  forwardIcons1: {
    padding: 10,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    top: 140,
    width: 550,
  },
  inputText: {
    flex: 1,
    height: 60,
    width: 350,
    left: 10,
    top: 0,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22,
    borderRadius: 20,
    backgroundColor: "#ffff",
    paddingHorizontal: 16,
    color: "#8A8A8A",
   
    
  },
  iconsContainer: {
    flexDirection: "row",
    marginLeft: 10,
  },
  inputIcons: {
    right: 80,
    margin: 5,
  },
  circle: {
    width: 60,
    height: 60,
    right: 70,
    borderRadius: 50,
    backgroundColor: "#8171F7",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    // flex: 1,
    height: 380,
    width: 250,
    left: 180,
    margin: 30,
    backgroundColor: "#FFF",
    justifyContent: "center",
    // alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1, 
  },
  modalContent: {
    // backgroundColor: "#FFFFFF",
    // borderRadius: 10,
    // padding: 10,
   
    paddingTop: 20,
    // width: 250,
    left: 20,
    margin: 5,
    
   
  },
  modalText: {
    // color: "#000000",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: '#595959',
     lineHeight: 21.79,
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 0,
  },

});

export default AdminGroupsChats;
