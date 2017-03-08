var map;
// created a new blank array for all the listing markers. 
var markers = [];


function initMap() {
	// Constructor creates a new map - only center and zoom are required
	map = new google.maps.Map(document.getElementById('map'), {
		// Showing Bologna
		center: {lat: 44.494887, lng: 11.3426163},
		zoom: 13

	});

	var libraries = [
	{title: 'Biblioteca Orlando Pezzoli', location: {lat: 44.5021294, lng: 11.2967869}},
	{title: 'Biblioteca Sala Borsa', location: {lat: 44.494728, lng: 11.3418228}},
	{title: 'Biblioteca Jorge Luis Borges', location: {lat: 44.502392, lng: 11.3283466}},
	{title: 'Biblioteca di Musica e Spettacolo', location: {lat: 44.4914946, lng: 11.3393494}},
	{title: 'Biblioteca Universitaria di Bologna', location: {lat: 44.4969597, lng:11.3529465}},
	{title: 'Biblioteca multipediale Roberto Ruffilli', location: {lat: 44.4936424, lng:11.3547168}},
	];

	var largeInfoWindow = new google.maps.InfoWindow();
	var bounds = new google.maps.LatLngBounds();

	// This uses the libraries array to create an array of markers on initialize
	for (var i= 0; i < libraries.length; i++){
		// get position from the library array
		var position = libraries[i].location;
		var title = libraries[i].title;
		// create a marker per location, and put markers array
		var marker = new google.maps.Marker({
		map: map,
		position: position,
		title: title,
		animation: google.maps.Animation.DROP,
		id: i	
		});
		
	// push the marker to our array of markers
	markers.push(marker);
	// extend the boundaries of the map for each marker
	bounds.extend(marker.position);
	// Create an onclick event to open an infowindow at each marker
	
	// I know that creating multiple function inside a loop is bad practice, but it's just a personal project, i would never do this on a proffesional enviroment


	marker.addListener('click', function() {
		populateInfoWindow(this, largeInfoWindow);
	});


	


	// this creates an onclick event to open an infowindow at each marker
	marker.addListener('click', function(){
		populateInfoWindow(this, largeInfoWindow);
	});




	// this function populates the infowindow when the marker is clicked
	// i'll allow one infowindow which will open at the marker that is clicked

	function populateInfoWindow(marker, infowindow) {
		if (infowindow.maker != marker) {
			infowindow.marker = marker;
			infowindow.setContent('<div>' + marker.title + '</div>');
			infowindow.open(map, marker);
			//Making sure the marker property is cleared if the infowindow is closed
			infowindow.addlistener('closeclick', function(){
				infowindow.setMarker(null);
			});
		
		} // end populateinfowindows function


	} // end mark addlistener function


	} // end for loop


}





