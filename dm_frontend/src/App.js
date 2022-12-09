import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [answer, setAnswer] = useState('')

  const getAnswer = () => {
    fetch('http://localhost:3001/answer')
      .then(response => response.json())
      .then(data => setAnswer(data))
  }

  const getRandomAnswer = answers[Math.floor(Math.random() * answers.length)]







  return (
    <div className="App">
      <h1>Decision maker</h1>
      <h3>Focus on a question, then click the button below for an answer</h3>
      <button>Get answer</button>



    </div>
  );
}

export default App;
