export default () => {
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
}