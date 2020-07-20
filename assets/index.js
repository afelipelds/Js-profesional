import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

/** Declaraciones */
const video = document.querySelector('video')
const playButton = document.getElementById('playButton')
const muteButton = document.getElementById('muteButton')


const player = new MediaPlayer( { element: video, plugins: [new AutoPlay()] })

playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()
