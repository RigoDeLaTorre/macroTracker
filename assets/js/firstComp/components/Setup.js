import React from 'react';
import { NavLink } from 'react-router-dom'

const Setup =()=>{

  return(
  <section id="instructions">
      <div className ="group-steps">
        <h1>Step 1</h1>
        <p>Login to your account on a desktop/laptop and click on Settings </p>
        <a href ="./img/step1.png"><img src = "./img/step1.png" alt ="myfitnesspal settings" /></a>
        <hr />
      </div>
    <div className ="group-steps">
      <h1>Step 2</h1>
      <p>Click on Diary Settings</p>
      <a href ="./img/step2.png"><img src = "./img/step2.png" alt ="myfitnesspal settings" /></a>
      <hr />
    </div>
    <div className ="group-steps">
      <h1>Step 3</h1>
      <p>Copy the nutrients tracked exactly in the order as shown in the picture.</p>
      <p>Scroll to the bottom under Diary Sharing and click on Public.</p>
      <p>Save Changes</p>
      <a href ="./img/step3.png"><img src = "./img/step3.png" alt ="myfitnesspal settings" /></a>
      <a href ="./img/step3b.png"><img src = "./img/step3b.png" alt ="myfitnesspal settings" /></a>
      <hr />
    </div>
        <div className="link">
          <NavLink to="/search" activeClassName="selected">All Done, Let me Try !</NavLink>
        </div>
    </section>
  )
}

export default Setup
