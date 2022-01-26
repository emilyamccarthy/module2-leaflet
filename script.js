var map = L.map('mapid').setView([-12, -77], 11);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg' 
}).addTo(map);

var marker = L.marker([-12.05, -77.09]).addTo(map);
var circle = L.circle([-12.08, -77.0322], {
    color: 'green',
    fillColor: '#4FB477',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(map);

var polygon = L.polygon([
    [-12.0509, -77.08],
    [-12.0103, -77.06],
    [-12.051, -77.047], 
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a green circle.");
polygon.bindPopup("I am a blue triangle.");

var popup = L.popup()
    .setLatLng([-12.13, -77.09])
    .setContent("I am a standalone popup, alone in the ocean.")
    .openOn(map);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
