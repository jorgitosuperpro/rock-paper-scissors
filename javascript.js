function playGame(playerSelection) {
    if (PC >= 5 || YO >= 5) {
        return; // Terminar si alguien ya ha ganado
    }
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

function getComputerChoice() {
    const choices = ["Roca", "Papel", "Tijeras"]
    const randomElement = choices[Math.floor(Math.random() * choices.length)]
    return randomElement
}

function playRound(playerSelection, computerSelection) {
    if (PC >= 5 || YO >= 5) {
        return; // Terminar si alguien ya ha ganado
    }

    const p = document.createElement("p");
    if (playerSelection === computerSelection){
        p.textContent = "Has empatado: " + playerSelection + " contra " + computerSelection + ". Yo: " + YO + " PC: " + PC;
    } else if ((playerSelection === "Roca" && computerSelection === "Tijeras") ||
               (playerSelection === "Papel" && computerSelection === "Roca") ||
               (playerSelection === "Tijeras" && computerSelection === "Papel")) {
        YO++;
        p.textContent = "Has ganado: " + playerSelection + " contra " + computerSelection + ". Yo: " + YO + " PC: " + PC;
    } else {
        PC++;
        p.textContent = "Has perdido: " + playerSelection + " contra " + computerSelection + ". Yo: " + YO + " PC: " + PC;
    }
    CONTAINER.appendChild(p);

    if (PC === 5 || YO === 5) {
        endGame();
    }
}

function endGame() {
    const p = document.createElement("p");
    if (PC === 5) {
        p.textContent = "Ha ganado la máquina con: " + PC + " puntos y tú con: " + YO + " puntos.";
    } else {
        p.textContent = "Has ganado contra la máquina con: " + YO + " puntos y la máquina con: " + PC + " puntos.";
    }
    CONTAINER.appendChild(p);
}

const CONTAINER = document.querySelector("#container")
const h1 = document.createElement("h1");
h1.innerHTML = "¡Bienvenido al juego Roca, Papel, Tijeras!<br>El juego consiste en quien llegue primero a 5 turnos gana.<br>Elige entre estas opciones: Roca, Papel o Tijeras.<br>¡Mucha suerte!";
CONTAINER.appendChild(h1);

let PC = 0;
let YO = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;
        playGame(playerSelection)  
    })
})







