import ship from "../ship"

test('Returns ship object', ()=> {
    expect(typeof ship()).toBe('object')
})

test('Hit counter increases #1', ()=>{
    expect(ship().hit()).toBe(1)
})

test('Hit counter increases #2', ()=>{
    let testShip = ship()
    let numOfHits;
    for(let i = 0; i < 3; i++){
        numOfHits = testShip.hit()
    }
    expect(numOfHits).toBe(3)
})

test('Ship is sunk after number of hits equals length', ()=>{
    let testShip = ship(5)
    for(let i = 0; i < 5; i++){
        testShip.hit()
    }
    expect(testShip.isSunk()).toBe(true)
})

test('Ship isn\'t sunk after hits is not equal to length', ()=>{
    expect(ship(5).isSunk()).toBe(false)
})