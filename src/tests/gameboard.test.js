import gameboard from '../gameboard'

test("setShip method places ship at desired coordinate", () => {
    expect(gameboard().setShip(2, "A0")).toEqual(["A0", "A1"])
})

test("setShip method rejects on invalid length", () => {
    expect(gameboard().setShip(6, "A0")).toBe("Invalid length")
})

test("setShip method rejects on invalid coordinate", () => {
    expect(gameboard().setShip(2, "H10")).toBe("Invalid coordinate")
})

test("setShip method rejects on invalid coordinate due to length", () => {
    expect(gameboard().setShip(5, "A8")).toBe("Invalid coordinate due to length")
})

test("setShip method rejects when space on desired coordinate is unavailable", () => {
    let mockGameboard = gameboard()
    mockGameboard.setShip(5, "A0")
    expect(mockGameboard.setShip(2, "A2")).toBe("Space on coordinate is unavailable")
})

test("receiveAttack method registers hit correctly", () => {
    let mockGameboard = gameboard()
    mockGameboard.setShip(2, "A0")
    expect(mockGameboard.receiveAttack("A0")).toEqual(["hit", 0, 0])
})

test("receiveAttack method registers missed shots", () => {
    let mockGameboard = gameboard()
    mockGameboard.setShip(2, "A0")
    expect(mockGameboard.receiveAttack("A8")).toEqual(["missed", 0, 8])
})

test("receiveAttack method rejects invalid coordinates", () => { 
    expect(gameboard().receiveAttack("U24")).toBe("Invalid coordinates")
})

test("allShipsSunk method returns true on all ships sunk", () => {
    let mockGameboard = gameboard()
    mockGameboard.setShip(1, "A0")
    mockGameboard.setShip(1, "C0")
    mockGameboard.receiveAttack("A0")
    mockGameboard.receiveAttack("C0")

    expect(mockGameboard.allShipsSunk()).toBe(true)
})

test("allShipsSunk method returns false if all ships aren\'t sunk", () => {
    let mockGameboard = gameboard()
    mockGameboard.setShip(1, "A0")
    mockGameboard.setShip(1, "C0")
    mockGameboard.receiveAttack("A0")

    expect(mockGameboard.allShipsSunk()).toBe(false)
})