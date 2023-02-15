let gameStatus = document.querySelector('.game-status')
let reset = document.querySelector(".reset")
let roll1 = document.querySelector(".player-1-btn")
let roll2 = document.querySelector(".player-2-btn")
let score1 = document.querySelector(".score-1")
let score2 = document.querySelector(".score-2")
let dice = document.querySelector(".dice-img")

reset.addEventListener('click', () => {
    score1.innerHTML = 0
    score2.innerHTML = 0
    roll1.disabled = false
    roll2.disabled = true
    roll2.classList.remove("active")
    roll1.classList.add("active")
})


roll1.addEventListener("click", () => {
    var diceVal = Math.floor(Math.random() * 6) + 1;
    dice.src = `./Images/${diceVal}.png`
    console.log(diceVal);
    score1.innerHTML = parseInt(score1.innerHTML) + diceVal
    roll1.disabled = true
    roll2.disabled = false

    roll1.classList.remove("active")
    roll2.classList.add("active")

    gameStatus.innerHTML = "Game Is Going On"

    if (parseInt(score1.innerHTML) >= 10) {
        gameStatus.innerHTML = "Player-1 Wins"
        roll1.disabled = true
        roll2.disabled = true
    }

})


roll2.addEventListener("click", () => {
    var diceVal = Math.floor(Math.random() * 6) + 1;
    dice.src = `./Images/${diceVal}.png`
    console.log(diceVal);
    score2.innerHTML = parseInt(score2.innerHTML) + diceVal
    roll1.disabled = false
    roll2.disabled = true

    roll1.classList.add("active")
    roll2.classList.remove("active")
    if (parseInt(score2.innerHTML) >= 10) {
        gameStatus.innerHTML = "Player-2 Wins"
        roll1.disabled = true
        roll2.disabled = true
    }
})



