import React from 'react'
import Breadcumb from '../../Components/Breadcumb'
import Header from '../../Components/Header'
import Table from '../../Components/Table'
import Navbar from '../../Components/Navbar'

const Home = ({ data }) => {
  return (
    <React.Fragment>
      <Navbar icon="fas fa-user-friends" />
      <Breadcumb routes={[{ name: 'Users', path: '/user' }]} />
      <Header />
      <Table data={data} />
    </React.Fragment>
  )
}

export default Home
