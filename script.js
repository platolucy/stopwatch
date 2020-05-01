// A "Reset" button to reset the time back to 0.
// The time display to show the number of seconds elapsed, rather than the actual time.

const secondsElement = document.getElementById('seconds-elapsed')
let seconds = 0
let interval;

function displaySeconds() {
    secondsElement.innerText = seconds
}

// A "Start" button to start the stopwatch running.
document.getElementById('start').onclick = function() {
    interval = setInterval(function() {
        seconds++
        displaySeconds()
    }, 1000);
}

// A "Stop" button to pause/stop it.
document.getElementById('stop').onclick = function() {
    //make intervals stop
    clearInterval(interval);
}