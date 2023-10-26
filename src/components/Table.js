import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    textAlign: 'left',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    marginTop: 5,
    fontSize: 10,
  },
})

const Table = ({ tableData }) => {
  const rowsPerPage = 10

  return (
    <View>
      {tableData.length > 0 && (
        <View style={styles.table}>
          <View style={{ ...styles.tableRow, backgroundColor: '#c0c0c0' }}>
            <View style={{ ...styles.tableCol, width: '33.33%' }}>
              <Text style={styles.tableCell}>S.No</Text>
            </View>
            <View style={{ ...styles.tableCol, width: '33.33%' }}>
              <Text style={styles.tableCell}>HSN</Text>
            </View>
            <View style={{ ...styles.tableCol, width: '33.33%' }}>
              <Text style={styles.tableCell}>MFG</Text>
            </View>
          </View>
          {tableData.slice(0, rowsPerPage).map((data, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={{ ...styles.tableCol, width: '33.33%' }}>
                <Text style={styles.tableCell}>{data.sno}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: '33.33%' }}>
                <Text style={styles.tableCell}>{data.hsn}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: '33.33%' }}>
                <Text style={styles.tableCell}>{data.mfg}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
      {tableData.length > rowsPerPage && (
        <View>
          {tableData.slice(rowsPerPage).map((data, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={{ ...styles.tableCol, width: '33.33%' }}>
                <Text style={styles.tableCell}>{data.sno}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: '33.33%' }}>
                <Text style={styles.tableCell}>{data.hsn}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: '33.33%' }}>
                <Text style={styles.tableCell}>{data.mfg}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  )
}

export default Table
