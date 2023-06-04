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
	document.getElementsByClassName('form-1')[0].style.display = 'none'
	document.getElementsByClassName('form-2')[0].style.display = 'block'
}
function closeForm(){
	document.getElementsByClassName('registeration-form')[0].style.display = 'none'
	document.getElementsByClassName('cm-header-wrap')[0].style.filter = 'brightness(100%)'
	document.getElementsByClassName('comapny-logo')[0].style.filter = 'brightness(100%)'
	document.getElementsByClassName('sidebar')[0].style.filter = 'brightness(100%)'
	document.getElementsByClassName('caro')[0].style.filter = 'brightness(100%)'
	document.getElementsByClassName('popular-exams')[0].style.filter = 'brightness(100%)'
}