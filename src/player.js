export default (tag) => {
    if(typeof tag != "string"){
        return null
    }
    let playerTag = tag
    
    let getPlayerTag = () => playerTag;

    let sendAttack = (position, gameboard) => {
        let attackReport = gameboard.receiveAttack(position)
        
        if(attackReport == "Invalid coordinates"){
            return "Invalid coordinates"
        } else if(attackReport == "attacked"){
            return "Position has already been attacked"
        }
        return attackReport
    };

    return {getPlayerTag, sendAttack}
}