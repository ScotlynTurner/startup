let socket;
let messageQueue = [];

function updateEnding(outcome) {
    var messageDiv = document.getElementById('message');
    var spaceImageDiv = document.getElementById('spaceImage');
    var achievement;
    switch (outcome) {
        case 'escape':
            messageDiv.innerHTML = `
                You escape this dangerous battle, and as you look back on the damage you left behind, you see the Shadow Brood 
                set the planet ablaze. Thank goodness you weren't there, right?
            `;
            spaceImageDiv.innerHTML = `
                <img width="300px" src="https://i.pinimg.com/474x/12/16/39/121639f4f032aac4c4d2a16815431f73.jpg"/>
            `;
            achievement = "Let 'em burn";
            break;

        case 'fight':
            messageDiv.innerHTML = `
                You radio back, 
                You <i>surrender, shadow filth!</i> <br>
                as you use your spaceship to laser-blast their fleet into oblivion. After only a few more hours, you come out victorious!
                The people of Bladskini cheer, and you are hailed a hero for years to come.
            `;
            spaceImageDiv.innerHTML = `
                <img width="300px" src="https://i.pinimg.com/474x/11/b8/ee/11b8ee3642c82ae6d464c744a26df071.jpg"/>
            `;
            achievement = "I Need A Hero";
            break;

        case 'surrender':
            messageDiv.innerHTML = `
                You radio back, 
                <i>Ok you got me :/</i> <br>
                as you use land your spaceship on the now-on-fire planet. The people of Bladskini put down their weapons, 
                and the Shodow Brood take over, enslaving your people.
            `;
            spaceImageDiv.innerHTML = `
                <img width="300px" src="https://i.pinimg.com/474x/b9/ad/47/b9ad47998d1f459122132a10a771bb14.jpg"/>
            `;
            achievement = "Smooth Operator";
            break;
            
        case 'moonWalk':
            messageDiv.innerHTML = `
                The Shadow Brood general looks impressed. He understands your message and dances back, <i>bro I didn't know you were
                chill like that.</i><br>
                He turns the ship around and heads back to his home planet. You smile, leaving on your spaceship with one more war 
                avoided.
            `;
            spaceImageDiv.innerHTML = `
                <img width="300px" src="https://i.pinimg.com/474x/8e/00/ea/8e00eaee31a846bd4d68adf0770bc117.jpg"/>
            `;
            achievement = "Moves like Jagger";
            break;

        case 'breakDance':
            messageDiv.innerHTML = `
                The Shadow Brood general looks terrifed. Your popping, locking, jamming, and breaking seemed to make the aliens feel 
                threatened. Before you can explain, they shoot you down with lasers out of fear.
            `;
            spaceImageDiv.innerHTML = `
                <img width="300px" src="https://i.pinimg.com/474x/b9/ad/47/b9ad47998d1f459122132a10a771bb14.jpg"/>
            `;
            achievement = "Should've stuck to the status quo";
            break;

        case 'awkward':
            messageDiv.innerHTML = `
                Eventually, the Shadow Brood wake up. <i>Wow, that was the best nap of my life!</i> they say. Turns out they were just
                grumpy from the lack of sleep. The general apologizes to you and takes his fleet of ships to the Milky Way for some
                hot chocolate.
            `;
            spaceImageDiv.innerHTML = `
                <img width="300px" src="https://i.pinimg.com/474x/82/89/cf/8289cf305f2bd5a68a625d329ad4b1ea.jpg"/>
            `;
            achievement = "Hot, hot, hot, we got it!";
            break;

        case 'kill':
            messageDiv.innerHTML = `
                You release the poison and book it out of there. Eventually, the rest of the Shadow brood on the ship find out what happened, 
                but by then you. Once they see what you did to their general, they angrily look around for you, but by then you're long gone.
            `;
            spaceImageDiv.innerHTML = `
                <img width="300px" src="https://i.pinimg.com/474x/b9/ad/47/b9ad47998d1f459122132a10a771bb14.jpg"/>
            `;
            achievement = "Houdini";
            break;
        // Add more cases for other outcomes if needed
        default:
            messageDiv.innerText = "Unknown outcome.";
            break;
    }
    var name = localStorage.getItem("username");
    this.unlockAchievement(name, achievement);
    // Let other players know the achievement has been unlocked
    broadcastEvent(name, achievement);

    alert("Achievement Unlocked! " + achievement);
}

function unlockAchievement(username, achievement) {
    const date = new Date().toLocaleDateString();
    const newAchievement = { username, achievement, date };

    // Save the achievement to the server
    fetch('/api/achievements', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAchievement)
    })
    .then(response => {
        if (response.ok) {
            console.log('Achievement unlocked and saved to database.');
        } else {
            console.error('Failed to unlock achievement:', response.status, response.statusText);
        }
    })
    .catch(error => {
        console.error('Error unlocking achievement:', error);
    });

    // Store the achievement in local storage
    let achievements = JSON.parse(localStorage.getItem('achievements')) || [];
    achievements.push(newAchievement);
    localStorage.setItem('achievements', JSON.stringify(achievements));
}

async function isAchievementInList(achievementName) {
    const username = localStorage.getItem("username");
    if (!username) {
        console.error('Username not found in local storage.');
        return false;
    }

    try {
        const response = await fetch(`/api/achievements?username=${username}`);
        if (!response.ok) {
            console.error('Failed to fetch achievements:', response.status, response.statusText);
            return false;
        }

        const achievements = await response.json();
        return achievements.some(achievement => achievement.achievement === achievementName);
    } catch (error) {
        console.error('Error fetching achievements:', error);
        return false;
    }
}

function broadcastEvent(from, value) {
    const event = {
      from: from,
      value: value
    };
    const msg = JSON.stringify(event);
    // Check if the WebSocket connection is open
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(msg);
    } else {
        // Socket not open, queue the message
        messageQueue.push(msg);
        console.log(msg);
    }
}

// Functionality for peer communication using WebSocket
function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onerror = function(event) {
        console.error('WebSocket error:', event);
    };

    socket.onopen = (event) => {
        console.log("Socket is open");
        while (messageQueue.length > 0) {
            socket.send(messageQueue.shift());
        }
    };

    socket.onclose = (event) => {
        console.log('WebSocket closed:', event);
    };

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