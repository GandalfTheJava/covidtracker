import React from 'react';
import { fetchData } from './API.utils.js';
import './App.css';

function App() {
  fetchData();
  return (
    <div className="App">
      <div> <h1>Covid-19 Tracker</h1> </div>
      <div>
        <div> CARD 1 </div>
        <div> CARD 2 </div>
        <div> CARD 3 </div>
      </div>
      <div> Country Picker
        <div> Pick here </div>
      </div>

      <div> Chart JS</div>
    </div>
  );
}

export default App;
