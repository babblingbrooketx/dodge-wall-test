let tilt = 0
let score = 0
let time = 0
let pongle = game.createSprite(2, 4)
let wall = [game.createSprite(Math.randomRange(0, 4), 0), game.createSprite(Math.randomRange(0, 4), 0), game.createSprite(Math.randomRange(0, 4), 0), game.createSprite(Math.randomRange(0, 4), 0)]
basic.pause(3000)
// main game loop
basic.forever(function () {
    // wall fall
    basic.pause(500 - time)
    while (wall[0].get(LedSpriteProperty.Y) != 4) {
        wall[0].change(LedSpriteProperty.Y, 1)
        wall[1].change(LedSpriteProperty.Y, 1)
        wall[2].change(LedSpriteProperty.Y, 1)
        wall[3].change(LedSpriteProperty.Y, 1)
        if (pongle.isTouching(wall[0]) || pongle.isTouching(wall[1]) || pongle.isTouching(wall[2]) || pongle.isTouching(wall[3])) {
            game.gameOver()
        }
        basic.pause(500 - time)
    }
    wall[0].set(LedSpriteProperty.Y, 0)
    wall[0].set(LedSpriteProperty.X, Math.randomRange(0, 4))
    wall[1].set(LedSpriteProperty.Y, 0)
    wall[1].set(LedSpriteProperty.X, Math.randomRange(0, 4))
    wall[2].set(LedSpriteProperty.Y, 0)
    wall[2].set(LedSpriteProperty.X, Math.randomRange(0, 4))
    wall[3].set(LedSpriteProperty.Y, 0)
    wall[3].set(LedSpriteProperty.X, Math.randomRange(0, 4))
    score += 1
    game.setScore(score)
    time += 10
})
// controller
basic.forever(function () {
    tilt = input.rotation(Rotation.Roll)
    if (tilt >= -180 && tilt <= -15) {
        pongle.set(LedSpriteProperty.X, 0)
    } else if (tilt > -15 && tilt <= -5) {
        pongle.set(LedSpriteProperty.X, 1)
    } else if (tilt > -5 && tilt <= 5) {
        pongle.set(LedSpriteProperty.X, 2)
    } else if (tilt > 5 && tilt <= 15) {
        pongle.set(LedSpriteProperty.X, 3)
    } else {
        pongle.set(LedSpriteProperty.X, 4)
    }
})
