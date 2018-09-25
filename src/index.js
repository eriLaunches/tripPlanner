var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiamVld29ua2ltIiwiYSI6ImNqbWk1ZGR4OTAxZWczcG1wZ3RodDRqeDUifQ.Lo_5whNTHoAU-9XnG_55oQ';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v10'
});