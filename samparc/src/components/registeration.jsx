import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch ,useSelector} from 'react-redux';
import { setUserName} from '../actions/index';
import { Link } from "react-router-dom";

import "./CSS/registration.css";
function Registration() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const myState = useSelector((state)=>state.setUserNameMail)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        work: '',
        password:'',
        category: 'Choose',
        address: ''
      });
    
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
      function checkLoggedIn(){
        if(myState.name){
            alert('Already Logged in');
            Navigate('/')
        }
    }
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const jsonData = JSON.stringify(formData);
        dispatch(setUserName(formData.name, formData.email));
        const jsonUserPasswordData = {
          name:formData.name,
          email: formData.email,
          password: formData.password
        };
        console.log(jsonUserPasswordData);

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
            const data1 = await response1.json();
            alert('Registration successful');
            closeForm();
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
            console.log(data2); 
          } else {
            throw new Error('Error submitting form for the second link');
          }
        } catch (error) {
          console.error(error); 
          alert('Registration failed');
          closeForm();
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
        var workInput = document.querySelector('input[name="work"]');
        var categoriesInput = document.querySelector('select[name="category"]');
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
                                <img className="mobile-icon" src={require("./Assests/Images/icons/name.png")} alt="Name Icon" />
                                <input type="text" name="name" className="input-mobile" placeholder="Please Enter your name" value={formData.name} onChange={handleChange} />
                                <span className="validation-message"></span>
                            </div>
                            <div className="icon-input">
                                <img className="mobile-icon" src={require("./Assests/Images/icons/smartphone.png")} alt="Phone Icon" />
                                <input type="text" name="phone" className="input-mobile" placeholder="Please Enter your mobile number" value={formData.phone} onChange={handleChange} />
                                <span className="validation-message"></span>
                            </div>
                            <div onClick={form1Next} className="Continue-button">Next</div>
                            <p style={{fontsize:'3rem',textAlign:'center',margin:'4px'}}>or</p>
                            <Link to='/Login'><div className="login-form-button">Login</div></Link>
                        </div>
                        <div className="form-2">
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
                            <div onClick={form2Next} className="Continue-button">Next</div>
                        </div>
                        <div className="form-3">
                            <div className="icon-input">
                                <img className="mobile-icon" src={require("./Assests/Images/icons/work.png")} alt="Work Icon" />
                                <input type="text" name="work" className="input-mobile" placeholder="Type of work" value={formData.work} onChange={handleChange} />
                                <span className="validation-message"></span>
                            </div>
                            <div className="icon-input">
                                <img className="mobile-icon" src={require("./Assests/Images/icons/categories.png")} alt="Category Icon" />
                                <select id="cars" name="category" className="dropdown" value={formData.category} onChange={handleChange}>
                                    <option value="Choose">Choose a category</option>
                                    <option value="Domestic">Domestic workers</option>
                                    <option value="Farmers">Farmers</option>
                                    <option value="Labours">Labours</option>
                                    <option value="Drivers">Drivers</option>
                                    <option value="Students">Students</option>
                                    <option value="Others">Others</option>
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
                                <img className='payment-icon' src={require("./Assests/Images/icons/payment.png")}></img>
                                <h2 className='registeration-form-continue'>Payment Amonut:1000</h2>
                            </div>
                            <button type="submit" onClick={handleSubmit} className="Continue-button">Pay & Continue</button>
                        </div>
                    </form>
                </div>
            </section>
            <div className="registeration-background"></div>
        </div>
    )
}
export default Registration