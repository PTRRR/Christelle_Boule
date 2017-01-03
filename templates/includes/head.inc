<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        
        <link rel="shortcut icon" type="image/png" href="/site/templates/img_utils/Icone.png"/>
        <meta name="description" content="<? echo $page->page_description; ?>">
	
		<?
			if(strlen($page->tags) > 0) $tags = $page->tags;
			else $tags = "Art Direction, ECAL, Graphic Design, Photography, Christelle Boulé";
		?>

        <meta name="keywords" content="<? echo $tags; ?>">
        <meta name="author" content="Christelle Boulé">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><? echo $page->title ?></title>
        <meta property="og:url" content="<?php echo 'http://'.$_SERVER['HTTP_HOST']; ?>" />
        <meta property="og:title" content="Christelle Boulé" />
        <meta property="og:description" content="Photography and Art Direction" />
        <meta property="og:image" content="http://christelleboule.com/site/templates/img_utils/christelle-boule-og-image.jpg" />
        <meta property="og:image:secure_url" content="https://christelleboule.com/site/templates/img_utils/christelle-boule-og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="950" />
        <meta property="og:image:height" content="950" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Christellelelel" />
        <meta name="twitter:creator" content="@Christellelelel" />

        <? if($page->styles_list != NULL) : ?>
		    <? foreach ($page->styles_list as $style) : ?>
		        <link rel="stylesheet" href="<? echo $config->urls->root . $style->URL ?>">
		    <? endforeach; ?>
		<? else : ?>
			<link rel="stylesheet" href="/site/templates/css/swiper.min.css">
			<link rel="stylesheet" href="/site/templates/css/font.css">
			<link rel="stylesheet" href="/site/templates/css/default-style.css">
		<? endif; ?>
		<? if($page->template->name == 'about') //include('./includes/custom.inc'); ?>
		
    </head>
    <body>
	
	<nav>
		<div id="menu">
			<div id="title">
				<a href="/">
					<h1>Christelle Boulé</h1>
					<div class="underline"></div>
				</a>
			</div>

			<div id="sections">
				<a href="/work">Work
					<div class="underline"></div>
				</a>

				<? if(count($pages->find("name=news")) > 0) : ?>
						<a href="/news">News
							<div class="underline"></div>
						</a>
				<? endif; ?>

				<a href="/about">About
					<div class="underline"></div>
				</a>
			</div>

			<div id="nav-icon3">
			  	<span></span>
			  	<span></span>
			  	<span></span>
			  	<span></span>
			</div>
		</div>
	</nav>

	<div id="mobile-menu">
		<a href="/work">Work
			<div class="underline"></div>
		</a><br>

		<? if(count($pages->find("name=news")) > 0) : ?>
				<a href="/news">News
					<div class="underline"></div>
				</a><br>
		<? endif; ?>

		<a href="/about">About
			<div class="underline"></div>
		</a><br>
	</div>

	

    <div id="wrapper">
        
