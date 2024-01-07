import React from 'react'
import ProjectCard from './ProjectCard'
import projectArray from '../public/projectInfo.js';
import { v4 as uuidv4 } from 'uuid'; //uuid npm package


const Project = ({theme}) => { //hooks {theme} 
  return (
    <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap",marginTop:"1%", backgroundColor:theme=="light"? "#176B87":"black", minHeight:"100vh" }}>
      {/* <ProjectCard obj={projectArray[0]}></ProjectCard> */}
      {
        projectArray.map((detailsObj)=>{
          
          //using props , map use for itrate the array projectArray.map((detailsObj,idx)=>{ 
          // return <ProjectCard key={idx} obj={detailsObj}></ProjectCard> // we have to avoid using idx as unique id

          return <ProjectCard theme={theme} key = {uuidv4()} obj={detailsObj}></ProjectCard>
        })
      }
       
    </div>
  )
}

export default Project