import React from 'react'
import './Form.scss'
import Checkbox from '../Checkbox/Checkbox'
import RadioButton from '../RadioButton/RadioButton'

const Form = () => {
  return (
    <div className="form">
      <div className="form-row">
        <div className="form-col">
          <span>
            <label for="Username">Username</label>
            <input type="text" id="Username" />
            <span>
              <p className="helpText">Enter a username</p>
            </span>
          </span>
          <span>
            <label for="Name">Name</label>
            <input type="text" id="Name" />
            <span>
              <p className="helpText">Enter your name</p>
            </span>
          </span>
          <span>
            <label for="Email">E-mail</label>
            <input type="email" id="Email" />
            <span>
              <p className="helpText">Your best e-mail</p>
            </span>
          </span>
        </div>
        <div className="form-col">
          <span>
            <label for="City">
              City<p>optional</p>
            </label>
            <input type="text" id="City" />
            <span>
              <p className="helpText">Where you from?</p>
            </span>
          </span>
          <span>
            <p>Ride in group?</p>
            <div className="inputs">
              <RadioButton name="ride" value="Always" />
              <RadioButton name="ride" value="Sometimes" />
              <RadioButton name="ride" value="Never" />
            </div>
          </span>
          <span>
            <p>Days of the week</p>
            <div className="inputs">
              <Checkbox value="Mon" name="days" />
              <Checkbox value="Tue" name="days" />
              <Checkbox value="Wed" name="days" />
              <Checkbox value="Thu" name="days" />
              <Checkbox value="Fri" name="days" />
              <Checkbox value="Sat" name="days" />
              <Checkbox value="Sun" name="days" />
            </div>
          </span>
        </div>
      </div>

      <div className="action-buttons">
        <button className="btn-primary">Save</button>
        <button>Discard</button>
      </div>
    </div>
  )
}

export default Form
