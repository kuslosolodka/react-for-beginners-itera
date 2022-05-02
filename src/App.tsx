import React from 'react';
import './App.css';
import JSONData from './data.json'

function App() {
  return (
    <div className="App">
      <div className = "App-data">
      {JSONData.map(el=>{
        return(
          <>
          <p>{el.firstname}</p>
          <p>{el.shortbiography}</p>
          <p>{el.contacts}</p>
          </>
        );
      })}
      </div>
      </div>
  );
}

export default App;
