import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TabNavigation from '../Navigation/TabNavigation';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from "@expo/vector-icons";
// import { Button } from 'react-native-paper';
// import { TouchableOpacity } from 'react-native-gesture-handler';


const DashboardScreen = ({navigation}) => {

  const handlePaymentDetailed = () => {
    navigation.navigate('PaymentDetail')
}

  return (
    <View>
    {/* <View>
    <MaterialIcons
            name="groups"
            size={50}
            color="blue"
            style={styles.emailIcon}
          />
    </View> */}
<View style={styles.container}>

      <View style={styles.column}>
    
        <View style={styles.card1}>
       {/* <Image
              source={require('./assets/Images/123.png')}
            style={styles.cardImage}
          />  */}
         
          <Text style={styles.cardText}>CLIENTS</Text>
        </View>
        <View style={styles.card2}>
          <Text style={styles.cardText}>LEADS</Text>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.card3}>
          <Text style={styles.cardText}>ADD CLIENTS</Text>
        </View>
        <View style={styles.card4}>
          <Text style={styles.cardText}>ADD LEADS</Text>
        </View>
      </View>
     
     </View>
     <View style={styles.container1}>
        <Text style={styles.paragraph}>Ongoing</Text>
        <Text style={styles.paragraph1}>All View</Text>
        </View>
        <View style={styles.container2}>
       <Ionicons name='cash-outline' size={35} style={{left: 25, top: 30,}}/>
      <Text style={styles.paragraph2}>Due Payment</Text>
      <Text style={styles.paragraph3}>Lorem ipsum dolor sit amet to an 
      consectetur dipiscing sit. elit consectetur dipiscing  tincidunt.</Text>
      <TouchableOpacity style={styles.button} onPress={handlePaymentDetailed}>
        <Text style={styles.buttonText}>Payment Detail</Text>
      </TouchableOpacity>
     </View>
   
    <View style={styles.tabNavigation}>
    <TabNavigation />
    </View>
    </View>
    
 );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
   top: 90,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  column: {
    marginLeft: 30,
    // left: 200,
   
  },
  card1: {
    height: 189,
    width: 200,
    backgroundColor: '#94bef2',
    borderRadius: 25,
    marginVertical: 8,
    // padding: 40,
    paddingTop: 155,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  card2: {
    height: 110,
    width: 200,
    backgroundColor: '#51DBFF',
    borderRadius: 25,
    marginVertical: 8,
    paddingTop: 75,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  card3: {
    height: 110,
    width: 200,

    backgroundColor: '#ffc989',
    borderRadius: 25,
    marginVertical: 8,
    paddingTop: 75,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  card4: {
    height: 189,
    width: 200,
    top: 10,
    backgroundColor: '#FF94B2',
    borderRadius: 25,
    marginVertical: 8,
    paddingTop: 155,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
  },
  container1: {
    // top: 90,
    // left: 10,
    // width: 475,
    // elevation: 3,
    // borderRadius: 25,
    // marginVertical: 8,
    // paddingTop: 155,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // right: 200,
  },
  container2: {
    top: 150,
    elevation: 3,
    width: 460,
    left: 15,
    marginVertical: 8,
    paddingBottom: 15,
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    borderRadius: 0,
    marginVertical: 8,
    // paddingTop: 155,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  paragraph: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 26,
    lineHeight: 35,
    top: 150,
    left: 35,
    // right: 230,
    textTransform: 'capitalize',
    color: '#000000',
  },
  paragraph1: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    left: 390,
    top:  120,
    textTransform: 'capitalize',
    color: '#53BEFE'
  },
   paragraph2: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 26,
    lineHeight: 35,
    top: -10,
    left: 80,
    textTransform: 'capitalize',
    color: '#000000',
   
  
  },
  paragraph3: {
    fontFamily: 'OpenSans-Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    top: 0,
    left: 30,
    fontFamily: 'OpenSans',
    // left: 100,
    textTransform: 'capitalize',
    color: '#5C5C5C',
  },
  button: {
    marginLeft: 110, // Adjust the value as needed
    marginRight: 110,
    left: -80,
    marginTop: 20,
    paddingTop: 16,
    paddingBottom: 16,
    right: 220,
    right: 330,
    alignItems: 'center',
    backgroundColor: '#FF94B2',
    borderRadius: 6,
   
  },
  buttonText: {
    color: 'white',
    fontWeight: 400,
    fontSize: 18,
  },
 
  tabNavigation: {
    top: 320
 },
//  emailIcon: {
// top: 150,
// Shadowopacity: 0.2,
//  }
});

export default DashboardScreen;
