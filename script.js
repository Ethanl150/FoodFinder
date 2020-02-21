$("#searchB").on("click", function (event) {
  event.preventDefault();
  $("#results").empty();
  var foodType = $(".expand-search").val().toLowerCase();
  var limit = $("#limit").val();
  var queryURL = "https://developers.zomato.com/api/v2.1/search?q=" + foodType + "&count=" + limit + "&lat=39.9526&lon=-75.1652&radius=1000&apikey=14ff5e7acc0cefd1cb956054c40f30fc"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    for (i = 0; i < limit; i++) {
      var newDiv = $("<div>").css("border-bottom", "2px solid #b3aead")
      newDiv.addClass("result-div")
      var title = $("<a href=" + response.restaurants[i].restaurant.url + " target='_blank'><h1>" + response.restaurants[i].restaurant.name + "</h1></a>")
      title.css("text-decoration", "underline")
      var cuisine = $("<p>" + response.restaurants[i].restaurant.cuisines + "</p>");
	  cuisine.css("font-style", "italic");
      cuisine.css("color", "#a00505");
      var address = $("<p><b>Address:</b> " + response.restaurants[i].restaurant.location.address + "</p>")
      address.attr("data-name", response.restaurants[i].restaurant.R.res_id)
	  address.css("font-style", "italic");
	  address.css("font-size","16pt")
      address.addClass("locate")
      var rating = $("<p><b>Rating:</b> " + response.restaurants[i].restaurant.user_rating.aggregate_rating + "/5 &#11088;</p>")

      if (response.restaurants[i].restaurant.user_rating.rating_text == "Not rated") {
        rating = $("<p><b>Rating:</b> N/A</p>")
      }

      newDiv.append(title, cuisine, address, rating)
      $("#results").append(newDiv)
    }
  })
})