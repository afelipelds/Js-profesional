/** Clase  MediaPlayer */
function MediaPlayer(config) {
    this.media = config.element
    this.plugins = config.plugins || []

    /** inicializaciones */
    this._initPlugins()
}

/** Plugins */
MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach( plugin => {
        plugin.run(this)  // This se refiere a la instancia del MediaPlayer
    });
}

/** Método  Play */
MediaPlayer.prototype.play = function() {
    this.media.play()
}
/** Método  Pause */
MediaPlayer.prototype.pause = function() {
    this.media.pause()
}
/** Método  tooglePlay */
MediaPlayer.prototype.togglePlay = function() {
    this.media.paused ? this.play() : this.pause()
}

/** Método  mute */
MediaPlayer.prototype.mute = function() {
    this.media.muted = true
    console.log('muted')
}
/** Método  unmute */
MediaPlayer.prototype.unmute = function() {
    this.media.muted = false
    console.log('unmuted')
}
/** Método  toogleMute */
MediaPlayer.prototype.toggleMute = function() {
    this.media.muted ? this.unmute() : this.mute()
}

export default MediaPlayer