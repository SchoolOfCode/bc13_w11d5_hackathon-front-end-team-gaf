import './App.css';
import React, { useState, useEffect } from 'react';
import logo from './logo.png';


// const convertToAnswer = (dto) => {
// 	return { id: dto.id, answer: dto.answer};
// };



function App() {
  // const [answer, setAnswer] = useState('')
  const [answer, setAnswer] = useState([])

  const getAnswer = async () => {
    const response = await fetch("http://localhost:3001/answer", {
      method: "GET",
      headers: {
               'Content-Type': 'application/json'
           }

    });
    const data = await response.json();

    console.log(data.payload);
    setAnswer(data.payload);
  };

  useEffect(() => {

    
    getAnswer();
  }, []);




  function handleClick () {
    const answers = answer;
  }



  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo" />     
      <h1>Decision Maker</h1>
      <h3>Focus on a question, then click the button below for an answer</h3>
      <button onClick={() => getAnswer()}>Get Answer</button>
      <h2>{answer}</h2>
    </div>
  );
}


export default App;
