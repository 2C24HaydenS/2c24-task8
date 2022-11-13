input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() < 180) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 218, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    }
    basic.showString("" + (input.compassHeading()))
})
