function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 51.870022, lng: -4.105435 },
  });

  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
 
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
  { lat: 51.869867, lng: -4.105111 },
  { lat: 51.870190, lng: -4.105309 },
  
];

