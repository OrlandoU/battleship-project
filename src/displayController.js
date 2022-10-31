export default (()=>{
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
})()