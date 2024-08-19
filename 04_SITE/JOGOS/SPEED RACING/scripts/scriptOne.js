const windowWidthSize = window.screen.availWidth
const speedWay = window.document.querySelector('.speedWay')
const btnLeft = window.document.querySelector('.esq')
btnLeft.addEventListener('click',movePlayerLeft)
const btnRight = window.document.querySelector('.dir')
btnRight.addEventListener('click',movePlayerRight)
const playerCar = window.document.querySelector('.playerCar')
let speedPlayerCar = 0
const audioBg = new Audio('sounds/GAME-CAR.mp3')
audioBg.loop=true
audioBg.volume=0.1
const gameOverAudio = new Audio('sounds/GAME-OVER.mp3')
gameOverAudio.volume=0.5
let scoreInterval;
let createRangesInterval;
let createCpuCarsInterval;
let impactCarInterval;
let moveRangesRequestAnimation;
let cpuMoveCarsRequestAnimation;
let speedCpuCar = 7
let speedRange = 7
let score = 0
let displayGameOver = window.document.querySelector('.gameOver')
let displayScoreGameOver = window.document.querySelector('.scoreGameOver')

function newGame(){
    audioBg.play()
    let displayInit = window.document.querySelector('.newGame')
    displayInit.style.visibility='hidden'
    gameOn()
}

function reloadGame(){
    document.location.reload(true)
}

function gameOn(){
    generateScore()
    impactCarInterval = setInterval(impactCar, 10)
    createRangesInterval = setInterval(createRanges, 300)
    moveRangesRequestAnimation = moveRanges()
    createCpuCarsInterval = setInterval(createCpuCars, 1000)
    cpuMoveCarsRequestAnimation = cpuMoveCars()
    
}

function createRanges(){
    let newRange = document.createElement('div')
    newRange.setAttribute('class','range')
    speedWay.appendChild(newRange)
}

function moveRanges(){
    let ranges = document.getElementsByClassName('range')
    let rangeListSize = ranges.length
    for(i=0; i<rangeListSize;i++){
        if(ranges[i]){
            let positionRange = ranges[i].getBoundingClientRect().y + speedRange
            ranges[i].style.top=`${positionRange}px`
            if(positionRange >= window.screen.availHeight){
                ranges[i].remove()
            }
        }
    }
    requestAnimationFrame(moveRanges)
}

function createCpuCars(){
    let cpuRandom = Math.round((Math.random()*4) + 1)
    let cpuRandomXPosition = Math.round(Math.random() * 85)
    let newCpuCar = document.createElement('img')
    newCpuCar.setAttribute('src',`imagens/carro${cpuRandom}.png`)
    newCpuCar.setAttribute('class','cpuCar')
    newCpuCar.style.left=`${cpuRandomXPosition}vw`
    newCpuCar.style.top='-15vh'
    speedWay.appendChild(newCpuCar)
}

function cpuMoveCars(){
    let cpuCars = document.getElementsByClassName('cpuCar')
    let cpuCarsSize = cpuCars.length
    for(i=0;i<cpuCarsSize;i++){
        if(cpuCars[i]){
            let cpuCarPositionY = cpuCars[i].getBoundingClientRect().y + speedCpuCar
            cpuCars[i].style.top=`${cpuCarPositionY}px`
            if(cpuCarPositionY >= window.screen.availHeight){
                cpuCars[i].remove()
            }
        }
    }
    requestAnimationFrame(cpuMoveCars)
}

function generateScore(){
    score = 0
    let scoreBox = window.document.querySelector('.score')
    let gameSpeed = 0
    let speedInterval = 50
    function scoreDigits(digit){
        if(score < 10){
            return '0000'+digit
        }
        else if(score <= 100){
            return '000'+digit
        }
        else if(score <= 1000){
            return '00'+digit
        }
        else if(score <= 9999){
            return '0'+digit
        }
        else{
            return digit
        }
    }
    scoreInterval = setInterval(function(){
        score += 2
        scoreBox.textContent=`DISTANCE: ${scoreDigits(score)}`
        gameSpeed += 2
        if(gameSpeed >= 100){
            speedInterval -= 5 
            if(speedInterval <= 10){
                speedInterval = 10
            }
            speedCpuCar += 1
            if(speedCpuCar >= 17){
                speedCpuCar = 17
            }
            speedRange += 1
            if(speedRange >= 17){
                speedRange = 17
            }
            gameSpeed = 0
        }
    },speedInterval)
}

function impactCar(){
    let positionPlayerX = playerCar.getBoundingClientRect().x
    let positionPlayerY = playerCar.getBoundingClientRect().y
    let cpuCars = document.getElementsByClassName('cpuCar')
    let cpuCarListSize = cpuCars.length
    for(i=0;i<cpuCarListSize;i++){
        if(cpuCars[i]){
            let cpuCarPosX = cpuCars[i].getBoundingClientRect().x
            let cpuCarPosY = cpuCars[i].getBoundingClientRect().y
            if(((positionPlayerX - 50 <= cpuCarPosX) && (positionPlayerX + 50 >= cpuCarPosX)) && ((positionPlayerY - 100 <= cpuCarPosY) && (positionPlayerY + 100 >= cpuCarPosY))){
                audioBg.pause()
                gameOverAudio.play()
                clearInterval(scoreInterval)
                clearInterval(createCpuCarsInterval)
                clearInterval(createRangesInterval)
                cancelAnimationFrame(moveRangesRequestAnimation)
                cancelAnimationFrame(cpuMoveCarsRequestAnimation)
                clearInterval(impactCarInterval)
                displayScoreGameOver.textContent=`DISTANCE: ${score}m`
                displayGameOver.style.visibility='visible'
            }
        }
    }
}

function movePlayerLeft(){
    playerCar.classList.remove('dirAnimate')
    playerCar.classList.add('esqAnimate')
    let maxMove = playerCar.getBoundingClientRect().x - 50
    let animateMovePlayer = setInterval(function(){
        let positionPlayer = playerCar.getBoundingClientRect().x - 10
        if(positionPlayer <= maxMove){
            positionPlayer = maxMove
            clearInterval(animateMovePlayer)
            playerCar.classList.remove('esqAnimate')
        }
        else if(positionPlayer <= 0){
            positionPlayer = 0
            clearInterval(animateMovePlayer)
            playerCar.classList.remove('esqAnimate')
        }
        playerCar.style.left=`${positionPlayer}px`
    },20)

}

function movePlayerRight(){
    playerCar.classList.remove('esqAnimate')
    playerCar.classList.add('dirAnimate')
    let maxMove = playerCar.getBoundingClientRect().x + 50
    let animateMovePlayer = setInterval(function(){
        let positionPlayer = playerCar.getBoundingClientRect().x + 10
        if(positionPlayer >= windowWidthSize - 69){
            positionPlayer = windowWidthSize - 69
            clearInterval(animateMovePlayer)
            playerCar.classList.remove('dirAnimate')
        }
        else if(positionPlayer <= maxMove){
            positionPlayer = maxMove
            clearInterval(animateMovePlayer)
            playerCar.classList.remove('dirAnimate')
        }
        playerCar.style.left=`${positionPlayer}px`
    },20)
}
