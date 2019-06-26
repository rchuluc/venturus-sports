import React from 'react'
import './Navbar.scss'

const Navbar = ({ icon }) => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h2>
          <span>
            <i className={icon} />
          </span>
          Venturus Sports
        </h2>
      </div>
      <div className="navbar-actions">
        <div className="navbar-avatar">RC</div>
        <p className="navbar-username">
          Rafael Chuluc
          <i className="fas fa-chevron-down" />
        </p>
      </div>
    </div>
  )
}

export default Navbar
