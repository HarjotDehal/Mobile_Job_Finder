import React from 'react'
import { Text, View, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native'

import { Stack, useRouter, useSearchParams } from 'expo-router'

import { useCallback, useState } from 'react'

import {Company, JobAbout, JobFooter, JobAboutMe, Jobmyqualifications,Jobmyresponsibilities, JobTabs, ScreenHeaderBtn, Specifics} from '../../components'

import {profile} from '../../assets/images/prof.jpeg';
import {COLORS, icons, SIZES} from '../../constants';

import useFetch from '../../hook/useFetch'
import { ScrollView } from 'react-native-gesture-handler'
import Company2 from '../../components/jobdetails/company2/Company2'
// this is for any of specific jobs. it will auto fill with the correct data. 

const tabs = ["About","Education", "Skills"];

const MyProf = () => {

  const params = useSearchParams();
  const router= useRouter();

  // this is just our initial things

//   const{data, isLoading, error, refetch} = useFetch('job-details',{
//     job_id:params.id

//   }) 

//   const [refreshing, setRefreshing] = useState(false);

  const [activeTab, setActiveTab] = useState(tabs[0])
  // this default sets it to tab 1. which is the about page. 
//   const onRefresh = useCallback(() =>{

//     setRefreshing(true);
//     refetch();
//     setRefreshing(false);

//   },[])


  const displayTabContent = () =>{

    switch(activeTab){

      case "About":
        return <JobAbout
        // ?? means if it doesnt exist then do the following. 
        info={'My name is Harjot Dehal, and I am a computer science student at Rutgers University, set to graduate in January 2024. I am incredibly passionate about technology and constantly strive for success in my academic pursuits. \n\n Beyond my studies, I have a wide range of interests and hobbies that bring joy to my life. One of my greatest passions is playing basketball. It not only keeps me physically fit but also ignites my competitive spirit. Through basketball, I have learned the value of teamwork, discipline, and perseverance. \n \n In addition to basketball, I prioritize my physical well-being by regularly going to the gym. I believe that a balanced lifestyle, encompassing both mental and physical health, is essential for personal growth and productivity. \n\n Coding projects are where I channel my enthusiasm and drive. I find immense joy in tackling the challenges that programming presents. Whether its solving complex algorithms, developing innovative applications, or collaborating with others on coding projects, I eagerly dive into the world of coding to expand my knowledge and skills. \n\n As a student, I am always seeking new challenges and constantly honing my problem-solving abilities. I have an insatiable curiosity and stay up-to-date with the latest advancements and trends in the field of computer science. \n I am highly motivated and driven to achieve my goals. With an unwavering determination and passion for my craft, I am confident that I will make a significant impact in the world of computer science. \n\n Overall, I am Harjot Dehal—a computer science student who embraces challenges, loves basketball, prioritizes physical fitness, and eagerly works on coding projects. I am eager to learn, grow, and make a difference in my field. '}
        number={1} />;
      case "Education" :
        return <JobAbout 
        
        info={'Bachelors of Science in Computer Science at Rutgers University (2021-2024). \nPhillipsburg High School (2017-2021)  ' }
        number={2}
        />
      case "Skills":
       return <JobAbout 
        // ?? means if it doesnt exist then do the following. 
        info={'Programming Languages: HTML/CSS, C/C++, Python, Java, SQL, JavaScript, Swift, Lean Software: ILab/Linux, Visual Studio Code, Matplotlib, Git, Emacs, ReactJS Courses: Data Structures, Discrete Mathematics, Data Management, Computer Architecture, Databases, Systems Programming, Graph Theory, Multivariable Calculus, Object Oriented Programming, Linear Algebra, Principles of Programming Languages, Algorithms, Linear Optimization Databases: MySql, Mongo Other: Trilingual English, Punjabi, Hindi'} 
        number={3}
        
        />;
       
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
// refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}

>

{/* {isLoading ? (
  <ActivityIndicator size='large' color={COLORS.primary} />
) : error? (
  <Text> Something went Wrong</Text>
) : data.length ===0 ? (
  <Text>No Data</Text>
) : ( */}
  <View style={{padding:SIZES.medium, paddingBottom:100}}>

    <Company2
  
    companyLogo = {profile}
    jobTitle ={'Harjot Dehal'}

    companyName ={'Aspiring Software Engineer'}
    location ={'NJ'}

    />

<JobTabs    

tabs={tabs}
activeTab={activeTab}
setActiveTab={setActiveTab}
/>

{displayTabContent()}







  </View>




</ScrollView>


{/* <JobFooter 

url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'}
/> */}


<JobFooter 

url={"https://www.linkedin.com/in/harjot-dehal/"}
number={1}
/>


</>




</SafeAreaView>


  )
}

export default MyProf