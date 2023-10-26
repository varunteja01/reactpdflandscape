import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import TermsAndConditions from './TermsAndConditions'
import BankDetails from './BankDetails'
import Signatory from './Signatory'
import NetAmount from './NetAmount'

const styles = StyleSheet.create({
  titleFlex: {
    flexDirection: 'row',
  },
})

const Footer = () => (
  <View style={styles.titleFlex} fixed>
    <TermsAndConditions />
    <BankDetails />
    <Signatory />
    <NetAmount />
  </View>
)

export default Footer
