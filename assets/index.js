const video = document.querySelector('video')
const playButton = document.getElementById('playButton')
// const muteButton = document.getElementById('muteButton')

/** Clase  MediaPlayer */
function MediaPlayer(config) {
    this.media = config.element
}

/** Método  Play */
MediaPlayer.prototype.play = function() {
    this.media.play()
    console.log('its playing')
}

/** Método  Pause */
MediaPlayer.prototype.pause = function() {
    this.media.pause()
    console.log('its pause')
}

const player = new MediaPlayer( { element: video })
playButton.onclick = () => video.paused ? player.play() : player.pause()
