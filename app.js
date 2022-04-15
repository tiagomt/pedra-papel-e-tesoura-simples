//pegando displays
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

//pegando todas as tags button
const possibleChoices = document.querySelectorAll("button")

//variaveis globais
let userChoice
let computerChoice
let result

//para cada tag button, adicionar um evento
possibleChoices.forEach(button => button.addEventListener("click", (e) => {

    //pegando id do botão clicado
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice()
    getResult()

}))

function generateComputerChoice() {

    //sorteando um número aleatorio com a quantidade de possibilidades(botoes), no caso 3(0-2)
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) //mesmo que Math.random()*3

    switch (randomNumber) {
        case 0:
            computerChoice = "rock"
            break;

        case 1:
            computerChoice = "scissors"
            break

        case 2:
            computerChoice = "paper"
            break

    }

    //preenchendo na tela a escolha da máquina
    computerChoiceDisplay.innerHTML = computerChoice

}

function getResult() {

    // possibilidades
    if (computerChoice === userChoice) {
        result = "Empate!"
    } else if (computerChoice === "rock" && userChoice === "scissors") {
        result = "Você perdeu!"
    } else if (computerChoice === "paper" && userChoice === "rock") {
        result = "Você perdeu!"
    } else if (computerChoice === "scissors" && userChoice === "paper") {
        result = "Você perdeu!"
    } else {
        result = "Você ganhou!"
    }

    // colocando resultado no display
    resultDisplay.innerHTML = result
}