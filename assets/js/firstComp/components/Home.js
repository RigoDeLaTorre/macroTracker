import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () =>{
  return(
    <section id ="home-page">
      <h1>Welcome :) </h1>
        <h2>I got a lot of request for this, and I decided to build a web-app to save me some time from getting the data from MyFitnessPal everyday.</h2>
      <h2>If this is your first time, click  <NavLink to="/setup" activeClassName="selected">Here</NavLink> or the Setup Link above. <br />After your done with that, click <NavLink to="/search" activeClassName="selected">Here</NavLink> or the Search button above</h2>

    </section>
  )
}

export default Home;
