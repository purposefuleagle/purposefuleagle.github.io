mapboxgl.accessToken = 'pk.eyJ1IjoicHVycG9zZWZ1bGVhZ2xlIiwiYSI6ImNqdDYyamozYzBhZHAzeXRtbHRxM2oxbTQifQ.pjqLb0tjBEizRprW99OrIg';


var geojson = {
"type": "FeatureCollection",
"features": [
    {
    "type": "Feature",
    "properties": {
    // "iconSize": [100, 100]
    },
    "geometry": {
    "type": "Point",
    "coordinates": [-74.1387714,
    40.7153535
    ]
    }
    },
{
"type": "Feature",
"properties": {
// "iconSize": [50, 50]
},
"geometry": {
"type": "Point",
"coordinates": [
-74.230479,
40.6615888
]
}
},
{
"type": "Feature",
"properties": {
// "iconSize": [50, 50]
},
"geometry": {
"type": "Point",
"coordinates": [
-73.702911,
40.737984
]
}
},
{
"type": "Feature",
"properties": {
// "iconSize": [50, 50]
},
"geometry": {
"type": "Point",
"coordinates": [
-73.840329,
40.667081
]
}
},
{
"type": "Feature",
"properties": {
// "iconSize": [50, 50]
},
"geometry": {
"type": "Point",
"coordinates": [
-74.413941,
40.822396
]
}
}
]
};
 
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v9',
center: [-74.054, 40.753],
zoom: 10
});

 // // disable map zoom when using scroll
map.scrollZoom.disable();
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// add markers to map
geojson.features.forEach(function(marker) {
// create a DOM element for the marker
var el = document.createElement('div');
el.className = 'marker';

// add marker to map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.addTo(map);
});









