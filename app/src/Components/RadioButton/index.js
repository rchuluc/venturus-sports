import React from 'react'
import './RadioButton.scss'

const RadioButton = ({ id, name, reset, value }) => {
  return (
    <label className="radio">
      {value}
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={event => reset(event.target)}
      />
      <span />
    </label>
  )
}

export default RadioButton
