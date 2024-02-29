import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import { kitchenTimer } from './sounds.js'


export function countdown() {
    if (!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if (seconds < 0) {
        seconds = 59
        minutes--
    }

    if (minutes < 0) {
        reset()
        kitchenTimer.play()
        return

    }

    updateDiplay(minutes, seconds)

    setTimeout(() => countdown(), 1000)

    console.log('iniciou')
}

export function updateDiplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}