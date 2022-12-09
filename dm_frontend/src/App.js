import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import 


const convertToAnswer = (dto) => {
  return {
    id: dto.id,
    answer: dto.answer}
}

function App() {
  const [answer, setAnswer] = useState('')
  const [answers, setAnswers] = useState([])


  useEffect(() => {
    fetch('http://localhost:3001/answers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setAnswers(data)
        })
        .catch(error => console.log(error))
  }, [])

  



  function getRandomAnswer(){
    
    const randomAnswer =  answers[Math.floor(Math.random() * answers.length)]; 
    setAnswer(randomAnswer);
    console.log(randomAnswer);
  }




  return (
    <div className="App">
      <h1>Decision maker</h1>
      <h3>Focus on a question, then click the button below for an answer</h3>
      <button onClick= {() => {getRandomAnswer()}}>Get answer</button>
    </div>
  );
}

export default App;
