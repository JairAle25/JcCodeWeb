import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../header/header'
import Hero from '../hero/hero'
import About from '../about/about'
import estudianteFoto from "../../imgs/estudiante.jpg"
import Slider from '../slider/slider'
import CourseList from '../course list/courseList'
import ContactMe from '../contact me/contactMe'
import './main.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <Hero></Hero>
    <div className='contentAbout'>
      <div className='aboutComponent'>
        <About></About>
      </div>
      <div  className='estudianteAbout'>
        <img src={estudianteFoto} alt="Persona en la computadora"/>
      </div>
    </div>
    <Slider></Slider>
    <CourseList></CourseList>
    <ContactMe></ContactMe>
  </React.StrictMode>,
)
