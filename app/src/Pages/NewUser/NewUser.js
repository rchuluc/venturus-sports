import React from 'react'
import './NewUser.scss'
import Form from '../../Components/Form/Form'
import Navbar from '../../Components/Navbar/Navbar'
import Breadcumb from '../../Components/Breadcumb/Breadcumb'

const NewUser = ({ action }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Breadcumb
        routes={[
          { name: 'Users', path: '/user' },
          { name: 'New User', path: '/user/new' }
        ]}
      />
      <div className="container">
        <div className="registration-header">
          <h1>Registration</h1>
          <span className="separator" />
        </div>
        <div className="content">
          <Form action={action} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default NewUser
