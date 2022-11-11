import displayController from "./displayController";
import gameboard from './gameboard';
import player from './player'
import aiPlayer from "./aiPlayer";
import ship from "./ship";

export default (() => {
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
        config.player1Obj = player(savedConfig.player1Obj[0])
        config.player2Obj = savedConfig.player2Obj[1] ? aiPlayer(): player(savedConfig.player2Obj[0]);
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
        config.player1Board = gameboard()
        config.player2Board = gameboard()
        config.player1Records = null
        config.player2Records = null
        clearInterval(timer)
        config.isPaused = false
    }
    const playRound = () => {
        if (config.gameMode == 'pvai') {
            let player1Attempt = config.player1Obj.sendAttack(crrMoves[0], config.player2Board)
            displayController.renderAttempt(player1Attempt, "right-tile")

            let pcAttempt = config.player2Obj.sendAttack(config.player1Board)
            displayController.renderAttempt(pcAttempt, 'left-tile')
            counter = config.timePerTurn
            document.querySelector('.time-container-main').textContent = `${counter}s`
        } else {
            let player1Attempt = config.player1Obj.sendAttack(crrMoves[0], config.player2Board)
            displayController.renderAttempt(player1Attempt, "right-tile")

            let player2Attempt = config.player2Obj.sendAttack(crrMoves[1], config.player1Board)
            displayController.renderAttempt(player2Attempt, 'left-tile')

            counter = config.timePerTurn
            document.querySelector('.time-container-main').textContent = `${counter}s`
        }
        if (config.player2Board.allShipsSunk() || config.player1Board.allShipsSunk()) {
            displayController.renderWinner(config)
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
        displayController.displayMainMenu()
    }

    const setup = () => {
        //Get Info from DOM 
        displayController.displayMenu()
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
            config.player1Obj = player('Player 1')
        } else {
            config.player1Obj = player(form.player1Name)
        }
        if (config.gameMode != 'pvai') {
            if (!form.player2Name) {
                config.player2Obj = player('Player 2')
            } else {
                config.player2Obj = player(form.player2Name)
            }
        } else {
            config.player2Obj = aiPlayer()
        }
        config.player1Board = gameboard()
        config.player2Board = gameboard()
        config.timePerTurn = form.timeSelected
        if (config.gameMode == 'pvai') {
            displayController.displayShipsSetup(true, config)
            config.player2Board.setRandomShips()
        } else {
            displayController.displayShipsSetup(false, config)
        }
        displayController.addListenersSetup(config)
    }
    let gameStarted = () => {
        counter = config.timePerTurn
        timer = setInterval(() => {
            if (!config.isPaused) {
                if (counter <= 0) {
                    if (config.gameMode == 'pvai') {
                        let player1Attempt = config.player1Obj.sendRandomAttack(config.player2Board)
                        displayController.renderAttempt(player1Attempt, "right-tile")

                        let pcAttempt = config.player2Obj.sendAttack(config.player1Board)
                        displayController.renderAttempt(pcAttempt, 'left-tile')
                    } else if (!crrMoves[0] && !crrMoves[1]) {
                        let player1Attempt = config.player1Obj.sendRandomAttack(config.player2Board)
                        displayController.renderAttempt(player1Attempt, "right-tile")

                        let player2Attempt = config.player2Obj.sendRandomAttack(config.player1Board)
                        displayController.renderAttempt(player2Attempt, 'left-tile')
                    } else if (!crrMoves[0] && crrMoves[1]) {
                        let player1Attempt = config.player1Obj.sendRandomAttack(config.player2Board)
                        displayController.renderAttempt(player1Attempt, "right-tile")

                        let player2Attempt = config.player2Obj.sendAttack(crrMoves[1], config.player1Board)
                        displayController.renderAttempt(player2Attempt, 'left-tile')
                    } else if (crrMoves[0] && !crrMoves[1]) {
                        let player1Attempt = config.player1Obj.sendAttack(crrMoves[0], config.player2Board)
                        displayController.renderAttempt(player1Attempt, "right-tile")

                        let player2Attempt = config.player2Obj.sendRandomAttack(config.player1Board)
                        displayController.renderAttempt(player2Attempt, 'left-tile')
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
        displayController.displayMainGame(config)
        gameStarted()
    }

    return { setup, saveValidAttempt, appStart, gameStarted, resetPlayersBoards, saveData, continueMainGame}
})()