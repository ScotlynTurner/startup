function updateEnding(outcome) {
    var messageDiv = document.getElementById('message');
    var spaceImageDiv = document.getElementById('spaceImage');

    switch (outcome) {
        case 'escape':
            messageDiv.innerHTML = `
                You escape this dangerous battle, and as you look back on the damage you left behind, you see the Shadow Brood 
                set the planet ablaze. Thank goodness you weren't there, right?
            `;
            spaceImageDiv.innerHTML = `
                <img width="300px" src="https://i.pinimg.com/474x/12/16/39/121639f4f032aac4c4d2a16815431f73.jpg"/>
            `;
            var achievement = "Let 'em burn";
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
            var achievement = "I Need A Hero";
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
            var achievement = " Smooth Operator: Negotiated the Surrender of an Entire Planet";
            break;
        // Add more cases for other outcomes if needed
        default:
            messageDiv.innerText = "Unknown outcome.";
            break;
    }
    alert("Achievement Unlocked! " + achievement);
}