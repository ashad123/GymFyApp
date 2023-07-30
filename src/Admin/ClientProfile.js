import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import TabNavigation from "../Navigation/TabNavigation";
// import { ScrollView } from "react-native-gesture-handler";

const ClientProfile = () => {
  return (
    // <ScrollView>
    <View style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <View style={styles.circle}>
              <MaterialCommunityIcons
                name="circle-edit-outline"
                size={25}
                style={styles.penIcons}
              />
              <Image
                style={styles.image}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0jNWYIlNqFu96GVEjFuLxxpGSQQAkaTtwg9lYD2_ypsO8UTVimL-RTJD2cJohV04k9U&usqp=CAU",
                }}
              />
            </View>
          </View>
          <Text style={styles.text}>Alex Neo</Text>
          <Text style={styles.text1}>
            lorem ipsum dolor sit a amet adipiscing a elit sit Porttitor
            suspendisse cursus.
          </Text>

          <View style={styles.card}>
            <View style={styles.container2}>
              <Image
                source={{
                  uri: "https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg",
                }}
                style={styles.circle1}
              />
            </View>
          </View>

          <View style={styles.card1}>
            <View style={styles.container2}>
              <Image
                source={{
                  uri: "https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg",
                }}
                style={styles.circle1}
              />
            </View>
          </View>

          <View style={styles.card2}>
            <View style={styles.container2}>
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0jNWYIlNqFu96GVEjFuLxxpGSQQAkaTtwg9lYD2_ypsO8UTVimL-RTJD2cJohV04k9U&usqp=CAU",
                }}
                style={styles.circle1}
              />
            </View>
          </View>

          <View style={styles.card3}>
            <View style={styles.container2}>
              <Text style={styles.circle2}>+12</Text>
              {/* 
            /> */}
            </View>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>24%</Text>
            <Text style={styles.statText}>Body Fat</Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>74kg</Text>
            <Text style={styles.statText}>Weight</Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>185cm</Text>
            <Text style={styles.statText}>Height</Text>
          </View>
        </View>
        <View>
          <Text style={styles.content}>Activities</Text>
        </View>
        <View style={styles.card4}>
          <View style={styles.container2}>
            <Image
              source={{
                uri: "https://images.livemint.com/img/2020/10/08/1140x641/iStock-671091700_1602162868009_1602162936796.jpg",
              }}
              style={styles.circle3}
            />
            <AntDesign
              name="clockcircleo"
              size={18}
              style={styles.clockIcons}
            />
            <View style={styles.boxContainer}>
              <Text style={styles.routine}>Morning Workout</Text>
              <Text style={styles.exercise}>
                lorem ipsum dolor sit and amet.
              </Text>

              <Text style={styles.date}>12/11/2021</Text>
            </View>
          </View>
        </View>

        <View style={styles.card4}>
          <View style={styles.container2}>
            <Image
              source={{
                uri: "https://images.livemint.com/img/2020/10/08/1140x641/iStock-671091700_1602162868009_1602162936796.jpg",
              }}
              style={styles.circle3}
            />
            <AntDesign
              name="clockcircleo"
              size={18}
              style={styles.clockIcons}
            />
            <View style={styles.boxContainer}>
              <Text style={styles.routine}>Morning Workout</Text>
              <Text style={styles.exercise}>
                lorem ipsum dolor sit and amet.
              </Text>

              <Text style={styles.date}>12/11/2021</Text>
            </View>
          </View>
        </View>

        <View style={styles.card4}>
          <View style={styles.container2}>
            <Image
              source={{
                uri: "https://images.livemint.com/img/2020/10/08/1140x641/iStock-671091700_1602162868009_1602162936796.jpg",
              }}
              style={styles.circle3}
            />
            <AntDesign
              name="clockcircleo"
              size={18}
              style={styles.clockIcons}
            />
            <View style={styles.boxContainer}>
              <Text style={styles.routine}>Morning Workout</Text>
              <Text style={styles.exercise}>
                lorem ipsum dolor sit and amet.
              </Text>

              <Text style={styles.date}>12/11/2021</Text>
            </View>
          </View>
        </View>

        <View style={styles.card4}>
          <View style={styles.container2}>
            <Image
              source={{
                uri: "https://images.livemint.com/img/2020/10/08/1140x641/iStock-671091700_1602162868009_1602162936796.jpg",
              }}
              style={styles.circle3}
            />
            <AntDesign
              name="clockcircleo"
              size={18}
              style={styles.clockIcons}
            />
            <View style={styles.boxContainer}>
              <Text style={styles.routine}>Morning Workout</Text>
              <Text style={styles.exercise}>
                lorem ipsum dolor sit and amet.
              </Text>

              <Text style={styles.date}>12/11/2021</Text>
            </View>
          </View>
        </View>

        {/* <View style={styles.footer}>
          <TabNavigation />
        </View> */}
      </ScrollView>
    </View>
    /* </ScrollView> */
  );
};

const styles = StyleSheet.create({
  container: {
    height: 426,
    backgroundColor: "black",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 60.5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 121,
    height: 121,
    borderRadius: 100,
    backgroundColor: "transparent",
    borderWidth: 3,
    borderColor: "yellow",
  },
  text: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 30,
  },
  text1: {
    color: "white",
    textAlign: "center",
    lineHeight: 22,
    fontSize: 16,
    fontWeight: 400,
    margin: 20,
  },
  card: {
    left: 190,
  },
  card1: {
    left: 220,
    bottom: 50,
  },
  card2: {
    left: 250,
    bottom: 100,
  },
  card3: {
    left: 310,
    bottom: 150,
  },
  card4: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    borderRadius: 5,
    // paddingBottom: 180,
    paddingTop: 50,
    // marginBottom: 50,
    top: 150,
    width: 450,
    left: 18,
    margin: 10,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
  },
  penIcons: {
    left: 90,
    top: 10,
    backgroundColor: "#fff",
    borderRadius: 25,
    position: "absolute",
    zIndex: 1,
  },
  circle1: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#8171F7",
  },
  circle2: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingTop: 15,
    fontSize: 16,
    fontWeight: 700,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFF",
  },
  circle3: {
    width: 100,
    height: 100,
    // borderRadius: 25,
    backgroundColor: "#8171F7",
    bottom: 20,
    left: 40,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    // marginTop: 20,
    // bottom: 50,
    top: 380,
    left: 25,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    borderRadius: 5,
    height: 100,
    position: "absolute",
    zIndex: 1,
    backgroundColor: "#FFF",
  },
  statItem: {
    alignItems: "center",
    marginLeft: 60,
    right: 30,
  },
  statValue: {
    fontWeight: 600,
    fontSize: 26,
    fontWeight: "bold",
  },
  verticalLine: {
    width: 1,
    height: 40,
    backgroundColor: "black",
    marginHorizontal: 10,
  },
  statText: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 50,
  },
  content: {
    top: 100,
    left: 50,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontSize: 20,
    color: "#8071F7",
  },
  boxContainer: {
    bottom: 30,
    left: 70,
  },
  routine: {
    // top: 100,
    // left: 50,
    // top: 20,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontSize: 18,
    fontWeight: 800,
    color: "#000000",
    marginRight: 20,
  },
  exercise: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    lineHeight: 25,
    fontSize: 14,
    fontWeight: 400,
    color: "#737373",
  },
  date: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    lineHeight: 22,
    fontSize: 12,
    fontWeight: 400,
    color: "#737373",
    left: 30,
    top: 3,
  },
  clockIcons: {
    top: 0,
    left: 90,
  },
  tabNavigation: {
    marginTop: 50,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
});

export default ClientProfile;
