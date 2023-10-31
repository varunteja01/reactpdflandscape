import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import CalculationTable from './CalculationTable'
import TotalDue from './TotalDue'

const styles = StyleSheet.create({
  styleDirection: {
    flexDirection: 'row',
    // border: 1,
  },
})

const Calculation = ({ tableData }) => {
  const numberOfRows = tableData.length

  return (
    <View style={styles.styleDirection}>
      <CalculationTable />
      <TotalDue numberOfRows={numberOfRows} />
    </View>
  )
}
export default Calculation
