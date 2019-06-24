import React from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Breadcumb from './Components/Breadcumb/Breadcumb'
import NewUser from './Pages/NewUser/NewUser'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Breadcumb />
      <NewUser />
    </div>
  )
}

export default App
