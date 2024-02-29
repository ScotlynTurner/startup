function login() {
  const userName = document.querySelector("#userName").value;
  localStorage.setItem("userName", userName);
  const password = document.querySelector("#password").value;
  localStorage.setItem("password", password);
  window.location.href = "home.html";
}