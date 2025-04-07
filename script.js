var click = 0;
var clickinicial = 1;
var preco1 = 10;
var preco2 = 50;
var points = document.getElementsByClassName('pontos')[0];
var loop = false;

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

function item2() {
  if (click >= preco2 && !loop) {
    click -= preco2;
    preco2 += 100;
    loop = true; // Ativar o loop
    points.innerText = click;
    loopclicker();
  }
}

function loopclicker() {
  if (loop) {
    setTimeout(function () {
      click += clickinicial;
      points.innerText = click;
      loopclicker(); 
    }, 1000);
  }
}
