import React, { useEffect, useRef, useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import AnimationWrapper from './AnimationWrapper';
import { useSelector } from 'react-redux';
import './CSS/dailyContests.css'
function DailyContests(){
    const [remainingTime, setRemainingTime] = useState(findremainingTime());

    useEffect(() => {
        const timer = setInterval(() => {
          setRemainingTime(findremainingTime());
        }, 1000);
    
        return () => {
          clearInterval(timer);
          window.scrollTo(0, 0)
        };
      }, []);
    const myState = useSelector((state)=>state.setUserNameMail)  
    function findremainingTime(){
        var currentTime = new Date();
        var targetTime = new Date();
        targetTime.setHours(23, 0, 0); 
        var remainingTime = targetTime - currentTime;
        var hours = Math.floor(remainingTime / (1000 * 60 * 60));
        var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        if(hours<1)
        {
            let str = minutes.toString()+'m '+ seconds.toString()+'s';
            return str;
        }
        else
        {
            let str = hours.toString()+'h' + minutes.toString()+'m' ;
            return str;
        }
        
        
    }
    
    return(
        <AnimationWrapper>
        <section className="Daily-contests">
            <div className='Daily-contents-rectangle'>
                <h2 className='Daily-contests-heading'>Daily Public Contests</h2>
                <h3 className='Daily-contests-heading'>Join and win rewards and check your knowledge.</h3>
            </div>
            <div className='rectangles'>
                <div className='Contest'>
                    <p className='contest-name'>JEE Advanced</p>
                    <div className='contest-content'>
                        <div className='contest-image-div'>
                            <img className='contest-image' src={require('./Assests/Images/icons/exams/jee.png')}/>
                        </div>
                        <div className='contest-details'>
                            <p className='time-remaining'>{remainingTime}</p>
                            <p className='time'>8:00 PM</p>
                            <p className='Duration'>Duration: 40 min</p>
                            <p className='No-Q'>No. of Questions:20</p>
                            <p className='Fee'>Fee:100rs</p>
                            <Link to='/RegisterQuiz' state={{contestName:"JEE Advanced",contestCode:"1J",contestTime:"11:00:00 PM",contestEndingTime:"12:00:00 PM"}} className='contest-link-button'><button className='contest-register'>Register</button></Link>
                        </div>
                    </div>
                </div>
                <div className='Contest'>
                    <p className='contest-name'>UPSC</p>
                    <div className='contest-content'>
                        <div className='contest-image-div'>
                            <img className='contest-image' src={require('./Assests/Images/icons/exams/upsc.png')}/>
                        </div>
                        <div className='contest-details'>
                            <p className='time-remaining'>{remainingTime}</p>
                            <p className='time'>8:00 PM</p>
                            <p className='Duration'>Duration: 30 min</p>
                            <p className='No-Q'>No. of Questions:30</p>
                            <p className='Fee'>Fee:100rs</p>
                            <Link to='/RegisterQuiz' state={{contestName:"UPSC",contestCode:"1U",contestTime:"2:30:00 PM",contestEndingTime:"3:30:00 PM"}} className='contest-link-button'><button className='contest-register'>Register</button></Link>
                        </div>
                    </div>
                </div>
                <div className='Contest'>
                    <p className='contest-name'>SSC CGL</p>
                    <div className='contest-content'>
                        <div className='contest-image-div'>
                            <img className='contest-image' src={require('./Assests/Images/icons/exams/ssc.png')}/>
                        </div>
                        <div className='contest-details'>
                            <p className='time-remaining'>{remainingTime}</p>
                            <p className='time'>8:00 PM</p>
                            <p className='Duration'>Duration: 60 min</p>
                            <p className='No-Q'>No. of Questions:60</p>
                            <p className='Fee'>Fee:100rs</p>
                            <Link to='/RegisterQuiz' state={{contestName:"SSC",contestCode:"1S",contestTime:"8:00:00 PM"}} className='contest-link-button'><button className='contest-register'>Register</button></Link>
                        </div>
                    </div>
                </div>
                <div className='Contest'>
                    <p className='contest-name'>CAT</p>
                    <div className='contest-content'>
                        <div className='contest-image-div'>
                            <img className='contest-image' src={require('./Assests/Images/icons/exams/cat.png')}/>
                        </div>
                        <div className='contest-details'>
                            <p className='time-remaining'>{remainingTime}</p>
                            <p className='time'>9:00 PM</p>
                            <p className='Duration'>Duration: 120 min</p>
                            <p className='No-Q'>No. of Questions:120</p>
                            <p className='Fee'>Fee:200rs</p>
                            <Link to='/RegisterQuiz' state={{contestName:"CAT",contestCode:"1C",contestTime:"8:00:00 PM"}} className='contest-link-button'><button className='contest-register'>Register</button></Link>
                        </div>
                    </div>
                </div>
                <div className='Contest'>
                    <p className='contest-name'>Current Affairs</p>
                    <div className='contest-content'>
                        <div className='contest-image-div'>
                            <img className='contest-image' src={require('./Assests/Images/icons/exams/current-affairs.png')}/>
                        </div>
                        <div className='contest-details'>
                            <p className='time-remaining'>{remainingTime}</p>
                            <p className='time'>9:00 PM</p>
                            <p className='Duration'>Duration: 120 min</p>
                            <p className='No-Q'>No. of Questions:120</p>
                            <p className='Fee'>Fee:200rs</p>
                            <Link to='/RegisterQuiz' state={{contestName:"Current Affairs",contestCode:"1CA",contestTime:"8:00:00 PM"}} className='contest-link-button'><button className='contest-register'>Register</button></Link>
                        </div>
                    </div>
                </div>
            </div>
           <Link to='/leaderboard'><div className='check-leaderboard'>Check Leaderboard</div></Link>
        </section>
        </AnimationWrapper>
    )
}
export default DailyContests
