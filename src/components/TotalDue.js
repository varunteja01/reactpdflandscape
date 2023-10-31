import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'
// import { CalculationTableData } from './CalculationTable'

const styles = StyleSheet.create({
  totalDueStyle: {
    width: '50%',
    justifyContent: 'space-between',
  },
  TotalDueColumn: {
    flexDirection: 'column',
    fontSize: 9,
  },
})

const TotalDue = ({ numberOfRows, totalQuantity }) => {
  return (
    <View style={styles.totalDueStyle}>
      <View style={styles.TotalDueColumn}>
        <View
          style={{ flexDirection: 'row', borderBottom: 1, paddingBottom: 1 }}
        >
          <Text style={{ marginLeft: 100 }}>Total Due Amount</Text>
          <Text style={{ marginLeft: 100, marginRight: 30 }}>22,390</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingBottom: 3,
          }}
        >
          <View style={{ flexDirection: 'row', gap: 20, borderRight: 1 }}>
            <View style={{ gap: 1.5 }}>
              <Text>Cases </Text>
              <Text>Total Items </Text>
              <Text>Total Qty</Text>
            </View>
            <View style={{ gap: 1.5 }}>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
            </View>
            <View style={{ gap: 1.5, paddingRight: 6 }}>
              <Text>0</Text>
              <Text>{numberOfRows}</Text>
              <Text>{totalQuantity}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 20, borderRight: 1 }}>
            <View style={{ gap: 1.5 }}>
              <Text>Disc. Per</Text>
              <Text>Cr/Dr Amt.</Text>
              <Text>Freight Amt.</Text>
              <Text>Rounding.</Text>
            </View>
            <View style={{ gap: 1.5 }}>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
            </View>
            <View style={{ gap: 1.5, paddingRight: 6 }}>
              <Text>0</Text>
              <Text>0</Text>
              <Text>0.00</Text>
              <Text>0.34</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', gap: 20 }}>
            <View style={{ gap: 1.5 }}>
              <Text>Subtotal </Text>
              <Text>Discount </Text>
              <Text>GST Amt</Text>
              <Text>TCS</Text>
            </View>
            <View style={{ gap: 1.5 }}>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
            </View>
            <View style={{ gap: 1.5 }}>
              <Text>24.00</Text>
              <Text>2.88</Text>
              <Text>2.54</Text>
              <Text>0</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            border: 1,
            borderLeft: 0,
            paddingLeft: 30,
            paddingBottom: 1,
            paddingTop: 0,
            borderRight: 0,
          }}
        >
          <Text>Amt in words: twenty Four Rupees Only </Text>
        </View>
      </View>
    </View>
  )
}

export default TotalDue
