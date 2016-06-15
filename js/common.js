$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	

	//show-menu
	$( ".trigger" ).click(function() {
	  $( ".head_menu ul" ).slideToggle( "slow", function() {
	    // Animation complete.
	  });
	});

	//tabs
	$('.nav li a').click(function(event){
        event.preventDefault();
        $('.nav li a').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        $($(this).attr('href')).show();
    });

});