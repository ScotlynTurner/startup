function loadFriends() {
    let friendsAchievements = [];
    const friendsAchievementsText = localStorage.getItem("friendsAchievements");
    if (friendsAchievementsText) {
        try {
            friendsAchievements = JSON.parse(friendsAchievementsText);
        } catch (error) {
            console.error("Error parsing friends' achievements:", error);
        }
    }

    const tableBodyEl = document.querySelector("#achievements");

    if (friendsAchievements.length) {
        for (const achievement of friendsAchievements) {
            const usernameTdEl = document.createElement('td');
            const endingTdEl = document.createElement('td');
            const dateTdEl = document.createElement('td');

            usernameTdEl.textContent = achievement.username;
            endingTdEl.textContent = achievement.achievement;
            dateTdEl.textContent = achievement.date;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(usernameTdEl);
            rowEl.appendChild(endingTdEl);
            rowEl.appendChild(dateTdEl);

            tableBodyEl.appendChild(rowEl);
        }
    } else {
        tableBodyEl.innerHTML = '<tr><td colspan="3">No achievements found for friends</td></tr>';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadFriends();
});

let socket;
function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

    socket.onmessage = async (event) => {
        console.log('Received onmessage: ', event.data);
        const json = await event.data.text();
        const message = JSON.parse(json);
        displayMsg(message);
    };
}

function displayMsg(msg) {
    alert("Player " + msg.from + " made the achievement \"" + msg.value + "\"");
}

configureWebSocket();