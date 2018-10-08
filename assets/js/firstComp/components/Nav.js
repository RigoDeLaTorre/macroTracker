import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'
import ColorPicker from './ColorPicker.js'


export default class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      nav: false,


    }
  }
//Toggles the Navigation either on or off
  toggleNav = () => {
    this.setState({
      nav: !this.state.nav
    })
  }

  handleChange = (event) => {
      this.props.handleWorkoutChange(event.target.value)
    this.setState({
      [event.target.name]:event.target.value
    })
}
  render() {
    return (<nav>
      <div className="nav-container">
        <div className="nav-buttons">
            <a onClick={this.toggleNav}>Options</a>
            <NavLink to="/search" activeClassName="selected">Search</NavLink>
            <NavLink to="/setup" activeClassName="selected">Setup</NavLink>
        </div>
      </div>
      <section className={this.state.nav == true
          ? 'nav-show'
          : 'nav-section'}>
        <div className="colorContainer">
        <div className="group-inputs">
          <label>Workout:</label>
          <select value ={this.props.globalState.workout} name="workout" onChange={this.handleChange}>
            <option value="nodisplay">Do Not Display</option>
            <option value="Upperbody Gym">Upperbody Gym</option>
            <option value="Lowerbody Gym">Lowerbody Gym</option>
            <option value="Cardio">Cardio</option>
            <option value="Jog">Jog</option>
            <option value="Walk">Walk</option>
            <option value="HIIT">HIIT</option>
            <option value="Rest">Rest</option>
          </select>
        </div>
          <ColorPicker handleChangeCompleteRow1={this.props.handleChangeCompleteRow1} handleChangeCompleteRow2={this.props.handleChangeCompleteRow2} globalState={this.props.globalState}/>
        </div>
      </section>
    </nav>)
  }

}
