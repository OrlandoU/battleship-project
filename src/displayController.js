import ship from "./ship"
import mainGame from "./mainGame"

export default (() => {
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
        mainGame.resetPlayersBoards()
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
                        mainGame.gameStarted()
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
                    mainGame.gameStarted()
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
            mainGame.setup()
        })
        let mainMenu = document.createElement('div')
        mainMenu.textContent = 'Return to Main Menu'
        mainMenu.addEventListener('click', (event) => {
            clickSound.cloneNode().play()
            event.stopPropagation()
            mainGame.appStart()
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
                    leftTile.addEventListener('click', mainGame.saveValidAttempt)
                    leftTile.classList.add('left-tile', 'tile-appear')
                    leftPlayerBoard.appendChild(leftTile)
                    if (config.player1Records && config.player1Records[i][j]) {
                        leftTile.classList.add(config.player1Records[i][j], 'flip')
                    }

                    let rightTile = document.createElement('div')
                    rightTile.dataset.x = i
                    rightTile.dataset.y = j
                    rightTile.dataset.side = 'right'
                    rightTile.addEventListener('click', mainGame.saveValidAttempt)
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
        continueOption.addEventListener('click', mainGame.continueMainGame)

        let newGameOption = document.createElement('div')
        newGameOption.textContent = 'New Game'
        newGameOption.addEventListener('click', mainGame.setup)

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
            mainGame.setup()
        })
        let mainMenu = document.createElement('div')
        mainMenu.textContent = 'Return to Main Menu'
        mainMenu.addEventListener('click', (event) => {
            clickSound.cloneNode().play()
            event.stopPropagation()
            mainGame.appStart()
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
})()