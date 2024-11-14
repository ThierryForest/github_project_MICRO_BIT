input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
})
basic.clearScreen()
basic.showArrow(ArrowNames.North)
basic.showArrow(ArrowNames.NorthEast)
basic.showArrow(ArrowNames.East)
basic.showArrow(ArrowNames.SouthEast)
basic.clearScreen()
basic.forever(function () {
    led.plot(2, 0)
})
