basic.forever(function () {
    if (input.compassHeading() <= 45 && input.compassHeading() >= 0 || input.compassHeading() >= 315 && input.compassHeading() <= 360) {
        basic.showString("N")
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else if (input.compassHeading() <= 135 && input.compassHeading() >= 45) {
        basic.showString("E")
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 2960, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else if (input.compassHeading() >= 135 && input.compassHeading() <= 225) {
        basic.showString("S")
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 4075, 1890, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else if (input.compassHeading() >= 225 && input.compassHeading() <= 315) {
        basic.showString("W")
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1310, 2514, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    }
})
