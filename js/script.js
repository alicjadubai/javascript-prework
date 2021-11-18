//losowanie ruchu komputera

var computerMove, PlayerMove;
PlayerMove = 0;
PlayerMove = (typeof PlayerMove == 'number' ? PlayerMove : 0) + 1;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
PlayerMove = 'Papier';
printMessage('Zagralem' + PlayerMove + '!Jesli Twoj ruch to kamien, to wygrywasz!');

//ustalenie ruchu gracza
var playerInput, playerMove;


1 + 1;

1 + 1;

playerMove;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nozyce';
} else {
  playerMove = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove);
