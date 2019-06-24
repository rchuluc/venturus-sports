import React from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Breadcumb from './Components/Breadcumb/Breadcumb'
import Header from './Components/Header/Header'
import Table from './Components/Table/Table'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Breadcumb />
      <Header />
      <Table />
    </div>
  )
}

export default App
