var map;


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}


// Add location selected to the list.

const addLocationButton = document.getElementById("dropbtn");
addLocationButton.addEventListener("click", addLocationToList)

function addLocationToList() {
  let location = document.getElementById("destination").value;
  let newitem = document.createElement("h1");
  newitem.innerText = location;
  document.getElementById("locationList").appendChild(newitem);

}