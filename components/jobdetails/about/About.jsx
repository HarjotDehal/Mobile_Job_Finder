import React from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'

const About = ({info, number}) => {

  let t ='';
  switch (number){

    case 0:{
      t='About the job:'
    }
    break;
    case 1:{
      t='About Me:'
    }
    break;
    case 2:{
      t='My Education:'
    }
    break;
    case 3:{
      t='My Skills:'
    }


  }


  return (
    <View style={styles.container}>
      <Text style={styles.headText}>{t}</Text>

<View style={styles.contentBox}>

  <Text style={styles.contextText}>{info}</Text>

  {/* this makes our about section */}
</View>

    </View>
  )
}

export default About