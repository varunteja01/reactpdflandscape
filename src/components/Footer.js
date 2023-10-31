import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import TermsAndConditions from './TermsAndConditions'
import BankDetails from './BankDetails'
import Signatory from './Signatory'
import NetAmount from './NetAmount'

const styles = StyleSheet.create({
  titleFlex: {
    flexDirection: 'row',

    // borderTop: 1,
  },
})

const Footer = () => (
  <View style={styles.titleFlex}>
    <TermsAndConditions />
    <BankDetails />
    <Signatory />
    <NetAmount />
  </View>
)

export default Footer
