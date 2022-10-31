/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aiPlayer.js":
/*!*************************!*\
  !*** ./src/aiPlayer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    let playerTag = 'PC'

    let getPlayerTag = () => playerTag;


    //AI LOGIC
    let crrSecuence;
    let counterOnFound;
    let counterOnGuess = 0;
    let isGuessing = true;

    let sendAttack = (gameboard) => {
        let offset = [0, 1]
        let offsetRandomizer;
        let attempt
        console.log(crrSecuence)
        if (isGuessing || counterOnGuess > 0) {
            while (true) {
                attempt = gameboard.receiveAttack([_randomInt(10), _randomInt(10)])
                if (attempt[0] == 'hit' || attempt[0] == 'missed') {
                    break
                }
            }
            if (attempt[0] == 'hit') {
                isGuessing = false
                counterOnGuess = 0;
                crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                console.log(crrSecuence)
                counterOnFound = _randomInt(2) + 2
            }
            if (counterOnGuess <= 1) {
                counterOnFound = _randomInt(2) + 2
            }
            counterOnGuess--
            console.log('guessing')
            return attempt
        } else {
            if (counterOnFound <= 0 || crrSecuence.mostConcurrentLength == 0) {
                counterOnGuess = _randomInt(2) + 2
                while (true) {
                    attempt = gameboard.receiveAttack([_randomInt(10), _randomInt(10)])
                    if (attempt[0] == 'hit' || attempt[0] == 'missed') {
                        crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                        console.log('Fuck')
                        return attempt
                    }
                }
            }
            if (crrSecuence.mostConcurrent[0][0] == crrSecuence.mostConcurrent[1][0] && crrSecuence.mostConcurrent[0][1] == crrSecuence.mostConcurrent[1][1]) {
                console.log('just one')
                let offset = [-1, 1]
                attempt = gameboard.receiveAttack([crrSecuence.mostConcurrent[0][0], crrSecuence.mostConcurrent[0][1] + offset[_randomInt(2)]])
                if (attempt == "Invalid coordinates" || attempt == "attacked") {
                    attempt = gameboard.receiveAttack([crrSecuence.mostConcurrent[0][0] + offset[_randomInt(2)], crrSecuence.mostConcurrent[0][1]])
                    if (attempt == "Invalid coordinates" || attempt == "attacked") {
                        while (true) {
                            attempt = gameboard.receiveAttack([_randomInt(10), _randomInt(10)])
                            if (attempt[0] == 'hit' || attempt[0] == 'missed') {
                                crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                                console.log('reached')
                                return attempt
                            }
                        }
                    }
                    crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                    counterOnFound--
                    return attempt
                }
                crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                counterOnFound--
                return attempt
            }
            else if (crrSecuence.mostConcurrent[0][0] == crrSecuence.mostConcurrent[1][0]) {
                offsetRandomizer = offset[_randomInt(2)]
                if (offsetRandomizer) {
                    attempt = gameboard.receiveAttack([crrSecuence.mostConcurrent[0][0], crrSecuence.mostConcurrent[0][1] - 1])
                    if (attempt == "Invalid coordinates" || attempt == "attacked") {
                        attempt = gameboard.receiveAttack([crrSecuence.mostConcurrent[0][0], crrSecuence.mostConcurrent[1][1] + 1])
                        if (attempt == "Invalid coordinates" || attempt == "attacked") {
                            while (true) {
                                attempt = gameboard.receiveAttack([_randomInt(10), _randomInt(10)])
                                if (attempt[0] == 'hit' || attempt[0] == 'missed') {
                                    crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                                    return attempt
                                }
                            }
                        }
                        crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                        counterOnFound--
                        return attempt
                    }
                    crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                    counterOnFound--
                    return attempt
                }
                else {
                    attempt = gameboard.receiveAttack([crrSecuence.mostConcurrent[0][0], crrSecuence.mostConcurrent[1][1] + 1])
                    if (attempt == "Invalid coordinates" || attempt == "attacked") {
                        attempt = gameboard.receiveAttack([crrSecuence.mostConcurrent[0][0], crrSecuence.mostConcurrent[0][1] - 1])
                        if (attempt == "Invalid coordinates" || attempt == "attacked") {
                            while (true) {
                                attempt = gameboard.receiveAttack([_randomInt(10), _randomInt(10)])
                                if (attempt[0] == 'hit' || attempt[0] == 'missed') {
                                    crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                                    return attempt
                                }
                            }
                        }
                        crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                        counterOnFound--
                        return attempt
                    }
                    crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                    counterOnFound--
                    return attempt
                }
            }
            else {
                offsetRandomizer = offset[_randomInt(2)]
                if (offsetRandomizer) {
                    attempt = gameboard.receiveAttack([crrSecuence.mostConcurrent[0][0] - 1, crrSecuence.mostConcurrent[0][1]])
                    if (attempt == "Invalid coordinates" || attempt == "attacked") {
                        attempt = gameboard.receiveAttack([crrSecuence.mostConcurrent[1][0] + 1, crrSecuence.mostConcurrent[0][1]])
                        if (attempt == "Invalid coordinates" || attempt == "attacked") {
                            while (true) {
                                attempt = gameboard.receiveAttack([_randomInt(10), _randomInt(10)])
                                if (attempt[0] == 'hit' || attempt[0] == 'missed') {
                                    crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                                    return attempt
                                }
                            }
                        }
                        crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                        counterOnFound--
                        return attempt
                    }
                    crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                    counterOnFound--
                    return attempt

                }
                else {
                    attempt = gameboard.receiveAttack([crrSecuence.mostConcurrent[1][0] + 1, crrSecuence.mostConcurrent[0][1]])
                    if (attempt == "Invalid coordinates" || attempt == "attacked") {
                        attempt = gameboard.receiveAttack([crrSecuence.mostConcurrent[0][0] - 1, crrSecuence.mostConcurrent[0][1]])
                        if (attempt == "Invalid coordinates" || attempt == "attacked") {
                            while (true) {
                                attempt = gameboard.receiveAttack([_randomInt(10), _randomInt(10)])
                                if (attempt[0] == 'hit' || attempt[0] == 'missed') {
                                    crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                                    return attempt
                                }
                            }
                        }
                        crrSecuence = _aiFindConcurrence(gameboard.getRecords())
                        counterOnFound--
                        return attempt
                    }
                }

            }
            crrSecuence = _aiFindConcurrence(gameboard.getRecords())
            counterOnFound--
            return attempt
        }

    }

    let _randomInt = (num) => Math.floor(Math.random() * num);

    let _aiFindConcurrence = (records) => {
        let mostConcurrent = []
        let mostConcurrentLength = 0
        //Horizontal
        for (let i = 0; i < 10; i++) {
            let crrConcurrent = []
            let crrLength = 0
            for (let j = 0; j < 10; j++) {
                if (records[i][j] == "hit") {
                    if (!crrConcurrent[0]) {
                        crrConcurrent[0] = [i, j]
                        crrConcurrent[1] = [i, j]
                        crrLength++
                    } else {
                        crrConcurrent[1] = [i, j]
                        crrLength++
                    }

                    if (crrLength >= 5) {
                        crrConcurrent = []
                        crrLength = 0
                    }
                    else if(crrLength > 0) {
                        if ((crrConcurrent[0][0] == 0) || (records[crrConcurrent[0][0]][crrConcurrent[0][1] - 1] == 'missed')) {
                            if ((crrConcurrent[1][0] == 9) || (records[crrConcurrent[1][0]][crrConcurrent[1][1] + 1] == 'missed')) {
                                crrConcurrent = []
                                crrLength = 0
                            }
                        }
                    }
                    
                }else{
                    if (crrLength > mostConcurrentLength) {
                        mostConcurrent = [...crrConcurrent]
                        mostConcurrentLength = crrLength
                    }
                    crrConcurrent = []
                    crrLength = 0    
                }
                
            }
        }
    
    //Vertical
    for (let i = 0; i < 10; i++) {
        let crrConcurrent = []
        let crrLength = 0
        for (let j = 0; j < 10; j++) {
            if (records[j][i] == "hit") {
                if (!crrConcurrent[0]) {
                    crrConcurrent[0] = [j, i]
                    crrConcurrent[1] = [j, i]
                    crrLength++
                } else {
                    crrConcurrent[1] = [j, i]
                    crrLength++
                }

                if (crrLength >= 5) {
                    crrConcurrent = []
                    crrLength = 0
                }
                else if(crrLength > 0) {
                    if ((crrConcurrent[0][0] == 0) || (records[crrConcurrent[0][0] - 1][crrConcurrent[0][1]] == 'missed')) {
                        if ((crrConcurrent[1][0] == 9) || (records[crrConcurrent[1][0] + 1][crrConcurrent[1][1]] == 'missed')) {
                            crrConcurrent = []
                            crrLength = 0
                        }
                    }
                }
            }
            else {
                if (crrLength > mostConcurrentLength) {
                    mostConcurrent = [...crrConcurrent]
                    mostConcurrentLength = crrLength
                }
                crrConcurrent = []
                crrLength = 0
            }
            


        }
    }
    console.log(mostConcurrent)
    return { mostConcurrent, mostConcurrentLength }
}
return { getPlayerTag, sendAttack }
});

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((()=>{
    let main = document.querySelector('main')

    const displayMenu = (stage) => {
        let titleMenu = document.createElement('div')
        titleMenu.classList.add('title-menu')
        titleMenu.textContent = "BATTLESHIP"

        //Container for all of the slides for the game setright
        let dynamicContainer = document.createElement('div')
        dynamicContainer.classList.add('dynamic-container')
        
        //Start button
        let startButton = document.createElement('div')
        startButton.classList.add('start-button-menu')
        startButton.textContent = 'Start'
        

        //First Slide shown after start button is pressed
        let firstSlide = document.createElement('div')
        firstSlide.classList.add('first-slide-menu')
        
        //First slide mode left side
        let modeLeftSide = document.createElement('div')
        modeLeftSide.classList.add('left-side-mode')
        modeLeftSide.textContent = 'Player Vs Player'
        let modeImage = document.createElement('img')
        modeImage.src = './images/mode.png'
        //First slide mode right side
        let modeRightSide = document.createElement('div')
        modeRightSide.classList.add('right-side-mode')
        modeRightSide.textContent = 'Player Vs Computer'
        let modeImageL = document.createElement('img')
        modeImageL.src = './images/mode.png'
        //Second Slide shown
        let secondSlide = document.createElement('form')
        secondSlide.classList.add('second-slide-menu')
        let player1Container = document.createElement('div')
        player1Container.classList.add('input-container')
        let labelPlayer1 = document.createElement('label')
        labelPlayer1.setAttribute('for', 'player1-name-input')
        labelPlayer1.textContent = 'Player 1 Name'
        let player1NameInput = document.createElement('input')
        player1NameInput.setAttribute('id', 'player1-name-input')
        player1NameInput.name = 'player1Name'
        let player2Container = document.createElement('div')
        player2Container.classList.add('input-container')
        let labelPlayer2 = document.createElement('label')
        labelPlayer2.setAttribute('for', 'player2-name-input')
        labelPlayer2.textContent = 'Player 2 Name'
        let player2NameInput = document.createElement('input')
        player2NameInput.setAttribute('id', 'player2-name-input')
        player2NameInput.name = 'player2Name'

        let timeInputContainer = document.createElement('div')
        timeInputContainer.classList.add('time-container')
        let timeText = document.createElement('span')
        timeText.textContent = 'Time per turn'

        let timeInteractiveButton = document.createElement('div')
        timeInteractiveButton.classList.add('selected-time-main')
        let timeSelected = document.createElement('input')
        timeSelected.value= '15'
        timeSelected.name = 'timeSelected'
        timeSelected.readOnly = true
        let leftArrow = document.createElement('img')
        leftArrow.src = './images/arrow.png'
        let rightArrow = document.createElement('img')
        rightArrow.src = './images/arrow.png'
        let currentTime = 2
        let timesArray = [5,10,15,20,25,30]

        let nextButton = document.createElement('button')
        nextButton.type = 'submit'
        nextButton.classList.add('next-button-menu')
        nextButton.textContent = 'Continue'
        let buttonSpan = document.createElement('span')

        const animationL = [
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-20px)' },
            { transform: 'translateX(0px)'}
          ];
          const animationR = [
            { transform: 'translateX(0px)' },
            { transform: 'translateX(20px)' },
            { transform: 'translateX(0px)'}
          ];
          
          const timing = {
            duration: 50,
            iterations: 1,
          }
        leftArrow.addEventListener('click', ()=>{
            if (currentTime == 0) {
                return
            }
            timeInteractiveButton.animate(animationL, timing)
            currentTime--
            timeSelected.value= timesArray[currentTime]
        })
        rightArrow.addEventListener('click', ()=>{
            if (currentTime == 5) {
                return
            }
            timeInteractiveButton.animate(animationR, timing)
            currentTime++
            timeSelected.value = timesArray[currentTime]
        })
        

        
        //Event listeners
        startButton.addEventListener('animationend', ()=>{
            dynamicContainer.removeChild(startButton)
            console.log('Yep')
        })
        startButton.addEventListener('click', ()=>{
            firstSlide.classList.add('show')
            startButton.classList.add('animation-expand')
        })
        firstSlide.addEventListener('click', ()=>{
            firstSlide.classList.remove('show')
            firstSlide.addEventListener('transitionend', ()=>{
                secondSlide.classList.add('show')
            })
        })
        modeLeftSide.addEventListener('mouseover', ()=>{
            firstSlide.classList.add('mode-hovered')
            modeLeftSide.classList.add('side-hovered')
        })
        modeLeftSide.addEventListener('mouseout', ()=>{
            firstSlide.classList.remove('mode-hovered')
            modeLeftSide.classList.remove('side-hovered')
        })
        modeRightSide.addEventListener('mouseover', ()=>{
            firstSlide.classList.add('mode-hovered')
            modeRightSide.classList.add('side-hovered')
        })
        modeRightSide.addEventListener('mouseout', ()=>{
            firstSlide.classList.remove('mode-hovered')
            modeRightSide.classList.remove('side-hovered')
        })
        modeRightSide.addEventListener('click', ()=>{
            player2NameInput.readOnly = true
            player2NameInput.value = 'PC'
            player1NameInput.placeholder = 'Player 1 tag'
        })
        modeLeftSide.addEventListener('click', ()=>{
            player1NameInput.placeholder = 'Player 1 tag'
            player2NameInput.placeholder = 'Player 2 tag'
        })

        //Appending to DOM
        modeLeftSide.appendChild(modeImageL)
        modeRightSide.appendChild(modeImage)

        player1Container.appendChild(labelPlayer1)
        player1Container.appendChild(player1NameInput)
        player2Container.appendChild(labelPlayer2)
        player2Container.appendChild(player2NameInput)
        timeInputContainer.appendChild(timeText)
        timeInteractiveButton.appendChild(leftArrow)
        timeInteractiveButton.appendChild(timeSelected)
        timeInteractiveButton.appendChild(rightArrow)
        timeInputContainer.appendChild(timeInteractiveButton)
        nextButton.appendChild(buttonSpan)

        firstSlide.appendChild(modeLeftSide)
        firstSlide.appendChild(modeRightSide)

        secondSlide.appendChild(player1Container)
        secondSlide.appendChild(player2Container)
        secondSlide.appendChild(timeInputContainer)
        secondSlide.appendChild(nextButton)

        dynamicContainer.append(secondSlide)
        dynamicContainer.appendChild(firstSlide)
        dynamicContainer.appendChild(startButton)

        main.appendChild(titleMenu)        
        main.appendChild(dynamicContainer)
    }
    const displayShipsSetup= ()=>{
        main.innerHTML = ''
        let mainHeader = document.createElement('header')
        mainHeader.classList.add('header-main')
        let mainTitle = document.createElement('div')
        mainTitle.textContent = 'BATTLESHIP'
        mainTitle.classList.add('title-main')
        let gameState = document.createElement('div')
        gameState.textContent = 'Setting Up'
        gameState.classList.add('game-state-main')
        let optionsButton = document.createElement('img')
        optionsButton.src = './images/settings.png'
        optionsButton.classList.add('options-button')
        
        
        let boardsContainer = document.createElement('div')
        boardsContainer.classList.add('boards-container-main')
        //Left side Gameboard
        let leftSide = document.createElement('div')
        leftSide.classList.add('left-side-container-main')
        let leftShipsContainer = document.createElement('div')
        leftShipsContainer.classList.add('left-ships-container-main')
        let lengths = [5,4,3,3,2]
        lengths.forEach((length, index)=>{
            let ship = document.createElement('div')
            ship.dataset.length = length
            ship.draggable = true
            ship.id = index + '-left'
            ship.style.gridRowStart = `span ${length}` 
            ship.addEventListener('dragstart', e => {
                e.dataTransfer.setData('text', length + ' left' + ` ${ship.id}`)
            })
            leftShipsContainer.appendChild(ship)
        })
        let leftPlayerBoard = document.createElement('div')
        leftPlayerBoard.classList.add('left-player-board-main')
        let boardsOverlay = document.createElement('div')
        boardsOverlay.classList.add('board-overlay-left')
        leftPlayerBoard.appendChild(boardsOverlay)
        //Right side Gameboard
        let rightSide = document.createElement('div')
        rightSide.classList.add('right-side-container-main')
        let rightShipsContainer = document.createElement('div')
        rightShipsContainer.classList.add('right-ships-container-main')
        lengths.forEach((length, index)=>{
            let ship = document.createElement('div')
            ship.dataset.length = length
            ship.draggable = true
            ship.id = index + '-right'
            ship.style.gridRowStart = `span ${length}` 
            ship.addEventListener('dragstart', e=>{
                e.dataTransfer.setData('text', length + ' right' + ` ${ship.id}`)
            })
            rightShipsContainer.appendChild(ship)
        })
        let rightPlayerBoard = document.createElement('div')
        rightPlayerBoard.classList.add('right-player-board-main')
        boardsOverlay = document.createElement('div')
        boardsOverlay.classList.add('board-overlay-right')
        rightPlayerBoard.appendChild(boardsOverlay)
        //Populating boards with tiles
        let populateBoards = () => {
            for(let i = 0; i < 10; i++){
                for(let j = 0; j < 10; j++){
                    let tile = document.createElement('div')
                    tile.dataset.x = i
                    tile.dataset.y = j
                    tile.classList.add('left-tile')
                    leftPlayerBoard.appendChild(tile)

                    tile = document.createElement('div')
                    tile.dataset.x = i
                    tile.dataset.y = j
                    tile.classList.add('right-tile')
                    rightPlayerBoard.appendChild(tile)
                }
            }
        }
        //Appending elements to DOM
        populateBoards()
        

        mainHeader.appendChild(mainTitle)
        mainHeader.appendChild(gameState)
        mainHeader.appendChild(optionsButton)

        leftSide.appendChild(leftShipsContainer)
        leftSide.appendChild(leftPlayerBoard)
        rightSide.appendChild(rightPlayerBoard)
        rightSide.appendChild(rightShipsContainer)
        boardsContainer.appendChild(leftSide)
        boardsContainer.appendChild(rightSide)

        main.appendChild(mainHeader)
        main.appendChild(boardsContainer)
    }

    const displayMainGame = () => {
        main.innerHTML = ''

        let topBoard = document.createElement('div')
        topBoard.classList.add('top-board-main')
        let leftPlayerName = document.createElement('div')
        leftPlayerName.classList.add('left-player-name-main')
        leftPlayerName.textContent = 'Player 1'
        let turnCounter = document.createElement('div')
        turnCounter.classList.add('turn-counter-main')
        turnCounter.textContent = '2'
        let rightPlayerName = document.createElement('div')
        rightPlayerName.classList.add('right-player-name-main')
        rightPlayerName.textContent = 'Player 2'

        let bottomBoard = document.createElement('div')
        bottomBoard.classList.add('bottom-board-main')
        let leftPlayerShips = document.createElement('div')
        leftPlayerShips.classList.add('left-player-ships-main')
        leftPlayerShips.textContent = '3'
        let timeCounter = document.createElement('div') 
        timeCounter.classList.add('time-counter-main')
        timeCounter.textContent = '7s'
        let rightPlayerShips = document.createElement('div')
        rightPlayerShips.classList.add('right-player-ships-main')
        rightPlayerShips.textContent = '1'

        let boardsContainer = document.createElement('div')
        boardsContainer.classList.add('boards-container-main')
        let leftPlayerBoard = document.createElement('div')
        leftPlayerBoard.classList.add('left-player-board-main')
        let rightPlayerBoard = document.createElement('div')
        rightPlayerBoard.classList.add('right-player-board-main')

        let populateBoards = () => {
            for(let i = 0; i < 10; i++){
                for(let j = 0; j < 10; j++){
                    let tile = document.createElement('div')
                    tile.dataset.x = i
                    tile.dataset.y = j
                    tile.classList.add('left-tile')
                    leftPlayerBoard.appendChild(tile)

                    tile = document.createElement('div')
                    tile.dataset.x = i
                    tile.dataset.y = j
                    tile.classList.add('right-tile')
                    rightPlayerBoard.appendChild(tile)
                }
            }
        }

        populateBoards()
        leftPlayerName.appendChild(document.createElement('span'))
        rightPlayerName.appendChild(document.createElement('span'))
        topBoard.appendChild(leftPlayerName)
        topBoard.appendChild(turnCounter)
        topBoard.appendChild(rightPlayerName)

        bottomBoard.appendChild(leftPlayerShips)
        bottomBoard.appendChild(timeCounter)
        bottomBoard.appendChild(rightPlayerShips)
        leftPlayerShips.appendChild(document.createElement('span'))
        rightPlayerShips.appendChild(document.createElement('span'))

        boardsContainer.appendChild(leftPlayerBoard)
        boardsContainer.appendChild(rightPlayerBoard)

        main.appendChild(topBoard)
        main.appendChild(bottomBoard)
        main.appendChild(boardsContainer)
    }
    let renderAttempt = (attempt, side) =>{
        if(attempt[0]== 'missed'){
            document.querySelector(`.${side}[data-x='${attempt[1]}'][data-y='${attempt[2]}']`).classList.add('missed')
        }else{
            document.querySelector(`.${side}[data-x='${attempt[1]}'][data-y='${attempt[2]}']`).classList.add('hit')
        }
    }


    return {displayMainGame, displayMenu, displayShipsSetup, renderAttempt}
})());

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    let board = [...Array(10)].map(()=>Array(10))
    let records = [...Array(10)].map(()=>Array(10))
    let shipsOnBoard = []

    let _parseToYX = (str) => {
        if(Array.isArray(str) && str.length == 2){
            if((str[0] >= 0 && str[0] <= 9) && (str[1] >= 0 && str[1] <= 9)){
                return str
            }
        }
        if(str.length != 2 || typeof str != "string") {
            return false
        }
        
        let [positionY, positionX] = str.split("")
        positionX = +positionX
        positionY = positionY.charCodeAt(0)
        
        if ((Number.isNaN(positionX)) || (positionY < 65 || positionY > 74)) {
            return false
        }

        return [positionY - 65, positionX]
    }

    let _parseToStr = (row, column) => {
        let position = []
        position.push(String.fromCharCode(row + 65))
        position.push(column)

        return position.join('')
    }
    
    let setShip = (length, position, isHorizontal = true) => {
        if (length > 5 || length <= 0) {
            return "Invalid length"
        }
        else if(!_parseToYX(position)) {
            return "Invalid coordinate"
        }

        let [row, column] = _parseToYX(position)

        if((row > 9 || row < 0) || (column > 9 || column < 0)) {
            return "Invalid coordinate"
        }
        else if((row + length > 10 && !isHorizontal) || (column + length > 10 && isHorizontal)) {
            return "Invalid coordinate due to length"
        }

        let crrShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length)
        let coordinates = []

        for(let i = 0; i < length; i++){
            if(isHorizontal){
                if(board[row][column + i]) return "Space on coordinate is unavailable"
            } else {
                if(board[row + i][column]) return "Space on coordinate is unavailable"
            }
        }

        for(let i = 0; i < length; i++){
            if(isHorizontal){
                board[row][column + i] = crrShip
                coordinates.push(_parseToStr(row, column + i))
            } else {
                board[row + i][column] = crrShip;
                coordinates.push(_parseToStr(row + i, column))
            }
        }
        shipsOnBoard.push({ship :crrShip,coordinates})
        return coordinates
    }

    let receiveAttack = (position) => {        
        if(!_parseToYX(position)) {
            return "Invalid coordinates"
        }
        let [row, column] = _parseToYX(position)
        if((row > 9 || row < 0) || (column > 9 || column < 0)){
            return "Invalid coordinates"
        }
        else if(records[row][column] == 'hit' || records[row][column] == 'missed'){
            return "attacked"
        }
        if(!board[row][column]){
            records[row][column] = 'missed'
            return ['missed', row, column]
        }
        board[row][column].hit()
        records[row][column] = 'hit'
        return ['hit', row, column]
    }

    let allShipsSunk = () => {
        return shipsOnBoard.reduce((acc,crr)=>{
            if(crr.ship.isSunk() && acc) return true
            return false 
        }, true)
    }
    
    let setRandomShips = () =>{
        let lengths = [5,4,3,3,2]
        lengths.forEach(length=>{
            while(true){
                if(Array.isArray(setShip(length,[_randomInt(10), _randomInt(10)], _randomInt(2)))) break
            }
        })
    }
    let getRecords = () => records;
    let rotateShip = (startCoords, endCoords, length) =>{
        let ship = board[startCoords[0]][startCoords[1]]
        if(startCoords[0] === endCoords[0]){
            if(startCoords[0]+length > 9){
                return 'Invalid due to length'
            }
            for(let i = 1; i < startCoords[0];i++){
                if(board[startCoords[0]+1][startCoords[1]]){
                    return 'Invalid coord'
                }
            }
            removeShip(startCoords, endCoords, length)
            for(let i = 0; i < startCoords[0]; i++){
                board[startCoords[0]+i][startCoords[1]] = ship
            }
            return 
        } 
        else {
            if(startCoords[1] + length > 9){
                return 'Invalid due to length'
            }
            for(let i = 1; i < startCoords[1]; i++){
                if(board[startCoords[0]][startCoords[1] + 1]){
                    return 'Invalid coord'
                }
            }
            removeShip(startCoords, endCoords, length)
            
            for(let i = 0; i < startCoords[1]; i++){
                board[startCoords[0]][startCoords[1]+i] = ship
            }
        }
    }
    let removeShip = (startCoords, endCoords, length) =>{
        if(startCoords[0] === endCoords[0]){
            for(let i = startCoords[1]; i < endCoords[1];i++){
                board[startCoords[0]][i] = null
            }

        } else {
            for(let i = startCoords[0]; i < endCoords[0]; i++){
                board[i][startCoords[0]] = null
            }
        }
    }

    let _randomInt = (num) => Math.floor(Math.random() * num);
    return {setShip, receiveAttack, allShipsSunk, getRecords, setRandomShips, rotateShip}
}); 

/***/ }),

/***/ "./src/mainGame.js":
/*!*************************!*\
  !*** ./src/mainGame.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _aiPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aiPlayer */ "./src/aiPlayer.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ship */ "./src/ship.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
    let config = {}
    let crrMoves = []

    let parseToYX = (str) => {
        if(Array.isArray(str) && str.length == 2){
            if((str[0] >= 0 && str[0] <= 9) && (str[1] >= 0 && str[1] <= 9)){
                return str
            }
        }
        if(str.length != 2 || typeof str != "string") {
            return false
        }
        
        let [positionY, positionX] = str.split("")
        positionX = +positionX
        positionY = positionY.charCodeAt(0)
        
        if ((Number.isNaN(positionX)) || (positionY < 65 || positionY > 74)) {
            return false
        }

        return [positionY - 65, positionX]
    }
    const playRound = () => {
        if(config.gameMode == 'pvai'){
            let player1Attempt =  config.player1Obj.sendAttack(crrMoves[0], config.player2Board)
            _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderAttempt(player1Attempt, "right-tile")

            let pcAttempt = config.player2Obj.sendAttack(config.player1Board)
            console.log(pcAttempt)
            _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderAttempt(pcAttempt, 'left-tile')
        }
    }
    const makeMove = (e) => {
        crrMoves[0] = [e.currentTarget.dataset.x, e.currentTarget.dataset.y]
        if(gameMode == 'pvai'){
            playRound()
        }
    }
    
    const setup = () => {
        //Get Info from DOM 
        _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].displayMenu()
        let continueButton  = document.querySelector('.second-slide-menu')
        continueButton.addEventListener('submit', setPlayers)
        let rightModeSelected = document.querySelector('.right-side-mode')
        rightModeSelected.addEventListener('click', ()=>{
            config.gameMode = 'pvai'
        })
        let leftModeSelected = document.querySelector('.left-side-mode')
        leftModeSelected.addEventListener('click', ()=>{
            config.gameMode = 'pvp'
        })

        let leftTiles = document.querySelectorAll('.right-tile')
        leftTiles.forEach(tile=>tile.addEventListener('click', makeMove))
    }
    const setPlayers = (e) => {
        e.preventDefault()
        let form = Object.fromEntries(new FormData(e.target).entries())
        if(!form.player1Name){
            config.player1Obj = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])('Player 1')
        } else{
            config.player1Obj = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(form.player1Name)
        }
        if(config.gameMode != 'pvai'){
            if(!form.player2Name){
                config.player2Obj = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])('Player 2')
            } else{
                config.player2Obj = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(form.player2Name)
            }
        } else{
            config.player2Obj = (0,_aiPlayer__WEBPACK_IMPORTED_MODULE_3__["default"])()
        }
        
        config.player1Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])()
        config.player2Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])()
        config.timePerTurn = form.timeSelected
        _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].displayShipsSetup()
        setShips()
    }
    const setShips = () =>{
        let leftTiles = document.querySelectorAll('.left-tile')
        leftTiles.forEach(tile=>{
            tile.addEventListener('dragover', (ev)=>ev.preventDefault())
            tile.addEventListener('drop', ev=>{
                ev.preventDefault()
                let overlay = document.querySelector('.board-overlay-left')
                let [length, side, id] = ev.dataTransfer.getData('text').split(' ')
                if(side != 'left'){
                    return
                }
                let attempt = config.player1Board.setShip(+length, [+ev.currentTarget.dataset.x, +ev.currentTarget.dataset.y], false)
                if (Array.isArray(attempt)){
                    let start = parseToYX(attempt[0])
                    let end = parseToYX(attempt[attempt.length - 1])
                    let shipBlock = document.getElementById(id)
                    if(start[0] == end[0]){                        
                        shipBlock.style.gridColumn = `${start[0]} / ${end[0]}`
                        shipBlock.style.gridRowStart = `${start[1]}` 
                    }
                    else{
                        shipBlock.style.gridColumnStart = `${start[1] + 1}`
                        shipBlock.style.gridRow = `${start[0] + 1}/${end[0] + 2}` 
                    }
                    shipBlock.addEventListener('click',()=>{

                    })
                    shipBlock.dataset.startCoord = ``+ [...start]
                    shipBlock.dataset.endCoord = `${[...end]}`
                    overlay.appendChild(shipBlock)
                }    
            })
        })

        let rightTiles = document.querySelectorAll('.right-tile')
        rightTiles.forEach(tile=>{
            tile.addEventListener('dragover', (ev)=>ev.preventDefault())
            tile.addEventListener('drop', ev=>{
                ev.preventDefault()
                let overlay = document.querySelector('.board-overlay-right')
                let [length, side, id] = ev.dataTransfer.getData('text').split(' ')
                if(side != 'right'){
                    return
                }
                let attempt = config.player2Board.setShip(+length, [+ev.currentTarget.dataset.x, +ev.currentTarget.dataset.y], false)
                if (Array.isArray(attempt)){
                    let start = parseToYX(attempt[0])
                    let end = parseToYX(attempt[attempt.length - 1])
                    let shipBlock = document.getElementById(id)
                    if(start[0] == end[0]){                        
                        shipBlock.style.gridColumn = `${start[0]} / ${end[0]}`
                        shipBlock.style.gridRowStart = `${start[1]}` 
                    }
                    else{
                        shipBlock.style.gridColumnStart = `${start[1] + 1}`
                        shipBlock.style.gridRow = `${start[0] + 1}/${end[0] + 2}` 
                    }
                    
                    shipBlock.addEventListener('click', ()=>{
                        if(config.player2Board.rotateShip(start,end,length)){
                            
                        }
                    })
                    overlay.appendChild(shipBlock)
                }
            })
        })
    }

    return {playRound, setup}
})());

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((tag) => {
    if(typeof tag != "string"){
        return null
    }
    let playerTag = tag
    
    let getPlayerTag = () => playerTag;

    let sendAttack = (position, gameboard) => {
        let attackReport = gameboard.receiveAttack(position)
        
        if(attackReport == "Invalid coordinates"){
            return "Invalid coordinates"
        } else if(attackReport == "attacked"){
            return "Position has already been attacked"
        }
        return attackReport
    };

    return {getPlayerTag, sendAttack}
});

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((length, horizontal = true)=>{
    let shipLength = length;
    let numOfHits = 0;

    let hit = () => ++numOfHits;
    let isSunk = () => shipLength === numOfHits ? true: false;
    return {hit, isSunk}    
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainGame */ "./src/mainGame.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");



_mainGame__WEBPACK_IMPORTED_MODULE_0__["default"].setup()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7Ozs7Ozs7Ozs7Ozs7O0FDblFBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4QkFBOEI7QUFDNUMsY0FBYyxnQ0FBZ0M7QUFDOUMsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjLDhCQUE4QjtBQUM1QyxjQUFjLCtCQUErQjtBQUM3QyxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsT0FBTztBQUNyRDtBQUNBLHNFQUFzRSxRQUFRO0FBQzlFLGFB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QUNuRDtBQUNBLHVEQUFjO0FBQ2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvYWlQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL21haW5HYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGxldCBwbGF5ZXJUYWcgPSAnUEMnXHJcblxyXG4gICAgbGV0IGdldFBsYXllclRhZyA9ICgpID0+IHBsYXllclRhZztcclxuXHJcblxyXG4gICAgLy9BSSBMT0dJQ1xyXG4gICAgbGV0IGNyclNlY3VlbmNlO1xyXG4gICAgbGV0IGNvdW50ZXJPbkZvdW5kO1xyXG4gICAgbGV0IGNvdW50ZXJPbkd1ZXNzID0gMDtcclxuICAgIGxldCBpc0d1ZXNzaW5nID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgc2VuZEF0dGFjayA9IChnYW1lYm9hcmQpID0+IHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gWzAsIDFdXHJcbiAgICAgICAgbGV0IG9mZnNldFJhbmRvbWl6ZXI7XHJcbiAgICAgICAgbGV0IGF0dGVtcHRcclxuICAgICAgICBjb25zb2xlLmxvZyhjcnJTZWN1ZW5jZSlcclxuICAgICAgICBpZiAoaXNHdWVzc2luZyB8fCBjb3VudGVyT25HdWVzcyA+IDApIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbX3JhbmRvbUludCgxMCksIF9yYW5kb21JbnQoMTApXSlcclxuICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0WzBdID09ICdoaXQnIHx8IGF0dGVtcHRbMF0gPT0gJ21pc3NlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhdHRlbXB0WzBdID09ICdoaXQnKSB7XHJcbiAgICAgICAgICAgICAgICBpc0d1ZXNzaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGNvdW50ZXJPbkd1ZXNzID0gMDtcclxuICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjcnJTZWN1ZW5jZSlcclxuICAgICAgICAgICAgICAgIGNvdW50ZXJPbkZvdW5kID0gX3JhbmRvbUludCgyKSArIDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY291bnRlck9uR3Vlc3MgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRlck9uRm91bmQgPSBfcmFuZG9tSW50KDIpICsgMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvdW50ZXJPbkd1ZXNzLS1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2d1ZXNzaW5nJylcclxuICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY291bnRlck9uRm91bmQgPD0gMCB8fCBjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudExlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyT25HdWVzcyA9IF9yYW5kb21JbnQoMikgKyAyXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbX3JhbmRvbUludCgxMCksIF9yYW5kb21JbnQoMTApXSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdFswXSA9PSAnaGl0JyB8fCBhdHRlbXB0WzBdID09ICdtaXNzZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGdWNrJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzBdID09IGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzFdWzBdICYmIGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzFdID09IGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzFdWzFdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnanVzdCBvbmUnKVxyXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IFstMSwgMV1cclxuICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMF0sIGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzFdICsgb2Zmc2V0W19yYW5kb21JbnQoMildXSlcclxuICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ID09IFwiSW52YWxpZCBjb29yZGluYXRlc1wiIHx8IGF0dGVtcHQgPT0gXCJhdHRhY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFswXVswXSArIG9mZnNldFtfcmFuZG9tSW50KDIpXSwgY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ID09IFwiSW52YWxpZCBjb29yZGluYXRlc1wiIHx8IGF0dGVtcHQgPT0gXCJhdHRhY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW19yYW5kb21JbnQoMTApLCBfcmFuZG9tSW50KDEwKV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdFswXSA9PSAnaGl0JyB8fCBhdHRlbXB0WzBdID09ICdtaXNzZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JyU2VjdWVuY2UgPSBfYWlGaW5kQ29uY3VycmVuY2UoZ2FtZWJvYXJkLmdldFJlY29yZHMoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVhY2hlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJPbkZvdW5kLS1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3JyU2VjdWVuY2UgPSBfYWlGaW5kQ29uY3VycmVuY2UoZ2FtZWJvYXJkLmdldFJlY29yZHMoKSlcclxuICAgICAgICAgICAgICAgIGNvdW50ZXJPbkZvdW5kLS1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMF0gPT0gY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMV1bMF0pIHtcclxuICAgICAgICAgICAgICAgIG9mZnNldFJhbmRvbWl6ZXIgPSBvZmZzZXRbX3JhbmRvbUludCgyKV1cclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXRSYW5kb21pemVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFswXVswXSwgY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMV0gLSAxXSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA9PSBcIkludmFsaWQgY29vcmRpbmF0ZXNcIiB8fCBhdHRlbXB0ID09IFwiYXR0YWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2NyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzBdLCBjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFsxXVsxXSArIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA9PSBcIkludmFsaWQgY29vcmRpbmF0ZXNcIiB8fCBhdHRlbXB0ID09IFwiYXR0YWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW19yYW5kb21JbnQoMTApLCBfcmFuZG9tSW50KDEwKV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGVtcHRbMF0gPT0gJ2hpdCcgfHwgYXR0ZW1wdFswXSA9PSAnbWlzc2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyT25Gb3VuZC0tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlck9uRm91bmQtLVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2NyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzBdLCBjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFsxXVsxXSArIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ID09IFwiSW52YWxpZCBjb29yZGluYXRlc1wiIHx8IGF0dGVtcHQgPT0gXCJhdHRhY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMF0sIGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzFdIC0gMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ID09IFwiSW52YWxpZCBjb29yZGluYXRlc1wiIHx8IGF0dGVtcHQgPT0gXCJhdHRhY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbX3JhbmRvbUludCgxMCksIF9yYW5kb21JbnQoMTApXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdFswXSA9PSAnaGl0JyB8fCBhdHRlbXB0WzBdID09ICdtaXNzZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJPbkZvdW5kLS1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JyU2VjdWVuY2UgPSBfYWlGaW5kQ29uY3VycmVuY2UoZ2FtZWJvYXJkLmdldFJlY29yZHMoKSlcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyT25Gb3VuZC0tXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9mZnNldFJhbmRvbWl6ZXIgPSBvZmZzZXRbX3JhbmRvbUludCgyKV1cclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXRSYW5kb21pemVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFswXVswXSAtIDEsIGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzFdXSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA9PSBcIkludmFsaWQgY29vcmRpbmF0ZXNcIiB8fCBhdHRlbXB0ID09IFwiYXR0YWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2NyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzFdWzBdICsgMSwgY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA9PSBcIkludmFsaWQgY29vcmRpbmF0ZXNcIiB8fCBhdHRlbXB0ID09IFwiYXR0YWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW19yYW5kb21JbnQoMTApLCBfcmFuZG9tSW50KDEwKV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGVtcHRbMF0gPT0gJ2hpdCcgfHwgYXR0ZW1wdFswXSA9PSAnbWlzc2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyT25Gb3VuZC0tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlck9uRm91bmQtLVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFsxXVswXSArIDEsIGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzFdXSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA9PSBcIkludmFsaWQgY29vcmRpbmF0ZXNcIiB8fCBhdHRlbXB0ID09IFwiYXR0YWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2NyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzBdIC0gMSwgY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA9PSBcIkludmFsaWQgY29vcmRpbmF0ZXNcIiB8fCBhdHRlbXB0ID09IFwiYXR0YWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW19yYW5kb21JbnQoMTApLCBfcmFuZG9tSW50KDEwKV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGVtcHRbMF0gPT0gJ2hpdCcgfHwgYXR0ZW1wdFswXSA9PSAnbWlzc2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyT25Gb3VuZC0tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICBjb3VudGVyT25Gb3VuZC0tXHJcbiAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX3JhbmRvbUludCA9IChudW0pID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bSk7XHJcblxyXG4gICAgbGV0IF9haUZpbmRDb25jdXJyZW5jZSA9IChyZWNvcmRzKSA9PiB7XHJcbiAgICAgICAgbGV0IG1vc3RDb25jdXJyZW50ID0gW11cclxuICAgICAgICBsZXQgbW9zdENvbmN1cnJlbnRMZW5ndGggPSAwXHJcbiAgICAgICAgLy9Ib3Jpem9udGFsXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjcnJDb25jdXJyZW50ID0gW11cclxuICAgICAgICAgICAgbGV0IGNyckxlbmd0aCA9IDBcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVjb3Jkc1tpXVtqXSA9PSBcImhpdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjcnJDb25jdXJyZW50WzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyckNvbmN1cnJlbnRbMF0gPSBbaSwgal1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JyQ29uY3VycmVudFsxXSA9IFtpLCBqXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnJMZW5ndGgrK1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyckNvbmN1cnJlbnRbMV0gPSBbaSwgal1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JyTGVuZ3RoKytcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjcnJMZW5ndGggPj0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnJDb25jdXJyZW50ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JyTGVuZ3RoID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGNyckxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChjcnJDb25jdXJyZW50WzBdWzBdID09IDApIHx8IChyZWNvcmRzW2NyckNvbmN1cnJlbnRbMF1bMF1dW2NyckNvbmN1cnJlbnRbMF1bMV0gLSAxXSA9PSAnbWlzc2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoY3JyQ29uY3VycmVudFsxXVswXSA9PSA5KSB8fCAocmVjb3Jkc1tjcnJDb25jdXJyZW50WzFdWzBdXVtjcnJDb25jdXJyZW50WzFdWzFdICsgMV0gPT0gJ21pc3NlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JyQ29uY3VycmVudCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JyTGVuZ3RoID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNyckxlbmd0aCA+IG1vc3RDb25jdXJyZW50TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vc3RDb25jdXJyZW50ID0gWy4uLmNyckNvbmN1cnJlbnRdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vc3RDb25jdXJyZW50TGVuZ3RoID0gY3JyTGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyckNvbmN1cnJlbnQgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgIGNyckxlbmd0aCA9IDAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgLy9WZXJ0aWNhbFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNyckNvbmN1cnJlbnQgPSBbXVxyXG4gICAgICAgIGxldCBjcnJMZW5ndGggPSAwXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChyZWNvcmRzW2pdW2ldID09IFwiaGl0XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY3JyQ29uY3VycmVudFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyckNvbmN1cnJlbnRbMF0gPSBbaiwgaV1cclxuICAgICAgICAgICAgICAgICAgICBjcnJDb25jdXJyZW50WzFdID0gW2osIGldXHJcbiAgICAgICAgICAgICAgICAgICAgY3JyTGVuZ3RoKytcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JyQ29uY3VycmVudFsxXSA9IFtqLCBpXVxyXG4gICAgICAgICAgICAgICAgICAgIGNyckxlbmd0aCsrXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNyckxlbmd0aCA+PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JyQ29uY3VycmVudCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgY3JyTGVuZ3RoID0gMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihjcnJMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChjcnJDb25jdXJyZW50WzBdWzBdID09IDApIHx8IChyZWNvcmRzW2NyckNvbmN1cnJlbnRbMF1bMF0gLSAxXVtjcnJDb25jdXJyZW50WzBdWzFdXSA9PSAnbWlzc2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChjcnJDb25jdXJyZW50WzFdWzBdID09IDkpIHx8IChyZWNvcmRzW2NyckNvbmN1cnJlbnRbMV1bMF0gKyAxXVtjcnJDb25jdXJyZW50WzFdWzFdXSA9PSAnbWlzc2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyckNvbmN1cnJlbnQgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JyTGVuZ3RoID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNyckxlbmd0aCA+IG1vc3RDb25jdXJyZW50TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9zdENvbmN1cnJlbnQgPSBbLi4uY3JyQ29uY3VycmVudF1cclxuICAgICAgICAgICAgICAgICAgICBtb3N0Q29uY3VycmVudExlbmd0aCA9IGNyckxlbmd0aFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3JyQ29uY3VycmVudCA9IFtdXHJcbiAgICAgICAgICAgICAgICBjcnJMZW5ndGggPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhtb3N0Q29uY3VycmVudClcclxuICAgIHJldHVybiB7IG1vc3RDb25jdXJyZW50LCBtb3N0Q29uY3VycmVudExlbmd0aCB9XHJcbn1cclxucmV0dXJuIHsgZ2V0UGxheWVyVGFnLCBzZW5kQXR0YWNrIH1cclxufSIsImV4cG9ydCBkZWZhdWx0ICgoKT0+e1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcclxuXHJcbiAgICBjb25zdCBkaXNwbGF5TWVudSA9IChzdGFnZSkgPT4ge1xyXG4gICAgICAgIGxldCB0aXRsZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRpdGxlTWVudS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1tZW51JylcclxuICAgICAgICB0aXRsZU1lbnUudGV4dENvbnRlbnQgPSBcIkJBVFRMRVNISVBcIlxyXG5cclxuICAgICAgICAvL0NvbnRhaW5lciBmb3IgYWxsIG9mIHRoZSBzbGlkZXMgZm9yIHRoZSBnYW1lIHNldHJpZ2h0XHJcbiAgICAgICAgbGV0IGR5bmFtaWNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGR5bmFtaWNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHluYW1pYy1jb250YWluZXInKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vU3RhcnQgYnV0dG9uXHJcbiAgICAgICAgbGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdGFydC1idXR0b24tbWVudScpXHJcbiAgICAgICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQnXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vRmlyc3QgU2xpZGUgc2hvd24gYWZ0ZXIgc3RhcnQgYnV0dG9uIGlzIHByZXNzZWRcclxuICAgICAgICBsZXQgZmlyc3RTbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgZmlyc3RTbGlkZS5jbGFzc0xpc3QuYWRkKCdmaXJzdC1zbGlkZS1tZW51JylcclxuICAgICAgICBcclxuICAgICAgICAvL0ZpcnN0IHNsaWRlIG1vZGUgbGVmdCBzaWRlXHJcbiAgICAgICAgbGV0IG1vZGVMZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbW9kZUxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2lkZS1tb2RlJylcclxuICAgICAgICBtb2RlTGVmdFNpZGUudGV4dENvbnRlbnQgPSAnUGxheWVyIFZzIFBsYXllcidcclxuICAgICAgICBsZXQgbW9kZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBtb2RlSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL21vZGUucG5nJ1xyXG4gICAgICAgIC8vRmlyc3Qgc2xpZGUgbW9kZSByaWdodCBzaWRlXHJcbiAgICAgICAgbGV0IG1vZGVSaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG1vZGVSaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgncmlnaHQtc2lkZS1tb2RlJylcclxuICAgICAgICBtb2RlUmlnaHRTaWRlLnRleHRDb250ZW50ID0gJ1BsYXllciBWcyBDb21wdXRlcidcclxuICAgICAgICBsZXQgbW9kZUltYWdlTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgbW9kZUltYWdlTC5zcmMgPSAnLi9pbWFnZXMvbW9kZS5wbmcnXHJcbiAgICAgICAgLy9TZWNvbmQgU2xpZGUgc2hvd25cclxuICAgICAgICBsZXQgc2Vjb25kU2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgICAgICBzZWNvbmRTbGlkZS5jbGFzc0xpc3QuYWRkKCdzZWNvbmQtc2xpZGUtbWVudScpXHJcbiAgICAgICAgbGV0IHBsYXllcjFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHBsYXllcjFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJylcclxuICAgICAgICBsZXQgbGFiZWxQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgICAgIGxhYmVsUGxheWVyMS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwbGF5ZXIxLW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIGxhYmVsUGxheWVyMS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMSBOYW1lJ1xyXG4gICAgICAgIGxldCBwbGF5ZXIxTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIHBsYXllcjFOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXIxLW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIHBsYXllcjFOYW1lSW5wdXQubmFtZSA9ICdwbGF5ZXIxTmFtZSdcclxuICAgICAgICBsZXQgcGxheWVyMkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcGxheWVyMkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKVxyXG4gICAgICAgIGxldCBsYWJlbFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICAgICAgbGFiZWxQbGF5ZXIyLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3BsYXllcjItbmFtZS1pbnB1dCcpXHJcbiAgICAgICAgbGFiZWxQbGF5ZXIyLnRleHRDb250ZW50ID0gJ1BsYXllciAyIE5hbWUnXHJcbiAgICAgICAgbGV0IHBsYXllcjJOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgcGxheWVyMk5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllcjItbmFtZS1pbnB1dCcpXHJcbiAgICAgICAgcGxheWVyMk5hbWVJbnB1dC5uYW1lID0gJ3BsYXllcjJOYW1lJ1xyXG5cclxuICAgICAgICBsZXQgdGltZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aW1lSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGltZS1jb250YWluZXInKVxyXG4gICAgICAgIGxldCB0aW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgICAgIHRpbWVUZXh0LnRleHRDb250ZW50ID0gJ1RpbWUgcGVyIHR1cm4nXHJcblxyXG4gICAgICAgIGxldCB0aW1lSW50ZXJhY3RpdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRpbWVJbnRlcmFjdGl2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10aW1lLW1haW4nKVxyXG4gICAgICAgIGxldCB0aW1lU2VsZWN0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdGltZVNlbGVjdGVkLnZhbHVlPSAnMTUnXHJcbiAgICAgICAgdGltZVNlbGVjdGVkLm5hbWUgPSAndGltZVNlbGVjdGVkJ1xyXG4gICAgICAgIHRpbWVTZWxlY3RlZC5yZWFkT25seSA9IHRydWVcclxuICAgICAgICBsZXQgbGVmdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBsZWZ0QXJyb3cuc3JjID0gJy4vaW1hZ2VzL2Fycm93LnBuZydcclxuICAgICAgICBsZXQgcmlnaHRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgcmlnaHRBcnJvdy5zcmMgPSAnLi9pbWFnZXMvYXJyb3cucG5nJ1xyXG4gICAgICAgIGxldCBjdXJyZW50VGltZSA9IDJcclxuICAgICAgICBsZXQgdGltZXNBcnJheSA9IFs1LDEwLDE1LDIwLDI1LDMwXVxyXG5cclxuICAgICAgICBsZXQgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgbmV4dEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCdcclxuICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25leHQtYnV0dG9uLW1lbnUnKVxyXG4gICAgICAgIG5leHRCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGludWUnXHJcbiAgICAgICAgbGV0IGJ1dHRvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuXHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uTCA9IFtcclxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCknIH0sXHJcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMjBweCknIH0sXHJcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpJ31cclxuICAgICAgICAgIF07XHJcbiAgICAgICAgICBjb25zdCBhbmltYXRpb25SID0gW1xyXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KScgfSxcclxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDIwcHgpJyB9LFxyXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KSd9XHJcbiAgICAgICAgICBdO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCB0aW1pbmcgPSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MCxcclxuICAgICAgICAgICAgaXRlcmF0aW9uczogMSxcclxuICAgICAgICAgIH1cclxuICAgICAgICBsZWZ0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFRpbWUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGltZUludGVyYWN0aXZlQnV0dG9uLmFuaW1hdGUoYW5pbWF0aW9uTCwgdGltaW5nKVxyXG4gICAgICAgICAgICBjdXJyZW50VGltZS0tXHJcbiAgICAgICAgICAgIHRpbWVTZWxlY3RlZC52YWx1ZT0gdGltZXNBcnJheVtjdXJyZW50VGltZV1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFRpbWUgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGltZUludGVyYWN0aXZlQnV0dG9uLmFuaW1hdGUoYW5pbWF0aW9uUiwgdGltaW5nKVxyXG4gICAgICAgICAgICBjdXJyZW50VGltZSsrXHJcbiAgICAgICAgICAgIHRpbWVTZWxlY3RlZC52YWx1ZSA9IHRpbWVzQXJyYXlbY3VycmVudFRpbWVdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9FdmVudCBsaXN0ZW5lcnNcclxuICAgICAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKT0+e1xyXG4gICAgICAgICAgICBkeW5hbWljQ29udGFpbmVyLnJlbW92ZUNoaWxkKHN0YXJ0QnV0dG9uKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWWVwJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgZmlyc3RTbGlkZS5jbGFzc0xpc3QuYWRkKCdzaG93JylcclxuICAgICAgICAgICAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uLWV4cGFuZCcpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBmaXJzdFNsaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgZmlyc3RTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgICAgICAgICAgZmlyc3RTbGlkZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCk9PntcclxuICAgICAgICAgICAgICAgIHNlY29uZFNsaWRlLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbW9kZUxlZnRTaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpPT57XHJcbiAgICAgICAgICAgIGZpcnN0U2xpZGUuY2xhc3NMaXN0LmFkZCgnbW9kZS1ob3ZlcmVkJylcclxuICAgICAgICAgICAgbW9kZUxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoJ3NpZGUtaG92ZXJlZCcpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBtb2RlTGVmdFNpZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKT0+e1xyXG4gICAgICAgICAgICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGUtaG92ZXJlZCcpXHJcbiAgICAgICAgICAgIG1vZGVMZWZ0U2lkZS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlLWhvdmVyZWQnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbW9kZVJpZ2h0U2lkZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKT0+e1xyXG4gICAgICAgICAgICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5hZGQoJ21vZGUtaG92ZXJlZCcpXHJcbiAgICAgICAgICAgIG1vZGVSaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgnc2lkZS1ob3ZlcmVkJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1vZGVSaWdodFNpZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKT0+e1xyXG4gICAgICAgICAgICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGUtaG92ZXJlZCcpXHJcbiAgICAgICAgICAgIG1vZGVSaWdodFNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZS1ob3ZlcmVkJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1vZGVSaWdodFNpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICBwbGF5ZXIyTmFtZUlucHV0LnJlYWRPbmx5ID0gdHJ1ZVxyXG4gICAgICAgICAgICBwbGF5ZXIyTmFtZUlucHV0LnZhbHVlID0gJ1BDJ1xyXG4gICAgICAgICAgICBwbGF5ZXIxTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ1BsYXllciAxIHRhZydcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1vZGVMZWZ0U2lkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIHBsYXllcjFOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnUGxheWVyIDEgdGFnJ1xyXG4gICAgICAgICAgICBwbGF5ZXIyTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ1BsYXllciAyIHRhZydcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL0FwcGVuZGluZyB0byBET01cclxuICAgICAgICBtb2RlTGVmdFNpZGUuYXBwZW5kQ2hpbGQobW9kZUltYWdlTClcclxuICAgICAgICBtb2RlUmlnaHRTaWRlLmFwcGVuZENoaWxkKG1vZGVJbWFnZSlcclxuXHJcbiAgICAgICAgcGxheWVyMUNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbFBsYXllcjEpXHJcbiAgICAgICAgcGxheWVyMUNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXIxTmFtZUlucHV0KVxyXG4gICAgICAgIHBsYXllcjJDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxQbGF5ZXIyKVxyXG4gICAgICAgIHBsYXllcjJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyMk5hbWVJbnB1dClcclxuICAgICAgICB0aW1lSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZVRleHQpXHJcbiAgICAgICAgdGltZUludGVyYWN0aXZlQnV0dG9uLmFwcGVuZENoaWxkKGxlZnRBcnJvdylcclxuICAgICAgICB0aW1lSW50ZXJhY3RpdmVCdXR0b24uYXBwZW5kQ2hpbGQodGltZVNlbGVjdGVkKVxyXG4gICAgICAgIHRpbWVJbnRlcmFjdGl2ZUJ1dHRvbi5hcHBlbmRDaGlsZChyaWdodEFycm93KVxyXG4gICAgICAgIHRpbWVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lSW50ZXJhY3RpdmVCdXR0b24pXHJcbiAgICAgICAgbmV4dEJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25TcGFuKVxyXG5cclxuICAgICAgICBmaXJzdFNsaWRlLmFwcGVuZENoaWxkKG1vZGVMZWZ0U2lkZSlcclxuICAgICAgICBmaXJzdFNsaWRlLmFwcGVuZENoaWxkKG1vZGVSaWdodFNpZGUpXHJcblxyXG4gICAgICAgIHNlY29uZFNsaWRlLmFwcGVuZENoaWxkKHBsYXllcjFDb250YWluZXIpXHJcbiAgICAgICAgc2Vjb25kU2xpZGUuYXBwZW5kQ2hpbGQocGxheWVyMkNvbnRhaW5lcilcclxuICAgICAgICBzZWNvbmRTbGlkZS5hcHBlbmRDaGlsZCh0aW1lSW5wdXRDb250YWluZXIpXHJcbiAgICAgICAgc2Vjb25kU2xpZGUuYXBwZW5kQ2hpbGQobmV4dEJ1dHRvbilcclxuXHJcbiAgICAgICAgZHluYW1pY0NvbnRhaW5lci5hcHBlbmQoc2Vjb25kU2xpZGUpXHJcbiAgICAgICAgZHluYW1pY0NvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdFNsaWRlKVxyXG4gICAgICAgIGR5bmFtaWNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pXHJcblxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGVNZW51KSAgICAgICAgXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkeW5hbWljQ29udGFpbmVyKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzcGxheVNoaXBzU2V0dXA9ICgpPT57XHJcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIGxldCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcclxuICAgICAgICBtYWluSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1tYWluJylcclxuICAgICAgICBsZXQgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCdcclxuICAgICAgICBtYWluVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtbWFpbicpXHJcbiAgICAgICAgbGV0IGdhbWVTdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgZ2FtZVN0YXRlLnRleHRDb250ZW50ID0gJ1NldHRpbmcgVXAnXHJcbiAgICAgICAgZ2FtZVN0YXRlLmNsYXNzTGlzdC5hZGQoJ2dhbWUtc3RhdGUtbWFpbicpXHJcbiAgICAgICAgbGV0IG9wdGlvbnNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIG9wdGlvbnNCdXR0b24uc3JjID0gJy4vaW1hZ2VzL3NldHRpbmdzLnBuZydcclxuICAgICAgICBvcHRpb25zQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMtYnV0dG9uJylcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBsZXQgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBib2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9hcmRzLWNvbnRhaW5lci1tYWluJylcclxuICAgICAgICAvL0xlZnQgc2lkZSBHYW1lYm9hcmRcclxuICAgICAgICBsZXQgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2lkZS1jb250YWluZXItbWFpbicpXHJcbiAgICAgICAgbGV0IGxlZnRTaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbGVmdFNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2hpcHMtY29udGFpbmVyLW1haW4nKVxyXG4gICAgICAgIGxldCBsZW5ndGhzID0gWzUsNCwzLDMsMl1cclxuICAgICAgICBsZW5ndGhzLmZvckVhY2goKGxlbmd0aCwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgIGxldCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgc2hpcC5kYXRhc2V0Lmxlbmd0aCA9IGxlbmd0aFxyXG4gICAgICAgICAgICBzaGlwLmRyYWdnYWJsZSA9IHRydWVcclxuICAgICAgICAgICAgc2hpcC5pZCA9IGluZGV4ICsgJy1sZWZ0J1xyXG4gICAgICAgICAgICBzaGlwLnN0eWxlLmdyaWRSb3dTdGFydCA9IGBzcGFuICR7bGVuZ3RofWAgXHJcbiAgICAgICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgbGVuZ3RoICsgJyBsZWZ0JyArIGAgJHtzaGlwLmlkfWApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxlZnRTaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGxlZnRQbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbGVmdFBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2xlZnQtcGxheWVyLWJvYXJkLW1haW4nKVxyXG4gICAgICAgIGxldCBib2FyZHNPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBib2FyZHNPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2JvYXJkLW92ZXJsYXktbGVmdCcpXHJcbiAgICAgICAgbGVmdFBsYXllckJvYXJkLmFwcGVuZENoaWxkKGJvYXJkc092ZXJsYXkpXHJcbiAgICAgICAgLy9SaWdodCBzaWRlIEdhbWVib2FyZFxyXG4gICAgICAgIGxldCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCdyaWdodC1zaWRlLWNvbnRhaW5lci1tYWluJylcclxuICAgICAgICBsZXQgcmlnaHRTaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcmlnaHRTaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyaWdodC1zaGlwcy1jb250YWluZXItbWFpbicpXHJcbiAgICAgICAgbGVuZ3Rocy5mb3JFYWNoKChsZW5ndGgsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICBsZXQgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHNoaXAuZGF0YXNldC5sZW5ndGggPSBsZW5ndGhcclxuICAgICAgICAgICAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlXHJcbiAgICAgICAgICAgIHNoaXAuaWQgPSBpbmRleCArICctcmlnaHQnXHJcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuZ3JpZFJvd1N0YXJ0ID0gYHNwYW4gJHtsZW5ndGh9YCBcclxuICAgICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBlPT57XHJcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgbGVuZ3RoICsgJyByaWdodCcgKyBgICR7c2hpcC5pZH1gKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByaWdodFNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXApXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgcmlnaHRQbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcmlnaHRQbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdyaWdodC1wbGF5ZXItYm9hcmQtbWFpbicpXHJcbiAgICAgICAgYm9hcmRzT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgYm9hcmRzT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdib2FyZC1vdmVybGF5LXJpZ2h0JylcclxuICAgICAgICByaWdodFBsYXllckJvYXJkLmFwcGVuZENoaWxkKGJvYXJkc092ZXJsYXkpXHJcbiAgICAgICAgLy9Qb3B1bGF0aW5nIGJvYXJkcyB3aXRoIHRpbGVzXHJcbiAgICAgICAgbGV0IHBvcHVsYXRlQm9hcmRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuZGF0YXNldC54ID0gaVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuZGF0YXNldC55ID0galxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnbGVmdC10aWxlJylcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0UGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQodGlsZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5kYXRhc2V0LnggPSBpXHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5kYXRhc2V0LnkgPSBqXHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdyaWdodC10aWxlJylcclxuICAgICAgICAgICAgICAgICAgICByaWdodFBsYXllckJvYXJkLmFwcGVuZENoaWxkKHRpbGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9BcHBlbmRpbmcgZWxlbWVudHMgdG8gRE9NXHJcbiAgICAgICAgcG9wdWxhdGVCb2FyZHMoKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKG1haW5UaXRsZSlcclxuICAgICAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGdhbWVTdGF0ZSlcclxuICAgICAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKG9wdGlvbnNCdXR0b24pXHJcblxyXG4gICAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGxlZnRTaGlwc0NvbnRhaW5lcilcclxuICAgICAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChsZWZ0UGxheWVyQm9hcmQpXHJcbiAgICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHJpZ2h0UGxheWVyQm9hcmQpXHJcbiAgICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHJpZ2h0U2hpcHNDb250YWluZXIpXHJcbiAgICAgICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRTaWRlKVxyXG4gICAgICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodFNpZGUpXHJcblxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcilcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGJvYXJkc0NvbnRhaW5lcilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaXNwbGF5TWFpbkdhbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xyXG5cclxuICAgICAgICBsZXQgdG9wQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRvcEJvYXJkLmNsYXNzTGlzdC5hZGQoJ3RvcC1ib2FyZC1tYWluJylcclxuICAgICAgICBsZXQgbGVmdFBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGxlZnRQbGF5ZXJOYW1lLmNsYXNzTGlzdC5hZGQoJ2xlZnQtcGxheWVyLW5hbWUtbWFpbicpXHJcbiAgICAgICAgbGVmdFBsYXllck5hbWUudGV4dENvbnRlbnQgPSAnUGxheWVyIDEnXHJcbiAgICAgICAgbGV0IHR1cm5Db3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0dXJuQ291bnRlci5jbGFzc0xpc3QuYWRkKCd0dXJuLWNvdW50ZXItbWFpbicpXHJcbiAgICAgICAgdHVybkNvdW50ZXIudGV4dENvbnRlbnQgPSAnMidcclxuICAgICAgICBsZXQgcmlnaHRQbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICByaWdodFBsYXllck5hbWUuY2xhc3NMaXN0LmFkZCgncmlnaHQtcGxheWVyLW5hbWUtbWFpbicpXHJcbiAgICAgICAgcmlnaHRQbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gJ1BsYXllciAyJ1xyXG5cclxuICAgICAgICBsZXQgYm90dG9tQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGJvdHRvbUJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbS1ib2FyZC1tYWluJylcclxuICAgICAgICBsZXQgbGVmdFBsYXllclNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBsZWZ0UGxheWVyU2hpcHMuY2xhc3NMaXN0LmFkZCgnbGVmdC1wbGF5ZXItc2hpcHMtbWFpbicpXHJcbiAgICAgICAgbGVmdFBsYXllclNoaXBzLnRleHRDb250ZW50ID0gJzMnXHJcbiAgICAgICAgbGV0IHRpbWVDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgXHJcbiAgICAgICAgdGltZUNvdW50ZXIuY2xhc3NMaXN0LmFkZCgndGltZS1jb3VudGVyLW1haW4nKVxyXG4gICAgICAgIHRpbWVDb3VudGVyLnRleHRDb250ZW50ID0gJzdzJ1xyXG4gICAgICAgIGxldCByaWdodFBsYXllclNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICByaWdodFBsYXllclNoaXBzLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXBsYXllci1zaGlwcy1tYWluJylcclxuICAgICAgICByaWdodFBsYXllclNoaXBzLnRleHRDb250ZW50ID0gJzEnXHJcblxyXG4gICAgICAgIGxldCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGJvYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2FyZHMtY29udGFpbmVyLW1haW4nKVxyXG4gICAgICAgIGxldCBsZWZ0UGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGxlZnRQbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdsZWZ0LXBsYXllci1ib2FyZC1tYWluJylcclxuICAgICAgICBsZXQgcmlnaHRQbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcmlnaHRQbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdyaWdodC1wbGF5ZXItYm9hcmQtbWFpbicpXHJcblxyXG4gICAgICAgIGxldCBwb3B1bGF0ZUJvYXJkcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgICAgICAgICB0aWxlLmRhdGFzZXQueCA9IGlcclxuICAgICAgICAgICAgICAgICAgICB0aWxlLmRhdGFzZXQueSA9IGpcclxuICAgICAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2xlZnQtdGlsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFBsYXllckJvYXJkLmFwcGVuZENoaWxkKHRpbGUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuZGF0YXNldC54ID0gaVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuZGF0YXNldC55ID0galxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgncmlnaHQtdGlsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRQbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZCh0aWxlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb3B1bGF0ZUJvYXJkcygpXHJcbiAgICAgICAgbGVmdFBsYXllck5hbWUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKVxyXG4gICAgICAgIHJpZ2h0UGxheWVyTmFtZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpXHJcbiAgICAgICAgdG9wQm9hcmQuYXBwZW5kQ2hpbGQobGVmdFBsYXllck5hbWUpXHJcbiAgICAgICAgdG9wQm9hcmQuYXBwZW5kQ2hpbGQodHVybkNvdW50ZXIpXHJcbiAgICAgICAgdG9wQm9hcmQuYXBwZW5kQ2hpbGQocmlnaHRQbGF5ZXJOYW1lKVxyXG5cclxuICAgICAgICBib3R0b21Cb2FyZC5hcHBlbmRDaGlsZChsZWZ0UGxheWVyU2hpcHMpXHJcbiAgICAgICAgYm90dG9tQm9hcmQuYXBwZW5kQ2hpbGQodGltZUNvdW50ZXIpXHJcbiAgICAgICAgYm90dG9tQm9hcmQuYXBwZW5kQ2hpbGQocmlnaHRQbGF5ZXJTaGlwcylcclxuICAgICAgICBsZWZ0UGxheWVyU2hpcHMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKVxyXG4gICAgICAgIHJpZ2h0UGxheWVyU2hpcHMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKVxyXG5cclxuICAgICAgICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdFBsYXllckJvYXJkKVxyXG4gICAgICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodFBsYXllckJvYXJkKVxyXG5cclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRvcEJvYXJkKVxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYm90dG9tQm9hcmQpXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChib2FyZHNDb250YWluZXIpXHJcbiAgICB9XHJcbiAgICBsZXQgcmVuZGVyQXR0ZW1wdCA9IChhdHRlbXB0LCBzaWRlKSA9PntcclxuICAgICAgICBpZihhdHRlbXB0WzBdPT0gJ21pc3NlZCcpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtzaWRlfVtkYXRhLXg9JyR7YXR0ZW1wdFsxXX0nXVtkYXRhLXk9JyR7YXR0ZW1wdFsyXX0nXWApLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NpZGV9W2RhdGEteD0nJHthdHRlbXB0WzFdfSddW2RhdGEteT0nJHthdHRlbXB0WzJdfSddYCkuY2xhc3NMaXN0LmFkZCgnaGl0JylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7ZGlzcGxheU1haW5HYW1lLCBkaXNwbGF5TWVudSwgZGlzcGxheVNoaXBzU2V0dXAsIHJlbmRlckF0dGVtcHR9XHJcbn0pKCkiLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGxldCBib2FyZCA9IFsuLi5BcnJheSgxMCldLm1hcCgoKT0+QXJyYXkoMTApKVxyXG4gICAgbGV0IHJlY29yZHMgPSBbLi4uQXJyYXkoMTApXS5tYXAoKCk9PkFycmF5KDEwKSlcclxuICAgIGxldCBzaGlwc09uQm9hcmQgPSBbXVxyXG5cclxuICAgIGxldCBfcGFyc2VUb1lYID0gKHN0cikgPT4ge1xyXG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkoc3RyKSAmJiBzdHIubGVuZ3RoID09IDIpe1xyXG4gICAgICAgICAgICBpZigoc3RyWzBdID49IDAgJiYgc3RyWzBdIDw9IDkpICYmIChzdHJbMV0gPj0gMCAmJiBzdHJbMV0gPD0gOSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHN0ci5sZW5ndGggIT0gMiB8fCB0eXBlb2Ygc3RyICE9IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBbcG9zaXRpb25ZLCBwb3NpdGlvblhdID0gc3RyLnNwbGl0KFwiXCIpXHJcbiAgICAgICAgcG9zaXRpb25YID0gK3Bvc2l0aW9uWFxyXG4gICAgICAgIHBvc2l0aW9uWSA9IHBvc2l0aW9uWS5jaGFyQ29kZUF0KDApXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKChOdW1iZXIuaXNOYU4ocG9zaXRpb25YKSkgfHwgKHBvc2l0aW9uWSA8IDY1IHx8IHBvc2l0aW9uWSA+IDc0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbcG9zaXRpb25ZIC0gNjUsIHBvc2l0aW9uWF1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX3BhcnNlVG9TdHIgPSAocm93LCBjb2x1bW4pID0+IHtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSBbXVxyXG4gICAgICAgIHBvc2l0aW9uLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShyb3cgKyA2NSkpXHJcbiAgICAgICAgcG9zaXRpb24ucHVzaChjb2x1bW4pXHJcblxyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbi5qb2luKCcnKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgc2V0U2hpcCA9IChsZW5ndGgsIHBvc2l0aW9uLCBpc0hvcml6b250YWwgPSB0cnVlKSA9PiB7XHJcbiAgICAgICAgaWYgKGxlbmd0aCA+IDUgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBsZW5ndGhcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKCFfcGFyc2VUb1lYKHBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNvb3JkaW5hdGVcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IFtyb3csIGNvbHVtbl0gPSBfcGFyc2VUb1lYKHBvc2l0aW9uKVxyXG5cclxuICAgICAgICBpZigocm93ID4gOSB8fCByb3cgPCAwKSB8fCAoY29sdW1uID4gOSB8fCBjb2x1bW4gPCAwKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNvb3JkaW5hdGVcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKChyb3cgKyBsZW5ndGggPiAxMCAmJiAhaXNIb3Jpem9udGFsKSB8fCAoY29sdW1uICsgbGVuZ3RoID4gMTAgJiYgaXNIb3Jpem9udGFsKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNvb3JkaW5hdGUgZHVlIHRvIGxlbmd0aFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY3JyU2hpcCA9IHNoaXAobGVuZ3RoKVxyXG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdXHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKGlzSG9yaXpvbnRhbCl7XHJcbiAgICAgICAgICAgICAgICBpZihib2FyZFtyb3ddW2NvbHVtbiArIGldKSByZXR1cm4gXCJTcGFjZSBvbiBjb29yZGluYXRlIGlzIHVuYXZhaWxhYmxlXCJcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKGJvYXJkW3JvdyArIGldW2NvbHVtbl0pIHJldHVybiBcIlNwYWNlIG9uIGNvb3JkaW5hdGUgaXMgdW5hdmFpbGFibGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihpc0hvcml6b250YWwpe1xyXG4gICAgICAgICAgICAgICAgYm9hcmRbcm93XVtjb2x1bW4gKyBpXSA9IGNyclNoaXBcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goX3BhcnNlVG9TdHIocm93LCBjb2x1bW4gKyBpKSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJvYXJkW3JvdyArIGldW2NvbHVtbl0gPSBjcnJTaGlwO1xyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChfcGFyc2VUb1N0cihyb3cgKyBpLCBjb2x1bW4pKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoaXBzT25Cb2FyZC5wdXNoKHtzaGlwIDpjcnJTaGlwLGNvb3JkaW5hdGVzfSlcclxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVjZWl2ZUF0dGFjayA9IChwb3NpdGlvbikgPT4geyAgICAgICAgXHJcbiAgICAgICAgaWYoIV9wYXJzZVRvWVgocG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkludmFsaWQgY29vcmRpbmF0ZXNcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgW3JvdywgY29sdW1uXSA9IF9wYXJzZVRvWVgocG9zaXRpb24pXHJcbiAgICAgICAgaWYoKHJvdyA+IDkgfHwgcm93IDwgMCkgfHwgKGNvbHVtbiA+IDkgfHwgY29sdW1uIDwgMCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNvb3JkaW5hdGVzXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihyZWNvcmRzW3Jvd11bY29sdW1uXSA9PSAnaGl0JyB8fCByZWNvcmRzW3Jvd11bY29sdW1uXSA9PSAnbWlzc2VkJyl7XHJcbiAgICAgICAgICAgIHJldHVybiBcImF0dGFja2VkXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWJvYXJkW3Jvd11bY29sdW1uXSl7XHJcbiAgICAgICAgICAgIHJlY29yZHNbcm93XVtjb2x1bW5dID0gJ21pc3NlZCdcclxuICAgICAgICAgICAgcmV0dXJuIFsnbWlzc2VkJywgcm93LCBjb2x1bW5dXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvYXJkW3Jvd11bY29sdW1uXS5oaXQoKVxyXG4gICAgICAgIHJlY29yZHNbcm93XVtjb2x1bW5dID0gJ2hpdCdcclxuICAgICAgICByZXR1cm4gWydoaXQnLCByb3csIGNvbHVtbl1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzaGlwc09uQm9hcmQucmVkdWNlKChhY2MsY3JyKT0+e1xyXG4gICAgICAgICAgICBpZihjcnIuc2hpcC5pc1N1bmsoKSAmJiBhY2MpIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSBcclxuICAgICAgICB9LCB0cnVlKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgc2V0UmFuZG9tU2hpcHMgPSAoKSA9PntcclxuICAgICAgICBsZXQgbGVuZ3RocyA9IFs1LDQsMywzLDJdXHJcbiAgICAgICAgbGVuZ3Rocy5mb3JFYWNoKGxlbmd0aD0+e1xyXG4gICAgICAgICAgICB3aGlsZSh0cnVlKXtcclxuICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoc2V0U2hpcChsZW5ndGgsW19yYW5kb21JbnQoMTApLCBfcmFuZG9tSW50KDEwKV0sIF9yYW5kb21JbnQoMikpKSkgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBsZXQgZ2V0UmVjb3JkcyA9ICgpID0+IHJlY29yZHM7XHJcbiAgICBsZXQgcm90YXRlU2hpcCA9IChzdGFydENvb3JkcywgZW5kQ29vcmRzLCBsZW5ndGgpID0+e1xyXG4gICAgICAgIGxldCBzaGlwID0gYm9hcmRbc3RhcnRDb29yZHNbMF1dW3N0YXJ0Q29vcmRzWzFdXVxyXG4gICAgICAgIGlmKHN0YXJ0Q29vcmRzWzBdID09PSBlbmRDb29yZHNbMF0pe1xyXG4gICAgICAgICAgICBpZihzdGFydENvb3Jkc1swXStsZW5ndGggPiA5KXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnSW52YWxpZCBkdWUgdG8gbGVuZ3RoJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBzdGFydENvb3Jkc1swXTtpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbc3RhcnRDb29yZHNbMF0rMV1bc3RhcnRDb29yZHNbMV1dKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgY29vcmQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVtb3ZlU2hpcChzdGFydENvb3JkcywgZW5kQ29vcmRzLCBsZW5ndGgpXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGFydENvb3Jkc1swXTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGJvYXJkW3N0YXJ0Q29vcmRzWzBdK2ldW3N0YXJ0Q29vcmRzWzFdXSA9IHNoaXBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYoc3RhcnRDb29yZHNbMV0gKyBsZW5ndGggPiA5KXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnSW52YWxpZCBkdWUgdG8gbGVuZ3RoJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBzdGFydENvb3Jkc1sxXTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKGJvYXJkW3N0YXJ0Q29vcmRzWzBdXVtzdGFydENvb3Jkc1sxXSArIDFdKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgY29vcmQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVtb3ZlU2hpcChzdGFydENvb3JkcywgZW5kQ29vcmRzLCBsZW5ndGgpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RhcnRDb29yZHNbMV07IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBib2FyZFtzdGFydENvb3Jkc1swXV1bc3RhcnRDb29yZHNbMV0raV0gPSBzaGlwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgcmVtb3ZlU2hpcCA9IChzdGFydENvb3JkcywgZW5kQ29vcmRzLCBsZW5ndGgpID0+e1xyXG4gICAgICAgIGlmKHN0YXJ0Q29vcmRzWzBdID09PSBlbmRDb29yZHNbMF0pe1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSBzdGFydENvb3Jkc1sxXTsgaSA8IGVuZENvb3Jkc1sxXTtpKyspe1xyXG4gICAgICAgICAgICAgICAgYm9hcmRbc3RhcnRDb29yZHNbMF1dW2ldID0gbnVsbFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHN0YXJ0Q29vcmRzWzBdOyBpIDwgZW5kQ29vcmRzWzBdOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgYm9hcmRbaV1bc3RhcnRDb29yZHNbMF1dID0gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBfcmFuZG9tSW50ID0gKG51bSkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtKTtcclxuICAgIHJldHVybiB7c2V0U2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU2hpcHNTdW5rLCBnZXRSZWNvcmRzLCBzZXRSYW5kb21TaGlwcywgcm90YXRlU2hpcH1cclxufSAiLCJpbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IGdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XHJcbmltcG9ydCBwbGF5ZXIgZnJvbSAnLi9wbGF5ZXInXHJcbmltcG9ydCBhaVBsYXllciBmcm9tIFwiLi9haVBsYXllclwiO1xyXG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xyXG4gICAgbGV0IGNvbmZpZyA9IHt9XHJcbiAgICBsZXQgY3JyTW92ZXMgPSBbXVxyXG5cclxuICAgIGxldCBwYXJzZVRvWVggPSAoc3RyKSA9PiB7XHJcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShzdHIpICYmIHN0ci5sZW5ndGggPT0gMil7XHJcbiAgICAgICAgICAgIGlmKChzdHJbMF0gPj0gMCAmJiBzdHJbMF0gPD0gOSkgJiYgKHN0clsxXSA+PSAwICYmIHN0clsxXSA8PSA5KSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3RyLmxlbmd0aCAhPSAyIHx8IHR5cGVvZiBzdHIgIT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IFtwb3NpdGlvblksIHBvc2l0aW9uWF0gPSBzdHIuc3BsaXQoXCJcIilcclxuICAgICAgICBwb3NpdGlvblggPSArcG9zaXRpb25YXHJcbiAgICAgICAgcG9zaXRpb25ZID0gcG9zaXRpb25ZLmNoYXJDb2RlQXQoMClcclxuICAgICAgICBcclxuICAgICAgICBpZiAoKE51bWJlci5pc05hTihwb3NpdGlvblgpKSB8fCAocG9zaXRpb25ZIDwgNjUgfHwgcG9zaXRpb25ZID4gNzQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtwb3NpdGlvblkgLSA2NSwgcG9zaXRpb25YXVxyXG4gICAgfVxyXG4gICAgY29uc3QgcGxheVJvdW5kID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGNvbmZpZy5nYW1lTW9kZSA9PSAncHZhaScpe1xyXG4gICAgICAgICAgICBsZXQgcGxheWVyMUF0dGVtcHQgPSAgY29uZmlnLnBsYXllcjFPYmouc2VuZEF0dGFjayhjcnJNb3Zlc1swXSwgY29uZmlnLnBsYXllcjJCb2FyZClcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQXR0ZW1wdChwbGF5ZXIxQXR0ZW1wdCwgXCJyaWdodC10aWxlXCIpXHJcblxyXG4gICAgICAgICAgICBsZXQgcGNBdHRlbXB0ID0gY29uZmlnLnBsYXllcjJPYmouc2VuZEF0dGFjayhjb25maWcucGxheWVyMUJvYXJkKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwY0F0dGVtcHQpXHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckF0dGVtcHQocGNBdHRlbXB0LCAnbGVmdC10aWxlJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYWtlTW92ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY3JyTW92ZXNbMF0gPSBbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueCwgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueV1cclxuICAgICAgICBpZihnYW1lTW9kZSA9PSAncHZhaScpe1xyXG4gICAgICAgICAgICBwbGF5Um91bmQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgc2V0dXAgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9HZXQgSW5mbyBmcm9tIERPTSBcclxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5TWVudSgpXHJcbiAgICAgICAgbGV0IGNvbnRpbnVlQnV0dG9uICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtc2xpZGUtbWVudScpXHJcbiAgICAgICAgY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc2V0UGxheWVycylcclxuICAgICAgICBsZXQgcmlnaHRNb2RlU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtc2lkZS1tb2RlJylcclxuICAgICAgICByaWdodE1vZGVTZWxlY3RlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIGNvbmZpZy5nYW1lTW9kZSA9ICdwdmFpJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGxlZnRNb2RlU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1zaWRlLW1vZGUnKVxyXG4gICAgICAgIGxlZnRNb2RlU2VsZWN0ZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICBjb25maWcuZ2FtZU1vZGUgPSAncHZwJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBsZWZ0VGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmlnaHQtdGlsZScpXHJcbiAgICAgICAgbGVmdFRpbGVzLmZvckVhY2godGlsZT0+dGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VNb3ZlKSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNldFBsYXllcnMgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGxldCBmb3JtID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShlLnRhcmdldCkuZW50cmllcygpKVxyXG4gICAgICAgIGlmKCFmb3JtLnBsYXllcjFOYW1lKXtcclxuICAgICAgICAgICAgY29uZmlnLnBsYXllcjFPYmogPSBwbGF5ZXIoJ1BsYXllciAxJylcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGNvbmZpZy5wbGF5ZXIxT2JqID0gcGxheWVyKGZvcm0ucGxheWVyMU5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvbmZpZy5nYW1lTW9kZSAhPSAncHZhaScpe1xyXG4gICAgICAgICAgICBpZighZm9ybS5wbGF5ZXIyTmFtZSl7XHJcbiAgICAgICAgICAgICAgICBjb25maWcucGxheWVyMk9iaiA9IHBsYXllcignUGxheWVyIDInKVxyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25maWcucGxheWVyMk9iaiA9IHBsYXllcihmb3JtLnBsYXllcjJOYW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBjb25maWcucGxheWVyMk9iaiA9IGFpUGxheWVyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uZmlnLnBsYXllcjFCb2FyZCA9IGdhbWVib2FyZCgpXHJcbiAgICAgICAgY29uZmlnLnBsYXllcjJCb2FyZCA9IGdhbWVib2FyZCgpXHJcbiAgICAgICAgY29uZmlnLnRpbWVQZXJUdXJuID0gZm9ybS50aW1lU2VsZWN0ZWRcclxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5U2hpcHNTZXR1cCgpXHJcbiAgICAgICAgc2V0U2hpcHMoKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2V0U2hpcHMgPSAoKSA9PntcclxuICAgICAgICBsZXQgbGVmdFRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxlZnQtdGlsZScpXHJcbiAgICAgICAgbGVmdFRpbGVzLmZvckVhY2godGlsZT0+e1xyXG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2KT0+ZXYucHJldmVudERlZmF1bHQoKSlcclxuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZXY9PntcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLW92ZXJsYXktbGVmdCcpXHJcbiAgICAgICAgICAgICAgICBsZXQgW2xlbmd0aCwgc2lkZSwgaWRdID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKS5zcGxpdCgnICcpXHJcbiAgICAgICAgICAgICAgICBpZihzaWRlICE9ICdsZWZ0Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0ZW1wdCA9IGNvbmZpZy5wbGF5ZXIxQm9hcmQuc2V0U2hpcCgrbGVuZ3RoLCBbK2V2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC54LCArZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LnldLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGF0dGVtcHQpKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBwYXJzZVRvWVgoYXR0ZW1wdFswXSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kID0gcGFyc2VUb1lYKGF0dGVtcHRbYXR0ZW1wdC5sZW5ndGggLSAxXSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcEJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc3RhcnRbMF0gPT0gZW5kWzBdKXsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEJsb2NrLnN0eWxlLmdyaWRDb2x1bW4gPSBgJHtzdGFydFswXX0gLyAke2VuZFswXX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBCbG9jay5zdHlsZS5ncmlkUm93U3RhcnQgPSBgJHtzdGFydFsxXX1gIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwQmxvY2suc3R5bGUuZ3JpZENvbHVtblN0YXJ0ID0gYCR7c3RhcnRbMV0gKyAxfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEJsb2NrLnN0eWxlLmdyaWRSb3cgPSBgJHtzdGFydFswXSArIDF9LyR7ZW5kWzBdICsgMn1gIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzaGlwQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcEJsb2NrLmRhdGFzZXQuc3RhcnRDb29yZCA9IGBgKyBbLi4uc3RhcnRdXHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcEJsb2NrLmRhdGFzZXQuZW5kQ29vcmQgPSBgJHtbLi4uZW5kXX1gXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5hcHBlbmRDaGlsZChzaGlwQmxvY2spXHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCByaWdodFRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJpZ2h0LXRpbGUnKVxyXG4gICAgICAgIHJpZ2h0VGlsZXMuZm9yRWFjaCh0aWxlPT57XHJcbiAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXYpPT5ldi5wcmV2ZW50RGVmYXVsdCgpKVxyXG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBldj0+e1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtb3ZlcmxheS1yaWdodCcpXHJcbiAgICAgICAgICAgICAgICBsZXQgW2xlbmd0aCwgc2lkZSwgaWRdID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKS5zcGxpdCgnICcpXHJcbiAgICAgICAgICAgICAgICBpZihzaWRlICE9ICdyaWdodCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGF0dGVtcHQgPSBjb25maWcucGxheWVyMkJvYXJkLnNldFNoaXAoK2xlbmd0aCwgWytldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueCwgK2V2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC55XSwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhdHRlbXB0KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gcGFyc2VUb1lYKGF0dGVtcHRbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZCA9IHBhcnNlVG9ZWChhdHRlbXB0W2F0dGVtcHQubGVuZ3RoIC0gMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXBCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHN0YXJ0WzBdID09IGVuZFswXSl7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBCbG9jay5zdHlsZS5ncmlkQ29sdW1uID0gYCR7c3RhcnRbMF19IC8gJHtlbmRbMF19YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwQmxvY2suc3R5bGUuZ3JpZFJvd1N0YXJ0ID0gYCR7c3RhcnRbMV19YCBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEJsb2NrLnN0eWxlLmdyaWRDb2x1bW5TdGFydCA9IGAke3N0YXJ0WzFdICsgMX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBCbG9jay5zdHlsZS5ncmlkUm93ID0gYCR7c3RhcnRbMF0gKyAxfS8ke2VuZFswXSArIDJ9YCBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcEJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlnLnBsYXllcjJCb2FyZC5yb3RhdGVTaGlwKHN0YXJ0LGVuZCxsZW5ndGgpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKHNoaXBCbG9jaylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7cGxheVJvdW5kLCBzZXR1cH1cclxufSkoKSIsImV4cG9ydCBkZWZhdWx0ICh0YWcpID0+IHtcclxuICAgIGlmKHR5cGVvZiB0YWcgIT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGxldCBwbGF5ZXJUYWcgPSB0YWdcclxuICAgIFxyXG4gICAgbGV0IGdldFBsYXllclRhZyA9ICgpID0+IHBsYXllclRhZztcclxuXHJcbiAgICBsZXQgc2VuZEF0dGFjayA9IChwb3NpdGlvbiwgZ2FtZWJvYXJkKSA9PiB7XHJcbiAgICAgICAgbGV0IGF0dGFja1JlcG9ydCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHBvc2l0aW9uKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGF0dGFja1JlcG9ydCA9PSBcIkludmFsaWQgY29vcmRpbmF0ZXNcIil7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkludmFsaWQgY29vcmRpbmF0ZXNcIlxyXG4gICAgICAgIH0gZWxzZSBpZihhdHRhY2tSZXBvcnQgPT0gXCJhdHRhY2tlZFwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIFwiUG9zaXRpb24gaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhdHRhY2tSZXBvcnRcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtnZXRQbGF5ZXJUYWcsIHNlbmRBdHRhY2t9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAobGVuZ3RoLCBob3Jpem9udGFsID0gdHJ1ZSk9PntcclxuICAgIGxldCBzaGlwTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgbGV0IG51bU9mSGl0cyA9IDA7XHJcblxyXG4gICAgbGV0IGhpdCA9ICgpID0+ICsrbnVtT2ZIaXRzO1xyXG4gICAgbGV0IGlzU3VuayA9ICgpID0+IHNoaXBMZW5ndGggPT09IG51bU9mSGl0cyA/IHRydWU6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtoaXQsIGlzU3Vua30gICAgXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBtYWluR2FtZSBmcm9tIFwiLi9tYWluR2FtZVwiO1xyXG5pbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSAnLi9kaXNwbGF5Q29udHJvbGxlcidcclxuXHJcbm1haW5HYW1lLnNldHVwKClcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==