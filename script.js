var click = 0;
var clickinicial = 1;
var preco1 = 10;
var preco2 = 50;
var points = document.getElementsByClassName('pontos')[0]; 
var loop = false;
var preco3 = 500;
var loop1 = false;
var musicacarlos = document.getElementsByClassName('musica'); 

function on() {
  var caixa = document.getElementsByClassName('caixa')[0]; 
  caixa.style.opacity = '1';
}

function off() {
  var caixa = document.getElementsByClassName('caixa')[0]; 
  caixa.style.opacity = '0';
}

function botaoclick() {
  click += clickinicial;
  points.innerText = click; 
}

function item1() {
  if (click >= preco1) {
    clickinicial += 1;
    click -= preco1;
    preco1 += 50;
    points.innerText = click; 
  }
}
