let sound = input.soundLevel()
input.setSoundThreshold(SoundThreshold.Loud, 128)
basic.forever(function () {
    if (sound > 128) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        TPBot.setTravelTime(TPBot.DriveDirection.Right, randint(25, 80), 0.5)
        TPBot.setTravelTime(TPBot.DriveDirection.Forward, 52, 1)
        music.stopAllSounds()
    }
})
