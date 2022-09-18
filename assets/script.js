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
  let location = document.getElementById("destination").value;
  
  // Create location card
  let locationCard = document.createElement("div")
  locationCard.classList.add("locationCard")

  // Location card title
  let title = document.createElement("h1");
  title.innerText = "You've added " + location + " to your itinerary";
  title.classList.add("locationCardTitle");
  locationCard.appendChild(title);

  

  //Add Location card to list
  document.getElementById("locationList").appendChild(locationCard);

}