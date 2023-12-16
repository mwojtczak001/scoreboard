const homeScoreEl = document.querySelector('.js-home-element');
const guestScoreEl = document.querySelector('.js-guest-element');
let homeCount = 0;
let guestCount = 0;

function incrementScore (team, increment) {
    if (team === 'home') {
        homeCount += increment;
        homeScoreEl.textContent = homeCount;
    } else if (team === 'guest') {
        guestCount += increment;
        guestScoreEl.textContent = guestCount;
    }
}

function resetGame() {
  console.log('Resetting game');
  homeCount = 0;
  guestCount = 0;
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
}