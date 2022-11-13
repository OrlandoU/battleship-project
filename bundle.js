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
                counterOnFound = _randomInt(2) + 2
            }
            if (counterOnGuess <= 1) {
                counterOnFound = _randomInt(2) + 2
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
    console.log(mostConcurrent)
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
    let dropSound = document.getElementById('dropSound')
    let pauseSound = document.getElementById('pauseSound')
    let clickSound = document.getElementById('clickSound')
    let hoverSound = document.getElementById('hoverSound')
    let transitionSound = document.getElementById('transitionSound')
    transitionSound.load()
    dropSound.load()
    clickSound.load()
    hoverSound.load()
    pauseSound.load()
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
        nextButton.addEventListener('click', ()=>clickSound.cloneNode().play())
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
            clickSound.cloneNode().play()
            timeInteractiveButton.animate(animationL, timing)
            currentTime--
            timeSelected.value = timesArray[currentTime]
        })
        rightArrow.addEventListener('click', () => {
            if (currentTime == 5) {
                return
            }
            clickSound.cloneNode().play()
            timeInteractiveButton.animate(animationR, timing)
            currentTime++
            timeSelected.value = timesArray[currentTime]
        })
        firstSlide.classList.add('show')


        //Event listener
        titleMenu.addEventListener('click', ()=>{
            transitionSound.cloneNode().play()
            displayMainMenu()
        })
        firstSlide.addEventListener('click', () => {
            clickSound.cloneNode().play()
            firstSlide.classList.remove('show')
            firstSlide.addEventListener('transitionend', () => {
                secondSlide.classList.add('show')
            })
        })
        modeLeftSide.addEventListener('mouseenter', () => {
            hoverSound.cloneNode().play()
            firstSlide.classList.add('mode-hovered')
            modeLeftSide.classList.add('side-hovered')
        })
        modeLeftSide.addEventListener('mouseleave', () => {
            firstSlide.classList.remove('mode-hovered')
            modeLeftSide.classList.remove('side-hovered')
        })
        modeRightSide.addEventListener('mouseenter', () => {
            hoverSound.cloneNode().play()
            firstSlide.classList.add('mode-hovered')
            modeRightSide.classList.add('side-hovered')
        })
        modeRightSide.addEventListener('mouseleave', () => {
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

        mainTitle.addEventListener('click', ()=>{
            transitionSound.cloneNode().play()
            displayMainMenu()
        })

        mainHeader.appendChild(mainTitle)
        
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
        let dropAnimation = [
            { transform: 'scale3d(1, 1, 1) translateZ(10px)' },
            { transform: 'scale3d(1.25, 0.75, 1) translateZ(10px)' },
            { transform: 'scale3d(0.75, 1.25, 1) translateZ(10px)' },
            { transform: 'scale3d(1.15, 0.85, 1) translateZ(10px)' },
            { transform: 'scale3d(0.95, 1.05, 1) translateZ(10px)' },
            { transform: 'scale3d(1.05, 0.95, 1) translateZ(10px)' },
            { transform: 'scale3d(1, 1, 1) translateZ(10px)' }
        ]
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
                    clickSound.cloneNode().play()
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
                clickSound.cloneNode().play()
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
                    dropSound.play()
                    let start = parseToYX(attemptCoords[0])
                    let end = parseToYX(attemptCoords[attemptCoords.length - 1])
                    newShipBlock.style.gridArea = `${start[0] + 1} / ${start[1] + 1} / ${end[0] + 2} / ${end[1] + 2}`
                    newShipBlock.addEventListener('click', (e) => {
                        let rotateAttempt = config.player1Board.rotateShip(start, end, +length)
                        if (Array.isArray(rotateAttempt)) {
                            console.log('rotated')
                            dropSound.cloneNode().play()
                            end = rotateAttempt
                            newShipBlock.style.gridArea = `${start[0] + 1} / ${start[1] + 1} / ${end[0] + 2} / ${end[1] + 2}`
                        }
                    })
                    overlay.appendChild(newShipBlock)
                    newShipBlock.animate(dropAnimation, { duration: 1000, iterations: 1 })
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
                    dropSound.play()
                    let start = parseToYX(attemptCoords[0])
                    let end = parseToYX(attemptCoords[attemptCoords.length - 1])
                    newShipBlock.style.gridArea = `${start[0] + 1} / ${start[1] + 1} / ${end[0] + 2} / ${end[1] + 2}`
                    newShipBlock.addEventListener('click', (e) => {
                        let rotateAttempt = config.player2Board.rotateShip(start, end, +length)
                        if (Array.isArray(rotateAttempt)) {
                            console.log('rotated')
                            dropSound.cloneNode().play()
                            end = rotateAttempt
                            newShipBlock.style.gridArea = `${start[0] + 1} / ${start[1] + 1} / ${end[0] + 2} / ${end[1] + 2}`
                        }
                    })
                    overlay.appendChild(newShipBlock)
                    newShipBlock.animate(dropAnimation, { duration: 1000, iterations: 1 })
                }
            })
        })
    }
    const displayMainGame = async (config) => {
        transitionSound.cloneNode().play()
        let oldContainer = document.querySelector('.boards-container-main')
        if (oldContainer) {
            await new Promise((resolve, reject) => {
                oldContainer.classList.add('blankOut')
                oldContainer.addEventListener('transitionend', () => {
                    resolve()
                })
            })
        }
        main.innerHTML = ''
        let mainHeader = document.createElement('header')
        mainHeader.classList.add('header-main')
        let mainTitle = document.createElement('div')
        mainTitle.textContent = 'BATTLESHIP'
        mainTitle.classList.add('title-main')
        mainTitle.addEventListener('click', ()=>{
            transitionSound.cloneNode().play()
            displayMainMenu()
        })
        let optionsButton = document.createElement('img')
        optionsButton.src = './images/settings.png'
        optionsButton.classList.add('options-button')
        optionsButton.addEventListener('click', () => {
            pauseSound.cloneNode().play()
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
        let backToGameContainer = document.createElement('div')
        backToGameContainer.textContent = 'Back to Game'
        let rematchContainer = document.createElement('div')
        rematchContainer.textContent = 'Rematch'
        rematchContainer.addEventListener('click', (event) => {
            clickSound.cloneNode().play()
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
        selectModeContainer.textContent = 'Mode selection'
        selectModeContainer.addEventListener('click', (event) => {
            clickSound.cloneNode().play()
            event.stopPropagation()
            _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].setup()
        })
        let mainMenu = document.createElement('div')
        mainMenu.textContent = 'Return to Main Menu'
        mainMenu.addEventListener('click', (event) => {
            clickSound.cloneNode().play()
            event.stopPropagation()
            _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].appStart()
        })
        modal.addEventListener('click', () => {
            pauseSound.cloneNode().play()
            modal.classList.remove('showMenu')
            config.isPaused = false
            console.log('Bubbling')
        })
        backToGameContainer.addEventListener('click', () => {
            modal.classList.remove('showMenu')
            config.isPaused = false
            console.log('Bubbling')
        })
        backToGameContainer.addEventListener('mouseenter', ()=>hoverSound.cloneNode().play())
        rematchContainer.addEventListener('mouseenter', ()=>hoverSound.cloneNode().play())
        selectModeContainer.addEventListener('mouseenter', ()=>hoverSound.cloneNode().play())
        mainMenu.addEventListener('mouseenter', ()=>hoverSound.cloneNode().play())

        optionsContainer.appendChild(backToGameContainer)
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
                    if (config.player1Records && config.player1Records[i][j]) {
                        leftTile.classList.add(config.player1Records[i][j], 'flip')
                    }

                    let rightTile = document.createElement('div')
                    rightTile.dataset.x = i
                    rightTile.dataset.y = j
                    rightTile.dataset.side = 'right'
                    rightTile.addEventListener('click', _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].saveValidAttempt)
                    rightTile.classList.add('right-tile', 'tile-appear')
                    rightPlayerBoard.appendChild(rightTile)
                    if (config.player2Records && config.player2Records[i][j]) {
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
        optionContainer.classList.add('main-menu-options')

        let continueOption = document.createElement('div')
        continueOption.textContent = 'Resume Match'
        continueOption.addEventListener('click', _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].continueMainGame)

        let newGameOption = document.createElement('div')
        newGameOption.textContent = 'New Game'
        newGameOption.addEventListener('click', _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].setup)

        if (localStorage.getItem('config')) {
            optionContainer.appendChild(continueOption)
            continueOption.classList.add('button-17')
        }
        optionContainer.appendChild(newGameOption)
        newGameOption.classList.add('button-17')

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

    let renderWinner = (winner, looser,config, isDraw = false) => {
        config.isPaused = true
        let modal = document.createElement('div')
        modal.classList.add('modal-container')

        let header = document.createElement('div')
        header.classList.add('modal-header')
        header.textContent = isDraw ? "It's a Tie" : `${winner}'s Victory!`
        let infoContainer = document.createElement('div')
        infoContainer.classList.add('modal-info-container')
        infoContainer.textContent = isDraw ? 'Both players\' have been sunk' : `All of ${looser}'s ships have been sunk, Its ${winner}'s Victory`;
        let optionsContainer = document.createElement('div')
        optionsContainer.classList.add('modal-options-container')

        let rematchContainer = document.createElement('div')
        rematchContainer.textContent = 'Rematch'
        rematchContainer.addEventListener('click', (event) => {
            clickSound.cloneNode().play()
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
            clickSound.cloneNode().play()
            event.stopPropagation()
            _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].setup()
        })
        let mainMenu = document.createElement('div')
        mainMenu.textContent = 'Return to Main Menu'
        mainMenu.addEventListener('click', (event) => {
            clickSound.cloneNode().play()
            event.stopPropagation()
            _mainGame__WEBPACK_IMPORTED_MODULE_1__["default"].appStart()
        })
        rematchContainer.addEventListener('mouseenter', ()=>hoverSound.cloneNode().play())
        selectModeContainer.addEventListener('mouseenter', ()=>hoverSound.cloneNode().play())
        mainMenu.addEventListener('mouseenter', ()=>hoverSound.cloneNode().play())


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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
    let tileSound = document.getElementById('tileSound')
    let transitionSound = document.getElementById('transitionSound')
    transitionSound.load()
    tileSound.load()
    let counter
    let config = {}
    config.isPaused = false
    let timer
    let crrMoves = []
    window.addEventListener('keydown', e=>{
        let modal = document.querySelector('.options-container')
        
        if(e.key == 'Escape'){
            if(modal.classList.contains('showMenu')){
                modal.click()
            }
            else{
                document.querySelector('.options-button').click()
            }
        }
    })
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
        tileSound.cloneNode().play()
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
            if(config.player2Board.allShipsSunk() && config.player1Board.allShipsSunk()){
                _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderWinner(config.player1Obj.getPlayerTag(),config.player2Obj.getPlayerTag(), config, true )
            }else{
                _displayController__WEBPACK_IMPORTED_MODULE_0__["default"].renderWinner(config.player1Obj.getPlayerTag(),config.player2Obj.getPlayerTag(), config)
            }
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
        transitionSound.cloneNode().play()
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
                    tileSound.cloneNode().play()
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
                let timer = document.querySelector('.time-container-main')
                timer.textContent = `${counter}s`
                const timerPulse = [
                    { boxShadow: '0px 0px 5px orangered', fontSize: '1.4rem' },
                    { boxShadow: '0px 0px 10px 1px orangered', fontSize: '1.45rem' },
                    { boxShadow: '0px 0px 5px orangered', fontSize: '1.4rem' },
                  ];

                const timePerInteration = {
                    duration: 500,
                    iterations: 1,
                }
                counter--
                timer.animate(timerPulse, timePerInteration)
            }
        }, 1000)
        saveData()
    }
    const continueMainGame = () => {
        transitionSound.cloneNode().play()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0M7QUFDbEM7QUFDQSwwREFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvYWlQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL21haW5HYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGxldCBwbGF5ZXJUYWcgPSAnUEMnXHJcbiAgICBcclxuXHJcbiAgICBsZXQgZ2V0UGxheWVyVGFnID0gKCkgPT4gcGxheWVyVGFnO1xyXG5cclxuXHJcbiAgICAvL0FJIExPR0lDXHJcbiAgICBsZXQgY3JyU2VjdWVuY2U7XHJcbiAgICBsZXQgY291bnRlck9uRm91bmQ7XHJcbiAgICBsZXQgY291bnRlck9uR3Vlc3MgPSAwO1xyXG4gICAgbGV0IGlzR3Vlc3NpbmcgPSB0cnVlO1xyXG4gICAgbGV0IHJldHJpZXZlRGF0YSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gWyBnZXRQbGF5ZXJUYWcoKSwgdHJ1ZSBdXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNlbmRBdHRhY2sgPSAoZ2FtZWJvYXJkKSA9PiB7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IFswLCAxXVxyXG4gICAgICAgIGxldCBvZmZzZXRSYW5kb21pemVyO1xyXG4gICAgICAgIGxldCBhdHRlbXB0XHJcbiAgICAgICAgaWYgKGlzR3Vlc3NpbmcgfHwgY291bnRlck9uR3Vlc3MgPiAwKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW19yYW5kb21JbnQoMTApLCBfcmFuZG9tSW50KDEwKV0pXHJcbiAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdFswXSA9PSAnaGl0JyB8fCBhdHRlbXB0WzBdID09ICdtaXNzZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXR0ZW1wdFswXSA9PSAnaGl0Jykge1xyXG4gICAgICAgICAgICAgICAgaXNHdWVzc2luZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBjb3VudGVyT25HdWVzcyA9IDA7XHJcbiAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgY291bnRlck9uRm91bmQgPSBfcmFuZG9tSW50KDIpICsgMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyT25HdWVzcyA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyT25Gb3VuZCA9IF9yYW5kb21JbnQoMikgKyAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY291bnRlck9uR3Vlc3MtLVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ3Vlc3NpbmcnKVxyXG4gICAgICAgICAgICByZXR1cm4gYXR0ZW1wdFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGaW5kaW5nIGNvbmN1cnJlbnQgc2VjdWVuY2UnKVxyXG4gICAgICAgICAgICBpZiAoY291bnRlck9uRm91bmQgPD0gMCB8fCBjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudExlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyT25HdWVzcyA9IF9yYW5kb21JbnQoMikgKyAyXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbX3JhbmRvbUludCgxMCksIF9yYW5kb21JbnQoMTApXSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdFswXSA9PSAnaGl0JyB8fCBhdHRlbXB0WzBdID09ICdtaXNzZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGdWNrJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzBdID09IGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzFdWzBdICYmIGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzFdID09IGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzFdWzFdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gWy0xLCAxXVxyXG4gICAgICAgICAgICAgICAgYXR0ZW1wdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFswXVswXSwgY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMV0gKyBvZmZzZXRbX3JhbmRvbUludCgyKV1dKVxyXG4gICAgICAgICAgICAgICAgaWYgKGF0dGVtcHQgPT0gXCJJbnZhbGlkIGNvb3JkaW5hdGVzXCIgfHwgYXR0ZW1wdCA9PSBcImF0dGFja2VkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2NyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzBdICsgb2Zmc2V0W19yYW5kb21JbnQoMildLCBjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFswXVsxXV0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGVtcHQgPT0gXCJJbnZhbGlkIGNvb3JkaW5hdGVzXCIgfHwgYXR0ZW1wdCA9PSBcImF0dGFja2VkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbX3JhbmRvbUludCgxMCksIF9yYW5kb21JbnQoMTApXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0WzBdID09ICdoaXQnIHx8IGF0dGVtcHRbMF0gPT0gJ21pc3NlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWFjaGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlck9uRm91bmQtLVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgY291bnRlck9uRm91bmQtLVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFswXVswXSA9PSBjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFsxXVswXSkge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0UmFuZG9taXplciA9IG9mZnNldFtfcmFuZG9tSW50KDIpXVxyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldFJhbmRvbWl6ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2NyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzBdLCBjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFswXVsxXSAtIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ID09IFwiSW52YWxpZCBjb29yZGluYXRlc1wiIHx8IGF0dGVtcHQgPT0gXCJhdHRhY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMF0sIGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzFdWzFdICsgMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ID09IFwiSW52YWxpZCBjb29yZGluYXRlc1wiIHx8IGF0dGVtcHQgPT0gXCJhdHRhY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbX3JhbmRvbUludCgxMCksIF9yYW5kb21JbnQoMTApXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdFswXSA9PSAnaGl0JyB8fCBhdHRlbXB0WzBdID09ICdtaXNzZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJPbkZvdW5kLS1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JyU2VjdWVuY2UgPSBfYWlGaW5kQ29uY3VycmVuY2UoZ2FtZWJvYXJkLmdldFJlY29yZHMoKSlcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyT25Gb3VuZC0tXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMF0sIGNyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzFdWzFdICsgMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGVtcHQgPT0gXCJJbnZhbGlkIGNvb3JkaW5hdGVzXCIgfHwgYXR0ZW1wdCA9PSBcImF0dGFja2VkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFswXVswXSwgY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMV0gLSAxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGVtcHQgPT0gXCJJbnZhbGlkIGNvb3JkaW5hdGVzXCIgfHwgYXR0ZW1wdCA9PSBcImF0dGFja2VkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtfcmFuZG9tSW50KDEwKSwgX3JhbmRvbUludCgxMCldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0WzBdID09ICdoaXQnIHx8IGF0dGVtcHRbMF0gPT0gJ21pc3NlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JyU2VjdWVuY2UgPSBfYWlGaW5kQ29uY3VycmVuY2UoZ2FtZWJvYXJkLmdldFJlY29yZHMoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JyU2VjdWVuY2UgPSBfYWlGaW5kQ29uY3VycmVuY2UoZ2FtZWJvYXJkLmdldFJlY29yZHMoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlck9uRm91bmQtLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjcnJTZWN1ZW5jZSA9IF9haUZpbmRDb25jdXJyZW5jZShnYW1lYm9hcmQuZ2V0UmVjb3JkcygpKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJPbkZvdW5kLS1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0UmFuZG9taXplciA9IG9mZnNldFtfcmFuZG9tSW50KDIpXVxyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldFJhbmRvbWl6ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2NyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzBdWzBdIC0gMSwgY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ID09IFwiSW52YWxpZCBjb29yZGluYXRlc1wiIHx8IGF0dGVtcHQgPT0gXCJhdHRhY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMV1bMF0gKyAxLCBjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFswXVsxXV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ID09IFwiSW52YWxpZCBjb29yZGluYXRlc1wiIHx8IGF0dGVtcHQgPT0gXCJhdHRhY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbX3JhbmRvbUludCgxMCksIF9yYW5kb21JbnQoMTApXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdFswXSA9PSAnaGl0JyB8fCBhdHRlbXB0WzBdID09ICdtaXNzZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJPbkZvdW5kLS1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JyU2VjdWVuY2UgPSBfYWlGaW5kQ29uY3VycmVuY2UoZ2FtZWJvYXJkLmdldFJlY29yZHMoKSlcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyT25Gb3VuZC0tXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2NyclNlY3VlbmNlLm1vc3RDb25jdXJyZW50WzFdWzBdICsgMSwgY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ID09IFwiSW52YWxpZCBjb29yZGluYXRlc1wiIHx8IGF0dGVtcHQgPT0gXCJhdHRhY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbY3JyU2VjdWVuY2UubW9zdENvbmN1cnJlbnRbMF1bMF0gLSAxLCBjcnJTZWN1ZW5jZS5tb3N0Q29uY3VycmVudFswXVsxXV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ID09IFwiSW52YWxpZCBjb29yZGluYXRlc1wiIHx8IGF0dGVtcHQgPT0gXCJhdHRhY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbX3JhbmRvbUludCgxMCksIF9yYW5kb21JbnQoMTApXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdFswXSA9PSAnaGl0JyB8fCBhdHRlbXB0WzBdID09ICdtaXNzZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRlbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJPbkZvdW5kLS1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNyclNlY3VlbmNlID0gX2FpRmluZENvbmN1cnJlbmNlKGdhbWVib2FyZC5nZXRSZWNvcmRzKCkpXHJcbiAgICAgICAgICAgIGNvdW50ZXJPbkZvdW5kLS1cclxuICAgICAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBfcmFuZG9tSW50ID0gKG51bSkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtKTtcclxuXHJcbiAgICBsZXQgX2FpRmluZENvbmN1cnJlbmNlID0gKHJlY29yZHMpID0+IHtcclxuICAgICAgICBsZXQgbW9zdENvbmN1cnJlbnQgPSBbXVxyXG4gICAgICAgIGxldCBtb3N0Q29uY3VycmVudExlbmd0aCA9IDBcclxuICAgICAgICAvL0hvcml6b250YWxcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNyckNvbmN1cnJlbnQgPSBbXVxyXG4gICAgICAgICAgICBsZXQgY3JyTGVuZ3RoID0gMFxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZWNvcmRzW2ldW2pdID09IFwiaGl0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNyckNvbmN1cnJlbnRbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JyQ29uY3VycmVudFswXSA9IFtpLCBqXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnJDb25jdXJyZW50WzFdID0gW2ksIGpdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyckxlbmd0aCsrXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JyQ29uY3VycmVudFsxXSA9IFtpLCBqXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnJMZW5ndGgrK1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNyckxlbmd0aCA+PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyckNvbmN1cnJlbnQgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnJMZW5ndGggPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoY3JyTGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGNyckNvbmN1cnJlbnRbMF1bMF0gPT0gMCkgfHwgKHJlY29yZHNbY3JyQ29uY3VycmVudFswXVswXV1bY3JyQ29uY3VycmVudFswXVsxXSAtIDFdID09ICdtaXNzZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChjcnJDb25jdXJyZW50WzFdWzBdID09IDkpIHx8IChyZWNvcmRzW2NyckNvbmN1cnJlbnRbMV1bMF1dW2NyckNvbmN1cnJlbnRbMV1bMV0gKyAxXSA9PSAnbWlzc2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcnJDb25jdXJyZW50ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcnJMZW5ndGggPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3JyTGVuZ3RoID4gbW9zdENvbmN1cnJlbnRMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9zdENvbmN1cnJlbnQgPSBbLi4uY3JyQ29uY3VycmVudF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9zdENvbmN1cnJlbnRMZW5ndGggPSBjcnJMZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JyQ29uY3VycmVudCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgY3JyTGVuZ3RoID0gMCAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAvL1ZlcnRpY2FsXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICBsZXQgY3JyQ29uY3VycmVudCA9IFtdXHJcbiAgICAgICAgbGV0IGNyckxlbmd0aCA9IDBcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKHJlY29yZHNbal1baV0gPT0gXCJoaXRcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjcnJDb25jdXJyZW50WzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JyQ29uY3VycmVudFswXSA9IFtqLCBpXVxyXG4gICAgICAgICAgICAgICAgICAgIGNyckNvbmN1cnJlbnRbMV0gPSBbaiwgaV1cclxuICAgICAgICAgICAgICAgICAgICBjcnJMZW5ndGgrK1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjcnJDb25jdXJyZW50WzFdID0gW2osIGldXHJcbiAgICAgICAgICAgICAgICAgICAgY3JyTGVuZ3RoKytcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3JyTGVuZ3RoID49IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcnJDb25jdXJyZW50ID0gW11cclxuICAgICAgICAgICAgICAgICAgICBjcnJMZW5ndGggPSAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNyckxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGNyckNvbmN1cnJlbnRbMF1bMF0gPT0gMCkgfHwgKHJlY29yZHNbY3JyQ29uY3VycmVudFswXVswXSAtIDFdW2NyckNvbmN1cnJlbnRbMF1bMV1dID09ICdtaXNzZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGNyckNvbmN1cnJlbnRbMV1bMF0gPT0gOSkgfHwgKHJlY29yZHNbY3JyQ29uY3VycmVudFsxXVswXSArIDFdW2NyckNvbmN1cnJlbnRbMV1bMV1dID09ICdtaXNzZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JyQ29uY3VycmVudCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcnJMZW5ndGggPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3JyTGVuZ3RoID4gbW9zdENvbmN1cnJlbnRMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3N0Q29uY3VycmVudCA9IFsuLi5jcnJDb25jdXJyZW50XVxyXG4gICAgICAgICAgICAgICAgICAgIG1vc3RDb25jdXJyZW50TGVuZ3RoID0gY3JyTGVuZ3RoXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjcnJDb25jdXJyZW50ID0gW11cclxuICAgICAgICAgICAgICAgIGNyckxlbmd0aCA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKG1vc3RDb25jdXJyZW50KVxyXG4gICAgcmV0dXJuIHsgbW9zdENvbmN1cnJlbnQsIG1vc3RDb25jdXJyZW50TGVuZ3RoIH1cclxufVxyXG5yZXR1cm4geyBnZXRQbGF5ZXJUYWcsIHNlbmRBdHRhY2ssIHJldHJpZXZlRGF0YSB9XHJcbn0iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCJcclxuaW1wb3J0IG1haW5HYW1lIGZyb20gXCIuL21haW5HYW1lXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XHJcbiAgICBsZXQgZHJvcFNvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3BTb3VuZCcpXHJcbiAgICBsZXQgcGF1c2VTb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZVNvdW5kJylcclxuICAgIGxldCBjbGlja1NvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWNrU291bmQnKVxyXG4gICAgbGV0IGhvdmVyU291bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG92ZXJTb3VuZCcpXHJcbiAgICBsZXQgdHJhbnNpdGlvblNvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zaXRpb25Tb3VuZCcpXHJcbiAgICB0cmFuc2l0aW9uU291bmQubG9hZCgpXHJcbiAgICBkcm9wU291bmQubG9hZCgpXHJcbiAgICBjbGlja1NvdW5kLmxvYWQoKVxyXG4gICAgaG92ZXJTb3VuZC5sb2FkKClcclxuICAgIHBhdXNlU291bmQubG9hZCgpXHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxyXG5cclxuICAgIGxldCBwYXJzZVRvWVggPSAoc3RyKSA9PiB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3RyKSAmJiBzdHIubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgaWYgKChzdHJbMF0gPj0gMCAmJiBzdHJbMF0gPD0gOSkgJiYgKHN0clsxXSA+PSAwICYmIHN0clsxXSA8PSA5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoICE9IDIgfHwgdHlwZW9mIHN0ciAhPSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IFtwb3NpdGlvblksIHBvc2l0aW9uWF0gPSBzdHIuc3BsaXQoXCJcIilcclxuICAgICAgICBwb3NpdGlvblggPSArcG9zaXRpb25YXHJcbiAgICAgICAgcG9zaXRpb25ZID0gcG9zaXRpb25ZLmNoYXJDb2RlQXQoMClcclxuXHJcbiAgICAgICAgaWYgKChOdW1iZXIuaXNOYU4ocG9zaXRpb25YKSkgfHwgKHBvc2l0aW9uWSA8IDY1IHx8IHBvc2l0aW9uWSA+IDc0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbcG9zaXRpb25ZIC0gNjUsIHBvc2l0aW9uWF1cclxuICAgIH1cclxuICAgIGNvbnN0IGRpc3BsYXlNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gJydcclxuXHJcbiAgICAgICAgbGV0IHRpdGxlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGl0bGVNZW51LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLW1lbnUnKVxyXG4gICAgICAgIHRpdGxlTWVudS50ZXh0Q29udGVudCA9IFwiQkFUVExFU0hJUFwiXHJcblxyXG4gICAgICAgIC8vQ29udGFpbmVyIGZvciBhbGwgb2YgdGhlIHNsaWRlcyBmb3IgdGhlIGdhbWUgc2V0cmlnaHRcclxuICAgICAgICBsZXQgZHluYW1pY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgZHluYW1pY0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkeW5hbWljLWNvbnRhaW5lcicpXHJcblxyXG4gICAgICAgIC8vRmlyc3QgU2xpZGUgc2hvd24gYWZ0ZXIgc3RhcnQgYnV0dG9uIGlzIHByZXNzZWRcclxuICAgICAgICBsZXQgZmlyc3RTbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgZmlyc3RTbGlkZS5jbGFzc0xpc3QuYWRkKCdmaXJzdC1zbGlkZS1tZW51JylcclxuXHJcbiAgICAgICAgLy9GaXJzdCBzbGlkZSBtb2RlIGxlZnQgc2lkZVxyXG4gICAgICAgIGxldCBtb2RlTGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG1vZGVMZWZ0U2lkZS5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNpZGUtbW9kZScpXHJcbiAgICAgICAgbW9kZUxlZnRTaWRlLnRleHRDb250ZW50ID0gJ1BsYXllciBWcyBQbGF5ZXInXHJcbiAgICAgICAgbGV0IG1vZGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgbW9kZUltYWdlLnNyYyA9ICcuL2ltYWdlcy9tb2RlLnBuZydcclxuICAgICAgICAvL0ZpcnN0IHNsaWRlIG1vZGUgcmlnaHQgc2lkZVxyXG4gICAgICAgIGxldCBtb2RlUmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBtb2RlUmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXNpZGUtbW9kZScpXHJcbiAgICAgICAgbW9kZVJpZ2h0U2lkZS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgVnMgQ29tcHV0ZXInXHJcbiAgICAgICAgbGV0IG1vZGVJbWFnZUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIG1vZGVJbWFnZUwuc3JjID0gJy4vaW1hZ2VzL21vZGUucG5nJ1xyXG4gICAgICAgIC8vU2Vjb25kIFNsaWRlIHNob3duXHJcbiAgICAgICAgbGV0IHNlY29uZFNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICAgICAgc2Vjb25kU2xpZGUuY2xhc3NMaXN0LmFkZCgnc2Vjb25kLXNsaWRlLW1lbnUnKVxyXG4gICAgICAgIGxldCBwbGF5ZXIxQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwbGF5ZXIxQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpXHJcbiAgICAgICAgbGV0IGxhYmVsUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgICAgICBsYWJlbFBsYXllcjEuc2V0QXR0cmlidXRlKCdmb3InLCAncGxheWVyMS1uYW1lLWlucHV0JylcclxuICAgICAgICBsYWJlbFBsYXllcjEudGV4dENvbnRlbnQgPSAnUGxheWVyIDEgTmFtZSdcclxuICAgICAgICBsZXQgcGxheWVyMU5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICBwbGF5ZXIxTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyMS1uYW1lLWlucHV0JylcclxuICAgICAgICBwbGF5ZXIxTmFtZUlucHV0Lm5hbWUgPSAncGxheWVyMU5hbWUnXHJcbiAgICAgICAgbGV0IHBsYXllcjJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHBsYXllcjJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJylcclxuICAgICAgICBsZXQgbGFiZWxQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgICAgIGxhYmVsUGxheWVyMi5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwbGF5ZXIyLW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIGxhYmVsUGxheWVyMi50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMiBOYW1lJ1xyXG4gICAgICAgIGxldCBwbGF5ZXIyTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIHBsYXllcjJOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXIyLW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIHBsYXllcjJOYW1lSW5wdXQubmFtZSA9ICdwbGF5ZXIyTmFtZSdcclxuXHJcbiAgICAgICAgbGV0IHRpbWVJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGltZUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RpbWUtY29udGFpbmVyJylcclxuICAgICAgICBsZXQgdGltZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgICAgICB0aW1lVGV4dC50ZXh0Q29udGVudCA9ICdUaW1lIHBlciB0dXJuJ1xyXG5cclxuICAgICAgICBsZXQgdGltZUludGVyYWN0aXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aW1lSW50ZXJhY3RpdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdGltZS1tYWluJylcclxuICAgICAgICBsZXQgdGltZVNlbGVjdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIHRpbWVTZWxlY3RlZC52YWx1ZSA9ICcxNSdcclxuICAgICAgICB0aW1lU2VsZWN0ZWQubmFtZSA9ICd0aW1lU2VsZWN0ZWQnXHJcbiAgICAgICAgdGltZVNlbGVjdGVkLnJlYWRPbmx5ID0gdHJ1ZVxyXG4gICAgICAgIGxldCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGxlZnRBcnJvdy5zcmMgPSAnLi9pbWFnZXMvYXJyb3cucG5nJ1xyXG4gICAgICAgIGxldCByaWdodEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICByaWdodEFycm93LnNyYyA9ICcuL2ltYWdlcy9hcnJvdy5wbmcnXHJcbiAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gMlxyXG4gICAgICAgIGxldCB0aW1lc0FycmF5ID0gWzUsIDEwLCAxNSwgMjAsIDI1LCAzMF1cclxuXHJcbiAgICAgICAgbGV0IG5leHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIG5leHRCdXR0b24udHlwZSA9ICdzdWJtaXQnXHJcbiAgICAgICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT5jbGlja1NvdW5kLmNsb25lTm9kZSgpLnBsYXkoKSlcclxuICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25leHQtYnV0dG9uLW1lbnUnKVxyXG4gICAgICAgIG5leHRCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGludWUnXHJcbiAgICAgICAgbGV0IGJ1dHRvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuXHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uTCA9IFtcclxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCknIH0sXHJcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMjBweCknIH0sXHJcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpJyB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25SID0gW1xyXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KScgfSxcclxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDIwcHgpJyB9LFxyXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KScgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnN0IHRpbWluZyA9IHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDUwLFxyXG4gICAgICAgICAgICBpdGVyYXRpb25zOiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZWZ0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGlja1NvdW5kLmNsb25lTm9kZSgpLnBsYXkoKVxyXG4gICAgICAgICAgICB0aW1lSW50ZXJhY3RpdmVCdXR0b24uYW5pbWF0ZShhbmltYXRpb25MLCB0aW1pbmcpXHJcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lLS1cclxuICAgICAgICAgICAgdGltZVNlbGVjdGVkLnZhbHVlID0gdGltZXNBcnJheVtjdXJyZW50VGltZV1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGlja1NvdW5kLmNsb25lTm9kZSgpLnBsYXkoKVxyXG4gICAgICAgICAgICB0aW1lSW50ZXJhY3RpdmVCdXR0b24uYW5pbWF0ZShhbmltYXRpb25SLCB0aW1pbmcpXHJcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lKytcclxuICAgICAgICAgICAgdGltZVNlbGVjdGVkLnZhbHVlID0gdGltZXNBcnJheVtjdXJyZW50VGltZV1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGZpcnN0U2xpZGUuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcblxyXG5cclxuICAgICAgICAvL0V2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgdGl0bGVNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgdHJhbnNpdGlvblNvdW5kLmNsb25lTm9kZSgpLnBsYXkoKVxyXG4gICAgICAgICAgICBkaXNwbGF5TWFpbk1lbnUoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZmlyc3RTbGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY2xpY2tTb3VuZC5jbG9uZU5vZGUoKS5wbGF5KClcclxuICAgICAgICAgICAgZmlyc3RTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgICAgICAgICAgZmlyc3RTbGlkZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kU2xpZGUuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBtb2RlTGVmdFNpZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICAgICAgaG92ZXJTb3VuZC5jbG9uZU5vZGUoKS5wbGF5KClcclxuICAgICAgICAgICAgZmlyc3RTbGlkZS5jbGFzc0xpc3QuYWRkKCdtb2RlLWhvdmVyZWQnKVxyXG4gICAgICAgICAgICBtb2RlTGVmdFNpZGUuY2xhc3NMaXN0LmFkZCgnc2lkZS1ob3ZlcmVkJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1vZGVMZWZ0U2lkZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGUtaG92ZXJlZCcpXHJcbiAgICAgICAgICAgIG1vZGVMZWZ0U2lkZS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlLWhvdmVyZWQnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbW9kZVJpZ2h0U2lkZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBob3ZlclNvdW5kLmNsb25lTm9kZSgpLnBsYXkoKVxyXG4gICAgICAgICAgICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5hZGQoJ21vZGUtaG92ZXJlZCcpXHJcbiAgICAgICAgICAgIG1vZGVSaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgnc2lkZS1ob3ZlcmVkJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1vZGVSaWdodFNpZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgZmlyc3RTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RlLWhvdmVyZWQnKVxyXG4gICAgICAgICAgICBtb2RlUmlnaHRTaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGUtaG92ZXJlZCcpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBtb2RlUmlnaHRTaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwbGF5ZXIyTmFtZUlucHV0LnJlYWRPbmx5ID0gdHJ1ZVxyXG4gICAgICAgICAgICBwbGF5ZXIyTmFtZUlucHV0LnZhbHVlID0gJ1BDJ1xyXG4gICAgICAgICAgICBwbGF5ZXIxTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ1BsYXllciAxIHRhZydcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1vZGVMZWZ0U2lkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcGxheWVyMU5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdQbGF5ZXIgMSB0YWcnXHJcbiAgICAgICAgICAgIHBsYXllcjJOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnUGxheWVyIDIgdGFnJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9BcHBlbmRpbmcgdG8gRE9NXHJcbiAgICAgICAgbW9kZUxlZnRTaWRlLmFwcGVuZENoaWxkKG1vZGVJbWFnZUwpXHJcbiAgICAgICAgbW9kZVJpZ2h0U2lkZS5hcHBlbmRDaGlsZChtb2RlSW1hZ2UpXHJcblxyXG4gICAgICAgIHBsYXllcjFDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxQbGF5ZXIxKVxyXG4gICAgICAgIHBsYXllcjFDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyMU5hbWVJbnB1dClcclxuICAgICAgICBwbGF5ZXIyQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsUGxheWVyMilcclxuICAgICAgICBwbGF5ZXIyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllcjJOYW1lSW5wdXQpXHJcbiAgICAgICAgdGltZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVUZXh0KVxyXG4gICAgICAgIHRpbWVJbnRlcmFjdGl2ZUJ1dHRvbi5hcHBlbmRDaGlsZChsZWZ0QXJyb3cpXHJcbiAgICAgICAgdGltZUludGVyYWN0aXZlQnV0dG9uLmFwcGVuZENoaWxkKHRpbWVTZWxlY3RlZClcclxuICAgICAgICB0aW1lSW50ZXJhY3RpdmVCdXR0b24uYXBwZW5kQ2hpbGQocmlnaHRBcnJvdylcclxuICAgICAgICB0aW1lSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUludGVyYWN0aXZlQnV0dG9uKVxyXG4gICAgICAgIG5leHRCdXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uU3BhbilcclxuXHJcbiAgICAgICAgZmlyc3RTbGlkZS5hcHBlbmRDaGlsZChtb2RlTGVmdFNpZGUpXHJcbiAgICAgICAgZmlyc3RTbGlkZS5hcHBlbmRDaGlsZChtb2RlUmlnaHRTaWRlKVxyXG5cclxuICAgICAgICBzZWNvbmRTbGlkZS5hcHBlbmRDaGlsZChwbGF5ZXIxQ29udGFpbmVyKVxyXG4gICAgICAgIHNlY29uZFNsaWRlLmFwcGVuZENoaWxkKHBsYXllcjJDb250YWluZXIpXHJcbiAgICAgICAgc2Vjb25kU2xpZGUuYXBwZW5kQ2hpbGQodGltZUlucHV0Q29udGFpbmVyKVxyXG4gICAgICAgIHNlY29uZFNsaWRlLmFwcGVuZENoaWxkKG5leHRCdXR0b24pXHJcblxyXG4gICAgICAgIGR5bmFtaWNDb250YWluZXIuYXBwZW5kKHNlY29uZFNsaWRlKVxyXG4gICAgICAgIGR5bmFtaWNDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3RTbGlkZSlcclxuXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZU1lbnUpXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkeW5hbWljQ29udGFpbmVyKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzcGxheVNoaXBzU2V0dXAgPSAoaXNWc0FpID0gZmFsc2UsIGNvbmZpZykgPT4ge1xyXG4gICAgICAgIG1haW5HYW1lLnJlc2V0UGxheWVyc0JvYXJkcygpXHJcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIGxldCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcclxuICAgICAgICBtYWluSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1tYWluJylcclxuICAgICAgICBsZXQgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCdcclxuICAgICAgICBtYWluVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtbWFpbicpXHJcblxyXG4gICAgICAgIGxldCB0b3BCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdG9wQm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9wLWJvYXJkLWNvbnRhaW5lci1tYWluJylcclxuICAgICAgICBsZXQgcGxheWVyMU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHBsYXllcjFOYW1lLmNsYXNzTGlzdC5hZGQoJ3BsYXllcjEtbmFtZS1tYWluJylcclxuICAgICAgICBwbGF5ZXIxTmFtZS50ZXh0Q29udGVudCA9IGNvbmZpZy5wbGF5ZXIxT2JqLmdldFBsYXllclRhZygpXHJcbiAgICAgICAgbGV0IHRpbWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aW1lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aW1lLWNvbnRhaW5lci1tYWluJylcclxuICAgICAgICB0aW1lckNvbnRhaW5lci50ZXh0Q29udGVudCA9ICctJ1xyXG4gICAgICAgIGxldCBwbGF5ZXIyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcGxheWVyMk5hbWUuY2xhc3NMaXN0LmFkZCgncGxheWVyMi1uYW1lLW1haW4nKVxyXG4gICAgICAgIHBsYXllcjJOYW1lLnRleHRDb250ZW50ID0gY29uZmlnLnBsYXllcjJPYmouZ2V0UGxheWVyVGFnKClcclxuXHJcbiAgICAgICAgbGV0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgYm9hcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkcy1jb250YWluZXItbWFpbicpXHJcbiAgICAgICAgLy9MZWZ0IHNpZGUgR2FtZWJvYXJkXHJcbiAgICAgICAgbGV0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBsZWZ0U2lkZS5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNpZGUtY29udGFpbmVyLW1haW4nKVxyXG4gICAgICAgIGxldCBsZWZ0U2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGxlZnRTaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNoaXBzLWNvbnRhaW5lci1tYWluJylcclxuICAgICAgICBsZXQgbGVuZ3RocyA9IFs1LCA0LCAzLCAzLCAyXVxyXG4gICAgICAgIGxlbmd0aHMuZm9yRWFjaCgobGVuZ3RoLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHNoaXAuZGF0YXNldC5sZW5ndGggPSBsZW5ndGhcclxuICAgICAgICAgICAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlXHJcbiAgICAgICAgICAgIHNoaXAuaWQgPSBpbmRleCArICctbGVmdCdcclxuICAgICAgICAgICAgc2hpcC5zdHlsZS5ncmlkUm93U3RhcnQgPSBgc3BhbiAke2xlbmd0aH1gXHJcbiAgICAgICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgbGVuZ3RoICsgJyBsZWZ0JyArIGAgJHtzaGlwLmlkfWApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxlZnRTaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGxlZnRQbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbGVmdFBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2xlZnQtcGxheWVyLWJvYXJkLW1haW4nKVxyXG4gICAgICAgIGxldCBib2FyZHNPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBib2FyZHNPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2JvYXJkLW92ZXJsYXktbGVmdCcpXHJcbiAgICAgICAgbGVmdFBsYXllckJvYXJkLmFwcGVuZENoaWxkKGJvYXJkc092ZXJsYXkpXHJcbiAgICAgICAgLy9SaWdodCBzaWRlIEdhbWVib2FyZFxyXG4gICAgICAgIGxldCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCdyaWdodC1zaWRlLWNvbnRhaW5lci1tYWluJylcclxuICAgICAgICBsZXQgcmlnaHRTaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcmlnaHRTaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyaWdodC1zaGlwcy1jb250YWluZXItbWFpbicpXHJcbiAgICAgICAgaWYgKCFpc1ZzQWkpIHtcclxuICAgICAgICAgICAgbGVuZ3Rocy5mb3JFYWNoKChsZW5ndGgsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgICAgICBzaGlwLmRhdGFzZXQubGVuZ3RoID0gbGVuZ3RoXHJcbiAgICAgICAgICAgICAgICBzaGlwLmRyYWdnYWJsZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHNoaXAuaWQgPSBpbmRleCArICctcmlnaHQnXHJcbiAgICAgICAgICAgICAgICBzaGlwLnN0eWxlLmdyaWRSb3dTdGFydCA9IGBzcGFuICR7bGVuZ3RofWBcclxuICAgICAgICAgICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsIGxlbmd0aCArICcgcmlnaHQnICsgYCAke3NoaXAuaWR9YClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByaWdodFNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoJ2hpZGVQQycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByaWdodFBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICByaWdodFBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXBsYXllci1ib2FyZC1tYWluJylcclxuICAgICAgICBib2FyZHNPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBib2FyZHNPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2JvYXJkLW92ZXJsYXktcmlnaHQnKVxyXG4gICAgICAgIHJpZ2h0UGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRzT3ZlcmxheSlcclxuICAgICAgICAvL1BvcHVsYXRpbmcgYm9hcmRzIHdpdGggdGlsZXNcclxuICAgICAgICBsZXQgcG9wdWxhdGVCb2FyZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuZGF0YXNldC54ID0gaVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuZGF0YXNldC55ID0galxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnbGVmdC10aWxlJylcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0UGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQodGlsZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5kYXRhc2V0LnggPSBpXHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5kYXRhc2V0LnkgPSBqXHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdyaWdodC10aWxlJylcclxuICAgICAgICAgICAgICAgICAgICByaWdodFBsYXllckJvYXJkLmFwcGVuZENoaWxkKHRpbGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9BcHBlbmRpbmcgZWxlbWVudHMgdG8gRE9NXHJcbiAgICAgICAgcG9wdWxhdGVCb2FyZHMoKVxyXG5cclxuICAgICAgICBtYWluVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uU291bmQuY2xvbmVOb2RlKCkucGxheSgpXHJcbiAgICAgICAgICAgIGRpc3BsYXlNYWluTWVudSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChtYWluVGl0bGUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9wQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyMU5hbWUpXHJcbiAgICAgICAgdG9wQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZXJDb250YWluZXIpXHJcbiAgICAgICAgdG9wQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyMk5hbWUpXHJcblxyXG4gICAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGxlZnRTaGlwc0NvbnRhaW5lcilcclxuICAgICAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChsZWZ0UGxheWVyQm9hcmQpXHJcbiAgICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHJpZ2h0UGxheWVyQm9hcmQpXHJcbiAgICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHJpZ2h0U2hpcHNDb250YWluZXIpXHJcbiAgICAgICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRTaWRlKVxyXG4gICAgICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodFNpZGUpXHJcblxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcilcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRvcEJvYXJkQ29udGFpbmVyKVxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYm9hcmRzQ29udGFpbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZExpc3RlbmVyc1NldHVwID0gKGNvbmZpZykgPT4ge1xyXG4gICAgICAgIGxldCBkcm9wQW5pbWF0aW9uID0gW1xyXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlWigxMHB4KScgfSxcclxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEuMjUsIDAuNzUsIDEpIHRyYW5zbGF0ZVooMTBweCknIH0sXHJcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgwLjc1LCAxLjI1LCAxKSB0cmFuc2xhdGVaKDEwcHgpJyB9LFxyXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMS4xNSwgMC44NSwgMSkgdHJhbnNsYXRlWigxMHB4KScgfSxcclxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDAuOTUsIDEuMDUsIDEpIHRyYW5zbGF0ZVooMTBweCknIH0sXHJcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLjA1LCAwLjk1LCAxKSB0cmFuc2xhdGVaKDEwcHgpJyB9LFxyXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlWigxMHB4KScgfVxyXG4gICAgICAgIF1cclxuICAgICAgICBsZXQgY3VycmVudFNpZGUgPSAxXHJcbiAgICAgICAgbGV0IGxlZnRTaWRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtc2lkZS1jb250YWluZXItbWFpbicpXHJcbiAgICAgICAgbGV0IGxlZnRTaWRlU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1zaGlwcy1jb250YWluZXItbWFpbicpXHJcbiAgICAgICAgbGV0IHJpZ2h0U2lkZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1zaWRlLWNvbnRhaW5lci1tYWluJylcclxuICAgICAgICBsZXQgcmlnaHRTaWRlU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtc2hpcHMtY29udGFpbmVyLW1haW4nKVxyXG4gICAgICAgIHJpZ2h0U2lkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3YWl0aW5nU2NyZWVuJylcclxuICAgICAgICBsZXQgcmVhZHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHJlYWR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlYWR5LWJ1dHRvbi1zZXR1cCcpXHJcbiAgICAgICAgcmVhZHlCdXR0b24udGV4dENvbnRlbnQgPSAnUmVhZHknXHJcbiAgICAgICAgbGV0IGZpcnN0QnViYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBsZXQgc2Vjb25kQnViYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICByZWFkeUJ1dHRvbi5hcHBlbmRDaGlsZChmaXJzdEJ1YmJsZSlcclxuICAgICAgICByZWFkeUJ1dHRvbi5hcHBlbmRDaGlsZChzZWNvbmRCdWJibGUpXHJcbiAgICAgICAgcmVhZHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2lkZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxlZnRTaWRlU2hpcHMuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tTb3VuZC5jbG9uZU5vZGUoKS5wbGF5KClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmdhbWVNb2RlID09ICdwdmFpJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluR2FtZS5nYW1lU3RhcnRlZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlNYWluR2FtZShjb25maWcpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFNpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2FpdGluZ1NjcmVlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0U2lkZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd3YWl0aW5nU2NyZWVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNpZGUgPSAyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRTaWRlID09IDIpIHtcclxuICAgICAgICAgICAgICAgIGNsaWNrU291bmQuY2xvbmVOb2RlKCkucGxheSgpXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJpZ2h0U2lkZVNoaXBzLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5HYW1lLmdhbWVTdGFydGVkKClcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TWFpbkdhbWUoY29uZmlnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHJlYWR5QnV0dG9uKVxyXG5cclxuICAgICAgICBsZXQgbGVmdFRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxlZnQtdGlsZScpXHJcbiAgICAgICAgbGVmdFRpbGVzLmZvckVhY2godGlsZSA9PiB7XHJcbiAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXYpID0+IGV2LnByZXZlbnREZWZhdWx0KCkpXHJcbiAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGV2ID0+IHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIC8vRHJvcHBlZCBFbGVtZW50IGRhdGFcclxuICAgICAgICAgICAgICAgIGxldCBbbGVuZ3RoLCBzaWRlLCBpZF0gPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpLnNwbGl0KCcgJylcclxuICAgICAgICAgICAgICAgIGxldCBhdHRlbXB0Q29vcmRzLCBhdHRlbXB0U2hpcFxyXG4gICAgICAgICAgICAgICAgLy9SZXR1cm4gb24gd3Jvbmcgc2lkZVxyXG4gICAgICAgICAgICAgICAgaWYgKHNpZGUgIT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL0Nsb25lIGRyb3BwZWQgZWxlbWVudCBhbmQgcmVtb3ZlIG9sZCBvbmUgc28gdGhhdCBldmVudCBsaXN0ZW5lcnMgZG9udCBpbnRlcmZlcmVcclxuICAgICAgICAgICAgICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLW92ZXJsYXktbGVmdCcpXHJcbiAgICAgICAgICAgICAgICBsZXQgc2hpcEJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2hpcEJsb2NrID0gc2hpcEJsb2NrLmNsb25lTm9kZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJsYXkuY29udGFpbnMoc2hpcEJsb2NrKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5wbGF5ZXIxQm9hcmQucmVtb3ZlU2hpcChbWytzaGlwQmxvY2suc3R5bGUuZ3JpZFJvd1N0YXJ0IC0gMV0sIFsrc2hpcEJsb2NrLnN0eWxlLmdyaWRDb2x1bW5TdGFydCAtIDFdXSlcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnJlbW92ZUNoaWxkKHNoaXBCbG9jaylcclxuICAgICAgICAgICAgICAgICAgICBuZXdTaGlwQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCBsZW5ndGggKyAnIGxlZnQnICsgYCAke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3U2hpcEJsb2NrID0gc2hpcEJsb2NrXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vU2V0IHNoaXAgZGVwZW5kaW5nIG9uIHBvc2l0aW9uIG9mIGJsb2NrIGFuZCBTZXQgZXZlbnQgbGlzdGVuZXIgZm9yIHJvdGF0aW9uIG9mIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIGlmICgrc2hpcEJsb2NrLnN0eWxlLmdyaWRSb3dTdGFydCA9PSArc2hpcEJsb2NrLnN0eWxlLmdyaWRSb3dFbmQgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgW2F0dGVtcHRDb29yZHMsIGF0dGVtcHRTaGlwXSA9IGNvbmZpZy5wbGF5ZXIxQm9hcmQuc2V0U2hpcCgrbGVuZ3RoLCBbK2V2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC54LCArZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LnldKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgW2F0dGVtcHRDb29yZHMsIGF0dGVtcHRTaGlwXSA9IGNvbmZpZy5wbGF5ZXIxQm9hcmQuc2V0U2hpcCgrbGVuZ3RoLCBbK2V2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC54LCArZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LnldLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGF0dGVtcHRDb29yZHMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcFNvdW5kLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IHBhcnNlVG9ZWChhdHRlbXB0Q29vcmRzWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmQgPSBwYXJzZVRvWVgoYXR0ZW1wdENvb3Jkc1thdHRlbXB0Q29vcmRzLmxlbmd0aCAtIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1NoaXBCbG9jay5zdHlsZS5ncmlkQXJlYSA9IGAke3N0YXJ0WzBdICsgMX0gLyAke3N0YXJ0WzFdICsgMX0gLyAke2VuZFswXSArIDJ9IC8gJHtlbmRbMV0gKyAyfWBcclxuICAgICAgICAgICAgICAgICAgICBuZXdTaGlwQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm90YXRlQXR0ZW1wdCA9IGNvbmZpZy5wbGF5ZXIxQm9hcmQucm90YXRlU2hpcChzdGFydCwgZW5kLCArbGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3RhdGVBdHRlbXB0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JvdGF0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcFNvdW5kLmNsb25lTm9kZSgpLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gcm90YXRlQXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2hpcEJsb2NrLnN0eWxlLmdyaWRBcmVhID0gYCR7c3RhcnRbMF0gKyAxfSAvICR7c3RhcnRbMV0gKyAxfSAvICR7ZW5kWzBdICsgMn0gLyAke2VuZFsxXSArIDJ9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKG5ld1NoaXBCbG9jaylcclxuICAgICAgICAgICAgICAgICAgICBuZXdTaGlwQmxvY2suYW5pbWF0ZShkcm9wQW5pbWF0aW9uLCB7IGR1cmF0aW9uOiAxMDAwLCBpdGVyYXRpb25zOiAxIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IHJpZ2h0VGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmlnaHQtdGlsZScpXHJcbiAgICAgICAgcmlnaHRUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xyXG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2KSA9PiBldi5wcmV2ZW50RGVmYXVsdCgpKVxyXG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBldiA9PiB7XHJcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAvL0Ryb3BwZWQgRWxlbWVudCBkYXRhXHJcbiAgICAgICAgICAgICAgICBsZXQgW2xlbmd0aCwgc2lkZSwgaWRdID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKS5zcGxpdCgnICcpXHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0ZW1wdENvb3JkcywgYXR0ZW1wdFNoaXBcclxuICAgICAgICAgICAgICAgIC8vUmV0dXJuIG9uIHdyb25nIHNpZGVcclxuICAgICAgICAgICAgICAgIGlmIChzaWRlICE9ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vQ2xvbmUgZHJvcHBlZCBlbGVtZW50IGFuZCByZW1vdmUgb2xkIG9uZSBzbyB0aGF0IGV2ZW50IGxpc3RlbmVycyBkb250IGludGVyZmVyZVxyXG4gICAgICAgICAgICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtb3ZlcmxheS1yaWdodCcpXHJcbiAgICAgICAgICAgICAgICBsZXQgc2hpcEJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2hpcEJsb2NrID0gc2hpcEJsb2NrLmNsb25lTm9kZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJsYXkuY29udGFpbnMoc2hpcEJsb2NrKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5wbGF5ZXIyQm9hcmQucmVtb3ZlU2hpcChbWytzaGlwQmxvY2suc3R5bGUuZ3JpZFJvd1N0YXJ0IC0gMV0sIFsrc2hpcEJsb2NrLnN0eWxlLmdyaWRDb2x1bW5TdGFydCAtIDFdXSlcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnJlbW92ZUNoaWxkKHNoaXBCbG9jaylcclxuICAgICAgICAgICAgICAgICAgICBuZXdTaGlwQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCBsZW5ndGggKyAnIGxlZnQnICsgYCAke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3U2hpcEJsb2NrID0gc2hpcEJsb2NrXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9TZXQgc2hpcCBkZXBlbmRpbmcgb24gcG9zaXRpb24gb2YgYmxvY2sgYW5kIFNldCBldmVudCBsaXN0ZW5lciBmb3Igcm90YXRpb24gb2YgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgaWYgKCtzaGlwQmxvY2suc3R5bGUuZ3JpZFJvd1N0YXJ0ID09ICtzaGlwQmxvY2suc3R5bGUuZ3JpZFJvd0VuZCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBbYXR0ZW1wdENvb3JkcywgYXR0ZW1wdFNoaXBdID0gY29uZmlnLnBsYXllcjJCb2FyZC5zZXRTaGlwKCtsZW5ndGgsIFsrZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LngsICtldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBbYXR0ZW1wdENvb3JkcywgYXR0ZW1wdFNoaXBdID0gY29uZmlnLnBsYXllcjJCb2FyZC5zZXRTaGlwKCtsZW5ndGgsIFsrZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LngsICtldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueV0sIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXR0ZW1wdENvb3JkcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wU291bmQucGxheSgpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gcGFyc2VUb1lYKGF0dGVtcHRDb29yZHNbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZCA9IHBhcnNlVG9ZWChhdHRlbXB0Q29vcmRzW2F0dGVtcHRDb29yZHMubGVuZ3RoIC0gMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3U2hpcEJsb2NrLnN0eWxlLmdyaWRBcmVhID0gYCR7c3RhcnRbMF0gKyAxfSAvICR7c3RhcnRbMV0gKyAxfSAvICR7ZW5kWzBdICsgMn0gLyAke2VuZFsxXSArIDJ9YFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1NoaXBCbG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3RhdGVBdHRlbXB0ID0gY29uZmlnLnBsYXllcjJCb2FyZC5yb3RhdGVTaGlwKHN0YXJ0LCBlbmQsICtsZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvdGF0ZUF0dGVtcHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncm90YXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wU291bmQuY2xvbmVOb2RlKCkucGxheSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSByb3RhdGVBdHRlbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTaGlwQmxvY2suc3R5bGUuZ3JpZEFyZWEgPSBgJHtzdGFydFswXSArIDF9IC8gJHtzdGFydFsxXSArIDF9IC8gJHtlbmRbMF0gKyAyfSAvICR7ZW5kWzFdICsgMn1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQobmV3U2hpcEJsb2NrKVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1NoaXBCbG9jay5hbmltYXRlKGRyb3BBbmltYXRpb24sIHsgZHVyYXRpb246IDEwMDAsIGl0ZXJhdGlvbnM6IDEgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzcGxheU1haW5HYW1lID0gYXN5bmMgKGNvbmZpZykgPT4ge1xyXG4gICAgICAgIHRyYW5zaXRpb25Tb3VuZC5jbG9uZU5vZGUoKS5wbGF5KClcclxuICAgICAgICBsZXQgb2xkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcy1jb250YWluZXItbWFpbicpXHJcbiAgICAgICAgaWYgKG9sZENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmxhbmtPdXQnKVxyXG4gICAgICAgICAgICAgICAgb2xkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgbGV0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxyXG4gICAgICAgIG1haW5IZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1haW4nKVxyXG4gICAgICAgIGxldCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJ1xyXG4gICAgICAgIG1haW5UaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1tYWluJylcclxuICAgICAgICBtYWluVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uU291bmQuY2xvbmVOb2RlKCkucGxheSgpXHJcbiAgICAgICAgICAgIGRpc3BsYXlNYWluTWVudSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgb3B0aW9uc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgb3B0aW9uc0J1dHRvbi5zcmMgPSAnLi9pbWFnZXMvc2V0dGluZ3MucG5nJ1xyXG4gICAgICAgIG9wdGlvbnNCdXR0b24uY2xhc3NMaXN0LmFkZCgnb3B0aW9ucy1idXR0b24nKVxyXG4gICAgICAgIG9wdGlvbnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBhdXNlU291bmQuY2xvbmVOb2RlKCkucGxheSgpXHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Nob3dNZW51JylcclxuICAgICAgICAgICAgY29uZmlnLmlzUGF1c2VkID0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucy1jb250YWluZXInKVxyXG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdtYWluLW9wdGlvbnMtaGVhZGVyJylcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnUGF1c2VkJ1xyXG4gICAgICAgIGxldCBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBvcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tb3B0aW9ucy1jb250YWluZXInKVxyXG4gICAgICAgIGxldCBiYWNrVG9HYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBiYWNrVG9HYW1lQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ0JhY2sgdG8gR2FtZSdcclxuICAgICAgICBsZXQgcmVtYXRjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcmVtYXRjaENvbnRhaW5lci50ZXh0Q29udGVudCA9ICdSZW1hdGNoJ1xyXG4gICAgICAgIHJlbWF0Y2hDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY2xpY2tTb3VuZC5jbG9uZU5vZGUoKS5wbGF5KClcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5nYW1lTW9kZSA9PSAncHZhaScpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlTaGlwc1NldHVwKHRydWUsIGNvbmZpZylcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5wbGF5ZXIyQm9hcmQuc2V0UmFuZG9tU2hpcHMoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheVNoaXBzU2V0dXAoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lLWNvbnRhaW5lci1tYWluJykudGV4dENvbnRlbnQgPSAnLSdcclxuICAgICAgICAgICAgYWRkTGlzdGVuZXJzU2V0dXAoY29uZmlnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IHNlbGVjdE1vZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHNlbGVjdE1vZGVDb250YWluZXIudGV4dENvbnRlbnQgPSAnTW9kZSBzZWxlY3Rpb24nXHJcbiAgICAgICAgc2VsZWN0TW9kZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjbGlja1NvdW5kLmNsb25lTm9kZSgpLnBsYXkoKVxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICBtYWluR2FtZS5zZXR1cCgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgbWFpbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG1haW5NZW51LnRleHRDb250ZW50ID0gJ1JldHVybiB0byBNYWluIE1lbnUnXHJcbiAgICAgICAgbWFpbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY2xpY2tTb3VuZC5jbG9uZU5vZGUoKS5wbGF5KClcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgbWFpbkdhbWUuYXBwU3RhcnQoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBhdXNlU291bmQuY2xvbmVOb2RlKCkucGxheSgpXHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dNZW51JylcclxuICAgICAgICAgICAgY29uZmlnLmlzUGF1c2VkID0gZmFsc2VcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0J1YmJsaW5nJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJhY2tUb0dhbWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dNZW51JylcclxuICAgICAgICAgICAgY29uZmlnLmlzUGF1c2VkID0gZmFsc2VcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0J1YmJsaW5nJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJhY2tUb0dhbWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpPT5ob3ZlclNvdW5kLmNsb25lTm9kZSgpLnBsYXkoKSlcclxuICAgICAgICByZW1hdGNoQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKT0+aG92ZXJTb3VuZC5jbG9uZU5vZGUoKS5wbGF5KCkpXHJcbiAgICAgICAgc2VsZWN0TW9kZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCk9PmhvdmVyU291bmQuY2xvbmVOb2RlKCkucGxheSgpKVxyXG4gICAgICAgIG1haW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKT0+aG92ZXJTb3VuZC5jbG9uZU5vZGUoKS5wbGF5KCkpXHJcblxyXG4gICAgICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja1RvR2FtZUNvbnRhaW5lcilcclxuICAgICAgICBvcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbWF0Y2hDb250YWluZXIpXHJcbiAgICAgICAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RNb2RlQ29udGFpbmVyKVxyXG4gICAgICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbk1lbnUpXHJcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKG9wdGlvbnNDb250YWluZXIpXHJcblxyXG5cclxuICAgICAgICAvL1RvcCBib2FyZFxyXG4gICAgICAgIGxldCB0b3BCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdG9wQm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9wLWJvYXJkLWNvbnRhaW5lci1tYWluJylcclxuICAgICAgICBsZXQgcGxheWVyMU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHBsYXllcjFOYW1lLmNsYXNzTGlzdC5hZGQoJ3BsYXllcjEtbmFtZS1tYWluJylcclxuICAgICAgICBwbGF5ZXIxTmFtZS50ZXh0Q29udGVudCA9IGNvbmZpZy5wbGF5ZXIxT2JqLmdldFBsYXllclRhZygpXHJcbiAgICAgICAgbGV0IHRpbWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aW1lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aW1lLWNvbnRhaW5lci1tYWluJylcclxuICAgICAgICB0aW1lckNvbnRhaW5lci50ZXh0Q29udGVudCA9IGAke2NvbmZpZy50aW1lUGVyVHVybn1zYFxyXG4gICAgICAgIGxldCBwbGF5ZXIyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcGxheWVyMk5hbWUuY2xhc3NMaXN0LmFkZCgncGxheWVyMi1uYW1lLW1haW4nKVxyXG4gICAgICAgIHBsYXllcjJOYW1lLnRleHRDb250ZW50ID0gY29uZmlnLnBsYXllcjJPYmouZ2V0UGxheWVyVGFnKClcclxuXHJcbiAgICAgICAgbGV0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgYm9hcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkcy1jb250YWluZXItbWFpbicpXHJcbiAgICAgICAgLy9MZWZ0IHNpZGUgR2FtZWJvYXJkXHJcbiAgICAgICAgbGV0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBsZWZ0U2lkZS5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNpZGUtY29udGFpbmVyLW1haW4nKVxyXG4gICAgICAgIGxldCBsZWZ0U2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGxlZnRTaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNoaXBzLWNvbnRhaW5lci1tYWluJylcclxuXHJcbiAgICAgICAgbGV0IGxlZnRQbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbGVmdFBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2xlZnQtcGxheWVyLWJvYXJkLW1haW4nKVxyXG4gICAgICAgIC8vUmlnaHQgc2lkZSBHYW1lYm9hcmRcclxuICAgICAgICBsZXQgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICByaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgncmlnaHQtc2lkZS1jb250YWluZXItbWFpbicpXHJcblxyXG4gICAgICAgIGxldCByaWdodFBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICByaWdodFBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXBsYXllci1ib2FyZC1tYWluJylcclxuICAgICAgICAvL1BvcHVsYXRpbmcgYm9hcmRzIHdpdGggdGlsZXNcclxuICAgICAgICBsZXQgcG9wdWxhdGVCb2FyZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnRUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0VGlsZS5kYXRhc2V0LnggPSBpXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFRpbGUuZGF0YXNldC55ID0galxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRUaWxlLmRhdGFzZXQuc2lkZSA9ICdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRUaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFpbkdhbWUuc2F2ZVZhbGlkQXR0ZW1wdClcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0VGlsZS5jbGFzc0xpc3QuYWRkKCdsZWZ0LXRpbGUnLCAndGlsZS1hcHBlYXInKVxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRQbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChsZWZ0VGlsZSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLnBsYXllcjFSZWNvcmRzICYmIGNvbmZpZy5wbGF5ZXIxUmVjb3Jkc1tpXVtqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0VGlsZS5jbGFzc0xpc3QuYWRkKGNvbmZpZy5wbGF5ZXIxUmVjb3Jkc1tpXVtqXSwgJ2ZsaXAnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0VGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRUaWxlLmRhdGFzZXQueCA9IGlcclxuICAgICAgICAgICAgICAgICAgICByaWdodFRpbGUuZGF0YXNldC55ID0galxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0VGlsZS5kYXRhc2V0LnNpZGUgPSAncmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRUaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFpbkdhbWUuc2F2ZVZhbGlkQXR0ZW1wdClcclxuICAgICAgICAgICAgICAgICAgICByaWdodFRpbGUuY2xhc3NMaXN0LmFkZCgncmlnaHQtdGlsZScsICd0aWxlLWFwcGVhcicpXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRQbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChyaWdodFRpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5wbGF5ZXIyUmVjb3JkcyAmJiBjb25maWcucGxheWVyMlJlY29yZHNbaV1bal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRUaWxlLmNsYXNzTGlzdC5hZGQoY29uZmlnLnBsYXllcjJSZWNvcmRzW2ldW2pdLCAnZmxpcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vQXBwZW5kaW5nIGVsZW1lbnRzIHRvIERPTVxyXG4gICAgICAgIHBvcHVsYXRlQm9hcmRzKClcclxuICAgICAgICBsZXQgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddXHJcbiAgICAgICAgbGV0IGhvcml6b250YWxGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgaG9yaXpvbnRhbEZyYW1lLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwtZnJhbWUtY29udGFpbmVyJylcclxuICAgICAgICBsZXQgdmVydGljYWxGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdmVydGljYWxGcmFtZS5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbC1mcmFtZS1jb250YWluZXInKVxyXG4gICAgICAgIGxldHRlcnMuZm9yRWFjaCgobGV0dGVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGV0dGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgbGV0dGVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gbGV0dGVyXHJcblxyXG4gICAgICAgICAgICBsZXQgbnVtYmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgbnVtYmVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gaW5kZXhcclxuXHJcbiAgICAgICAgICAgIGhvcml6b250YWxGcmFtZS5hcHBlbmRDaGlsZChudW1iZXJDb250YWluZXIpXHJcbiAgICAgICAgICAgIHZlcnRpY2FsRnJhbWUuYXBwZW5kQ2hpbGQobGV0dGVyQ29udGFpbmVyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbEZyYW1lKVxyXG4gICAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKHZlcnRpY2FsRnJhbWUpXHJcblxyXG4gICAgICAgIGhvcml6b250YWxGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgaG9yaXpvbnRhbEZyYW1lLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwtZnJhbWUtY29udGFpbmVyJylcclxuXHJcbiAgICAgICAgdmVydGljYWxGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdmVydGljYWxGcmFtZS5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbC1mcmFtZS1jb250YWluZXInKVxyXG5cclxuICAgICAgICBsZXR0ZXJzLmZvckVhY2goKGxldHRlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxldHRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGxldHRlckNvbnRhaW5lci50ZXh0Q29udGVudCA9IGxldHRlclxyXG5cclxuICAgICAgICAgICAgbGV0IG51bWJlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIG51bWJlckNvbnRhaW5lci50ZXh0Q29udGVudCA9IGluZGV4XHJcblxyXG4gICAgICAgICAgICBob3Jpem9udGFsRnJhbWUuYXBwZW5kQ2hpbGQobnVtYmVyQ29udGFpbmVyKVxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEZyYW1lLmFwcGVuZENoaWxkKGxldHRlckNvbnRhaW5lcilcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChob3Jpem9udGFsRnJhbWUpXHJcbiAgICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHZlcnRpY2FsRnJhbWUpXHJcblxyXG4gICAgICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQobWFpblRpdGxlKVxyXG4gICAgICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQob3B0aW9uc0J1dHRvbilcclxuXHJcbiAgICAgICAgdG9wQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyMU5hbWUpXHJcbiAgICAgICAgdG9wQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZXJDb250YWluZXIpXHJcbiAgICAgICAgdG9wQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyMk5hbWUpXHJcblxyXG4gICAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGxlZnRQbGF5ZXJCb2FyZClcclxuICAgICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRQbGF5ZXJCb2FyZClcclxuICAgICAgICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdFNpZGUpXHJcbiAgICAgICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSlcclxuXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyKVxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodG9wQm9hcmRDb250YWluZXIpXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChib2FyZHNDb250YWluZXIpXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtb2RhbClcclxuICAgIH1cclxuICAgIGxldCBkaXNwbGF5TWFpbk1lbnUgPSAoKSA9PiB7XHJcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIGxldCB0aXRsZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRpdGxlTWVudS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1tZW51JylcclxuICAgICAgICB0aXRsZU1lbnUudGV4dENvbnRlbnQgPSBcIkJBVFRMRVNISVBcIlxyXG5cclxuICAgICAgICBsZXQgb3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBvcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51LW9wdGlvbnMnKVxyXG5cclxuICAgICAgICBsZXQgY29udGludWVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNvbnRpbnVlT3B0aW9uLnRleHRDb250ZW50ID0gJ1Jlc3VtZSBNYXRjaCdcclxuICAgICAgICBjb250aW51ZU9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1haW5HYW1lLmNvbnRpbnVlTWFpbkdhbWUpXHJcblxyXG4gICAgICAgIGxldCBuZXdHYW1lT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBuZXdHYW1lT3B0aW9uLnRleHRDb250ZW50ID0gJ05ldyBHYW1lJ1xyXG4gICAgICAgIG5ld0dhbWVPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluR2FtZS5zZXR1cClcclxuXHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKSkge1xyXG4gICAgICAgICAgICBvcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGludWVPcHRpb24pXHJcbiAgICAgICAgICAgIGNvbnRpbnVlT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi0xNycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdHYW1lT3B0aW9uKVxyXG4gICAgICAgIG5ld0dhbWVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLTE3JylcclxuXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZU1lbnUpXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChvcHRpb25Db250YWluZXIpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlbmRlckF0dGVtcHQgPSAoYXR0ZW1wdCwgc2lkZSkgPT4ge1xyXG4gICAgICAgIGlmIChhdHRlbXB0WzBdID09ICdtaXNzZWQnKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NpZGV9W2RhdGEteD0nJHthdHRlbXB0WzFdfSddW2RhdGEteT0nJHthdHRlbXB0WzJdfSddYCkuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJywgJ2ZsaXAnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NpZGV9W2RhdGEteD0nJHthdHRlbXB0WzFdfSddW2RhdGEteT0nJHthdHRlbXB0WzJdfSddYCkuY2xhc3NMaXN0LmFkZCgnaGl0JywgJ2ZsaXAnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVuZGVyV2lubmVyID0gKHdpbm5lciwgbG9vc2VyLGNvbmZpZywgaXNEcmF3ID0gZmFsc2UpID0+IHtcclxuICAgICAgICBjb25maWcuaXNQYXVzZWQgPSB0cnVlXHJcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250YWluZXInKVxyXG5cclxuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJylcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBpc0RyYXcgPyBcIkl0J3MgYSBUaWVcIiA6IGAke3dpbm5lcn0ncyBWaWN0b3J5IWBcclxuICAgICAgICBsZXQgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgaW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1pbmZvLWNvbnRhaW5lcicpXHJcbiAgICAgICAgaW5mb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IGlzRHJhdyA/ICdCb3RoIHBsYXllcnNcXCcgaGF2ZSBiZWVuIHN1bmsnIDogYEFsbCBvZiAke2xvb3Nlcn0ncyBzaGlwcyBoYXZlIGJlZW4gc3VuaywgSXRzICR7d2lubmVyfSdzIFZpY3RvcnlgO1xyXG4gICAgICAgIGxldCBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBvcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wdGlvbnMtY29udGFpbmVyJylcclxuXHJcbiAgICAgICAgbGV0IHJlbWF0Y2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHJlbWF0Y2hDb250YWluZXIudGV4dENvbnRlbnQgPSAnUmVtYXRjaCdcclxuICAgICAgICByZW1hdGNoQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNsaWNrU291bmQuY2xvbmVOb2RlKCkucGxheSgpXHJcbiAgICAgICAgICAgIGlmIChjb25maWcuZ2FtZU1vZGUgPT0gJ3B2YWknKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5U2hpcHNTZXR1cCh0cnVlLCBjb25maWcpXHJcbiAgICAgICAgICAgICAgICBjb25maWcucGxheWVyMkJvYXJkLnNldFJhbmRvbVNoaXBzKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlTaGlwc1NldHVwKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZS1jb250YWluZXItbWFpbicpLnRleHRDb250ZW50ID0gJy0nXHJcbiAgICAgICAgICAgIGFkZExpc3RlbmVyc1NldHVwKGNvbmZpZylcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBzZWxlY3RNb2RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBzZWxlY3RNb2RlQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ0JhY2sgdG8gbW9kZSBzZWxlY3Rpb24nXHJcbiAgICAgICAgc2VsZWN0TW9kZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcclxuICAgICAgICAgICAgY2xpY2tTb3VuZC5jbG9uZU5vZGUoKS5wbGF5KClcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgbWFpbkdhbWUuc2V0dXAoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IG1haW5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBtYWluTWVudS50ZXh0Q29udGVudCA9ICdSZXR1cm4gdG8gTWFpbiBNZW51J1xyXG4gICAgICAgIG1haW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNsaWNrU291bmQuY2xvbmVOb2RlKCkucGxheSgpXHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIG1haW5HYW1lLmFwcFN0YXJ0KClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJlbWF0Y2hDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpPT5ob3ZlclNvdW5kLmNsb25lTm9kZSgpLnBsYXkoKSlcclxuICAgICAgICBzZWxlY3RNb2RlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKT0+aG92ZXJTb3VuZC5jbG9uZU5vZGUoKS5wbGF5KCkpXHJcbiAgICAgICAgbWFpbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpPT5ob3ZlclNvdW5kLmNsb25lTm9kZSgpLnBsYXkoKSlcclxuXHJcblxyXG4gICAgICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtYXRjaENvbnRhaW5lcilcclxuICAgICAgICBvcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdE1vZGVDb250YWluZXIpXHJcbiAgICAgICAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluTWVudSlcclxuXHJcblxyXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGhlYWRlcilcclxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKVxyXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKG9wdGlvbnNDb250YWluZXIpXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtb2RhbClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHsgZGlzcGxheU1haW5HYW1lLCBkaXNwbGF5TWVudSwgZGlzcGxheVNoaXBzU2V0dXAsIHJlbmRlckF0dGVtcHQsIGFkZExpc3RlbmVyc1NldHVwLCByZW5kZXJXaW5uZXIsIGRpc3BsYXlNYWluTWVudSB9XHJcbn0pKCkiLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGxldCBib2FyZCA9IFsuLi5BcnJheSgxMCldLm1hcCgoKSA9PiBBcnJheSgxMCkpXHJcbiAgICBsZXQgcmVjb3JkcyA9IFsuLi5BcnJheSgxMCldLm1hcCgoKSA9PiBBcnJheSgxMCkpXHJcbiAgICBsZXQgc2hpcHNPbkJvYXJkID0gW11cclxuXHJcbiAgICBsZXQgcmV0cmlldmVEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBbcmVjb3JkcywgKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNoaXBzID0gW11cclxuICAgICAgICAgICAgc2hpcHNPbkJvYXJkLmZvckVhY2goY3JyU2hpcCA9PiB7XHJcbiAgICAgICAgICAgICAgICBzaGlwcy5wdXNoKHtzaGlwOmNyclNoaXAuc2hpcC5nZXRJbmZvKCksIGNvb3JkaW5hdGVzOiBjcnJTaGlwLmNvb3JkaW5hdGVzfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHNoaXBzXHJcbiAgICAgICAgfSkoKV1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2F2ZURhdGEgPSAoc2F2ZWRJbmZvKSA9PiB7XHJcbiAgICAgICAgcmVjb3JkcyA9IHNhdmVkSW5mb1swXVxyXG4gICAgICAgIHNhdmVkSW5mb1sxXS5mb3JFYWNoKCBjcnJTaGlwID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld1NoaXAgPSBzaGlwKGNyclNoaXAuc2hpcFsxXSlcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNyclNoaXAuc2hpcFswXTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIG5ld1NoaXAuaGl0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcnJTaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkKT0+e1xyXG4gICAgICAgICAgICAgICAgYm9hcmRbX3BhcnNlVG9ZWChjb29yZClbMF1dW19wYXJzZVRvWVgoY29vcmQpWzFdXSA9IG5ld1NoaXA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNoaXBzT25Cb2FyZC5wdXNoKHsgc2hpcDogbmV3U2hpcCwgY29vcmRpbmF0ZXM6IGNyclNoaXAuY29vcmRpbmF0ZXN9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlY29yZHNcclxuICAgIH1cclxuICAgIGxldCByZXNldEJvYXJkID0gKCkgPT4ge1xyXG4gICAgICAgIGJvYXJkID0gWy4uLkFycmF5KDEwKV0ubWFwKCgpID0+IEFycmF5KDEwKSlcclxuICAgICAgICByZWNvcmRzID0gWy4uLkFycmF5KDEwKV0ubWFwKCgpID0+IEFycmF5KDEwKSlcclxuICAgICAgICBzaGlwc09uQm9hcmQgPSBbXVxyXG4gICAgfVxyXG4gICAgbGV0IF9wYXJzZVRvWVggPSAoc3RyKSA9PiB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3RyKSAmJiBzdHIubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgaWYgKChzdHJbMF0gPj0gMCAmJiBzdHJbMF0gPD0gOSkgJiYgKHN0clsxXSA+PSAwICYmIHN0clsxXSA8PSA5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoICE9IDIgfHwgdHlwZW9mIHN0ciAhPSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IFtwb3NpdGlvblksIHBvc2l0aW9uWF0gPSBzdHIuc3BsaXQoXCJcIilcclxuICAgICAgICBwb3NpdGlvblggPSArcG9zaXRpb25YXHJcbiAgICAgICAgcG9zaXRpb25ZID0gcG9zaXRpb25ZLmNoYXJDb2RlQXQoMClcclxuXHJcbiAgICAgICAgaWYgKChOdW1iZXIuaXNOYU4ocG9zaXRpb25YKSkgfHwgKHBvc2l0aW9uWSA8IDY1IHx8IHBvc2l0aW9uWSA+IDc0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbcG9zaXRpb25ZIC0gNjUsIHBvc2l0aW9uWF1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX3BhcnNlVG9TdHIgPSAocm93LCBjb2x1bW4pID0+IHtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSBbXVxyXG4gICAgICAgIHBvc2l0aW9uLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShyb3cgKyA2NSkpXHJcbiAgICAgICAgcG9zaXRpb24ucHVzaChjb2x1bW4pXHJcblxyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbi5qb2luKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBzZXRTaGlwID0gKGxlbmd0aCwgcG9zaXRpb24sIGlzSG9yaXpvbnRhbCA9IHRydWUpID0+IHtcclxuICAgICAgICBpZiAobGVuZ3RoID4gNSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGxlbmd0aFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFfcGFyc2VUb1lYKHBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNvb3JkaW5hdGVcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IFtyb3csIGNvbHVtbl0gPSBfcGFyc2VUb1lYKHBvc2l0aW9uKVxyXG5cclxuICAgICAgICBpZiAoKHJvdyA+IDkgfHwgcm93IDwgMCkgfHwgKGNvbHVtbiA+IDkgfHwgY29sdW1uIDwgMCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBjb29yZGluYXRlXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKHJvdyArIGxlbmd0aCA+IDEwICYmICFpc0hvcml6b250YWwpIHx8IChjb2x1bW4gKyBsZW5ndGggPiAxMCAmJiBpc0hvcml6b250YWwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkludmFsaWQgY29vcmRpbmF0ZSBkdWUgdG8gbGVuZ3RoXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjcnJTaGlwID0gc2hpcChsZW5ndGgpXHJcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2x1bW4gKyBpXSkgcmV0dXJuIFwiU3BhY2Ugb24gY29vcmRpbmF0ZSBpcyB1bmF2YWlsYWJsZVwiXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbcm93ICsgaV1bY29sdW1uXSkgcmV0dXJuIFwiU3BhY2Ugb24gY29vcmRpbmF0ZSBpcyB1bmF2YWlsYWJsZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICAgICAgYm9hcmRbcm93XVtjb2x1bW4gKyBpXSA9IGNyclNoaXBcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goX3BhcnNlVG9TdHIocm93LCBjb2x1bW4gKyBpKSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJvYXJkW3JvdyArIGldW2NvbHVtbl0gPSBjcnJTaGlwO1xyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChfcGFyc2VUb1N0cihyb3cgKyBpLCBjb2x1bW4pKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoaXBzT25Cb2FyZC5wdXNoKHsgc2hpcDogY3JyU2hpcCwgY29vcmRpbmF0ZXMgfSlcclxuICAgICAgICByZXR1cm4gW2Nvb3JkaW5hdGVzLCBjcnJTaGlwXVxyXG4gICAgfVxyXG5cclxuICAgIGxldCByZWNlaXZlQXR0YWNrID0gKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKCFfcGFyc2VUb1lYKHBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNvb3JkaW5hdGVzXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IFtyb3csIGNvbHVtbl0gPSBfcGFyc2VUb1lYKHBvc2l0aW9uKVxyXG4gICAgICAgIGlmICgocm93ID4gOSB8fCByb3cgPCAwKSB8fCAoY29sdW1uID4gOSB8fCBjb2x1bW4gPCAwKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNvb3JkaW5hdGVzXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocmVjb3Jkc1tyb3ddW2NvbHVtbl0gPT0gJ2hpdCcgfHwgcmVjb3Jkc1tyb3ddW2NvbHVtbl0gPT0gJ21pc3NlZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiYXR0YWNrZWRcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWJvYXJkW3Jvd11bY29sdW1uXSkge1xyXG4gICAgICAgICAgICByZWNvcmRzW3Jvd11bY29sdW1uXSA9ICdtaXNzZWQnXHJcbiAgICAgICAgICAgIHJldHVybiBbJ21pc3NlZCcsIHJvdywgY29sdW1uXVxyXG4gICAgICAgIH1cclxuICAgICAgICBib2FyZFtyb3ddW2NvbHVtbl0uaGl0KClcclxuICAgICAgICByZWNvcmRzW3Jvd11bY29sdW1uXSA9ICdoaXQnXHJcbiAgICAgICAgcmV0dXJuIFsnaGl0Jywgcm93LCBjb2x1bW5dXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gc2hpcHNPbkJvYXJkLnJlZHVjZSgoYWNjLCBjcnIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNyci5zaGlwLmlzU3VuaygpICYmIGFjYykgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfSwgdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2V0UmFuZG9tU2hpcHMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGxlbmd0aHMgPSBbNSwgNCwgMywgMywgMl1cclxuICAgICAgICBsZW5ndGhzLmZvckVhY2gobGVuZ3RoID0+IHtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNldFNoaXAobGVuZ3RoLCBbX3JhbmRvbUludCgxMCksIF9yYW5kb21JbnQoMTApXSwgX3JhbmRvbUludCgyKSkpKSBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGxldCBnZXRSZWNvcmRzID0gKCkgPT4gcmVjb3JkcztcclxuICAgIGxldCByb3RhdGVTaGlwID0gKHN0YXJ0Q29vcmRzLCBlbmRDb29yZHMsIGxlbmd0aCkgPT4ge1xyXG4gICAgICAgIGxldCBzaGlwID0gYm9hcmRbc3RhcnRDb29yZHNbMF1dW3N0YXJ0Q29vcmRzWzFdXVxyXG4gICAgICAgIGlmIChzdGFydENvb3Jkc1swXSA9PT0gZW5kQ29vcmRzWzBdKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFydENvb3Jkc1swXSArIGxlbmd0aCAtIDEgPiA5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgZHVlIHRvIGxlbmd0aCBWZXJ0aWNhbCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbc3RhcnRDb29yZHNbMF0gKyBpXVtzdGFydENvb3Jkc1sxXV0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgY29vcmQgVmVydGljYWwnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVtb3ZlU2hpcChzdGFydENvb3JkcywgZW5kQ29vcmRzLCBsZW5ndGgpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGJvYXJkW3N0YXJ0Q29vcmRzWzBdICsgaV1bc3RhcnRDb29yZHNbMV1dID0gc2hpcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbc3RhcnRDb29yZHNbMF0gKyBsZW5ndGggLSAxLCBzdGFydENvb3Jkc1sxXV1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFydENvb3Jkc1sxXSArIGxlbmd0aCAtIDEgPiA5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgZHVlIHRvIGxlbmd0aCBIb3Jpem9udGFsJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChib2FyZFtzdGFydENvb3Jkc1swXV1bc3RhcnRDb29yZHNbMV0gKyBpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnSW52YWxpZCBjb29yZCBIb3Jpem9udGFsJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbW92ZVNoaXAoc3RhcnRDb29yZHMsIGxlbmd0aClcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGJvYXJkW3N0YXJ0Q29vcmRzWzBdXVtzdGFydENvb3Jkc1sxXSArIGldID0gc2hpcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbc3RhcnRDb29yZHNbMF0sIHN0YXJ0Q29vcmRzWzFdICsgbGVuZ3RoIC0gMV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgcmVtb3ZlU2hpcCA9IChzdGFydENvb3JkcykgPT4ge1xyXG4gICAgICAgIGxldCBzaGlwVG9CZVJlbW92ZWQgPSBib2FyZFtzdGFydENvb3Jkc1swXV1bc3RhcnRDb29yZHNbMV1dXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdID09IHNoaXBUb0JlUmVtb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldW2pdID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoaXBzT25Cb2FyZC5maWx0ZXIoc2hpcCA9PiBzaGlwLnNoaXAgPT0gc2hpcFRvQmVSZW1vdmVkID8gZmFsc2UgOiB0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBfcmFuZG9tSW50ID0gKG51bSkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtKTtcclxuICAgIHJldHVybiB7IHNldFNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFNoaXBzU3VuaywgZ2V0UmVjb3Jkcywgc2V0UmFuZG9tU2hpcHMsIHJvdGF0ZVNoaXAsIHJlbW92ZVNoaXAsIHJlc2V0Qm9hcmQsIHJldHJpZXZlRGF0YSwgc2F2ZURhdGEgfVxyXG59ICIsImltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgZ2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcclxuaW1wb3J0IHBsYXllciBmcm9tICcuL3BsYXllcidcclxuaW1wb3J0IGFpUGxheWVyIGZyb20gXCIuL2FpUGxheWVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xyXG4gICAgbGV0IHRpbGVTb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aWxlU291bmQnKVxyXG4gICAgbGV0IHRyYW5zaXRpb25Tb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2l0aW9uU291bmQnKVxyXG4gICAgdHJhbnNpdGlvblNvdW5kLmxvYWQoKVxyXG4gICAgdGlsZVNvdW5kLmxvYWQoKVxyXG4gICAgbGV0IGNvdW50ZXJcclxuICAgIGxldCBjb25maWcgPSB7fVxyXG4gICAgY29uZmlnLmlzUGF1c2VkID0gZmFsc2VcclxuICAgIGxldCB0aW1lclxyXG4gICAgbGV0IGNyck1vdmVzID0gW11cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZT0+e1xyXG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWNvbnRhaW5lcicpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZS5rZXkgPT0gJ0VzY2FwZScpe1xyXG4gICAgICAgICAgICBpZihtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3dNZW51Jykpe1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuY2xpY2soKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1idXR0b24nKS5jbGljaygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc3QgcmV0cmlldmVEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCFKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKSkpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIHJlc2V0UGxheWVyc0JvYXJkcygpXHJcbiAgICAgICAgbGV0IHNhdmVkQ29uZmlnID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJykpXHJcbiAgICAgICAgY29uZmlnLmlzUGF1c2VkID0gc2F2ZWRDb25maWcuaXNQYXVzZWRcclxuICAgICAgICBjb25maWcuZ2FtZU1vZGUgPSBzYXZlZENvbmZpZy5nYW1lTW9kZVxyXG4gICAgICAgIGNvbmZpZy50aW1lUGVyVHVybiA9IHNhdmVkQ29uZmlnLnRpbWVQZXJUdXJuXHJcbiAgICAgICAgY29uZmlnLnBsYXllcjFPYmogPSBwbGF5ZXIoc2F2ZWRDb25maWcucGxheWVyMU9ialswXSlcclxuICAgICAgICBjb25maWcucGxheWVyMk9iaiA9IHNhdmVkQ29uZmlnLnBsYXllcjJPYmpbMV0gPyBhaVBsYXllcigpOiBwbGF5ZXIoc2F2ZWRDb25maWcucGxheWVyMk9ialswXSk7XHJcbiAgICAgICAgY29uZmlnLnBsYXllcjFSZWNvcmRzID0gY29uZmlnLnBsYXllcjFCb2FyZC5zYXZlRGF0YShzYXZlZENvbmZpZy5wbGF5ZXIxQm9hcmQpXHJcbiAgICAgICAgY29uZmlnLnBsYXllcjJSZWNvcmRzID0gY29uZmlnLnBsYXllcjJCb2FyZC5zYXZlRGF0YShzYXZlZENvbmZpZy5wbGF5ZXIyQm9hcmQpXHJcbiAgICAgICAgY29uc29sZS5sb2coc2F2ZWRDb25maWcpXHJcbiAgICB9XHJcbiAgICBjb25zdCBzYXZlRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgc2F2ZWRDb25maWcgPSB7Li4uY29uZmlnfVxyXG4gICAgICAgIHNhdmVkQ29uZmlnLnBsYXllcjFPYmogPSBzYXZlZENvbmZpZy5wbGF5ZXIxT2JqLnJldHJpZXZlRGF0YSgpIFxyXG4gICAgICAgIHNhdmVkQ29uZmlnLnBsYXllcjJPYmogPSBzYXZlZENvbmZpZy5wbGF5ZXIyT2JqLnJldHJpZXZlRGF0YSgpIFxyXG4gICAgICAgIHNhdmVkQ29uZmlnLnBsYXllcjFCb2FyZCA9IHNhdmVkQ29uZmlnLnBsYXllcjFCb2FyZC5yZXRyaWV2ZURhdGEoKVxyXG4gICAgICAgIHNhdmVkQ29uZmlnLnBsYXllcjJCb2FyZCA9IHNhdmVkQ29uZmlnLnBsYXllcjJCb2FyZC5yZXRyaWV2ZURhdGEoKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb25maWcnLCBKU09OLnN0cmluZ2lmeShzYXZlZENvbmZpZykpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBhcnNlVG9ZWCA9IChzdHIpID0+IHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdHIpICYmIHN0ci5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoKHN0clswXSA+PSAwICYmIHN0clswXSA8PSA5KSAmJiAoc3RyWzFdID49IDAgJiYgc3RyWzFdIDw9IDkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggIT0gMiB8fCB0eXBlb2Ygc3RyICE9IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgW3Bvc2l0aW9uWSwgcG9zaXRpb25YXSA9IHN0ci5zcGxpdChcIlwiKVxyXG4gICAgICAgIHBvc2l0aW9uWCA9ICtwb3NpdGlvblhcclxuICAgICAgICBwb3NpdGlvblkgPSBwb3NpdGlvblkuY2hhckNvZGVBdCgwKVxyXG5cclxuICAgICAgICBpZiAoKE51bWJlci5pc05hTihwb3NpdGlvblgpKSB8fCAocG9zaXRpb25ZIDwgNjUgfHwgcG9zaXRpb25ZID4gNzQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtwb3NpdGlvblkgLSA2NSwgcG9zaXRpb25YXVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzZXRQbGF5ZXJzQm9hcmRzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbmZpZy5wbGF5ZXIxQm9hcmQgPSBnYW1lYm9hcmQoKVxyXG4gICAgICAgIGNvbmZpZy5wbGF5ZXIyQm9hcmQgPSBnYW1lYm9hcmQoKVxyXG4gICAgICAgIGNvbmZpZy5wbGF5ZXIxUmVjb3JkcyA9IG51bGxcclxuICAgICAgICBjb25maWcucGxheWVyMlJlY29yZHMgPSBudWxsXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcclxuICAgICAgICBjb25maWcuaXNQYXVzZWQgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc3QgcGxheVJvdW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHRpbGVTb3VuZC5jbG9uZU5vZGUoKS5wbGF5KClcclxuICAgICAgICBpZiAoY29uZmlnLmdhbWVNb2RlID09ICdwdmFpJykge1xyXG4gICAgICAgICAgICBsZXQgcGxheWVyMUF0dGVtcHQgPSBjb25maWcucGxheWVyMU9iai5zZW5kQXR0YWNrKGNyck1vdmVzWzBdLCBjb25maWcucGxheWVyMkJvYXJkKVxyXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJBdHRlbXB0KHBsYXllcjFBdHRlbXB0LCBcInJpZ2h0LXRpbGVcIilcclxuXHJcbiAgICAgICAgICAgIGxldCBwY0F0dGVtcHQgPSBjb25maWcucGxheWVyMk9iai5zZW5kQXR0YWNrKGNvbmZpZy5wbGF5ZXIxQm9hcmQpXHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckF0dGVtcHQocGNBdHRlbXB0LCAnbGVmdC10aWxlJylcclxuICAgICAgICAgICAgY291bnRlciA9IGNvbmZpZy50aW1lUGVyVHVyblxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZS1jb250YWluZXItbWFpbicpLnRleHRDb250ZW50ID0gYCR7Y291bnRlcn1zYFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXIxQXR0ZW1wdCA9IGNvbmZpZy5wbGF5ZXIxT2JqLnNlbmRBdHRhY2soY3JyTW92ZXNbMF0sIGNvbmZpZy5wbGF5ZXIyQm9hcmQpXHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckF0dGVtcHQocGxheWVyMUF0dGVtcHQsIFwicmlnaHQtdGlsZVwiKVxyXG5cclxuICAgICAgICAgICAgbGV0IHBsYXllcjJBdHRlbXB0ID0gY29uZmlnLnBsYXllcjJPYmouc2VuZEF0dGFjayhjcnJNb3Zlc1sxXSwgY29uZmlnLnBsYXllcjFCb2FyZClcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQXR0ZW1wdChwbGF5ZXIyQXR0ZW1wdCwgJ2xlZnQtdGlsZScpXHJcblxyXG4gICAgICAgICAgICBjb3VudGVyID0gY29uZmlnLnRpbWVQZXJUdXJuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lLWNvbnRhaW5lci1tYWluJykudGV4dENvbnRlbnQgPSBgJHtjb3VudGVyfXNgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcucGxheWVyMkJvYXJkLmFsbFNoaXBzU3VuaygpIHx8IGNvbmZpZy5wbGF5ZXIxQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgICAgICAgaWYoY29uZmlnLnBsYXllcjJCb2FyZC5hbGxTaGlwc1N1bmsoKSAmJiBjb25maWcucGxheWVyMUJvYXJkLmFsbFNoaXBzU3VuaygpKXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlcldpbm5lcihjb25maWcucGxheWVyMU9iai5nZXRQbGF5ZXJUYWcoKSxjb25maWcucGxheWVyMk9iai5nZXRQbGF5ZXJUYWcoKSwgY29uZmlnLCB0cnVlIClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJXaW5uZXIoY29uZmlnLnBsYXllcjFPYmouZ2V0UGxheWVyVGFnKCksY29uZmlnLnBsYXllcjJPYmouZ2V0UGxheWVyVGFnKCksIGNvbmZpZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JyTW92ZXMgPSBbXVxyXG4gICAgICAgIHNhdmVEYXRhKClcclxuICAgIH1cclxuICAgIGNvbnN0IHNhdmVWYWxpZEF0dGVtcHQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChjb25maWcuZ2FtZU1vZGUgPT0gJ3B2YWknICYmIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNpZGUgPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICBjcnJNb3Zlc1swXSA9IFtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC54LCBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC55XVxyXG4gICAgICAgICAgICBwbGF5Um91bmQoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zaWRlID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgIGNyck1vdmVzWzBdID0gW2UuY3VycmVudFRhcmdldC5kYXRhc2V0LngsIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjcnJNb3Zlc1sxXSA9IFtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC54LCBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC55XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3JyTW92ZXNbMF0gJiYgY3JyTW92ZXNbMV0pIHtcclxuICAgICAgICAgICAgcGxheVJvdW5kKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBhcHBTdGFydCA9ICgpID0+IHtcclxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5TWFpbk1lbnUoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldHVwID0gKCkgPT4ge1xyXG4gICAgICAgIC8vR2V0IEluZm8gZnJvbSBET00gXHJcbiAgICAgICAgdHJhbnNpdGlvblNvdW5kLmNsb25lTm9kZSgpLnBsYXkoKVxyXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlNZW51KClcclxuICAgICAgICBsZXQgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kLXNsaWRlLW1lbnUnKVxyXG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNldFBsYXllcnMpXHJcbiAgICAgICAgbGV0IHJpZ2h0TW9kZVNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LXNpZGUtbW9kZScpXHJcbiAgICAgICAgcmlnaHRNb2RlU2VsZWN0ZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5nYW1lTW9kZSA9ICdwdmFpJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGxlZnRNb2RlU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1zaWRlLW1vZGUnKVxyXG4gICAgICAgIGxlZnRNb2RlU2VsZWN0ZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5nYW1lTW9kZSA9ICdwdnAnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNldFBsYXllcnMgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGxldCBmb3JtID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShlLnRhcmdldCkuZW50cmllcygpKVxyXG4gICAgICAgIGlmICghZm9ybS5wbGF5ZXIxTmFtZSkge1xyXG4gICAgICAgICAgICBjb25maWcucGxheWVyMU9iaiA9IHBsYXllcignUGxheWVyIDEnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5wbGF5ZXIxT2JqID0gcGxheWVyKGZvcm0ucGxheWVyMU5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuZ2FtZU1vZGUgIT0gJ3B2YWknKSB7XHJcbiAgICAgICAgICAgIGlmICghZm9ybS5wbGF5ZXIyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLnBsYXllcjJPYmogPSBwbGF5ZXIoJ1BsYXllciAyJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5wbGF5ZXIyT2JqID0gcGxheWVyKGZvcm0ucGxheWVyMk5hbWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25maWcucGxheWVyMk9iaiA9IGFpUGxheWVyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZmlnLnBsYXllcjFCb2FyZCA9IGdhbWVib2FyZCgpXHJcbiAgICAgICAgY29uZmlnLnBsYXllcjJCb2FyZCA9IGdhbWVib2FyZCgpXHJcbiAgICAgICAgY29uZmlnLnRpbWVQZXJUdXJuID0gZm9ybS50aW1lU2VsZWN0ZWRcclxuICAgICAgICBpZiAoY29uZmlnLmdhbWVNb2RlID09ICdwdmFpJykge1xyXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5U2hpcHNTZXR1cCh0cnVlLCBjb25maWcpXHJcbiAgICAgICAgICAgIGNvbmZpZy5wbGF5ZXIyQm9hcmQuc2V0UmFuZG9tU2hpcHMoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlTaGlwc1NldHVwKGZhbHNlLCBjb25maWcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmFkZExpc3RlbmVyc1NldHVwKGNvbmZpZylcclxuICAgIH1cclxuICAgIGxldCBnYW1lU3RhcnRlZCA9ICgpID0+IHtcclxuICAgICAgICBjb3VudGVyID0gY29uZmlnLnRpbWVQZXJUdXJuXHJcbiAgICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlciA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZVNvdW5kLmNsb25lTm9kZSgpLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuZ2FtZU1vZGUgPT0gJ3B2YWknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIxQXR0ZW1wdCA9IGNvbmZpZy5wbGF5ZXIxT2JqLnNlbmRSYW5kb21BdHRhY2soY29uZmlnLnBsYXllcjJCb2FyZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQXR0ZW1wdChwbGF5ZXIxQXR0ZW1wdCwgXCJyaWdodC10aWxlXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGNBdHRlbXB0ID0gY29uZmlnLnBsYXllcjJPYmouc2VuZEF0dGFjayhjb25maWcucGxheWVyMUJvYXJkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJBdHRlbXB0KHBjQXR0ZW1wdCwgJ2xlZnQtdGlsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghY3JyTW92ZXNbMF0gJiYgIWNyck1vdmVzWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIxQXR0ZW1wdCA9IGNvbmZpZy5wbGF5ZXIxT2JqLnNlbmRSYW5kb21BdHRhY2soY29uZmlnLnBsYXllcjJCb2FyZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQXR0ZW1wdChwbGF5ZXIxQXR0ZW1wdCwgXCJyaWdodC10aWxlXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyMkF0dGVtcHQgPSBjb25maWcucGxheWVyMk9iai5zZW5kUmFuZG9tQXR0YWNrKGNvbmZpZy5wbGF5ZXIxQm9hcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckF0dGVtcHQocGxheWVyMkF0dGVtcHQsICdsZWZ0LXRpbGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNyck1vdmVzWzBdICYmIGNyck1vdmVzWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIxQXR0ZW1wdCA9IGNvbmZpZy5wbGF5ZXIxT2JqLnNlbmRSYW5kb21BdHRhY2soY29uZmlnLnBsYXllcjJCb2FyZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQXR0ZW1wdChwbGF5ZXIxQXR0ZW1wdCwgXCJyaWdodC10aWxlXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyMkF0dGVtcHQgPSBjb25maWcucGxheWVyMk9iai5zZW5kQXR0YWNrKGNyck1vdmVzWzFdLCBjb25maWcucGxheWVyMUJvYXJkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJBdHRlbXB0KHBsYXllcjJBdHRlbXB0LCAnbGVmdC10aWxlJylcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNyck1vdmVzWzBdICYmICFjcnJNb3Zlc1sxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyMUF0dGVtcHQgPSBjb25maWcucGxheWVyMU9iai5zZW5kQXR0YWNrKGNyck1vdmVzWzBdLCBjb25maWcucGxheWVyMkJvYXJkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJBdHRlbXB0KHBsYXllcjFBdHRlbXB0LCBcInJpZ2h0LXRpbGVcIilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIyQXR0ZW1wdCA9IGNvbmZpZy5wbGF5ZXIyT2JqLnNlbmRSYW5kb21BdHRhY2soY29uZmlnLnBsYXllcjFCb2FyZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQXR0ZW1wdChwbGF5ZXIyQXR0ZW1wdCwgJ2xlZnQtdGlsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgPSBjb25maWcudGltZVBlclR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lLWNvbnRhaW5lci1tYWluJylcclxuICAgICAgICAgICAgICAgIHRpbWVyLnRleHRDb250ZW50ID0gYCR7Y291bnRlcn1zYFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGltZXJQdWxzZSA9IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGJveFNoYWRvdzogJzBweCAwcHggNXB4IG9yYW5nZXJlZCcsIGZvbnRTaXplOiAnMS40cmVtJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgYm94U2hhZG93OiAnMHB4IDBweCAxMHB4IDFweCBvcmFuZ2VyZWQnLCBmb250U2l6ZTogJzEuNDVyZW0nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBib3hTaGFkb3c6ICcwcHggMHB4IDVweCBvcmFuZ2VyZWQnLCBmb250U2l6ZTogJzEuNHJlbScgfSxcclxuICAgICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lUGVySW50ZXJhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IDEsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyLS1cclxuICAgICAgICAgICAgICAgIHRpbWVyLmFuaW1hdGUodGltZXJQdWxzZSwgdGltZVBlckludGVyYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgIHNhdmVEYXRhKClcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbnRpbnVlTWFpbkdhbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgdHJhbnNpdGlvblNvdW5kLmNsb25lTm9kZSgpLnBsYXkoKVxyXG4gICAgICAgIHJldHJpZXZlRGF0YSgpXHJcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheU1haW5HYW1lKGNvbmZpZylcclxuICAgICAgICBnYW1lU3RhcnRlZCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc2V0dXAsIHNhdmVWYWxpZEF0dGVtcHQsIGFwcFN0YXJ0LCBnYW1lU3RhcnRlZCwgcmVzZXRQbGF5ZXJzQm9hcmRzLCBzYXZlRGF0YSwgY29udGludWVNYWluR2FtZX1cclxufSkoKSIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAodGFnKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHRhZyAhPSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGxldCBwbGF5ZXJUYWcgPSB0YWdcclxuXHJcbiAgICBsZXQgZ2V0UGxheWVyVGFnID0gKCkgPT4gcGxheWVyVGFnO1xyXG4gICAgbGV0IHJldHJpZXZlRGF0YSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gWyBnZXRQbGF5ZXJUYWcoKSwgZmFsc2UgXVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBzZW5kQXR0YWNrID0gKHBvc2l0aW9uLCBnYW1lYm9hcmQpID0+IHtcclxuICAgICAgICBsZXQgYXR0YWNrUmVwb3J0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socG9zaXRpb24pXHJcblxyXG4gICAgICAgIGlmIChhdHRhY2tSZXBvcnQgPT0gXCJJbnZhbGlkIGNvb3JkaW5hdGVzXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBjb29yZGluYXRlc1wiXHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tSZXBvcnQgPT0gXCJhdHRhY2tlZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlBvc2l0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWRcIlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXR0YWNrUmVwb3J0XHJcbiAgICB9XHJcbiAgICBsZXQgX3JhbmRvbUludCA9IChudW0pID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bSk7XHJcblxyXG4gICAgbGV0IHNlbmRSYW5kb21BdHRhY2sgPSAoZ2FtZWJvYXJkKSA9PiB7XHJcbiAgICAgICAgbGV0IGF0dGVtcHRcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBhdHRlbXB0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW19yYW5kb21JbnQoMTApLCBfcmFuZG9tSW50KDEwKV0pXHJcbiAgICAgICAgICAgIGlmIChhdHRlbXB0WzBdID09ICdoaXQnIHx8IGF0dGVtcHRbMF0gPT0gJ21pc3NlZCcpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGF0dGVtcHRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBnZXRQbGF5ZXJUYWcsIHNlbmRBdHRhY2ssIHNlbmRSYW5kb21BdHRhY2ssIHJldHJpZXZlRGF0YSB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAobGVuZ3RoKT0+e1xyXG4gICAgbGV0IHNoaXBMZW5ndGggPSBsZW5ndGg7XHJcbiAgICBsZXQgbnVtT2ZIaXRzID0gMDtcclxuXHJcbiAgICBsZXQgZ2V0SW5mbyA9ICgpID0+IFtudW1PZkhpdHMsIHNoaXBMZW5ndGhdO1xyXG4gICAgbGV0IGhpdCA9ICgpID0+ICsrbnVtT2ZIaXRzO1xyXG4gICAgbGV0IGlzU3VuayA9ICgpID0+IHNoaXBMZW5ndGggPT09IG51bU9mSGl0cyA/IHRydWU6IGZhbHNlO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge2hpdCwgaXNTdW5rLCBnZXRJbmZvfSAgICBcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG1haW5HYW1lIGZyb20gXCIuL21haW5HYW1lXCI7XHJcblxyXG5tYWluR2FtZS5hcHBTdGFydCgpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==