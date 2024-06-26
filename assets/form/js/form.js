const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();});

function sendMail(event) {
  event.preventDefault();
  let parms = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    companyName: document.getElementById("companyName").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_h8edw2d", "template_k5slpjp", parms).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully");
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Message not sent");
    }
  );
}
