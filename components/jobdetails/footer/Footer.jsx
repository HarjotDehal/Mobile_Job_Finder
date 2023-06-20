import React from 'react'
import { View, Text, TouchableOpacity,Image, Linking } from 'react-native'

import { icons } from '../../../constants'
import styles from './footer.style'

// remains on the bottom outside the scrolling ability. 
const Footer = ({url,number}) => {



let t='';
let k = icons.heartOutline;
switch(number){

case 0:
  {
    t="Apply for job"
  }
  break;
case 1:
  {
    t="View LinkedIn"
    k =icons.linkedin
  }
  break;


}





  return (
    <View style={styles.container}>
      
<TouchableOpacity style={styles.likeBtn}>

  <Image 

  source={icons.heartOutline}
  resizeMode='contain'
  style={styles.likeBtnImage} />
</TouchableOpacity>

<TouchableOpacity style={styles.applyBtn}
onPress={() => Linking.openURL(url)}
>

<Text style={styles.applyBtnText}> {t}</Text>


</TouchableOpacity>


    </View>
  )
}

export default Footer