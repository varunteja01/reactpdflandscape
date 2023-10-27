import React from 'react'
import Title from './components/Title'
import {
  PDFViewer,
  Page,
  Document,
  View,
  StyleSheet,
  Text,
} from '@react-pdf/renderer'
import Table from './components/Table'
import Footer from './components/Footer'

const App = () => {
  const tableData = [
    {
      sno: 0,
      hsn: 30049061,
      mfg: 'MIC',
      productName: 'DOLO 650',
      pack: 15,
      batchNo: 'TESTNEW',
      expiry: '02/2025',
      qty: 1,
      free: '',
      rate: 24.0,
      amount: 24.0,
      mrp: 31.0,
      disc: 12,
      gst: 12,
    },
    {
      sno: 1,
      hsn: 30049062,
      mfg: 'ABC',
      productName: 'PRODUCT A',
      pack: 10,
      batchNo: 'BATCH001',
      expiry: '03/2024',
      qty: 2,
      free: '',
      rate: 12.5,
      amount: 25.0,
      mrp: 15.0,
      disc: 10,
      gst: 5,
    },

    {
      sno: 2,
      hsn: 30049063,
      mfg: 'XYZ',
      productName: 'PRODUCT B',
      pack: 5,
      batchNo: 'BATCH002',
      expiry: '05/2023',
      qty: 1,
      free: '',
      rate: 9.99,
      amount: 9.99,
      mrp: 12.0,
      disc: 0,
      gst: 18,
    },

    {
      sno: 3,
      hsn: 30049064,
      mfg: 'LMN',
      productName: 'PRODUCT C',
      pack: 20,
      batchNo: 'BATCH003',
      expiry: '01/2026',
      qty: 5,
      free: '',
      rate: 7.25,
      amount: 36.25,
      mrp: 9.0,
      disc: 15,
      gst: 12,
    },

    // Add more data for Page  as needed
  ]

  const maxRowsPerPage = 10
  const pagesData = []

  for (let i = 0; i < tableData.length; i += maxRowsPerPage) {
    const pageData = tableData.slice(i, i + maxRowsPerPage)
    const emptyRowCount = maxRowsPerPage - pageData.length

    if (emptyRowCount > 0) {
      for (let j = 0; j < emptyRowCount; j++) {
        pageData.push({ emptyRow: true }) // You can use a unique key or flag for empty rows
      }
    }
    pagesData.push(pageData)
  }

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
    },
    section: {
      marginTop: 20,
      marginBottom: 35,
      marginLeft: 20,
      marginRight: 20,
      // flexGrow: 1,
      border: 1,
    },
    pageNumbers: {
      position: 'absolute',
      bottom: 15,
      left: 0,
      right: 0,
      textAlign: 'center',
      fontSize: 10,
    },
  })

  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        {pagesData.map((pageData, pageIndex) => (
          <Page
            orientation="landscape"
            size="A4"
            key={pageIndex}
            style={styles.page}
          >
            <View style={styles.section}>
              <Title title={`Page ${pageIndex + 1}`} />
              <Table tableData={pageData} />
              <Footer />
            </View>
            <Text
              style={styles.pageNumbers}
              render={({ pageNumber, totalPages }) =>
                `Page ${pageNumber} of ${totalPages}`
              }
              fixed
            />
          </Page>
        ))}
      </Document>
    </PDFViewer>
  )
}

export default App
