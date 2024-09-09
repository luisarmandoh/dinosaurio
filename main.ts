let piesd = game.createSprite(0, 4)
let cabezad = game.createSprite(0, 3)
piedra2()
basic.forever(function () {
    let pajaro: game.LedSprite = null
    let piedra: game.LedSprite = null
    if (piedra.isTouchingEdge()) {
        basic.pause(1000)
        piedra.delete()
        pajaro()
    } else if (pajaro.isTouchingEdge()) {
        basic.pause(1000)
        pajaro.delete()
        piedra2()
    }
})
