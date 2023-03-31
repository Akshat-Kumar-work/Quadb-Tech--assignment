import "./ShowSummary.css"
import { useLocation, useNavigate } from "react-router-dom";



function ShowSummary(){ 

const location = useLocation();
const summary = location.state.Summary
const navigate = useNavigate();


    return(
        <div className="summary-box">
        <p className="summary-title">Summary</p>
      <p className="summary"> {summary}</p>
        <button onClick={()=>navigate("/bookticket")}
        className="book-btn">Book Ticket</button>
        </div>
    )
}

export default ShowSummary;