import React from 'react'

const Results = ({globalState}) =>{
  return(
    <section className="results">
      {/*Displays the Day and Workout */}
      <div className="top-section">
      <div className ="group-daily line-1">
         <h3>{globalState.date}</h3>
      </div>
        <div className ="group-daily line-2" style ={globalState.workout =='nodisplay' || globalState.workout == null ? {display:'none'} : {display:'block'}}>
          <h1 className="workout">Workout<span className="workout-detail">: {globalState.workout}</span></h1>
      </div>
      </div>

        {/*Shows the Macro calories and percentages */}
      <div className="stats">
        <h1 style={{background:globalState.row1,color:globalState.color}}>Calories:<span className="category"> {globalState.calories}</span></h1>
        <h1 style={{background:globalState.row2,color:globalState.color}}>Fat:<span className="category"> {globalState.mystats.fat}g /</span> <span className="percentage"> {globalState.fatPercentage} %</span></h1>
        <h1 style={{background:globalState.row1,color:globalState.color}}>Protein:<span className="category"> {globalState.mystats.protein}g /</span> <span className="percentage"> {globalState.proteinPercentage} %</span></h1>
        <h1 style={{background:globalState.row2,color:globalState.color}}>Net Carbs:<span className="category"> {globalState.netCarbs}g / </span> <span className="percentage">{globalState.carbPercentage} %</span></h1>
        <h1 style={{background:globalState.row1,color:globalState.color}}>Fiber:<span className="category"> {globalState.mystats.fiber}g</span></h1>
      </div>
    </section>
  )
}

export default Results;
