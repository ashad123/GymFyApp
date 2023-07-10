import { View, Text, StyleSheet, SafeAreaView, Switch, Modal, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RadioButton } from 'react-native-paper';


const AdminMoreOption = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalFonts, setModalFonts] = useState(false);

  const [selectedTheme, setSelectedTheme] = useState('light');

const handleThemeChange = (theme) => {
  setSelectedTheme(theme);
};

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
        <Text style={styles.content}>Back</Text>
        <Text style={styles.headerContent}>More</Text>
      </View>

      <View style={styles.sectionTop}>
        <Text style={styles.sectionTopContent}>Display</Text>
      </View>

    
      <View style={styles.selectColor}>
      <MaterialCommunityIcons name="moon-full" size={35} color="#8795A2" />
      <TouchableOpacity onPress={() => setModalVisible(true)} >
        <Text style={styles.colorHeader}>Theme</Text>
        </TouchableOpacity>
        <Text style={styles.colorContent}>Light</Text>
      </View>


<View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <Pressable
    style={styles.overlay}
    onPress={() => setModalVisible(!modalVisible)}
  >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose Theme</Text>
            <RadioButton.Group onValueChange={handleThemeChange} value={selectedTheme}>
            <View style={styles.radioOption}>
    <RadioButton.Item  value="light" />
    <Text style={styles.radioLabel}>Light</Text>
  </View>

  <View style={styles.radioOption}>
    <RadioButton.Item  value="blue" />
    <Text style={styles.radioLabel}>Dark</Text>
  </View>
  </RadioButton.Group>

            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
        </Pressable>
      </Modal>
      </View>

     
      <View style={styles.setWallpaper}>
        <MaterialCommunityIcons name="wallpaper" size={35} color="#8795A2" />
        <TouchableOpacity  onPress={() => navigation.navigate('Wallpapers')}>
        <Text style={styles.wallpaperContent}>Wallpaper</Text>
        </TouchableOpacity>
      </View>
      

      <View style={styles.horizontalLine} />
      <Text style={styles.userSetting}>User Settings</Text>

      <View style={styles.userDetailed}>
        <Text style={styles.userContent}>Active Users</Text>
        <Text style={styles.userNo}>20</Text>
        <Switch
          style={styles.btnSwitch}
          // value={isSwitchOn}
          // onValueChange={handelSwitch}
          thumbColor="#007AFF"
        />
      </View>

      <View style={styles.userDetailed}>
        <Text style={styles.userContent}>Inactive Users</Text>
        <View style={styles.userContainer}>
        <Text style={styles.userNo}>40</Text>
        <Switch
          style={styles.btnSwitch}
          // value={isSwitchOn}
          // onValueChange={handelSwitch}
          thumbColor="#007AFF"
        />
        </View>
      </View>

      <View style={styles.userDetailed}>
      <TouchableOpacity onPress={() => navigation.navigate('Send Alert')} >
        <Text style={styles.userContent}>Send Alert</Text>
        </TouchableOpacity>
        <View style={styles.userContainer1}>
        {/* <Text style={styles.userNo}>30</Text> */}
        <Switch
          style={styles.btnSwitch}
          // value={isSwitchOn}
          // onValueChange={handelSwitch}
          thumbColor="#007AFF"
        />
        </View>
      </View>
      <View style={styles.horizontalLine1} />
      <View style={styles.setFont}>
      <TouchableOpacity onPress={() => setModalFonts(true)} >
        <Text style={styles.fontHeader}>Font Size</Text>
        <Text style={styles.fontContent}>Medium</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.centeredView1}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalFonts}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalFonts(!modalFonts);
        }}>
          <Pressable
    style={styles.overlay}
    onPress={() => setModalFonts(!modalFonts)}
  >
        <View style={styles.centeredView}>
          <View style={styles.modalView1}>
            <Text style={styles.modalText1}>Font Size</Text>
            <RadioButton.Group onValueChange={handleThemeChange} value={selectedTheme}>
            <View style={styles.radioOption}>
    <RadioButton.Item  value="light" />
    <Text style={styles.radioLabel}>Small</Text>
  </View>

  <View style={styles.radioOption}>
    <RadioButton.Item  value="blue" />
    <Text style={styles.radioLabel}>Medium</Text>
  </View>

  <View style={styles.radioOption}>
    <RadioButton.Item  value="blue" />
    <Text style={styles.radioLabel}>Large</Text>
  </View>
  </RadioButton.Group>

            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
        </Pressable>
      </Modal>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    // flex: 1,
    // top: 60,
    backgroundColor: "#e1e1e8",
    flex: 1,
  },
  container: {
    // flex: 1,
    flexDirection: "row",
    // justifyContent: 'center',
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
    left: 150,
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 27.24,
  },
  sectionTop: {
    left: 15,
  },
  sectionTopContent: {
    fontFamily: "Open Sans",
    fontSize: 18,
    fontWeight: "600",
    color: "#8071F7",
    lineHeight: 21.89,
    left: 5,
  },
  selectColor: {
    flexDirection: "row",
    top: 50,
    left: 15,
  },
  colorHeader: {
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 27,
    letterSpacing: 0,
    textAlign: "left",
    left: 25,
    bottom: 10,
  },
  colorContent: {
    top: 20,
    right: 35,
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    color: "#919191",
  },
  setWallpaper: {
    flexDirection: "row",
    top: 100,
    left: 15,
  },
  wallpaperContent: {
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 27,
    letterSpacing: 0,
    textAlign: "left",
    left: 25,
  },
  horizontalLine: {
    borderBottomColor: "rgba(145, 145, 145, 0.6)",
    borderBottomWidth: 1,
    top: 130,
  },
  userSetting: {
    fontFamily: "Open Sans",
    fontSize: 18,
    fontWeight: "600",
    color: "#8071F7",
    lineHeight: 21.89,
    left: 20,
    top: 165,
  },
  userDetailed: {
    flexDirection: "row",
    left: 80,
    top: 200,
  },
  userContent: {
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 27,
    letterSpacing: 0,
    textAlign: "left",
  },
  userNo: {
    left: 200,
    top: 0,
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 27,
  },
  btnSwitch: {
    left: 220,
    bottom: 10,
  },
  userContainer: {
    flexDirection: 'row',
    right: 15,
  },
  userContainer1: {
    flexDirection: 'row',
    left: 40,
  },
  horizontalLine1: {
    borderBottomColor: "rgba(145, 145, 145, 0.6)",
    borderBottomWidth: 1,
    top: 230,
  },
  setFont: {
    // flexDirection: "row",
    left: 80,
    top: 280,
  },
  fontHeader: {
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 27,
    letterSpacing: 0,
    textAlign: "left",
  },
  fontContent: {
    top: 5,
    right: 0,
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    color: "#919191",
  },
   centeredView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    top: 300,
    
  },
   centeredView1: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    top: 300,
    
  },
   modalView: {
    // margin: 20,
    width: 400,
    height: 230,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
   modalView1: {
    top: 30,
    width: 400,
    height: 260,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    right: 110,
    bottom: 10,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24.51,
  },
   modalText1: {
    marginBottom: 15,
    right: 130,
    bottom: 10,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24.51,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    right: 120,
  },
  radioLabel: {
    marginLeft: 10,
    fontSize: 16,
    // padding: 50,
  },
});

export default AdminMoreOption;
