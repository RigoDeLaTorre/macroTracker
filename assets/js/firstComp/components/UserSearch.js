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
    this.username.blur()
    this.props.getApiData(this.state.username)
  }
}
render(){
  return(
    <section id="usersearch">
    <div id="note" className ={this.props.globalState.note ? 'noteDisplay' : 'noteHide'}>Success !.</div>
          <div className="group">
            <div className="input-group">
              <label>UserName:</label>
              <input type="text" placeholder="enter username" name="username"  id="username" ref={input =>this.username=input} onChange={this.handleChange} onKeyPress={this.handleSubmit}/>
            </div>
            <div className="submit-button" onClick={()=>this.props.getApiData(this.state.username)}><img src ="./img/enter.svg" alt="get personal stats button" /></div>
          </div>
          <Results globalState={this.props.globalState}/>
    </section>
  )
}
}
