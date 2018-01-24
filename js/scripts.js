//business logic
function Places(city, country, year, activities) {
  this.cityName = city;
  this.countryName = country;
  this.whatYear = year;
  this.whatActivities = activities;
}

Places.prototype.fullPlaces = function() {
  return "City:" + this.cityName + " " + "Country:" + this.countryName + " " +  "Year of Visit:" + this.whatYear + " " + "Activity:" + this.whatActivities;
}

// user interface logic
$(document).ready(function() {
  $("form#new-places").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#new-city").val();
    var inputtedCountry = $("input#new-country").val();
    var inputtedYear = $("input#new-year").val();
    var inputtedActivity = $("input#new-activity").val();

    var newPlace = new Places(inputtedCity, inputtedCountry, inputtedYear, inputtedActivity);

    $("ul#visits").prepend("<li><span class='visits'>"+ newPlace.fullPlaces() + "</span></li>");

    $(".visits").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").prepend(newPlace.cityName);
      $(".city").prepend(newPlace.cityName);
      $(".country").prepend(newPlace.countryName);
      $(".year").prepend(newPlace.whatYear);
      $(".activity").prepend(newPlace.whatActivities);
    });

    $("input#new-city").val("");
    $("input#new-country").val("");
    $("input#new-year").val("");
    $("input#new-activity").val("");
  });
});
