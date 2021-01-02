import MediaPlayer from '../MediaPlayer';

class AutoPlay {
    constructor() { }
    /** Método que inicia el video */
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true /** Esto es un Setter. Se asigna un valor virtual para trabajar con Getter  */
        }

        // player.mute()
        player.play()
    }
}


export default AutoPlay