import "./CSS/registration.css";
function Registration() {
    function form1Next(){
        var nameInput = document.querySelector('input[name="name"]');
        var phoneInput = document.querySelector('input[name="phone"]');
        var emailInput = document.querySelector('input[name="email"]');
        var inputs = [nameInput, phoneInput, emailInput];
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
            document.getElementsByClassName('form-2')[0].style.display = 'block'
        }
    }
    function form2Next() {
        var workInput = document.querySelector('input[name="work"]');
        var categoriesInput = document.querySelector('select[name="categories"]');
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
          document.getElementsByClassName('form-3')[0].style.display = 'block';
        }
      }
      
    function closeForm(){
        document.getElementsByClassName('registeration-form')[0].style.display = 'none'
        document.getElementsByClassName('form-1')[0].style.display = 'block'
        document.getElementsByClassName('form-2')[0].style.display = 'none'
        document.getElementsByClassName('form-3')[0].style.display = 'none'
        document.getElementsByClassName('cm-header-wrap')[0].style.filter = 'brightness(100%)'
        document.getElementsByClassName('comapny-logo')[0].style.filter = 'brightness(100%)'
        document.getElementsByClassName('caro')[0].style.filter = 'brightness(100%)'
        document.getElementsByClassName('popular-exams')[0].style.filter = 'brightness(100%)'
        document.getElementsByClassName('Daily-contests')[0].style.filter = 'brightness(100%)'
    }
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
                                <img className='mobile-icon' src={require("./Assests/Images/icons/name.png")}></img>
                                <input type="text" name="name" className='input-mobile' placeholder="Please Enter your name"></input>
                                <span className="validation-message"></span>
                            </div>
                            <div className="icon-input">
                                <img className='mobile-icon' src={require("./Assests/Images/icons/smartphone.png")}></img>
                                <input type="text" name="phone" className='input-mobile' placeholder="Please Enter your mobile number"></input>
                                <span className="validation-message"></span>
                            </div>
                            <div className="icon-input">
                                <img className='mail-icon' src={require("./Assests/Images/icons/mail.png")}></img>
                                <input type="text" name="email" className='input-mobile' placeholder="Please Enter your email address"></input>
                                <span className="validation-message"></span>
                            </div>
                            <div onClick={form1Next} className="Continue-button">Next</div>
                        </div>
                        <div className="form-2">
                            <div className="icon-input">
                                <img className='mobile-icon' src={require("./Assests/Images/icons/work.png")}/>
                                <input type="text" name="work" className='input-mobile' placeholder="Type of work"/>
                                <span className="validation-message"></span>
                            </div>
                            <div className="icon-input">
                                <img className='mobile-icon' src={require("./Assests/Images/icons/categories.png")}/>
                                <select id="cars" name="categories" className="dropdown">
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
                                <img className='mail-icon' src={require("./Assests/Images/icons/location.png")}/>
                                <input type="text" name="address" className='input-mobile' placeholder="Please Enter your address"/>
                                <span className="validation-message"></span>
                            </div>
                            <div onClick={form2Next} className="Continue-button">Next</div>
                        </div>                
                        <div className="form-3">
                            <div className="icon-input-payment">
                                <img className='payment-icon' src={require("./Assests/Images/icons/payment.png")}></img>
                                <h2 className='registeration-form-continue'>Payment Amonut:1000</h2>
                            </div>
                            <div className="Continue-button">Pay & Continue</div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Registration