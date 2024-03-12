// Load user-specific achievements
async function loadUserAchievements(username) {
  let achievements = JSON.parse(localStorage.getItem('achievements')) || [];
  try {
    const response = await fetch(`/api/achievements?username=${username}`);
    const newAchievements = await response.json();
    achievements = newAchievements;
    localStorage.setItem('achievements', JSON.stringify(achievements));
  } catch (error) {
    console.error('Error loading achievements:', error);
  }
  displayUserAchievements(achievements);
}

// Load all users' achievements
async function loadAllAchievements() {
  let achievements = JSON.parse(localStorage.getItem('achievements'))
  try {
    const response = await fetch(`/api/achievements/all`);
    const newAchievements = await response.json();
    localStorage.setItem('achievements', JSON.stringify(achievements));
  } catch (error) {
    console.error('Error fetching achievements:', error);
    const achievementsText = localStorage.getItem('achievements');
    if (achievementsText) {
      achievements = JSON.parse(achievementsText);
    }
  }
  displayAllAchievements(achievements);
}

// Display user-specific achievements on the achievements page
async function displayUserAchievements(achievements) {
  const tableBodyEl = document.querySelector("#achievements");

  if (achievements.length) {
    tableBodyEl.innerHTML = ""; // Clear previous content
    for (const achievement of achievements) {
      const rowEl = document.createElement('tr');
      const endingTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');

      endingTdEl.textContent = achievement.achievement;
      dateTdEl.textContent = achievement.date;

      rowEl.appendChild(endingTdEl);
      rowEl.appendChild(dateTdEl);
      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colspan="2">No achievements yet</td></tr>';
  }
}

// Display all users' achievements on the friends page
async function displayAllAchievements(achievements) {
  const tableBodyEl = document.querySelector("#achievements");

  if (achievements.length) {
    tableBodyEl.innerHTML = ""; // Clear previous content
    for (const achievement of achievements) {
      const rowEl = document.createElement('tr');
      const nameTdEl = document.createElement('td');
      const endingTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');

      nameTdEl.textContent = achievement.name;
      endingTdEl.textContent = achievement.achievement;
      dateTdEl.textContent = achievement.date;

      rowEl.appendChild(nameTdEl);
      rowEl.appendChild(endingTdEl);
      rowEl.appendChild(dateTdEl);
      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colspan="3">No achievements yet</td></tr>';
  }
}

// Call these functions based on the current page
if (window.location.pathname === "/achievements.html") {
  const username = localStorage.getItem('username');
  if (username) {
    loadUserAchievements(username);
  } else {
    console.error('Username not found in local storage.');
  }
} else if (window.location.pathname === "/friends.html") {
  loadAllAchievements();
}