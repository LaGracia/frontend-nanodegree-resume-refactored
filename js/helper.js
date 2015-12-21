/* These are HTML strings. JavaScript functions from resumeBuilder.js replace all placeholder text here, such as %data%. */

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="role">%data%</span><hr/>';

var HTMLmobile = '<li class="flex-item"><span class="red-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="red-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="red-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="red-text">github</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="red-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbiopic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMessage = '<span class="welcome-message white-text">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance</h3><ul id="skills"></ul>';
var HTMLskills = '<li class="flex-item" id="skill-list"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#" target="_blank">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="%url%" target="_blank">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLpastprojectStart = '<div class="past-project-entry"></div>';
var HTMLpastprojectTitle = '<a href="%url%" target="_blank">%data%</a>';
var HTMLpastprojectDates = '<div class="date-text">%data%</div>';
var HTMLpastprojectDescription = '<p><br>%data%</p>';
var HTMLpastprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#" target="_blank">%data%';
var HTMLschoolDegree = ' - %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineCourses = '<h3>Online Courses</h3>';
var HTMLonlineTitle = '<a href="#" target="_blank">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#" target="_blank">%data%</a>';

var googleMap = '<div id="map"></div>';


/* The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2. */

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});


/* Custom Google Map. See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference */

// declares a global map variable
var map;

// initializes map with all the below features when page is loaded
function initializeMap() {

  // declares a global locations variable
  var locations;

  // hides Google Maps controls such as zoom and street view
  var mapOptions = {
    disableDefaultUI: true
  };

  // appends googleMap var to #mapDiv in resumeBuilder.js., to display the map
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  // returns an array of every location string from the four JSONs
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations
    for (var school in education.schools) {

      // filters out inherited properties from parent objects, if any
      if (education.schools.hasOwnProperty(school)) {

        // appends each school location to the locations array
        locations.push(education.schools[school].location);
      }
    }

    // iterates through work locations
    for (var job in work.jobs) {

      // filters out inherited properties from parent objects, if any
      if (work.jobs.hasOwnProperty(job)) {

        // appends each work location to the location array
        locations.push(work.jobs[job].location);
      }
    }

    return locations;
  }

  /* The function createMapMarker(placeData) reads Google Places search results to create map pins. placeData is the object returned from these search results that contains information about each single location. */

  function createMapMarker(placeData) {

    /* The following saves the location data retrieved to local variables. */

    // latitude from the place service
    var lat = placeData.geometry.location.lat();

    // longitude from the place service
    var lon = placeData.geometry.location.lng();

    // name of the place from the place service
    var name = placeData.formatted_address;

    // current boundaries of the map window
    var bounds = window.mapBounds;

    // pin object that marks each location on the map
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // pop-up window containing the name of each location
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // opening of the info window when you click on a pin in the map
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    /* This is where the pin actually gets added to the map. */

    // takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));

    // fits the map to the new marker
    map.fitBounds(bounds);
    
    // centers the map
    map.setCenter(bounds.getCenter());
  }

  /* This function makes sure the search returned results for a location. If so, it creates a new map marker for that location. */

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /* This function takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location. */

  function pinPoster(locations) {

    /* This creates a Google place search service object. PlacesService does the work of actually searching for location data. */

    var service = new google.maps.places.PlacesService(map);

    // iterates through the locations array
    for (var place in locations) {

      // filters out inherited properties, if any
      if (locations.hasOwnProperty(place)) {

        // creates a search object for each location
        var request = {
          query: locations[place]
        };

        /* This actually searches the Google Maps API for location data and runs the callback function with the search results after each search. */

        service.textSearch(request, callback);
      }
    }
  }

  // sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // defines an array of location strings returned from locationFinder()
  locations = locationFinder();

  // creates pins on the map for each location in the locations array
  pinPoster(locations);
}

// calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// listens for resizing of the window and adjusts map bounds
window.addEventListener('resize', function(e) {
  
  // makes sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});


/* To try to exceed project expectations, I added a floating “Back to Top” button by adapting code from two websites (cotswoldphoto and html-tuts). */

$(window).scroll(function () {
  if ($(this).scrollTop() !== 0) {
    $('#toTop').fadeIn('slow');
  } else {
    $('#toTop').fadeOut('slow');
  }
});

$('#toTop').click(function() {
    $('html, body').animate( {
      scrollTop: 0
    }, 600);
        return false;
});


/* To add smooth scrolling to internal anchor links, as suggested by the first code reviewer, I added the following from sycha.com. A "scroll" class had to be added to the links in index.html. */

$(document).ready(function($) {
 
  $(".scroll").click(function(event) {   
    event.preventDefault();
    $('html,body').animate( {
      scrollTop: $(this.hash).offset().top
    }, 500);
  });
});

$('html,body').animate( {
  scrollTop: $('[name="'+this.hash.substring(1)+'"]').offset().top
}, 500);
