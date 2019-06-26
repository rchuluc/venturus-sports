import React from 'react'
import './Checkbox.scss'

const Checkbox = ({ value, name, reset }) => {
  return (
    <label className="checkbox">
      {value}
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={event => reset(event.target)}
      />
      <span />
    </label>
  )
}

export default Checkbox
