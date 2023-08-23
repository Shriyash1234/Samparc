import React,{useState,useEffect} from 'react'
import Header from './header'
import { useSelector } from 'react-redux';
import { useNavigate ,useLocation} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import {FooterContainer}  from './footercontainer';

import './CSS/RegisterQuiz.css'
import { UserCircle2 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { X } from 'lucide-react';

const RegisterQuiz = () => {
    const [remainingTime, setRemainingTime] = useState(findremainingTime());
    const Navigate = useNavigate()
    const location = useLocation()
    const myState = useSelector((state)=>state.setUserNameMail)  
    const userName = myState.name?myState.name:''
    const { contestName, contestCode,contestTime,contestEndingTime } = location.state;
    const [registerationData, setRegisterationData] = useState([])
    const [isDatafetched,setisDatafetched] = useState(false);
    const [uesrRegistered,setUserRegistered] = useState(false);
    const [RegisterInProcess,setRegisterInProcess] = useState(false);
    const [isuserHaveGivenContest,setisUserHaveGivenContest] = useState(false);
    const [totalRegistrations,setTotalRegistrations] = useState(0);
    const [formData, setFormData] = useState({
        name: myState.name,
        email: myState.mail,
        contestName:contestName,
        contestCode:contestCode,
        time:''
      });
    const [userData,setuserData] = useState({
      AccountBalance:'',
      Registrations:[],
      givenContests:[]
    });;
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
    const notifyWarning = () => {toast.warning('You have not registered for the contest', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClose: closeForm
  })}; 
    const notifyGivenContestWarning = () => {toast.warning('You have already given the contest', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClose: closeForm
    })};
    const sendNote = () => {toast.info('You are already registered to this contest', {
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
    function closeForm(){
      document.getElementsByClassName('register-popup')[0].style.display='none';
      document.getElementsByClassName('register-to-quiz')[0].style.filter = 'brightness(100%)';
    }
    useEffect(() => {
        redirect();
        isUserRegistered();
    
        const timer = setInterval(() => {
            setRemainingTime(findremainingTime());
        }, 1000);
    
        return () => {
            clearInterval(timer);
        };
    }, []);
    function extractData(data){
      for(let i =0;i<data.length;i++){
          if (data[i].responses.email === myState.mail) {
           
          const updatedUserData = {
              ...userData,
              AccountBalance:data[i].responses.AccountBalance,
              Registrations:data[i].responses.Registrations,
              givenContests:data[i].responses.GivenRegistrations
            };
            setuserData(updatedUserData);
            break;
          }
      }
  }
    useEffect(() => {
      fetch("https://samparc.onrender.com/registerations")
      .then(response => response.json())
      .then(data =>extractData(data));
  }, []);
    const openpopup = () =>{
      document.getElementsByClassName('register-popup')[0].style.display = 'block';
      document.getElementsByClassName('register-to-quiz')[0].style.filter = 'brightness(40%)';
    }
    const handleRegister = async (e) => {
        e.preventDefault();
        setRegisterInProcess(true)
        setFormData({ ...formData, time: new Date().toLocaleTimeString() });
        await new Promise((resolve) => setTimeout(resolve, 0));
        const jsonData = JSON.stringify(formData);
        const registerationResponse = {
          email:formData.email,
          contestName:contestName,
          contestCode:contestCode,
          time:new Date().toLocaleTimeString()
        }

        try {
          const response1 = await fetch('https://samparc.onrender.com/addContestRegistration', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: jsonData
          });
      
          if (response1.ok) {
            setUserRegistered(true);
            setRegisterInProcess(false);
            notifySucess();

            fetch("https://samparc.onrender.com/registerations")
            .then(response => response.json())
            .then(data =>extractData(data));
            
            const data1 = await response1.json();
          } else {
            notifyError();
            throw new Error('Error submitting form for the first link');
            
          }
         
          const response2 = await fetch('https://samparc.onrender.com/updateProfileRegisteration', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({ registerationResponse }),
          });
      
          if (response2.ok) {
            const data2 = await response2.json();
            
          } else {
            throw new Error('Error submitting form for the second link');
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
    function checkUserRegisteration(){
      if(!isDatafetched){
        fetch("https://samparc.onrender.com/contestRegisterations")
        .then(response => response.json())
        .then(data =>setRegisterData(data));
      }
    }
    function setRegisterData(data){
      setRegisterationData(data)
      setTimeout(()=>{setisDatafetched(true)},1000)
    }
    function isTimePassed(){
      const currentTime = contestTime;
      if (new Date().toLocaleTimeString() > currentTime){
        return true;
      }
      else return false;
    }
    function isContestEnded(){
      const contestEndTime = contestEndingTime;
      if (new Date().toLocaleTimeString() > contestEndTime){
        return true;
      }
      else return false;
    }
    function isUserHaveGivenContest(){
      for(let i = 0;i<userData.givenContests.length;i++){
        if(userData.givenContests[i].ContestCode ===contestCode ){
          setisUserHaveGivenContest(true);
        }
      }
    }
    const isUserRegistered = async (e) => {
      checkUserRegisteration()
      await new Promise((resolve) => setTimeout(resolve, 0));
      for(let i = 0;i<registerationData.length;i++){
        if(registerationData[i].responses.email=== myState.mail && registerationData[i].responses.contestCode === formData.contestCode){
          setUserRegistered(true);
        } 
      }
    }
    function JoinQuiz(){
      if(!isContestEnded()){
        if(isTimePassed()){
          if(isuserHaveGivenContest){
            notifyGivenContestWarning();
          }
          else if(uesrRegistered){
            Navigate('/Quiz',{state:{contestName:contestName,contestCode:contestCode,contestEndTime:contestEndingTime,contestTime:contestTime}});
          }
          else{
            notifyWarning();
          }
        }
      }
      else{
        Navigate('/Leaderboard/'+ contestCode)
      }
    }
    function findTotalRegistrations() {
      let count = 0;
      for(let i =0;i<registerationData.length;i++){
        if(registerationData[i].responses.contestCode === contestCode){
          count++;
        }
      }
      setTotalRegistrations(count);
    }
    useEffect(()=>{
      isTimePassed();
      isUserRegistered();
      isUserHaveGivenContest();
      findTotalRegistrations();
    })
    
  return (
    <section className='registeration-quiz'>
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
                <div onClick={uesrRegistered?sendNote:openpopup} className='get-started points-button'>{uesrRegistered?'Registered':'Register'}</div>
            </div>
            <div className='contest-details-personal-info'>
                <div className='points-contest-details'>
                    <div className='points-contest-details-rectangle'>
                        <p className='total-registerations'><span>Total Registerations:</span> {totalRegistrations}</p>
                        <p className='points-contest-name'>{contestName}<br/>Samparc round {contestCode}</p>
                        <p className={`total-registerations ${isContestEnded() ? 'visible' : ''}`}><span>Time remaining:</span> {remainingTime}</p>
                        <p className={`total-registerations ${isContestEnded() ? 'visible' : ''}`}><span>Duration:</span> 2hours</p>
                        <p className={`total-registerations ${isContestEnded() ? 'visible' : ''}`}><span>Registeration fee:</span>100rs</p>
                        <p className={`total-registerations ${isContestEnded() ? '' : 'visible'}`}>Contest Ended</p>
                        <button className={`get-started ${isTimePassed() ? '' : 'join-quiz'}`} onClick={JoinQuiz}>{isContestEnded()?'Leaderboard':'Join'}</button>
                    </div>
                    <div className='personal-info-rectangle'>
                        <p className='points-contest-name'>{myState.name}</p>
                        <p className='total-registerations'><span> Wallet Money: </span>{userData.AccountBalance} rs</p>
                        <p className='total-registerations'><span> Registered Contests: </span>
                        {
                          userData.Registrations.map(data=>{
                            return(
                              <p>{data.ContestName} {data.ContestCode}</p>
                            )
                          })
                        }
                        </p>
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
      <div className='register-popup'>
          <div className="registeration-form-images">
            <img className='registeration-form-logo' src={require("./Assests/Images/icons/logo.png")}></img>
            <X className="close-form" onClick={closeForm} src={require("./Assests/Images/icons/close.png")}></X>  
          </div>
          <div className='form-details-div'>
            <div className="form-details register-quiz-form-details">
                  <div className=""><UserCircle2 className="mobile-icon"/>Name: </div>
                  <div className="detail">{myState.name}</div>
            </div>
            <div className="form-details register-quiz-form-details">
                <div className=""><Mail  className="mobile-icon"/>Email: </div>
                <div className="detail">{myState.mail}</div>
            </div>
            <div className="form-details register-quiz-form-details">
                <div className=""><Mail  className="mobile-icon"/>Contest: </div>
                <div className="detail">{formData.contestName}</div>
            </div>
            <div className="form-details register-quiz-form-details">
                <div className=""><CreditCard className="mobile-icon"/>Fee: </div>
                <div className="detail">100</div>
            </div>
            <div className="form-details register-quiz-form-details">
                <div className=""><Calendar className="mobile-icon"/>Date: </div>
                <div className="detail">08/07/2023</div>
            </div>
            <button type="submit" onClick={handleRegister} className="Continue-button registerQuiz-but">{RegisterInProcess?'Registering':'Register'}</button>
          </div>
      </div>
    </section>
    
  )
}

export default RegisterQuiz
