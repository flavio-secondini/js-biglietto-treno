var anni = prompt('Quanti anni hai?');

var distanza = prompt('Per quanti chilometri devi viaggiare?');

if (anni < 18) {
  document.getElementById('risultato').innerHTML = distanza * 0.21 - (distanza * 0.21 * 0.2);
} else if (anni > 65) {
  document.getElementById('risultato').innerHTML = distanza * 0.21 - (distanza * 0.21 * 0.4);
} else {
  document.getElementById('risultato').innerHTML = distanza * 0.21;
}
