import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Navigation from './components/Nav.js'
import Results from './components/Results.js'
// import Instructions from './components/Instructions.js'



class Layout extends Component {
  constructor () {
    super()

    this.state = {
      mystats:'',
      weightInfo:'',
      date:'',
      currentNumberOfDays:'',
      row1:'#cbc7c7',
      row2:'',
      username:''

    }

  }

  // 2 api calls, get macros and get start weight and date
getApiData = () =>{
   let username=this.state.username
    axios.get('/scrape', {
      params:{
        username
      }
    })
    .then((response) => {
      this.setState({
        mystats:response.data
      },this.handleChange)
    })

    .catch(function (error) {
      console.log(error);
    });

    axios.get('/weightInfo', {
      params:{
        username
      }
    })
    .then((response) => {
      this.setState({
        weightInfo:response.data
      }, this.getWeightStartingPoint)
    })

    .catch(function (error) {
      console.log(error);
    });

}
//Displays how many days into the diet as well as the Current Date
getWeightStartingPoint(){
  console.log('did this run')
  let today = new Date();
  const month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  let date = month[today.getMonth()]+ ' ' + today.getDate()  +', ' +today.getFullYear();
  let date1 = new Date("6/5/2018");
  let date2 = new Date(date);
  let timeDiff = Math.abs(date2.getTime() - date1.getTime() +1);
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  this.setState({
    date,
    currentNumberOfDays:diffDays
  })
}


// Gets the values of the inputs for daily weight, yesterdays weight, and workout of the day
handleChange =(currentWeight, workoutOfTheDay, username)=>{
  let currentWeightLoss=this.state.weightInfo.startingWeight-currentWeight;
  currentWeightLoss = parseFloat(Math.round(currentWeightLoss * 100) / 100).toFixed(1);
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
})
}

handleUser =(currentWeight, workoutOfTheDay, username)=>{
  let currentWeightLoss= currentWeight- this.state.weightInfo.startingWeight;
  currentWeightLoss = parseFloat(Math.round(currentWeightLoss * 100) / 100).toFixed(1);

  this.setState({
  currentWeight,
  currentWeightLoss,
  workoutOfTheDay,
  username

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
      <div className='home'>
        <Navigation getApiData={this.getApiData} hideInfo ={this.hideInfo} handleUser={this.handleUser} handleChangeCompleteRow1={this.handleChangeCompleteRow1} handleChangeCompleteRow2={this.handleChangeCompleteRow2}  globalState = {this.state}/>
        <Results globalState = {this.state} />
     </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
