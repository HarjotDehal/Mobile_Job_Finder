import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'


const TabButton = ({name, activeTab,onHandleSearchType}) =>(

<TouchableOpacity
style={styles.btn(name, activeTab)}
onPress={onHandleSearchType}
>

{/* we have to style this so it looks good */}
  <Text style={styles.btnText(name, activeTab)}>{name}</Text>
</TouchableOpacity>
)
// this is our tabs for our second page. 
const Tabs = ({tabs, activeTab, setActiveTab}) => {

  // we give this prompts which we set in our previous call of this function
  return (
    <View style={styles.container}>
    <FlatList 
    data={tabs}
    renderItem={({item}) => (
 <TabButton 
//  we call our constant which is defined above. 
name={item}
activeTab={activeTab}
onHandleSearchType={() => setActiveTab(item)}
 />
    
    ) }
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item}
      contentContainerStyle ={{columnGap: SIZES.small/2}}

    />
    </View>
  )
}

export default Tabs