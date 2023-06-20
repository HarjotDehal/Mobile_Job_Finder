import React from 'react'
import { useState } from 'react'

import { View, Text, TextInput,TouchableOpacity,Image,FlatList } from 'react-native'


import { useRouter } from 'expo-router'
import styles from './welcome.style'
import {icons, SIZES} from '../../../constants'

const jobTypes=["Full-time","Part-time", "Contractor","Remote","Per-Diem","Hiring Immediately","Overseas","Military"]
// this is all for our welcome page, its making the layout. creating the uttons and also allowing them to be clickable. Cool stuff. 
const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {

const router= useRouter();
const [activeJobType, setActiveJobType] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}>


      <Text style={styles.userName}> Hello Harjot,</Text>
      <Text style={styles.welcomeMessage}> Find your perfect job </Text>

      </View>

<View style={styles.searchContainer}>
<View style={styles.searchWrapper}>

<TextInput style={styles.searchInput} 
value={searchTerm}
placeholder='What type of job are you looking for'

onChangeText={(text) => setSearchTerm(text)}
// have to do on change text to update our search term. 

/>
</View>


<TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
<Image 
source={icons.search} 
resizeMode='contain'
style={styles.searchBtnImage}
/>

</TouchableOpacity>
</View>

<View style={styles.tabsContainer}>
{/* use flat list when more data to render.  */}
<FlatList data={jobTypes} 
renderItem={({item}) =>(

  <TouchableOpacity style={styles.tab(activeJobType,item)}
  onPress={()=>{
    setActiveJobType(item);
    router.push(`/search/${item}`)
  }}
  >
  <Text style={styles.tabText(activeJobType,item)}>{item}</Text>   
  </TouchableOpacity>
)}
keyExtractor={item=>item}
// this is for our flatlist and extracting key from sleection
contentContainerStyle={{columnGap:SIZES.small}}
horizontal
// add more choices to our full time list stuff. 
/>




</View>





    </View>
  )
}

export default Welcome