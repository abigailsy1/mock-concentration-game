import React, { useState } from 'react';
import './App.css';
import Card from './components/card'

export default function App() {
  const [flipped, setFlipped] = useState([])

  const handleClick = (id) => setFlipped([...flipped, id])

  return (
    <div>
      <h1>Mock Concentration Game</h1>
      <p>Are you ready to test your memory?</p>

      <Card 
        id={1}
        width={100}
        height={100}
        back={`/img/back.png`}
        front={`/img/Chopper.jpg`}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}/>
    </div>
  )
}
