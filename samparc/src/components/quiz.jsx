import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import quiz from './data/quizData/quiz.json'

import './CSS/quiz.css'
function Quiz(){
    const [selectedOptions, setSelectedOptions] = useState(Array(quiz.length).fill(''));
    const [questionNum,setQuestionNum] = useState(0);
    const [reamainingTime, setReamainingTime] = useState(180);
    const Navigate = useNavigate();
    const location = useLocation();

    const { contestName, contestCode,contestTime,contestEndTime } = location.state;
    const myState = useSelector((state)=>state.setUserNameMail)
    const [quizResponses,setQuizResponses] = useState([{
        name:myState.name,
        mail:myState.mail,
        time:new Date().toString(),
        timetaken:0,
        score:0
    }]);
    useEffect(() => {
        const timer = setTimeout(() => {
        if (reamainingTime > 0) {
            setReamainingTime((prevSeconds) => prevSeconds - 1);
        }
        if(reamainingTime === 0){
            handleSubmit();
        }
        }, 1000);
        return () => clearTimeout(timer);
    }, [reamainingTime]);
    const notifySucess = () => {toast.success('Quiz Submitted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        })};
    function handleOptionChange(event) {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[questionNum] = event.target.value;
        setSelectedOptions(updatedSelectedOptions);
    }
    
      function handlePrevious(event) {
        event.preventDefault();
        setQuestionNum(questionNum-1)
      }
      function handleLastPrevious(event) {
        event.preventDefault();
        setQuestionNum(quiz.length-2)
      }
      function showSubmit(){
        document.getElementsByClassName('question-block')[0].style.display = 'none'
        document.getElementsByClassName('submit-block')[0].style.display = 'flex'
      }
      function handleNext(event) {
        event.preventDefault();
        const response = {
          question: quiz[questionNum].question,
          selectedOption: selectedOptions[questionNum],
        };
        const updatedResponses = [...quizResponses];
        updatedResponses[questionNum+1] = response;
        setQuizResponses(updatedResponses);
    
        if (questionNum < quiz.length - 1) {
          setQuestionNum(questionNum + 1);
        } else {
          showSubmit();
        }
      }

      function calculateScore(){
        var score = 0;
        for(let i =0;i<quiz.length;i++){
            if(selectedOptions[i] === quiz[i].correct_option){
                score++;
            }
        }
        return score;
      }
      function calculateTime(time){
        var timedata = []

        time = 200 - time;
        var hour = parseInt(time/3600);
        var minute = (parseInt(time/60))%60;
        var seconds = time%60;

        timedata.push(minute);
        timedata.push(seconds)
        if(hour>0) timedata.push(hour);

        if(timedata.length === 3 && minute !==0) return hour+'h '+minute+'m '+ seconds+'s'
        else if(timedata.length === 3 && minute ===0) return hour+'h '+ seconds+'s'
        else if(minute !==0) return minute+'m '+seconds+'s'
        else return seconds+'s'
      }
      const handleSubmit = async (e) => {
        quizResponses[0].score = calculateScore(); 
        quizResponses[0].timetaken = calculateTime(reamainingTime);
        const registerationResponse = {
            email:myState.mail,
            contestName:contestName,
            contestCode:contestCode,
            time:new Date().toLocaleTimeString()
        }
        axios.post('https://samparc.onrender.com/addquizresponses', { quizResponses })
            .then(() => {
                notifySucess()
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Quiz submiited')
                
            });
        const response1 = await fetch('https://samparc.onrender.com/updateProfileGivenRegisteration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ registerationResponse }),
            });
        
            if (response1.ok) {
                setTimeout(()=>{
                    Navigate('/')
                },2000)
            const data1 = await response1.json();
            } else {
            throw new Error('Error submitting form for the first link'); 
            }
      }
    return(
        <section className="quiz">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
            <div className='question'>
                <div className='question-block'>
                    <img className='alarm-clock' src={require('./Assests/Images/icons/alarm.png')}></img>
                    <p className='time-remaining'>{Math.floor(reamainingTime/60)+':'+(reamainingTime%60)}</p>
                    <div className='question-number'>
                        <p className='question-number-text'>Question {quiz[questionNum].questionNumber} out of {quiz.length}</p>
                    </div>
                    <div className='question-box'>
                        <p className='question'>{quiz[questionNum].question}</p>
                    </div>
                    <form className="quiz-form" onSubmit={handleSubmit}>
                        <div className="options">
                        <div className="option-set">
                            <label className={`option ${selectedOptions[questionNum] === 'a' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                value="a"
                                checked={selectedOptions[questionNum] === 'a'}
                                onChange={handleOptionChange}
                                className="option-text"
                            />
                            {quiz[questionNum].Option_1}
                            </label>
                            <label className={`option ${selectedOptions[questionNum] === 'b' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                value="b"
                                checked={selectedOptions[questionNum] === 'b'}
                                onChange={handleOptionChange}
                                className="option-text"
                            />
                            {quiz[questionNum].Option_2}
                            </label>
                        </div>
                        <div className="option-set">
                            <label className={`option ${selectedOptions[questionNum] === 'c' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                value="c"
                                checked={selectedOptions[questionNum] === 'c'}
                                onChange={handleOptionChange}
                                className="option-text"
                            />
                            {quiz[questionNum].Option_3}
                            </label>
                            <label className={`option ${selectedOptions[questionNum] === 'd' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                value="d"
                                checked={selectedOptions[questionNum] === 'd'}
                                onChange={handleOptionChange}
                                className="option-text"
                            />
                            {quiz[questionNum].Option_4}
                            </label>
                        </div>
                        </div>
                    </form>
                    <div className='buttons'>
                        <div className={questionNum===0?'notvisible':'prev-next'} onClick={handlePrevious}><img src={require('./Assests/Images/icons/previous.png')}></img> Previous</div>
                        <div className='prev-next' onClick={handleNext}>Next<img src={require('./Assests/Images/icons/next.png')}></img></div>
                    </div>
                </div>
                <div className='question-block submit-block'>
                    <p className='time-remaining'>{Math.floor(reamainingTime/60)+':'+(reamainingTime%60)}</p>
                    <button className={questionNum===quiz.length-1?'quiz-submit':'notvisible'} onClick={handleSubmit} >Submit The Quiz</button>
                    {/* <div className={questionNum===0?'notvisible':'prev-next'} onClick={handleLastPrevious}><img src={require('./Assests/Images/icons/previous.png')}></img> Previous</div> */}
                </div>
            </div>
        </section>
    )
}
export default Quiz;