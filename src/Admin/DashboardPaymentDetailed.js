import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import TabNavigation from '../Navigation/TabNavigation';
// import { TouchableOpacity } from 'react-native-gesture-handler';

 export default DashboardPaymentDetailed = ({navigation}) => {
  const handleClient = () => {
     navigation.navigate('Client')
  }

  return (
    <ScrollView>
    <View style={styles.wrapper}>
      <View style={styles.container1}>
        <Text style={styles.text}>Received</Text>
        <Text style={styles.text}>Due</Text>
      </View>

      
      <View style={styles.card}>
        <View style={styles.container2}>
        <Image source={{ uri: 'https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg' }} style={styles.circle} />
       <View style={styles.infoContainer}>
          <TouchableOpacity onPress={handleClient}>
            <Text style={styles.name}>Alex Neo</Text>
            </TouchableOpacity>
            <Text style={styles.amount}>$120</Text>
          </View>
          <View style={styles.dots} />
          <View style={styles.dots} />
          <View style={styles.dots} />
        </View>
      </View>
     

      <View style={styles.card}>
        <View style={styles.container2}>
            <Image source={{ uri: 'https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg' }} style={styles.circle} />
       <Text style={styles.name1}>Jame Son</Text>
        <View style={styles.dots1} />
          <View style={styles.dots1} />
          <View style={styles.dots1} />
          <View style={styles.infoContainer}>
            
            <Text style={styles.amount1}>$120</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
            <Image source={{ uri: 'https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg' }} style={styles.circle} />
     
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Silas </Text>
            <View style={styles.dots2} />
          <View style={styles.dots2} />
          <View style={styles.dots2} />
          </View>
          <View style={styles.dots} />
          <View style={styles.dots} />
          <View style={styles.dots} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
            <Image source={{ uri: 'https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg' }} style={styles.circle} />
     
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Aston </Text>
            <Text style={styles.amount2}>$120</Text>
          </View>
          <View style={styles.dots} />
          <View style={styles.dots} />
          <View style={styles.dots} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
            <Image source={{ uri: 'https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg' }} style={styles.circle} />
     
          <Text style={styles.name1}>David</Text>
        <View style={styles.dots3} />
          <View style={styles.dots3} />
          <View style={styles.dots3} />
          <View style={styles.infoContainer}>
            
            <Text style={styles.amount3}>$120</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
            <Image source={{ uri: 'https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg' }} style={styles.circle} />
     
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Sperow</Text>
            <Text style={styles.amount}>$120</Text>
          </View>
          <View style={styles.dots} />
          <View style={styles.dots} />
          <View style={styles.dots} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.container2}>
            <Image source={{ uri: 'https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg' }} style={styles.circle} />
     
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Sperow</Text>
            <Text style={styles.amount}>$120</Text>
          </View>
          <View style={styles.dots} />
          <View style={styles.dots} />
          <View style={styles.dots} />
        </View>
      </View>


      <View style={styles.card}>
        <View style={styles.container2}>
            <Image source={{ uri: 'https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg' }} style={styles.circle} />
     
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Alex Neo</Text>
            <Text style={styles.amount}>$120</Text>
          </View>
          <View style={styles.dots} />
          <View style={styles.dots} />
          <View style={styles.dots} />
        </View>
      </View>
      
      <View style={styles.card}>
        <View style={styles.container2}>
            <Image source={{ uri: 'https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg' }} style={styles.circle} />
     
          <View style={styles.infoContainer}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.amount}>$120</Text>
          </View>
          <View style={styles.dots} />
          <View style={styles.dots} />
          <View style={styles.dots} />
        </View>
      </View>
       <View style={styles.container3}>
       <TabNavigation />
       </View>
      

 </View>
 </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
   top: 50,
  },  
  text: {
    marginLeft: 50,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: '#8171F7',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    elevation: 3,
    top: 20,
    marginBottom: 20,
    paddingBottom: 30,
  },
  container1: {
    flexDirection: 'row',
    left: 300,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8171F7',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: '#8171F7',
    marginRight: 8,
  },
   name1: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: '#8171F7',
    marginRight: 8,
    left: 15,
  },
  amount: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: '#000000',
    left: 205,
  },
    amount1: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: '#000000',
    left: 255,
  },
    amount2: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: '#000000',
    left: 215,
  },
     amount3: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: '#000000',
    left: 279,
  },
  dots: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#000000',
    marginLeft: 8,
  },
   dots1: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#000000',
    marginLeft: 8,
    left: 205,
  },
    dots2: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#000000',
    marginLeft: 8,
    left: 220,
  },
     dots3: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#000000',
    marginLeft: 8,
    left: 230,
  },
  container3: {
    top: 880,
    position: 'absolute',
    // bottom: -100,
    left: 0,
    right: 0,
  }
})