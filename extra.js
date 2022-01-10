/*<hidden-for-student@*/
// Ver https://github.com/MumukiProject/mumuki-apendice-imperativa-javascript/blob/master/biblioteca.js

// =============
// Lección 1 y 2
// =============
/*@hidden-for-student>*/

function longitud(unString) /*<elipsis-for-student@*/ {
  return unString.length;
} /*@elipsis-for-student>*/
// Retorna cuan largo es un string
//
// Por ejemplo:
//
//  ム longitud("hola")
//  4


function convertirEnMayuscula(unString) /*<elipsis-for-student@*/ {
  return unString.toUpperCase()
} /*@elipsis-for-student>*/
// Convierte una palabra en mayúsculas
//
// Por ejemplo:
//
//  ム convertirEnMayuscula("hola")
//  "HOLA"


function comienzaCon(unString, otroString) /*<elipsis-for-student@*/ {
  return unString.startsWith(otroString);
} /*@elipsis-for-student>*/
// Retorna un booleano que nos dice si unString empieza con otroString
//
// Por ejemplo:
//
//  ム comienzaCon("hola todo el mundo", "hola todo")
//  true

/*<hidden-for-student@*/
// ==============
// Lección 3 y 4
// ==============
/*@hidden-for-student>*/

/*<hidden-for-student@*/
var fakeConsole;

function setUpFakeConsole() {
  fakeConsole = {
    lines: [],
    log: function(line) {
      this.lines.push(line + "\n");
      console.log(line);
    },
    toString: function() {
      return String.prototype.concat.apply([], this.lines);
    }
  };
}

function setUpRealConsole() {
  fakeConsole = console;
}

setUpFakeConsole();
/*@hidden-for-student>*/

function imprimir(unString) /*<elipsis-for-student@*/ {
  fakeConsole.log(unString)
} /*@elipsis-for-student>*/
// Imprime por pantalla unString
//
// Por ejemplo:
//
//  ム imprimir("¡estoy imprimiendo!")
//  ¡estoy imprimiendo!


function tirarDado() /*<elipsis-for-student@*/ {
  return Math.floor(Math.random() * 6) + 1
} /*@elipsis-for-student>*/
// Retorna un número al azar entre 1 y 6
//
// Por ejemplo:
//
//  ム tirarDado()
//  5
//  ム tirarDado()
//  1
//  ム tirarDado()
//  2