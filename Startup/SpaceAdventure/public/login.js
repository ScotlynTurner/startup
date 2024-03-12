function login() {
  const username = document.querySelector("#userName").value;
  localStorage.setItem("username", username);
  const password = document.querySelector("#password").value;
  localStorage.setItem("password", password);
  window.location.href = "home.html";
}
