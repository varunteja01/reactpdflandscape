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

const NetAmount = () => (
  <View style={styles.netAmountStyles}>
    <Text>NET AMOUNT:</Text>
  </View>
)

export default NetAmount
