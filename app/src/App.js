import React from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Breadcumb from './Components/Breadcumb/Breadcumb'
import NewUser from './Pages/NewUser/NewUser'
import Table from './Components/Table/Table'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Breadcumb />
      <Table />
      <NewUser />
    </div>
  )
}

export default App
