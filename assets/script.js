var map;
var destinations = [];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}


const addLocationButton = document.getElementById("dropbtn");
addLocationButton.addEventListener("click", addLocationToList)
addLocationButton.addEventListener("click", hideDefaultCard)

function addLocationToList() {
  let location = document.getElementById("destination").value;
  destinations.push(location);
  
  // Copy default location card
  let newLocationCard = document.getElementById("defaultCard").cloneNode(true);
  newLocationCard.id = "destinationCard".concat(destinations.length);

  // Location card title
  let title = newLocationCard.getElementsByClassName("locationCardTitle")[0];
  title.innerText = location;

  //Location text
  let locationText = newLocationCard.getElementsByClassName("locationText")[0];
  locationText.innerText = "What a lovely location!\n\nHere is the weather you can expect if you trabel to this location in the next ten days";
  
  //Add Location card to list and display it
  document.getElementById("locationList").appendChild(newLocationCard);
  newLocationCard.style.display = "block"
}

//Hide the default card if another card has been added
function hideDefaultCard() {
  if (destinations.length > 0) {
    document.getElementById("defaultCard").style.display = "none";
  } else {
    document.getElementById("defaultCard").style.display = "block";
  }
}

