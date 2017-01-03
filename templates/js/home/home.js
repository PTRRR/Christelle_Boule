"use strict";

(function(){

	//Store the whole page in a variable.

	var page = $('html, body');

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

	//Detect if mobile.
	//Browser sniffing --> bad practice... but works here.
	//Browser detection in order to disable custom scroll behavior.

	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

	if(!isMobile){

		//Return to top when finished scrolling

		$(window).scroll(function(){
			if(window.innerWidth > 560){
				if($(window).scrollTop() >= (posts.length - 1) * window.innerHeight){
					$(window).scrollTop(1);
					offsetScroll = 1;
				}else if($(window).scrollTop() <= 0){
					$(window).scrollTop((posts.length - 1) * window.innerHeight - 1);
					offsetScroll = (posts.length - 1) * window.innerHeight - 1;
				}
			}
		});

		wrapper.on('click', function(){
			offsetScroll = Math.floor($(window).scrollTop() / window.innerHeight) * window.innerHeight + window.innerHeight;
			page.animate({ scrollTop: offsetScroll + "px" });
		});
	}

})();