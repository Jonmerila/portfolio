import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header"

import './App.css'

function App() {
  let AllProjects = [{
    title: "Hangman",
    note: "Very simple hangman app",
    link: "www.Google.com"
}]

  return (
    <>
      
       <Header data={AllProjects}/>
      <h1>Jon Merilä</h1>
      
    </>
  )
}

export default App
