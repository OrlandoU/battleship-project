export default (length)=>{
    let shipLength = length;
    let numOfHits = 0;

    let getInfo = () => [numOfHits, shipLength];
    let hit = () => ++numOfHits;
    let isSunk = () => shipLength === numOfHits ? true: false;
    
    return {hit, isSunk, getInfo}    
}