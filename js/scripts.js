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



  $(".popup-slider").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1
  });


});


function openPopup(element) {
  $(element).hide().css("visibility", "visible").fadeIn();
}

function closePopup() {
  $(".popup").fadeOut();
}
