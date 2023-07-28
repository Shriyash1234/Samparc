import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch ,useSelector} from 'react-redux';
import { setUserName} from '../actions/index';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserCircle2 } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { Home } from 'lucide-react'


import "./CSS/registration.css";
function Registration() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [RegisterInProcess,setRegisterInProcess] = useState(false);
  const myState = useSelector((state)=>state.setUserNameMail)
  const notifySucess = () => {toast.success('Registeration Sucessful  ', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    onClose: closeForm
    })};
  const notifyLogin = () => {toast.success('Already Logged in  ', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    onClose: closeForm
    })};  
  const notifyError = () => {toast.error('Registeration Failed  ', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    onClose: closeForm
    })};  
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        DOB: '',
        password:'',
        class: 'Choose',
        address: '',
        AccountBalance:0
      });
    
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
      function checkLoggedIn(){
        if(myState.name){
            Navigate('/')
            alert('Already Logged in')
           
        }
        else{
          setTimeout(()=>{
            document.getElementsByClassName('cm-header-wrap')[0].style.filter = 'brightness(40%)'},300)
        }
    }
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
  

      function removePasswordField(){
        const formDataCopy = { ...formData };
        delete formDataCopy.password;
        setFormData(formDataCopy);
        return JSON.stringify(formDataCopy);
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        setRegisterInProcess(true)

        const jsonUserPasswordData = {
          name:formData.name,
          email: formData.email,
          password: formData.password
        };
        removePasswordField();
        const jsonData = removePasswordField();
        

        try {
          // First fetch request
          const response1 = await fetch('http://localhost:4000/addRegistration', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: jsonData
          });
      
          if (response1.ok) {
            dispatch(setUserName(formData.name, formData.email));
            setRegisterInProcess(false);
            notifySucess();
            
            const data1 = await response1.json();
          } else {
            throw new Error('Error submitting form for the first link');
          }
      
          const response2 = await fetch('http://localhost:4000/addUserPassword', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonUserPasswordData)
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
      
    function form1Next(){
        var nameInput = document.querySelector('input[name="name"]');
        var phoneInput = document.querySelector('input[name="phone"]');
        var inputs = [nameInput, phoneInput];
        inputs.forEach(function(input) {
            var parentNode = input.parentNode;
            parentNode.classList.remove('invalid');
            var validationMessage = parentNode.querySelector('.validation-message');
            validationMessage.textContent = '';
        });
      
        // Validate input fields
        var isValid = true;
        inputs.forEach(function(input) {
            var value = input.value.trim();
            if (value === '') {
                var parentNode = input.parentNode;
                parentNode.classList.add('invalid');
                var validationMessage = parentNode.querySelector('.validation-message');
                validationMessage.textContent = '*Please enter the ' + input.name;
                isValid = false;
            }
        });
    
        if (!isValid) {
            return; 
        }
        else{
            document.getElementsByClassName('form-1')[0].style.display = 'none'
            document.getElementsByClassName('form-3')[0].style.display = 'none'
            document.getElementsByClassName('form-4')[0].style.display = 'none'
            document.getElementsByClassName('form-2')[0].style.display = 'block'
        }
    }
    function form2Next(){
      var passwordInput = document.querySelector('input[name="phone"]');
      var emailInput = document.querySelector('input[name="email"]');
      var inputs = [passwordInput, emailInput];
      inputs.forEach(function(input) {
          var parentNode = input.parentNode;
          parentNode.classList.remove('invalid');
          var validationMessage = parentNode.querySelector('.validation-message');
          validationMessage.textContent = '';
      });
    
      // Validate input fields
      var isValid = true;
      inputs.forEach(function(input) {
          var value = input.value.trim();
          if (value === '') {
              var parentNode = input.parentNode;
              parentNode.classList.add('invalid');
              var validationMessage = parentNode.querySelector('.validation-message');
              validationMessage.textContent = '*Please enter the ' + input.name;
              isValid = false;
          }
      });
  
      if (!isValid) {
          return; 
      }
      else{
          document.getElementsByClassName('form-1')[0].style.display = 'none'
          document.getElementsByClassName('form-2')[0].style.display = 'none'
          document.getElementsByClassName('form-4')[0].style.display = 'none'
          document.getElementsByClassName('form-3')[0].style.display = 'block'
      }
  }
    function form3Next() {
        var workInput = document.querySelector('input[name="DOB"]');
        var categoriesInput = document.querySelector('select[name="class"]');
        var addressInput = document.querySelector('input[name="address"]');
      
        // Reset validation messages
        var inputs = [workInput, categoriesInput, addressInput];
        inputs.forEach(function (input) {
          var parentNode = input.parentNode;
          parentNode.classList.remove('invalid');
          var validationMessage = parentNode.querySelector('.validation-message');
          validationMessage.textContent = '';
        });
      
        // Validate input fields
        var isValid = true;
      
        if (categoriesInput.value === 'Choose') {
          categoriesInput.nextElementSibling.textContent = 'Please choose a category';
          var parentNode = categoriesInput.parentNode;
          parentNode.classList.add('invalid');
          var validationMessage = parentNode.querySelector('.validation-message');
          validationMessage.textContent = '*Please Choose a Category ';
          isValid = false;
        }
      
        inputs.forEach(function (input) {
          var value = input.value.trim();
          if (value === '') {
            var parentNode = input.parentNode;
            parentNode.classList.add('invalid');
            var validationMessage = parentNode.querySelector('.validation-message');
            validationMessage.textContent = '*Please enter the ' + input.name;
            isValid = false;
          }
        });
      
        if (!isValid) {
          return; // Stop execution and don't proceed to the next page
        } else {
          document.getElementsByClassName('form-1')[0].style.display = 'none';
          document.getElementsByClassName('form-2')[0].style.display = 'none';
          document.getElementsByClassName('form-3')[0].style.display = 'none'
          document.getElementsByClassName('form-4')[0].style.display = 'block';
        }
      }
      
    function closeForm(){
        Navigate('/')
    }
    useEffect(()=>{
      checkLoggedIn()
    },[])
    return(
        <div>
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
                                <UserCircle2 className="mobile-icon"/>
                                <input type="text" name="name" className="input-mobile" placeholder="Please Enter your name" value={formData.name} onChange={handleChange} />
                                <span className="validation-message"></span>
                            </div>
                            <div className="icon-input">
                                <Smartphone  className="mobile-icon"/>
                                <input type="text" name="phone" className="input-mobile" placeholder="Please Enter your mobile number" value={formData.phone} onChange={handleChange} />
                                <span className="validation-message"></span>
                            </div>
                            <div onClick={form1Next} className="Continue-button">Next</div>
                            <p style={{fontsize:'3rem',textAlign:'center',margin:'4px'}}>or</p>
                            <Link to='/Login'><div className="login-form-button">Login</div></Link>
                        </div>
                        <div className="form-2">
                            <div className="icon-input">
                                <Mail className="mobile-icon"/>
                                <input type="text" name="email" className="input-mobile" placeholder="Please Enter your email address" value={formData.email} onChange={handleChange} />
                                <span className="validation-message"></span>
                            </div>
                            <div className="icon-input">
                                <Lock className="mobile-icon"/>
                                <div className="password-input">
                                    <input type={showPassword ? 'text' : 'password'} name="password" className="input-mobile" placeholder="Please Enter your password" value={formData.password} onChange={handleChange} />
                                    <img className='mail-icon password-img' src={require('./Assests/Images/icons/visibility-button' + (showPassword ? '-on.png' : '-off.png'))} onClick={togglePasswordVisibility}/>
                                </div>
                                <span className="validation-message"></span>
                            </div>
                            <div onClick={form2Next} className="Continue-button">Next</div>
                        </div>
                        <div className="form-3">
                            <div className="icon-input">
                                <Calendar className="mobile-icon"/>
                                <input type="date" name="DOB" className="input-mobile" placeholder="Date of Birth" value={formData.DOB} onChange={handleChange} />
                                <span className="validation-message"></span>
                            </div>
                            <div className="icon-input">
                                <GraduationCap className="mobile-icon"/>
                                <select id="class" name="class" className="dropdown" value={formData.class} onChange={handleChange}>
                                    <option value="Choose">Choose your standard</option>
                                    <option value="Class 5">Class 5</option>
                                    <option value="Class 6">Class 6</option>
                                    <option value="Class 7">Class 7</option>
                                    <option value="Class 8">Class 8</option>
                                    <option value="Class 9">Class 9</option>
                                    <option value="Class 10">Class 10</option>
                                    <option value="Class 11">Class 11</option>
                                    <option value="Class 12">Class 12</option>
                                    <option value="Not Applicable">Not Applicable</option>
                                </select>
                                <span className="validation-message"></span>
                                </div>
                            <div className="icon-input">
                                <img className="mail-icon" src={require("./Assests/Images/icons/location.png")} alt="Address Icon" />
                                <input type="text" name="address" className="input-mobile" placeholder="Please Enter your address" value={formData.address} onChange={handleChange} />
                                <span className="validation-message"></span>
                            </div>
                            <div onClick={form3Next} className="Continue-button">Next</div>
                        </div>                
                        <div className="form-4">
                            <div className="icon-input-payment">
                                <div className="form-details">
                                    <div className=""><UserCircle2 className="mobile-icon"/>Name: </div>
                                    <div className="detail">{formData.name}</div>
                                </div>
                                <div className="form-details">
                                    <div className=""><Smartphone  className="mobile-icon"/>Phone: </div>
                                    <div className="detail">{formData.phone}</div>
                                </div>
                                <div className="form-details">
                                    <div className=""><Mail  className="mobile-icon"/>Email: </div>
                                    <div className="detail">{formData.email}</div>
                                </div>
                                <div className="form-details">
                                    <div className=""><Calendar  className="mobile-icon"/>DOB: </div>
                                    <div className="detail">{formData.DOB}</div>
                                </div>
                                <div className="form-details">
                                    <div className=""><GraduationCap  className="mobile-icon"/>Standard: </div>
                                    <div className="detail">{formData.class}</div>
                                </div>
                                <div className="form-details">
                                    <div className=""><Home  className="mobile-icon"/>Address: </div>
                                    <div className="detail">{formData.address}</div>
                                </div>
                            </div>
                            <button type="submit" onClick={handleSubmit} className="Continue-button">{RegisterInProcess?'Registering':'Register'}</button>
                            <img className='loadingGif' style={{display:RegisterInProcess?'block':'none'}} src={require('./Assests/Images/icons/loading.gif')}/>
                        </div>
                    </form>
                </div>
            </section>
            <div className="registeration-background"></div>
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
        </div>
    )
}
export default Registration