//  IMAGE-SLIDER

let flag = 0;

function controller(x) {
  flag = flag + x;
  slideshow(flag);
}

slideshow(flag);

function slideshow(num) {
  let slides = document.getElementsByClassName('slide');
  

  if (num == slides.length) {
    flag = 0;
    num = 0;
  }

  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }

  for (let y of slides) {
    y.style.display = "none";
  }

  slides[num].style.display = "block";

}

// FROM VALIDATION

document.getElementById("myForm").addEventListener("submit", function(event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name.trim() === "") {
      alert("Please enter your name");
      event.preventDefault();
      return;
  }

  if (email.trim() === "") {
      alert("Please enter your email");
      event.preventDefault();
      return;
  }

  if (message.trim() === "") {
      alert("Please enter your message");
      event.preventDefault();
      return;
  }

})



