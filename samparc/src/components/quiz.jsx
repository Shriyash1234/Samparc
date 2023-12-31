import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WineOff, X } from 'lucide-react';
import { AlignJustify } from 'lucide-react';
import quiz from './data/quizData/quiz.json'

import './CSS/quiz.css'
function Quiz(){
    const [selectedOptions, setSelectedOptions] = useState(Array(quiz.length).fill(''));
    const [noOfSolvedQuestion,setnoOfSolvedQuestions]= useState(0);
    const [questionNum,setQuestionNum] = useState(0);
    const location = useLocation();
    const { contestName, contestCode,contestTime,contestEndTime } = location.state;
    const [remainingTime, setRemainingTime] = useState(findremainingTime(contestEndTime));
    const [Navigationbar,setNavigationbar] = useState(true);
    const Navigate = useNavigate();

    
    const myState = useSelector((state)=>state.setUserNameMail)
    //Second one is for storing the quiz responses
    const [quizResponses,setQuizResponses] = useState([
    {
        name:myState.name,
        mail:myState.mail,
        time:new Date().toString(),
        contestCode:contestCode,
        timetaken:'00:00:00',
        score:0
    },
    ...Array.from({ length: quiz.length }, () => ({ 
        question: '',
        selectedOption: null,
      })),
   ]);
   //SUbmitting the quiz after time has passed
    useEffect(() => {
        const timer = setInterval(() => {
            const timeRemaining = findremainingTime(contestEndTime);
            setRemainingTime(timeRemaining);
        if( findremainingTime(contestEndTime) === '00:00:00'){
            handleSubmit();
            clearInterval(timer);
        }
        }, 1000);
        return () => clearInterval(timer);
    }, [contestEndTime]);
    const notifySucess = () => {toast.success('Quiz Submitted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        })};
    // Change the options ans also store the response
    function handleOptionChange(event) {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[questionNum] = event.target.value;
        setSelectedOptions(updatedSelectedOptions);
        const response = {
            question: quiz[questionNum].question,
            selectedOption: event.target.value,
          };
          const updatedResponses = [...quizResponses];
          updatedResponses[questionNum+1] = response;
          console.log(updatedResponses)
          setQuizResponses(updatedResponses);
    }
    // Goes to the previous question
    function handlePrevious(event) {
        event.preventDefault();
        setQuestionNum(questionNum-1)
    }
    // To show the submit option
    function showSubmit(){
        document.getElementsByClassName('question-block')[0].style.display = 'none'
        document.getElementsByClassName('submit-block')[0].style.display = 'flex'
    }
    // FOe going to next question
    function handleNext(event) {
        event.preventDefault();
        if (questionNum < quiz.length - 1) {
            setQuestionNum(questionNum + 1);
        } else {
            showSubmit();
        }
    }

    //Calculating scores. Checks responses from quiz
    function calculateScore(){
        var score = 0;
        for(let i =0;i<quiz.length;i++){
            if(selectedOptions[i] === quiz[i].correct_option){
                score++;
            }
        }
        return score;
    }

    // Calulates remaining time based on the endtime of the contest. Time is is format of 1:00:00 PM.
    function findremainingTime(endTime){
        const currentTime = new Date();
        const targetTimeParts = endTime.split(' '); 
        const targetTime = new Date();
        
        const timeParts = targetTimeParts[0].split(':');
        let hours = parseInt(timeParts[0]);
        const minutes = parseInt(timeParts[1]);
        const seconds = parseInt(timeParts[2]);
        
        if (targetTimeParts[1].toUpperCase() === 'PM') {
            hours += 12;
        }

        targetTime.setHours(hours, minutes, seconds);

        const remainingTime = targetTime - currentTime;
        if (remainingTime <= 0) {
            return "Submitting the Contest";
        }

        const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        const str = remainingHours.toString().padStart(2, '0') + ':' + remainingMinutes.toString().padStart(2, '0') + ':' + remainingSeconds.toString().padStart(2, '0');
        return str;
    }
    //Calculating no. of solved questions
    function numberOfSolveQuestions(){
        let num = 0;
        for(let i =0;i<selectedOptions.length;i++){
            if(selectedOptions[i] !== ''){
                num++;
            }
        }
        setnoOfSolvedQuestions(num);
    }
    useEffect(()=>{
        numberOfSolveQuestions();
    },[selectedOptions])
    //Function for navigating to the question.Sets questionNum.
    //If ths screen size is less it removes navigation bar after selecting a question.
    function NavigateToQuestion(queNum){
        const questionBlockDisplay= document.getElementsByClassName('question-block')[0];
        const submitBlockDisplay= document.getElementsByClassName('submit-block')[0];
        if(questionBlockDisplay.style.display === 'none'){
            questionBlockDisplay.style.display = 'block'
            submitBlockDisplay.style.display = 'none'
        }
        setQuestionNum(queNum-1);
        if(window.innerWidth<479){
            if(Navigationbar){
                document.getElementsByClassName('quiz-navigation-bar')[0].style.marginLeft = '-70%'
                document.getElementsByClassName('quiz-navigation-bar')[0].style.zIndex = '5'
                document.getElementsByClassName('question-block')[0].style.marginLeft = '0px'
                document.getElementsByClassName('align-justify')[0].style.zIndex= '1'
                setNavigationbar(false)
            }
        }
        else if (window.innerWidth<991){
            if(Navigationbar){
                document.getElementsByClassName('quiz-navigation-bar')[0].style.marginLeft = '-50%'
                document.getElementsByClassName('quiz-navigation-bar')[0].style.zIndex = '5'
                document.getElementsByClassName('question-block')[0].style.marginLeft = '0px'
                document.getElementsByClassName('align-justify')[0].style.zIndex= '1'
                setNavigationbar(false)
            }
        }
    }
    // Handling Navigation bar for various screen sizes
    // If the screen size becomes less then navigation bar goes to left.
    // The z-indez of the align-justify becomes greater.
    function toggleNavigationbar(){
        if(window.innerWidth>991){
            if(Navigationbar){
                document.getElementsByClassName('quiz-navigation-bar')[0].style.marginLeft = '-350px'
                document.getElementsByClassName('question-block')[0].style.marginLeft = '0px'
                document.getElementsByClassName('align-justify')[0].style.zIndex= '1'
                setNavigationbar(false)
            }
            else{
                document.getElementsByClassName('quiz-navigation-bar')[0].style.marginLeft = '0px'
                document.getElementsByClassName('question-block')[0].style.marginLeft = '150px'
                document.getElementsByClassName('align-justify')[0].style.zIndex= '-1'
                setNavigationbar(true)
            }
        }
        else if(window.innerWidth<479){
            if(Navigationbar){
                document.getElementsByClassName('quiz-navigation-bar')[0].style.marginLeft = '-70%'
                document.getElementsByClassName('quiz-navigation-bar')[0].style.zIndex = '5'
                document.getElementsByClassName('question-block')[0].style.marginLeft = '0px'
                document.getElementsByClassName('align-justify')[0].style.zIndex= '1'
                setNavigationbar(false)
            }
            else{
                document.getElementsByClassName('quiz-navigation-bar')[0].style.marginLeft = '0%'
                document.getElementsByClassName('question-block')[0].style.marginLeft = '0px'
                document.getElementsByClassName('align-justify')[0].style.zIndex= '-1'
                setNavigationbar(true)
            }
        }
        else if (window.innerWidth<991){
            if(Navigationbar){
                document.getElementsByClassName('quiz-navigation-bar')[0].style.marginLeft = '-50%'
                document.getElementsByClassName('quiz-navigation-bar')[0].style.zIndex = '5'
                document.getElementsByClassName('question-block')[0].style.marginLeft = '0px'
                document.getElementsByClassName('align-justify')[0].style.zIndex= '1'
                setNavigationbar(false)
            }
            else{
                document.getElementsByClassName('quiz-navigation-bar')[0].style.marginLeft = '0%'
                document.getElementsByClassName('question-block')[0].style.marginLeft = '0px'
                document.getElementsByClassName('align-justify')[0].style.zIndex= '-1'
                setNavigationbar(true)
            }
        }
    }

    //Submitting the quiz. 
    //Intially calculates score and time taken to finish the quiz.
    //addquizresponses saves contest responses
    //update profile registeratons add the contest in the given contests.So that user cannot participate more than once.
    const handleSubmit = async (e) => {
        quizResponses[0].score = calculateScore(); 
        quizResponses[0].timetaken = findremainingTime(contestEndTime);
        const registerationResponse = {
            email:myState.mail,
            contestName:contestName,
            contestCode:contestCode,
            time:new Date().toLocaleTimeString()
        }
        axios.post('http://localhost:4000/addquizresponses', { quizResponses })
            .then(() => {
                notifySucess()
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Quiz submiited')
                
            });
        const response1 = await fetch('http://localhost:4000/updateProfileGivenRegisteration', {
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
                <AlignJustify className='align-justify' onClick={toggleNavigationbar}/>
                <div className='quiz-navigation-bar'>
                    <div className='open-close'>
                        <div className='close-btn' onClick={toggleNavigationbar}><X /></div>
                        <img className='samparc-logo' src={require('./Assests/Images/icons/logo.png')}></img>
                    </div>
                    <div className='contest-name-code'>
                        <p className='quiz-contestName'>{contestName}</p>
                        <p className='quiz-contestCode'>Contest Code - {contestCode} </p>
                        <p className='Attempted'>Attempted - {noOfSolvedQuestion}/{quiz.length}</p>
                        <p> Time remaining: {findremainingTime(contestEndTime)}</p>
                    </div>
                    <div className='quiz-questions'>
                        {quiz.map(question=>{
                            return(
                                <p className={`quiz-navigation-question ${selectedOptions[question.questionNumber-1] !=='' ? 'solved-question' : ''}`} onClick={() => NavigateToQuestion(question.questionNumber)}>{question.questionNumber}. &nbsp;{question.question}</p>
                            )
                        })}
                    </div>
                    <button className='quiz-submit navigation-but'>Submit</button>
                </div>
                <div className='question-block'>
                    <img className='alarm-clock' src={require('./Assests/Images/icons/alarm.png')}></img>
                    <p className='time-remaining'>{findremainingTime(contestEndTime)}</p>
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
                    <p>Are you sure to submit the quiz?</p>
                    <p>You have solved {noOfSolvedQuestion} out of {quiz.length} questions</p>
                    <button className={questionNum===quiz.length-1?'quiz-submit':'notvisible'} onClick={handleSubmit} >Submit The Quiz</button>
                    
                </div>
            </div>
        </section>
    )
}
export default Quiz;