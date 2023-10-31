import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

const CalculationTableData = [
  {
    gst: '0%',
    disc: '0',
    taxableValue: '0',
    cgst: '',
    sgst: '',
    igst: '',
  },
  {
    gst: '5.00%',
    disc: '0',
    taxableValue: '0',
    cgst: '0.00',
    sgst: '0.00',
    igst: '0.00',
  },
  {
    gst: '12.00%',
    disc: '2.88',
    taxableValue: '21.12',
    cgst: '0.00',
    sgst: '0.00',
    igst: '2.54',
  },
  {
    gst: '18.00%',
    disc: '0',
    taxableValue: '0',
    cgst: '0.00',
    sgst: '0.00',
    igst: '0.00',
  },
  {
    gst: 'Total :',
    disc: '2.88',
    taxableValue: '21.12',
    cgst: '0.00',
    sgst: '0.00',
    igst: '2.54',
  },
]

const styles = StyleSheet.create({
  table: {
    // textAlign: 'center',
    width: '50%',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColumn: {
    borderRight: 1,
    borderBottom: 1,
  },
  tableCell: {
    fontSize: 9,
    textAlign: 'right',
    paddingBottom: 1.1,
    paddingRight: 1,
  },
})

const CalculationTable = () => (
  <View style={styles.table}>
    <View style={{ ...styles.tableRow, backgroundColor: '#c0c0c0' }}>
      <View style={{ ...styles.tableColumn, width: '16.67%' }}>
        <Text style={styles.tableCell}>GST%</Text>
      </View>
      <View style={{ ...styles.tableColumn, width: '16.67%' }}>
        <Text style={styles.tableCell}>Disc.</Text>
      </View>
      <View style={{ ...styles.tableColumn, width: '16.67%' }}>
        <Text style={styles.tableCell}>Taxable Value</Text>
      </View>
      <View style={{ ...styles.tableColumn, width: '16.67%' }}>
        <Text style={styles.tableCell}>CGST Amt.</Text>
      </View>
      <View style={{ ...styles.tableColumn, width: '16.67%' }}>
        <Text style={styles.tableCell}>SGST Amt.</Text>
      </View>
      <View style={{ ...styles.tableColumn, width: '16.67%' }}>
        <Text style={styles.tableCell}>IGST Amt.</Text>
      </View>
    </View>
    {CalculationTableData.map((data, index) => (
      <View style={styles.tableRow} key={index}>
        <View style={{ ...styles.tableColumn, width: '16.67%' }}>
          <Text style={styles.tableCell}>{data.gst}</Text>
        </View>
        <View style={{ ...styles.tableColumn, width: '16.67%' }}>
          <Text style={styles.tableCell}>{data.disc}</Text>
        </View>
        <View style={{ ...styles.tableColumn, width: '16.67%' }}>
          <Text style={styles.tableCell}>{data.taxableValue}</Text>
        </View>
        <View style={{ ...styles.tableColumn, width: '16.67%' }}>
          <Text style={styles.tableCell}>{data.cgst}</Text>
        </View>
        <View style={{ ...styles.tableColumn, width: '16.67%' }}>
          <Text style={styles.tableCell}>{data.sgst}</Text>
        </View>
        <View style={{ ...styles.tableColumn, width: '16.67%' }}>
          <Text style={styles.tableCell}>{data.igst}</Text>
        </View>
      </View>
    ))}
  </View>
)

export default CalculationTable
