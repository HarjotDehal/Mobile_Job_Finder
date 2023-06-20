import React from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'

const AboutMe = ({info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About Me:</Text>

<View style={styles.contentBox}>

  <Text style={styles.contextText}>{info}</Text>

  {/* this makes our about section */}
</View>

    </View>
  )
}

export default AboutMe