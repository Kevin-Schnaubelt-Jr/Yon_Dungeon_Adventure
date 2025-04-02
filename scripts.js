function toggleMusic() {
    const music = document.getElementById('bg-music');
    const button = document.getElementById('music-button');
    if (music.paused) {
      music.play();
      button.textContent = 'PAUSE THE MOOD';
    } else {
      music.pause();
      button.textContent = 'SET THE MOOD';
    }
}

function hookButtons() {
    const buttons = document.querySelectorAll('.go-button');
    console.log("Found buttons:", buttons.length); // Debug
    buttons.forEach(button => {
      button.addEventListener('click', adventureNexus);
    });
}

function adventureNexus(event) {
    const buttonValue = event.target.value;
    // alert(`You chose: ${buttonValue}`);

    if (buttonValue === "north") {
        northAdventure();
    }
    if (buttonValue === "south") {
        southAdventure();
    }
    if (buttonValue === "dennis") {
        dennisAventure();
    }
    if (buttonValue === "flask") {
        flaskAdventure();
    }

}

function northAdventure() {
    if (confirm("You see a wall. Press your hands up against it?")) {
        alert("Spikes shoot out and you die. Game over.");
    } else {
        alert("Smart choice.");
    }
}

function southAdventure() {
    if (confirm("You enter an empty room with a dark pit, do you jump in?")) {
        alert("The pit is bottomless. This is your life now. Game over.");
    } else {
        alert("Ya, that's dumb idea. You return to the nexus.");
    }
}

function dennisAventure() {
    alert("He's not interested.");
}

function flaskAdventure() {
    flaskCount++;
    
    if (flaskCount <= flaskResponseArray.length){
        alert(flaskResponseArray[flaskCount - 1]);
    }
    else if (flaskCount === 10) {
        if (confirm("OK FINE. You get ye flask. Do you want to drink from it?")) {
            alert("You drink from the flask. It was poison. You die. Game over.");
        } else {
            alert("Nah nah nah, you're drinking this flask. You wanted it so bad, you're drinking it. You drink the flask and die because it was poison. Game over.");
        }
    }
    else {
        alert(flaskResponseArray[4]);
    }
}


let flaskCount = 0;
let flaskResponseArray = [
    "You cannot get ye flask.",
    "You STILL cannot get ye flask!",
    "I'm telling you, you're not getting that flask.",
    "nope",
    "..."
];
hookButtons();
console.log("Hello from script.js");
