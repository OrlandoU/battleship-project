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
    let retrieveData = () => {
        return [ getPlayerTag(), true ]
    }

    let sendAttack = (gameboard) => {
        let offset = [0, 1]
        let offsetRandomizer;
        let attempt
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
                counterOnFound = _randomInt(2) + 3
            }
            if (counterOnGuess <= 1) {
                counterOnFound = _randomInt(2) + 3
            }
            counterOnGuess--
            console.log('guessing')
            return attempt
        } else {
            console.log('Finding concurrent secuence')
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
    return { mostConcurrent, mostConcurrentLength }
}
return { getPlayerTag, sendAttack, retrieveData }
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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _mainGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainGame */ "./src/mainGame.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
    let main = document.querySelector('main')

    let parseToYX = (str) => {
        if (Array.isArray(str) && str.length == 2) {
            if ((str[0] >= 0 && str[0] <= 9) && (str[1] >= 0 && str[1] <= 9)) {
                return str
            }
        }
        if (str.length != 2 || typeof str != "string") {
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
    const displayMenu = () => {
        main.innerHTML = ''

        let titleMenu = document.createElement('div')
        titleMenu.classList.add('title-menu')
        titleMenu.textContent = "BATTLESHIP"

        //Container for all of the slides for the game setright
        let dynamicContainer = document.createElement('div')
        dynamicContainer.classList.add('dynamic-container')

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
        timeSelected.value = '15'
        timeSelected.name = 'timeSelected'
        timeSelected.readOnly = true
        let leftArrow = document.createElement('img')
        leftArrow.src = './images/arrow.png'
        let rightArrow = document.createElement('img')
        rightArrow.src = './images/arrow.png'
        let currentTime = 2
        let timesArray = [5, 10, 15, 20, 25, 30]

        let nextButton = document.createElement('button')
        nextButton.type = 'submit'
        nextButton.classList.add('next-button-menu')
        nextButton.textContent = 'Continue'
        let buttonSpan = document.createElement('span')

        const animationL = [
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-20px)' },
            { transform: 'translateX(0px)' }
        ];
        const animationR = [
            { transform: 'translateX(0px)' },
            { transform: 'translateX(20px)' },
            { transform: 'translateX(0px)' }
        ];

        const timing = {
            duration: 50,
            iterations: 1,
        }
        leftArrow.addEventListener('click', () => {
            if (currentTime == 0) {
                return
            }
            timeInteractiveButton.animate(animationL, timing)
            currentTime--
            timeSelected.value = timesArray[currentTime]
        })
        rightArrow.addEventListener('click', () => {
            if (currentTime == 5) {
                return
            }
            timeInteractiveButton.animate(animationR, timing)
            currentTime++
            timeSelected.value = timesArray[currentTime]
        })
        firstSlide.classList.add('show')


        //Event listener
        firstSlide.addEventListener('click', () => {
            firstSlide.classList.remove('show')
            firstSlide.addEventListener('transitionend', () => {
                secondSlide.classList.add('show')
            })
        })
        modeLeftSide.addEventListener('mouseover', () => {
            firstSlide.classList.add('mode-hovered')
            modeLeftSide.classList.add('side-hovered')
        })
        modeLeftSide.addEventListener('mouseout', () => {
            firstSlide.classList.remove('mode-hovered')
            modeLeftSide.classList.remove('side-hovered')
        })
        modeRightSide.addEventListener('mouseover', () => {
            firstSlide.classList.add('mode-hovered')
            modeRightSide.classList.add('side-hovered')
        })
        modeRightSide.addEventListener('mouseout', () => {
            firstSlide.classList.remove('mode-hovered')
            modeRightSide.classList.remove('side-hovered')
        })
        modeRightSide.addEventListener('click', () => {
            player2NameInput.readOnly = true
            player2NameInput.value = 'PC'
            player1NameInput.placeholder = 'Player 1 tag'
        })
        modeLeftSide.addEventListener('click', () => {
            player1NameInput.placeholder = 'Player 1 tag'
            player2NameInput.placeholder = 'Player 2 tag'
        })
        secondSlide.addEventListener('submit', () => {

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

        main.appendChild(titleMenu)
        main.appendChild(dynamicContainer)
    }
    const displayShipsSetup = (isVsAi = false, config) => {
        _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].resetPlayersBoards()
        main.innerHTML = ''
        let mainHeader = document.createElement('header')
        mainHeader.classList.add('header-main')
        let mainTitle = document.createElement('div')
        mainTitle.textContent = 'BATTLESHIP'
        mainTitle.classList.add('title-main')
        let gameState = document.createElement('div')
        gameState.textContent = 'Setting Up'
        gameState.classList.add('game-state-main')

        let topBoardContainer = document.createElement('div')
        topBoardContainer.classList.add('top-board-container-main')
        let player1Name = document.createElement('div')
        player1Name.classList.add('player1-name-main')
        player1Name.textContent = config.player1Obj.getPlayerTag()
        let timerContainer = document.createElement('div')
        timerContainer.classList.add('time-container-main')
        timerContainer.textContent = '-'
        let player2Name = document.createElement('div')
        player2Name.classList.add('player2-name-main')
        player2Name.textContent = config.player2Obj.getPlayerTag()

        let boardsContainer = document.createElement('div')
        boardsContainer.classList.add('boards-container-main')
        //Left side Gameboard
        let leftSide = document.createElement('div')
        leftSide.classList.add('left-side-container-main')
        let leftShipsContainer = document.createElement('div')
        leftShipsContainer.classList.add('left-ships-container-main')
        let lengths = [5, 4, 3, 3, 2]
        lengths.forEach((length, index) => {
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
        if (!isVsAi) {
            lengths.forEach((length, index) => {
                let ship = document.createElement('div')
                ship.dataset.length = length
                ship.draggable = true
                ship.id = index + '-right'
                ship.style.gridRowStart = `span ${length}`
                ship.addEventListener('dragstart', e => {
                    e.dataTransfer.setData('text', length + ' right' + ` ${ship.id}`)
                })
                rightShipsContainer.appendChild(ship)
            })
        } else {
            rightSide.classList.add('hidePC')
        }
        let rightPlayerBoard = document.createElement('div')
        rightPlayerBoard.classList.add('right-player-board-main')
        boardsOverlay = document.createElement('div')
        boardsOverlay.classList.add('board-overlay-right')
        rightPlayerBoard.appendChild(boardsOverlay)
        //Populating boards with tiles
        let populateBoards = () => {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
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

        topBoardContainer.appendChild(player1Name)
        topBoardContainer.appendChild(timerContainer)
        topBoardContainer.appendChild(player2Name)

        leftSide.appendChild(leftShipsContainer)
        leftSide.appendChild(leftPlayerBoard)
        rightSide.appendChild(rightPlayerBoard)
        rightSide.appendChild(rightShipsContainer)
        boardsContainer.appendChild(leftSide)
        boardsContainer.appendChild(rightSide)

        main.appendChild(mainHeader)
        main.appendChild(topBoardContainer)
        main.appendChild(boardsContainer)
    }

    const addListenersSetup = (config) => {
        let currentSide = 1
        let leftSideContainer = document.querySelector('.left-side-container-main')
        let leftSideShips = document.querySelector('.left-ships-container-main')
        let rightSideContainer = document.querySelector('.right-side-container-main')
        let rightSideShips = document.querySelector('.right-ships-container-main')
        rightSideContainer.classList.add('waitingScreen')
        let readyButton = document.createElement('div')
        readyButton.classList.add('ready-button-setup')
        readyButton.textContent = 'Ready'
        let firstBubble = document.createElement('div')
        let secondBubble = document.createElement('div')
        readyButton.appendChild(firstBubble)
        readyButton.appendChild(secondBubble)
        readyButton.addEventListener('click', () => {
            if (currentSide == 1) {
                if (!leftSideShips.hasChildNodes()) {
                    if (config.gameMode == 'pvai') {
                        _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].gameStarted()
                        displayMainGame(config)
                    } else {
                        leftSideContainer.classList.add('waitingScreen')
                        rightSideContainer.classList.remove('waitingScreen')
                        currentSide = 2
                    }
                }
            } else if (currentSide == 2) {
                if (!rightSideShips.hasChildNodes()) {
                    _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].gameStarted()
                    displayMainGame(config)
                }
            }
        })
        main.appendChild(readyButton)

        let leftTiles = document.querySelectorAll('.left-tile')
        leftTiles.forEach(tile => {
            tile.addEventListener('dragover', (ev) => ev.preventDefault())
            tile.addEventListener('drop', ev => {
                ev.preventDefault()
                //Dropped Element data
                let [length, side, id] = ev.dataTransfer.getData('text').split(' ')
                let attemptCoords, attemptShip
                //Return on wrong side
                if (side != 'left') {
                    return
                }
                //Clone dropped element and remove old one so that event listeners dont interfere
                let overlay = document.querySelector('.board-overlay-left')
                let shipBlock = document.getElementById(id)
                let newShipBlock = shipBlock.cloneNode(true)
                if (overlay.contains(shipBlock)) {
                    config.player1Board.removeShip([[+shipBlock.style.gridRowStart - 1], [+shipBlock.style.gridColumnStart - 1]])
                    overlay.removeChild(shipBlock)
                    newShipBlock.addEventListener('dragstart', e => {
                        e.dataTransfer.setData('text', length + ' left' + ` ${id}`)
                    })
                } else {
                    newShipBlock = shipBlock
                }


                //Set ship depending on position of block and Set event listener for rotation of element
                if (+shipBlock.style.gridRowStart == +shipBlock.style.gridRowEnd - 1) {
                    [attemptCoords, attemptShip] = config.player1Board.setShip(+length, [+ev.currentTarget.dataset.x, +ev.currentTarget.dataset.y])
                }
                else {
                    [attemptCoords, attemptShip] = config.player1Board.setShip(+length, [+ev.currentTarget.dataset.x, +ev.currentTarget.dataset.y], false)
                }
                if (Array.isArray(attemptCoords)) {
                    let start = parseToYX(attemptCoords[0])
                    let end = parseToYX(attemptCoords[attemptCoords.length - 1])
                    newShipBlock.style.gridArea = `${start[0] + 1} / ${start[1] + 1} / ${end[0] + 2} / ${end[1] + 2}`
                    newShipBlock.addEventListener('click', (e) => {
                        let rotateAttempt = config.player1Board.rotateShip(start, end, +length)
                        if (Array.isArray(rotateAttempt)) {
                            console.log('Rotated')
                            end = rotateAttempt
                            newShipBlock.style.gridArea = `${start[0] + 1} / ${start[1] + 1} / ${end[0] + 2} / ${end[1] + 2}`
                        }
                    })
                    overlay.appendChild(newShipBlock)
                }
            })
        })

        let rightTiles = document.querySelectorAll('.right-tile')
        rightTiles.forEach(tile => {
            tile.addEventListener('dragover', (ev) => ev.preventDefault())
            tile.addEventListener('drop', ev => {
                ev.preventDefault()
                //Dropped Element data
                let [length, side, id] = ev.dataTransfer.getData('text').split(' ')
                let attemptCoords, attemptShip
                //Return on wrong side
                if (side != 'right') {
                    return
                }
                //Clone dropped element and remove old one so that event listeners dont interfere
                let overlay = document.querySelector('.board-overlay-right')
                let shipBlock = document.getElementById(id)
                let newShipBlock = shipBlock.cloneNode(true)
                if (overlay.contains(shipBlock)) {
                    config.player2Board.removeShip([[+shipBlock.style.gridRowStart - 1], [+shipBlock.style.gridColumnStart - 1]])
                    overlay.removeChild(shipBlock)
                    newShipBlock.addEventListener('dragstart', e => {
                        e.dataTransfer.setData('text', length + ' left' + ` ${id}`)
                    })
                } else {
                    newShipBlock = shipBlock
                }

                //Set ship depending on position of block and Set event listener for rotation of element
                if (+shipBlock.style.gridRowStart == +shipBlock.style.gridRowEnd - 1) {
                    [attemptCoords, attemptShip] = config.player2Board.setShip(+length, [+ev.currentTarget.dataset.x, +ev.currentTarget.dataset.y])
                }
                else {
                    [attemptCoords, attemptShip] = config.player2Board.setShip(+length, [+ev.currentTarget.dataset.x, +ev.currentTarget.dataset.y], false)
                }
                if (Array.isArray(attemptCoords)) {
                    let start = parseToYX(attemptCoords[0])
                    let end = parseToYX(attemptCoords[attemptCoords.length - 1])
                    newShipBlock.style.gridArea = `${start[0] + 1} / ${start[1] + 1} / ${end[0] + 2} / ${end[1] + 2}`
                    newShipBlock.addEventListener('click', (e) => {
                        let rotateAttempt = config.player2Board.rotateShip(start, end, +length)
                        if (Array.isArray(rotateAttempt)) {
                            console.log('Rotated')
                            end = rotateAttempt
                            newShipBlock.style.gridArea = `${start[0] + 1} / ${start[1] + 1} / ${end[0] + 2} / ${end[1] + 2}`
                        }
                    })
                    overlay.appendChild(newShipBlock)
                }
            })
        })
    }
    const displayMainGame = async (config) => {
        let oldContainer = document.querySelector('.boards-container-main')
        if(oldContainer){await new Promise((resolve, reject) => {
            oldContainer.classList.add('blankOut')
            oldContainer.addEventListener('transitionend', () => {
                resolve()
            })
        })}
        main.innerHTML = ''
        let mainHeader = document.createElement('header')
        mainHeader.classList.add('header-main')
        let mainTitle = document.createElement('div')
        mainTitle.textContent = 'BATTLESHIP'
        mainTitle.classList.add('title-main')
        let optionsButton = document.createElement('img')
        optionsButton.src = './images/settings.png'
        optionsButton.classList.add('options-button')
        optionsButton.addEventListener('click', ()=>{
            modal.classList.add('showMenu')
            config.isPaused = true
        })

        let modal = document.createElement('div')
        modal.classList.add('options-container')
        let header = document.createElement('div')
        header.classList.add('main-options-header')
        header.textContent = 'Paused'
        let optionsContainer = document.createElement('div')
        optionsContainer.classList.add('main-options-container')
        let rematchContainer = document.createElement('div')
        rematchContainer.textContent = 'Rematch'
        rematchContainer.addEventListener('click', (event) => {
            if (config.gameMode == 'pvai') {
                displayShipsSetup(true, config)
                config.player2Board.setRandomShips()
            } else {
                displayShipsSetup()
            }
            event.stopPropagation()
            document.querySelector('.time-container-main').textContent = '-'
            addListenersSetup(config)
        })
        let selectModeContainer = document.createElement('div')
        selectModeContainer.textContent = 'Back to mode selection'
        selectModeContainer.addEventListener('click', (event)=>{
            event.stopPropagation()
            _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].setup()
        })
        let mainMenu = document.createElement('div')
        mainMenu.textContent = 'Return to Main Menu'
        mainMenu.addEventListener('click', (event)=>{
            event.stopPropagation()
            _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].appStart()
        })
        modal.addEventListener('click', ()=>{
            modal.classList.remove('showMenu')
            config.isPaused = false
            console.log('Bubbling')
        })
        optionsContainer.appendChild(rematchContainer)
        optionsContainer.appendChild(selectModeContainer)
        optionsContainer.appendChild(mainMenu)
        modal.appendChild(header)
        modal.appendChild(optionsContainer)


        //Top board
        let topBoardContainer = document.createElement('div')
        topBoardContainer.classList.add('top-board-container-main')
        let player1Name = document.createElement('div')
        player1Name.classList.add('player1-name-main')
        player1Name.textContent = config.player1Obj.getPlayerTag()
        let timerContainer = document.createElement('div')
        timerContainer.classList.add('time-container-main')
        timerContainer.textContent = `${config.timePerTurn}s`
        let player2Name = document.createElement('div')
        player2Name.classList.add('player2-name-main')
        player2Name.textContent = config.player2Obj.getPlayerTag()

        let boardsContainer = document.createElement('div')
        boardsContainer.classList.add('boards-container-main')
        //Left side Gameboard
        let leftSide = document.createElement('div')
        leftSide.classList.add('left-side-container-main')
        let leftShipsContainer = document.createElement('div')
        leftShipsContainer.classList.add('left-ships-container-main')

        let leftPlayerBoard = document.createElement('div')
        leftPlayerBoard.classList.add('left-player-board-main')
        //Right side Gameboard
        let rightSide = document.createElement('div')
        rightSide.classList.add('right-side-container-main')

        let rightPlayerBoard = document.createElement('div')
        rightPlayerBoard.classList.add('right-player-board-main')
        //Populating boards with tiles
        let populateBoards = () => {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    let leftTile = document.createElement('div')
                    leftTile.dataset.x = i
                    leftTile.dataset.y = j
                    leftTile.dataset.side = 'left'
                    leftTile.addEventListener('click', _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].saveValidAttempt)
                    leftTile.classList.add('left-tile', 'tile-appear')
                    leftPlayerBoard.appendChild(leftTile)
                    if(config.player1Records && config.player1Records[i][j]){
                         leftTile.classList.add(config.player1Records[i][j], 'flip')
                    }

                    let rightTile = document.createElement('div')
                    rightTile.dataset.x = i
                    rightTile.dataset.y = j
                    rightTile.dataset.side = 'right'
                    rightTile.addEventListener('click', _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].saveValidAttempt)
                    rightTile.classList.add('right-tile', 'tile-appear')
                    rightPlayerBoard.appendChild(rightTile)
                    if(config.player2Records && config.player2Records[i][j]){
                        rightTile.classList.add(config.player2Records[i][j], 'flip')
                   }
                }
            }
        }
        //Appending elements to DOM
        populateBoards()
        let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        let horizontalFrame = document.createElement('div')
        horizontalFrame.classList.add('horizontal-frame-container')
        let verticalFrame = document.createElement('div')
        verticalFrame.classList.add('vertical-frame-container')
        letters.forEach((letter, index) => {
            let letterContainer = document.createElement('div')
            letterContainer.textContent = letter

            let numberContainer = document.createElement('div')
            numberContainer.textContent = index

            horizontalFrame.appendChild(numberContainer)
            verticalFrame.appendChild(letterContainer)
        })
        leftSide.appendChild(horizontalFrame)
        leftSide.appendChild(verticalFrame)

        horizontalFrame = document.createElement('div')
        horizontalFrame.classList.add('horizontal-frame-container')

        verticalFrame = document.createElement('div')
        verticalFrame.classList.add('vertical-frame-container')

        letters.forEach((letter, index) => {
            let letterContainer = document.createElement('div')
            letterContainer.textContent = letter

            let numberContainer = document.createElement('div')
            numberContainer.textContent = index

            horizontalFrame.appendChild(numberContainer)
            verticalFrame.appendChild(letterContainer)
        })
        rightSide.appendChild(horizontalFrame)
        rightSide.appendChild(verticalFrame)

        mainHeader.appendChild(mainTitle)
        mainHeader.appendChild(optionsButton)

        topBoardContainer.appendChild(player1Name)
        topBoardContainer.appendChild(timerContainer)
        topBoardContainer.appendChild(player2Name)

        leftSide.appendChild(leftPlayerBoard)
        rightSide.appendChild(rightPlayerBoard)
        boardsContainer.appendChild(leftSide)
        boardsContainer.appendChild(rightSide)

        main.appendChild(mainHeader)
        main.appendChild(topBoardContainer)
        main.appendChild(boardsContainer)
        main.appendChild(modal)
    }
    let displayMainMenu = () => {
        main.innerHTML = ''
        let titleMenu = document.createElement('div')
        titleMenu.classList.add('title-menu')
        titleMenu.textContent = "BATTLESHIP"

        let optionContainer = document.createElement('div')

        let continueOption = document.createElement('div')
        continueOption.textContent = 'Resume match'
        continueOption.addEventListener('click', _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].continueMainGame)

        let newGameOption = document.createElement('div')
        newGameOption.textContent = 'New Game'
        newGameOption.addEventListener('click', _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].setup)

        optionContainer.appendChild(continueOption)
        optionContainer.appendChild(newGameOption)

        main.appendChild(titleMenu)
        main.appendChild(optionContainer)
    }

    let renderAttempt = (attempt, side) => {
        if (attempt[0] == 'missed') {
            document.querySelector(`.${side}[data-x='${attempt[1]}'][data-y='${attempt[2]}']`).classList.add('missed', 'flip')
        } else {
            document.querySelector(`.${side}[data-x='${attempt[1]}'][data-y='${attempt[2]}']`).classList.add('hit', 'flip')
        }
    }

    let renderWinner = (config, winner) => {
        let modal = document.createElement('div')
        modal.classList.add('modal-container')

        let header = document.createElement('div')
        header.classList.add('modal-header')
        let infoContainer = document.createElement('div')
        infoContainer.classList.add('modal-info-container')
        let optionsContainer = document.createElement('div')
        optionsContainer.classList.add('modal-options-container')

        let rematchContainer = document.createElement('div')
        rematchContainer.textContent = 'Rematch'
        rematchContainer.addEventListener('click', () => {
            if (config.gameMode == 'pvai') {
                displayController.displayShipsSetup(true, config)
                config.player2Board.setRandomShips()
            } else {
                displayController.displayShipsSetup()
            }
            displayController.addListenersSetup(config)
        })
        let selectModeContainer = document.createElement('div')
        selectModeContainer.textContent = 'Back to mode selection'
        selectModeContainer.addEventListener('click', _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].setup)
        let mainMenu = document.createElement('div')
        mainMenu.textContent = 'Return to Main Menu'
        mainMenu.addEventListener('click', _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].appStart)


        optionsContainer.appendChild(rematchContainer)
        optionsContainer.appendChild(selectModeContainer)
        optionsContainer.appendChild(mainMenu)


        modal.appendChild(header)
        modal.appendChild(infoContainer)
        modal.appendChild(optionsContainer)
        main.appendChild(modal)
    }


    return { displayMainGame, displayMenu, displayShipsSetup, renderAttempt, addListenersSetup, renderWinner, displayMainMenu }
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
    let board = [...Array(10)].map(() => Array(10))
    let records = [...Array(10)].map(() => Array(10))
    let shipsOnBoard = []

    let retrieveData = () => {
        return [records, (() => {
            let ships = []
            shipsOnBoard.forEach(crrShip => {
                ships.push({ship:crrShip.ship.getInfo(), coordinates: crrShip.coordinates})
            })
            return ships
        })()]
    }

    let saveData = (savedInfo) => {
        records = savedInfo[0]
        savedInfo[1].forEach( crrShip => {
            let newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(crrShip.ship[1])
            for(let i = 0; i < crrShip.ship[0]; i++){
                newShip.hit()
            }
            crrShip.coordinates.forEach((coord)=>{
                board[_parseToYX(coord)[0]][_parseToYX(coord)[1]] = newShip;
            })
            shipsOnBoard.push({ ship: newShip, coordinates: crrShip.coordinates})
        })
        return records
    }
    let resetBoard = () => {
        board = [...Array(10)].map(() => Array(10))
        records = [...Array(10)].map(() => Array(10))
        shipsOnBoard = []
    }
    let _parseToYX = (str) => {
        if (Array.isArray(str) && str.length == 2) {
            if ((str[0] >= 0 && str[0] <= 9) && (str[1] >= 0 && str[1] <= 9)) {
                return str
            }
        }
        if (str.length != 2 || typeof str != "string") {
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
        else if (!_parseToYX(position)) {
            return "Invalid coordinate"
        }

        let [row, column] = _parseToYX(position)

        if ((row > 9 || row < 0) || (column > 9 || column < 0)) {
            return "Invalid coordinate"
        }
        else if ((row + length > 10 && !isHorizontal) || (column + length > 10 && isHorizontal)) {
            return "Invalid coordinate due to length"
        }

        let crrShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length)
        let coordinates = []

        for (let i = 0; i < length; i++) {
            if (isHorizontal) {
                if (board[row][column + i]) return "Space on coordinate is unavailable"
            } else {
                if (board[row + i][column]) return "Space on coordinate is unavailable"
            }
        }

        for (let i = 0; i < length; i++) {
            if (isHorizontal) {
                board[row][column + i] = crrShip
                coordinates.push(_parseToStr(row, column + i))
            } else {
                board[row + i][column] = crrShip;
                coordinates.push(_parseToStr(row + i, column))
            }
        }
        shipsOnBoard.push({ ship: crrShip, coordinates })
        return [coordinates, crrShip]
    }

    let receiveAttack = (position) => {
        if (!_parseToYX(position)) {
            return "Invalid coordinates"
        }
        let [row, column] = _parseToYX(position)
        if ((row > 9 || row < 0) || (column > 9 || column < 0)) {
            return "Invalid coordinates"
        }
        else if (records[row][column] == 'hit' || records[row][column] == 'missed') {
            return "attacked"
        }
        if (!board[row][column]) {
            records[row][column] = 'missed'
            return ['missed', row, column]
        }
        board[row][column].hit()
        records[row][column] = 'hit'
        return ['hit', row, column]
    }

    let allShipsSunk = () => {
        return shipsOnBoard.reduce((acc, crr) => {
            if (crr.ship.isSunk() && acc) return true
            return false
        }, true)
    }

    let setRandomShips = () => {
        let lengths = [5, 4, 3, 3, 2]
        lengths.forEach(length => {
            while (true) {
                if (Array.isArray(setShip(length, [_randomInt(10), _randomInt(10)], _randomInt(2)))) break
            }
        })
    }
    let getRecords = () => records;
    let rotateShip = (startCoords, endCoords, length) => {
        let ship = board[startCoords[0]][startCoords[1]]
        if (startCoords[0] === endCoords[0]) {
            if (startCoords[0] + length - 1 > 9) {
                return 'Invalid due to length Vertical'
            }
            for (let i = 1; i < length; i++) {
                if (board[startCoords[0] + i][startCoords[1]]) {
                    return 'Invalid coord Vertical'
                }
            }
            removeShip(startCoords, endCoords, length)
            for (let i = 0; i < length; i++) {
                board[startCoords[0] + i][startCoords[1]] = ship
            }
            return [startCoords[0] + length - 1, startCoords[1]]
        }
        else {
            if (startCoords[1] + length - 1 > 9) {
                return 'Invalid due to length Horizontal'
            }
            for (let i = 1; i < length; i++) {
                if (board[startCoords[0]][startCoords[1] + i]) {
                    return 'Invalid coord Horizontal'
                }
            }
            removeShip(startCoords, length)

            for (let i = 0; i < length; i++) {
                board[startCoords[0]][startCoords[1] + i] = ship
            }
            return [startCoords[0], startCoords[1] + length - 1]
        }
    }
    let removeShip = (startCoords) => {
        let shipToBeRemoved = board[startCoords[0]][startCoords[1]]
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (board[i][j] == shipToBeRemoved) {
                    board[i][j] = null
                }
            }
        }
        shipsOnBoard.filter(ship => ship.ship == shipToBeRemoved ? false : true)
    }

    let _randomInt = (num) => Math.floor(Math.random() * num);
    return { setShip, receiveAttack, allShipsSunk, getRecords, setRandomShips, rotateShip, removeShip, resetBoard, retrieveData, saveData }
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
    let counter
    let config = {}
    config.isPaused = false
    let timer
    let crrMoves = []
    const retrieveData = () => {
        if(!JSON.parse(localStorage.getItem('config'))) return false
        resetPlayersBoards()
        let savedConfig = JSON.parse(localStorage.getItem('config'))
        config.isPaused = savedConfig.isPaused
        config.gameMode = savedConfig.gameMode
        config.timePerTurn = savedConfig.timePerTurn
        config.player1Obj = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(savedConfig.player1Obj[0])
        config.player2Obj = savedConfig.player2Obj[1] ? (0,_aiPlayer__WEBPACK_IMPORTED_MODULE_3__["default"])(): (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(savedConfig.player2Obj[0]);
        config.player1Records = config.player1Board.saveData(savedConfig.player1Board)
        config.player2Records = config.player2Board.saveData(savedConfig.player2Board)
        console.log(savedConfig)
    }
    const saveData = () => {
        let savedConfig = {...config}
        savedConfig.player1Obj = savedConfig.player1Obj.retrieveData() 
        savedConfig.player2Obj = savedConfig.player2Obj.retrieveData() 
        savedConfig.player1Board = savedConfig.player1Board.retrieveData()
        savedConfig.player2Board = savedConfig.player2Board.retrieveData()
        localStorage.setItem('config', JSON.stringify(savedConfig))
    }

    let parseToYX = (str) => {
        if (Array.isArray(str) && str.length == 2) {
            if ((str[0] >= 0 && str[0] <= 9) && (str[1] >= 0 && str[1] <= 9)) {
                return str
            }
        }
        if (str.length != 2 || typeof str != "string") {
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
    const resetPlayersBoards = () => {
        config.player1Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])()
        config.player2Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])()
        config.player1Records = null
        config.player2Records = null
        clearInterval(timer)
        config.isPaused = false
    }
    const playRound = () => {
        if (config.gameMode == 'pvai') {
            let player1Attempt = config.player1Obj.sendAttack(crrMoves[0], config.player2Board)
            _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderAttempt(player1Attempt, "right-tile")

            let pcAttempt = config.player2Obj.sendAttack(config.player1Board)
            _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderAttempt(pcAttempt, 'left-tile')
            counter = config.timePerTurn
            document.querySelector('.time-container-main').textContent = `${counter}s`
        } else {
            let player1Attempt = config.player1Obj.sendAttack(crrMoves[0], config.player2Board)
            _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderAttempt(player1Attempt, "right-tile")

            let player2Attempt = config.player2Obj.sendAttack(crrMoves[1], config.player1Board)
            _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderAttempt(player2Attempt, 'left-tile')

            counter = config.timePerTurn
            document.querySelector('.time-container-main').textContent = `${counter}s`
        }
        if (config.player2Board.allShipsSunk() || config.player1Board.allShipsSunk()) {
            _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderWinner(config)
        }
        crrMoves = []
        saveData()
    }
    const saveValidAttempt = (e) => {
        if (config.gameMode == 'pvai' && e.currentTarget.dataset.side == 'right') {
            crrMoves[0] = [e.currentTarget.dataset.x, e.currentTarget.dataset.y]
            playRound()
        } else {
            if (e.currentTarget.dataset.side == 'right') {
                crrMoves[0] = [e.currentTarget.dataset.x, e.currentTarget.dataset.y]
            }
            else {
                crrMoves[1] = [e.currentTarget.dataset.x, e.currentTarget.dataset.y]
            }
        }

        if (crrMoves[0] && crrMoves[1]) {
            playRound()
        }
    }
    

    const appStart = () => {
        _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].displayMainMenu()
    }

    const setup = () => {
        //Get Info from DOM 
        _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].displayMenu()
        let continueButton = document.querySelector('.second-slide-menu')
        continueButton.addEventListener('submit', setPlayers)
        let rightModeSelected = document.querySelector('.right-side-mode')
        rightModeSelected.addEventListener('click', () => {
            config.gameMode = 'pvai'
        })
        let leftModeSelected = document.querySelector('.left-side-mode')
        leftModeSelected.addEventListener('click', () => {
            config.gameMode = 'pvp'
        })
    }
    const setPlayers = (e) => {
        e.preventDefault()
        let form = Object.fromEntries(new FormData(e.target).entries())
        if (!form.player1Name) {
            config.player1Obj = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])('Player 1')
        } else {
            config.player1Obj = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(form.player1Name)
        }
        if (config.gameMode != 'pvai') {
            if (!form.player2Name) {
                config.player2Obj = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])('Player 2')
            } else {
                config.player2Obj = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(form.player2Name)
            }
        } else {
            config.player2Obj = (0,_aiPlayer__WEBPACK_IMPORTED_MODULE_3__["default"])()
        }
        config.player1Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])()
        config.player2Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])()
        config.timePerTurn = form.timeSelected
        if (config.gameMode == 'pvai') {
            _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].displayShipsSetup(true, config)
            config.player2Board.setRandomShips()
        } else {
            _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].displayShipsSetup(false, config)
        }
        _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].addListenersSetup(config)
    }
    let gameStarted = () => {
        counter = config.timePerTurn
        timer = setInterval(() => {
            if (!config.isPaused) {
                if (counter <= 0) {
                    if (config.gameMode == 'pvai') {
                        let player1Attempt = config.player1Obj.sendRandomAttack(config.player2Board)
                        _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderAttempt(player1Attempt, "right-tile")

                        let pcAttempt = config.player2Obj.sendAttack(config.player1Board)
                        _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderAttempt(pcAttempt, 'left-tile')
                    } else if (!crrMoves[0] && !crrMoves[1]) {
                        let player1Attempt = config.player1Obj.sendRandomAttack(config.player2Board)
                        _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderAttempt(player1Attempt, "right-tile")

                        let player2Attempt = config.player2Obj.sendRandomAttack(config.player1Board)
                        _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderAttempt(player2Attempt, 'left-tile')
                    } else if (!crrMoves[0] && crrMoves[1]) {
                        let player1Attempt = config.player1Obj.sendRandomAttack(config.player2Board)
                        _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderAttempt(player1Attempt, "right-tile")

                        let player2Attempt = config.player2Obj.sendAttack(crrMoves[1], config.player1Board)
                        _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderAttempt(player2Attempt, 'left-tile')
                    } else if (crrMoves[0] && !crrMoves[1]) {
                        let player1Attempt = config.player1Obj.sendAttack(crrMoves[0], config.player2Board)
                        _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderAttempt(player1Attempt, "right-tile")

                        let player2Attempt = config.player2Obj.sendRandomAttack(config.player1Board)
                        _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderAttempt(player2Attempt, 'left-tile')
                    }
                    counter = config.timePerTurn
                }
                document.querySelector('.time-container-main').textContent = `${counter}s`
                counter--
            }
        }, 1000)
        saveData()
    }
    const continueMainGame = () => {
        retrieveData()
        _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].displayMainGame(config)
        gameStarted()
    }

    return { setup, saveValidAttempt, appStart, gameStarted, resetPlayersBoards, saveData, continueMainGame}
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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((tag) => {
    if (typeof tag != "string") {
        return null
    }
    let playerTag = tag

    let getPlayerTag = () => playerTag;
    let retrieveData = () => {
        return [ getPlayerTag(), false ]
    }

    let sendAttack = (position, gameboard) => {
        let attackReport = gameboard.receiveAttack(position)

        if (attackReport == "Invalid coordinates") {
            return "Invalid coordinates"
        } else if (attackReport == "attacked") {
            return "Position has already been attacked"
        }
        return attackReport
    }
    let _randomInt = (num) => Math.floor(Math.random() * num);

    let sendRandomAttack = (gameboard) => {
        let attempt
        while (true) {
            attempt = gameboard.receiveAttack([_randomInt(10), _randomInt(10)])
            if (attempt[0] == 'hit' || attempt[0] == 'missed') {
                break
            }
        }
        return attempt
    }

    return { getPlayerTag, sendAttack, sendRandomAttack, retrieveData }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((length)=>{
    let shipLength = length;
    let numOfHits = 0;

    let getInfo = () => [numOfHits, shipLength];
    let hit = () => ++numOfHits;
    let isSunk = () => shipLength === numOfHits ? true: false;
    
    return {hit, isSunk, getInfo}    
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


_mainGame__WEBPACK_IMPORTED_MODULE_0__["default"].appStart()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ2xDO0FBQ0EsMERBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2FpUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9tYWluR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBsZXQgcGxheWVyVGFnID0gJ1BDJ1xyXG4gICAgXHJcblxyXG4gICAgbGV0IGdldFBsYXllclRhZyA9ICgpID0+IHBsYXllclRhZztcclxuXHJcblxyXG4gICAgLy9BSSBMT0dJQ1xyXG4gICAgbGV0IGNyclNlY3VlbmNlO1xyXG4gICAgbGV0IGNvdW50ZXJPbkZvdW5kO1xyXG4gICAgbGV0IGNvdW50ZXJPbkd1ZXNzID0gMDtcclxuICAgIGxldCBpc0d1ZXNzaW5nID0gdHJ1ZTtcclxuICAgIGxldCByZXRyaWV2ZURhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFsgZ2V0UGxheWVyVGFnKCksIHRydWUgXVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBzZW5kQXR0YWNrID0gKGdhbWVib2FyZCkgPT4ge1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSBbMCwgMV1cclxuICAgICAgICBsZXQgb2Zmc2V0UmFuZG9taXplcjtcclxuICAgICAgICBsZXQgYXR0ZW1wdFxyXG4gICAgICAgIGlmIChpc0d1ZXNzaW5nIHx8IGNvdW50ZXJPbkd1ZXNzID4gMCkge1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgYXR0ZW1wdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtfcmFuZG9tSW50KDEwKSwgX3JhbmRvbUludCgxMCldKVxyXG4gICAgICAgICAgICAgICAgaWYgKGF0dGVtcHRbMF0gPT0gJ2hpdCcgfHwgYXR0ZW1wdFswXSA9PSAnbWlzc2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGF0dGVtcHRbMF0gPT0gJ2hpdCcpIHtcclxuICAgICAgICAgICAgICAgIGlzR3Vlc3NpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgY291bnRlck9uR3Vlc3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgY3JyU2VjdWVuY2UgPSBfYWlGaW5kQ29uY3VycmVuY2UoZ2FtZWJvYXJkLmdldFJlY29yZHMoKSlcclxuICAgICAgICAgICAgICAgIGNvdW50ZXJPbkZvdW5kID0gX3JhbmRvbUludCgyKSArIDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY291bnRlck9uR3Vlc3MgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRlck9uRm91bmQgPSBfcmFuZG9tSW50KDIpICsgM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvdW50ZXJPbkd1ZXNzLS1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2d1ZXNzaW5nJylcclxuICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRmluZGluZyBjb25jdXJyZW50IHNlY3VlbmNlJylcclxuICAgICAgICAgICAgaWYgKGNvdW50ZXJPbkZvdW5kIDw9IDAgfHwgY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRMZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY291bnRlck9uR3Vlc3MgPSBfcmFuZG9tSW50KDIpICsgMlxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW19yYW5kb21JbnQoMTApLCBfcmFuZG9tSW50KDEwKV0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGVtcHRbMF0gPT0gJ2hpdCcgfHwgYXR0ZW1wdFswXSA9PSAnbWlzc2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRnVjaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFswXVswXSA9PSBjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFsxXVswXSAmJiBjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFswXVsxXSA9PSBjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFsxXVsxXSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IFstMSwgMV1cclxuICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMF0sIGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzFdICsgb2Zmc2V0W19yYW5kb21JbnQoMildXSlcclxuICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ID09IFwiSW52YWxpZCBjb29yZGluYXRlc1wiIHx8IGF0dGVtcHQgPT0gXCJhdHRhY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFswXVswXSArIG9mZnNldFtfcmFuZG9tSW50KDIpXSwgY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ID09IFwiSW52YWxpZCBjb29yZGluYXRlc1wiIHx8IGF0dGVtcHQgPT0gXCJhdHRhY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW19yYW5kb21JbnQoMTApLCBfcmFuZG9tSW50KDEwKV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdFswXSA9PSAnaGl0JyB8fCBhdHRlbXB0WzBdID09ICdtaXNzZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JyU2VjdWVuY2UgPSBfYWlGaW5kQ29uY3VycmVuY2UoZ2FtZWJvYXJkLmdldFJlY29yZHMoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVhY2hlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJPbkZvdW5kLS1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3JyU2VjdWVuY2UgPSBfYWlGaW5kQ29uY3VycmVuY2UoZ2FtZWJvYXJkLmdldFJlY29yZHMoKSlcclxuICAgICAgICAgICAgICAgIGNvdW50ZXJPbkZvdW5kLS1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMF0gPT0gY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMV1bMF0pIHtcclxuICAgICAgICAgICAgICAgIG9mZnNldFJhbmRvbWl6ZXIgPSBvZmZzZXRbX3JhbmRvbUludCgyKV1cclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXRSYW5kb21pemVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFswXVswXSwgY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMV0gLSAxXSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA9PSBcIkludmFsaWQgY29vcmRpbmF0ZXNcIiB8fCBhdHRlbXB0ID09IFwiYXR0YWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2NyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzBdLCBjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFsxXVsxXSArIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA9PSBcIkludmFsaWQgY29vcmRpbmF0ZXNcIiB8fCBhdHRlbXB0ID09IFwiYXR0YWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW19yYW5kb21JbnQoMTApLCBfcmFuZG9tSW50KDEwKV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGVtcHRbMF0gPT0gJ2hpdCcgfHwgYXR0ZW1wdFswXSA9PSAnbWlzc2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyT25Gb3VuZC0tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlck9uRm91bmQtLVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2NyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzBdLCBjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFsxXVsxXSArIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ID09IFwiSW52YWxpZCBjb29yZGluYXRlc1wiIHx8IGF0dGVtcHQgPT0gXCJhdHRhY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMF0sIGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzFdIC0gMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ID09IFwiSW52YWxpZCBjb29yZGluYXRlc1wiIHx8IGF0dGVtcHQgPT0gXCJhdHRhY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbX3JhbmRvbUludCgxMCksIF9yYW5kb21JbnQoMTApXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdFswXSA9PSAnaGl0JyB8fCBhdHRlbXB0WzBdID09ICdtaXNzZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJPbkZvdW5kLS1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JyU2VjdWVuY2UgPSBfYWlGaW5kQ29uY3VycmVuY2UoZ2FtZWJvYXJkLmdldFJlY29yZHMoKSlcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyT25Gb3VuZC0tXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9mZnNldFJhbmRvbWl6ZXIgPSBvZmZzZXRbX3JhbmRvbUludCgyKV1cclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXRSYW5kb21pemVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFswXVswXSAtIDEsIGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzFdXSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA9PSBcIkludmFsaWQgY29vcmRpbmF0ZXNcIiB8fCBhdHRlbXB0ID09IFwiYXR0YWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2NyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzFdWzBdICsgMSwgY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA9PSBcIkludmFsaWQgY29vcmRpbmF0ZXNcIiB8fCBhdHRlbXB0ID09IFwiYXR0YWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW19yYW5kb21JbnQoMTApLCBfcmFuZG9tSW50KDEwKV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGVtcHRbMF0gPT0gJ2hpdCcgfHwgYXR0ZW1wdFswXSA9PSAnbWlzc2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyT25Gb3VuZC0tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlck9uRm91bmQtLVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFsxXVswXSArIDEsIGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzFdXSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA9PSBcIkludmFsaWQgY29vcmRpbmF0ZXNcIiB8fCBhdHRlbXB0ID09IFwiYXR0YWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2NyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzBdIC0gMSwgY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA9PSBcIkludmFsaWQgY29vcmRpbmF0ZXNcIiB8fCBhdHRlbXB0ID09IFwiYXR0YWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW19yYW5kb21JbnQoMTApLCBfcmFuZG9tSW50KDEwKV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGVtcHRbMF0gPT0gJ2hpdCcgfHwgYXR0ZW1wdFswXSA9PSAnbWlzc2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyT25Gb3VuZC0tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICBjb3VudGVyT25Gb3VuZC0tXHJcbiAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX3JhbmRvbUludCA9IChudW0pID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bSk7XHJcblxyXG4gICAgbGV0IF9haUZpbmRDb25jdXJyZW5jZSA9IChyZWNvcmRzKSA9PiB7XHJcbiAgICAgICAgbGV0IG1vc3RDb25jdXJyZW50ID0gW11cclxuICAgICAgICBsZXQgbW9zdENvbmN1cnJlbnRMZW5ndGggPSAwXHJcbiAgICAgICAgLy9Ib3Jpem9udGFsXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjcnJDb25jdXJyZW50ID0gW11cclxuICAgICAgICAgICAgbGV0IGNyckxlbmd0aCA9IDBcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVjb3Jkc1tpXVtqXSA9PSBcImhpdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjcnJDb25jdXJyZW50WzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyckNvbmN1cnJlbnRbMF0gPSBbaSwgal1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JyQ29uY3VycmVudFsxXSA9IFtpLCBqXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnJMZW5ndGgrK1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyckNvbmN1cnJlbnRbMV0gPSBbaSwgal1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JyTGVuZ3RoKytcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjcnJMZW5ndGggPj0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnJDb25jdXJyZW50ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JyTGVuZ3RoID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGNyckxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChjcnJDb25jdXJyZW50WzBdWzBdID09IDApIHx8IChyZWNvcmRzW2NyckNvbmN1cnJlbnRbMF1bMF1dW2NyckNvbmN1cnJlbnRbMF1bMV0gLSAxXSA9PSAnbWlzc2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoY3JyQ29uY3VycmVudFsxXVswXSA9PSA5KSB8fCAocmVjb3Jkc1tjcnJDb25jdXJyZW50WzFdWzBdXVtjcnJDb25jdXJyZW50WzFdWzFdICsgMV0gPT0gJ21pc3NlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JyQ29uY3VycmVudCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JyTGVuZ3RoID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNyckxlbmd0aCA+IG1vc3RDb25jdXJyZW50TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vc3RDb25jdXJyZW50ID0gWy4uLmNyckNvbmN1cnJlbnRdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vc3RDb25jdXJyZW50TGVuZ3RoID0gY3JyTGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyckNvbmN1cnJlbnQgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgIGNyckxlbmd0aCA9IDAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgLy9WZXJ0aWNhbFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNyckNvbmN1cnJlbnQgPSBbXVxyXG4gICAgICAgIGxldCBjcnJMZW5ndGggPSAwXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChyZWNvcmRzW2pdW2ldID09IFwiaGl0XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY3JyQ29uY3VycmVudFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyckNvbmN1cnJlbnRbMF0gPSBbaiwgaV1cclxuICAgICAgICAgICAgICAgICAgICBjcnJDb25jdXJyZW50WzFdID0gW2osIGldXHJcbiAgICAgICAgICAgICAgICAgICAgY3JyTGVuZ3RoKytcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JyQ29uY3VycmVudFsxXSA9IFtqLCBpXVxyXG4gICAgICAgICAgICAgICAgICAgIGNyckxlbmd0aCsrXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNyckxlbmd0aCA+PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JyQ29uY3VycmVudCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgY3JyTGVuZ3RoID0gMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihjcnJMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChjcnJDb25jdXJyZW50WzBdWzBdID09IDApIHx8IChyZWNvcmRzW2NyckNvbmN1cnJlbnRbMF1bMF0gLSAxXVtjcnJDb25jdXJyZW50WzBdWzFdXSA9PSAnbWlzc2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChjcnJDb25jdXJyZW50WzFdWzBdID09IDkpIHx8IChyZWNvcmRzW2NyckNvbmN1cnJlbnRbMV1bMF0gKyAxXVtjcnJDb25jdXJyZW50WzFdWzFdXSA9PSAnbWlzc2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyckNvbmN1cnJlbnQgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JyTGVuZ3RoID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNyckxlbmd0aCA+IG1vc3RDb25jdXJyZW50TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9zdENvbmN1cnJlbnQgPSBbLi4uY3JyQ29uY3VycmVudF1cclxuICAgICAgICAgICAgICAgICAgICBtb3N0Q29uY3VycmVudExlbmd0aCA9IGNyckxlbmd0aFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3JyQ29uY3VycmVudCA9IFtdXHJcbiAgICAgICAgICAgICAgICBjcnJMZW5ndGggPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBtb3N0Q29uY3VycmVudCwgbW9zdENvbmN1cnJlbnRMZW5ndGggfVxyXG59XHJcbnJldHVybiB7IGdldFBsYXllclRhZywgc2VuZEF0dGFjaywgcmV0cmlldmVEYXRhIH1cclxufSIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIlxyXG5pbXBvcnQgbWFpbkdhbWUgZnJvbSBcIi4vbWFpbkdhbWVcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXHJcblxyXG4gICAgbGV0IHBhcnNlVG9ZWCA9IChzdHIpID0+IHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdHIpICYmIHN0ci5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoKHN0clswXSA+PSAwICYmIHN0clswXSA8PSA5KSAmJiAoc3RyWzFdID49IDAgJiYgc3RyWzFdIDw9IDkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggIT0gMiB8fCB0eXBlb2Ygc3RyICE9IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgW3Bvc2l0aW9uWSwgcG9zaXRpb25YXSA9IHN0ci5zcGxpdChcIlwiKVxyXG4gICAgICAgIHBvc2l0aW9uWCA9ICtwb3NpdGlvblhcclxuICAgICAgICBwb3NpdGlvblkgPSBwb3NpdGlvblkuY2hhckNvZGVBdCgwKVxyXG5cclxuICAgICAgICBpZiAoKE51bWJlci5pc05hTihwb3NpdGlvblgpKSB8fCAocG9zaXRpb25ZIDwgNjUgfHwgcG9zaXRpb25ZID4gNzQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtwb3NpdGlvblkgLSA2NSwgcG9zaXRpb25YXVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzcGxheU1lbnUgPSAoKSA9PiB7XHJcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xyXG5cclxuICAgICAgICBsZXQgdGl0bGVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aXRsZU1lbnUuY2xhc3NMaXN0LmFkZCgndGl0bGUtbWVudScpXHJcbiAgICAgICAgdGl0bGVNZW51LnRleHRDb250ZW50ID0gXCJCQVRUTEVTSElQXCJcclxuXHJcbiAgICAgICAgLy9Db250YWluZXIgZm9yIGFsbCBvZiB0aGUgc2xpZGVzIGZvciB0aGUgZ2FtZSBzZXRyaWdodFxyXG4gICAgICAgIGxldCBkeW5hbWljQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBkeW5hbWljQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2R5bmFtaWMtY29udGFpbmVyJylcclxuXHJcbiAgICAgICAgLy9GaXJzdCBTbGlkZSBzaG93biBhZnRlciBzdGFydCBidXR0b24gaXMgcHJlc3NlZFxyXG4gICAgICAgIGxldCBmaXJzdFNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LXNsaWRlLW1lbnUnKVxyXG5cclxuICAgICAgICAvL0ZpcnN0IHNsaWRlIG1vZGUgbGVmdCBzaWRlXHJcbiAgICAgICAgbGV0IG1vZGVMZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbW9kZUxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2lkZS1tb2RlJylcclxuICAgICAgICBtb2RlTGVmdFNpZGUudGV4dENvbnRlbnQgPSAnUGxheWVyIFZzIFBsYXllcidcclxuICAgICAgICBsZXQgbW9kZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBtb2RlSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL21vZGUucG5nJ1xyXG4gICAgICAgIC8vRmlyc3Qgc2xpZGUgbW9kZSByaWdodCBzaWRlXHJcbiAgICAgICAgbGV0IG1vZGVSaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG1vZGVSaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgncmlnaHQtc2lkZS1tb2RlJylcclxuICAgICAgICBtb2RlUmlnaHRTaWRlLnRleHRDb250ZW50ID0gJ1BsYXllciBWcyBDb21wdXRlcidcclxuICAgICAgICBsZXQgbW9kZUltYWdlTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgbW9kZUltYWdlTC5zcmMgPSAnLi9pbWFnZXMvbW9kZS5wbmcnXHJcbiAgICAgICAgLy9TZWNvbmQgU2xpZGUgc2hvd25cclxuICAgICAgICBsZXQgc2Vjb25kU2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgICAgICBzZWNvbmRTbGlkZS5jbGFzc0xpc3QuYWRkKCdzZWNvbmQtc2xpZGUtbWVudScpXHJcbiAgICAgICAgbGV0IHBsYXllcjFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHBsYXllcjFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJylcclxuICAgICAgICBsZXQgbGFiZWxQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgICAgIGxhYmVsUGxheWVyMS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwbGF5ZXIxLW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIGxhYmVsUGxheWVyMS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMSBOYW1lJ1xyXG4gICAgICAgIGxldCBwbGF5ZXIxTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIHBsYXllcjFOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXIxLW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIHBsYXllcjFOYW1lSW5wdXQubmFtZSA9ICdwbGF5ZXIxTmFtZSdcclxuICAgICAgICBsZXQgcGxheWVyMkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcGxheWVyMkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKVxyXG4gICAgICAgIGxldCBsYWJlbFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICAgICAgbGFiZWxQbGF5ZXIyLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3BsYXllcjItbmFtZS1pbnB1dCcpXHJcbiAgICAgICAgbGFiZWxQbGF5ZXIyLnRleHRDb250ZW50ID0gJ1BsYXllciAyIE5hbWUnXHJcbiAgICAgICAgbGV0IHBsYXllcjJOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgcGxheWVyMk5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllcjItbmFtZS1pbnB1dCcpXHJcbiAgICAgICAgcGxheWVyMk5hbWVJbnB1dC5uYW1lID0gJ3BsYXllcjJOYW1lJ1xyXG5cclxuICAgICAgICBsZXQgdGltZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aW1lSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGltZS1jb250YWluZXInKVxyXG4gICAgICAgIGxldCB0aW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgICAgIHRpbWVUZXh0LnRleHRDb250ZW50ID0gJ1RpbWUgcGVyIHR1cm4nXHJcblxyXG4gICAgICAgIGxldCB0aW1lSW50ZXJhY3RpdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRpbWVJbnRlcmFjdGl2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10aW1lLW1haW4nKVxyXG4gICAgICAgIGxldCB0aW1lU2VsZWN0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdGltZVNlbGVjdGVkLnZhbHVlID0gJzE1J1xyXG4gICAgICAgIHRpbWVTZWxlY3RlZC5uYW1lID0gJ3RpbWVTZWxlY3RlZCdcclxuICAgICAgICB0aW1lU2VsZWN0ZWQucmVhZE9ubHkgPSB0cnVlXHJcbiAgICAgICAgbGV0IGxlZnRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgbGVmdEFycm93LnNyYyA9ICcuL2ltYWdlcy9hcnJvdy5wbmcnXHJcbiAgICAgICAgbGV0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIHJpZ2h0QXJyb3cuc3JjID0gJy4vaW1hZ2VzL2Fycm93LnBuZydcclxuICAgICAgICBsZXQgY3VycmVudFRpbWUgPSAyXHJcbiAgICAgICAgbGV0IHRpbWVzQXJyYXkgPSBbNSwgMTAsIDE1LCAyMCwgMjUsIDMwXVxyXG5cclxuICAgICAgICBsZXQgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgbmV4dEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCdcclxuICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25leHQtYnV0dG9uLW1lbnUnKVxyXG4gICAgICAgIG5leHRCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGludWUnXHJcbiAgICAgICAgbGV0IGJ1dHRvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuXHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uTCA9IFtcclxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCknIH0sXHJcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMjBweCknIH0sXHJcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpJyB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25SID0gW1xyXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KScgfSxcclxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDIwcHgpJyB9LFxyXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KScgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnN0IHRpbWluZyA9IHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDUwLFxyXG4gICAgICAgICAgICBpdGVyYXRpb25zOiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZWZ0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aW1lSW50ZXJhY3RpdmVCdXR0b24uYW5pbWF0ZShhbmltYXRpb25MLCB0aW1pbmcpXHJcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lLS1cclxuICAgICAgICAgICAgdGltZVNlbGVjdGVkLnZhbHVlID0gdGltZXNBcnJheVtjdXJyZW50VGltZV1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aW1lSW50ZXJhY3RpdmVCdXR0b24uYW5pbWF0ZShhbmltYXRpb25SLCB0aW1pbmcpXHJcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lKytcclxuICAgICAgICAgICAgdGltZVNlbGVjdGVkLnZhbHVlID0gdGltZXNBcnJheVtjdXJyZW50VGltZV1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGZpcnN0U2xpZGUuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcblxyXG5cclxuICAgICAgICAvL0V2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgZmlyc3RTbGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZmlyc3RTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgICAgICAgICAgZmlyc3RTbGlkZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kU2xpZGUuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBtb2RlTGVmdFNpZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5hZGQoJ21vZGUtaG92ZXJlZCcpXHJcbiAgICAgICAgICAgIG1vZGVMZWZ0U2lkZS5jbGFzc0xpc3QuYWRkKCdzaWRlLWhvdmVyZWQnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbW9kZUxlZnRTaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGUtaG92ZXJlZCcpXHJcbiAgICAgICAgICAgIG1vZGVMZWZ0U2lkZS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlLWhvdmVyZWQnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbW9kZVJpZ2h0U2lkZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcnN0U2xpZGUuY2xhc3NMaXN0LmFkZCgnbW9kZS1ob3ZlcmVkJylcclxuICAgICAgICAgICAgbW9kZVJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCdzaWRlLWhvdmVyZWQnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbW9kZVJpZ2h0U2lkZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcclxuICAgICAgICAgICAgZmlyc3RTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RlLWhvdmVyZWQnKVxyXG4gICAgICAgICAgICBtb2RlUmlnaHRTaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGUtaG92ZXJlZCcpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBtb2RlUmlnaHRTaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwbGF5ZXIyTmFtZUlucHV0LnJlYWRPbmx5ID0gdHJ1ZVxyXG4gICAgICAgICAgICBwbGF5ZXIyTmFtZUlucHV0LnZhbHVlID0gJ1BDJ1xyXG4gICAgICAgICAgICBwbGF5ZXIxTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ1BsYXllciAxIHRhZydcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1vZGVMZWZ0U2lkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcGxheWVyMU5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdQbGF5ZXIgMSB0YWcnXHJcbiAgICAgICAgICAgIHBsYXllcjJOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnUGxheWVyIDIgdGFnJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2Vjb25kU2xpZGUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vQXBwZW5kaW5nIHRvIERPTVxyXG4gICAgICAgIG1vZGVMZWZ0U2lkZS5hcHBlbmRDaGlsZChtb2RlSW1hZ2VMKVxyXG4gICAgICAgIG1vZGVSaWdodFNpZGUuYXBwZW5kQ2hpbGQobW9kZUltYWdlKVxyXG5cclxuICAgICAgICBwbGF5ZXIxQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsUGxheWVyMSlcclxuICAgICAgICBwbGF5ZXIxQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllcjFOYW1lSW5wdXQpXHJcbiAgICAgICAgcGxheWVyMkNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbFBsYXllcjIpXHJcbiAgICAgICAgcGxheWVyMkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXIyTmFtZUlucHV0KVxyXG4gICAgICAgIHRpbWVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lVGV4dClcclxuICAgICAgICB0aW1lSW50ZXJhY3RpdmVCdXR0b24uYXBwZW5kQ2hpbGQobGVmdEFycm93KVxyXG4gICAgICAgIHRpbWVJbnRlcmFjdGl2ZUJ1dHRvbi5hcHBlbmRDaGlsZCh0aW1lU2VsZWN0ZWQpXHJcbiAgICAgICAgdGltZUludGVyYWN0aXZlQnV0dG9uLmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpXHJcbiAgICAgICAgdGltZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVJbnRlcmFjdGl2ZUJ1dHRvbilcclxuICAgICAgICBuZXh0QnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvblNwYW4pXHJcblxyXG4gICAgICAgIGZpcnN0U2xpZGUuYXBwZW5kQ2hpbGQobW9kZUxlZnRTaWRlKVxyXG4gICAgICAgIGZpcnN0U2xpZGUuYXBwZW5kQ2hpbGQobW9kZVJpZ2h0U2lkZSlcclxuXHJcbiAgICAgICAgc2Vjb25kU2xpZGUuYXBwZW5kQ2hpbGQocGxheWVyMUNvbnRhaW5lcilcclxuICAgICAgICBzZWNvbmRTbGlkZS5hcHBlbmRDaGlsZChwbGF5ZXIyQ29udGFpbmVyKVxyXG4gICAgICAgIHNlY29uZFNsaWRlLmFwcGVuZENoaWxkKHRpbWVJbnB1dENvbnRhaW5lcilcclxuICAgICAgICBzZWNvbmRTbGlkZS5hcHBlbmRDaGlsZChuZXh0QnV0dG9uKVxyXG5cclxuICAgICAgICBkeW5hbWljQ29udGFpbmVyLmFwcGVuZChzZWNvbmRTbGlkZSlcclxuICAgICAgICBkeW5hbWljQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0U2xpZGUpXHJcblxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGVNZW51KVxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZHluYW1pY0NvbnRhaW5lcilcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc3BsYXlTaGlwc1NldHVwID0gKGlzVnNBaSA9IGZhbHNlLCBjb25maWcpID0+IHtcclxuICAgICAgICBtYWluR2FtZS5yZXNldFBsYXllcnNCb2FyZHMoKVxyXG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gJydcclxuICAgICAgICBsZXQgbWFpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXHJcbiAgICAgICAgbWFpbkhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWFpbicpXHJcbiAgICAgICAgbGV0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVAnXHJcbiAgICAgICAgbWFpblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLW1haW4nKVxyXG4gICAgICAgIGxldCBnYW1lU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGdhbWVTdGF0ZS50ZXh0Q29udGVudCA9ICdTZXR0aW5nIFVwJ1xyXG4gICAgICAgIGdhbWVTdGF0ZS5jbGFzc0xpc3QuYWRkKCdnYW1lLXN0YXRlLW1haW4nKVxyXG5cclxuICAgICAgICBsZXQgdG9wQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRvcEJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvcC1ib2FyZC1jb250YWluZXItbWFpbicpXHJcbiAgICAgICAgbGV0IHBsYXllcjFOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwbGF5ZXIxTmFtZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIxLW5hbWUtbWFpbicpXHJcbiAgICAgICAgcGxheWVyMU5hbWUudGV4dENvbnRlbnQgPSBjb25maWcucGxheWVyMU9iai5nZXRQbGF5ZXJUYWcoKVxyXG4gICAgICAgIGxldCB0aW1lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGltZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGltZS1jb250YWluZXItbWFpbicpXHJcbiAgICAgICAgdGltZXJDb250YWluZXIudGV4dENvbnRlbnQgPSAnLSdcclxuICAgICAgICBsZXQgcGxheWVyMk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHBsYXllcjJOYW1lLmNsYXNzTGlzdC5hZGQoJ3BsYXllcjItbmFtZS1tYWluJylcclxuICAgICAgICBwbGF5ZXIyTmFtZS50ZXh0Q29udGVudCA9IGNvbmZpZy5wbGF5ZXIyT2JqLmdldFBsYXllclRhZygpXHJcblxyXG4gICAgICAgIGxldCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGJvYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2FyZHMtY29udGFpbmVyLW1haW4nKVxyXG4gICAgICAgIC8vTGVmdCBzaWRlIEdhbWVib2FyZFxyXG4gICAgICAgIGxldCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbGVmdFNpZGUuY2xhc3NMaXN0LmFkZCgnbGVmdC1zaWRlLWNvbnRhaW5lci1tYWluJylcclxuICAgICAgICBsZXQgbGVmdFNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBsZWZ0U2hpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGVmdC1zaGlwcy1jb250YWluZXItbWFpbicpXHJcbiAgICAgICAgbGV0IGxlbmd0aHMgPSBbNSwgNCwgMywgMywgMl1cclxuICAgICAgICBsZW5ndGhzLmZvckVhY2goKGxlbmd0aCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBzaGlwLmRhdGFzZXQubGVuZ3RoID0gbGVuZ3RoXHJcbiAgICAgICAgICAgIHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZVxyXG4gICAgICAgICAgICBzaGlwLmlkID0gaW5kZXggKyAnLWxlZnQnXHJcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuZ3JpZFJvd1N0YXJ0ID0gYHNwYW4gJHtsZW5ndGh9YFxyXG4gICAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsIGxlbmd0aCArICcgbGVmdCcgKyBgICR7c2hpcC5pZH1gKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsZWZ0U2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcClcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBsZWZ0UGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGxlZnRQbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdsZWZ0LXBsYXllci1ib2FyZC1tYWluJylcclxuICAgICAgICBsZXQgYm9hcmRzT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgYm9hcmRzT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdib2FyZC1vdmVybGF5LWxlZnQnKVxyXG4gICAgICAgIGxlZnRQbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChib2FyZHNPdmVybGF5KVxyXG4gICAgICAgIC8vUmlnaHQgc2lkZSBHYW1lYm9hcmRcclxuICAgICAgICBsZXQgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICByaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgncmlnaHQtc2lkZS1jb250YWluZXItbWFpbicpXHJcbiAgICAgICAgbGV0IHJpZ2h0U2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHJpZ2h0U2hpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmlnaHQtc2hpcHMtY29udGFpbmVyLW1haW4nKVxyXG4gICAgICAgIGlmICghaXNWc0FpKSB7XHJcbiAgICAgICAgICAgIGxlbmd0aHMuZm9yRWFjaCgobGVuZ3RoLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICAgICAgc2hpcC5kYXRhc2V0Lmxlbmd0aCA9IGxlbmd0aFxyXG4gICAgICAgICAgICAgICAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBzaGlwLmlkID0gaW5kZXggKyAnLXJpZ2h0J1xyXG4gICAgICAgICAgICAgICAgc2hpcC5zdHlsZS5ncmlkUm93U3RhcnQgPSBgc3BhbiAke2xlbmd0aH1gXHJcbiAgICAgICAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCBsZW5ndGggKyAnIHJpZ2h0JyArIGAgJHtzaGlwLmlkfWApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmlnaHRTaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCdoaWRlUEMnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmlnaHRQbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcmlnaHRQbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdyaWdodC1wbGF5ZXItYm9hcmQtbWFpbicpXHJcbiAgICAgICAgYm9hcmRzT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgYm9hcmRzT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdib2FyZC1vdmVybGF5LXJpZ2h0JylcclxuICAgICAgICByaWdodFBsYXllckJvYXJkLmFwcGVuZENoaWxkKGJvYXJkc092ZXJsYXkpXHJcbiAgICAgICAgLy9Qb3B1bGF0aW5nIGJvYXJkcyB3aXRoIHRpbGVzXHJcbiAgICAgICAgbGV0IHBvcHVsYXRlQm9hcmRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgICAgICAgICB0aWxlLmRhdGFzZXQueCA9IGlcclxuICAgICAgICAgICAgICAgICAgICB0aWxlLmRhdGFzZXQueSA9IGpcclxuICAgICAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2xlZnQtdGlsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFBsYXllckJvYXJkLmFwcGVuZENoaWxkKHRpbGUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuZGF0YXNldC54ID0gaVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuZGF0YXNldC55ID0galxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgncmlnaHQtdGlsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRQbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZCh0aWxlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vQXBwZW5kaW5nIGVsZW1lbnRzIHRvIERPTVxyXG4gICAgICAgIHBvcHVsYXRlQm9hcmRzKClcclxuXHJcblxyXG4gICAgICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQobWFpblRpdGxlKVxyXG4gICAgICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoZ2FtZVN0YXRlKVxyXG5cclxuICAgICAgICB0b3BCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXIxTmFtZSlcclxuICAgICAgICB0b3BCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lckNvbnRhaW5lcilcclxuICAgICAgICB0b3BCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXIyTmFtZSlcclxuXHJcbiAgICAgICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQobGVmdFNoaXBzQ29udGFpbmVyKVxyXG4gICAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGxlZnRQbGF5ZXJCb2FyZClcclxuICAgICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRQbGF5ZXJCb2FyZClcclxuICAgICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRTaGlwc0NvbnRhaW5lcilcclxuICAgICAgICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdFNpZGUpXHJcbiAgICAgICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSlcclxuXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyKVxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodG9wQm9hcmRDb250YWluZXIpXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChib2FyZHNDb250YWluZXIpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkTGlzdGVuZXJzU2V0dXAgPSAoY29uZmlnKSA9PiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTaWRlID0gMVxyXG4gICAgICAgIGxldCBsZWZ0U2lkZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LXNpZGUtY29udGFpbmVyLW1haW4nKVxyXG4gICAgICAgIGxldCBsZWZ0U2lkZVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtc2hpcHMtY29udGFpbmVyLW1haW4nKVxyXG4gICAgICAgIGxldCByaWdodFNpZGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtc2lkZS1jb250YWluZXItbWFpbicpXHJcbiAgICAgICAgbGV0IHJpZ2h0U2lkZVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LXNoaXBzLWNvbnRhaW5lci1tYWluJylcclxuICAgICAgICByaWdodFNpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2FpdGluZ1NjcmVlbicpXHJcbiAgICAgICAgbGV0IHJlYWR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICByZWFkeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZWFkeS1idXR0b24tc2V0dXAnKVxyXG4gICAgICAgIHJlYWR5QnV0dG9uLnRleHRDb250ZW50ID0gJ1JlYWR5J1xyXG4gICAgICAgIGxldCBmaXJzdEJ1YmJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbGV0IHNlY29uZEJ1YmJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcmVhZHlCdXR0b24uYXBwZW5kQ2hpbGQoZmlyc3RCdWJibGUpXHJcbiAgICAgICAgcmVhZHlCdXR0b24uYXBwZW5kQ2hpbGQoc2Vjb25kQnViYmxlKVxyXG4gICAgICAgIHJlYWR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFNpZGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsZWZ0U2lkZVNoaXBzLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuZ2FtZU1vZGUgPT0gJ3B2YWknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5HYW1lLmdhbWVTdGFydGVkKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU1haW5HYW1lKGNvbmZpZylcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2lkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3YWl0aW5nU2NyZWVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3dhaXRpbmdTY3JlZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2lkZSA9IDJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFNpZGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyaWdodFNpZGVTaGlwcy5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYWluR2FtZS5nYW1lU3RhcnRlZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU1haW5HYW1lKGNvbmZpZylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChyZWFkeUJ1dHRvbilcclxuXHJcbiAgICAgICAgbGV0IGxlZnRUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZWZ0LXRpbGUnKVxyXG4gICAgICAgIGxlZnRUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xyXG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2KSA9PiBldi5wcmV2ZW50RGVmYXVsdCgpKVxyXG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBldiA9PiB7XHJcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAvL0Ryb3BwZWQgRWxlbWVudCBkYXRhXHJcbiAgICAgICAgICAgICAgICBsZXQgW2xlbmd0aCwgc2lkZSwgaWRdID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKS5zcGxpdCgnICcpXHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0ZW1wdENvb3JkcywgYXR0ZW1wdFNoaXBcclxuICAgICAgICAgICAgICAgIC8vUmV0dXJuIG9uIHdyb25nIHNpZGVcclxuICAgICAgICAgICAgICAgIGlmIChzaWRlICE9ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9DbG9uZSBkcm9wcGVkIGVsZW1lbnQgYW5kIHJlbW92ZSBvbGQgb25lIHNvIHRoYXQgZXZlbnQgbGlzdGVuZXJzIGRvbnQgaW50ZXJmZXJlXHJcbiAgICAgICAgICAgICAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1vdmVybGF5LWxlZnQnKVxyXG4gICAgICAgICAgICAgICAgbGV0IHNoaXBCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1NoaXBCbG9jayA9IHNoaXBCbG9jay5jbG9uZU5vZGUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGlmIChvdmVybGF5LmNvbnRhaW5zKHNoaXBCbG9jaykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcucGxheWVyMUJvYXJkLnJlbW92ZVNoaXAoW1src2hpcEJsb2NrLnN0eWxlLmdyaWRSb3dTdGFydCAtIDFdLCBbK3NoaXBCbG9jay5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgLSAxXV0pXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmVDaGlsZChzaGlwQmxvY2spXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3U2hpcEJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgbGVuZ3RoICsgJyBsZWZ0JyArIGAgJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1NoaXBCbG9jayA9IHNoaXBCbG9ja1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvL1NldCBzaGlwIGRlcGVuZGluZyBvbiBwb3NpdGlvbiBvZiBibG9jayBhbmQgU2V0IGV2ZW50IGxpc3RlbmVyIGZvciByb3RhdGlvbiBvZiBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICBpZiAoK3NoaXBCbG9jay5zdHlsZS5ncmlkUm93U3RhcnQgPT0gK3NoaXBCbG9jay5zdHlsZS5ncmlkUm93RW5kIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFthdHRlbXB0Q29vcmRzLCBhdHRlbXB0U2hpcF0gPSBjb25maWcucGxheWVyMUJvYXJkLnNldFNoaXAoK2xlbmd0aCwgWytldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueCwgK2V2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC55XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFthdHRlbXB0Q29vcmRzLCBhdHRlbXB0U2hpcF0gPSBjb25maWcucGxheWVyMUJvYXJkLnNldFNoaXAoK2xlbmd0aCwgWytldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueCwgK2V2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC55XSwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhdHRlbXB0Q29vcmRzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IHBhcnNlVG9ZWChhdHRlbXB0Q29vcmRzWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmQgPSBwYXJzZVRvWVgoYXR0ZW1wdENvb3Jkc1thdHRlbXB0Q29vcmRzLmxlbmd0aCAtIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1NoaXBCbG9jay5zdHlsZS5ncmlkQXJlYSA9IGAke3N0YXJ0WzBdICsgMX0gLyAke3N0YXJ0WzFdICsgMX0gLyAke2VuZFswXSArIDJ9IC8gJHtlbmRbMV0gKyAyfWBcclxuICAgICAgICAgICAgICAgICAgICBuZXdTaGlwQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm90YXRlQXR0ZW1wdCA9IGNvbmZpZy5wbGF5ZXIxQm9hcmQucm90YXRlU2hpcChzdGFydCwgZW5kLCArbGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3RhdGVBdHRlbXB0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JvdGF0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gcm90YXRlQXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2hpcEJsb2NrLnN0eWxlLmdyaWRBcmVhID0gYCR7c3RhcnRbMF0gKyAxfSAvICR7c3RhcnRbMV0gKyAxfSAvICR7ZW5kWzBdICsgMn0gLyAke2VuZFsxXSArIDJ9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKG5ld1NoaXBCbG9jaylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgcmlnaHRUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yaWdodC10aWxlJylcclxuICAgICAgICByaWdodFRpbGVzLmZvckVhY2godGlsZSA9PiB7XHJcbiAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXYpID0+IGV2LnByZXZlbnREZWZhdWx0KCkpXHJcbiAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGV2ID0+IHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIC8vRHJvcHBlZCBFbGVtZW50IGRhdGFcclxuICAgICAgICAgICAgICAgIGxldCBbbGVuZ3RoLCBzaWRlLCBpZF0gPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpLnNwbGl0KCcgJylcclxuICAgICAgICAgICAgICAgIGxldCBhdHRlbXB0Q29vcmRzLCBhdHRlbXB0U2hpcFxyXG4gICAgICAgICAgICAgICAgLy9SZXR1cm4gb24gd3Jvbmcgc2lkZVxyXG4gICAgICAgICAgICAgICAgaWYgKHNpZGUgIT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9DbG9uZSBkcm9wcGVkIGVsZW1lbnQgYW5kIHJlbW92ZSBvbGQgb25lIHNvIHRoYXQgZXZlbnQgbGlzdGVuZXJzIGRvbnQgaW50ZXJmZXJlXHJcbiAgICAgICAgICAgICAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1vdmVybGF5LXJpZ2h0JylcclxuICAgICAgICAgICAgICAgIGxldCBzaGlwQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcclxuICAgICAgICAgICAgICAgIGxldCBuZXdTaGlwQmxvY2sgPSBzaGlwQmxvY2suY2xvbmVOb2RlKHRydWUpXHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmxheS5jb250YWlucyhzaGlwQmxvY2spKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnBsYXllcjJCb2FyZC5yZW1vdmVTaGlwKFtbK3NoaXBCbG9jay5zdHlsZS5ncmlkUm93U3RhcnQgLSAxXSwgWytzaGlwQmxvY2suc3R5bGUuZ3JpZENvbHVtblN0YXJ0IC0gMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlQ2hpbGQoc2hpcEJsb2NrKVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1NoaXBCbG9jay5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsIGxlbmd0aCArICcgbGVmdCcgKyBgICR7aWR9YClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdTaGlwQmxvY2sgPSBzaGlwQmxvY2tcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1NldCBzaGlwIGRlcGVuZGluZyBvbiBwb3NpdGlvbiBvZiBibG9jayBhbmQgU2V0IGV2ZW50IGxpc3RlbmVyIGZvciByb3RhdGlvbiBvZiBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICBpZiAoK3NoaXBCbG9jay5zdHlsZS5ncmlkUm93U3RhcnQgPT0gK3NoaXBCbG9jay5zdHlsZS5ncmlkUm93RW5kIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFthdHRlbXB0Q29vcmRzLCBhdHRlbXB0U2hpcF0gPSBjb25maWcucGxheWVyMkJvYXJkLnNldFNoaXAoK2xlbmd0aCwgWytldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueCwgK2V2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC55XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFthdHRlbXB0Q29vcmRzLCBhdHRlbXB0U2hpcF0gPSBjb25maWcucGxheWVyMkJvYXJkLnNldFNoaXAoK2xlbmd0aCwgWytldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueCwgK2V2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC55XSwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhdHRlbXB0Q29vcmRzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IHBhcnNlVG9ZWChhdHRlbXB0Q29vcmRzWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmQgPSBwYXJzZVRvWVgoYXR0ZW1wdENvb3Jkc1thdHRlbXB0Q29vcmRzLmxlbmd0aCAtIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1NoaXBCbG9jay5zdHlsZS5ncmlkQXJlYSA9IGAke3N0YXJ0WzBdICsgMX0gLyAke3N0YXJ0WzFdICsgMX0gLyAke2VuZFswXSArIDJ9IC8gJHtlbmRbMV0gKyAyfWBcclxuICAgICAgICAgICAgICAgICAgICBuZXdTaGlwQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm90YXRlQXR0ZW1wdCA9IGNvbmZpZy5wbGF5ZXIyQm9hcmQucm90YXRlU2hpcChzdGFydCwgZW5kLCArbGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3RhdGVBdHRlbXB0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JvdGF0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gcm90YXRlQXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2hpcEJsb2NrLnN0eWxlLmdyaWRBcmVhID0gYCR7c3RhcnRbMF0gKyAxfSAvICR7c3RhcnRbMV0gKyAxfSAvICR7ZW5kWzBdICsgMn0gLyAke2VuZFsxXSArIDJ9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKG5ld1NoaXBCbG9jaylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzcGxheU1haW5HYW1lID0gYXN5bmMgKGNvbmZpZykgPT4ge1xyXG4gICAgICAgIGxldCBvbGRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzLWNvbnRhaW5lci1tYWluJylcclxuICAgICAgICBpZihvbGRDb250YWluZXIpe2F3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgb2xkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JsYW5rT3V0JylcclxuICAgICAgICAgICAgb2xkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KX1cclxuICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgbGV0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxyXG4gICAgICAgIG1haW5IZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1haW4nKVxyXG4gICAgICAgIGxldCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJ1xyXG4gICAgICAgIG1haW5UaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1tYWluJylcclxuICAgICAgICBsZXQgb3B0aW9uc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgb3B0aW9uc0J1dHRvbi5zcmMgPSAnLi9pbWFnZXMvc2V0dGluZ3MucG5nJ1xyXG4gICAgICAgIG9wdGlvbnNCdXR0b24uY2xhc3NMaXN0LmFkZCgnb3B0aW9ucy1idXR0b24nKVxyXG4gICAgICAgIG9wdGlvbnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93TWVudScpXHJcbiAgICAgICAgICAgIGNvbmZpZy5pc1BhdXNlZCA9IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMtY29udGFpbmVyJylcclxuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1vcHRpb25zLWhlYWRlcicpXHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1BhdXNlZCdcclxuICAgICAgICBsZXQgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgb3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLW9wdGlvbnMtY29udGFpbmVyJylcclxuICAgICAgICBsZXQgcmVtYXRjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcmVtYXRjaENvbnRhaW5lci50ZXh0Q29udGVudCA9ICdSZW1hdGNoJ1xyXG4gICAgICAgIHJlbWF0Y2hDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5nYW1lTW9kZSA9PSAncHZhaScpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlTaGlwc1NldHVwKHRydWUsIGNvbmZpZylcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5wbGF5ZXIyQm9hcmQuc2V0UmFuZG9tU2hpcHMoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheVNoaXBzU2V0dXAoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lLWNvbnRhaW5lci1tYWluJykudGV4dENvbnRlbnQgPSAnLSdcclxuICAgICAgICAgICAgYWRkTGlzdGVuZXJzU2V0dXAoY29uZmlnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IHNlbGVjdE1vZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHNlbGVjdE1vZGVDb250YWluZXIudGV4dENvbnRlbnQgPSAnQmFjayB0byBtb2RlIHNlbGVjdGlvbidcclxuICAgICAgICBzZWxlY3RNb2RlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICBtYWluR2FtZS5zZXR1cCgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgbWFpbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG1haW5NZW51LnRleHRDb250ZW50ID0gJ1JldHVybiB0byBNYWluIE1lbnUnXHJcbiAgICAgICAgbWFpbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIG1haW5HYW1lLmFwcFN0YXJ0KClcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd01lbnUnKVxyXG4gICAgICAgICAgICBjb25maWcuaXNQYXVzZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQnViYmxpbmcnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1hdGNoQ29udGFpbmVyKVxyXG4gICAgICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0TW9kZUNvbnRhaW5lcilcclxuICAgICAgICBvcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5NZW51KVxyXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGhlYWRlcilcclxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChvcHRpb25zQ29udGFpbmVyKVxyXG5cclxuXHJcbiAgICAgICAgLy9Ub3AgYm9hcmRcclxuICAgICAgICBsZXQgdG9wQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRvcEJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvcC1ib2FyZC1jb250YWluZXItbWFpbicpXHJcbiAgICAgICAgbGV0IHBsYXllcjFOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwbGF5ZXIxTmFtZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIxLW5hbWUtbWFpbicpXHJcbiAgICAgICAgcGxheWVyMU5hbWUudGV4dENvbnRlbnQgPSBjb25maWcucGxheWVyMU9iai5nZXRQbGF5ZXJUYWcoKVxyXG4gICAgICAgIGxldCB0aW1lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGltZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGltZS1jb250YWluZXItbWFpbicpXHJcbiAgICAgICAgdGltZXJDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHtjb25maWcudGltZVBlclR1cm59c2BcclxuICAgICAgICBsZXQgcGxheWVyMk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHBsYXllcjJOYW1lLmNsYXNzTGlzdC5hZGQoJ3BsYXllcjItbmFtZS1tYWluJylcclxuICAgICAgICBwbGF5ZXIyTmFtZS50ZXh0Q29udGVudCA9IGNvbmZpZy5wbGF5ZXIyT2JqLmdldFBsYXllclRhZygpXHJcblxyXG4gICAgICAgIGxldCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGJvYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2FyZHMtY29udGFpbmVyLW1haW4nKVxyXG4gICAgICAgIC8vTGVmdCBzaWRlIEdhbWVib2FyZFxyXG4gICAgICAgIGxldCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbGVmdFNpZGUuY2xhc3NMaXN0LmFkZCgnbGVmdC1zaWRlLWNvbnRhaW5lci1tYWluJylcclxuICAgICAgICBsZXQgbGVmdFNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBsZWZ0U2hpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGVmdC1zaGlwcy1jb250YWluZXItbWFpbicpXHJcblxyXG4gICAgICAgIGxldCBsZWZ0UGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGxlZnRQbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdsZWZ0LXBsYXllci1ib2FyZC1tYWluJylcclxuICAgICAgICAvL1JpZ2h0IHNpZGUgR2FtZWJvYXJkXHJcbiAgICAgICAgbGV0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXNpZGUtY29udGFpbmVyLW1haW4nKVxyXG5cclxuICAgICAgICBsZXQgcmlnaHRQbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcmlnaHRQbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdyaWdodC1wbGF5ZXItYm9hcmQtbWFpbicpXHJcbiAgICAgICAgLy9Qb3B1bGF0aW5nIGJvYXJkcyB3aXRoIHRpbGVzXHJcbiAgICAgICAgbGV0IHBvcHVsYXRlQm9hcmRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0VGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFRpbGUuZGF0YXNldC54ID0gaVxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRUaWxlLmRhdGFzZXQueSA9IGpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0VGlsZS5kYXRhc2V0LnNpZGUgPSAnbGVmdCdcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0VGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1haW5HYW1lLnNhdmVWYWxpZEF0dGVtcHQpXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFRpbGUuY2xhc3NMaXN0LmFkZCgnbGVmdC10aWxlJywgJ3RpbGUtYXBwZWFyJylcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0UGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQobGVmdFRpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlnLnBsYXllcjFSZWNvcmRzICYmIGNvbmZpZy5wbGF5ZXIxUmVjb3Jkc1tpXVtqXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0VGlsZS5jbGFzc0xpc3QuYWRkKGNvbmZpZy5wbGF5ZXIxUmVjb3Jkc1tpXVtqXSwgJ2ZsaXAnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0VGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRUaWxlLmRhdGFzZXQueCA9IGlcclxuICAgICAgICAgICAgICAgICAgICByaWdodFRpbGUuZGF0YXNldC55ID0galxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0VGlsZS5kYXRhc2V0LnNpZGUgPSAncmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRUaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFpbkdhbWUuc2F2ZVZhbGlkQXR0ZW1wdClcclxuICAgICAgICAgICAgICAgICAgICByaWdodFRpbGUuY2xhc3NMaXN0LmFkZCgncmlnaHQtdGlsZScsICd0aWxlLWFwcGVhcicpXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRQbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChyaWdodFRpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlnLnBsYXllcjJSZWNvcmRzICYmIGNvbmZpZy5wbGF5ZXIyUmVjb3Jkc1tpXVtqXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0VGlsZS5jbGFzc0xpc3QuYWRkKGNvbmZpZy5wbGF5ZXIyUmVjb3Jkc1tpXVtqXSwgJ2ZsaXAnKVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vQXBwZW5kaW5nIGVsZW1lbnRzIHRvIERPTVxyXG4gICAgICAgIHBvcHVsYXRlQm9hcmRzKClcclxuICAgICAgICBsZXQgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddXHJcbiAgICAgICAgbGV0IGhvcml6b250YWxGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgaG9yaXpvbnRhbEZyYW1lLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwtZnJhbWUtY29udGFpbmVyJylcclxuICAgICAgICBsZXQgdmVydGljYWxGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdmVydGljYWxGcmFtZS5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbC1mcmFtZS1jb250YWluZXInKVxyXG4gICAgICAgIGxldHRlcnMuZm9yRWFjaCgobGV0dGVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGV0dGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgbGV0dGVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gbGV0dGVyXHJcblxyXG4gICAgICAgICAgICBsZXQgbnVtYmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgbnVtYmVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gaW5kZXhcclxuXHJcbiAgICAgICAgICAgIGhvcml6b250YWxGcmFtZS5hcHBlbmRDaGlsZChudW1iZXJDb250YWluZXIpXHJcbiAgICAgICAgICAgIHZlcnRpY2FsRnJhbWUuYXBwZW5kQ2hpbGQobGV0dGVyQ29udGFpbmVyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbEZyYW1lKVxyXG4gICAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKHZlcnRpY2FsRnJhbWUpXHJcblxyXG4gICAgICAgIGhvcml6b250YWxGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgaG9yaXpvbnRhbEZyYW1lLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwtZnJhbWUtY29udGFpbmVyJylcclxuXHJcbiAgICAgICAgdmVydGljYWxGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdmVydGljYWxGcmFtZS5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbC1mcmFtZS1jb250YWluZXInKVxyXG5cclxuICAgICAgICBsZXR0ZXJzLmZvckVhY2goKGxldHRlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxldHRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGxldHRlckNvbnRhaW5lci50ZXh0Q29udGVudCA9IGxldHRlclxyXG5cclxuICAgICAgICAgICAgbGV0IG51bWJlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIG51bWJlckNvbnRhaW5lci50ZXh0Q29udGVudCA9IGluZGV4XHJcblxyXG4gICAgICAgICAgICBob3Jpem9udGFsRnJhbWUuYXBwZW5kQ2hpbGQobnVtYmVyQ29udGFpbmVyKVxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEZyYW1lLmFwcGVuZENoaWxkKGxldHRlckNvbnRhaW5lcilcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChob3Jpem9udGFsRnJhbWUpXHJcbiAgICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHZlcnRpY2FsRnJhbWUpXHJcblxyXG4gICAgICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQobWFpblRpdGxlKVxyXG4gICAgICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQob3B0aW9uc0J1dHRvbilcclxuXHJcbiAgICAgICAgdG9wQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyMU5hbWUpXHJcbiAgICAgICAgdG9wQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZXJDb250YWluZXIpXHJcbiAgICAgICAgdG9wQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyMk5hbWUpXHJcblxyXG4gICAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGxlZnRQbGF5ZXJCb2FyZClcclxuICAgICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRQbGF5ZXJCb2FyZClcclxuICAgICAgICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdFNpZGUpXHJcbiAgICAgICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSlcclxuXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyKVxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodG9wQm9hcmRDb250YWluZXIpXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChib2FyZHNDb250YWluZXIpXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtb2RhbClcclxuICAgIH1cclxuICAgIGxldCBkaXNwbGF5TWFpbk1lbnUgPSAoKSA9PiB7XHJcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIGxldCB0aXRsZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRpdGxlTWVudS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1tZW51JylcclxuICAgICAgICB0aXRsZU1lbnUudGV4dENvbnRlbnQgPSBcIkJBVFRMRVNISVBcIlxyXG5cclxuICAgICAgICBsZXQgb3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICAgICAgbGV0IGNvbnRpbnVlT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjb250aW51ZU9wdGlvbi50ZXh0Q29udGVudCA9ICdSZXN1bWUgbWF0Y2gnXHJcbiAgICAgICAgY29udGludWVPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluR2FtZS5jb250aW51ZU1haW5HYW1lKVxyXG5cclxuICAgICAgICBsZXQgbmV3R2FtZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbmV3R2FtZU9wdGlvbi50ZXh0Q29udGVudCA9ICdOZXcgR2FtZSdcclxuICAgICAgICBuZXdHYW1lT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFpbkdhbWUuc2V0dXApXHJcblxyXG4gICAgICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250aW51ZU9wdGlvbilcclxuICAgICAgICBvcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3R2FtZU9wdGlvbilcclxuXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZU1lbnUpXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChvcHRpb25Db250YWluZXIpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlbmRlckF0dGVtcHQgPSAoYXR0ZW1wdCwgc2lkZSkgPT4ge1xyXG4gICAgICAgIGlmIChhdHRlbXB0WzBdID09ICdtaXNzZWQnKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NpZGV9W2RhdGEteD0nJHthdHRlbXB0WzFdfSddW2RhdGEteT0nJHthdHRlbXB0WzJdfSddYCkuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJywgJ2ZsaXAnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NpZGV9W2RhdGEteD0nJHthdHRlbXB0WzFdfSddW2RhdGEteT0nJHthdHRlbXB0WzJdfSddYCkuY2xhc3NMaXN0LmFkZCgnaGl0JywgJ2ZsaXAnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVuZGVyV2lubmVyID0gKGNvbmZpZywgd2lubmVyKSA9PiB7XHJcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250YWluZXInKVxyXG5cclxuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJylcclxuICAgICAgICBsZXQgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgaW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1pbmZvLWNvbnRhaW5lcicpXHJcbiAgICAgICAgbGV0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG9wdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3B0aW9ucy1jb250YWluZXInKVxyXG5cclxuICAgICAgICBsZXQgcmVtYXRjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcmVtYXRjaENvbnRhaW5lci50ZXh0Q29udGVudCA9ICdSZW1hdGNoJ1xyXG4gICAgICAgIHJlbWF0Y2hDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuZ2FtZU1vZGUgPT0gJ3B2YWknKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5U2hpcHNTZXR1cCh0cnVlLCBjb25maWcpXHJcbiAgICAgICAgICAgICAgICBjb25maWcucGxheWVyMkJvYXJkLnNldFJhbmRvbVNoaXBzKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlTaGlwc1NldHVwKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5hZGRMaXN0ZW5lcnNTZXR1cChjb25maWcpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgc2VsZWN0TW9kZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgc2VsZWN0TW9kZUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICdCYWNrIHRvIG1vZGUgc2VsZWN0aW9uJ1xyXG4gICAgICAgIHNlbGVjdE1vZGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluR2FtZS5zZXR1cClcclxuICAgICAgICBsZXQgbWFpbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG1haW5NZW51LnRleHRDb250ZW50ID0gJ1JldHVybiB0byBNYWluIE1lbnUnXHJcbiAgICAgICAgbWFpbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluR2FtZS5hcHBTdGFydClcclxuXHJcblxyXG4gICAgICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtYXRjaENvbnRhaW5lcilcclxuICAgICAgICBvcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdE1vZGVDb250YWluZXIpXHJcbiAgICAgICAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluTWVudSlcclxuXHJcblxyXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGhlYWRlcilcclxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKVxyXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKG9wdGlvbnNDb250YWluZXIpXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtb2RhbClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHsgZGlzcGxheU1haW5HYW1lLCBkaXNwbGF5TWVudSwgZGlzcGxheVNoaXBzU2V0dXAsIHJlbmRlckF0dGVtcHQsIGFkZExpc3RlbmVyc1NldHVwLCByZW5kZXJXaW5uZXIsIGRpc3BsYXlNYWluTWVudSB9XHJcbn0pKCkiLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGxldCBib2FyZCA9IFsuLi5BcnJheSgxMCldLm1hcCgoKSA9PiBBcnJheSgxMCkpXHJcbiAgICBsZXQgcmVjb3JkcyA9IFsuLi5BcnJheSgxMCldLm1hcCgoKSA9PiBBcnJheSgxMCkpXHJcbiAgICBsZXQgc2hpcHNPbkJvYXJkID0gW11cclxuXHJcbiAgICBsZXQgcmV0cmlldmVEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBbcmVjb3JkcywgKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNoaXBzID0gW11cclxuICAgICAgICAgICAgc2hpcHNPbkJvYXJkLmZvckVhY2goY3JyU2hpcCA9PiB7XHJcbiAgICAgICAgICAgICAgICBzaGlwcy5wdXNoKHtzaGlwOmNyclNoaXAuc2hpcC5nZXRJbmZvKCksIGNvb3JkaW5hdGVzOiBjcnJTaGlwLmNvb3JkaW5hdGVzfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHNoaXBzXHJcbiAgICAgICAgfSkoKV1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2F2ZURhdGEgPSAoc2F2ZWRJbmZvKSA9PiB7XHJcbiAgICAgICAgcmVjb3JkcyA9IHNhdmVkSW5mb1swXVxyXG4gICAgICAgIHNhdmVkSW5mb1sxXS5mb3JFYWNoKCBjcnJTaGlwID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld1NoaXAgPSBzaGlwKGNyclNoaXAuc2hpcFsxXSlcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNyclNoaXAuc2hpcFswXTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIG5ld1NoaXAuaGl0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcnJTaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkKT0+e1xyXG4gICAgICAgICAgICAgICAgYm9hcmRbX3BhcnNlVG9ZWChjb29yZClbMF1dW19wYXJzZVRvWVgoY29vcmQpWzFdXSA9IG5ld1NoaXA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNoaXBzT25Cb2FyZC5wdXNoKHsgc2hpcDogbmV3U2hpcCwgY29vcmRpbmF0ZXM6IGNyclNoaXAuY29vcmRpbmF0ZXN9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlY29yZHNcclxuICAgIH1cclxuICAgIGxldCByZXNldEJvYXJkID0gKCkgPT4ge1xyXG4gICAgICAgIGJvYXJkID0gWy4uLkFycmF5KDEwKV0ubWFwKCgpID0+IEFycmF5KDEwKSlcclxuICAgICAgICByZWNvcmRzID0gWy4uLkFycmF5KDEwKV0ubWFwKCgpID0+IEFycmF5KDEwKSlcclxuICAgICAgICBzaGlwc09uQm9hcmQgPSBbXVxyXG4gICAgfVxyXG4gICAgbGV0IF9wYXJzZVRvWVggPSAoc3RyKSA9PiB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3RyKSAmJiBzdHIubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgaWYgKChzdHJbMF0gPj0gMCAmJiBzdHJbMF0gPD0gOSkgJiYgKHN0clsxXSA+PSAwICYmIHN0clsxXSA8PSA5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoICE9IDIgfHwgdHlwZW9mIHN0ciAhPSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IFtwb3NpdGlvblksIHBvc2l0aW9uWF0gPSBzdHIuc3BsaXQoXCJcIilcclxuICAgICAgICBwb3NpdGlvblggPSArcG9zaXRpb25YXHJcbiAgICAgICAgcG9zaXRpb25ZID0gcG9zaXRpb25ZLmNoYXJDb2RlQXQoMClcclxuXHJcbiAgICAgICAgaWYgKChOdW1iZXIuaXNOYU4ocG9zaXRpb25YKSkgfHwgKHBvc2l0aW9uWSA8IDY1IHx8IHBvc2l0aW9uWSA+IDc0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbcG9zaXRpb25ZIC0gNjUsIHBvc2l0aW9uWF1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX3BhcnNlVG9TdHIgPSAocm93LCBjb2x1bW4pID0+IHtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSBbXVxyXG4gICAgICAgIHBvc2l0aW9uLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShyb3cgKyA2NSkpXHJcbiAgICAgICAgcG9zaXRpb24ucHVzaChjb2x1bW4pXHJcblxyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbi5qb2luKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBzZXRTaGlwID0gKGxlbmd0aCwgcG9zaXRpb24sIGlzSG9yaXpvbnRhbCA9IHRydWUpID0+IHtcclxuICAgICAgICBpZiAobGVuZ3RoID4gNSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGxlbmd0aFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFfcGFyc2VUb1lYKHBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNvb3JkaW5hdGVcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IFtyb3csIGNvbHVtbl0gPSBfcGFyc2VUb1lYKHBvc2l0aW9uKVxyXG5cclxuICAgICAgICBpZiAoKHJvdyA+IDkgfHwgcm93IDwgMCkgfHwgKGNvbHVtbiA+IDkgfHwgY29sdW1uIDwgMCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBjb29yZGluYXRlXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKHJvdyArIGxlbmd0aCA+IDEwICYmICFpc0hvcml6b250YWwpIHx8IChjb2x1bW4gKyBsZW5ndGggPiAxMCAmJiBpc0hvcml6b250YWwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkludmFsaWQgY29vcmRpbmF0ZSBkdWUgdG8gbGVuZ3RoXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjcnJTaGlwID0gc2hpcChsZW5ndGgpXHJcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2x1bW4gKyBpXSkgcmV0dXJuIFwiU3BhY2Ugb24gY29vcmRpbmF0ZSBpcyB1bmF2YWlsYWJsZVwiXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbcm93ICsgaV1bY29sdW1uXSkgcmV0dXJuIFwiU3BhY2Ugb24gY29vcmRpbmF0ZSBpcyB1bmF2YWlsYWJsZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICAgICAgYm9hcmRbcm93XVtjb2x1bW4gKyBpXSA9IGNyclNoaXBcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goX3BhcnNlVG9TdHIocm93LCBjb2x1bW4gKyBpKSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJvYXJkW3JvdyArIGldW2NvbHVtbl0gPSBjcnJTaGlwO1xyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChfcGFyc2VUb1N0cihyb3cgKyBpLCBjb2x1bW4pKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoaXBzT25Cb2FyZC5wdXNoKHsgc2hpcDogY3JyU2hpcCwgY29vcmRpbmF0ZXMgfSlcclxuICAgICAgICByZXR1cm4gW2Nvb3JkaW5hdGVzLCBjcnJTaGlwXVxyXG4gICAgfVxyXG5cclxuICAgIGxldCByZWNlaXZlQXR0YWNrID0gKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKCFfcGFyc2VUb1lYKHBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNvb3JkaW5hdGVzXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IFtyb3csIGNvbHVtbl0gPSBfcGFyc2VUb1lYKHBvc2l0aW9uKVxyXG4gICAgICAgIGlmICgocm93ID4gOSB8fCByb3cgPCAwKSB8fCAoY29sdW1uID4gOSB8fCBjb2x1bW4gPCAwKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNvb3JkaW5hdGVzXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocmVjb3Jkc1tyb3ddW2NvbHVtbl0gPT0gJ2hpdCcgfHwgcmVjb3Jkc1tyb3ddW2NvbHVtbl0gPT0gJ21pc3NlZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiYXR0YWNrZWRcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWJvYXJkW3Jvd11bY29sdW1uXSkge1xyXG4gICAgICAgICAgICByZWNvcmRzW3Jvd11bY29sdW1uXSA9ICdtaXNzZWQnXHJcbiAgICAgICAgICAgIHJldHVybiBbJ21pc3NlZCcsIHJvdywgY29sdW1uXVxyXG4gICAgICAgIH1cclxuICAgICAgICBib2FyZFtyb3ddW2NvbHVtbl0uaGl0KClcclxuICAgICAgICByZWNvcmRzW3Jvd11bY29sdW1uXSA9ICdoaXQnXHJcbiAgICAgICAgcmV0dXJuIFsnaGl0Jywgcm93LCBjb2x1bW5dXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gc2hpcHNPbkJvYXJkLnJlZHVjZSgoYWNjLCBjcnIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNyci5zaGlwLmlzU3VuaygpICYmIGFjYykgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfSwgdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2V0UmFuZG9tU2hpcHMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGxlbmd0aHMgPSBbNSwgNCwgMywgMywgMl1cclxuICAgICAgICBsZW5ndGhzLmZvckVhY2gobGVuZ3RoID0+IHtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNldFNoaXAobGVuZ3RoLCBbX3JhbmRvbUludCgxMCksIF9yYW5kb21JbnQoMTApXSwgX3JhbmRvbUludCgyKSkpKSBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGxldCBnZXRSZWNvcmRzID0gKCkgPT4gcmVjb3JkcztcclxuICAgIGxldCByb3RhdGVTaGlwID0gKHN0YXJ0Q29vcmRzLCBlbmRDb29yZHMsIGxlbmd0aCkgPT4ge1xyXG4gICAgICAgIGxldCBzaGlwID0gYm9hcmRbc3RhcnRDb29yZHNbMF1dW3N0YXJ0Q29vcmRzWzFdXVxyXG4gICAgICAgIGlmIChzdGFydENvb3Jkc1swXSA9PT0gZW5kQ29vcmRzWzBdKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFydENvb3Jkc1swXSArIGxlbmd0aCAtIDEgPiA5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgZHVlIHRvIGxlbmd0aCBWZXJ0aWNhbCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbc3RhcnRDb29yZHNbMF0gKyBpXVtzdGFydENvb3Jkc1sxXV0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgY29vcmQgVmVydGljYWwnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVtb3ZlU2hpcChzdGFydENvb3JkcywgZW5kQ29vcmRzLCBsZW5ndGgpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGJvYXJkW3N0YXJ0Q29vcmRzWzBdICsgaV1bc3RhcnRDb29yZHNbMV1dID0gc2hpcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbc3RhcnRDb29yZHNbMF0gKyBsZW5ndGggLSAxLCBzdGFydENvb3Jkc1sxXV1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFydENvb3Jkc1sxXSArIGxlbmd0aCAtIDEgPiA5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgZHVlIHRvIGxlbmd0aCBIb3Jpem9udGFsJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChib2FyZFtzdGFydENvb3Jkc1swXV1bc3RhcnRDb29yZHNbMV0gKyBpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnSW52YWxpZCBjb29yZCBIb3Jpem9udGFsJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbW92ZVNoaXAoc3RhcnRDb29yZHMsIGxlbmd0aClcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGJvYXJkW3N0YXJ0Q29vcmRzWzBdXVtzdGFydENvb3Jkc1sxXSArIGldID0gc2hpcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbc3RhcnRDb29yZHNbMF0sIHN0YXJ0Q29vcmRzWzFdICsgbGVuZ3RoIC0gMV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgcmVtb3ZlU2hpcCA9IChzdGFydENvb3JkcykgPT4ge1xyXG4gICAgICAgIGxldCBzaGlwVG9CZVJlbW92ZWQgPSBib2FyZFtzdGFydENvb3Jkc1swXV1bc3RhcnRDb29yZHNbMV1dXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdID09IHNoaXBUb0JlUmVtb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldW2pdID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoaXBzT25Cb2FyZC5maWx0ZXIoc2hpcCA9PiBzaGlwLnNoaXAgPT0gc2hpcFRvQmVSZW1vdmVkID8gZmFsc2UgOiB0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBfcmFuZG9tSW50ID0gKG51bSkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtKTtcclxuICAgIHJldHVybiB7IHNldFNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFNoaXBzU3VuaywgZ2V0UmVjb3Jkcywgc2V0UmFuZG9tU2hpcHMsIHJvdGF0ZVNoaXAsIHJlbW92ZVNoaXAsIHJlc2V0Qm9hcmQsIHJldHJpZXZlRGF0YSwgc2F2ZURhdGEgfVxyXG59ICIsImltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgZ2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcclxuaW1wb3J0IHBsYXllciBmcm9tICcuL3BsYXllcidcclxuaW1wb3J0IGFpUGxheWVyIGZyb20gXCIuL2FpUGxheWVyXCI7XHJcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XHJcbiAgICBsZXQgY291bnRlclxyXG4gICAgbGV0IGNvbmZpZyA9IHt9XHJcbiAgICBjb25maWcuaXNQYXVzZWQgPSBmYWxzZVxyXG4gICAgbGV0IHRpbWVyXHJcbiAgICBsZXQgY3JyTW92ZXMgPSBbXVxyXG4gICAgY29uc3QgcmV0cmlldmVEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCFKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKSkpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJlc2V0UGxheWVyc0JvYXJkcygpXHJcbiAgICAgICAgbGV0IHNhdmVkQ29uZmlnID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJykpXHJcbiAgICAgICAgY29uZmlnLmlzUGF1c2VkID0gc2F2ZWRDb25maWcuaXNQYXVzZWRcclxuICAgICAgICBjb25maWcuZ2FtZU1vZGUgPSBzYXZlZENvbmZpZy5nYW1lTW9kZVxyXG4gICAgICAgIGNvbmZpZy50aW1lUGVyVHVybiA9IHNhdmVkQ29uZmlnLnRpbWVQZXJUdXJuXHJcbiAgICAgICAgY29uZmlnLnBsYXllcjFPYmogPSBwbGF5ZXIoc2F2ZWRDb25maWcucGxheWVyMU9ialswXSlcclxuICAgICAgICBjb25maWcucGxheWVyMk9iaiA9IHNhdmVkQ29uZmlnLnBsYXllcjJPYmpbMV0gPyBhaVBsYXllcigpOiBwbGF5ZXIoc2F2ZWRDb25maWcucGxheWVyMk9ialswXSk7XHJcbiAgICAgICAgY29uZmlnLnBsYXllcjFSZWNvcmRzID0gY29uZmlnLnBsYXllcjFCb2FyZC5zYXZlRGF0YShzYXZlZENvbmZpZy5wbGF5ZXIxQm9hcmQpXHJcbiAgICAgICAgY29uZmlnLnBsYXllcjJSZWNvcmRzID0gY29uZmlnLnBsYXllcjJCb2FyZC5zYXZlRGF0YShzYXZlZENvbmZpZy5wbGF5ZXIyQm9hcmQpXHJcbiAgICAgICAgY29uc29sZS5sb2coc2F2ZWRDb25maWcpXHJcbiAgICB9XHJcbiAgICBjb25zdCBzYXZlRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgc2F2ZWRDb25maWcgPSB7Li4uY29uZmlnfVxyXG4gICAgICAgIHNhdmVkQ29uZmlnLnBsYXllcjFPYmogPSBzYXZlZENvbmZpZy5wbGF5ZXIxT2JqLnJldHJpZXZlRGF0YSgpIFxyXG4gICAgICAgIHNhdmVkQ29uZmlnLnBsYXllcjJPYmogPSBzYXZlZENvbmZpZy5wbGF5ZXIyT2JqLnJldHJpZXZlRGF0YSgpIFxyXG4gICAgICAgIHNhdmVkQ29uZmlnLnBsYXllcjFCb2FyZCA9IHNhdmVkQ29uZmlnLnBsYXllcjFCb2FyZC5yZXRyaWV2ZURhdGEoKVxyXG4gICAgICAgIHNhdmVkQ29uZmlnLnBsYXllcjJCb2FyZCA9IHNhdmVkQ29uZmlnLnBsYXllcjJCb2FyZC5yZXRyaWV2ZURhdGEoKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb25maWcnLCBKU09OLnN0cmluZ2lmeShzYXZlZENvbmZpZykpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBhcnNlVG9ZWCA9IChzdHIpID0+IHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdHIpICYmIHN0ci5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoKHN0clswXSA+PSAwICYmIHN0clswXSA8PSA5KSAmJiAoc3RyWzFdID49IDAgJiYgc3RyWzFdIDw9IDkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggIT0gMiB8fCB0eXBlb2Ygc3RyICE9IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgW3Bvc2l0aW9uWSwgcG9zaXRpb25YXSA9IHN0ci5zcGxpdChcIlwiKVxyXG4gICAgICAgIHBvc2l0aW9uWCA9ICtwb3NpdGlvblhcclxuICAgICAgICBwb3NpdGlvblkgPSBwb3NpdGlvblkuY2hhckNvZGVBdCgwKVxyXG5cclxuICAgICAgICBpZiAoKE51bWJlci5pc05hTihwb3NpdGlvblgpKSB8fCAocG9zaXRpb25ZIDwgNjUgfHwgcG9zaXRpb25ZID4gNzQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtwb3NpdGlvblkgLSA2NSwgcG9zaXRpb25YXVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzZXRQbGF5ZXJzQm9hcmRzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbmZpZy5wbGF5ZXIxQm9hcmQgPSBnYW1lYm9hcmQoKVxyXG4gICAgICAgIGNvbmZpZy5wbGF5ZXIyQm9hcmQgPSBnYW1lYm9hcmQoKVxyXG4gICAgICAgIGNvbmZpZy5wbGF5ZXIxUmVjb3JkcyA9IG51bGxcclxuICAgICAgICBjb25maWcucGxheWVyMlJlY29yZHMgPSBudWxsXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcclxuICAgICAgICBjb25maWcuaXNQYXVzZWQgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc3QgcGxheVJvdW5kID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChjb25maWcuZ2FtZU1vZGUgPT0gJ3B2YWknKSB7XHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXIxQXR0ZW1wdCA9IGNvbmZpZy5wbGF5ZXIxT2JqLnNlbmRBdHRhY2soY3JyTW92ZXNbMF0sIGNvbmZpZy5wbGF5ZXIyQm9hcmQpXHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckF0dGVtcHQocGxheWVyMUF0dGVtcHQsIFwicmlnaHQtdGlsZVwiKVxyXG5cclxuICAgICAgICAgICAgbGV0IHBjQXR0ZW1wdCA9IGNvbmZpZy5wbGF5ZXIyT2JqLnNlbmRBdHRhY2soY29uZmlnLnBsYXllcjFCb2FyZClcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQXR0ZW1wdChwY0F0dGVtcHQsICdsZWZ0LXRpbGUnKVxyXG4gICAgICAgICAgICBjb3VudGVyID0gY29uZmlnLnRpbWVQZXJUdXJuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lLWNvbnRhaW5lci1tYWluJykudGV4dENvbnRlbnQgPSBgJHtjb3VudGVyfXNgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHBsYXllcjFBdHRlbXB0ID0gY29uZmlnLnBsYXllcjFPYmouc2VuZEF0dGFjayhjcnJNb3Zlc1swXSwgY29uZmlnLnBsYXllcjJCb2FyZClcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQXR0ZW1wdChwbGF5ZXIxQXR0ZW1wdCwgXCJyaWdodC10aWxlXCIpXHJcblxyXG4gICAgICAgICAgICBsZXQgcGxheWVyMkF0dGVtcHQgPSBjb25maWcucGxheWVyMk9iai5zZW5kQXR0YWNrKGNyck1vdmVzWzFdLCBjb25maWcucGxheWVyMUJvYXJkKVxyXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJBdHRlbXB0KHBsYXllcjJBdHRlbXB0LCAnbGVmdC10aWxlJylcclxuXHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBjb25maWcudGltZVBlclR1cm5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUtY29udGFpbmVyLW1haW4nKS50ZXh0Q29udGVudCA9IGAke2NvdW50ZXJ9c2BcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wbGF5ZXIyQm9hcmQuYWxsU2hpcHNTdW5rKCkgfHwgY29uZmlnLnBsYXllcjFCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xyXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJXaW5uZXIoY29uZmlnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjcnJNb3ZlcyA9IFtdXHJcbiAgICAgICAgc2F2ZURhdGEoKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2F2ZVZhbGlkQXR0ZW1wdCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5nYW1lTW9kZSA9PSAncHZhaScgJiYgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc2lkZSA9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgIGNyck1vdmVzWzBdID0gW2UuY3VycmVudFRhcmdldC5kYXRhc2V0LngsIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnldXHJcbiAgICAgICAgICAgIHBsYXlSb3VuZCgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNpZGUgPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgY3JyTW92ZXNbMF0gPSBbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueCwgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNyck1vdmVzWzFdID0gW2UuY3VycmVudFRhcmdldC5kYXRhc2V0LngsIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjcnJNb3Zlc1swXSAmJiBjcnJNb3Zlc1sxXSkge1xyXG4gICAgICAgICAgICBwbGF5Um91bmQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGFwcFN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlNYWluTWVudSgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0dXAgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9HZXQgSW5mbyBmcm9tIERPTSBcclxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5TWVudSgpXHJcbiAgICAgICAgbGV0IGNvbnRpbnVlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1zbGlkZS1tZW51JylcclxuICAgICAgICBjb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzZXRQbGF5ZXJzKVxyXG4gICAgICAgIGxldCByaWdodE1vZGVTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1zaWRlLW1vZGUnKVxyXG4gICAgICAgIHJpZ2h0TW9kZVNlbGVjdGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25maWcuZ2FtZU1vZGUgPSAncHZhaSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBsZWZ0TW9kZVNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtc2lkZS1tb2RlJylcclxuICAgICAgICBsZWZ0TW9kZVNlbGVjdGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25maWcuZ2FtZU1vZGUgPSAncHZwJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXRQbGF5ZXJzID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBsZXQgZm9ybSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZS50YXJnZXQpLmVudHJpZXMoKSlcclxuICAgICAgICBpZiAoIWZvcm0ucGxheWVyMU5hbWUpIHtcclxuICAgICAgICAgICAgY29uZmlnLnBsYXllcjFPYmogPSBwbGF5ZXIoJ1BsYXllciAxJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25maWcucGxheWVyMU9iaiA9IHBsYXllcihmb3JtLnBsYXllcjFOYW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmdhbWVNb2RlICE9ICdwdmFpJykge1xyXG4gICAgICAgICAgICBpZiAoIWZvcm0ucGxheWVyMk5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5wbGF5ZXIyT2JqID0gcGxheWVyKCdQbGF5ZXIgMicpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcucGxheWVyMk9iaiA9IHBsYXllcihmb3JtLnBsYXllcjJOYW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uZmlnLnBsYXllcjJPYmogPSBhaVBsYXllcigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmZpZy5wbGF5ZXIxQm9hcmQgPSBnYW1lYm9hcmQoKVxyXG4gICAgICAgIGNvbmZpZy5wbGF5ZXIyQm9hcmQgPSBnYW1lYm9hcmQoKVxyXG4gICAgICAgIGNvbmZpZy50aW1lUGVyVHVybiA9IGZvcm0udGltZVNlbGVjdGVkXHJcbiAgICAgICAgaWYgKGNvbmZpZy5nYW1lTW9kZSA9PSAncHZhaScpIHtcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheVNoaXBzU2V0dXAodHJ1ZSwgY29uZmlnKVxyXG4gICAgICAgICAgICBjb25maWcucGxheWVyMkJvYXJkLnNldFJhbmRvbVNoaXBzKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5U2hpcHNTZXR1cChmYWxzZSwgY29uZmlnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5hZGRMaXN0ZW5lcnNTZXR1cChjb25maWcpXHJcbiAgICB9XHJcbiAgICBsZXQgZ2FtZVN0YXJ0ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgY291bnRlciA9IGNvbmZpZy50aW1lUGVyVHVyblxyXG4gICAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuZ2FtZU1vZGUgPT0gJ3B2YWknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIxQXR0ZW1wdCA9IGNvbmZpZy5wbGF5ZXIxT2JqLnNlbmRSYW5kb21BdHRhY2soY29uZmlnLnBsYXllcjJCb2FyZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQXR0ZW1wdChwbGF5ZXIxQXR0ZW1wdCwgXCJyaWdodC10aWxlXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGNBdHRlbXB0ID0gY29uZmlnLnBsYXllcjJPYmouc2VuZEF0dGFjayhjb25maWcucGxheWVyMUJvYXJkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJBdHRlbXB0KHBjQXR0ZW1wdCwgJ2xlZnQtdGlsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghY3JyTW92ZXNbMF0gJiYgIWNyck1vdmVzWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIxQXR0ZW1wdCA9IGNvbmZpZy5wbGF5ZXIxT2JqLnNlbmRSYW5kb21BdHRhY2soY29uZmlnLnBsYXllcjJCb2FyZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQXR0ZW1wdChwbGF5ZXIxQXR0ZW1wdCwgXCJyaWdodC10aWxlXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyMkF0dGVtcHQgPSBjb25maWcucGxheWVyMk9iai5zZW5kUmFuZG9tQXR0YWNrKGNvbmZpZy5wbGF5ZXIxQm9hcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckF0dGVtcHQocGxheWVyMkF0dGVtcHQsICdsZWZ0LXRpbGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNyck1vdmVzWzBdICYmIGNyck1vdmVzWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIxQXR0ZW1wdCA9IGNvbmZpZy5wbGF5ZXIxT2JqLnNlbmRSYW5kb21BdHRhY2soY29uZmlnLnBsYXllcjJCb2FyZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQXR0ZW1wdChwbGF5ZXIxQXR0ZW1wdCwgXCJyaWdodC10aWxlXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyMkF0dGVtcHQgPSBjb25maWcucGxheWVyMk9iai5zZW5kQXR0YWNrKGNyck1vdmVzWzFdLCBjb25maWcucGxheWVyMUJvYXJkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJBdHRlbXB0KHBsYXllcjJBdHRlbXB0LCAnbGVmdC10aWxlJylcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNyck1vdmVzWzBdICYmICFjcnJNb3Zlc1sxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyMUF0dGVtcHQgPSBjb25maWcucGxheWVyMU9iai5zZW5kQXR0YWNrKGNyck1vdmVzWzBdLCBjb25maWcucGxheWVyMkJvYXJkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJBdHRlbXB0KHBsYXllcjFBdHRlbXB0LCBcInJpZ2h0LXRpbGVcIilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIyQXR0ZW1wdCA9IGNvbmZpZy5wbGF5ZXIyT2JqLnNlbmRSYW5kb21BdHRhY2soY29uZmlnLnBsYXllcjFCb2FyZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQXR0ZW1wdChwbGF5ZXIyQXR0ZW1wdCwgJ2xlZnQtdGlsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgPSBjb25maWcudGltZVBlclR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lLWNvbnRhaW5lci1tYWluJykudGV4dENvbnRlbnQgPSBgJHtjb3VudGVyfXNgXHJcbiAgICAgICAgICAgICAgICBjb3VudGVyLS1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgc2F2ZURhdGEoKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY29udGludWVNYWluR2FtZSA9ICgpID0+IHtcclxuICAgICAgICByZXRyaWV2ZURhdGEoKVxyXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlNYWluR2FtZShjb25maWcpXHJcbiAgICAgICAgZ2FtZVN0YXJ0ZWQoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHNldHVwLCBzYXZlVmFsaWRBdHRlbXB0LCBhcHBTdGFydCwgZ2FtZVN0YXJ0ZWQsIHJlc2V0UGxheWVyc0JvYXJkcywgc2F2ZURhdGEsIGNvbnRpbnVlTWFpbkdhbWV9XHJcbn0pKCkiLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHRhZykgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB0YWcgIT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBsZXQgcGxheWVyVGFnID0gdGFnXHJcblxyXG4gICAgbGV0IGdldFBsYXllclRhZyA9ICgpID0+IHBsYXllclRhZztcclxuICAgIGxldCByZXRyaWV2ZURhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFsgZ2V0UGxheWVyVGFnKCksIGZhbHNlIF1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2VuZEF0dGFjayA9IChwb3NpdGlvbiwgZ2FtZWJvYXJkKSA9PiB7XHJcbiAgICAgICAgbGV0IGF0dGFja1JlcG9ydCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHBvc2l0aW9uKVxyXG5cclxuICAgICAgICBpZiAoYXR0YWNrUmVwb3J0ID09IFwiSW52YWxpZCBjb29yZGluYXRlc1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkludmFsaWQgY29vcmRpbmF0ZXNcIlxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVwb3J0ID09IFwiYXR0YWNrZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJQb3NpdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGF0dGFja1JlcG9ydFxyXG4gICAgfVxyXG4gICAgbGV0IF9yYW5kb21JbnQgPSAobnVtKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW0pO1xyXG5cclxuICAgIGxldCBzZW5kUmFuZG9tQXR0YWNrID0gKGdhbWVib2FyZCkgPT4ge1xyXG4gICAgICAgIGxldCBhdHRlbXB0XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgYXR0ZW1wdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtfcmFuZG9tSW50KDEwKSwgX3JhbmRvbUludCgxMCldKVxyXG4gICAgICAgICAgICBpZiAoYXR0ZW1wdFswXSA9PSAnaGl0JyB8fCBhdHRlbXB0WzBdID09ICdtaXNzZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgZ2V0UGxheWVyVGFnLCBzZW5kQXR0YWNrLCBzZW5kUmFuZG9tQXR0YWNrLCByZXRyaWV2ZURhdGEgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKGxlbmd0aCk9PntcclxuICAgIGxldCBzaGlwTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgbGV0IG51bU9mSGl0cyA9IDA7XHJcblxyXG4gICAgbGV0IGdldEluZm8gPSAoKSA9PiBbbnVtT2ZIaXRzLCBzaGlwTGVuZ3RoXTtcclxuICAgIGxldCBoaXQgPSAoKSA9PiArK251bU9mSGl0cztcclxuICAgIGxldCBpc1N1bmsgPSAoKSA9PiBzaGlwTGVuZ3RoID09PSBudW1PZkhpdHMgPyB0cnVlOiBmYWxzZTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtoaXQsIGlzU3VuaywgZ2V0SW5mb30gICAgXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBtYWluR2FtZSBmcm9tIFwiLi9tYWluR2FtZVwiO1xyXG5cclxubWFpbkdhbWUuYXBwU3RhcnQoKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=