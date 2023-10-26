import React from 'react'
import Title from './components/Title'
import {
  PDFViewer,
  Page,
  Document,
  View,
  StyleSheet,
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

    // Add more data for Page  as needed
  ]

  const maxRowsPerPage = 10
  const pagesData = []

  for (let i = 0; i < tableData.length; i += maxRowsPerPage) {
    const pageData = tableData.slice(i, i + maxRowsPerPage)
    pagesData.push(pageData)
  }

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
    },
    section: {
      margin: 20,
      flexGrow: 1,
      border: 1,
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
          </Page>
        ))}
      </Document>
    </PDFViewer>
  )
}

export default App
