var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcm9tZWRhMHJnIiwiYSI6ImNqbGt2ZnhmZjBxeWczcHFuYzk4NzY0YW4ifQ.UzT_nIl1WQInw5KGHzEZjw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10'
});
