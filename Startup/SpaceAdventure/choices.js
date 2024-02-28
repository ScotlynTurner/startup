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
        <img width="400px" src="https://i.pinimg.com/474x/55/b3/bd/55b3bd4ea39274399b55cbd03a3259fe.jpg"/>
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
        <img width="300px" src="https://i.pinimg.com/474x/a7/dc/cc/a7dccc36367d5a0fa903721087523c63.jpg"/>
    `;
    document.getElementById('options').innerHTML = `
        <label for="confront" onclick="confront()"><input type="radio" id="confront" name="varRadio" value="confront"/> 
        <b>Confront:</b>
        Engage in direct confrontation with the Shadow Brood, aiming to neutralize the potential threat.</label><br>
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
    document.getElementById('story').innerHTML = `
        <p>
        You radio to the Shadow Brood, asking permission to dock, and they open the docking window. You land inside their spaceship and 
        are immediately taken to their general. He speaks to you in an alien dialect you can't understand without your radio. Given the
        language barrier, you think of other ways to communicate. Which way would be most effective to put an end to thir threats?
        </p>
    `;
    document.getElementById('spaceImage').innerHTML = `
        <img width="300px" src="https://i.pinimg.com/474x/b6/4e/25/b64e253f81325ffb30697b3202576a2b.jpg"/>
    `;
    document.getElementById('options').innerHTML = `
        <label for="danceOff" onclick="danceOff()"><input type="radio" id="danceOff" name="varRadio" value="danceOff"/>
        <b>Dance-off:</b>If bees can communicate through the power of dance, it should work on aliens too.</label><br>
        <label for="lullaby" onclick="lullaby()"><input type="radio" id="lullaby" name="varRadio" value="lullaby"/>
        <b>Lullaby:</b>Use your soothing vocals. They can't hurt anyone if they're asleep.</label><br>
    `;
}

function danceOff() {
    document.getElementById('story').innerHTML = `
    <p>
    You radio to the Shadow Brood, asking permission to dock, and they open the docking window. You land inside their spaceship and 
    are immediately taken to their general. He speaks to you in an alien dialect you can't understand without your radio. Given the
    language barrier, you think of other ways to communicate. Which way would be most effective to put an end to thir threats?
    </p>
    `;
    document.getElementById('spaceImage').innerHTML = `
    <img width="300px" src="https://i.pinimg.com/474x/b6/4e/25/b64e253f81325ffb30697b3202576a2b.jpg"/>
    `;
    document.getElementById('options').innerHTML = `
    <label for="moonWalk" onclick="moonWalk()"><input type="radio" id="moonWalk" name="varRadio" value="moonWalk"/>
    <b>Moon Walk:</b>Channnel your inner Michael Jackson and walk like there's no gravity.</label><br>
    <label for="breakDance" onclick="breakDance()"><input type="radio" id="breakDance" name="varRadio" value="breakDance"/>
    <b>Break Dance:</b>Pop, lock, jam, and break.</label><br>
`;
}

function lullaby() {

}

function evade() {
    document.getElementById('story').innerHTML = `
        <p>
        You choose to evade the immediate conflict with the Shadow Brood, opting for a strategic retreat to assess their intentions further.
        As the Star Voyager navigates away from the alien faction, you realize that the Shadow Brood are headed straight towards the planet 
        of the Bladskini people.Now faced with another critical decision, you must choose:
        </p>
    `;
    document.getElementById('spaceImage').innerHTML = `
        <img width="400px" src="https://i.pinimg.com/474x/37/78/56/377856310f64c99ae04b999d08bbd83e.jpg"/>
    `;
    document.getElementById('options').innerHTML = `
        <label for="warn" onclick="warn()"><input type="radio" id="warn" name="varRadio" value="warn"/>
        <b>Warn:</b>Transmit a warning to their communications outpost, alerting them to the imminent danger and potentially aiding in 
        their defense.</label><br>
        <label for="flee" onclick="flee()"><input type="radio" id="flee" name="varRadio" value="flee"/>
        <b>Flee:</b>Decide to avoid involvement, prioritizing the safety of the Star Voyager and its crew over intervening in the planet's 
        plight.</label><br>
    `;
}

function warn() {
    document.getElementById('story').innerHTML = `
        <p>
        After sending out a signal, you land on the Bladskini planet. <br>
        "Quick! Take me to your leader!" You order a startled Bladskini. <br>
        They take you to their queen, to whom you relay your urgent warning about the Shadow Brood. The queen thanks you, and begins to
        prepare for war. Now what?
        </p>
    `;
    document.getElementById('spaceImage').innerHTML = `
        <img width="400px" src="https://i.pinimg.com/474x/37/78/56/377856310f64c99ae04b999d08bbd83e.jpg"/>
    `;
    document.getElementById('options').innerHTML = `
        <label for="prepare" onclick="prepare()"><input type="radio" id="prepare" name="varRadio" value="prepare"/>
        <b>Prepare:</b>Help the Bladskini prepare to fight the Shadow Brood. After all, your job is to guard the galaxy.</label><br>
        <label for="flee" onclick="flee()"><input type="radio" id="flee" name="varRadio" value="flee"/>
        <b>Escape:</b>Decide to avoid involvement, prioritizing the safety of the Star Voyager and its crew over intervening in the planet's 
        plight.</label><br>
    `;

}

function prepare() {
    document.getElementById('story').innerHTML = `
        <p>
        You gather weapons and command forces under the direction of the queen. After hours of an intense battle, the Shadow Brood general
        sends a radio signal to you. It says: <br>
        <i>
        Surrender! You are no match for the Shadow Brood Empire!
        </i>
        </p>
    `;
    document.getElementById('spaceImage').innerHTML = `
        <img width="200px" src="https://i.pinimg.com/474x/33/ee/18/33ee183952363a379e3f4ed51dc04f49.jpg"/>
    `;
    document.getElementById('options').innerHTML = `
        <label for="fight" onclick="fight()"><input type="radio" id="fight" name="varRadio" value="fight"/>
        <b>Fight:</b>No way! They started this, and you're going to finish it.</label><br>
        <label for="surrender" onclick="surrender()"><input type="radio" id="surrender" name="varRadio" value="surrender"/>
        <b>Surrender:</b>They're too powerful... There's no way we can win this.</label><br>
    `;
}

function flee() {
    window.location.href = 'ending.html?outcome=escape';
}

function fight() {
    window.location.href = 'ending.html?outcome=fight';
}

function surrender() {
    window.location.href = 'ending.html?outcome=surrender';
}

function comingSoon(){
    document.getElementById('story').innerHTML = `
        <p>
        Unfortunately this part of the story is still in progress as a black hole has eaten it. Try again later!
        </i>
        </p>
    `;
    document.getElementById('spaceImage').innerHTML = `
        <img width="300px" src="https://i.pinimg.com/474x/d1/21/c0/d121c0b0e382e3cb40bd6c7decaf5bc4.jpg"/>
    `;
    document.getElementById('options').innerHTML = `
        <h1>Coming Soon</h1>
    `;

}
