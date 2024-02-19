// <!-- Success message start -->

//         Thanks for subscribing! A confirmation email has been sent to
//         ash@loremcompany.com. Please open it and click the button inside to
//         confirm your subscription. Dismiss message

//         <!-- Success message end -->

const emailBtn = document.getElementById("email-button");
const emailAddress = document.getElementById("email-address");
const mainCon = document.getElementById("main-container");
const error = document.getElementById("error");

emailBtn.addEventListener("click", () => {
  if (
    emailAddress.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    mainCon.classList.add("width");
    mainCon.innerHTML = `
  <section class="success-content">
<img src="./assets/images/icon-success.svg" class="success" alt="success">
<h1>Thanks for subscribing!</h1>
<p> A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.</p>
<button  onClick="window.location.reload()">Dismiss message</button>
</section>
`;
  } else {
    emailAddress.classList.add("orange");
    error.style.display = "block";
  }
});
