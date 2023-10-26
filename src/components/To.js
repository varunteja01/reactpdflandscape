import React from 'react'
import { View, Text } from '@react-pdf/renderer'
import { StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  toAddress: {
    flexDirection: 'column',
    fontSize: 7,
    gap: 0.5,
    paddingLeft: 5,
    paddingBottom: 17.5,
    borderLeft: 1,
    // border: 1,
  },
  toName: {
    fontSize: 12,
    paddingTop: 6,
    paddingBottom: 3,
    fontFamily: 'AntonFamily',
  },
})

const DynamicAddress = ({ address }) => {
  return (
    <View>
      <View style={styles.toAddress}>
        {/* In React and most UI frameworks, styles are applied in a cascading manner. 
        When you apply a style to a child element (in this case, <Text>), 
        it takes precedence over the styles applied to its parent (the <View> with styles.toAddress). */}
        <Text style={styles.toName}>TO : {address.to}</Text>
        <Text>{address.addLine1}</Text>
        <Text style={{ fontSize: 11, fontFamily: 'AntonFamily' }}>
          {address.addLine2}
        </Text>
        <Text>{address.addLine3}</Text>
        <Text>{address.addLine4}</Text>
        <Text>{address.addLine5}</Text>
      </View>
    </View>
  )
}
const To = () => {
  const sampleAddress = {
    to: 'SMARTPHARMA MEDICAL AGENCIES (AB01)',
    addLine1: 'Karmanghat',
    addLine2: 'HYDERABAD',
    addLine3: '(P):',
    addLine4: 'D.L.Nos: LKJHGFDSA123456,',
    addLine5: 'GSTIN: 29AACCC1596Q000',
  }

  return <DynamicAddress address={sampleAddress} />
}

export default To
