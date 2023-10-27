import React from 'react'
import { View, Image } from '@react-pdf/renderer'
import { StyleSheet } from '@react-pdf/renderer'
import smartpharma from '../smartpharma360.jpg' // Import the image
import From from './From'
import TaxInvoice from './TaxInvoice'
import To from './To'

const styles = StyleSheet.create({
  titleFlex: {
    flexDirection: 'row',
    borderBottom: 1,
  },
  titleImage: {
    width: 80,
    height: 80,
    border: 1,
  },
})

const Title = () => (
  <View>
    {/* what if you want to wrap pages but also be able to render a component on all pages? This is where the fixed prop comes into play. */}
    <View style={styles.titleFlex}>
      <Image src={smartpharma} style={styles.titleImage} />
      <From />
      <TaxInvoice />
      <To />
    </View>
  </View>
)

export default Title
