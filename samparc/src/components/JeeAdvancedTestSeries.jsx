import React from 'react'
import Header from './header'
import './CSS/JeeAdvanced.css'
import {ChevronRight } from 'lucide-react'
const JeeAdvancedTestSeries = () => {
  return (
    <div className='TestSeries-page'>
      <Header/>
      <section className='testseries-section'>
        <div className='subject-name-div'>
            <p className='subject-name'>IIT JEE Advanced </p>
            <p className='study-material-subject'>Study Material <ChevronRight className='gretaerThan-icon'/> JEE Advanced</p>
        </div>
        <div className='options-material-tests'>
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle active-btn" type="button" data-toggle="dropdown">Study Material</button>
            <ul class="dropdown-menu">
                <li><a href="#">Physics</a></li>
                <li><a href="#">Chemistry</a></li>
                <li><a href="#">Maths</a></li>
            </ul>
        </div> 
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Tests</button>
            <ul class="dropdown-menu">
                <li><a href="#">Physics</a></li>
                <li><a href="#">Chemistry</a></li>
                <li><a href="#">Maths</a></li>
            </ul>
        </div> 
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Exam Info</button>
            <ul class="dropdown-menu">
                <li><a href="#">Important dates</a></li>
                <li><a href="#">Registeraion</a></li>
                <li><a href="#">Centers</a></li>
            </ul>
        </div>
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Syllabus</button>
            <ul class="dropdown-menu">
                <li><a href="#">Physics Syllabus</a></li>
                <li><a href="#">Chemistry Syllabus</a></li>
                <li><a href="#">Maths Syllabus</a></li>
            </ul>
        </div> 
        </div>
        <div className='study-material-info'>
            <div className='study-material-info-section'>
                <p className='study-material-info-heading'>IIT JEE Advanced | Updated Study Materials</p>
                <p className='study-material-info-text'>
                Students are required to study the content minutely to get all the information about the best books to refer for their JEE Advanced 2024. The syllabus of JEE Advanced 2023-24 has topics from Physics, Chemistry, and Mathematics. The free online study materials for JEE Advanced include all the important concepts, theorems, related derivations, and numerical from all three subjects. Apart from this, we will be providing a list of the names of the books of each subject of JEE Advanced 2023-24.
                </p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default JeeAdvancedTestSeries
