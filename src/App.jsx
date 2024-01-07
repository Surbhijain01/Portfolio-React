import React,{useState} from 'react'
// import { useState } from 'react' //using hooks -->useState we use hooks because prop drilling
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Navbar from './Navbar'
import Project from './Project'
import { Routes,Route } from 'react-router-dom'


const App = () => {
  let [theme , setTheme ] = useState("light"); //using useState of hooks

  return (
    <>
    <Navbar themeObj ={{theme , setTheme}}></Navbar>      {/*  themeObj ={{theme,setTheme}}  Key value */}
    <Routes>
      <Route path='/' element={<Home theme={theme}></Home>}></Route>
      <Route path='/about' element={<About theme={theme}></About>}></Route>
      <Route path='/contact'element={<Contact theme={theme}></Contact>}></Route>
      <Route path='/project'element={<Project theme={theme}></Project>}></Route>   
    </Routes>
    </>
  )
}

export default App