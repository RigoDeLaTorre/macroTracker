import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Results from './Results.js'

export default class UserSearch extends Component {
  constructor () {
    super()
    this.state = {
      username:'',
      workout:'nodisplay'
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
}

handleSubmit = (e) =>{
  if(e.key == 'Enter' || e.which==13){
    this.props.getApiData(this.state.username)
  }
}
render(){
  return(
    <section id="usersearch">
          <div className="group">
            <div className="input-group">
              <label>UserName:</label>
              <input type="text" placeholder="enter username" name="username" onChange={this.handleChange} onKeyPress={this.handleSubmit}/>
            </div>
            <div className="submit-button" onClick={()=>this.props.getApiData(this.state.username)}><img src ="./img/enter.svg" alt="get personal stats button" /></div>
          </div>
          <Results globalState={this.props.globalState}/>
    </section>
  )
}
}
