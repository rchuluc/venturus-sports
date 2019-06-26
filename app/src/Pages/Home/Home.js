import React from 'react'
import Breadcumb from '../../Components/Breadcumb/Breadcumb'
import Header from '../../Components/Header/Header'
import Table from '../../Components/Table/Table'
import Navbar from '../../Components/Navbar/Navbar'

const Home = ({ data }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Breadcumb routes={[{ name: 'Users', path: '/user' }]} />
      <Header />
      <Table data={data} />
    </React.Fragment>
  )
}

export default Home
