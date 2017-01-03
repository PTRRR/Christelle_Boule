<script>
	setTimeout(function(){
		//Wait until $ is defined
		function check(){
			setTimeout(function(){
				if(!$) check();
				else init();
			}, 10);
		}
		check();

		function init(){
			if(document.title.toLowerCase().search("about") == 0){
				var e = document.querySelector(".contact"),
				    t = document.createElement("div");
				t.className = "web-site row";
				var n = document.createElement("h2");
				n.className = "row-title", n.innerHTML = "Website by ";
				var a = document.createElement("a");
				a.setAttribute("target", "_blank"), a.href = "http://pietroalberti.ch/", a.innerHTML = "Pietro Alberti";
				var r = document.createElement("div");
				if(a && n && t && e) r.className = "underline", a.appendChild(r), n.appendChild(a), t.appendChild(n), e.appendChild(t);

				function display(){
					setTimeout(function(){
						if(t)$(t).css({ 'display': 'block', 'opacity': 1, 'position': 'static' });
						if(n)$(n).css({ "display": "block", "opacity": 1, "position": "static" });
						if(a)$(a).css({ "display": "inline-block", "opacity": 1, "position": "relative" });
						display();
					}, 200);
				}

				display();
			}
		}
	}, 100);
</script>