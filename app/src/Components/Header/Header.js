import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header-item">
        <i className="fas fa-puzzle-piece" />
        <div className="header-item-text">
          <p>Sport type</p>
          <h3>Cycling</h3>
        </div>
      </div>
      <div className="header-item">
        <i className="fas fa-trophy" />
        <div className="header-item-text">
          <p>Mode</p>
          <h3>Advanced</h3>
        </div>
      </div>
      <div className="header-item">
        <i className="fas fa-map-signs" />
        <div className="header-item-text">
          <p>Route</p>
          <h3>30 miles</h3>
        </div>
      </div>
    </div>
  )
}

export default Header
