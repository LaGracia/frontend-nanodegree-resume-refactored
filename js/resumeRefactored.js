/* This is a mini-project for the JavaScript Design Patterns unit. 
 * The model contains all necessary data. The octopus defines all 
 * functions that are called by all other functions in the views.
*/

// Wait for document to finish loading before running the enclosed functions
$(function(){

    'use strict';

    // Variables defined below
    var model, octopus, 
        bioView, workView, projectView, educationView, mapView, 
        emptyView, animationView;

    /* ============================================================== */

    model = {
        
        // Data for the bio header and footer
        bio : {
            'name' : 'Lane Graciano',
            'role' : 'Front-End Web Development Padawan',
            'contacts' : {
                'mobile' : '+62 812 1234567',
                'email' : 'lgraci45@gmail.com',
                'github' : 'LaGracia',
                'twitter' : '@lagracity',
                'location' : 'Indonesia'
            },
            'biopic' : 'images/lgraci.jpg',
            'welcomeMessage' : 'To strive, to seek, to find, and not to yield.',
            'skills' : [
                'secondary education', 
                'video transcription', 
                ' web development'
            ]
        },

        // Data arrays for the work section
        work : {
            'jobs' : [
                {
                    'employer' : 'Amara',
                    'position' : 'video transcriptionist',
                    'location' : 'online',
                    'dates' : 'From May 20XX',
                    'description' : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
                    'url' : 'http://amara.org/en/'
                },
                {
                    'employer' : 'ACS',
                    'position' : 'teacher',
                    'location' : 'UAE',
                    'dates' : '20XX-XX',
                    'description' : 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
                    'url' : 'http://acs.sch.ae/'
                },
                {
                    'employer' : 'St. Maur',
                    'position' : 'teacher',
                    'location' : 'Japan',
                    'dates' : '20XX-XX',
                    'description' : 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
                    'url' : 'http://www.stmaur.ac.jp/'
                },
                {
                    'employer' : 'JIS',
                    'position' : 'teacher',
                    'location' : 'Indonesia',
                    'dates' : '19XX-20XX',
                    'description' : 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
                    'url' : 'http://jisedu.or.id/'
                }
            ]
        },

        // Data arrays for the project section
        projects : {
            'recentProjects' : [
                {
                    'title' : 'Website development collaboration',
                    'dates' : 'Ongoing',
                    'description' : 'Website for the JIS Film Festival',
                    'images' : ['images/filmfest.jpg'],
                    'url' : 'http://filmfest.jisedu.or.id'
                },
                {
                    'title' : 'Portfolio page',
                    'dates' : 'October 2015',
                    'description' : 'Portfolio page for a Udacity project',
                    'images' : ['images/portfolio.jpg'],
                    'url' : 'http://codepen.io/lagracia/pen/ZbroLO'
                }
            ],
            'pastProjects' : [
                {
                    'title' : 'Graphic design',
                    'dates' : '2005-14',
                    'description' : 'Sample poster, logo and graphics created for school purposes',
                    'images' : [
                        'images/poster.jpg', 
                        'images/solitude.jpg', 
                        'images/light.jpg', 
                        'images/logo.jpg'
                    ],
                    'url' : 'https://www.flickr.com/photos/tedxyouthatacs/albums/72157657888796203'
                }
            ]
        },

        // Data arrays for the education section
        education : {
            'schools' : [
                {
                    'name' : 'CSU',
                    'location' : 'Australia',
                    'degree' : 'Graduate Diploma of Secondary Education',
                    'major' : ['English'],
                    'dates' : '20XX',
                    'url' : 'http://www.csu.edu.au/'
                },
                {
                    'name' : 'Southern',
                    'location' : 'Connecticut',
                    'degree' : 'Bachelor of Science in Liberal Studies',
                    'major' : ['journalism', ' English', ' photography'],
                    'dates' : '19XX',
                    'url' : 'http://www.southernct.edu/'
                },
                {
                    'name' : 'UI',
                    'location' : 'Idaho',
                    'degree' : 'Bachelor of Science',
                    'major' : ['journalism'],
                    'dates' : '19XX',
                    'url' : 'http://www.uidaho.edu/'
                }
            ],
            'onlineCourses' : [
                {
                    'title' : 'Front-End Web Development',
                    'school' : 'Udacity',
                    'location' : 'online',
                    'dates' : 'Ongoing',
                    'url' : 'http://www.udacity.com'
                },
                {
                    'title' : 'Shakespeare and His World',
                    'school' : 'FutureLearn',
                    'location' : 'online',
                    'dates' : 'Ongoing',
                    'url' : 'http://www.futurelearn.com'
                }
            ]
        }
    };

    /* ============================================================== */

    octopus = {
        
        // Tell all views to load
        init: function() {
            bioView.init();
            workView.init();
            projectView.init();
            educationView.init();
            mapView.init();
            emptyView.init();
            animationView.init();
        },

        // Get data from model for the bio view
        getBio: function() {
            return model.bio;
        },

        // Get contact object from model for the contact lists
        getContacts: function() {
            return model.bio.contacts;
        },

        // Get data from model for the work view
        getWork: function() {
            return model.work;
        },

        // Get data from model for the project view
        getProjects: function() {
            return model.projects;
        },

        // Get data from model for the education view
        getEducation: function() {
            return model.education;
        }
    };

    /* ============================================================== */

    bioView = {
        
        // Load the bio header and call the function that displays it
        init: function() {
            this.render();
        },

        // Display all the elements inside the bio header
        render: function() {

            // Prepare header for bio data
            var bioHeader = $('#header');

            // Tell octopus to get bio data from model
            var bioData = octopus.getBio();

            /* ----------------------------------------------------- */

            // http://www.w3schools.com/jquery/jquery_chaining.asp
            // http://www.w3schools.com/jquery/html_prependto.asp
            // http://www.w3schools.com/jquery/html_insertafter.asp

            // Create and append name, role, and horizontal rule elements
            var formattedName = $('<h1/>')
            .attr('id', 'name')
            .text(bioData.name)
            .prependTo(bioHeader);

            var formattedRole = $('<span/>')
            .attr('id', 'role')
            .text(bioData.role)
            .insertAfter(formattedName);

            $('<hr>').insertAfter(formattedRole);

            /* ----------------------------------------------------- */

            // Prepare existing <ul> elements for contacts in header and footer
            var formattedContacts = $('#topContacts, #footerContacts');

            // Get contacts object from model
            var contacts = octopus.getContacts();

            // http://stackoverflow.com/questions/4079274/how-to-get-an-objects-properties-in-javascript-jquery

            // Run function on the key and value of each contact property
            $.each(contacts, function(key, value) {

                $('<li/>')
                .addClass('flex-item')
                .html('<span class="red-text">' + key + '</span>' + '<span class="white-text">' + value + '</span>')
                .appendTo(formattedContacts);
            });

            /* ----------------------------------------------------- */

            // Create and append biopic and welcome message

            $('<img>')
            .addClass('biopic')
            .attr('src', bioData.biopic)
            .appendTo(bioHeader);

            $('<span/>')
            .addClass('welcome-message white-text')
            .text(bioData.welcomeMessage)
            .appendTo(bioHeader);

            /* ----------------------------------------------------- */

            // Get skills array from model
            var skills = bioData.skills;

            // Create and append heading and <ul> element for skill list
            $('<h3/>')
            .addClass('red-text')
            .attr('id', 'skills-h3')
            .text('Skills at a Glance')
            .appendTo(bioHeader);

            var formattedSkills = $('<ul/>')
            .attr('id', 'skills')
            .appendTo(bioHeader);

            // http://stackoverflow.com/questions/5881033/how-to-generate-ul-li-list-from-string-array-using-jquery

            // Create and append each skill in a <li> item inside the <ul>
            $.each(skills, function(i) {

                var skillItem = $('<li/>')
                .addClass('flex-item')
                .attr('id', 'skill-list')
                .appendTo(formattedSkills);

                $('<span/>')
                .addClass('white-text')
                .text(skills[i])
                .appendTo(skillItem);
            });
        }
    };

    /* ============================================================== */

    workView = {
        
        init: function() {
            this.render();
        },

        render: function() {

            // Prepare section for work data
            var workSection = $('#workExperience');

            // Tell octopus to get work data from model; get jobs object from it
            var workData = octopus.getWork();
            var jobs = workData.jobs;

            // Create and append an element for each job and its properties
            $.each(jobs, function(i) {

                // div
                var workDiv = $('<div/>')
                .addClass('work-entry')
                .appendTo(workSection);

                // employer and position link
                $('<a/>')
                .attr({'href': jobs[i].url, 'target': '_blank'})
                .text(jobs[i].employer + ' - ' + jobs[i].position)
                .appendTo(workDiv);

                // dates
                $('<div/>')
                .addClass('date-text')
                .text(jobs[i].dates)
                .appendTo(workDiv);

                // location
                $('<div/>')
                .addClass('location-text')
                .text(jobs[i].location)
                .appendTo(workDiv);

                // line break
                $('<br>').appendTo(workDiv);

                // description
                $('<p/>')
                .text(jobs[i].description)
                .appendTo(workDiv);
            });
        }
    };

    /* ============================================================== */

    projectView = {
        
        init: function() {
            this.render();
        },

        render: function() {

            // Tell octopus to get project data; get recent and past objects
            var projectData = octopus.getProjects();
            var recent = projectData.recentProjects;
            var past = projectData.pastProjects;

            /* ----------------------------------------------------- */

            // Prepare section for recent projects
            var projectSection = $('#projects');

            // Create and append element for each object and its properties
            $.each(recent, function(i) {

                var recentEntryDiv = $('<div/>')
                .addClass('project-entry')
                .appendTo(projectSection);

                $('<a/>')
                .attr({'href': recent[i].url, 'target': '_blank'})
                .text(recent[i].title)
                .appendTo(recentEntryDiv);

                $('<div/>')
                .addClass('date-text')
                .text(recent[i].dates)
                .appendTo(recentEntryDiv);

                $('<br>').appendTo(recentEntryDiv);

                $('<p/>')
                .text(recent[i].description)
                .appendTo(recentEntryDiv);

                $('<img/>')
                .attr('src', recent[i].images)
                .appendTo(recentEntryDiv);
            });

            /* ----------------------------------------------------- */

            // Prepare section for past projects
            var pastProjectSection = $('#past-projects');

            // Create and append element for each object and its properties
            $.each(past, function(i) {

                var pastEntryDiv = $('<div/>')
                .addClass('past-project-entry')
                .appendTo(pastProjectSection);

                $('<a/>')
                .attr({'href': past[i].url, 'target': '_blank'})
                .text(past[i].title)
                .appendTo(pastEntryDiv);

                $('<div/>')
                .addClass('date-text')
                .text(past[i].dates)
                .appendTo(pastEntryDiv);

                $('<br>').appendTo(pastEntryDiv);

                $('<p/>')
                .text(past[i].description)
                .appendTo(pastEntryDiv);

                // http://stackoverflow.com/questions/29175993/add-images-in-array-to-div-element-jquery

                // Get array of past-project images
                var pastImageArray = past[i].images;

                // Append each image to this section
                $(pastImageArray)
                .each(function(i) {
                    $(pastEntryDiv).append('<img src="' + this + '">');
                });
            });
        }
    };

    /* ============================================================== */

    educationView = {
        
        init: function() {
            this.render();
        },

        render: function() {

            var educationSection = $('#education');
            var educationData = octopus.getEducation();

            /* ----------------------------------------------------- */

            // Get schools from education data
            var schools = educationData.schools;

            // Create and append element for each school
            $.each(schools, function(i) {

                var schoolDiv = $('<div/>')
                .addClass('education-entry')
                .appendTo(educationSection);

                $('<a/>')
                .attr({'href': schools[i].url, 'target': '_blank'})
                .text(schools[i].name + ' - ' + schools[i].degree)
                .appendTo(schoolDiv);

                $('<div/>')
                .addClass('date-text')
                .text(schools[i].dates)
                .appendTo(schoolDiv);

                $('<div/>')
                .addClass('location-text')
                .text(schools[i].location)
                .appendTo(schoolDiv);

                $('<br>').appendTo(schoolDiv);

                var major = $('<p/>')
                .text('Major: ' + schools[i].major)
                .appendTo(schoolDiv);

                // italicize element contents
                major.contents().wrap('<em></em>');
            });

            /* ----------------------------------------------------- */

            // Create and append italicized heading for sub-section
            var onlineCourseHead = $('<h3/>').text('Online Courses')
            .appendTo(educationSection);
            onlineCourseHead.contents().wrap('<em></em>');

            // Get online-courses from education data
            var onlineCourses = educationData.onlineCourses;

            // Create and append elements for each online course
            $.each(onlineCourses, function(i) {

                var onlineCourseDiv = $('<div/>')
                .addClass('education-entry')
                .appendTo(educationSection);

                $('<a/>')
                .attr({'href': onlineCourses[i].url, 'target': '_blank'})
                .text(onlineCourses[i].title + ' - ' + onlineCourses[i].school)
                .appendTo(onlineCourseDiv);

                $('<div/>')
                .addClass('date-text')
                .text(onlineCourses[i].dates)
                .appendTo(onlineCourseDiv);

                $('<div/>')
                .addClass('location-text')
                .text(onlineCourses[i].location)
                .appendTo(onlineCourseDiv);

                $('<br>').appendTo(onlineCourseDiv);

                $('<a/>')
                .attr({'href': onlineCourses[i].url, 'target': '_blank'})
                .text(onlineCourses[i].url)
                .appendTo(onlineCourseDiv);

                $('<br>').appendTo(onlineCourseDiv);
            });
        }
    };

    /* ============================================================== */

    mapView = {
        
        init: function() {
            this.render();
        },

        render: function() {

            // Tell octopus to get data for Google map
            var bio = octopus.getBio();
            var work = octopus.getWork();
            var education = octopus.getEducation();

            $('#mapDiv').append('<div class="work-entry"><p>Countries where I have lived and worked</p></div>');

            // Create and append <div> in this section; prepare it for the map
            $('#mapDiv').append('<div id="map"></div>');
            var mapDiv = document.getElementById('map');

            // Make global variable available to functions and event listeners
            var map;

            /* ----------------------------------------------------- */

            function initializeMap() {

                // Make global variable available to enclosed functions
                var locations;

                // Hide Google controls of map and load map in its <div>
                var mapOptions = {
                    disableDefaultUI: true
                };
                map = new google.maps.Map(mapDiv, mapOptions);

                /* ----------------------------------------------------- */

                // Get array of every location from bio, work and education
                function locationFinder() {

                    // Create empty array and add all locations from contacts
                    var locations = [];
                    locations.push(bio.contacts.location);

                    // Add each location from work data
                    for (var job in work.jobs) {
                        if (work.jobs.hasOwnProperty(job)) {
                            locations.push(work.jobs[job].location);
                        }
                    }

                    // Add each location from school data
                    for (var school in education.schools) {
                        if (education.schools.hasOwnProperty(school)) {
                            locations.push(education.schools[school].location);
                        }
                    }

                    // Store the resulting array for the pin poster
                    return locations;
                }

                /* ----------------------------------------------------- */

                // Create map pins using data from Google Places search
                function createMapMarker(placeData) {

                    // Get latitudes, longitudes, names from search results
                    var lat = placeData.geometry.location.lat();
                    var lon = placeData.geometry.location.lng();
                    var name = placeData.formatted_address;
                    
                    // Set boundaries as window size
                    var bounds = window.mapBounds;

                    // Create pins with names at all positions in the results
                    var marker = new google.maps.Marker({
                        map: map,
                        position: placeData.geometry.location,
                        title: name
                    });

                    // Create a window with info on a marked place
                    var infoWindow = new google.maps.InfoWindow({
                        content: name
                    });

                    // Open info window when user clicks on a marker
                    google.maps.event.addListener(marker, 'click', function() {
                        infoWindow.open(map, marker);
                    });

                    // Extend map bounds to include all markers
                    bounds.extend(new google.maps.LatLng(lat, lon));

                    // Fit map around all markers
                    map.fitBounds(bounds);

                    // Center the map
                    map.setCenter(bounds.getCenter());
                }

                // If search result is a location, create a marker for it

                // NOTE: DO NOT FORGET THE DOT BETWEEN 'STATUS' AND 'OK'!!!

                function callback(results, status) {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        createMapMarker(results[0]);
                    }
                }

                /* ----------------------------------------------------- */

                // Get locations for pins from  array fetched by location finder
                function pinPoster(locations) {

                    // Create Google Places service to look for location data
                    var service = new google.maps.places.PlacesService(map);

                    // Loop through each location in the array
                    for (var place in locations) {

                        // Look for one without inherited properties
                        if (locations.hasOwnProperty(place)) {

                            // Create a search for it
                            var request = {
                                query: locations[place]
                            };

                            // Search for data on it; run callback function
                            service.textSearch(request, callback);
                        }
                    }
                }

                // Define locations as results of location finder
                locations = locationFinder();

                // Run pin poster
                pinPoster(locations);
            }

            /* ----------------------------------------------------- */

            // Set map boundaries of window based on pin locations
            window.mapBounds = new google.maps.LatLngBounds();

            // Initalize map when page loads
            window.addEventListener('load', initializeMap);

            // Resize map when window is resized
            window.addEventListener('resize', function(e) {
                map.fitBounds(mapBounds);
            });
        }
    };

    /* ============================================================== */

    emptyView = {
        
        init: function() {
            this.render();
        },

        // If there is no content for a section, display it as black or none
        render: function() {

            if (document.getElementsByTagName('h1').length === 0) {
                document.getElementById('header')
                .style.display = 'black';
            }

            if (document.getElementsByClassName('flex-item').length === 0) {
                document.getElementById('topContacts')
                .style.display = 'black';
            }

            if (document.getElementsByClassName('flex-item').length === 0) {
                document.getElementById('navbar-moz')
                .style.display = 'black';
            }

            if (document.getElementsByClassName('work-entry').length === 0) {
                document.getElementById('workExperience')
                .style.display = 'none';
            }

            if (document.getElementsByClassName('project-entry').length === 0) {
                document.getElementById('projects')
                .style.display = 'none';
            }

            if (document.getElementsByClassName('past-project-entry').length === 0) {
                document.getElementById('past-projects')
                .style.display = 'none';
            }

            if (document.getElementsByClassName('education-entry').length === 0) {
                document.getElementById('education')
                .style.display = 'none';
            }

            if (document.getElementById('map') === null) {
                document.getElementById('mapDiv')
                .style.display = 'none';
            }

            if (document.getElementsByClassName('flex-item').length === 0) {
                document.getElementById('lets-connect')
                .style.display = 'none';
            }
        }
    };

    /* ============================================================== */

    animationView = {

        init: function() {
            this.render();
        },

        render: function() {

            // Button fades in when page is scrolled and fades out at top
            $(window).scroll(function() {
                if ($(this).scrollTop() !== 0) {
                    $('#toTop').fadeIn('slow');
                } else {
                    $('#toTop').fadeOut('slow');
                }
            });

            // Scroll back to top of page when user clicks button
            $('#toTop').click(function() {
                $('html, body').animate( {
                    scrollTop: 0
                }, 600);
                return false;
            });

            // Smooth scrolling between internal page links
            $('.scroll').click(function(event) {
                event.preventDefault();
                $('html, body').animate( {
                    scrollTop: $(this.hash).offset().top
                }, 500);
            });
        }
    };

    /* ============================================================== */

    // Load the octopus
    octopus.init();
});