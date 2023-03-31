
import Card from "./Card";
import { useEffect } from "react";
import { apiUrl } from "../data";
import { useState } from "react";
import {toast} from 'react-toastify'


function ShowInfoContainer(){

const [shows, setshows] = useState([])

async function fetchdata (){
try{
  //calling api
  let res = await fetch(apiUrl);
  //converting data into json format
  let output = await res.json();
  //saving data into courses variable
  setshows(output)
}
catch(error){ 
  toast.error("something went wrong");
} 
}

//using effect hook to call an api after rendering 
useEffect( ()=>{
fetchdata()
},[]);
   
    return(
        <div>
            {
                    //single show is passing as a property of card
                    shows.map( (show)=>{ 
                           
                    return <Card  key={show.show.id} showdata={show.show} ></Card> 

                    
                } )
               }
        </div>
    )

}

  


export default ShowInfoContainer;