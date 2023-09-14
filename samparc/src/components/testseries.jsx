import React from 'react'

const Testseries = () => {
  return (
    <section className='Testseries-section'>
      <p className='Testseries-heading'>Testseries</p>
      <div className='TestSeries-div'>
        <div className='testseries'>
          <img src={require('./Assests/Images/icons/exams/upsc.png')} className='testseries-info-img'></img>
          <p className='testseries-name'>UPSC Mock tests.</p>
          <hr></hr>
          <p className='Total-tests'>Total tests:30</p>
          <hr></hr>
          <ul>
            <li className='benfits-point'>Preparation Material</li>
            <li className='benfits-point'>Latest Exam patters</li>
            <li className='benfits-point'>10 Chapter Tests</li>
            <li className='benfits-point'>30 Full Tests</li>
          </ul>
          <div className='view-testseries'>View Test Series</div>
        </div>
        <div className='testseries'>
          <img src={require('./Assests/Images/icons/exams/jee.png')} className='testseries-info-img'></img>
            <p className='testseries-name'>JEE Advanced Mock tests.</p>
            <hr></hr>
            <p className='Total-tests'>Total tests:30</p>
            <hr></hr>
            <ul>
              <li className='benfits-point'>Preparation Material</li>
              <li className='benfits-point'>Latest Exam patters</li>
              <li className='benfits-point'>10 Chapter Tests</li>
              <li className='benfits-point'>30 Full Tests</li>
            </ul>
            <div className='view-testseries'>View Test Series</div>
        </div>
        <div className='testseries'>
          <img src={require('./Assests/Images/icons/exams/neet.png')} className='testseries-info-img'></img>
            <p className='testseries-name'>NEET Mock tests.</p>
            <hr></hr>
            <p className='Total-tests'>Total tests:30</p>
            <hr></hr>
            <ul>
              <li className='benfits-point'>Preparation Material</li>
              <li className='benfits-point'>Latest Exam patters</li>
              <li className='benfits-point'>10 Chapter Tests</li>
              <li className='benfits-point'>30 Full Tests</li>
            </ul>
            <div className='view-testseries'>View Test Series</div>
        </div>
        <div className='testseries'>
          <img src={require('./Assests/Images/icons/exams/cat.png')} className='testseries-info-img'></img>
            <p className='testseries-name'>CAT Mock tests.</p>
            <hr></hr>
            <p className='Total-tests'>Total tests:30</p>
            <hr></hr>
            <ul>
              <li className='benfits-point'>Preparation Material</li>
              <li className='benfits-point'>Latest Exam patters</li>
              <li className='benfits-point'>10 Chapter Tests</li>
              <li className='benfits-point'>30 Full Tests</li>
            </ul>
            <div className='view-testseries'>View Test Series</div>
        </div>
      </div>
    </section>
  )
}

export default Testseries
