import React from 'react'
import './CSS/monthlyExams.css'
const MonthlyExams = () => {
  return (
    <div className='Monthly-tests'>
        <h1 className='monthly-test-heading'>Monthly Scholarship Tests</h1>
        <div className='tests'>
            <div className='tests-col-1'>
                <div className='monthly-test'>
                    <img className='exam-icon' src={require('./Assests/Images/icons/exam.png')}></img>
                    <div className='monthly-exam-name'>JEE Advanced</div>
                    <div className='questions-time'>
                        <div className='no-of-question'>30 Questions</div>
                        <div className='exam-time'>60 mins</div>
                    </div>
                    <button className='take-test'>Take Test</button>
                </div>
                <div className='monthly-test'>
                    <img className='exam-icon' src={require('./Assests/Images/icons/exam.png')}></img>
                    <div className='monthly-exam-name'>UPSC</div>
                    <div className='questions-time'>
                        <div className='no-of-question'>30 Questions</div>
                        <div className='exam-time'>60 mins</div>
                    </div>
                    <button className='take-test'>Take Test</button>
                </div>
                <div className='monthly-test'>
                    <img className='exam-icon' src={require('./Assests/Images/icons/exam.png')}></img>
                    <div className='monthly-exam-name'>SSC CGL</div>
                    <div className='questions-time'>
                        <div className='no-of-question'>30 Questions</div>
                        <div className='exam-time'>60 mins</div>
                    </div>
                    <button className='take-test'>Take Test</button>
                </div>
                <div className='monthly-test'>
                    <img className='exam-icon' src={require('./Assests/Images/icons/exam.png')}></img>
                    <div className='monthly-exam-name'>CAT</div>
                    <div className='questions-time'>
                        <div className='no-of-question'>30 Questions</div>
                        <div className='exam-time'>60 mins</div>
                    </div>
                    <button className='take-test'>Take Test</button>
                </div>
                <div className='monthly-test'>
                    <img className='exam-icon' src={require('./Assests/Images/icons/exam.png')}></img>
                    <div className='monthly-exam-name'>NEET</div>
                    <div className='questions-time'>
                        <div className='no-of-question'>30 Questions</div>
                        <div className='exam-time'>60 mins</div>
                    </div>
                    <button className='take-test'>Take Test</button>
                </div>
                <div className='monthly-test'>
                    <img className='exam-icon' src={require('./Assests/Images/icons/exam.png')}></img>
                    <div className='monthly-exam-name'>IBPS</div>
                    <div className='questions-time'>
                        <div className='no-of-question'>30 Questions</div>
                        <div className='exam-time'>60 mins</div>
                    </div>
                    <button className='take-test'>Take Test</button>
                </div>
                <div className='monthly-test'>
                    <img className='exam-icon' src={require('./Assests/Images/icons/exam.png')}></img>
                    <div className='monthly-exam-name'>Current Affairs</div>
                    <div className='questions-time'>
                        <div className='no-of-question'>30 Questions</div>
                        <div className='exam-time'>60 mins</div>
                    </div>
                    <button className='take-test'>Take Test</button>
                </div>
                <div className='monthly-test'>
                    <img className='exam-icon' src={require('./Assests/Images/icons/exam.png')}></img>
                    <div className='monthly-exam-name'>JEE Mains</div>
                    <div className='questions-time'>
                        <div className='no-of-question'>30 Questions</div>
                        <div className='exam-time'>60 mins</div>
                    </div>
                    <button className='take-test'>Take Test</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MonthlyExams
