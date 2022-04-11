import './App.css';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';


function App() {
  const [simpsonQuote, setSimpsonQuote] = useState("");

  const getSimpson = () => {

axios
  .get("https://simpsons-quotes-api.herokuapp.com/quotes")
  // Extract the DATA from the received response
  // .then((response) => response.data)
  .then((res) => res.data)
  // Use this data to update the state
  .then((data) => data[0])
  .then((data) => setSimpsonQuote(data))
  .catch((err) => console.log(err));
  
};

return (
<div className='App'>

  <button type="button" onClick={getSimpson}>Get simpson</button>
  <p>{simpsonQuote.quote}</p>
 <p>{simpsonQuote.character}</p>
  <img src={simpsonQuote.image} alt='' />
</div>
);
};



export default App;
