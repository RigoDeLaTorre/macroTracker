
import React from 'react'

const Results = ({ globalState}) => {
return(
  <div className="results">
    {/*Displays the Day, weight, change of weight */}
    <div className="top-section">
    <div className ="group-daily line-1">
       <h3>{globalState.date}</h3>
    </div>
      <div className ="group-daily line-2">
        <h1>Day {globalState.currentNumberOfDays} - </h1>
        <h1>Weight:{globalState.currentWeight} </h1>
        <h1>(-{globalState.currentWeightLoss} lb)</h1>
      </div>


      <div className ="group-daily line-3">
      <h1 className="workout">Workout<span className="workout-detail">: {globalState.workoutOfTheDay}</span></h1>
    </div>
    </div>

      {/*Shows the Macro calories and percentages */}
    <div className="stats">
      <h1 style={{background:globalState.row1}}>Calories:<span className="category"> {globalState.calories}</span></h1>
      <h1 style={{background:globalState.row2}}>Fat:<span className="category"> {globalState.mystats.fat}g /</span> <span className="percentage"> {globalState.fatPercentage} %</span></h1>
      <h1 style={{background:globalState.row1}}>Protein:<span className="category"> {globalState.mystats.protein}g /</span> <span className="percentage"> {globalState.proteinPercentage} %</span></h1>
      <h1 style={{background:globalState.row2}}>Net Carbs:<span className="category"> {globalState.netCarbs}g / </span> <span className="percentage">{globalState.carbPercentage} %</span></h1>
      <h1 style={{background:globalState.row1}}>Fiber:<span className="category"> {globalState.mystats.fiber}g</span></h1>
    </div>
  </div>
)


}

export default Results;
