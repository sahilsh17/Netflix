import './App.css';
import Row from './Row';
import requests from './requests';
import React from 'react';

function App() {
  return (
    <div className="App">
     <h1>Netflix clone</h1>
     <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} />
     <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    </div>
  );
}

export default App;
