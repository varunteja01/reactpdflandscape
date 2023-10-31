import React from 'react'
import { StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  netAmountStyles: {
    gap: 30,
    fontSize: 7,
    width: '18%',
    paddingTop: 5,
    paddingLeft: 5,
  },
})

const NetAmount = ({ isLastPage }) => (
  <View style={styles.netAmountStyles}>
    <Text>NET AMOUNT:</Text>
    {isLastPage ? (
      <Text style={{ fontSize: 20, paddingLeft: 40 }}>Rs. 24.00</Text>
    ) : (
      <Text style={{ fontSize: 20, paddingLeft: 30 }}>Continue...</Text>
    )}
  </View>
)

export default NetAmount
