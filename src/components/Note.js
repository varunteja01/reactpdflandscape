import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  textStyle: {
    borderTop: 1,
    borderBottom: 1,
    fontSize: 10,
    minHeight: 14,
  },
  headingColour: {
    backgroundColor: '#c0c0c0',
  },
})

const Note = () => (
  <View>
    <Text style={styles.textStyle}>
      <Text style={styles.headingColour}>Note :</Text> default comment
    </Text>
  </View>
)

export default Note
