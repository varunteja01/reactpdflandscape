import React from 'react'
import Title from './components/Title'
import { PDFViewer, Page, Document, View } from '@react-pdf/renderer'
import Table from './components/Table'
import Footer from './components/Footer'

const App = () => {
  const tableData = [
    { sno: 1, hsn: 12345, mfg: 'ABC Inc.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },
    { sno: 2, hsn: 67890, mfg: 'XYZ Corp.' },

    // Add more data as needed
  ]
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page
          orientation="landscape"
          size="A4"
          style={{
            margin: 20,
            border: 1,
          }}
        >
          <View>
            <Title />
            <Table tableData={tableData} />
            <Footer />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default App
