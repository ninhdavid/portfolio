const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAMES = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAMES);
  const username = loginInput.value;
  localStorage.setItem("USERNAME_KEY", username);
  paintGreeting(username);
}

function handleLinkClick(event) {
  event.preventDefault();
  alert("Nothing there");
}

link.addEventListener("click", handleLinkClick);

function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAMES);
  greeting.innerText = `こんにちは、 ${username}`;
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAMES);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
