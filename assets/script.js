var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

const addLocationButton = document.getElementById("dropbtn");
addLocationButton.addEventListener("click", addLocationToList)

function addLocationToList() {
  console.log(document.getElementById("destination"))
}