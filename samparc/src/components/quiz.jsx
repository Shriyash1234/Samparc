import React,{useState} from 'react';
import axios from 'axios';
import './CSS/quiz.css'
function Quiz(){
    const [selectedOption, setSelectedOption] = useState('');

    function handleOptionChange(event) {
        setSelectedOption(event.target.value);
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        console.log('Selected Option:', selectedOption);
      }
      function handleNext(event) {
        event.preventDefault();
        console.log('Selected Option:', selectedOption);
        axios.post('https://samparc.onrender.com/addquizresponse', { selectedOption })
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
                        <p className='question-number-text'>Question 1 out of 1</p>
                    </div>
                    <div className='question-box'>
                        <p className='question'>Who was the first prime minister of India?</p>
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
                            Rajendra Prasad
                        </label>
                        <label className={`option ${selectedOption === 'b' ? 'selected' : ''}`}>
                            <input
                            type='radio'
                            value='b'
                            checked={selectedOption === 'b'}
                            onChange={handleOptionChange}
                            className='option-text'
                            />
                            Jawaharlal Nehru
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
                            Mahatma Gandhi
                        </label>
                        <label className={`option ${selectedOption === 'd' ? 'selected' : ''}`}>
                            <input
                            type='radio'
                            value='d'
                            checked={selectedOption === 'd'}
                            onChange={handleOptionChange}
                            className='option-text'
                            />
                            Sardar Vallabhbhai Patel
                        </label>
                        </div>
                    </div>
                    {/* <button type='submit'>Submit</button> */}
                    </form>
                    <div className='buttons'>
                        <div className='prev-next'><img src={require('./Assests/Images/icons/previous.png')}></img> Previous</div>
                        <div className='prev-next' onClick={handleNext}>Next <img src={require('./Assests/Images/icons/next.png')}></img></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Quiz;