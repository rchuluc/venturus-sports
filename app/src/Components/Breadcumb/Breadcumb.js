import React from 'react'
import './Breadcumb.scss'
import { Link } from 'react-router-dom'

const Breadcumb = ({ routes }) => {
  console.log(routes)
  return (
    <div className="breadcumb">
      <i className="fas fa-home" />
      <span>
        {routes.map(item => {
          return (
            <React.Fragment>
              <i className="fas fa-chevron-right" />
              <Link to={`${item.path}`}>{item.name}</Link>
            </React.Fragment>
          )
        })}
      </span>
    </div>
  )
}

export default Breadcumb
