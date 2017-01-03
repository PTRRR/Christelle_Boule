<?php

	if($config->ajax){

		$start = $_GET['start'];
		$limit = $_GET['limit'];
		$total_posts = $_GET['total_posts'];

		if($pages->count("template=news-post") > $total_posts){
			$posts = $pages->find("template=news-post, sort=sort, start=". $start .", limit=". $limit);

			$json = array();
			$index = 0;
			foreach ($posts as $post) {
				$img = array();
				foreach ($post->news_images as $image) {
					array_push($img, $image->url);
				}

				$newPost = array(
					'title' => $post->title,
					'infos' => $post->news_infos,
					'img' => $img,
				);

				$postIndex = $post->title;
				$json[$postIndex] = $newPost;
				$index ++;
			}
			
			echo json_encode($json);

			return;
		}else{
			return;
		}
	}else if(!$config->ajax){
		$session->redirect("http://christelleboule.com/news/");
	}

?>