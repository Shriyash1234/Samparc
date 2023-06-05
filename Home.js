$(document).ready(function(){

	$('li.has-child > a').after('<div class="child-menu-btn fa fa-plus"></div>');

	$('.cm-menu-btn').click(function(){
		$('.cm-menu-inner').slideToggle();
		$('.cm-menu-inner > ul ul.menu-ul').slideUp();
		$('.child-menu-btn').removeClass('fa-minus');
	});

	$('.child-menu-btn').click(function(){

		//do this to its sub menu
		$(this).next('ul.menu-ul').slideToggle();
		$(this).toggleClass('fa-minus');

		//do this to all other sub menu excluding the one that was clicked
		$(this).parent('li').siblings().children('ul.menu-ul').slideUp();
		$(this).parent('li').siblings().children('.child-menu-btn').removeClass('fa-minus');
		$(this).parent('li').siblings().children().find('.child-menu-btn').removeClass('fa-minus');

		//this closes all the child sub menus when its parent child button at level 1 is clicked

		$(this).next('ul.menu-ul').children('li.has-child').find('ul.menu-ul').slideUp();
		$(this).next('ul.menu-ul').children('li.has-child').find('.child-menu-btn').removeClass('fa-minus');


	});
});
function registerationForm(){
	document.getElementsByClassName('cm-header-wrap')[0].style.filter = 'brightness(15%)'
	document.getElementsByClassName('comapny-logo')[0].style.filter = 'brightness(15%)'
	document.getElementsByClassName('sidebar')[0].style.filter = 'brightness(15%)'
	document.getElementsByClassName('caro')[0].style.filter = 'brightness(15%)'
	document.getElementsByClassName('popular-exams')[0].style.filter = 'brightness(15%)'
	document.getElementsByClassName('registeration-form')[0].style.display = 'block'
}
function form1Next(){
	var nameInput = document.querySelector('input[name="name"]');
    var phoneInput = document.querySelector('input[name="phone"]');
    var emailInput = document.querySelector('input[name="email"]');
    var inputs = [nameInput, phoneInput, emailInput];
	inputs.forEach(function(input) {
        var parent = input.parentNode;
        parent.classList.remove('invalid');
        var validationMessage = parent.querySelector('.validation-message');
        validationMessage.textContent = '';
    });
  
    // Validate input fields
    var isValid = true;
    inputs.forEach(function(input) {
        var value = input.value.trim();
        if (value === '') {
            var parent = input.parentNode;
            parent.classList.add('invalid');
            var validationMessage = parent.querySelector('.validation-message');
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
function form2Next(){
	var workInput = document.querySelector('input[name="work"]');
    var categoriesInput = document.querySelector('select[name="categories"]');
    var addressInput = document.querySelector('input[name="address"]');

    // Reset validation messages
    var inputs = [workInput, categoriesInput, addressInput];
    inputs.forEach(function(input) {
        var parent = input.parentNode;
        parent.classList.remove('invalid');
        var validationMessage = parent.querySelector('.validation-message');
        validationMessage.textContent = '';
    });

    // Validate input fields
    var isValid = true;

    if (categoriesInput.value === 'Choose') {
        categoriesInput.nextElementSibling.textContent = 'Please choose a category';
        parent = categoriesInput.parentNode;
		parent.classList.add('invalid');
        var validationMessage = parent.querySelector('.validation-message');
        validationMessage.textContent = '*Please Choose a Category ' ;
        isValid = false;
    }

    inputs.forEach(function(input) {
        var value = input.value.trim();
        if (value === '') {
            var parent = input.parentNode;
            parent.classList.add('invalid');
            var validationMessage = parent.querySelector('.validation-message');
            validationMessage.textContent = '*Please enter the ' + input.name;
            isValid = false;
        }
    });

    if (!isValid) {
        return; // Stop execution and don't proceed to the next page
    }
	else{
		document.getElementsByClassName('form-1')[0].style.display = 'none'
		document.getElementsByClassName('form-2')[0].style.display = 'none'
		document.getElementsByClassName('form-3')[0].style.display = 'block'
	}
}
function closeForm(){
	document.getElementsByClassName('registeration-form')[0].style.display = 'none'
	document.getElementsByClassName('form-1')[0].style.display = 'block'
	document.getElementsByClassName('form-2')[0].style.display = 'none'
	document.getElementsByClassName('form-3')[0].style.display = 'none'
	document.getElementsByClassName('cm-header-wrap')[0].style.filter = 'brightness(100%)'
	document.getElementsByClassName('comapny-logo')[0].style.filter = 'brightness(100%)'
	document.getElementsByClassName('sidebar')[0].style.filter = 'brightness(100%)'
	document.getElementsByClassName('caro')[0].style.filter = 'brightness(100%)'
	document.getElementsByClassName('popular-exams')[0].style.filter = 'brightness(100%)'
}