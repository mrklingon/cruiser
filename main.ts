input.onButtonPressed(Button.A, function () {
    cruiser.turn(Direction.Right, 45)
})
input.onButtonPressed(Button.AB, function () {
    missle = game.createSprite(cruiser.get(LedSpriteProperty.X), cruiser.get(LedSpriteProperty.Y))
    missle.set(LedSpriteProperty.Direction, cruiser.get(LedSpriteProperty.Direction))
    for (let index = 0; index < 5; index++) {
        missle.move(1)
        basic.pause(50)
        if (missle.isTouching(enemy)) {
            enemy.delete()
            game.addScore(50)
            enemy = game.createSprite(4, 4)
        }
    }
    missle.delete()
})
input.onButtonPressed(Button.B, function () {
    power = 15
})
let missle: game.LedSprite = null
let enemy: game.LedSprite = null
let power = 0
let cruiser: game.LedSprite = null
images.createBigImage(`
    . . . . . . . # . .
    . . . . # . . . . .
    . . # # # . . . . .
    . # # # # . . # . .
    . . . . . . . . . #
    `).scrollImage(1, 200)
cruiser = game.createSprite(2, 2)
cruiser.ifOnEdgeBounce()
power = 5
enemy = game.createSprite(4, 4)
basic.forever(function () {
    if (power > 0) {
        cruiser.move(1)
        cruiser.ifOnEdgeBounce()
        power += -1
        basic.pause(100)
    }
})
basic.forever(function () {
    enemy.turn(Direction.Right, 45)
    enemy.move(1)
    enemy.turn(Direction.Right, randint(0, 10))
    if (enemy.isTouching(cruiser)) {
        game.removeLife(1)
    }
    basic.pause(200)
})
