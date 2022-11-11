import ship from "./ship"

export default () => {
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
            let newShip = ship(crrShip.ship[1])
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

        let crrShip = ship(length)
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
} 