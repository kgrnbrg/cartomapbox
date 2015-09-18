L.mapbox.accessToken = 'pk.eyJ1Ijoia2dybmJyZyIsImEiOiJmU1V5R3JzIn0.n76VCeUTK4h4QAo2eZGNrg';
var map = L.mapbox.map('map', 'kgrnbrg.4634736b').setView([31.245232, 121.556225], 12);

var layers =  L.mapbox.tileLayer('kgrnbrg.ncp2jc8e');
layers.addTo(map);

cartodb.createLayer(map, 'https://imamaps.cartodb.com/api/v2/viz/3883d6c2-584d-11e5-a8d3-0e9d821ea90d/viz.json').addTo(map)
        .on('done', function(layer) {
            layer.setZIndex(10);
        });

        L.control.layers(layers).addTo(map);

features.on('ready', function() {
  	map.fitBounds(features.getBounds());
});