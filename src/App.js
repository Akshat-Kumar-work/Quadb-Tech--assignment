import ShowInfoContainer from './components/ShowInfoContainer';
import ShowSummary from './components/ShowSummary';
import './App.css';
import {Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div >
      
      

      <Routes>
        <Route path='/' element={<ShowInfoContainer ></ShowInfoContainer>}></Route>
        <Route path="/showsummary" element={<ShowSummary ></ShowSummary>}></Route>
      </Routes>
    </div>
  );
}

export default App;
