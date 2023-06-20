
import { useState,useEffect } from "react";

import axios from "axios";




const useFetch = (endpoint,query) =>{

const [data,setData] = useState([]);

const [isLoading, setIsLoading] = useState(false);

const [error, setError] = useState(null);




const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
        // this might have to go out of parentehssis. 
      'X-RapidAPI-Key': 'bff5d5d5c0msh4880fa0d23267b0p16013ejsnae28dab1b56f',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {
        ...query
      },
  };


  const fetchData = async() =>{

setIsLoading(true);


try{
    const response = await axios.request (options);
    setData(response.data.data);
    setIsLoading(false);
}
catch(error){
setError(error);
alert('There is an error');
}finally{

    setIsLoading(false);
}

  }

  useEffect(() => {

    fetchData();
  }, []);

  const refetch = () =>{

    setIsLoading(true);
    fetchData();
  }



  return{data,isLoading,error,refetch};



}

export default useFetch;