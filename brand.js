// The name and the cloud beside it take one of the app colours while you
// point at them, and go back to white when you leave. The colour is set on
// the whole brand and the cloud is filled with currentColor, so the two
// always agree.
//
// Random rather than stepping, but never the colour it just had: a true random
// pick repeats about one time in five, and a repeat reads as the effect having
// failed rather than as chance. Both pages load this, so the privacy page
// behaves the same way.
(function () {
  var colours = [
    '#a77ef0', // Music
    '#ff6f84', // Theatre
    '#6fd9a3', // Server
    '#f6c85a', // Pro
    '#63c0ff', // Photos, when there is one
  ];
  var word = document.querySelector('.brand');
  if (!word) return;

  var last = -1;

  function colour() {
    var next = Math.floor(Math.random() * colours.length);
    if (next === last) next = (next + 1) % colours.length;
    last = next;
    word.style.color = colours[next];
  }

  function white() {
    word.style.color = '';
  }

  word.addEventListener('mouseenter', colour);
  word.addEventListener('mouseleave', white);

  // Touch has no hover: a tap colours it, and the next touch anywhere else
  // puts it back, so it cannot be left stuck on one colour.
  word.addEventListener('touchstart', colour, { passive: true });
  document.addEventListener('touchstart', function (e) {
    if (!word.contains(e.target)) white();
  }, { passive: true });
})();
