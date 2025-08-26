const themeBtn = document.getElementById("themeBtn");
// setup default theme
document.body.classList.add("light");

// change theme light to dark
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

// form validation (username, email, password)
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let error = "";

  if (username.length < 3) {
    error = "❌ Username must be at least 3 characters.";
  } 
  else if (!email.includes("@")) {
    error = "❌ Email must contain '@'.";
  } 
  else if (password.length < 6) {
    error = "❌ Password must be at least 6 characters.";
  }

  if (error) {
    message.textContent = error;
    message.style.color = "red";
  } 
  else {
    message.textContent = "✅ Registration successful!";
    message.style.color = "green";
  }
});

const hideBtn = document.getElementById("hideBtn");
const showBtn = document.getElementById("showBubblingandCapturing");
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const log = document.getElementById("log");

// show log messages
function logMessage(msg) {
  log.style.display = "block";
  log.innerHTML += msg + "<br>";
}

// show and hide buttons for bubbling or capturing demo
showBtn.addEventListener("click", () => {
  outer.style.display = "block";
  log.style.display = "block";
  log.innerHTML = "";
});

hideBtn.addEventListener("click", () => {
  outer.style.display = "none";
  log.style.display = "none";
  log.innerHTML = ""; // clear logs
});

// Bubbling 
inner.addEventListener("click", () => logMessage("Button Clicked (bubbling)"));
outer.addEventListener("click", () => logMessage("Div Clicked (bubbling)"));

// Capturing
inner.addEventListener("click", () => logMessage("Button Clicked (capturing)"), {capture:true});
outer.addEventListener("click", () => logMessage("Div Clicked (capturing)"), {capture:true});
  

const resetBtn = document.getElementById("resetBtn");
// clear form and logs
resetBtn.addEventListener("click", () => {
  message.textContent = "";   
  message.style.color = "";   
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  log.innerHTML = "";
});
