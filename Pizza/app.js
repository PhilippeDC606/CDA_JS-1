var user = document.getElementById("err-user");



user.addEventListener("keyup", function (event) {
  if(user.validity.typeMismatch) {
    user.setCustomValidity("J'attend 5lettre!");
  } else {
    user.setCustomValidity("");
  }
});