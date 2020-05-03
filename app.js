// State (running / not running) of each timer (A, B, and C) defaults to false on page load:
let aRunning = false;
let bRunning = false;
let cRunning = false;

// Time remaining on each timer. (Defaults to zero on page load.)
let aTimeRemaining = 0;
let bTimeRemaining = 0;
let cTimeRemaining = 0;

// Set which timer (A, B, or C) is being controlled by the buttons:
let activeTimer = 'a'; // Default to "A" timer on page load.

const timer = {
  adjustTimer: (activeTimer) {
    activeTimer;
  },
  // Invoked when "Start" is clicked.
  startTimer: () {
    // Checks which timer is active (A, B, or C):
    switch(activeTimer) {
      case 'a':
        // Only starts that timer if it isn't already running:
        if (!aRunning) {
          timer.timerA();
        }
        break;
      case 'b':
        timer.timerB();
        break;
      case 'c':
        timer.timerC();
        break;
    }
  },
  stopTimer: () => {
    switch(activeTimer) {
      case 'a':
        // Only stop the timer if it's running:
        if (aRunning) {
          aRunning = false;
          clearInterval(); // Whatever the name of timerA's interval is.
          timer.updateDisplays();
        } else {
          // Otherwise, reset the active timer to zero:
          timer.clearTimer(activeTimer);
        }
        break;
      case 'b':
        break;
      case 'c':
        break;
    }
  },
  clearTimer(activeTimer) {
    switch(activeTimer) {
      case 'a':
        // Only clear the timer if it's not already zero:
        if (aTimeRemaining > 0) {
          aTimeRemaining = 0;
          timer.updateDisplays();
        }
        break;
    }
  },
  timerA: () => {
    // Checks that timer has at least 1 second or it won't continue.
    if (aTimeRemaining >= 1000) {
      aRunning = true;
      totalTimer = aTimeRemaining;
      // Starts a setTimeout and stores it in a variable.
      const aCountdown = setInterval(function() {

      }, totalTimer);
      // The setTimeout updates aTimeRemaining once per second.
    }
  },
  timerB: () => {

  },
  timerC: () => {

  },
  // While one or more timers are running, this function gets called once per second:
  updateDisplays: () => {
    // IF one or more timers are RUNNING, sets an interval that runs once per second:
    // Gets the time of each timer.
    // Converts milliseconds into hours, minutes, and seconds.
    // Updates their respective displays.
    // If none of the timers are running, it just performs the above actions once and then stops.
  },
  init: () => {
    timer.updateDisplays(); // Show zeroes in all timers on pageload.
    // Add event listeners to all buttons. (-, +, Start, Stop/Clear, Radio Buttons.)
    // Add event listeners to timers A, B, and C (so user can click them to point the controls to them).
  }
}

timer.init();