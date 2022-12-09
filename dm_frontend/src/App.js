import './App.css';
import React, { useState } from 'react';
import logo from './logo.png';


const answers = [
  {
    answer: 'Yes'
  },
  {
    answer: 'No'
  },
  {
    answer: 'Maybe'
  },
  {
    answer: 'Ask again later'
  },
  {
    answer: 'It is certain'
  },
  {
    answer: 'It is decidedly so'
  },
  {
    answer: 'Without a doubt'
  },
]


function App() {
  const [answer, setAnswer] = useState('')

  
  // useEffect(() => {
  //   fetch('http://localhost:3001/answers', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //       .then(response => response.json())
  //       .then(data => {
  //         const answers = data.map(answer => {
  //           return {
  //             answer: answer.answer
  //           }
  //         })
  //         setAnswers(answers)
  //         const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
  //         setAnswer(randomAnswer.answer)
  //         console.log(randomAnswer.answer)
  //       }
  //       )
  //   }

  //   )
  // });


  function getRandomAnswer(){
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
    setAnswer(randomAnswer.answer)
    console.log(randomAnswer.answer)
  }
      




  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo" />     
      <h1>Decision Maker</h1>
      <h3>Focus on a question, then click the button below for an answer</h3>
      <button onClick = {getRandomAnswer} >Get Answer</button>
      <h2> { answer }</h2>

    </div>
  );
}


export default App;
