<?php include("./includes/head.inc"); ?>

<div id="project-container">
	<div class="slider">
		<div class="title">
			<h1 class = "big-text">
				<? echo $page->title; ?>
				<div class="underline"></div>
			</h1>
			<span class = "sub-title"><? echo $page->sub_title; ?></span>
		</div>
		<p class = "cursor">→</p>
		<div class="swiper-container">
			<div class="slider-nav">
				<div class="arrow-left"><p>→</p></div>
				<div class="arrow-right"><p>→</p></div>
			</div>
			<div class="swiper-wrapper">
				<? foreach ($page->slider as $key => $img) : ?>
					<div class="swiper-slide" style="background-image:url(<? echo $img->url; ?>)"></div>
				<? endforeach; ?>
			</div>
		</div>
	</div>

	<div class="info">
		<div class="close-button">
			<div class = "cross">×</div>
		</div>
		<p class = "description"><? echo $page->text; ?></p>
	</div>
	<div class="info-button">
		<h4>
			Info
			<div class="underline"></div>
		</h4>
	</div>
</div>

<?php include("./includes/project-scripts.inc"); ?>
<?php include("./includes/foot.inc"); ?>