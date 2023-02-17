//check correct password

let form = document.querySelector("#form");
let password1 = document.getElementById("pass");
let password2 = document.getElementById("confirm-pass");
let button = document.querySelector(".button-class");

//prevent a form to be submitted

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //check if passwords match
  function matchPassword() {
    if (password1.value != password2.value) {
      alert("Password is WRONG...");
      return false;
    } else {
      alert("Password created successfully");
      return true;
    }
  }

  matchPassword();
});
