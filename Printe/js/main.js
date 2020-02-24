/* ------------ Add map ------------ */

let map;
function initMap() {
	/* Map position */
	let myPosition = {
		lat: 55.787622, lng: 37.603122
	}
	let myLocation = {
		lat: 55.8094339, lng: 37.6626004
	}
	/* Map desing */
	let desing = [
		{
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"saturation": 36
				},
				{
					"color": "#000000"
				},
				{
					"lightness": 40
				}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"color": "#000000"
				},
				{
					"lightness": 16
				}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 20
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 17
				},
				{
					"weight": 1.2
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 20
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 21
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 17
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 29
				},
				{
					"weight": 0.2
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 18
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 16
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 19
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 17
				}
			]
		}
	]
	/* Map options */
	let myOptions = {
		center: myLocation,
		zoom: 12,
		styles: desing
	}
	/* New map */
	map = new google.maps.Map(document.getElementById('map'), myOptions);

	/* Map marker */
	let marker = new google.maps.Marker({
		position: myPosition,
		map: map,
		icon: 'img/icons/mark.svg'
	});

}


// const array = [5, 4, 3, 2, 1];

// for(let i = 0; i < array.length; i++) {
// 	const it = array[i];
// 	console.log(it);
// }

// array.forEach((it) => {	
// 	console.log(it);
// })

// for (const it of array) {
// 	console.log(it);
// }

// const numbers = [5, 4, 3, 2, 1];

// numbers.find((it) => it % 2 === 0)