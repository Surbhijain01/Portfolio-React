import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
const Home = ({theme}) => {  // {theme} using hooks or props

  // let darkImage = "url(../src/Images/darkImg.jpeg)";
  // let lightImage = "url(../src/Images/bgImg.jpeg)";
  
  return (

    // <div className='mainContainer' style={{backgroundImage:theme=="light"?lightImage:darkImage , color:theme=="light"?"black":"white"}}>
      <div className='mainContainer' style={{backgroundColor:theme=="light"?"#1B4242": "#191919" , color:theme=="light"?"black":"white"}}>
		  <div className="container home-page">
			<span className="tags top-tags"> &lt;html&gt;<br/> &nbsp;&nbsp;&nbsp;&lt;body&gt; </span>
			<div className="text-zone">
				<h1 aria-label=" Hi, I’m ulamabbas,web developer." className="blast-root">
					Hello, <br/> I'm 
					Surbhi, 
          <br/>
					web developer.
				</h1>
				<h2>Front End Developer / React </h2>
				<Link rel="contact" to="/contact" className="flat-button" style={{opacity: "1"}}>CONTACT ME</Link>
			</div>
			<span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br/> &lt;/html&gt; </span>
		</div>

</div>
   

  )
}

export default Home