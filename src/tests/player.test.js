import player from "../player";
import gameboard from "../gameboard"

test("Sets player tag correctly", () => {
    expect(player("Adeus").getPlayerTag()).toBe("Adeus")
})

test("Handles non string on player tag", () => {
    expect(player(13)).toBeNull()
})

test("Sends attack to gameboard correctly", () => {
    let mockPlayer = player('Adeus')
    let mockGameboard = gameboard()
    mockGameboard.setShip(3, "A0")

    expect(mockPlayer.sendAttack("A1", mockGameboard)).toEqual(["hit", 0, 1])
})
