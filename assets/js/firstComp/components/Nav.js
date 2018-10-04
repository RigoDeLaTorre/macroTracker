import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ColorPicker from './ColorPicker.js'

export default class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      nav: false
    }
  }

  //   handleChange = () => {
  //   let currentWeight = this.weight.value;
  //   let workoutOfTheDay = this.workoutOfTheDay.value;
  //     let username = this.username.value;
  //   this.props.handleChange(currentWeight, workoutOfTheDay, username)
  // }
  handleUser = () => {
  let currentWeight = this.weight.value;
  let workoutOfTheDay = this.workoutOfTheDay.value;
    let username = this.username.value;
  this.props.handleUser(currentWeight, workoutOfTheDay, username)
}


  toggleNav = () => {
    console.log(this.state.nav)
    this.setState({
      nav: !this.state.nav
    })
  }
  render() {
    return (<nav>
      <div className="nav-button" onClick={this.props.getApiData}>Get My Stats</div>
      <div className="nav-button" onClick={this.toggleNav}><img src="./img/menu.svg"/></div>
      <section className={this.state.nav == true
          ? 'nav-show'
          : 'nav-section'}>
        <div className="group-inputs">
        <label>UserName:</label>
        <input type="text" name="weight" ref={input => this.username = input} onChange={this.handleUser}/>
        </div>
        <div className="input-section">
          <div className="group-inputs">
            <label>Workout:</label>
            <select value ={this.props.globalState.workoutOfTheDay} ref={input => this.workoutOfTheDay = input} onChange={this.handleUser}>
              <option value="Upperbody Gym">Upperbody Gym</option>
              <option value="Lowerbody Gym">Lowerbody Gym</option>
              <option value="Cardio">Cardio</option>
              <option value="Jog">Jog</option>
              <option value="Walk">Walk</option>
              <option value="HIIT">HIIT</option>
              <option value="Rest">Rest</option>
            </select>
          </div>
          <div className="group-inputs">
            <label>Weight:</label>
            <input type="number" name="weight" ref={input => this.weight = input} onChange={this.handleUser}/>
          </div>
        </div>
        <div className="colorContainer">
          <ColorPicker handleChangeCompleteRow1={this.props.handleChangeCompleteRow1} handleChangeCompleteRow2={this.props.handleChangeCompleteRow2} globalState={this.props.globalState}/>
        </div>
      </section>
    </nav>)
  }

}
