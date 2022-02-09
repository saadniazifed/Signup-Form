const password = document.getElementsByTagName("input")[4].value;
const confirm_password = document.getElementsByTagName("input")[5].value;
const message = document.querySelector(".message");
const user_password = document.getElementById("user_password");
const confirm_password_input = document.getElementById("confirm_password");

// Preventing the form from submitting.
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  passwordValidation();
});

function passwordValidation() {
  if (password == confirm_password) {
    // Some basic styling that matches this condition.
    message.textContent = "Passwords match.";
    message.style.color = "green";
    user_password.style.border = "1px solid green";
    confirm_password_input.style.border = "1px solid green";
    user_password.style.backgroundColor = "rgba(144,238,144, 0.25)";
    confirm_password_input.style.backgroundColor = "rgba(144,238,144,0.25";
  }
  //Basic styling to happen when passwords don't match.
  else if (password != confirm_password) {
    message.textContent = "Passwords don't match.";
    message.style.color = "red";
    user_password.style.border = "1px solid red";
    confirm_password_input.style.border = "1px solid red";
    user_password.style.backgroundColor = "rgba(255,0,0,0.10)";
    confirm_password_input.style.backgroundColor = "rgba(255,0,0,0.10)";
  } else {
    message.textContent = "something has gone wrong.";
  }
}
