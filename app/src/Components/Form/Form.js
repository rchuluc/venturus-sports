import React from 'react'
import './Form.scss'

const Form = () => {
  return (
    <div className="form">
      <div className="form-row">
        <div className="form-col">
          <span>
            <label for="Username">Username</label>
            <input type="text" id="Username" />
          </span>
          <span>
            <label for="Name">Name</label>
            <input type="text" id="Name" />
          </span>
          <span>
            <label for="Email">E-mail</label>
            <input type="email" id="Email" />
          </span>
        </div>
        <div className="form-col">
          <span>
            <label for="City">
              City<p>optional</p>
            </label>
            <input type="text" id="City" />
          </span>
          <span>
            <p>Ride in group?</p>
            <div>
              <input type="radio" name="ride" value="Always" /> Always
              <input type="radio" name="ride" value="Sometimes" /> Sometimes
              <input type="radio" name="ride" value="Never" /> Never
            </div>
          </span>
          <span>
            <p>Days of the week</p>
            <div id="daysOfWeek">
              <input type="checkbox" name="mon" value="Mon" />
              Mon
              <input type="checkbox" name="tue" value="Tue" />
              Tue
              <input type="checkbox" name="wed" value="Wed" />
              Wed
              <input type="checkbox" name="thu" value="Thu" />
              Thu
              <input type="checkbox" name="fri" value="Fri" />
              Fri
              <input type="checkbox" name="sat" value="Sat" />
              Sat
              <input type="checkbox" name="sun" value="Sun" />
              Sun
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
