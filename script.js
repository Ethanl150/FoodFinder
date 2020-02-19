$(document).foundation();


  $('#expandsearch')
    .on('click', function(event) {
      $("#searchfield").toggleClass("expand-search");

      // if the search field is expanded, focus on it
      if ($("#searchfield").hasClass("expand-search")) {
        $("#searchfield").focus();
      }
    })



