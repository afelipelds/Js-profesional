function AutoPlay() {}

/** Método que inicia el video */
AutoPlay.prototype.run = function(player) {
    if(!player.muted) {
        player.muted = true  /** Esto es un Setter. Se asigna un valor virtual para trabajar con Getter  */
    }
    
    // player.mute()
    player.play()
}

export default AutoPlay