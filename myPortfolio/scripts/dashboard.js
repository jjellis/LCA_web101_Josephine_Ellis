$(function() {

  let $list = $('ul');
  let $newItemForm = $('#newItemForm');

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    let text = $('input[type="text"]').val();
    $list.append(`<li>${text}</li>`);
    $('input[type="text"]').val('');
  });

  $list.on('click', 'li', function() {
    let $this = $(this);
    $this.remove();
  });

});
function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);
window.addEventListener('load', geoFindMe);


/*var latlon document.getElementById("location");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;

  var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
  "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_:KEY";

  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}*/
//counts the number of times the button is clicked
var points = 0;
function game(number) {
  points = points + number;
  document.getElementById("points") .innerHTML = points;
};

/*$("#button").click(function() {
  $("#points")++;
  }*/
/*var basic = 0;
function buybasicupgrade() {
  var basic =  math.floor(20 * math.pow 3.2,basic);
  if (money >= basic)
  basic = basic+0.1;
  points = points - basic;
  document.getElementById("basic") .innerHTML = basic;
  document.getElementById("points") .innerHTML = points;
};
var nextCost = math.floor(20 * math.pow(3.2,basic));
document.getElementById("basic") .innerHTML = nextCost;

window.setInterval(function(){
  "game(basic);
}, 1000);*/

