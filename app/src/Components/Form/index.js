import React, { PureComponent } from 'react'
import './Form.scss'
import Checkbox from '../Checkbox'
import RadioButton from '../RadioButton'
import { resetInput, clearForm } from '../../Utils/scripts'

export default class Form extends PureComponent {
  constructor() {
    super()
    this.state = {
      invalid: {}
    }
  }

  render() {
    return (
      <div className="form">
        <div className="form-row">
          <div className="form-col">
            <span>
              <label for="Username">Username</label>
              <input
                type="text"
                id="Username"
                onFocus={event => resetInput(event.target)}
              />
              <span>
                <p className="helpText">Enter a username</p>
              </span>
            </span>
            <span>
              <label for="Name">Name</label>
              <input
                type="text"
                id="Name"
                onFocus={event => resetInput(event.target)}
              />
              <span>
                <p className="helpText">Enter your name</p>
              </span>
            </span>
            <span>
              <label for="Email">E-mail</label>
              <input
                type="email"
                id="Email"
                onFocus={event => resetInput(event.target)}
              />
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
                <RadioButton name="ride" value="Always" reset={resetInput} />
                <RadioButton name="ride" value="Sometimes" reset={resetInput} />
                <RadioButton name="ride" value="Never" reset={resetInput} />
              </div>
            </span>
            <span>
              <p>Days of the week</p>
              <div className="inputs">
                <Checkbox value="Mon" name="days" reset={resetInput} />
                <Checkbox value="Tue" name="days" reset={resetInput} />
                <Checkbox value="Wed" name="days" reset={resetInput} />
                <Checkbox value="Thu" name="days" reset={resetInput} />
                <Checkbox value="Fri" name="days" reset={resetInput} />
                <Checkbox value="Sat" name="days" reset={resetInput} />
                <Checkbox value="Sun" name="days" reset={resetInput} />
              </div>
            </span>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn-primary" onClick={this.props.action}>
            Save
          </button>
          <button onClick={clearForm}>Discard</button>
        </div>
      </div>
    )
  }
}
