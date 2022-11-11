import gameboard from "./gameboard";

export default (tag) => {
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
}