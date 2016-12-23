function validate () {
  //Get input values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;

  if(validateName(name)) {
    if(validateEmail(email)) {
      if(validateMessage(subject)) {
        console.log("Thank you for contacting me!");
        return true;
      }
    }
  }
  return false;
}

function validateName (name) {
  if(name === "") {
    return name = "Not entered";
  }
  return name;
}

function validateEmail (email) {
  var emailExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailExp.test(email);
}

function validateMessage (subject) {
  if (subject === "") {
    return subject = "Not entered";
  }
  return subject;
}
