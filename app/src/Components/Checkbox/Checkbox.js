import React from 'react'
import './Checkbox.scss'

const Checkbox = ({ value, name }) => {
  return (
    <label className="checkbox">
      {value}
      <input type="checkbox" name={name} value={value} />
      <span />
    </label>
  )
}

export default Checkbox
