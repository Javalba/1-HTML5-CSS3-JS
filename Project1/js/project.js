// function removeTransition(e) {
//   if (e.propertyName !== 'transform') return;
//   e.target.classList.remove('playing');
// }

function playSound(key) {
  let keyCode;
  if (key.keyCode) {
    keyCode = key.keyCode; // keydown event call
  } else {
    keyCode = key; // playKey function call
  }
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  if (!audio) return;
  audio.play();
}

function playKey(e) {
  let attribute = this.getAttribute("data-key");
  playSound(attribute);
}

const keys = Array.from(document.querySelectorAll('.key'));
//keys.forEach(key => key.addEventListener('keydown', playSound));

keys.forEach(function(key) {
  console.log(key, '......');
  key.addEventListener('click', playKey);
});
window.addEventListener('keydown', playSound);
