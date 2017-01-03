<?php include("./includes/head.inc"); ?>

<?
	$projects = $pages->find("template=project, sort=sort");
?>

<div id="projects-preview-container">
	<? foreach ($projects as $key => $project) : ?>
		<div class="project">
			<div class="text">
				<a class = "big-text" href="<? echo $project->url; ?>"><? echo $project->title; ?>
					<div class="underline"></div>
				</a>
				<span class = "sub-title"><? echo $project->sub_title; ?></span>
			</div>
			<img class = "preview" src="<? echo $project->image->url; ?>">
		</div>
	<? endforeach; ?>
</div>

<?php include("./includes/custom-scripts.inc"); ?>
<?php include("./includes/foot.inc"); ?>