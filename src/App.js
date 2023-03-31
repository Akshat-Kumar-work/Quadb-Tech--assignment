import ShowInfoContainer from './components/ShowInfoContainer';
import ShowSummary from './components/ShowSummary';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import BookTicket from './components/BookTicket';
import TicketBooked from './components/TicketBooked';


function App() {


  return (
    <div >

      <Routes>
        <Route path='/' element={<ShowInfoContainer  ></ShowInfoContainer>}></Route>
        <Route path="/showsummary" element={<ShowSummary ></ShowSummary>}></Route>
        <Route path='/bookticket' element={<BookTicket></BookTicket>}></Route>
        <Route path='/ticketbooked' element={<TicketBooked></TicketBooked>}></Route>
      </Routes>
    </div>
  );
}

export default App;
