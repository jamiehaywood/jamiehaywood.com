import React from 'react'
import './body.css'

interface props {}

const Body:React.FC<props> = (props) => {
  return (
    <div className="container">Hi, my name is Jamie.
<p/>
    I'm a software developer at&nbsp;<a className="tfl" href="https://tfl.gov.uk">Transport for London</a> and an Anthropology graduate from <a className="durham" href="https://www.dur.ac.uk">Durham University.</a>
    <p/>

    I believe the value of technology comes from the people who use it. 
    
    As such, a human-centric approach needs to be applied to what is increasingly becoming an array of complex and impersonal technologies. With this in mind, I want to apply my anthropological background to software development to build products that adopt this approach and have a lasting impact on how we interact with the world.
    <p />
    I love experimenting with new technologies and implementing them into my working environment. I like creating digital and analogue systems to streamline my workflow to achieve maximum productivity.
    <p/>
    When I'm not developing software, I enjoy sailing, cooking, playing backgammon, and the piano.
    </div>
   )
 }

export default Body