// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import food from "./food.json"
import List from './components/List/List'

function App() {

  return (
    <>
      <List data={food}/>
    </>
  )
}

export default App
