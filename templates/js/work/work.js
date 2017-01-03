"use strict";

(function(){

	var wrapper = $("#wrapper");
	var projects_preview_container = wrapper.find("#projects-preview-container");
	var projects = projects_preview_container.find('.project');

	projects.each(function(){
		var scope = this;
		var text = $(this).find('.text');
		var title = text.find('a');
		var sub_title = text.find('span');
		var preview = $(this).find('.preview');

		//Set sub titles at the right position
		sub_title.css({ 'left': title.width() + 20});

		//Create a new image with the preview source to get an onload callback
		//I don't know why the preview.load callback doesn't work.....
		var image = new Image();
		image.src = preview.attr('src');

		//Set previews at a random position when the image is loaded
		//Encapsulate the image and the preview to keep track of the current ones
		(function(image, preview){
			image.onload = function(){
				var margin = 0; //Margins for the position of the image
				var rVPosition = ((margin + Math.random() * (window.innerHeight - preview.height() - 2 * margin)) / window.innerHeight * 100);
				var rHPosition = ((margin + Math.random() * (window.innerWidth - preview.width() - 2 * margin)) / window.innerWidth * 100);
				preview.css({ 'top': rVPosition + '%', 'left': rHPosition + '%' });
				
				//If the preview is too low align it to the bottom of the projects_preview_container
				// if($(scope).offset().top + preview.height() > window.innerHeight)
				// 	preview.css({ 'bottom': 0, 'left': rHPosition + '%' });
				// else
				// 	preview.css({ 'top': 0, 'left': rHPosition + '%' });
			}
		})(image, preview);
		
		//Events to display the preview
		title.mouseenter(function(){
			preview.css({ 'opacity': 1 });
		}).mouseleave(function(){
			preview.css({ 'opacity': 0 });
		});
	});

	//Set the container visible after the layout is finished
	projects_preview_container.css({ 'opacity': 1 });

})();