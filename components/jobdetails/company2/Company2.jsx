import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from '../company2/company2.style'

import profile from '../../../assets/images/prof.jpeg'
// simple component

import {icons} from '../../../constants'
import { checkImageURL } from '../../../utils'


const Company2 = ({companyLogo, jobTitle, companyName, location}) => {
  return (
    <View style={styles.container}>

<View style={styles.logoBox}>

<Image source={profile}
style={styles.logoImage}
/>

</View>

<View style={styles.jobTitleBox}>

<Text style={styles.jobTitle}>
{jobTitle}
</Text>
</View>

<View style={styles.companyInfoBox}>
<Text style={styles.companyName}>{companyName} / </Text>

<View style={styles.locationBox}>
{/* this will put the location next to the company name alongside a logo.  */}
  {/* another image within this location thing */}
  <Image source={icons.location}
  resizeMode='contain'
  style={styles.locationImage}  />

<Text style={styles.locationName}>{location}</Text>

</View>

</View>

    </View>
  )
}

export default Company2