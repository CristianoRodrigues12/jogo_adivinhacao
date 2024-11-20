// variables
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

// events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleKey)

// functions callback

function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()        
        screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts}
         tentativas!`
    } 
    if ((Number(inputNumber.value) < 0) || (Number(inputNumber.value) > 10)) {
        alert("Você precisa escolher um número válido! Entre 0 e 10")
    }

    if(Number(inputNumber.value) == "") {        
        alert("Você precisa escolher um número para tentar! Escolha entre 0 e 10")
    }   

    inputNumber.value = ""
    xAttempts++        
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)    
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleKey(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }    
}

