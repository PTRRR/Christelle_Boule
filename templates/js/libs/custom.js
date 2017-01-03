window.onload = function(){
	var contact = document.querySelector('.contact');
	var newRow = document.createElement('div');
	newRow.className = 'web-site row';

	var title = document.createElement('h2');
	title.className = "row-title";
	title.innerHTML = 'Website by ';

	var link = document.createElement('a');
	link.setAttribute('target', '_blank');
	link.href = 'http://pietroalberti.ch/';
	link.innerHTML = 'Pietro Alberti';

	var underline = document.createElement('div');
	underline.className = 'underline';
	link.appendChild(underline);

	title.appendChild(link);
	newRow.appendChild(title);

	contact.appendChild(newRow);
}