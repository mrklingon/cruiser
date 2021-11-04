input.onButtonPressed(Button.A, function () {
    cruiser.turn(Direction.Left, 345)
})
input.onButtonPressed(Button.AB, function () {
    power = 15
})
input.onButtonPressed(Button.B, function () {
    cruiser.turn(Direction.Left, 15)
})
let power = 0
let cruiser: game.LedSprite = null
cruiser = game.createSprite(2, 2)
cruiser.ifOnEdgeBounce()
power = 5
basic.forever(function () {
    if (power > 0) {
        cruiser.move(1)
        cruiser.ifOnEdgeBounce()
        power += -1
        basic.pause(100)
    }
})
