interface ConfigParams { 
    element: HTMLMediaElement; 
    plugins: Array<any>; 
}

class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config: ConfigParams) {
        this.media = config.element
        this.plugins = config.plugins || []
        this.initPlayer()
        this.initPlugins()
    }

    initPlayer() {
        this.container = document.createElement("div");
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this) // This se refiere a la instancia del MediaPlayer
        })
    }
    /** Método  Play */
    play() {
        this.media.play()
    }
    /** Método  Pause */
    pause() {
        this.media.pause()
    }
    /** Método  tooglePlay */
    togglePlay() {
        this.media.paused ? this.play() : this.pause()
    }
    /** Método  mute */
    mute() {
        this.media.muted = true
        console.log('muted')
    }
    /** Método  unmute */
    unmute() {
        this.media.muted = false
        console.log('unmuted')
    }
    /** Método  toogleMute */
    toggleMute() {
        this.media.muted ? this.unmute() : this.mute()
    }
}


export default MediaPlayer