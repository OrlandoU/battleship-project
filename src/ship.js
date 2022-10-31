export default (length, horizontal = true)=>{
    let shipLength = length;
    let numOfHits = 0;

    let hit = () => ++numOfHits;
    let isSunk = () => shipLength === numOfHits ? true: false;
    return {hit, isSunk}    
}