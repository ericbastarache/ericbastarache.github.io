var bio = {
  "name" : "Eric Bastarache",
  "role" : "Web Developer",
  "message" : "Welcome to my online resume!",
  "pictureURL" : "images/profilePic.jpg",
  "skills" : [
  "C#", "C++", "Java", "Javascript", "JQuery", "PHP", "Visual Basic", "Adobe Photoshop", "Ruby", "SCRUM", "Microsoft Office", "Agile Methodologies", "CSS", "HTML", "MySQL", "Bootstrap"
  ],
  "contacts" : {
    "mobile" : "647-741-8731",
    "email" : "eric_bastarache@hotmail.com",
    "github" : "ericbastarache",
    "location" : "Scarborough, ON"
  }
}

var education = {
  "schools": [
  {
    "name" : "Cardinal Newman Catholic Secondary School",
    "location" : "Scarborough, ON",
    "degree" : "High School Diploma",
    "major" : "High School Diploma",
    "dates" : "2007 - 2011",
    "url" : "http://www.tcdsb.org/schools/blessedcardinalnewman/Pages/default.aspx#ci-school-info"
  },
  {
    "name" : "Centennial College",
    "location" : "Scarborough, ON",
    "degree" : "Diploma",
    "major" : "Software Engineering Technician",
    "dates" : "2011-2014",
    "url" : "http://www.centennialcollege.ca/"
  }
  ],
  "onlineCourse" : [
  {
    "title" : "Programming for Entrepreneurs - Javascript",
    "school" : "Udemy",
    "dates" : "2014",
    "url" : "https://www.udemy.com/javascript-tutorial/"
  },
  {
    "title" : "Intro to HTML and CSS",
    "school" : "Udacity",
    "dates" : "2015",
    "url" : "https://www.udacity.com/course/ud304"
  },
  {
    "title" : "Javascript Basics",
    "school" : "Udacity",
    "dates" : "2015",
    "url" : "https://www.udacity.com/course/ud804"
  }
  ]
}

var projects = {
  "projects" : [
  {
    "title" : "Portfolio Mock Up to HTML",
    "dates" : "2015",
    "description" : "Taking a mockup and making it into HTML.",
    "images" : [
    "images/page-mock.png"
    ]
  },
  {
    "title" : "Interactive Resume",
    "dates" : "2015",
    "description" : "Creating an interactive online resume.",
    "images" : [
    "images/final-resume.png"
    ]
  }
  ]
}

var work = {
  "jobs" : [
  {
    "employer" : "A&W Restaurants",
    "title" : "Cook/Cashier",
    "dates" : "2009 - 2011",
    "location" : "Toronto, ON",
    "description" : "Prepared orders for customers. Stocked shelves to ensure everything was prepared for the next day. Maintained a clean and organized workplace."
  },
  {
    "employer" : "Model and Talent Services",
    "title" : "PHP Web Developer",
    "dates" : "2012 - 2013",
    "location" : "Toronto, ON",
    "description" : "Create functional PHP website. Developed management system for users. Integrated user registration and login with MySQL."
  }
  ]
}

/*Code to scroll up to top of page */

$(window).scroll(function() {
    if ($(this).scrollTop() >= 150) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 2000);
});

/*Code to scroll down to work section on page */
$("#workLink").click(function(){
  $('body,html').animate({
    scrollTop: $("#workExperience").offset().top
  }, 2000);
});

/*Code to scroll down to project section on page */
$("#projectLink").click(function(){
  $('body,html').animate({
    scrollTop: $("#projects").offset().top
  }, 2000);
});

/*Code to scroll down to education section onpage */
$("#eduLink").click(function(){
  $('body,html').animate({
    scrollTop: $("#education").offset().top
  }, 2000);
});

/*Code to scroll down to map section on page */
$("#mapLink").click(function(){
  $('body,html').animate({
    scrollTop: $("#mapDiv").offset().top
  }, 2000);
});

bio.display= function(){

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);

  var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
  var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.message);
  $("#header").append(formattedMessage);
  $("#header").append(formattedPic);

  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedLocation);

  if(bio.skills.length > 0){

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[9]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[10]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[11]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[12]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[13]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[14]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[15]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[16]);
  }
}

bio.display();

work.display = function(){
  for(jobs in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobs].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  }
}
work.display();


function inName(name) {
    name = name.split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() +
      name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

education.display = function(){
  for(edu in education.schools){

    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name).replace("#", education.schools[edu].url);
    $(".education-entry:last").append(formattedSchoolName);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
    $(".education-entry:last").append(formattedSchoolDegree);
    var formattedDates =  HTMLschoolDates.replace("%data%", education.schools[edu].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
    $(".education-entry:last").append(formattedMajor);
  }
  $(".education-entry:last").append(HTMLonlineClasses);

  for(online in education.onlineCourse){
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[online].title);
    $(".education-entry:last").append(formattedTitle);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[online].school);
    $(".education-entry:last").append(formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourse[online].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourse[online].url).replace("#", education.onlineCourse[online].url);
    $(".education-entry:last").append(formattedURL);
  }
}
education.display();

projects.display = function(){

  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length > 0){
      for(image in projects.projects[project].images){
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
projects.display();

$("#mapDiv").append(googleMap);
