// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Brooklyn, NY',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = weather.temp+'&deg; F / '+weather.alt.temp+'&deg; C';
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html(error);
    }
  });
});

function openPopup(element) {
  $(element).fadeIn();
}

function closePopup() {
  $(".popup").fadeOut();
}
