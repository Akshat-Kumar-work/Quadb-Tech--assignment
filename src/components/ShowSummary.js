import { useState } from "react";
import { useLocation } from "react-router-dom";



function ShowSummary(){ 
const location = useLocation();
const summary = location.state;
console.log(summary)



    return(
        <div>
        {
           // summary.forEach( (word)=>{ return( word) })
        }
        
        </div>
    )
}

export default ShowSummary;