var map;


function initMap() {
	// Constructor creates a new map - only center and zoom are required
	map = new google.maps.Map(document.getElementById('map'), {
		// Showing Bologna
		center: {lat: 44.494887, lng: 11.3426163},
		zoom: 13

	});

	var casalecchio = {lat:44.47833857, lng: 11.27706483};
	// Marker that shows The Casalecchio library, Casa della Conoscenza
	var marker = new google.maps.Marker ({
		position: casalecchio,
		map: map,
		title: 'First Marker!'
	});
}