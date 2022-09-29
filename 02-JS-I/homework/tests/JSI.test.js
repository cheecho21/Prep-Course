/* eslint-disable no-undef */
const {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
} = require('../homework.js');

const nuevaString = 'Hola'
describe('nuevaString', function() {
  it('Deberia ser un string', function() {
    expect(typeof nuevaString).toBe('string');
  });
});

const nuevoNum = 8;
describe('nuevoNum', function() {
  it('Deberia ser un numero', function() {
    expect(typeof nuevoNum).toBe('number');
  });
});

const nuevoBool = true
describe('nuevoBool', function() {
  it('Deberia ser un booleano', function() {
    expect(typeof nuevoBool).toBe('boolean');
  });
});

const nuevaResta = 10 - 5 === 5; 
describe('nuevaResta', function() {
  it('Deberia ser un booleano', function() {
    expect(nuevaResta).toBe(true);
  });
});

const nuevaMultiplicacion = 10 * 3 === 30;
describe('nuevaMultiplicacion', function() {
  it('Deberia ser un booleano', function() {
    expect(nuevaMultiplicacion).toBe(true);
  });
});

const nuevoModulo = 21 % 5 === 1;
describe('nuevoModulo', function() {
  it('Deberia ser un booleano', function() {
    expect(nuevoModulo).toBe(true);
  });
});

function devolverString(str) {
  return str
}
describe('devolverString(str)', function() {
  it('Deberia devolver el string provisto', function() {
    let string = 'Henry';
    expect(devolverString(string)).toBe(string);
  });
});

function suma(x, y){
  return x + y; 
}
describe('suma(x, y)', function() {
  it('Deberia devolver la suma de los dos argumentos', function() {
    expect(suma(5, 5)).toBe(10);
    expect(suma(-1, 5)).toBe(4);
  });
});

function resta(x, y){
  return x - y
}
describe('resta(x, y)', function() {
  it('Deberia devolver la diferencia de los dos argumentos', function() {
    expect(resta(5, 5)).toBe(0);
    expect(resta(-1, 5)).toBe(-6);
    expect(resta(5, -5)).toBe(10);
    expect(resta(0, 0)).toBe(0);
  });
});

function divide(x, y){
  return x / y
}
describe('divide(x, y)', function() {
  it('Deberia devolver la division de los dos argumentos', function() {
    expect(divide(5, 5)).toBe(1);
    expect(divide(10, 5)).toBe(2);
    expect(divide(11, 2)).toBe(5.5);
  });
});

function multiplica(x, y){
  return x * y
}
describe('multiplica(x, y)', function() {
  it('Deberia devolver el producto de los dos argumentos', function() {
    expect(multiplica(5, 5)).toBe(25);
    expect(multiplica(10, -5)).toBe(-50);
    expect(multiplica(11, 0)).toBe(0);
  });
});

function sonIguales(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}
describe('sonIguales(x, y)', function() {
  it('Deberia devolver true si los argumentos son iguales y sino false', function() {
    expect(sonIguales(15, 15)).toBe(true);
    expect(sonIguales(90, 50)).toBe(false);
    expect(sonIguales('test', 'test')).toBe(true);
  });
});
function tienenMismaLongitud(str1, str2) {
  if (str1, str2) {
    return true;
    } else {
      return false;
    }
}
describe('tienenMismaLongitud(str1, str2)', function() {
  it('Deberia devolver true si los strings tienen la misma longitud y sino false', function() {
    expect(tienenMismaLongitud('hi', 'there')).toBe(false);
    expect(tienenMismaLongitud('javascript', 'bumfuzzled')).toBe(true);
  });
});
function menosQueNoventa(num) {
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}
describe('menosQueNoventa(num)', function() {
  it('Deberia devolver true si el numero es menor a noventa sino false', function() {
    expect(menosQueNoventa(15)).toBe(true);
    expect(menosQueNoventa(90)).toBe(false);
    expect(menosQueNoventa(100)).toBe(false);
  });
});

function mayorQueCincuenta(num){
  if (num > 50) {
    return true
  } else {
    return false;
  }
}
  
describe('mayorQueCincuenta(num)', function() {
  it('Deberia devolver true si el numero es mayor a cincuenta sino false', function() {
    expect(mayorQueCincuenta(15)).toBe(false);
    expect(mayorQueCincuenta(50)).toBe(false);
    expect(mayorQueCincuenta(60)).toBe(true);
  });
});

function obtenerResto(x, y){
  return x % y
}
describe('obtenerResto(x, y)', function() {
  it('Deberia devolver el resto de dividir x sobre y', function() {
    expect(obtenerResto(15, 5)).toBe(0);
    expect(obtenerResto(21, 5)).toBe(1);
    expect(obtenerResto(22, 5)).toBe(2);
  });
});

function esPar(num) {
  if( num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
describe('esPar(num)', function() {
  it('Deberia devolver true si el numero es par sino false', function() {
    expect(esPar(6)).toBe(true);
    expect(esPar(7)).toBe(false);
    expect(esPar(0)).toBe(true);
  });
});

function esImpar(num) {
  if( num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
describe('esImpar(num)', function() {
  it('Deberia devolver true si el numero es impar sino false', function() {
    expect(esImpar(6)).toBe(false);
    expect(esImpar(7)).toBe(true);
    expect(esImpar(0)).toBe(false);
  });
});

function elevarAlCuadrado(num) {
  return Math.pow(num, 2);

}
describe('elevarAlCuadrado(num)', function() {
  it('Deberia devolver el numero elevado al cuadrado', function() {
    expect(elevarAlCuadrado(6)).toBe(36);
    expect(elevarAlCuadrado(7)).toBe(49);
    expect(elevarAlCuadrado(0)).toBe(0);
    expect(elevarAlCuadrado(-5)).toBe(25);
  });
});

function elevarAlCubo(num) {
  return num * num * num;
}
describe('elevarAlCubo(num)', function() {
  it('Deberia devolver el numero elevado al cubo', function() {
    expect(elevarAlCubo(3)).toBe(27);
    expect(elevarAlCubo(0)).toBe(0);
    expect(elevarAlCubo(-5)).toBe(-125);
  });
});

function elevar(num, exponent){
  return Math.pow(num, exponent);
}
describe('elevar(num, exponent)', function() {
  it('Deberia devolver el numero elevado al exponente indicado', function() {
    expect(elevar(2, 2)).toBe(4);
    expect(elevar(2, 3)).toBe(8);
    expect(elevar(0, 5)).toBe(0);
    expect(elevar(10, 1)).toBe(10);
  });
});

function redondearNumero(num) {
  return Math.round(num);
}
describe('redondearNumero(num)', function() {
  it('Deberia devolver el numero redondeado', function() {
    expect(redondearNumero(1.5)).toBe(2);
    expect(redondearNumero(2)).toBe(2);
    expect(redondearNumero(0.1)).toBe(0);
  });
});
function redondearHaciaArriba(num) {
  return Math.ceil(num);
}
describe('redondearHaciaArriba(num)', function() {
  it('Deberia devolver el numero redondeado para arriba', function() {
    expect(redondearHaciaArriba(1.5)).toBe(2);
    expect(redondearHaciaArriba(2)).toBe(2);
    expect(redondearHaciaArriba(0.1)).toBe(1);
  });
});

function numeroRandom() {
return Math.random;
}
describe('numeroRandom()', function() {
  it('Debería devolver un número entre 0 y 1', function() {
    expect(typeof numeroRandom()).toBe('number');
    expect(numeroRandom()).toBeGreaterThanOrEqual(0);
    expect(numeroRandom()).toBeLessThan(1);
  });
});
function esPositivo(numero) {
  if (numero === 0) {
    return false;
  } else if(nuemero > 0) {
    return "es positivo";
  } else {
    return "es negativo";
  }
}
describe('esPositivo(numero)', function() {
  it('Debería devolver el string \Es positivo ó Es negativo\ según corresponda', function() {
    expect(esPositivo(0)).toBe(false);
    expect(esPositivo(23)).toBe('Es positivo');
    expect(esPositivo(-2)).toBe('Es negativo');
  });
});

function agregarSimboloExclamacion(str) {
  return str + '!';
}
describe('agregarSimboloExclamacion(str)', function() {
  it('Deberia agregar un signo de exclamacion al final del string', function() {
    expect(agregarSimboloExclamacion('hello world')).toBe('hello world!');
    expect(agregarSimboloExclamacion('Soy Henry')).toBe('Soy Henry!');
  });
});
function combinarNombres(nombre, apellido){
  var combinado = nombre + ' ' + apeliido;
  return combinado;
}
describe('combinarNombres(firstName, lastName)', function() {
  it('Deberia devolver los strings combinados con un espacio en el medio', function() {
    expect(combinarNombres('hello', 'world')).toBe('hello world');
    expect(combinarNombres('Soy', 'Henry')).toBe('Soy Henry');
  });
});

function obtenerSaludo(nombre){
  return 'hola ' + nombre + '!';
}
describe('obtenerSaludo(name)', function() {
  it('Deberia devolver el string \'Hola {name}!\'', function() {
    expect(obtenerSaludo('Martin')).toBe('Hola Martin!');
    expect(obtenerSaludo('Antonio')).toBe('Hola Antonio!');
  });
});
function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho;
}
describe('obtenerAreaRectangulo(alto, ancho)', function() {
  it('Deberia retornar el area correcta del rectangulo', function() {
    expect(obtenerAreaRectangulo(2, 2)).toBe(4);
    expect(obtenerAreaRectangulo(3, 6)).toBe(18);
    expect(obtenerAreaRectangulo(0, 2)).toBe(0);
  });
});

function retornarPerimetro(lado){
  return lado * 4
}
describe('retornarPerimetro(lado)', function() {
  it('Deberia retornar el perímetro correcto del cuadrado', function() {
    expect(retornarPerimetro(2)).toBe(8);
    expect(retornarPerimetro(8)).toBe(32);
    expect(retornarPerimetro(0)).toBe(0);
  });
});

function areaDelTriangulo(base, altura) {
  return (base * altura)/2
}
describe('areaDelTriangulo( base, altura)', function() {
  it('Deberia retornar el area correcta del triángulo', function() {
    expect(areaDelTriangulo(10, 5)).toBe(25);
    expect(areaDelTriangulo(20, 10)).toBe(100);
    expect(areaDelTriangulo(0, 10)).toBe(0);
  });
});

function deEuroAdolar(euro) {
  return euro * 1.2
}
describe('deEuroAdolar(euro)', function() {
  it('Deberia retornar el valor correcto de euro a dolar', function() {
    expect(deEuroAdolar(100)).toBe(120);
    expect(deEuroAdolar(200)).toBe(240);
    expect(deEuroAdolar(50)).toBe(60);
  });
});
function esVocal(letra) {
  if(letra.lenght > 1){
    return "Dato incorrecto"
  }
  if(letra === a || letra === e || letra === i || letra === o || letra === u){
    return "Es vocal"
  }
  return "Dato incorrecto"
}
describe('esVocal(letra)', function() {
  it('Deberia devolver el string "Dato incorrecto", si el valor ingresado tiene más de una letra', function() {
    expect(esVocal("la")).toBe("Dato incorrecto");
    expect(esVocal("pero")).toBe("Dato incorrecto");
  });
  it('Deberia devolver el string "Dato incorrecto", si el valor ingresado no es vocal', function() {
    expect(esVocal("l")).toBe("Dato incorrecto");
    expect(esVocal("p")).toBe("Dato incorrecto");
  });
  it('Deberia devolver el string "Es vocal", si el valor ingresado lo es', function() {
    expect(esVocal('a')).toBe('Es vocal');
    expect(esVocal('e')).toBe('Es vocal');
    expect(esVocal('i')).toBe('Es vocal');
    expect(esVocal('o')).toBe('Es vocal');
    expect(esVocal('u')).toBe('Es vocal');
  });
})
