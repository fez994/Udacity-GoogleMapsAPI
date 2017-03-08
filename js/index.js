var map;


function initMap() {
	// Constructor creates a new map - only center and zoom are required
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 44.494887, lng: 11.3426163},
		zoom: 13

	});
}