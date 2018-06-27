var userTime = new Date(Date.now());
var utcTime = userTime.getUTCHours();
var morningZones = [];
var nightZones = [];
var nightNames = [];
var morningNames = [];
let zones = {
	"-12": "Us Minor Outlying Islands",
	"-11": "American Somoa",
	"-10": "Hawaii",
	"-9": "West Alaska",
	"-8": "Anchorage",
	"-7": "Los Angeles",
	"-6": "Guatemala City",
	"-5": "Mexico City",
	"-4": "New York",
	"-3": "Buenos Aires",
	"-2": "Most of Greenland",
	"-1": "Cabo Verde",
	"0": "Iceland",
	"1": "London",
	"2": "Brussels",
	"3": "Moscow",
	"4": "Dubai",
	"5": "Pakistan",
	"6": "Bangladesh",
	"7": "Jakarta",
	"8": "Beijing",
	"9": "Tokyo",
	"10": "Melbourne",
	"11": "A small part of Russia",
	"12": "Most of New Zealand",
	"13": "Tonga",
	"14": "Christmas Island"
};

for (i = -12;i < 15; i++){
	if (utcTime + i % 24 < 11 && utcTime + i % 24 > 5) {
		morningZones.push(i);
	} else {
		nightZones.push(i);
	};
};
for (i = 0; i < morningZones.length; i++){
	morningNames[i] = zones[morningZones[i]];
	mornPage = document.getElementById('morn');
	mornPage.append(morningNames[i]);
	mornPage.innerHTML += '&emsp;';
}
for (i = 0; i < nightZones.length; i++){
	nightNames[i] = zones[nightZones[i]];
	nightPage = document.getElementById('night');
	nightPage.append(nightNames[i]);
	nightPage.innerHTML += '&emsp;';
};
if (userTime.getHours() > 11 || userTime.getHours() < 5) {
	document.getElementById("morn").style.display = "none";
	document.getElementById("night").style.display = "block";
	document.body.style["background-color"] = "#360675";
};
console.log(userTime.getHours());
