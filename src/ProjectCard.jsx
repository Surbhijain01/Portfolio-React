import React from 'react'

//const ProjectCard = ({obj}) => { //obj(Props) reusable component
const ProjectCard = ({obj,theme}) => { 
    return (
        
            <div>
        <div className="card" style={{width : "18rem" , height:"25rem" , overflow:"scroll" , marginBottom:"7%" ,  backgroundColor:theme=="light"?"white":"#0F0F0F" , color:theme=="light"?"#04364A":"white" }}>
                    <img className="card-img-top" style={{height:"50%"}} src={obj.imageLink} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{obj. projectTitle}</h5>
                        <p className="card-text">{obj.projectDes}</p>
                    </div>
                    
                    <div className="card-body">
                        <a href={obj.github} className="card-link">GitHub</a>
                        <a href={obj.projectLink} className="card-link">Project link</a>
                    </div>
                </div>
            </div>
       
    )
}

export default ProjectCard