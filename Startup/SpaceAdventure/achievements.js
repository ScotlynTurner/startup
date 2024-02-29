function loadAchievements(userName) {
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
    //const userAchievements = achievements;

    const userAchievements = achievements.filter(achievement => achievement.name === userName);
  
    if (userAchievements.length) {
      for (const achievement of userAchievements) {
        const endingTdEl = document.createElement('td');
        const dateTdEl = document.createElement('td');
  
        endingTdEl.textContent = achievement.achievement;
        dateTdEl.textContent = achievement.date;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(endingTdEl);
        rowEl.appendChild(dateTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colspan="3">Follow the story to get an achievement</td></tr>';
    }
  }

  var userName = localStorage.getItem("userName");
  loadAchievements(userName);


