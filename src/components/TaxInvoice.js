import React from 'react'
import { View, Text } from '@react-pdf/renderer'
import { StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  TaxInvoice: {
    borderBottom: 1,
    fontSize: 13,
    paddingTop: 6,
    paddingBottom: 3,
    paddingLeft: 60,
  },

  TaxInvoiceFlex: {
    flexDirection: 'column',
    fontSize: 11.5,
    paddingBottom: 14.5,
    gap: 4,
    paddingLeft: 3,
    paddingRight: 3,
    // border: 1,
  },

  TaxInvoiceFlexRow: {
    flexDirection: 'row',
    gap: 50,
    marginRight: 3,
  },
})

const DynamicTaxInvoice = ({ tax }) => {
  return (
    <View>
      <Text style={styles.TaxInvoice}>TAX INVOICE</Text>

      <View style={styles.TaxInvoiceFlex}>
        <Text>Inv. No:{tax.invoiceNo} </Text>
        <View style={styles.TaxInvoiceFlexRow}>
          <Text>Date : {tax.date}</Text>
          <Text style={{ fontFamily: 'AntonFamily' }}>{tax.paymentMode}</Text>
        </View>
        <Text>PO # :{tax.po}</Text>
      </View>
    </View>
  )
}

const TaxInvoice = () => {
  const sampleTax = {
    invoiceNo: 'S2300026',
    date: '06-04-2023',
    paymentMode: 'CREDIT',
    po: '',
  }
  return <DynamicTaxInvoice tax={sampleTax} />
}

export default TaxInvoice
