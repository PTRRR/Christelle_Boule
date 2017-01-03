<?php include("./includes/head.inc"); ?>

<div id="about-container">
	<div class="contact row">
		<div class="mail">
			<a href="mailto:<? echo $page->about_mail; ?>">
				<? echo $page->about_mail; ?>
				<div class="underline"></div>
			</a>
		</div>
		<div class="phone">
			<p style = "letter-spacing: 1px"><? echo $page->about_phone; ?></p>
		</div>
	</div>

	<div id="text-column" class = "row">
		<? echo $page->about_text; ?>
	</div>

	<div class="exibitions row">
		<h2 class = "row-title">Exhibitions</h2>
		<? foreach ($page->about_exibitions_list as $key => $exibition) : ?>
			<p><? echo $exibition->about_exibition; ?></p>
		<? endforeach; ?>
	</div>

	<div class="publications row">
		<h2 class = "row-title">Publications</h2>
		<? foreach ($page->about_publications_list as $key => $publication) : ?>
			<p><? echo $publication->about_publication; ?></p>
		<? endforeach; ?>
	</div>

	<div class="credits row">
		<h2 class = "row-title">Credits</h2>
		<p style = "display: inline-block; margin-right: 6px">Website by</p><a href="http://pietroalberti.ch/" target = "_blank" style = "display: inline-block">Pietro Alberti <div class = "underline"></div></a>
		<br>
		<p style = "display: inline-block">Typeface</p>
		<a style = "display: inline-block" href="http://optimo.ch/"  target = "_blank">
			Plain
			<div class = "underline"></div>
		</a>  
		<p style = "display: inline-block">by François Rappo</p>
	</div>
</div>

<?php include("./includes/custom-scripts.inc"); ?>
<script>
	$('#about-container').css({
		'opacity': 1,
	});
</script>
<?php include("./includes/foot.inc"); ?>