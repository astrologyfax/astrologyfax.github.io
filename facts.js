$(document).ready(function() {
	var y = new Date().getFullYear();
	var m = new Date().getMonth();
	var d = new Date().getDate();
	if (d == 18 && m == 1 && y == 2019) {
		document.getElementById("fact").textContent = "Pisces hate when they get a text saying \"Wussup stranger\"... Like for real!!! phones work both ways";
		document.getElementById("fact-source").href = "https://21facts.net/interesting-facts-about-pisces/";
	}
});