function diplomat() {
    document.getElementById('story').innerHTML = `
        <p>
        You choose to be a diplomat, determined to forge alliances with any potential alien civilizations within the Stellar Nexus. 
        As the Star Voyager enters the Nexus, you encounter a peaceful and highly advanced raceknown as the Luminara. They invite you to 
        their radiant homeworld, where discussions unfold about shared knowledge and mutual cooperation. However, a rival faction within 
        the Luminara challenges your presence, and you must decide:
        </p>
    `;
    document.getElementById('spaceImage').innerHTML = `
        <img width="400px" src="https://as1.ftcdn.net/v2/jpg/02/06/53/68/1000_F_206536844_6eWEaVsUKrb4gCtgfVe1EQvWyM1JrJpo.jpg"/>
    `;
    document.getElementById('options').innerHTML = `
        <label for="negotiate" onclick="negotiate()"><input type="radio" id="negotiate" name="varRadio" value="negotiate" checked />
        <b>Negotiate:</b> Attempt to mediate and strengthen 
        ties with the rival faction, seeking unity among the Luminara.</label><br>

        <label for="depart" onclick="depart()"><input type="radio" id="depart" name="varRadio" value="depart" checked />
        <b>Depart:</b> Choose to leave the Luminara, avoiding 
        potential conflict and focusing on other aspects of the Stellar Nexus.</label><br>
    `;
}

function explorer() {
    document.getElementById('story').innerHTML = `
        <p>
        You embrace the role of an explorer, guiding the Star Voyager through dense asteroid fields and uncharted 
        territories within the Stellar Nexus. Amidst the challenges, you discover an ancient cosmic archive hidden on 
        the outskirts. The archive contains valuable information about the origins of our solar system and its 
        mysterious Nexus. Now, faced with this discovery, you must decide:
        </p>
    `;
    document.getElementById('spaceImage').innerHTML = `
        <img width="400px" src="https://as1.ftcdn.net/v2/jpg/05/68/56/06/1000_F_568560649_aEHkLsG3oefYUuOFi3y8lo72ZZ9d3h6A.jpg"/>
    `;
    document.getElementById('options').innerHTML = `
        <label for="study" onclick="study()"><input type="radio" id="study" name="varRadio" value="study" required="required" />
        <b>Study:</b> Dedicate time to unravel the secrets within the 
        cosmic archive, potentially unlocking advanced technologies or historical revelations.</label><br>

        <label for="proceed" onclick="proceed()"><input type="radio" id="proceed" name="varRadio" value="proceed" required="required" />
        <b>Proceed:</b> Navigate asteroid fields and unknown areas 
        to uncover secrets.</label><br>
    `;
}

function guardian() {
    document.getElementById('story').innerHTML = `
        <p>
        Choosing the path of a guardian, you take on the responsibility of safeguarding the secrets within our 
        solar system as you navigate the Stellar Nexus. Soon, your vigilance pays off as you intercept a signal 
        indicating potential threats from an unidentified alien faction known as the Shadow Brood. Now faced with a 
        crucial decision, you must choose:
        </p>
    `;
    document.getElementById('spaceImage').innerHTML = `
        <img width="400px" src="https://as1.ftcdn.net/v2/jpg/06/32/56/12/1000_F_632561296_ZmnnT5qzpPVQJ2NUwYmaSSyBpB2ceGAz.jpg"/>
    `;
    document.getElementById('options').innerHTML = `
        <label for="confront" onclick="confront()"><input type="radio" id="confront" name="varRadio" value="confront"/> 
        <b>Confront:</b>
        Engage in direct confrontation with the Shadow Brood, aiming to neutralize the potential threat and protect
        the solar system's secrets.</label><br>
        <label for="evade" onclick="evade()"><input type="radio" id="evade" name="varRadio" value="evade"/> 
        <b>Evade:</b>
        Opt for a strategic retreat, avoiding immediate conflict and allowing for further assessment of the Shadow Brood's
        intentions.</label><br>
    `;
}

function negotiate() {
    
}

function depart() {
    
}

function study() {

}

function proceed() {
    
}

function confront() {

}

function evade() {
    document.getElementById('story').innerHTML = `
        <p>
            
       
        </p>
    `;
    document.getElementById('spaceImage').innerHTML = `
        <img width="400px" src="https://as1.ftcdn.net/v2/jpg/07/38/59/04/1000_F_738590473_Qvc1Mb3ckVW4OAvS53FG5ruJ5qkgg1Qy.jpg"/>
    `;
    document.getElementById('options').innerHTML = `
        <label for="warn" onclick="warn()"><input type="radio" id="warn" name="varRadio" value="warn"/>
        <b>Warn:</b> </label><br>

        <label for="flee" onclick="flee()"><input type="radio" id="flee" name="varRadio" value="flee"/>
        <b>Flee:</b> </label><br>
    `;
}

function warn() {

}

function flee() {

}

















// var selectedOption = null;

// function submitChoice() {
//     if (selectedOption === 'diplomat') {
//         // Code for diplomat option
//         diplomat();
//     } else if (selectedOption === 'explorer') {
//         // Code for explorer option
//         console.log('Explorer selected');
//     } else if (selectedOption === 'guardian') {
//         // Code for guardian option
//         console.log('Guardian selected');
//     }
// }

// document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
//     radio.addEventListener('change', function() {
//         selectedOption = this.value;
//     });
// });