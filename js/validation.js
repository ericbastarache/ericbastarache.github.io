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
    document.getElementById('name').class += " field-error";
    return name = "Not entered";
  }
  document.getElementById('name').class += " field-success";
  return name;
}

function validateEmail (email) {
  var emailExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(!emailExp.test(email)){
    document.getElementById('email').class += " field-error";
  } else {
    document.getElementById('email').class += " field-success";
    return emailExp.test(email);
  }
}

function validateMessage (subject) {
  if (subject === "") {
    document.getElementById('subject').class += " field-error";
    return subject = "Not entered";
  }
  document.getElementById('name').class += " field-success";
  return subject;
}
