import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const AdminGroupsChats = () => {
  return (
    <View>
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
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Yesterday</Text>

        {/* <View> */}
            <Text>Alex Neo</Text>
        {/* </View> */}
      </View>

      
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80, // Add top spacing of 20 units
  },
    text: {
    width: 100,
    height: 31,
    borderRadius: 30,
    fontWeight: "400",
    fontSize: 14,
    backgroundColor: "#E5E5E5",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#9093A6",
  },
});

export default AdminGroupsChats;
