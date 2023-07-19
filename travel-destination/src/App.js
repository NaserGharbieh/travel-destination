
import './App.css';
import Home from './components/Home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';

import db from './data/db.json'






function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home data={db}/>} />
        <Route path='city/:id' element={<TourDetails data={db}/>} /> 


      </Routes> 
      



    </div>
  );
}

export default App;
