"use strict";

(function(){

	//Store the whole page in a variable.

	var page = $('html, body');

	//Is mobile is true if the screen width is smaller than 850px

	var isMobile = $(page).width() < 850 ? true : false;

	//wrapper is the main container.

	var wrapper = $("#wrapper");

	//First sroll of 1px to make iOS browser bar desapear (dosen't work....).

	page.scrollTop(1);
	var offsetScroll = 0;

	//Get all post loaded in the page.
	//They all have a "home-post" class.

	var posts = page.find(".home-post");

	posts.each(function(){

		//Store current scope in variable to avoid binding everywhere.
		//The scope is here the post itself.

		var scope = this;

		//Get the loading animation that is displayed until all images are fully loaded.

		var loading_animation = $(scope).find(".spinner");

		//Get the ratio of the post and store it in the post object.

		var c_ratio = $(scope).width() / $(scope).height();
		scope.c_ratio = c_ratio;

		//The image display is a div with the image as background.

		var image_display = $(scope).find(".img-display");

		//Get the background image url.

		var imageSrc = image_display[0].style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];

		//Make an image object to detect when the image is loaded.

		var bg_image = new Image();
		bg_image.src = imageSrc;

		//Onload event.

		$(bg_image).load(function(){
			
			//Store image settings in the post object. Here the variable scope is a reference to the post object defined before.

			scope.bg_padding = 75;
			scope.bg_dimensions = { width: bg_image.width, height: bg_image.height };
			scope.bg_ratio = bg_image.width / bg_image.height;
			scope.orientation = scope.bg_ratio <= 1 ? "VERTICAL" : "HORIZONTAL";
			scope.image_display = image_display;

			//Recompute the post ratio.

			scope.c_ratio = ($(scope).width() - scope.bg_padding * 2) / ($(scope).height() - scope.bg_padding * 2);

			//Set the background size according to the comparison between background and the post ratio.

			if(scope.c_ratio <= scope.bg_ratio){
				var width = $(scope).width() - scope.bg_padding * 2;
				var height = ($(scope).width() - scope.bg_padding * 2) / scope.bg_ratio;

				if(window.innerWidth > 560){
					scope.image_display.css({
						'opacity': 1,
						'background-size': width + 'px ' + height + 'px',
					});
				}

				//Remove loading animation.

				loading_animation.fadeOut(200);

			}else{
				var width = ($(scope).height() - scope.bg_padding * 2) * scope.bg_ratio;
				var height = $(scope).height() - scope.bg_padding * 2;
				if(window.innerWidth > 560){
					scope.image_display.css({
						'opacity': 1,
						'background-size': width + 'px ' + height + 'px',
					});
				}

				//Remove loading animation.

				loading_animation.fadeOut(200);

			}
		});
	});

	//Recompute the positions of differents objects when the page is resized.

	$(window).resize(function(){

		isMobile = $(page).width() < 850 ? true : false;

		page.css({
			'height': window.innerHeight,
		});

		posts.each(function(){
			var scope = this;
			scope.c_ratio = ($(scope).width() - scope.bg_padding * 2) / ($(scope).height() - scope.bg_padding * 2);
			if(scope.c_ratio < scope.bg_ratio){
				var width = $(scope).width() - scope.bg_padding * 2;
				var height = ($(scope).width() - scope.bg_padding * 2) / scope.bg_ratio;
				if(window.innerWidth > 560){
					scope.image_display.css({
						'opacity': 1,
						'background-size': width + 'px ' + height + 'px',
					});
				}
			}else{
				var width = ($(scope).height() - scope.bg_padding * 2) * scope.bg_ratio;
				var height = $(scope).height() - scope.bg_padding * 2;

				if(window.innerWidth > 560){
					scope.image_display.css({
						'opacity': 1,
						'background-size': width + 'px ' + height + 'px',
					});
				}
			}
		});
	});

	//Return to top when finished scrolling

	$(window).scroll(function(){

		if(!isMobile){
			if(window.innerWidth > 560){
				if($(window).scrollTop() >= (posts.length - 1) * window.innerHeight){
					$(window).scrollTop(1);
					offsetScroll = 1;
				}else if($(window).scrollTop() <= 0){
					$(window).scrollTop((posts.length - 1) * window.innerHeight - 1);
					offsetScroll = (posts.length - 1) * window.innerHeight - 1;
				}
			}
		}
		
	});

	wrapper.on('click', function(){
		if(!isMobile){
			offsetScroll = Math.floor($(window).scrollTop() / window.innerHeight) * window.innerHeight + window.innerHeight;
			page.animate({ scrollTop: offsetScroll + "px" });			
		}
	});

})();