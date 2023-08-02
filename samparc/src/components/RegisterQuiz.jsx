import React,{useState,useEffect} from 'react'
import Header from './header'
import { useSelector } from 'react-redux';

import {FooterContainer}  from './footercontainer';

import './CSS/RegisterQuiz.css'
import { useNavigate ,useLocation} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const RegisterQuiz = () => {
    const [remainingTime, setRemainingTime] = useState(findremainingTime());
    const Navigate = useNavigate()
    const location = useLocation()
    const myState = useSelector((state)=>state.setUserNameMail)  
    const userName = myState.name?myState.name:''
    const { contestName, contestCode } = location.state;
    const [formData, setFormData] = useState({
        name: myState.name,
        email: myState.mail,
        contestName:contestName,
        contestCode:contestCode,
        time:''
      });
    function closeForm(){
        Navigate('/')
    }  
    const notifySucess = () => {toast.success('Registeration Sucessful', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: closeForm
    })};
    const notifyError = () => {toast.error('Registeration Failed Server Error', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: closeForm
    })}; 
    function redirect(){
        if(userName===''){
            Navigate('/Register')
        }
    }
    useEffect(() => {
        redirect();
    
        const timer = setInterval(() => {
            setRemainingTime(findremainingTime());
        }, 1000);
    
        return () => {
            clearInterval(timer);
        };
    }, []);
    
    
    const handleRegister = async (e) => {
        e.preventDefault();
        setFormData({ ...formData, time: new Date().toLocaleTimeString() });
        const jsonData = JSON.stringify(formData);
        console.log(jsonData)
        

        try {
          const response1 = await fetch('https://samparc.onrender.com/addContestRegistration', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: jsonData
          });
      
          if (response1.ok) {

            notifySucess();
            
            const data1 = await response1.json();
          } else {
            throw new Error('Error submitting form for the first link');
            notifyError();
          }
        } catch (error) {
          console.error(error); 
          notifyError();
        }
      };
    function findremainingTime(){
        var currentTime = new Date();
        var targetTime = new Date();
        targetTime.setHours(23, 0, 0); 
        var remainingTime = targetTime - currentTime;
        var hours = Math.floor(remainingTime / (1000 * 60 * 60));
        var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        let str = hours.toString()+':'+minutes.toString()+':'+ seconds.toString();
        return str;
    }
  return (
    <div className='register-to-quiz'>
        <Header/>
        <div className='register-quiz-div'>
            <div className='points-to-remember-div'>
                <div className='points-to-remember-rectangle'>
                    <p className='points-heading'>Points to remember before registeration.</p>
                    <ol>
                        <li className='point'>Quiz will contain MCQ type questions.</li>
                        <li className='point'>You will have a limited amount of time to complete the quiz.</li>
                        <li className='point'>If you are unable to complete the quiz in the given time, the quiz will get automatically submit.</li>
                        <li className='point'>There is no negative marking, so feel free to attempt all questions.</li>
                        <li className='point'>Any type of cheating is strictly prohibited.</li>
                        <li className='point'>Your rank will be determined based on the score obtained in the quiz. In case of a tie in marks, the rank will be decided based on the time taken to complete the quiz.</li>
                        <li className='point'>The reward money will be credited directly to your wallet upon successful completion of the quiz.</li>
                        <li className='point'>If you have any queries or concerns, please feel free to contact us at abc@gmail.com.</li>
                        <li className='point'>Best of luck for the quiz!</li>
                    </ol>
                </div>
                <div onClick={handleRegister} className='get-started points-button'>Regsiter</div>
            </div>
            <div className='contest-details-personal-info'>
                <div className='points-contest-details'>
                    <div className='points-contest-details-rectangle'>
                        <p className='total-registerations'><span>Total Registerations:</span> 151</p>
                        <p className='points-contest-name'>{contestName}<br/>Samparc round {contestCode}</p>
                        <p className='total-registerations'><span>Time remaining:</span> {remainingTime}</p>
                        <p className='total-registerations'><span>Duration:</span> 2hours</p>
                        <p className='total-registerations'><span>Registeration fee:</span>100rs</p>
                    </div>
                    <div className='personal-info-rectangle'>
                        <p className='points-contest-name'>{myState.name}</p>
                        <p className='total-registerations'><span> Wallet Money: </span>0rs</p>
                        <p className='total-registerations'><span> Registered Contests: </span>No data available</p>
                    </div>
                </div>
            </div>
        </div>
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
        <FooterContainer/>
    </div>
  )
}

export default RegisterQuiz