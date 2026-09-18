// The wordmark takes a different app's colour every time you point at it.
//
// One step per hover rather than a colour per app or a random pick: stepping
// makes it obvious that it is a set being walked through, and it always lands
// somewhere different from last time. It starts on the green it is painted in
// by the stylesheet, so the first hover is a change.
(function () {
  var colours = [
    '#a77ef0', // Music
    '#ff6f84', // Theatre
    '#f6c85a', // Pro
    '#63c0ff', // Photos, when there is one
    '#6fd9a3', // Server, and where it started
  ];
  var word = document.querySelector('.wordmark');
  if (!word) return;

  var at = -1;
  word.addEventListener('mouseenter', function () {
    at = (at + 1) % colours.length;
    word.style.color = colours[at];
  });

  // Touch has no hover, so a tap does the same thing rather than nothing.
  word.addEventListener('click', function () {
    at = (at + 1) % colours.length;
    word.style.color = colours[at];
  });
})();
