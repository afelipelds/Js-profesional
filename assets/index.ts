import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'

const video = document.querySelector('video')
const playButton: HTMLElement = document.getElementById('playButton')
const muteButton: HTMLElement = document.getElementById('muteButton')


const player = new MediaPlayer( 
    { 
        element: video, 
        plugins: [new AutoPlay(), new AutoPause(), new Ads()],
    }
)

playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()

/** Service Worker */
if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('../sw.js')
        .then( registration => {
            // console.log('service worker registration succeeded: ', registration)
        })
        .catch( error => {
        console.log('service worker error :',error.message)
    })
} else {
    console.log('Service Workers are not supported in this browser.');
}