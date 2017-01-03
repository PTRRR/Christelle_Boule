    <script>
		var open = false; 
		$('#nav-icon3').click(function(){
			$(this).toggleClass('open');

			if(!open)
				$('#mobile-menu').fadeIn(200);
			else
				$('#mobile-menu').fadeOut(200);

			open = !open;
		});

		$(window).resize(function(){
			if(open){
				$('#nav-icon3').toggleClass('open');
				$('#mobile-menu').fadeOut(200);
			}
			open = false;
		});
	</script>

	<script>
	  	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	
	  	ga('create', 'UA-80197330-1', 'auto');
	  	ga('send', 'pageview');
	</script>
    </body>
</html>