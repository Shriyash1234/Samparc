import React from 'react'
import Header from './header'
import { useSelector } from 'react-redux'
import { Smartphone } from 'lucide-react';
import './CSS/TestSeriesRegistrationWinodw.css'

const TestSeriesRegisterationWinodw = () => {
  const myState = useSelector((state)=>state.setUserNameMail)
  const userName = myState.name?myState.name:''
  return (
    <section className='testSeriesRegistrationWinodw'>
      <Header />
      <div className='testSeriesregistration-window'>
        <div className='testSeriesregistration-name-img'>
          <img className='testSeriesregistration-img' src={require('./Assests/Images/icons/exams/jee.png')}></img>
          <p className='testSeriesregistration-testName'>&nbsp;&nbsp;&nbsp;JEE Advanced 2024 Mock Tests</p>
        </div>
        <div className='testSeriesregistration-series-window'>
          <div className='testSeriesregistration-series-info-div'>
            <div className='testSeriesregistration-series-info'>
              <p className='series-info'>40 Total Tests</p>
              <p className='series-info'>|</p>
              <p className='series-info'>10 Chapter Tests</p>
              <p className='series-info'>|</p>
              <p className='preparation-material'>Preparation Material</p>
            </div>
            <hr className='horizontal-line'/>
            <div className='testSeriesregistration-series-info'>
              <ul>
                <li className='series-info'>25 Full Tests</li>
                <li className='series-info'>10 Previous Year Tests</li>
              </ul>
              <ul>
                <li className='series-info'>30 Sectional Tests</li>
                <li className='series-info'>Material for each subject</li>
              </ul>
              <ul>
                <li className='series-info'>JEE main Tests</li>
              </ul>
            </div>
            <div className='testSeriesregistration-series-but'>
              <div className='Continue-button add-this-testseries'>Add This Test Series</div>
            </div>
          </div>
          <div className='testSeriesregistration-signup'>
            <p className='sign-up-text'>Sign up To Test Your Exam Knowledge Now!</p>
            <div className='Enter-mobile-no-div'>
              <div className='testSeriesregistration-input-field'>
                <Smartphone /><input className='mobile-input' placeholder=' &nbsp; &nbsp;Enter Your Mobile Number'/>
              </div>
              <div className='Continue-button sign-up-take-series'>Sign up & Take Tests</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestSeriesRegisterationWinodw
