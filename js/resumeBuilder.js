/* Comments throughout this document are reminders to myself, mostly of where I found solutions to the problems that cropped up during the JavaScript Basics course. The answers for these are in the discussion forum. Other comments refer to changes I made based on the first code reviewer’s suggestions. */

// make code more readable
var data = '%data%';

var bio = {
    'name' : 'Lane Graciano',
    'role' : 'Front-End Padawan',
    'contacts' : {
        'mobile' : '+62 21 1234567',
        'email' : 'lgraci45@gmail.com',
        'github' : 'LaGracia',
        'twitter' : '@lagracity',
        'location' : 'Jakarta, Indonesia'
        },
    'welcomeMessage' : 'To strive, to seek, to find, and not to yield.',
    'skills' : ['secondary education', 'video transcription', ' web development'],
    'biopic' : 'images/lgraci.jpg'
};

// encapsulate a display function in the bio object
bio.display = function() {

    // make code more readable
    var contact = bio.contacts;
    var $header = $('header');

    // replace helper.js strings for each bio category
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedMobile = HTMLmobile.replace(data, contact.mobile);
    var formattedEmail = HTMLemail.replace(data, contact.email);
    var formattedGitHub = HTMLgithub.replace(data, contact.github);
    var formattedTwitter = HTMLtwitter.replace(data, contact.twitter);
    var formattedLocation = HTMLlocation.replace(data, contact.location);
    var formattedWelcomeMsg = HTMLwelcomeMessage.replace(data, bio.welcomeMessage);
    var formattedPicture = HTMLbiopic.replace(data, bio.biopic);

    // add a header div with name and role above the topContacts div
    $header.prepend(formattedName, formattedRole);

    // add a header div with bioPic and welcomeMsg
    $header.append(formattedPicture, formattedWelcomeMsg);

    // add top and footer divs with contact info
    $('#topContacts, #footerContacts').append(formattedMobile, formattedEmail, formattedGitHub, formattedTwitter, formattedLocation);

    // define a skills display function
    bio.skills.display = function() {

        // add the skills heading to the header
        $header.append(HTMLskillsStart);

        // find skills array length
        var skill = bio.skills.length;

        // iterate through the skills array
        for (var i = 0; i < skill; i ++) {

            // replace helper.js string with each skill
            var formattedSkill = HTMLskills.replace(data, bio.skills[i]);

            // add each skill to a list
            $('#skills').append(formattedSkill);
        }
    };

    // call the skills display function
    bio.skills.display();
};

bio.display();

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

work.display = function() {

    // find jobs array length
    var jobLength = work.jobs.length;

    // use for loop to iterate over array
    for (var job = 0; job < jobLength; job ++) {

        /* Without an 'if' wrapper to filter out properties inherited from parent objects, if any, jshint.com will give a warning for each 'for-in' loop. This solution is in “For should be wrapped in an if statement.” */

        if (work.jobs.hasOwnProperty(job)) {

            // make code more readable
            var thisJob = work.jobs[job];

            // replace helper.js strings for each job
            var formattedEmployer = HTMLworkEmployer.replace(data, thisJob.employer);
            var formattedTitle = HTMLworkTitle.replace(data, thisJob.title);
            var formattedDates = HTMLworkDates.replace(data, thisJob.dates);
            var formattedLocation = HTMLworkLocation.replace(data, thisJob.location);
            var formattedDescription = HTMLworkDescription.replace(data, thisJob.description);

            // concatenate employer and title
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            // add a "work-entry" div to the Work Experience section
            $('#workExperience').append(HTMLworkStart);

            // add formatted info to the "work-entry" div for every job
            $('.work-entry:last').append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);

            /* Each employer-title link only jumped to the header instead of going to an employer site. The solution is in “Trouble adding links to href attribute of ‘a’ tags through iteration.” To open the link in a new tab, target="_blank" must be added to HTMLworkEmployer in helper.js. */

            $('.work-entry:last a').attr('href', thisJob.url);
        }
    }
};

work.display();

/* By the end of Lesson 2, I still didn’t understand JavaScript enough to write my own display function code. So I copied from “Education section seem to keep getting errors,” adding comments to make sure I undestood what each line did. */

var education = {
    'schools' : [
        {
            'name' : 'Charles Sturt University',
            'location' : 'New South Wales, Australia',
            'degree' : 'Graduate Diploma of Secondary Education',
            'major' : ['English'],
            'dates' : '2000',
            'url' : 'http://www.csu.edu.au/'
        },
        {
            'name' : 'Southern Connecticut State University',
            'location' : 'New Haven, Connecticut',
            'degree' : 'Bachelor of Science in Liberal Studies',
            'major' : ['journalism', ' English', ' photography'],
            'dates' : '1995',
            'url' : 'http://www.southernct.edu/'
        },
        {
            'name' : 'University of Idaho',
            'location' : 'Moscow, Idaho',
            'degree' : 'Bachelor of Science',
            'major' : ['journalism'],
            'dates' : '1992',
            'url' : 'http://www.uidaho.edu/'
        }
    ],
    'onlineCourses' : [
        {
            'title': 'Front-End Web Development',
            'school' : 'Udacity',
            'dates' : '2016',
            'url' : 'http://www.udacity.com'
        }
    ]
};

// define function to display education object
education.display = function() {

    // find schools array length
    var schLength = education.schools.length;

    // use for loop to iterate over array of schools
    for (var school = 0; school < schLength; school ++) {

         // filter out any inherited properties
        if (education.schools.hasOwnProperty(school)) {

            // make code more readable
            var thisSchool = education.schools[school];

            // replace helper.js strings for each school
            var formattedName= HTMLschoolName.replace(data, thisSchool.name);
            var formattedDegree = HTMLschoolDegree.replace(data, thisSchool.degree);
            var formattedDates = HTMLschoolDates.replace(data, thisSchool.dates);
            var formattedLocation = HTMLschoolLocation.replace(data, thisSchool.location);
            var formattedMajor = HTMLschoolMajor.replace(data, thisSchool.major);

            // concatenate school name and degree
            var formattedEducationTitle = formattedName + formattedDegree;

            // add an "education-entry" div to the Education section
            $("#education").append(HTMLschoolStart);

           // add formatted info to the div for every school
            $(".education-entry:last").append(formattedEducationTitle, formattedDates, formattedLocation, formattedMajor);

            // add URL (target="_blank" is added to HTMLschoolName in helper.js)
            $('.education-entry:last a').attr('href', thisSchool.url);
        }
    }

    /* I changed HTMLonlineClasses in helper.js to HTMLonlineCourses to make it more consistent with the actual heading. */

    for (var course = 0; course < schLength; course ++) {

        if (education.onlineCourses.hasOwnProperty(course)) {

            var thisCourse = education.onlineCourses[course];

            var formattedTitle = HTMLonlineTitle.replace(data, thisCourse.title);
            var formattedSchool= HTMLonlineSchool.replace(data, thisCourse.school);
            var formattedOnlineDates = HTMLonlineDates.replace(data, thisCourse.dates);
            var formattedURL = HTMLonlineURL.replace(data, thisCourse.url);

            var formattedOnlinecourseTitle = formattedTitle + formattedSchool;

            /* The heading appeared at the bottom of the section instead of the middle. The solution is in “Formatting issues Online Courses,” which adds the heading and then another "education-entry" div below it. However, this works only because I have just one online course. */

            $("#education").append(HTMLonlineCourses, HTMLschoolStart);
            $('.education-entry:last').append(formattedOnlinecourseTitle, formattedOnlineDates, formattedURL);
            $('.education-entry:last a').attr('href', thisCourse.url);
        }
    }
};

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

    var projLength = projects.projects.length;
    for (var project = 0; project < projLength; project ++) {
        if (projects.projects.hasOwnProperty(project)) {

            var thisProject = projects.projects[project];
            var formattedTitle = HTMLprojectTitle.replace(data, thisProject.title);
            var formattedDates = HTMLprojectDates.replace(data, thisProject.dates);
            var formattedDescription = HTMLprojectDescription.replace(data, thisProject.description);

            /* I wanted the link to each project to go to where the image is hosted instead of just the header. The solution is in “Custom Project Link in Resume.” To open the link in a new tab, target="_blank" must be added to HTMLworkEmployer in helper.js. */

            formattedTitle = formattedTitle.replace('%url%', thisProject.url);

            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(formattedTitle, formattedDates, formattedDescription);

            var projImgLength = thisProject.images.length;
            if (projImgLength > 0) {
                for (var projImage = 0; projImage < projImgLength; projImage ++) {
                    if (thisProject.images.hasOwnProperty(projImage)) {
                    var formattedImage = HTMLprojectImage.replace(data, thisProject.images[projImage]);
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

    var pastProjLength = pastProjects.pastProjects.length;
    for (var pastProject = 0; pastProject < pastProjLength; pastProject ++) {
        if (pastProjects.pastProjects.hasOwnProperty(pastProject)) {

            var thisPastproj = pastProjects.pastProjects[pastProject];
            var formattedTitle = HTMLpastprojectTitle.replace(data, thisPastproj.title);
            formattedTitle = formattedTitle.replace('%url%', thisPastproj.url);
            var formattedDates = HTMLpastprojectDates.replace(data, thisPastproj.dates);
            var formattedDescription = HTMLpastprojectDescription.replace(data, thisPastproj.description);

            $('#past-projects').append(HTMLpastprojectStart);
            $('.past-project-entry:last').append(formattedTitle, formattedDates, formattedDescription);

            var pastImgLength = thisPastproj.images.length;
            if (pastImgLength > 0) {
                for (var pastImage = 0; pastImage < pastImgLength; pastImage ++) {
                    if (thisPastproj.images.hasOwnProperty(pastImage)) {
                    var formattedImage = HTMLpastprojectImage.replace(data, thisPastproj.images[pastImage]);
                    $('.past-project-entry:last').append(formattedImage);
                    }
                }
            }
        }
    }
};

pastProjects.display();

$('#mapDiv').append(googleMap);
