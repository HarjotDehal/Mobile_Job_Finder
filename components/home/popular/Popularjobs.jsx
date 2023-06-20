import React from 'react'

import { useState } from 'react'

import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants'

import PopularJobCard from '../../common/cards/popular/PopularJobCard'
// this is our card styling. 
import useFetch from '../../../hook/useFetch';

const Popularjobs = ({handleClick2}) => {

const router = useRouter();
// this is setting our variables from our api. very interstuing
const{data,isLoading,error} = useFetch('search',{query:'Popular React Jobs',num_pages:1});

const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };



// console.log(data);
// where we make our constants
  return (
    <View style={styles.container}>

<View style={styles.header}> 
<Text style={styles.headerTitle}> Popular jobs</Text>

{/* this is for our job stuff.  */}
<TouchableOpacity onPress={handleClick2}>
<Text style={styles.headerBtn}> Show all</Text>   

   </TouchableOpacity>

</View>

<View style={styles.cardsContainer}>
{isLoading ? (
<ActivityIndicator size='large' colors={COLORS.primary} />

) : error ?(

  <Text>Something went wrong</Text>
) : (
  <FlatList 
  
  data ={data}
  renderItem={({item}) => (

    <PopularJobCard 
    item ={item}
    selectedJob={selectedJob}
    handleCardPress={handleCardPress}
    /> 
  )}
  keyExtractor={item => item?.job_id}
  contentContainerStyle={{columnGap: SIZES.medium}}
  horizontal
  // a key after we fetch and get data. 
  />
)
}

</View>

    </View>
  )
}

export default Popularjobs