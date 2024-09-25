import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let def=5

  const addValue =()=>{
    console.log("clicked",def);
    def=def+1 
  }

const removeValue =()=>{
    console.log("clicked",def);
    def=def-1 
  }
  return (
    <>
      <h2>hello</h2>
      <h3>Add & Remove values: {def}</h3>
      <button onClick={addValue}>
        Add value{def}</button>
      <br />
      <button onClick={removeValue}
      >Remove value{def}</button>
    </>
  )
}

export default App
