import ship from "./ship"

export default () => {
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

        let crrShip = ship(length)
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
} 