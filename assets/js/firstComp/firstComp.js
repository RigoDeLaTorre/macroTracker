import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { SketchPicker, SliderPicker, ChromePicker } from 'react-color';
import axios from 'axios'

class Layout extends Component {
  constructor () {
    super()

    this.state = {
        mystats:'',
          weightInfo:'',
      date:'',
      currentNumberOfDays:'',

      row1:'gray',
      row2:'',
      displayColorPicker1: false,
      displayColorPicker2: false,
      hide:false,

    }

  }
componentWillMount(){
    axios.get('/scrape')
    .then((response) => {
      this.setState({
        mystats:response.data
      },this.handleChange)
    })

    .catch(function (error) {
      console.log(error);
    });

    axios.get('/weightInfo')
    .then((response) => {
      this.setState({
        weightInfo:response.data
      }, this.getWeightStartingPoint)
    })

    .catch(function (error) {
      console.log(error);
    });

}

getWeightStartingPoint(){
  console.log('did this run')
  let today = new Date();
  const month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  let date = month[today.getMonth()]+ ' ' + today.getDate()  +', ' +today.getFullYear();
  let date1 = new Date("6/4/2018");
  let date2 = new Date(date);
  let timeDiff = Math.abs(date2.getTime() - date1.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));


  this.setState({
    date,
    currentNumberOfDays:diffDays
  })
}

    toggleColorPicker = (e) => {

      if(e.target.innerHTML=='Color 1'){

          this.setState({ displayColorPicker1: !this.state.displayColorPicker1 })
      }else if(e.target.innerHTML=='Color 2'){

          this.setState({ displayColorPicker2: !this.state.displayColorPicker2 })
      }
    };

    closeColorPicker = (e) => {
      if(e.target.className=='buttonClose1'){
        this.setState({ displayColorPicker1: false })
      }else if(e.target.className=='buttonClose2'){
          this.setState({ displayColorPicker2: false })
        }
      }

    handleChangeCompleteRow1 = (color) => {

      this.setState({ row1: color.hex });
    };

    handleChangeCompleteRow2 = (color) => {

      this.setState({ row2: color.hex });
    };





handleChange =()=>{
  let yesterdayWeight = this.yesterdayWeight.value;
  let currentWeight =this.weight.value;
  let workoutOfTheDay=this.workoutOfTheDay.value;

  let weightlossFromYesterday = (yesterdayWeight-currentWeight).toFixed(1);
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
  currentWeight,
  currentWeightLoss,
  yesterdayWeight,
  weightlossFromYesterday,
  workoutOfTheDay,
  currentNumberOfDaysChecked:true,
  currentWeightChecked:true,
overallWeightLossChecked:true,
weightlossFromYestChecked:true,
currentDateChecked:true,
workoutChecked:true,
checked:true
  })

}

hideInfo = (e) =>{
console.log(e.target.value)
let name = e.target.name
let value = e.target.checked

this.setState({
  [name]:value
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
      <div className='home'>
        <div>
          <ul>
          <input type="checkbox" name="hide" value="hide" checked={this.state.hide} onChange={this.hideInfo}/>Hide Inputs for screenshot<br />
          <input type="checkbox" name="currentNumberOfDaysChecked" value="currentNumberOfDaysChecked" checked={this.state.currentNumberOfDaysChecked} onChange={this.hideInfo}/>Day<br />
          <input type="checkbox" name="currentWeightChecked" value="currentWeightChecked" checked={this.state.currentWeightChecked} onChange={this.hideInfo} />Current Weight<br />
          <input type="checkbox" name="overallWeightLossChecked" value="overallWeightLossChecked" checked={this.state.overallWeightLossChecked} onChange={this.hideInfo}/>Overall Weight Loss<br />
          <input type="checkbox" name="weightlossFromYestChecked" value="weightlossFromYestChecked" checked={this.state.weightlossFromYestChecked} onChange={this.hideInfo}/>WeightLoss From Yesterday<br />
          <input type="checkbox" name="currentDateChecked" value="currentDateChecked" checked={this.state.currentDateChecked} onChange={this.hideInfo}/>Date<br />
          <input type="checkbox" name="workoutChecked" value="workoutChecked" checked={this.state.workoutChecked} onChange={this.hideInfo}/>Workout<br />
          </ul>
        </div>
        <section className="info" style ={this.state.hide ? {visibility:'hidden'} : {visibility:'visible'}}>
        <div className ="inputGroup">
                    <label>Workout: </label>
                    <select ref={input =>this.workoutOfTheDay =input} onChange={this.handleChange}>
                      <option value="Upperbody Gym">Upperbody Gym</option>
                      <option value="Lowerbody Gym">Lowerbody Gym</option>
                      <option value="Cardio">Cardio</option>
                      <option value="Jog">Jog</option>
                      <option value="Rest">Rest</option>
                    </select>
          </div>
          <div className ="inputGroup">
            <label>Yest. Weight: </label>
            <input type ="number" name="yesterdayWeight" ref={input =>this.yesterdayWeight =input} onChange={this.handleChange}/>
          </div>

          <div className ="inputGroup">
            <label>Weight: </label>
            <input type ="number" name="weight" ref={input =>this.weight =input} onChange={this.handleChange}/>
          </div>


        </section>
        <div className="nav-section" style ={this.state.hide ? {visibility:'hidden'} : {visibility:'visible'}}>
            <div className="group">
               <button onClick={this.toggleColorPicker}>Color 1</button>
               { this.state.displayColorPicker1 ? <div  style={ popoverLeft }>
                 <div style={ cover } className="buttonClose1"
                 onClick={ this.closeColorPicker }/>
                 <SketchPicker
                  color={ this.state.row1 }
                  onChangeComplete={ this.handleChangeCompleteRow1 }
                />
               </div> : null }
             </div>
             <div className="group">
                <button onClick={ this.toggleColorPicker }>Color 2</button>
                { this.state.displayColorPicker2 ? <div style={ popoverRight }>
                  <div style={ cover } className="buttonClose2" onClick={ this.closeColorPicker }/>
                  <SketchPicker
                   color={ this.state.row2 }
                   onChangeComplete={ this.handleChangeCompleteRow2 }
                 />
                </div> : null }
              </div>
        </div>

          <div className="results">
            <div className="top-header">
              <div className ="group-daily">
                <h1 style ={this.state.currentNumberOfDaysChecked ? {display:'block'} : {display:'none'}}>Day {this.state.currentNumberOfDays} - </h1>
                <h1 style ={this.state.currentWeightChecked ? {display:'block'} : {display:'none'}}>Weight:{this.state.currentWeight} </h1>
                <h1 style ={this.state.overallWeightLossChecked ? {display:'block'} : {display:'none'}}><span> (-{this.state.currentWeightLoss} lb)</span></h1>
              </div>
              <div className ="group-daily" style ={this.state.weightlossFromYestChecked ? {display:'block'} : {display:'none'}}>
                  <span className={`dailyWeight: ${this.state.weightlossFromYesterday} > 0 ? 'dailyDown' : 'dailyUp'`}>
                   ({this.state.weightlossFromYesterday>0 ? '-' : ''}{(Math.sign(this.state.weightlossFromYesterday) == -1? '+': '' )} {Math.abs(this.state.weightlossFromYesterday)} lb) from yesterday</span>
              </div>
              <h3 style ={this.state.currentDateChecked ? {display:'block'} : {display:'none'}}>{this.state.date}</h3>
            </div>
              <h1 className="workout"  style ={this.state.workoutChecked ? {display:'block'} : {display:'none'}}>Workout:<span className="workout-detail"> {this.state.workoutOfTheDay}</span></h1>
            <div className="stats">
              <h1 style={{background:this.state.row1}}>Calories:<span className="category"> {this.state.calories}</span></h1>
              <h1 style={{background:this.state.row2}}>Fat:<span className="category"> {this.state.mystats.fat}g /</span> <span className="percentage"> {this.state.fatPercentage} %</span></h1>
              <h1 style={{background:this.state.row1}}>Protein:<span className="category"> {this.state.mystats.protein}g /</span> <span className="percentage"> {this.state.proteinPercentage} %</span></h1>
              <h1 style={{background:this.state.row2}}>Net Carbs:<span className="category"> {this.state.netCarbs}g / </span> <span className="percentage">{this.state.carbPercentage} %</span></h1>
              <h1 style={{background:this.state.row1}}>Fiber:<span className="category"> {this.state.mystats.fiber}g</span></h1>
            </div>
          </div>

  </div>


    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
