import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import Navigation from './components/Nav.js'
import UserSearch from './components/UserSearch.js'
import Setup from './components/Setup.js'
import Home from './components/Home.js'
import designData from './components/designData.js'
import Designs from './components/Designs.js'
// import Instructions from './components/Instructions.js'



class Layout extends Component {
  constructor () {
    super()

    this.state = {
      mystats:'',
      date:'',
      designs:designData,
      row1:'#cbc7c7',
      row2:'',
      color:'black',
      username:'',
      workout:'nodisplay',
      note:false
    }

  }

  componentWillMount(){
    let today = new Date();
const month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

let date = month[today.getMonth()]+ ' ' + today.getDate()  +', ' +today.getFullYear();

this.setState({
  date,
})
  }


  // 2 api calls, get macros and get start weight and date
getApiData = (username) =>{

    axios.get('/scrape', {
      params:{
        username
      }
    })
    .then((response) => {
      if(response.data.calories !== null && response.data.calories !== ""){
        this.setState({
          mystats:response.data
        },this.handleChange)
      }
    }).catch(function (error) {
      console.log(error);
    });

}
//Displays how many days into the diet as well as the Current Date
getWeightStartingPoint(){
  let today = new Date();
  const month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  let date = month[today.getMonth()]+ ' ' + today.getDate()  +', ' +today.getFullYear();

  this.setState({
    date,
  })
}


// Gets the values of the inputs for daily weight, yesterdays weight, and workout of the day

handleChange =()=>{

  //calculation to get net Carbs
  let netCarbs= parseInt(this.state.mystats.carbs-this.state.mystats.fiber);
  //calc to get the total calories for each macro
  let fatCalories = parseInt(this.state.mystats.fat)*9;
  let proteinCalories =  parseInt(this.state.mystats.protein)*4;
  let carbCalories = parseInt(this.state.mystats.carbs - this.state.mystats.fiber)*4
  let calories = parseInt(fatCalories+proteinCalories+carbCalories)

  //calc to get the % of each macro
  let fatPercentage = Math.round((fatCalories/calories)*100);
  let proteinPercentage = Math.round((proteinCalories/calories)*100);
  let carbPercentage = Math.round((carbCalories/calories)*100);

  this.setState({
  netCarbs,
  calories,
  fatPercentage,
  proteinPercentage,
  carbPercentage,
  note:true
})
setTimeout(() => {this.setState({note:false})
}, 2000)

}


handleWorkoutChange =(workout)=>{
  this.setState({
    workout:workout
})
}


//After a color is selected, state is updated with the hex color #
    handleChangeCompleteRow1 = (color) => {
          console.log('are you runing')
      this.setState({ row1: color });
    };
//After a color is selected, state is updated with the hex color #
    handleChangeCompleteRow2 = (color) => {

      this.setState({ row2: color });
    };

// handles the checkbox filters and displays or hides fields as specified
hideInfo = (e) =>{
  let name = e.target.name
  let value = e.target.checked
  this.setState(prevState => ({
      filteredCheckboxes: {
          ...prevState.filteredCheckboxes,
          [name]: value
      }
  }))
}

setDesign =(item)=>{
  this.setState({
    row1:item.row1,
    row2:item.row2,
    color:item.color
  })
}



  render () {
    const popoverLeft = {
      position: 'absolute',
      zIndex: '2',
      left:'0'

    }
    const popoverRight = {
      position: 'absolute',
      zIndex: '2',
      right:'0'
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
    return (
      <BrowserRouter>

      <div className='home'>
        <Navigation hideInfo ={this.hideInfo}
          handleChangeCompleteRow1={this.handleChangeCompleteRow1}
          handleChangeCompleteRow2={this.handleChangeCompleteRow2}
          handleWorkoutChange={this.handleWorkoutChange}
          globalState = {this.state}/>
          <Route
              path ='/search'
              render ={(props) =><UserSearch {...props}
              getApiData={this.getApiData}
              handleUser={this.handleUser}
              globalState={this.state}/>} />

          <Route path="/setup" component={Setup}/>
          <Route
              path ='/designs'
              render ={(props) =><Designs {...props}
              setDesign={this.setDesign}
              globalState={this.state}/>} />
          <Route exact path="/" component={Home}/>
     </div>
     </BrowserRouter>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
