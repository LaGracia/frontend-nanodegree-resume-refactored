/* Comments throughout this document are reminders to myself of where I found solutions to the problems that cropped up during the JavaScript Basics course. Most of the answers are from the discussion forum. */

var bio = {
	'name' : 'Lane Graciano',
 	'role' : 'Front-End Padawan',
 	'contacts' : {
 		'location' : 'Jakarta, Indonesia',
 		'email' : 'lgraci45@gmail.com',
 		'GitHub' : 'LaGracia'
 		},
 	'welcomeMsg' : 'To strive, to seek, to find, and not to yield.',
 	'skills' : ['secondary education', 'video transcription', ' web development'],
 	'bioPic' : 'images/lgraci.jpg'
};

var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
$('#header').prepend(formattedRole);

var formattedName = HTMLheaderName.replace('%data%', bio.name);
$('#header').prepend(formattedName);

/* I couldn’t proceed beyond Lesson 1. The solution was in “Stuck on Header!” */

var formattedPicture = HTMLbioPic.replace('%data%', bio.bioPic);
$('#header').append(formattedPicture);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg);
$('#header').append(formattedWelcomeMsg);

var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.GitHub);

/* When appended to the header, my contact info showed up as a bullet-point list, instead of inline as shown in the assignment. The solution is in “Why does my contact info display above the header?” From there, I also learned to write one append statement to display multiple objects. */

$('#topContacts').append(formattedLocation, formattedEmail, formattedGitHub);

/* Conversely, my skills info showed up in one line instead of a list. The post “Skills section appears with bullet and unformatted” suggested deleting the flex-box class from helper.js. */

if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
    $('#skills').append(formattedSkill);
    formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
    $('#skills').append(formattedSkill);
    formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
    $('#skills').append(formattedSkill);
}

var work = {
	'jobs' : [
		{
			'employer' : 'Amara',
			'title' : 'video transcriptionist',
			'location' : 'online',
			'dates' : 'From May 2015',
			'description' : 'I transcribe videos on amara.com. Amara’s clients include Udacity, TED, film production houses, and software companies.',
			'url' : 'http://amara.org/en/'
		},
		{
			'employer' : 'ACS Abu Dhabi',
			'title' : 'High School teacher',
			'location' : 'Abu Dhabi, UAE',
			'dates' : '2007-14',
			'description' : 'I taught English and literature, graphics and multimedia, and digital journalism, among other courses. I was a coach on the debate and forensics team, which competed regionally. In March 2014, I organized a TEDxYouth event.',
			'url' : 'http://acs.sch.ae/'
		},
		{
			'employer' : 'St. Maur International School',
			'title' : 'Secondary School teacher',
			'location' : 'Yokohama, Japan',
			'dates' : '2005-07',
			'description' : 'I taught English language and literature at the secondary school (grades 6-12). Again, I was a coach on the debate and forensics team.',
			'url' : 'http://www.stmaur.ac.jp/'
		},
		{
			'employer' : 'Jakarta International School',
			'title' : 'High School teacher',
			'location' : 'Jakarta, Indonesia',
			'dates' : '1999-2005',
			'description' : 'I started my teaching career here. My course load and extracurricular involvement were similar to those in subsequent schools.',
			'url' : 'http://jisedu.or.id/'
		}
	]
};


function displayWork() {
	for (var job in work.jobs) {

		/* Without an 'if' wrapper to filter out properties inherited from parent objects, if any, jshint.com will give a warning for each 'for-in' loop. This solution is in “For should be wrapped in an if statement.” */

		if (work.jobs.hasOwnProperty(job)) {

			/* The short comments below were included in the Work quiz solution. These were helpful. I wish there were more of them in the course. */

			// create new div for Work Experience
			$('#workExperience').append(HTMLworkStart);

			// concatenate employer and title
			var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$('.work-entry:last').append(formattedEmployerTitle);

			var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
			$('.work-entry:last').append(formattedLocation);

			var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
			$('.work-entry:last').append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
			$('.work-entry:last').append(formattedDescription);

			/* Each employer-title link only jumped to the header instead of going to an employer site. The solution is in “Trouble adding links to href attribute of ‘a’ tags through iteration.” To open the link in a new tab, target="_blank" must be added to HTMLworkEmployer in helper.js. */

			$('.work-entry:last a').attr('href', work.jobs[job].url);

		}
	}
}

displayWork();

/* By the end of Lesson 2, I still didn’t understand JavaScript enough to write my own code. So I copied the code from “Education section seem to keep getting errors,” adding comments to make sure I undestood what each line would do. */

var education = {
	'schools' : [
		{
			'name' : 'Charles Sturt University',
			'location' : 'New South Wales, Australia',
			'degree' : 'Graduate Diploma of Secondary Education',
			'major' : 'English',
			'dates' : '1996-2000',
			'url' : 'http://www.csu.edu.au/'
		},
		{
			'name' : 'Southern Connecticut State University',
			'location' : 'New Haven, Connecticut',
			'degree' : 'Bachelor of Science in Liberal Studies',
			'major' : ['journalism', ' English', ' photography'],
			'dates' : '1992-95',
			'url' : 'http://www.southernct.edu/'
		},
		{
 			'name' : 'University of Idaho',
			'location' : 'Moscow, Idaho',
			'degree' : 'Bachelor of Science',
			'major' : 'journalism',
			'dates' : '1991-92',
			'url' : 'http://www.uidaho.edu/'
		}
	],
	'onlineCourses' : [
		{
			'title': 'Front-End Web Development',
			'school' : 'Udacity',
			'dates' : 'Ongoing',
			'url' : 'http://www.udacity.com'
		}
	]
};

// defines the function that will display the education object in index.html
education.display = function() {

	// iterates through the schools array
	for (var school in education.schools) {

		// filters out any inherited properties
		if (education.schools.hasOwnProperty(school)) {

			// adds child "education-entry" div to parent div for every school
    		$("#education").append(HTMLschoolStart);

			// replaces helper.js strings with name and degree for each school
			var formattedName= HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

			// concatenates school name and degree
			var formattedEducationTitle = formattedName + formattedDegree;

			// adds the concatenated info to the last specified div
			$(".education-entry:last").append(formattedEducationTitle);

			// replaces helper.js strings for date, location, and major
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

			// adds date, location and major
			$(".education-entry:last").append(formattedDates, formattedLocation, formattedMajor);

			// adds URL (target="_blank" is added to HTMLschoolName in helper.js)
			$('.education-entry:last a').attr('href', education.schools[school].url);
		}
	}

	/* I changed HTMLonlineClasses in helper.js to HTMLonlineCourses to make it more consistent with the actual heading. */

	// iterates through the online courses array
	for (var course in education.onlineCourses) {

		// filters out any inherited properties
		if (education.onlineCourses.hasOwnProperty(course)) {

			/* The Online Courses heading appeared at the bottom of the section instead of the middle. The solution is in “Formatting issues Online Courses,” which adds two child divs to the parent div already specified above: a div for the heading and a div for the course. However, this works only because I have just one online course. */

			$("#education").append(HTMLonlineCourses, HTMLschoolStart);

			// replaces helper.js strings with course title and school info
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool= HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);

			// concatenates course title and school
			var formattedOnlinecourseTitle = formattedTitle + formattedSchool;

			// replaces helper.js strings for date and URL
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

			// adds everything to the last specified div
			$('.education-entry:last').append(formattedOnlinecourseTitle, formattedOnlineDates, formattedURL);

			// adds URL (target="_blank" added to HTMLonlineTitle in helper.js)
			$('.education-entry:last a').attr('href', education.onlineCourses[course].url);
		}
	}
};

// calls the function
education.display();

/* The Project Details PDF states that the project images should be an array. However, this was not specified at the end of Lesson 1, when we had to create the four JSON objects, so I didn’t create an array then. This wasn’t a problem until Lesson 2. The solution is in “Project pictures and Google Map displays.” */

var projects = {
	'projects' : [
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
	]
};

/* In the Encapsulating Functions quiz, the solution didn’t remind us to call the function, so my projects didn’t show up at first. The complete solution is in “Project 2 projects section not showing up.” */

projects.display = function() {
	for (var project in projects.projects) {

		// filters out inherited properties
		if (projects.projects.hasOwnProperty(project)) {

			$('#projects').append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);

			/* I wanted the link to each project to go to where the image is hosted instead of just the header. The solution is in “Custom Project Link in Resume.” To open the link in a new tab, target="_blank" must be added to HTMLworkEmployer in helper.js. */

			formattedTitle = formattedTitle.replace('%url%', projects.projects[project].url);

			$('.project-entry:last').append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
			$('.project-entry:last').append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
			$('.project-entry:last').append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (var image in projects.projects[project].images) {

					// filters out inherited properties
					if (projects.projects[project].images.hasOwnProperty(image)) {

					var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
					$('.project-entry:last').append(formattedImage);

					}
				}
			}
		}
	}
};

projects.display();

/* I divided the Projects section into two to specify how images should display at different screen sizes. I wanted all the images below to show up inline, but I didn’t want them to affect the ones above. */

var pastProjects = {
	'pastProjects' : [
		{
			'title' : 'Graphic design',
			'dates' : '2005-14',
			'description' : 'Sample poster, logo and graphics created for school purposes',
			'images' : ['images/poster.jpg', 'images/solitude.jpg', 'images/light.jpg', 'images/logo.jpg'],
			'url' : 'https://www.flickr.com/photos/tedxyouthatacs/albums/72157657888796203'
		}
	]
};

pastProjects.display = function() {
	for (var pastProject in pastProjects.pastProjects) {

		// filters out inherited properties
		if (pastProjects.pastProjects.hasOwnProperty(pastProject)) {

			$('#past-projects').append(HTMLpastprojectStart);

			var formattedTitle = HTMLpastprojectTitle.replace('%data%', pastProjects.pastProjects[pastProject].title);

			formattedTitle = formattedTitle.replace('%url%', pastProjects.pastProjects[pastProject].url);

			$('.past-project-entry:last').append(formattedTitle);

			var formattedDates = HTMLpastprojectDates.replace('%data%', pastProjects.pastProjects[pastProject].dates);
			$('.past-project-entry:last').append(formattedDates);

			var formattedDescription = HTMLpastprojectDescription.replace('%data%', pastProjects.pastProjects[pastProject].description);
			$('.past-project-entry:last').append(formattedDescription);

			if (pastProjects.pastProjects[pastProject].images.length > 0) {
				for (var image in pastProjects.pastProjects[pastProject].images) {

					// filters out inherited properties
					if (pastProjects.pastProjects[pastProject].images.hasOwnProperty(image)) {

					var formattedImage = HTMLpastprojectImage.replace('%data%', pastProjects.pastProjects[pastProject].images[image]);
					$('.past-project-entry:last').append(formattedImage);

					}
				}
			}
		}
	}
};

pastProjects.display();

$('#mapDiv').append(googleMap);

$('#footerContacts').append(formattedLocation, formattedEmail, formattedGitHub);

/* To try to exceed project expectations, I added a floating “back to top” button by adapting code from two websites (cotswoldphoto and html-tuts). Possibly, this belongs in helper.js instead of this document. */

$(window).scroll(function () {
	if ($(this).scrollTop() !== 0) {
		$('#toTop').fadeIn('slow');
	} else {
		$('#toTop').fadeOut('slow');
	}
}); 

$('#toTop').click(function() {
    $('html, body').animate({
    	scrollTop: 0
    },
    600);
        return false;
});
