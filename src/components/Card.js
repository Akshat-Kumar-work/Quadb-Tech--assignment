import {  Link, useNavigate } from "react-router-dom";


function Card (props){
   const showData = props.showdata;

   console.log(showData)
    const Summary = showData.summary;
   const navigate = useNavigate();
    
   function clickHandler(){
    navigate("/showsummary", {state : {Summary:Summary} })
   }

    return(
        
<div className="card">


<img className="image" src={ showData.image? showData.image.medium : "https:previews.123rf.com/images/urfandadashov/urfandadashov1806/urfandadashov180601827/150417827-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg" } ></img>


{/* show details */}
<div className="show-details">
    <p className="tour-name">{showData.name}</p>
    <p >{ <Link className="btn-white" to={showData.url}>Show Info</Link>}</p>
</div>

<button onClick={ clickHandler} className="btn-red" >
   Show Summary
</button>

</div>
        
    )
}

export default Card