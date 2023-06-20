import React from 'react'
import { Text, View, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native'

import { Stack, useRouter, useSearchParams } from 'expo-router'

import { useCallback, useState } from 'react'

import {Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics} from '../../components'


import {COLORS, icons, SIZES} from '../../constants';

import useFetch from '../../hook/useFetch'
import { ScrollView } from 'react-native-gesture-handler'
// this is for any of specific jobs. it will auto fill with the correct data. 

const tabs = ["About","Qualifications", "Responsibilities"];

const JobDetails = () => {

  const params = useSearchParams();
  const router= useRouter();

  // this is just our initial things

  const{data, isLoading, error, refetch} = useFetch('job-details',{
    job_id:params.id

  }) 

  const [refreshing, setRefreshing] = useState(false);

  const [activeTab, setActiveTab] = useState(tabs[0])
  // this default sets it to tab 1. which is the about page. 
  const onRefresh = useCallback(() =>{

    setRefreshing(true);
    refetch();
    setRefreshing(false);

  },[])


  const displayTabContent = () =>{

    switch(activeTab){

      case "Qualifications":
        return <Specifics title="Qualifications"
        // ?? means if it doesnt exist then do the following. 
        points={data[0].job_highlights?.Qualifications ?? ['N/A']} />;
      case "About" :
        return <JobAbout 
        
        info={data[0].job_description ?? "No data provided"}
        number={0}
        />
      case "Responsibilities":
       return <Specifics title="Responsibilities"
        // ?? means if it doesnt exist then do the following. 
        points={data[0].job_highlights?.Responsibilities ?? ['N/A']} />;
      default:
        break
    }
  }
  // implenet onrefresh in a bit. 
  return (
  
<SafeAreaView style={{flex:1, backgroundColor:'#226879'}}>

<Stack.Screen 
options={{
  headerStyle: {backgroundColor: '#226879'},
  headerShadowVisible :false,
  headerBackVisible: false,
  headerLeft: () =>(

    <ScreenHeaderBtn 
    iconUrl={icons.left}
    dimension='60%'
    handlePress={() => router.back()}

    />
  ),
  headerRight: () =>(

    <ScreenHeaderBtn 
    iconUrl={icons.share}
    dimension='60%'
    // handlePress={() => router.back()}

    />
  ),
  headerTitle: ''
  // this will make the header title empty
}}

/>



<>
{/* reac */}
<ScrollView showsVerticalScrollIndicator={false}
// this is inside the other component. 
// the refreshing is a state which we will make above. 
refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}

>

{isLoading ? (
  <ActivityIndicator size='large' color={COLORS.primary} />
) : error? (
  <Text> Something went Wrong</Text>
) : data.length ===0 ? (
  <Text>No Data</Text>
) : (
  <View style={{padding:SIZES.medium, paddingBottom:100}}>

    <Company 
    
    companyLogo ={data[0].employer_logo}
    jobTitle ={data[0].job_title}

    companyName ={data[0].employer_name}
    location ={data[0].job_country}

    />

<JobTabs    

tabs={tabs}
activeTab={activeTab}
setActiveTab={setActiveTab}
/>

{displayTabContent()}







  </View>
)}



</ScrollView>


<JobFooter 

url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'}
number={0}
/>

</>




</SafeAreaView>


  )
}

export default JobDetails