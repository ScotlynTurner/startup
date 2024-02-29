function loadFriends() {
    // TODO: add friends' achievements
    let achievements = [];
    const achievementText = localStorage.getItem("achievements");
    if (achievementText) {
      try {
        achievements = JSON.parse(achievementText);
      } catch (error) {
        console.error("Error parsing achievements:", error);
      }
    }
  
    const tableBodyEl = document.querySelector("#achievements");
  
    if (achievements.length) {
      for (const achievement of achievements) {
        const nameTdEl = document.createElement('td');
        const endingTdEl = document.createElement('td');
        const dateTdEl = document.createElement('td');
  
        nameTdEl.textContent = achievement.name;
        endingTdEl.textContent = achievement.achievement;
        dateTdEl.textContent = achievement.date;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(nameTdEl);
        rowEl.appendChild(endingTdEl);
        rowEl.appendChild(dateTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colspan="3">Follow the story to get an achievement</td></tr>';
    }
  }
  loadFriends();