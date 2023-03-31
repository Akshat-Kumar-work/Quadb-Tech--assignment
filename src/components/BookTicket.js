import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookTicket() {

  const [formData , setformData] = useState({
    Name:"",
    movieName:"",
    Email:"",
   
    City:"",
    State:"",
    coldrink:false,
    popcorn:false,
    Offers:false,
    pushNotification:""
  })

  function changeHandler (event){
    const {name , value , checked , type} = event.target;
    setformData( (prevdata) =>{
      return( {...prevdata, [name]:type === "checkbox" ? checked : value })
    })
  }
  const navigate = useNavigate();

  function saveHandler (event){
    event.preventDefault();
    console.log(formData)
    navigate("/ticketbooked")
  }
  

  return (
    <div className="form-container" >

          <form  onSubmit={saveHandler} className="m-8">

            <label htmlFor="firstname">Name</label> <br></br>
            <input id="firstname" type="text" placeholder="Akshat" name="Name" value={formData.Name} onChange={changeHandler}
            className=" placeholder-gray-400 w-full"></input>
<br></br>
<label htmlFor="lastname">Movie Name</label> <br></br>
            <input id="lastname" type="text" placeholder="All American" name="movieName" value={formData.movieName} onChange={changeHandler}
            className=" placeholder-gray-400 w-full"></input>
<br></br>
<label htmlFor="email">Email Address</label> <br></br>
            <input id="email" type="text" placeholder="iamakku0.0.0.1@gmail.com" name="Email" value={formData.Email} onChange={changeHandler}
            className=" placeholder-gray-400 w-full"></input>
<br></br>


<label htmlFor="city">City</label> <br></br>
            <input id="city" type="text" placeholder="Uttam Nagar" name="City" value={formData.City} onChange={changeHandler}
            className=" placeholder-gray-400 w-full"></input>
<br></br>
<label htmlFor="state">State</label> <br></br>
            <input id="state" type="text" placeholder="New Delhi" name="State" value={formData.State} onChange={changeHandler}
            className=" placeholder-gray-400 w-full"></input>

<br></br>

<p>Foods and Drinks</p>

<input id="Coldrinks" type="checkbox" name="coldrink" checked={formData.coldrink} onChange={changeHandler}></input>
<label htmlFor="Coldrinks">Soft Drinks</label> 
<br></br>


<input id="Popcorn" type="checkbox" name="popcorn" checked={formData.popcorn} onChange={changeHandler}></input>
<label htmlFor="Popcorn">Popcorn</label>
<br></br>

<input id="offers" type="checkbox" name="Offers" checked={formData.Offers} onChange={changeHandler}></input>
<label htmlFor="offers">Buffet</label>
<br></br>





<p>Select type</p>

<input type="radio" id="everything" name="pushNotification" onChange={changeHandler} value="everything"></input>
<label htmlFor="everything">2d</label> <br></br>
<input type="radio" id="same" name="pushNotification" onChange={changeHandler} value="same as email"></input>
<label htmlFor="same">3d</label> <br></br>
<input type="radio" id="no push" name="pushNotification" onChange={changeHandler} value="no push notifications"></input>
<label htmlFor="no push">4d</label>

<br></br>

<button>
 Book-PLEASE
</button>
            
          </form>

    </div>
  );
}

export default BookTicket;