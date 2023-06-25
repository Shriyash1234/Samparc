import React,{useState} from 'react';
import './CSS/quiz.css'
function Quiz(){
    const [selectedOption, setSelectedOption] = useState('');

  function selectOption(num) {
    setSelectedOption(num);
  }
    return(
        <section className="quiz">
            <div className='question'>
                <div className='question-block'>
                    <div className='question-number'>
                        <p className='question-number-text'>Question 1 out of 2</p>
                    </div>
                    <div className='question-box'>
                        <p className='question'>Who was the first prime minister of India?</p>
                    </div>
                    <div className='options'>
                        <div className='option-set'>
                            <div
                            className={`option ${selectedOption === 'a' ? 'selected' : ''}`}
                            id='a'
                            onClick={() => selectOption('a')}
                            >
                            <p className='option-text'>Rajendra Prasad</p>
                            </div>
                            <div
                            className={`option ${selectedOption === 'b' ? 'selected' : ''}`}
                            id='b'
                            onClick={() => selectOption('b')}
                            >
                            <p className='option-text'>Jawaharlal Nehru</p>
                            </div>
                        </div>
                        <div className='option-set'>
                            <div
                            className={`option ${selectedOption === 'c' ? 'selected' : ''}`}
                            id='c'
                            onClick={() => selectOption('c')}
                            >
                            <p className='option-text'>Mahatma Gandhi</p>
                            </div>
                            <div
                            className={`option ${selectedOption === 'd' ? 'selected' : ''}`}
                            id='d'
                            onClick={() => selectOption('d')}
                            >
                            <p className='option-text'>Sardar Vallabhbhai Patel</p>
                            </div>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className='prev-next'><img src={require('./Assests/Images/icons/previous.png')}></img> Previous</div>
                        <div className='prev-next'>Next <img src={require('./Assests/Images/icons/next.png')}></img></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Quiz;