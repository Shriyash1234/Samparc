import React from 'react'
import './CSS/Testseries.css'
const TestseriesInfo = () => {
  return (
    <section className='Testseries-info'>
        <img className='Testseries-info-image' src={require('./Assests/Images/icons/Testseries.jpg')}></img>
        <div className='testseriesinfo-div'>
            <p className='enroll-in-testeries'>Enroll in Test Series for various exams with</p>
            <p className='samparc-text'>Samparc</p>
            <p className='get-access-to'>Get access to the most updated Mock tests on Samparc</p>
            <p className='what-you-get'>What will you get</p>
            <div className='features-div'>
                <div className='feature-div'>
                    <img className='feature-img ranking-img' src={require('./Assests/Images/icons/rank.png')}></img>
                    <p>Ranking</p>
                </div>
                <div className='feature-div'>
                    <img className='feature-img analysis-img' src={require('./Assests/Images/icons/analysis.png')}></img>
                    <p>Analysis</p>
                </div>
                <div className='feature-div'>
                    <img className='feature-img exam-img' src={require('./Assests/Images/icons/exam-violet.png')}></img>
                    <p>Latest Exam patterns</p>
                </div>
                <div className='feature-div'>
                    <img className='feature-img prices-img' src={require('./Assests/Images/icons/prices.png')}></img>
                    <p>Affordable prices</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestseriesInfo
