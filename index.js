mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcm9tZWRhMHJnIiwiYSI6ImNqbGt2ZnhmZjBxeWczcHFuYzk4NzY0YW4ifQ.UzT_nIl1WQInw5KGHzEZjw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-79.4512, 43.6568],
    zoom: 13
});

map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));