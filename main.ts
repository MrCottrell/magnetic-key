let magnetic = 0
basic.forever(function () {
    magnetic = input.magneticForce(Dimension.Strength)
    if (magnetic > 200) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
