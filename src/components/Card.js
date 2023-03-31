import {  Link, useNavigate } from "react-router-dom";
import noimg from "../image/noimg.jpg"

function Card (props){
   const showData = props.showdata;
    const Name = showData.name;
  
    const Summary = showData.summary;
   const navigate = useNavigate();
    
   function clickHandler(){
    //passing summary data with navigate hook
    navigate("/showsummary", {state : {Summary:Summary}})
   }

    return(
        
<div className="card">


<img className="image" src={ showData.image? showData.image.medium : noimg } ></img>


{/* show details */}
<div className="show-details">
    <p className="tour-name">{Name}</p>
    <p >{ <Link className="btn-white" to={showData.url}>Show Info</Link>}</p>
</div>

<button onClick={ clickHandler} className="btn-red" >
   Show Summary
</button>

</div>
        
    )
}

export default Card