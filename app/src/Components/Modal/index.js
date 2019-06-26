import React from 'react'
import './Modal.scss'

const Modal = ({ primaryAction, secondaryAction }) => {
  return (
    <div className="overlay">
      <div className="card-body">
        <div>
          <h2>Are you sure?</h2>
          <p>you can't undoit later</p>
        </div>
        <div className="action-buttons">
          <button onClick={secondaryAction}>Cancel</button>
          <button className="btn-primary" onClick={primaryAction}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
