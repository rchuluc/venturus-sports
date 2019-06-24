import React from 'react'
import './NewUser.scss'
import Form from '../../Components/Form/Form'

const NewUser = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Registration</h1>
        <span className="separator" />
      </div>
      <div className="content">
        <Form />
      </div>
    </div>
  )
}

export default NewUser
