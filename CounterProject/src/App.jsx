import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15
  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    if (counter <20){
      counter = counter+1;
      setCounter(counter)
    }
  }

  const removeValue = () =>{

    if (counter>0){
      counter = counter-1
      setCounter(counter)
    }
    


  }

  return (
    <>
      <h1>Hello world</h1>
      <h2> counter is {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
