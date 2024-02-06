function getRandomInt(max) {
  return Math.floor(Math.random() * 11) + 1;
}

var Card1 = getRandomInt();
var Card2 = getRandomInt();
var Card3 = getRandomInt();
var Card4 = getRandomInt();
var sum = Card1 + Card2;
var user_input;

alert("Tu suma actual es " + sum);
user_input = prompt("¿Deseas otra carta? Escribe 'si' o 'no'").toLowerCase();

while (sum <= 21 && user_input === "si") {
 
  if (user_input === "si") {
      
      sum += Card3;
      alert("Tu suma actual es " + sum);

      if (sum <= 21) {
          user_input = prompt("¿Deseas otra carta? Escribe 'si' o 'no'").toLowerCase();

          if (user_input === "si") {
              
              sum += Card4;
          }
      } else {
          alert("Tus cartas suman 21 o más, o has utilizado las 4 cartas");
      }
  }
}

alert("El juego ha terminado. Tu suma final es: " + sum);
