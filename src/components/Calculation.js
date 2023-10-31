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

const Calculation = ({ tableData, isLastPage }) => {
  const numberOfRows = tableData.length
  const { totalQuantity } = tableData.reduce(
    (accumulator, item) => {
      // Parse quantity and free values to numbers (assuming they are strings)
      const quantity = parseFloat(item.qty) || 0
      const freeItems = parseFloat(item.free) || 0
      // Add quantity and free items together
      const combinedQuantity = quantity + freeItems
      // Add to the accumulator
      accumulator.totalQuantity += combinedQuantity

      return accumulator
    },
    { totalQuantity: 0 }
  )

  return (
    <View style={styles.styleDirection}>
      <CalculationTable isLastPage={isLastPage} />
      <TotalDue
        numberOfRows={numberOfRows}
        totalQuantity={totalQuantity}
        isLastPage={isLastPage}
      />
    </View>
  )
}
export default Calculation
