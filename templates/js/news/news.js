"use strict";

(function(){
	var url = "/news-ajax/";
	var loadStep = 5;
	var isLoading = false;
	var noMorePosts = false;

	var wrapper = $('#wrapper');
	var news_container = wrapper.find('#news-container');

	$(window).scroll(function(){
		if($(window).scrollTop() + window.innerHeight >= news_container.height() && !isLoading && !noMorePosts){
			loadNews($('.post').length, loadStep);
		}
	});

	//Load first posts
	function loadFirstPosts(start, limit){
		loadNews(start, limit, function(){
			if($(news_container).height() < window.innerHeight){
				loadFirstPosts($(".post").length, 1);
			}
		});
	}

	loadFirstPosts($(".post").length, 1)

	function createPost(data){
		var newPost = document.createElement('div');
		newPost.className = 'post';

		var infos = document.createElement('p');
		infos.className = 'post-infos';
		infos.innerHTML = data.infos;
		newPost.appendChild(infos);

		var lineBreak = document.createElement('br');
		newPost.appendChild(lineBreak);

		var title = document.createElement('h2');
		title.className = 'post-title big-text';
		title.innerHTML = data.title;
		newPost.appendChild(title);

		lineBreak = document.createElement('br');
		newPost.appendChild(lineBreak);

		var image = new Image();
		image.src = data.img[0];
		image.className = 'post-image';
		newPost.appendChild(image);

		image.onload = function(){
			var margin = 10;
			var image_position = (margin + Math.random() * (window.innerWidth - $(image).width() - 2 * margin)) / window.innerWidth * 100;
			$(image).css({
				'left': image_position + '%',
			});

			$(title).mouseenter(function(){
				image.style.opacity = 1;
			}).mouseleave(function(){
				image.style.opacity = 0;
			});
		};	

		var postEnd = document.createElement('div');
		postEnd.className = 'post-end';
		newPost.appendChild(postEnd);

		return newPost;
	}

	//LOAD NEW POSTS WITH AJAX
	function loadNews(start, limit, callback){
		isLoading = true;
		$.ajax({
        	type: "GET",
        	data: {start:start, limit:limit, total_posts: $('.posts').length},
        	url: url,
        	success: function(response){

        		console.log(response);
                if(response){
                    var data = JSON.parse(response);
                    if(Object.keys(data).length > 0){
                    	for(var news in data){
	                    	var newPost = createPost(data[news]);
	                    	news_container[0].appendChild(newPost);

	                    	(function(newPost){
	                    		setTimeout(function(){
	                    			$(newPost).css({
			                    		'opacity': 1,
			                    	});
	                    		}, 50);
	                    	})(newPost);
	                    }
	                    isLoading = false;

	                    if(Object.keys(data).length < limit){
	                    	var element_info = document.createElement('p');
	                    	element_info.innerHTML = 'No More News';
	                    	element_info.style.display = 'none';
	                    	element_info.style.textAlign = 'center';
	                    	element_info.style.fontSize = '22px';
	                    	element_info.style.marginTop = '80px';
	                    	news_container[0].appendChild(element_info);
	                    	setTimeout(function(){
	                    		$(element_info).fadeIn(200);
	                    	}, 10);
	                    	noMorePosts = true;
	                    }

	                    if(callback) callback();
                    }else{
                    	var element_info = document.createElement('p');
	                    element_info.innerHTML = 'No More News';
	                    element_info.style.display = 'none';
	                    element_info.style.textAlign = 'center';
	                    element_info.style.fontSize = '22px';
	                    element_info.style.marginTop = '80px';
	                    news_container[0].appendChild(element_info);
	                    setTimeout(function(){
	                    	$(element_info).fadeIn(200);
	                    }, 10);
                    	noMorePosts = true;
                    }
                    
                }
            }
        });
	}
})();