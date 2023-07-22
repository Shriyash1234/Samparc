import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/quiz.css'
import quiz from './data/quizData/quiz.json'
function Quiz(){
    const [selectedOptions, setSelectedOptions] = useState(Array(quiz.length).fill(''));
    const [questionNum,setQuestionNum] = useState(0);
    const [quizResponses,setQuizResponses] = useState([]);
    const [reamainingTime, setReamainingTime] = useState(500);
    const Navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
        if (reamainingTime > 0) {
            setReamainingTime((prevSeconds) => prevSeconds - 1);
        }
        if(reamainingTime == 0){
            handleSubmit();
        }
        }, 1000);
        return () => clearTimeout(timer);
    }, [reamainingTime]);
    function handleOptionChange(event) {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[questionNum] = event.target.value;
        setSelectedOptions(updatedSelectedOptions);
    }
    
      function handleSubmit(event) {
        event.preventDefault();
        console.log('Selected Option:', selectedOptions);
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
        updatedResponses[questionNum] = response;
        console.log(updatedResponses)
        setQuizResponses(updatedResponses);
    
        if (questionNum < quiz.length - 1) {
          setQuestionNum(questionNum + 1);
        } else {
          showSubmit();
        }
      }
      function handleSubmit(){
        console.log(quizResponses)
        axios.post('https://samparc.onrender.com/addquizresponses', { quizResponses })
            .then(() => {
                console.log('Added');
                alert('Quiz submiited')
                Navigate('/Samparc')
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Quiz submiited')
                Navigate('/')
            });
      }
    return(
        <section className="quiz">
            <div className='question'>
                <div className='question-block'>
                    <img className='alarm-clock' src={require('./Assests/Images/icons/alarm.png')}></img>
                    <p className='time-remaining'>{reamainingTime}</p>
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
                    <p className='time-remaining'>{reamainingTime}</p>
                    <button className={questionNum===quiz.length-1?'quiz-submit':'notvisible'} onClick={handleSubmit} >Submit The Quiz</button>
                    <div className={questionNum===0?'notvisible':'prev-next'} onClick={handleLastPrevious}><img src={require('./Assests/Images/icons/previous.png')}></img> Previous</div>
                </div>
            </div>
        </section>
    )
}
export default Quiz;