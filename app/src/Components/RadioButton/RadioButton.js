import React from 'react'
import './RadioButton.scss'

const RadioButton = ({ id, name, value }) => {
  return (
    <label className="radio">
      {value}
      <input type="radio" name={name} value={value} id={id} />
      <span />
    </label>
  )
}

export default RadioButton
