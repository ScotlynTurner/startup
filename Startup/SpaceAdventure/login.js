function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("password", nameEl.value);
    window.location.href = "home.html";
  }
  