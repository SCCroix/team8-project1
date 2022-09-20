var map;
var destinations = [];

locationSettings = {
  "Chicago, IL": {center: {lat: 41.878, lng: -87.629}, zoom: 8},
  "Los Angeles, CA" : {center: {lat: 34.052, lng: -118.243}, zoom: 8},
  "San Francisco, CA" : {center: {lat: 37.775, lng: -122.419}, zoom: 8},
  "New York City, NY" :{center: {lat: 40.7128, lng: -74.006}, zoom: 8},
  "Miami, FL" : {center: {lat: 25.762, lng: -80.192}, zoom: 8},
  "Dallas, TX" :{center: {lat: 32.777, lng: -96.797}, zoom: 8},
}

// This sets the default map settings
var mapElement = document.getElementsByClassName("map")[0]
var mapSettings = {
  center: {lat: 37.090, lng: -95.7129},
  zoom: 3
}

function initMap() {
  let map = new google.maps.Map(mapElement, mapSettings);
}

// Event listeners
const addLocationButton = document.getElementById("dropbtn");
addLocationButton.addEventListener("click", addLocationToList)
addLocationButton.addEventListener("click", hideDefaultCard)

function addLocationToList() {
  let locationName = document.getElementById("destination").value;
  destinations.push(locationName);
  
  // Copy default location card
  let newLocationCard = document.getElementById("defaultCard").cloneNode(true);
  newLocationCard.id = "destinationCard".concat(destinations.length);

  //Add Location card to list and display it
  document.getElementById("locationList").appendChild(newLocationCard);
  newLocationCard.style.display = "block";

  // Location card title
  let title = newLocationCard.getElementsByClassName("locationCardTitle")[0];
  title.innerText = locationName;

  // Location text
  let locationText = newLocationCard.getElementsByClassName("locationText")[0];
  locationText.innerText = "What a lovely location!\n\nHere is the weather you can expect if you travel to this location in the next ten days";
  
  // Creating the new location map
  // First need to change ID to remove duplicate of default
  let newMapID = "map".concat(destinations.length);
  newLocationCard.getElementsByClassName("map")[0].id = newMapID;

  // set new map settings to pass to api
  mapElement= document.getElementById(newMapID);
  mapSettings = locationSettings[locationName];
  initMap();


  // Build selector for weather widget
  weatherWidgetID = newMapID.concat("Weather")
  console.log(weatherWidgetID)
  newLocationCard.getElementsByClassName("weatherWidget")[0].id = weatherWidgetID;

  // Get info for the widget
  window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
  window.weatherWidgetConfig.push({
      selector: "#".concat(weatherWidgetID),
      apiKey: "MEGF6BW3ZLT8DK3BGKGSQMH7F", //Sign up for your personal key
      location: locationName, //Enter an address
      unitGroup: "us", //"us" or "metric"
      forecastDays: 5, //how many days forecast to show
      title: locationName, //optional title to show in the 
      showTitle:true, 
      showConditions:true
  });

  //Anon function to generate the widget
  (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
  
}

//Hide the default card if another card has been added
function hideDefaultCard() {
  if (destinations.length > 0) {
    document.getElementById("defaultCard").style.display = "none";
  } else {
    document.getElementById("defaultCard").style.display = "block";
  }
}


