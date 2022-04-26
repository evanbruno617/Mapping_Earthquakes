console.log("working");

let map = L.map('mapid').setView([37.6213, -122.3790], 5);

let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
  ];
  L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: '20, 20', 
    dashOffset: '0'

  }).addTo(map);


// We create the tile layer that will be the background of our map.
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });
    
    // Then we add our 'graymap' tile layer to the map.
    streets.addTo(map);
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);