import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { SketchPicker, SliderPicker, ChromePicker } from 'react-color';
import axios from 'axios'

class Layout extends Component {
  constructor () {
    super()
    let today = new Date();

    const month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let date = month[today.getMonth()]+ ' ' + today.getDate()  +', ' +today.getFullYear();
    let date1 = new Date("6/4/2018");
    let date2 = new Date(date);
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    this.state = {
      date:date,
      startingWeight:211.6,
      currentNumberOfDays:diffDays,
      mystats:'',
      row1:'gray',
      row2:'',
      displayColorPicker1: false,
      displayColorPicker2: false,
      dayTest:date,
      hide:false
    }
  }
componentWillMount(){


    axios.get('/scrape')
    .then((response) => {
      this.setState({
        mystats:response.data
      }, this.handleChange)
    })
    .catch(function (error) {
      console.log(error);
    });

}





    toggleColorPicker1 = () => {
      this.setState({ displayColorPicker1: !this.state.displayColorPicker1 })
    };
    toggleColorPicker2 = () => {
      this.setState({ displayColorPicker2: !this.state.displayColorPicker2 })
    };
    closeColorPicker1 = () => {
      this.setState({ displayColorPicker1: false })
    };
    closeColorPicker2 = () => {
      this.setState({ displayColorPicker2: false })
    };

    handleChangeCompleteRow1 = (color) => {

      this.setState({ row1: color.hex });
    };

    handleChangeCompleteRow2 = (color) => {

      this.setState({ row2: color.hex });
    };





handleChange =()=>{

  let fat = parseInt(this.state.mystats.fat);
  let protein = parseInt(this.state.mystats.protein);
  let carbs = parseInt(this.state.mystats.carbs);
  let fiber = parseInt(this.state.mystats.fiber);

  let yesterdayWeight = this.yesterdayWeight.value;
  let currentWeight =this.weight.value;
  let workoutOfTheDay=this.workoutOfTheDay.value;



  let weightlossFromYesterday = (yesterdayWeight-currentWeight).toFixed(1);
  let currentWeightLoss=this.state.startingWeight-currentWeight;
  currentWeightLoss = parseFloat(Math.round(currentWeightLoss * 100) / 100).toFixed(1);


  //calculation to get net Carbs
  let netCarbs= parseInt(carbs-fiber);
  //calc to get the total calories for each macro
  let fatCalories = fat*9;
  let proteinCalories = protein*4;
  let carbCalories = netCarbs*4

  //calc to get net total overall calories
  let calories = parseInt(fatCalories+proteinCalories+carbCalories)

  //
  let fatPercentage = Math.round((fatCalories/calories)*100);
  let proteinPercentage = Math.round((proteinCalories/calories)*100);
  let carbPercentage = Math.round((carbCalories/calories)*100);


  this.setState({
  fat,
  protein,
  carbs,
  netCarbs,
  fiber,
  calories,
  fatPercentage,
  proteinPercentage,
  carbPercentage,
  currentWeight,
  currentWeightLoss,
  yesterdayWeight,
  weightlossFromYesterday,
  workoutOfTheDay


  })

}

hideInfo = () =>{
  this.setState({
    hide:!this.state.hide
  })
}

  render () {

    const popover = {
      position: 'absolute',
      zIndex: '2',
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
        <button onClick={ this.hideInfo }>Hide</button>
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
               <button onClick={ this.toggleColorPicker1 }>Color 1</button>
               { this.state.displayColorPicker1 ? <div style={ popover }>
                 <div style={ cover } onClick={ this.closeColorPicker1 }/>
                 <SketchPicker
                  color={ this.state.row1 }
                  onChangeComplete={ this.handleChangeCompleteRow1 }
                />
               </div> : null }
             </div>
             <div className="group">
                <button onClick={ this.toggleColorPicker2 }>Color 2</button>
                { this.state.displayColorPicker2 ? <div style={ popover }>
                  <div style={ cover } onClick={ this.closeColorPicker2 }/>
                  <SketchPicker
                   color={ this.state.row2 }
                   onChangeComplete={ this.handleChangeCompleteRow2 }
                 />
                </div> : null }
              </div>
        </div>


          <div className="results">
            <div className="top-header">
              <h1>Day {this.state.currentNumberOfDays} - Weight:{this.state.currentWeight}<span> (-{this.state.currentWeightLoss} lb)</span></h1>
              <h3>
              <span className={`{dailyWeight: ${this.state.weightlossFromYesterday>0 ? 'dailyDown' : 'dailyUp'}`}> ({this.state.weightlossFromYesterday>0 ? '-' : ''}</span>
              {(Math.sign(this.state.weightlossFromYesterday) == -1? '+': '' )}
               {Math.abs(this.state.weightlossFromYesterday)} lb) from yesterday
               </h3>
              <h3>{this.state.date}</h3>
            </div>
              <h1 className="workout">Workout:<span className="workout-detail"> {this.state.workoutOfTheDay}</span></h1>
            <div className="stats">
              <h1 style={{background:this.state.row1}}>Calories:<span className="category"> {this.state.mystats.calories}</span></h1>
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
