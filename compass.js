let degrees = 0
function doSomething()  {
	
}
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    degrees = input.compassHeading()
    basic.showNumber(input.compassHeading())
    basic.showString("|")
})
