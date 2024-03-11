async function loadAchievements() {
    let achievements = [];
      try {
         // Get the latest high scores from the service
        const response = await fetch('/api/achievements');
        scores = await response.json();

         // Save the scores in case we go offline in the future
        localStorage.setItem('achievements', JSON.stringify(achievements));
      } catch (error) {
        const achievementsText = localStorage.getItem('achievements');
        if (achievementsText) {
           achievements = JSON.parse(achievementsText);
        }
        console.error("Error parsing achievements:", error);
      }
}

function displayUserAchievements() {
  
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


function displayAchievements() {
  
  const tableBodyEl = document.querySelector("#achievements");
  //const userAchievements = achievements;

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