import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import {BASE_URL, API_KEY} from './constants';
import Header from './Header';
import Images from './Images';

function App() {
  const [apod, setApod] = useState("");
  const [error, setError] = useState("");

useEffect(() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  .then(res => {
    setApod(res.data);
  }).catch(err => {
    setError("DARNITT I DONE GOOFED");
  })
}, [])

  return (
    <div className="App">
      <Header apod={apod}/>
      <Images apod={apod}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
