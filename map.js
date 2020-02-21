var lat = "";
var lng = "";

function initMap() {
  var restaurant = { lat: 39.9526, lng: -75.1652 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: restaurant,
    disableDefaultUI: true
  });
}

function mapLoc() {
  console.log("working");
  var location = $(this).attr("data-name");
  console.log(location);
  var queryLOC =
    "https://developers.zomato.com/api/v2.1/restaurant?res_id=" +
    location +
    "&apikey=14ff5e7acc0cefd1cb956054c40f30fc";

  $.ajax({
    url: queryLOC,
    method: "GET"
  }).then(function(response) {
    lat = parseFloat(response.location.latitude);
    console.log(lat);
    lng = parseFloat(response.location.longitude);
    console.log(lng);
    var restaurant = { lat: lat, lng: lng };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: restaurant,
      disableDefaultUI: true
    });
    var marker = new google.maps.Marker({ position: restaurant, map: map });
  });
}
$(document).on("click", ".locate", mapLoc);
/*
addMarker({ lat: lat, lng: lng });
function addMarker(coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: map
  });
  var infoWindow = new google.maps.InfoWindow({
    content: "<h5>restaurant name</h5>"
  });
  marker.addListener("click", function() {
    infoWindow.open(map, marker);
  });
}
*/
