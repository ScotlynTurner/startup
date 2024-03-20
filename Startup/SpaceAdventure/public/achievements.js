// Load user-specific achievements
async function loadUserAchievements(username) {
  try {
    const response = await fetch(`/api/achievements/user/${username}`);
    const achievements = await response.json();
    displayUserAchievements(achievements);
  } catch (error) {
    console.error('Error loading user achievements:', error);
  }
}

async function loadAllAchievements() {
  try {
    const response = await fetch(`/api/achievements`);
    const achievements = await response.json();
    displayAllAchievements(achievements);
  } catch (error) {
    console.error('Error loading all achievements:', error);
  }
}

// Display user-specific achievements on the achievements page
async function displayUserAchievements(achievements) {
  const tableBodyEl = document.querySelector("#achievements");

  if (achievements.length) {
    tableBodyEl.innerHTML = ""; // Clear previous content
    for (const achievement of achievements) {
      if (!achievement) continue;
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
      if (!achievement) continue;
      const rowEl = document.createElement('tr');
      const nameTdEl = document.createElement('td');
      const endingTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');

      nameTdEl.textContent = achievement.username;
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
   username = localStorage.getItem('username');
  if (username) {
    loadUserAchievements(username);
  } else {
    console.error('Username not found in local storage.');
  }
} else if (window.location.pathname === "/friends.html") {
  loadAllAchievements();
}