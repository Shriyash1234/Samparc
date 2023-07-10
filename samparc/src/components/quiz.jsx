import React,{useState} from 'react';
import axios from 'axios';
import './CSS/quiz.css'
import quiz from './data/quizData/quiz.json'
function Quiz(){
    const [selectedOption, setSelectedOption] = useState('');
    const [questionNum,setQuestionNum] = useState(0);
    const [quizResponses,setQuizResponses] = useState([]);
    function handleOptionChange(event) {
        setSelectedOption(event.target.value);
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        console.log('Selected Option:', selectedOption);
      }
      function handlePrevious(event) {
        event.preventDefault();
        setQuestionNum(questionNum-1)
      }
      function handleNext(event) {
        event.preventDefault();
        const response = {
            question: quiz[questionNum].question,
            selectedOption: selectedOption
        };
        const updatedResponses = [...quizResponses, response];
        setQuizResponses(updatedResponses);
        // console.log('previous',quizResponses)
        if(questionNum<quiz.length-1) setQuestionNum(questionNum+1);
        
      }
      function handleSubmit(){
        console.log(quizResponses)
        axios.post('http://localhost:4000/addquizresponses', { quizResponses })
            .then(() => {
                console.log('Added');
            })
            .catch(error => {
                console.error('Error:', error);
            });
      }
    return(
        <section className="quiz">
            <div className='question'>
                <div className='question-block'>
                    <div className='question-number'>
                        <p className='question-number-text'>Question {quiz[questionNum].questionNumber} out of {quiz.length}</p>
                    </div>
                    <div className='question-box'>
                        <p className='question'>{quiz[questionNum].question}</p>
                    </div>
                    <form className='quiz-form' onSubmit={handleSubmit}>
                    <div className='options'>
                        <div className='option-set'>
                        <label className={`option ${selectedOption === 'a' ? 'selected' : ''}`}>
                            <input
                            type='radio'
                            value='a'
                            checked={selectedOption === 'a'}
                            onChange={handleOptionChange}
                            className='option-text'
                            />
                            {quiz[questionNum].Option_1}
                        </label>
                        <label className={`option ${selectedOption === 'b' ? 'selected' : ''}`}>
                            <input
                            type='radio'
                            value='b'
                            checked={selectedOption === 'b'}
                            onChange={handleOptionChange}
                            className='option-text'
                            />
                            {quiz[questionNum].Option_2}
                        </label>
                        </div>
                        <div className='option-set'>
                        <label className={`option ${selectedOption === 'c' ? 'selected' : ''}`}>
                            <input
                            type='radio'
                            value='c'
                            checked={selectedOption === 'c'}
                            onChange={handleOptionChange}
                            className='option-text'
                            />
                            {quiz[questionNum].Option_3}
                        </label>
                        <label className={`option ${selectedOption === 'd' ? 'selected' : ''}`}>
                            <input
                            type='radio'
                            value='d'
                            checked={selectedOption === 'd'}
                            onChange={handleOptionChange}
                            className='option-text'
                            />
                            {quiz[questionNum].Option_4}
                        </label>
                        </div>
                    </div>
                    
                    </form>
                    <div className='buttons'>
                        <div className={questionNum===0?'notvisible':'prev-next'} onClick={handlePrevious}><img src={require('./Assests/Images/icons/previous.png')}></img> Previous</div>
                        <div className='prev-next' onClick={handleNext}>{questionNum===quiz.length-1?'Submit':'Next'}<img src={require('./Assests/Images/icons/next.png')}></img></div>
                    </div>
                    <button className={questionNum===quiz.length-1?'prev-next':'notvisible'} onClick={handleSubmit} >Submit</button>
                </div>
            </div>
        </section>
    )
}
export default Quiz;