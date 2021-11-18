var computerMove, PlayerMove;
PlayerMove = 0;
PlayerMove = (typeof PlayerMove == 'number' ? PlayerMove : 0) + 1;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
PlayerMove = 'Papier';
printMessage('Zagralem' + PlayerMove + '!Jesli Twoj ruch to kamien, to wygrywasz!');
