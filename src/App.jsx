import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Repos from './components/repos'

function App() {

  return (
    <div>
      <Navbar />
      <Repos />
    </div>
  )
}

export default App
