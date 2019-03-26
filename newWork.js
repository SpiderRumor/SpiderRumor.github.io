const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

function filter(name) {
	var hiddenTerm = name;
	var sections = document.getElementsByClassName(hiddenTerm);
	var button = document.getElementById(hiddenTerm);
	for (var i=0;i < sections.length; i++){
		if (sections[i].style.display == 'none') {
			sections[i].style.display = 'block';
		}
		else {
			sections[i].style.display = 'none';
		};
	};
	if (button.style.color == 'black'){
		button.style.color = 'gray';
	}
	else {
		button.style.color = 'black';
	}
};
