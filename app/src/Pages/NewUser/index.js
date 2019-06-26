import React from 'react'
import './NewUser.scss'
import Form from '../../Components/Form'
import Navbar from '../../Components/Navbar'
import Breadcumb from '../../Components/Breadcumb'

const NewUser = ({ action }) => {
  return (
    <React.Fragment>
      <Navbar icon="fas fa-user-plus" />
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
