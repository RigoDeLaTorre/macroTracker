import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () =>{
  return(
    <section id ="home-page">
      <h1>Welcome :) </h1>
        <h2>I got a lot of request for this, and I decided to build a web-app to save me some time from getting the data from MyFitnessPal everyday.</h2>
  <hr />
      <h2>If this is your first time, click  <NavLink to="/setup" activeClassName="selected">Here</NavLink> or the Setup Link above. <br />After your done with that, click <NavLink to="/search" activeClassName="selected">Here</NavLink> or the Search button above</h2>
      <hr />
      <h1>Note</h1>
      <h3 style={{lineHeight:"1.4"}}>It will only grab the data for the same day. So...if its midnight, your profile will show the next day, which you will have zero data for.</h3>
    </section>
  )
}

export default Home;
