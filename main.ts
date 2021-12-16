input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.addLife(1)
})
input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    }
    if (sprite.get(LedSpriteProperty.X) != 2) {
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    game.pause()
    basic.showNumber(game.score())
    basic.pause(100)
    game.resume()
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    basic.pause(200)
    if (sprite.isTouchingEdge()) {
        sprite.ifOnEdgeBounce()
    }
    if (sprite.isTouchingEdge()) {
        sprite.turn(Direction.Right, 60)
    }
})
