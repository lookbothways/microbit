let light = 0
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    light = input.lightLevel()
    for (let i = 0; i < 1; i++) {
        if (light < 1) {
            basic.showLeds(`
                . # . # .
                # # # # #
                # # # # #
                . # # # .
                . . # . .
                `)
        } else {
            led.plotBarGraph(
            input.lightLevel(),
            255
            )
        }
    }
})
