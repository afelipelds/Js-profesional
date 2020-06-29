function AutoPlay() {}

/** Método que inicia el video */
AutoPlay.prototype.run = function(player) {
    player.mute()
    player.play()
}

export default AutoPlay