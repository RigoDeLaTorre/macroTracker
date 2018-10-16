import React from 'react'
import { Link } from 'react-router-dom'

const Designs = ({globalState, setDesign}) =>{


return (
  <section id="designs">
    <h1>Designs</h1>
    <h2>Choose any design</h2>
    <div className ="design-container">
      {globalState.designs.map((item, i)=>{
        return (
          <div className="design-group" key={i}>
          <Link to="/search" onClick={()=>setDesign(item)}>
            <h3 style={{background:item.row1}}>Calories:<span className="category"> {globalState.calories}</span></h3>
            <h3 style={{background:item.row2}}>Fat:<span className="category"> {globalState.mystats.fat}g /</span> <span className="percentage"> {globalState.fatPercentage} %</span></h3>
            <h3 style={{background:item.row1}}>Protein:<span className="category"> {globalState.mystats.protein}g /</span> <span className="percentage"> {globalState.proteinPercentage} %</span></h3>
            <h3 style={{background:item.row2}}>Net Carbs:<span className="category"> {globalState.netCarbs}g / </span> <span className="percentage">{globalState.carbPercentage} %</span></h3>
            <h3 style={{background:item.row1}}>Fiber:<span className="category"> {globalState.mystats.fiber}g</span></h3>
          </Link>
        </div>
  )
  })
}
</div>
  </section>)

  }




export default Designs;
