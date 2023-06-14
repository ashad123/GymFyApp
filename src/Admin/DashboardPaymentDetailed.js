import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DashboardPaymentDetailed = () => {
  return (
    <View>
      <View style={styles.container1}>
      <Text style={styles.text}>Received</Text>
        <Text style={styles.text}>Due</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   container1: {
    flexDirection: 'row',
   },
   text: {
    marginRight: 10, 
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: '#8171F7',
  },
})

export default DashboardPaymentDetailed