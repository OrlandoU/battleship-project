import displayController from "./displayController";
import gameboard from './gameboard';
import player from './player'
import aiPlayer from "./aiPlayer";
import ship from "./ship";

export default (() => {
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
            displayController.renderAttempt(player1Attempt, "right-tile")

            let pcAttempt = config.player2Obj.sendAttack(config.player1Board)
            console.log(pcAttempt)
            displayController.renderAttempt(pcAttempt, 'left-tile')
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
        displayController.displayMenu()
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
            config.player1Obj = player('Player 1')
        } else{
            config.player1Obj = player(form.player1Name)
        }
        if(config.gameMode != 'pvai'){
            if(!form.player2Name){
                config.player2Obj = player('Player 2')
            } else{
                config.player2Obj = player(form.player2Name)
            }
        } else{
            config.player2Obj = aiPlayer()
        }
        
        config.player1Board = gameboard()
        config.player2Board = gameboard()
        config.timePerTurn = form.timeSelected
        displayController.displayShipsSetup()
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
})()