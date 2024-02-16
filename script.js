// <!-- Success message start -->

//         Thanks for subscribing! A confirmation email has been sent to
//         ash@loremcompany.com. Please open it and click the button inside to
//         confirm your subscription. Dismiss message

//         <!-- Success message end -->

const emailBtn = document.getElementById("email-button");
const mainCon = document.getElementById("main-container");

emailBtn.addEventListener("click", () => {
  mainCon.classList.add("width");
  mainCon.innerHTML = `
  <section class="success-content">
<img src="./assets/images/icon-success.svg" class="success" alt="success">
<h1>Thanks for subscribing!</h1>
<p> A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.</p>
<button>Dismiss message</button>
</section>
`;
});
