import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome6,
  EvilIcons,
  Entypo
} from "@expo/vector-icons";
import TabNavigation from "../Navigation/TabNavigation";
import { color } from "react-native-reanimated";
const UserProfileScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
     
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <MaterialCommunityIcons
              name="less-than"
              size={18}
              color="#fff"
              style={styles.headerIcon}
              onPress={() => navigation.navigate("Group Chats")}
            />
            <Text style={styles.backContent}>Back</Text>
            <View style={styles.circle}>
              <MaterialCommunityIcons
                name="circle-edit-outline"
                size={25}
                style={styles.penIcons}
                onPress={()=> navigation.navigate('User Notification')}
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

          {/* <View style={styles.card}>
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
          </View> */}

          {/* <View style={styles.card3}>
            <View style={styles.container2}>
              <Text style={styles.circle2}>+12</Text>
            
            </View>
          </View> */}
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

        <View style={styles.mealContainer}>
          <Text style={styles.mealContent}>Daily Meal Plan</Text>
          <Text style={styles.mealContent1}>July</Text>
        </View>

        <View style={styles.mealDateContainer}>
          <View style={styles.mealDate}>
            <View>
              <Text style={styles.monContent}>Mon</Text>
              <Text style={styles.mondigit}>17</Text>
            </View>

            {/* <View   style={styles.tueContainer}> */}
            <View style={styles.tueContainer}>
              <Text style={styles.tueContent}>Tue</Text>
              <Text style={styles.tuedigit}>18</Text>
            </View>
            {/* </View> */}

            <View>
              <Text style={styles.wedContent}>Wed</Text>
              <Text style={styles.weddigit}>19</Text>
            </View>

            <View>
              <Text style={styles.thuContent}>Thu</Text>
              <Text style={styles.thudigit}>20</Text>
            </View>

            <View>
              <Text style={styles.friContent}>Fri</Text>
              <Text style={styles.fridigit}>21</Text>
            </View>

            <View>
              <Text style={styles.satContent}>Sat</Text>
              <Text style={styles.satdigit}>22</Text>
            </View>

            <View>
              <Text style={styles.sunContent}>Sun</Text>
              <Text style={styles.sundigit}>23</Text>
            </View>
          </View>
        </View>
          
        <Text style={styles.headingContent2}>Top Meal</Text>

<View style={{flexDirection: 'row'}}>
        <View style={styles.dishContainer} >
          <View style={styles.dishSelect}>
          <View>
          <Text style={[styles.heartContent,{color:'#60C774'}]}>5</Text>
          <Entypo
          name="heart"
          size={25}
          color={'#60C774'}
          style={styles.heartIcons}
           />
          </View>
          
          <Image
                style={styles.image1}
                source={{
                  uri: "https://pallifood.com/wp-content/uploads/2019/08/ace218a4f4b81019717b67dffe6dfa45.png",
                }}
              />
              <Text style={styles.image1Content}>Salad Dish</Text>
              <Text style={styles.image1Content1}>Breakfast</Text>
          </View>
          </View>
          <View style={styles.dishContainer} >
          <View style={styles.dishSecond}>
          <View style={{right: 80}}>
          <Text style={[styles.heartContent, {color: '#B8C0CD'}]}>3</Text>
          <Entypo
          name="heart"
          size={25}
          color={'#B8C0CD'}
          style={styles.heartIcons}
           />
          </View>
          <Image
                style={styles.image2}
                source={{
                  uri: "https://pallifood.com/wp-content/uploads/2019/08/ace218a4f4b81019717b67dffe6dfa45.png",
                }}
              />
              <Text style={styles.image2Content}>Fruit Salad Dish</Text>
              <Text style={styles.image2Content2}>Dinner</Text>
          </View>
          </View>
        </View>
        
        
        <View style={{flexDirection: 'row'}}>
        <View style={styles.dishContainer} >
          <View style={styles.dishSelect}>
          <View>
          <Text style={[styles.heartContent,{color:'#60C774'}]}>5</Text>
          <Entypo
          name="heart"
          size={25}
          color={'#60C774'}
          style={styles.heartIcons}
           />
          </View>
          
          <Image
                style={styles.image1}
                source={{
                  uri: "https://pallifood.com/wp-content/uploads/2019/08/ace218a4f4b81019717b67dffe6dfa45.png",
                }}
              />
              <Text style={styles.image1Content}>Salad Dish</Text>
              <Text style={styles.image1Content1}>Breakfast</Text>
          </View>
          </View>
          <View style={styles.dishContainer} >
          <View style={styles.dishSecond}>
          <View style={{right: 80}}>
          <Text style={[styles.heartContent, {color: '#B8C0CD'}]}>3</Text>
          <Entypo
          name="heart"
          size={25}
          color={'#B8C0CD'}
          style={styles.heartIcons}
           />
          </View>
          <Image
                style={styles.image2}
                source={{
                  uri: "https://pallifood.com/wp-content/uploads/2019/08/ace218a4f4b81019717b67dffe6dfa45.png",
                }}
              />
              <Text style={styles.image2Content}>Fruit Salad Dish</Text>
              <Text style={styles.image2Content2}>Dinner</Text>
          </View>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
        <View style={styles.dishContainer} >
          <View style={styles.dishSelect}>
          <View>
          <Text style={[styles.heartContent,{color:'#60C774'}]}>5</Text>
          <Entypo
          name="heart"
          size={25}
          color={'#60C774'}
          style={styles.heartIcons}
           />
          </View>
          
          <Image
                style={styles.image1}
                source={{
                  uri: "https://pallifood.com/wp-content/uploads/2019/08/ace218a4f4b81019717b67dffe6dfa45.png",
                }}
              />
              <Text style={styles.image1Content}>Salad Dish</Text>
              <Text style={styles.image1Content1}>Breakfast</Text>
          </View>
          </View>
          <View style={styles.dishContainer} >
          <View style={styles.dishSecond}>
          <View style={{right: 80}}>
          <Text style={[styles.heartContent, {color: '#B8C0CD'}]}>3</Text>
          <Entypo
          name="heart"
          size={25}
          color={'#B8C0CD'}
          style={styles.heartIcons}
           />
          </View>
          <Image
                style={styles.image2}
                source={{
                  uri: "https://pallifood.com/wp-content/uploads/2019/08/ace218a4f4b81019717b67dffe6dfa45.png",
                }}
              />
              <Text style={styles.image2Content}>Fruit Salad Dish</Text>
              <Text style={styles.image2Content2}>Dinner</Text>
          </View>
          </View>
        </View>

    
    </View>
    </ScrollView>
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
  headerIcon: {
    right: 240,
    top: 40,
  },
  backContent: {
    color: "#fff",
    right: 210,
    top: 18,
    fontSize: 16,
  },
  penIcons: {
    left: 90,
    top: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    position: "absolute",
    zIndex: 1,
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
    top: 40,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 30,
    top: 30,
  },
  text1: {
    color: "white",
    textAlign: "center",
    lineHeight: 22,
    fontSize: 16,
    fontWeight: 400,
    margin: 20,
    top: 20,
  },
  card: {
    left: 190,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle1: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#8171F7",
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
  mealContainer: {
    top: 100,
    left: 45,
    flexDirection: "row",
  },
  mealContent: {
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: 600,
    color: "#8071F7",
    letterSpacing: 1,
  },
  mealContent1: {
    left: 235,
    fontSize: 14,
    fontWeight: 600,
  },
  mealDateContainer: {
    top: 140,
    left: 45,
  },
  mealDate: {
    flexDirection: "row",
  },
  monContent: {
    left: 0,
    color: "#AEAEAE",
    fontSize: 15,
    fontWeight: "600",
  },
  mondigit: {
    top: 20,
    left: 10,
    fontSize: 15,
    fontWeight: "600",
  },
  tueContainer: {
    bottom: 10,
    left: 25,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
    borderRadius: 3,
    backgroundColor: "#60C774",
  },
  tueContent: {
    left: 0,
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",

    right: -10,
    width: 80,
    height: 90,
    textAlign: "center",
    top: 10,
  },
  tuedigit: {
    color: "#fff",
    bottom: 38,
    left: 31,
    fontSize: 15,
    fontWeight: "600",
  },

  wedContent: {
    left: 50,
    color: "#AEAEAE",
    fontSize: 15,
    fontWeight: "600",
  },
  weddigit: {
    top: 20,
    left: 57,
    fontSize: 15,
    fontWeight: "600",
  },
  thuContent: {
    left: 80,
    color: "#AEAEAE",
    fontSize: 15,
    fontWeight: "600",
  },
  thudigit: {
    top: 20,
    left: 85,
    fontSize: 15,
    fontWeight: "600",
  },
  friContent: {
    left: 110,
    color: "#AEAEAE",
    fontSize: 15,
    fontWeight: "600",
  },
  fridigit: {
    top: 20,
    left: 110,
    fontSize: 15,
    fontWeight: "600",
  },
  satContent: {
    left: 145,
    color: "#AEAEAE",
    fontSize: 15,
    fontWeight: "600",
  },
  satdigit: {
    top: 20,
    left: 148,
    fontSize: 15,
    fontWeight: "600",
  },
  sunContent: {
    left: 180,
    color: "#AEAEAE",
    fontSize: 15,
    fontWeight: "600",
  },
  sundigit: {
    top: 20,
    left: 185,
    fontSize: 15,
    fontWeight: "600",
  },
  headingContent2: {
    fontFamily: "Open Sans",
    fontSize: 18,
    fontWeight: "600",
    top: 160,
    left: 50,
    color: "#8071F7",
    letterSpacing: 1,
  },
  dishContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
    borderRadius: 10,
    backgroundColor: '#F4F5F7',
    
    flexDirection: 'row',
    top: 170,
    left: 30,
    width: 200,
    margin: 10,
  },
  dishSelect: {
    margin: 20,
    bottom: 20,
  },
  dishSecond: {
    left: 100,
    top: 0,
  },
  image1: {
    width: 121,
    height: 121,
    borderRadius: 100,
    backgroundColor: "transparent",
    borderWidth: 3,
    // borderColor: "yellow",
    top:20,
    left: 0,
  },
  image2: {
    width: 121,
    height: 121,
    borderRadius: 100,
    backgroundColor: "transparent",
    borderWidth: 3,
    // borderColor: "yellow",
    top: 25,
    right: 80,
  },
  image1Content: {
    top: 20,
    left: 0,
    fontSize: 18,
    fontWeight: "600",
  },
  image2Content: {
    top: 20,
    right: 80,
    fontSize: 18,
    fontWeight: "600",
  },
  image1Content1: {
    top: 20,
    left: 0,
    fontSize: 14,
    fontWeight: "600",
    color: '#8D8D8D',
  },
  image2Content2: {
    top: 20,
    right: 80,
    fontSize: 14,
    fontWeight: "600",
    color: '#8D8D8D',
  },
  heartIcons: {
    left: 15,
    bottom: 4,
  },
  heartContent: {
    top: 20,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default UserProfileScreen;
