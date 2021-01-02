import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

/** Declaraciones */
const video = document.querySelector('video')
const playButton = document.getElementById('playButton')
const muteButton = document.getElementById('muteButton')


const player = new MediaPlayer( 
    { 
        element: video, 
        plugins: [new AutoPlay(), new AutoPause()],
    }
)

playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()

/** Service Worker */
if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('../sw.js')
        .then( registration => {
            console.log('service worker registration succeeded: ', registration)
        })
        .catch( error => {
        console.log('service worker error :',error.message)
    })
} else {
    console.log('Service Workers are not supported in this browser.');
}