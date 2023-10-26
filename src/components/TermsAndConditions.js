import React from 'react'
import { View, StyleSheet, Text } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  TermsConditions: {
    flexDirection: 'column',
    gap: 7,
    fontSize: 6,
    borderRight: 1,
    width: '40%',
    paddingLeft: 2,
    paddingBottom: 2,
    paddingTop: 2,
  },
})

const TermsAndConditions = () => (
  <View style={styles.TermsConditions}>
    <Text style={{ fontSize: 10, flexWrap: 'wrap' }}>Terms and conditions</Text>
    <Text>
      Goods once sold will not be taken back we here by given the warranty that
      the googs describe are sold by us this invoice do not contravene in any
      way the provision of section 18 drugs cosmetics Act, 1940.
    </Text>
    <Text>
      Please address all correspondence related to adjustment or claims on this
      invoice to the firm & not to the attention of any individual.
    </Text>
    <Text>Subject to NIRMAL Jurisdiction only</Text>
  </View>
)

export default TermsAndConditions
