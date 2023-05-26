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