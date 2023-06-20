import React from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'

const myresponsibilities = ({info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>My Responsibilities:</Text>

<View style={styles.contentBox}>

  <Text style={styles.contextText}>{info}</Text>

  {/* this makes our about section */}
</View>

    </View>
  )
}

export default myresponsibilities