(function(){
	var wrapper = $("#wrapper");
	var project = $("#project-container");
	var cursor = project.find(".cursor");
	var title = project.find(".title");
	var sub_title = title.find(".sub-title");
	var slider = project.find(".slider");
	var slider_active = true;
	var swiper_container = project.find(".swiper-container");
	var slides = swiper_container.find(".swiper-slide");
	var info = project.find(".info");
	var info_active = false;
	var info_button = project.find(".info-button");
	var info_cross = info.find(".cross");
	var cursorHidden = true;

	function layout_setup(){
		// project.css({
		// 	'height': window.innerHeight,
		// });
		if(window.innerWidth > 850){
			title.css({
				'left': (window.innerWidth - title.width()) / 2,
			});

			info.css({
				'top': (wrapper.height() - info.outerHeight()) / 2,
				'left': (wrapper.width() - info.outerWidth()) / 2
			});
		}else{
			title.css({
				'left': 0,
			});

			info.css({
				'top': 70,
				'left': 0
			});
		}

		sub_title.css({
			'right': -sub_title.width() - 20,
		});

		swiper_container.css({
			'top': (wrapper.height() - swiper_container.height()) / 2,
		});
	}

	layout_setup();
	project.css({
		'opacity': 1,
	});
	
	var swiper = new Swiper(swiper_container, {
		loop: true,
		debugger: true,
		effect: 'fade',
		fade: {
		  	crossFade: true
		}
	});
	
	//Events
	var cursorOn = false;
	slider.mouseenter(function(){
		$(this).css({ 'cursor': 'none' });
		cursor.fadeIn(200);	
	}).mouseleave(function(){
		cursor.fadeOut(200);
	});

	info_button.mouseenter(function(){
		if(window.innerWidth > 850)
		if(!info_active) info.fadeIn(200);
	}).mouseleave(function(){
		if(window.innerWidth > 850)
		if(!info_active) info.fadeOut(200);
	});

	project.mousemove(function(e){
		if(cursorHidden){
			cursor.css({'opacity': 1});
			cursorHidden = false;
		}

		if(window.innerWidth <= 850){
			cursor.css({'display': 'none'});
		}

		if(e.clientX > window.innerWidth / 2){
			cursor.css({
				'left': e.clientX - cursor.width() / 2,
				'top': e.clientY - cursor.height() / 2,
				'-webkit-transform' : 'rotate('+ 0 +'deg)',
				'-moz-transform' : 'rotate('+ 0 +'deg)',
				'-ms-transform' : 'rotate('+ 0 +'deg)',
				'transform' : 'rotate('+ 0 +'deg)',
			});
		}else{
			cursor.css({
				'left': e.clientX - cursor.width() / 2,
				'top': e.clientY - cursor.height() / 2,
				'-webkit-transform' : 'rotate('+ 180 +'deg)',
				'-moz-transform' : 'rotate('+ 180 +'deg)',
				'-ms-transform' : 'rotate('+ 180 +'deg)',
				'transform' : 'rotate('+ 180 +'deg)',
			});
		}
	});

	if(window.innerWidth > 850){

		cursor.click(function(e){
			if(!info_active){
				if(e.clientX > window.innerWidth / 2) swiper.slideNext();
				else swiper.slidePrev();
			}else{
				info_active = !info_active;
				info.fadeOut(200);
			}
		});
	}else{
		var lastTouchX = 0;
		document.querySelector('.swiper-container').addEventListener('touchstart', function(e){
			lastTouchX = e.touches[0].clientX;
		});

		swiper_container.on('touchend', function(e){
			if(!info_active){
				if(lastTouchX > window.innerWidth / 2) swiper.slideNext();
				else swiper.slidePrev();
			}else{
				info_active = !info_active;
				info.fadeOut(200);
			}
		});
	}

	info_button.click(function(){
		if(!info_active) info.fadeIn(200);
		else info.fadeOut(200);
		info_active = !info_active;
	});

	info_button[0].addEventListener('touchend', function(){
		if(!info_active) info.fadeIn(200);
		else info.fadeOut(200);
		info_active = !info_active;
	});

	info_cross.click(function(){
		info.fadeOut(200);
		info_active = !info_active;
	});

	info_cross[0].addEventListener('touchend', function(){
		info.fadeOut(200);
		info_active = !info_active;
	});

	$(window).resize(function(){
		layout_setup();
	});

	$('.arrow-left').click(function(){
		swiper.slidePrev();
		alert('msg');
	});

	$('.arrow-right').click(function(){
		swiper.slideNext();
	});
})();