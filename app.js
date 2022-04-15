const computerChoiceDisplay = document.getElementById('computer-choice')

const userChoiceDisplay = document.getElementById('user-choice')

const resultDisplay = document.getElementById('result')

//pegando todas as tags button
const possibleChoices = document.querySelectorAll("button")

let userChoice

//para cada tag button, adicionar um evento
possibleChoices.forEach(button => button.addEventListener("click", (e) => {

    //pegando id do botão clicado
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

}))
