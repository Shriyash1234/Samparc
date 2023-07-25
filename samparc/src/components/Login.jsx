import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { setUserName} from '../actions/index';

import Header from './header';
import './CSS/login.css'
const Login = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const myState = useSelector((state)=>state.setUserNameMail)
    const [formData, setFormData] = useState({
        email: '',
        password:''
      });
    
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    function closeForm(){
        Navigate('/')
    }

    function checkLoggedIn(){
        if(myState.name){
            alert('Already Logged in');
            Navigate('/')
        }
    }
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const jsonData = JSON.stringify(formData);

        try {
          const response = await fetch('http://localhost:4000/checkpassword', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: jsonData
          });
      
          if (response.ok) {
            const data = await response.json();
            if (data.message === 'ok') {
              const name = data.userName;
              console.log(data)
              dispatch(setUserName(name, formData.email));
              alert('Authentication successful');
              closeForm()
            } else {
              alert('Incorrect password');
            }
          } else {
            throw new Error('Authentication failed');
          }
        } catch (error) {
          console.error(error);
          alert('Authentication failed');
        }
      };
    useEffect(()=>{
        checkLoggedIn()
        document.getElementsByClassName('cm-header-wrap')[0].style.filter = 'brightness(40%)'
    },[])
  return (
    <div className='Login'>
      <Header/>
      <section className="registeration-form">
                <div className="registeration-form-images">
                    <img className='registeration-form-logo' src={require("./Assests/Images/icons/logo.png")}></img>
                    <img className="close-form" onClick={closeForm} src={require("./Assests/Images/icons/close.png")}></img>
                </div>
                <h2 className="registeration-form-get-started">Get Started with Samparc!</h2>
                <h3 className='registeration-form-continue' >Continue with your mobile number</h3>
                <div className="mobile-form">
                    <form className="mobile-from-form">
                        <div className="form-1">
                            <div className="icon-input">
                                <img className="mail-icon" src={require("./Assests/Images/icons/mail.png")} alt="Email Icon" />
                                <input type="text" name="email" className="input-mobile" placeholder="Please Enter your email address" value={formData.email} onChange={handleChange} />
                                <span className="validation-message"></span>
                            </div>
                            <div className="icon-input">
                                <img className="mail-icon" src={require("./Assests/Images/icons/password.png")} alt="Phone Icon" />
                                <div className="password-input">
                                    <input type={showPassword ? 'text' : 'password'} name="password" className="input-mobile" placeholder="Please Enter your password" value={formData.password} onChange={handleChange} />
                                    <img className='mail-icon password-img' src={require('./Assests/Images/icons/visibility-button' + (showPassword ? '-on.png' : '-off.png'))} onClick={togglePasswordVisibility}/>
                                </div>
                                <span className="validation-message"></span>
                            </div>
                            <div className="login-form-button" onClick={handleLogin}>Login</div>
                        </div>
                    </form>
                </div>
            </section>
            <div className="registeration-background"></div>
    </div>
  )
}

export default Login
