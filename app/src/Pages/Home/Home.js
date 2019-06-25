import React from 'react'
import Breadcumb from '../../Components/Breadcumb/Breadcumb'
import Header from '../../Components/Header/Header'
import Table from '../../Components/Table/Table'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Breadcumb routes={[{ name: 'Users', path: '/user' }]} />
      <Header />
      <Table />
    </React.Fragment>
  )
}

export default Home
