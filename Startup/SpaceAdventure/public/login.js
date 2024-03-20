(async () => {
  const username = localStorage.getItem('username');
  if (username) {
    document.querySelector('#playerName').textContent = username;
    setDisplay('loginControls', 'none');
    setDisplay('playControls', 'block');
    setDisplay('welcome', 'none');
    setDisplay('goodbye', 'block');
    setNav('nav-item', 'block');
  } else {
    setDisplay('loginControls', 'block');
    setDisplay('playControls', 'none');
    setDisplay('welcome', 'block');
    setDisplay('goodbye', 'none');
    setNav('nav-item', 'none');
  }
})();

async function loginUser() {
  loginOrCreate(`/api/auth/login`);
}

async function createUser() {
  loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ username: username, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });


  if (response.ok) {
    localStorage.setItem('username', username);
    window.location.href = 'home.html';
  } else {
    const body = await response.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

function home() {
  window.location.href = 'home.html';
}

function logout() {
  localStorage.removeItem('username');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(username) {
  let achievements = [];
  // See if we have a user with the given username.
  const response = await fetch(`/api/user/${username}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}

function setDisplay(controlId, display) {
  const playControlEl = document.querySelector(`#${controlId}`);
  if (playControlEl) {
    playControlEl.style.display = display;
  }
}

function setNav(controlClass, display) {
  const navControlEls = document.querySelectorAll(`.${controlClass}`);
  navControlEls.forEach((navControlEl) => {
    navControlEl.style.display = display;
  });
}
