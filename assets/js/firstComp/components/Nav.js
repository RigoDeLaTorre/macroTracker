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


  //Gets the value inputted on the form whenever it is changed and passes that value to the parent index.js which updates the state.
  handleUser = () => {
    let currentWeight = parseFloat(this.weight.value);
    let workoutOfTheDay = this.workoutOfTheDay.value;
    let username = this.username.value;

    this.props.handleUser(currentWeight, workoutOfTheDay, username)
}

//Toggles the Navigation either on or off
  toggleNav = () => {
    this.setState({
      nav: !this.state.nav
    })
  }

  // Submit button that triggers api call on Enter key.
  submit = (e) =>{
    if(e.key == 'Enter' || e.which==13){
      this.props.getApiData()
    }
  }
  render() {
    return (<nav>
      <div className="nav-container">
        <div className="nav-button" onClick={this.toggleNav}>
          <img src="./img/menu.svg"/>
          <span>Get Macros</span>
        </div>
        <div className="nav-button">
          <a href ="/instructions.html"><img src="./img/settings.svg"/>
          <span>Setup First !</span></a>
        </div>
      </div>

      <section className={this.state.nav == true
          ? 'nav-show'
          : 'nav-section'}>
        <div className="group-inputs userinfo">
        <div className="usergroup">
          <label>UserName:</label>
          <input type="text" placeholder="enter username" name="weight" ref={input => this.username = input} onChange={this.handleUser} onKeyPress={this.submit}/>
        </div>
        <div className="submit-button" onClick={this.props.getApiData}><img src ="./img/enter.svg" alt="get personal stats button" /></div>
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
              <option value="nodisplay">Do Not Display</option>
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
