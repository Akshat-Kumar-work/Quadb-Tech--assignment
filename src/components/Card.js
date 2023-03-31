import {  useNavigate } from "react-router-dom";
import ShowSummary from "./ShowSummary";

function Card (props){

   const showData = props.showdata;
   console.log(showData)
   let id = showData.id;
   
   

 const navigate = useNavigate();

function clickHandler(){
    navigate("/showsummary");
    return ( <ShowSummary id={id}></ShowSummary> )  
}

    return(
        
<div className="card">


<img src={ showData.image? showData.image.medium : "https:previews.123rf.com/images/urfandadashov/urfandadashov1806/urfandadashov180601827/150417827-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg" } className="image"></img>


{/* show details */}
<div className="show-details">
    <p className="show-name">{showData.name}</p>
    <p>{showData.rating[0]}</p>
</div>

<button onClick={clickHandler} >
   Show Summary
</button>

</div>
        
    )
}

export default Card