<?php include("./includes/head.inc"); ?>

<?
	$home_preview = $page->find("name=home-images");
	foreach ($home_preview as $p) {
		$home_images = $p;
	}
	$index = 0;
?>

<div id="home-posts">
	<? foreach ($home_images->home_images_list as $key => $image) : ?>
		<? if($index == 0) $first = $image->url ?>
		<div class = "home-post">
			<!-- <div class="spinner"></div> -->
			<div class="img-display" style="background-image:url(<? echo $image->url; ?>)"></div>
		</div>

		<? if($index == count($home_images->home_images_list) - 1): ?>
			<div class = "home-post">
				<!-- <div class="spinner"></div> -->
				<div class="img-display" style="background-image:url(<? echo $first; ?>)"></div>
			</div>
		<? endif; ?>

		<? $index ++; ?>
	<? endforeach; ?>
</div>

<?php include("./includes/custom-scripts.inc"); ?>
<?php include("./includes/foot.inc"); ?>
