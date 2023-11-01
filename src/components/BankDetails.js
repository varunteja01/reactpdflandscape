import React from 'react'
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer'
import phonepe from '../phonepe.jpg'

const styles = StyleSheet.create({
  bankDetailsRow: {
    flexDirection: 'row',
    borderRight: 1,
    gap: 40,
    width: '24%',
  },
  bankDetailsColumn: {
    flexDirection: 'column',
    fontSize: 8,
    gap: 3,
    paddingTop: 5,
    paddingLeft: 2,
  },
  titleImage: {
    width: 60,
    height: 60,
    marginTop: 5,
  },
})

const DynamicDetails = ({ details }) => {
  return (
    <View style={styles.bankDetailsRow}>
      <View style={styles.bankDetailsColumn}>
        <Text>Bank Details:</Text>
        <Text>
          A/C:
          <Text style={{ fontFamily: 'AntonFamily' }}> {details.detail1}</Text>
        </Text>
        <Text style={{ fontFamily: 'AntonFamily' }}>{details.bank}</Text>
        <Text>
          Branch:
          <Text style={{ fontFamily: 'AntonFamily' }}>{details.detail3}</Text>
        </Text>
        <Text>IFSC:{details.detail4}</Text>
      </View>
      <View>
        <Image src={phonepe} style={styles.titleImage} />
      </View>
    </View>
  )
}
const BankDetails = () => {
  const sampleDetails = {
    detail1: '29930200000505',
    bank: 'BANK OF BARODA',
    detail3: 'NIRMAL',
    detail4: 'BARB0NIRMAL',
  }

  return <DynamicDetails details={sampleDetails} />
}

export default BankDetails
