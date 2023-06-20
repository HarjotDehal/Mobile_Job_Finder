


import {View, ScrollView, SafeAreaView, Text} from 'react-native';

import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
// similar to react router

import{COLORS, icons, images, SIZES} from '../constants';
import{Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'
import { set } from 'react-native-reanimated';







const Home =() =>{

    const router= useRouter();

    const [searchTerm, setSearchTerm] = useState('')

    const handleCardPress = () => {
        router.push(`/my-prof/id`);
        // setSelectedJob(item.job_id);
      };


    return(
        // safe area makes more sense to use than normal view as it makes sure that everything shows up on phone. 
        <SafeAreaView style={{flex:1, backgroundColor:'#226879'}}>

<Stack.Screen  

options={{headerStyle:{backgroundColor:'#226879'},
headerShadowVisible:false,
headerLeft: () =>(
    // creates a header button on our home page
<ScreenHeaderBtn    iconUrl={icons.menu} dimension="60%"/>
),
headerRight: () =>(
    // creates a header button on our home page
    
<ScreenHeaderBtn handlePress={handleCardPress} iconUrl={images.profile} dimension="100%" />
),
// this is our right profile header top

headerTitle: ""

}}/>


<ScrollView showsVerticalScrollIndicator={false}>
<View
style={{flex:1,padding:SIZES.medium}}> 

<Welcome 

searchTerm={searchTerm}
setSearchTerm={setSearchTerm}
handleClick={()=>{
    if(searchTerm){
        router.push(`/search/${searchTerm}`)
    }
}}
// add prompts 
/>
{/* add props later */}
<Popularjobs   handleClick2={()=>{
    
        router.push(`/search/Popular React Jobs`)
    
}}        />

<Nearbyjobs    handleClick3={()=>{
    
    router.push(`/search/Nearby React Jobs`)

}}       />

</View>

</ScrollView>

        </SafeAreaView>
    )
}


export default Home;