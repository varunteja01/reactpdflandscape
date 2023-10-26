import React from 'react'
import { StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  signatoryStyles: {
    gap: 30,
    borderRight: 1,
    fontSize: 7,
    paddingTop: 5,
    paddingLeft: 5,
    width: '18%',
  },
})

const Signatory = () => (
  <View style={styles.signatoryStyles}>
    <Text>For SMART PHARMA AGENCIES</Text>
    <Text>Authorised Signatory</Text>
  </View>
)

export default Signatory
