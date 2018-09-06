$(function(){
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},3000);
	});
	$('.statistic-counter').counterUp({
		delay: 10,
		time: 2000
	});
	$('body').scrollspy({ target: '#navbar-example' });
});
$(function() {
	$('.simplefilter btn-md').click(function() {
		$('.simplefilter btn-md').removeClass('active');
		$(this).addClass('active');
	});
});
$(function() {
	var f = $('.filtr-container').filterizr({ controlsSelector: '.fltr-controls' });
	window.filterizr = f;
});
$('.col-map').click(function(){
	$('.text').toggle();
	$('.map').show();
});
$(window).scroll(function () {
	if ($(this).scrollTop() > 500) {
		$('.scrollup').fadeIn('slow');
	} else {
		$('.scrollup').fadeOut('slow');
	}
});
$('.scrollup').click(function () {
	$("html, body").animate({scrollTop: 0}, 1500);
	return false;
});