import React from 'react'


import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './nearbyjobs.style'
import {COLORS} from '../../../constants'

import { useRouter } from 'expo-router'

import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
// this is our card styling. 
import useFetch from '../../../hook/useFetch';

const Nearbyjobs = ({handleClick3}) => {

const router = useRouter();
// this is setting our variables from our api. very interstuing
const{data,isLoading,error} = useFetch('search',{query:'Nearby React Jobs',num_pages:1})

// console.log(data);
// where we make our constants
  return (
    <View style={styles.container}>

<View style={styles.header}> 
<Text style={styles.headerTitle}> Nearby jobs</Text>

{/* this is for our job stuff.  */}
<TouchableOpacity onPress={handleClick3}>
<Text style={styles.headerBtn}> Show all</Text>   

   </TouchableOpacity>

</View>

<View style={styles.cardsContainer}>
{isLoading ? (
<ActivityIndicator size='large' colors={COLORS.primary} />

) : error ?(

  <Text>Something went wrong</Text>
) : (
 
  data?.map((job) => (
<NearbyJobCard  

    job = {job}
    key={`nearby-job-${job?.job_id}`}
    handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
/>

  ))

)
}

</View>

    </View>
  )
}

export default Nearbyjobs;