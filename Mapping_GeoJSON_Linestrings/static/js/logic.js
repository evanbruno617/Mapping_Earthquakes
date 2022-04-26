console.log("working");

// We create the tile layer that will be the background of our map.
// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

    let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            accessToken: API_KEY
        });

        // Create a base layer that holds both maps.
let baseMaps = {
    Day: light,
    Night: dark
  };
  
  // Create the map object with center, zoom level and default layer.
  let map = L.map('mapid', {
    center: [40.7, -94.5],
    zoom: 4,
    layers: [light]
  })
  
  // Pass our map layers into our layers control and add the layers control to the map.
  L.control.layers(baseMaps).addTo(map);



// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/evanbruno617/Mapping_Earthquakes/main/torontoRoutes.json";
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}
// Creating a GeoJSON layer with the retrieved data.


L.geoJSON(data, {
    style: myStyle,
onEachFeature: function(feature, layer){
  layer.bindPopup("<h2> Airlines: " + feature.properties.airline + "</h2> <hr> <h4> Destination: " + feature.properties.dst + "</h4>");
}
}).addTo(map);
});




