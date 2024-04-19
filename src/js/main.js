// 1
console.log('Ejercico 1');
const num1 = 2;
const num2 = 4;
console.log(num1+num2);

// 2
console.log('Ejercico 2');
const simpleString1 = 'Hola';
const simpleString2 = 'Mundo';
console.log(simpleString1, simpleString2);

// 3
console.log('Ejercico 3');
const stringUsingString1 = String("JavaScript");
const stringUsingString2 = String("Ejercicio")
console.log(stringUsingString1, stringUsingString2);

// 4
console.log('Ejercico 4');
const stringUsingNewString1 = new String("Concatenar");
const stringUsingNewString2 = new String("Strings");
console.log(stringUsingNewString1, stringUsingNewString2);

// 5
console.log('Ejercico 5');
console.log(simpleString1.indexOf("l"));

// 6
console.log('Ejercico 6');
console.log(simpleString2.includes("ndo"));

// 7
console.log('Ejercico 7');
console.log(simpleString1.concat(" ", simpleString2));

// 8
console.log('Ejercico 8');
console.log(simpleString1 + " " + simpleString2);

// 9
console.log('Ejercico 9');
console.log(`${simpleString1} ${simpleString2}`);

// 10
console.log('Ejercico 10');
const stringWithSpaces1 = " TrimStart";
const stringWithSpaces2 = "TrimEnd ";

console.log(stringWithSpaces1.trimStart());
console.log(stringWithSpaces2.trimEnd());

// 11
console.log('Ejercico 11');
console.log(simpleString1.replace("o","i"));

// 12
console.log('Ejercico 12');
console.log(simpleString2.slice(0,3));

// 13
console.log('Ejercico 13');
console.log(simpleString2.substring(2));

// 14
console.log('Ejercico 14');
console.log(simpleString1.repeat(2));

// 15
console.log('Ejercico 15');
const oracion = "Esto es una oración de ejemplo"
console.log(oracion.split(' '));

// 16
console.log('Ejercico 16');
console.log(simpleString2.toLocaleUpperCase());

// 17
console.log('Ejercico 17');
console.log(simpleString1.toLocaleLowerCase());

// 18
console.log('Ejercico 18');
const booleana  = true;
console.log(typeof(booleana));

// 19
console.log('Ejercico 19');
const arreglo  = [1,2,3];
console.log(arreglo.length);

// 20
console.log('Ejercico 20');
const objeto = {
    carro: 'Mercedes',
    moto: "Honda",
    Avion: "Airbus"
}; 
console.log(typeof(objeto));

// 21
console.log('Ejercico 21');
const nulo = null;
console.log(typeof(nulo));

// 22
console.log('Ejercico 22');
const indefinido  = undefined;
console.log(typeof(indefinido));

// 24
console.log('Ejercico 24');
const decimal = 2.56;
console.log(typeof(decimal ));

// 25
console.log('Ejercico 25');
const negativo = -2.56;
console.log(typeof(negativo)) ;

// 26
console.log('Ejercico 26');
console.log("casa".indexOf("a"));

// 27
console.log('Ejercico 27');
console.log("Hola".concat(" ", "Mundo"));

// 28
console.log('Ejercico 28');
console.log("Hola" + " " + "Mundo");

// 29
console.log('Ejercico 29');
console.log(`Hola Mundo`);

// 30
console.log('Ejercico 30');
const cadenaConEspacios  = " Ejemplo con espacios ";

console.log(cadenaConEspacios.trimStart());
console.log(cadenaConEspacios.trimEnd());

// 31
console.log('Ejercico 31');
console.log("El cielo es azul".replace("azul", "rojo"));

// 32
console.log('Ejercico 32');

// 33
console.log('Ejercico 33');
console.log("Programación".slice(8));

// 34
console.log('Ejercico 34');
console.log("Hola".repeat(3));

// 35
console.log('Ejercico 35');
console.log("Esto es una oración de ejemplo".split(" "));

// 36
console.log('Ejercico 36');
console.log("Javascript".toUpperCase());

// 37
console.log('Ejercico 37');
console.log("Javascript".toLowerCase());

// 38
console.log('Ejercico 38');
const numero = 2;
console.log(typeof(numero));

// 39
console.log('Ejercico 39');
const booleana2  = false;
console.log(typeof(booleana2));

// 40
console.log('Ejercico 40');
const arreglo2  = [1,2,3,4,5,6];
console.log(arreglo2.length);

// 41
console.log('Ejercico 41');
const objeto2 = {
    carro: 'Mercedes',
    moto: "Honda",
    Avion: "Airbus",
    Camion: "Volvo"
}; 
console.log(typeof(objeto2));

// 42
console.log('Ejercico 42');
const nulo2 = null;
console.log(typeof(nulo2));

// 43
console.log('Ejercico 43');
let indefinido2;
console.log(typeof(indefinido2));

// 24
console.log('Ejercico 24');
const decimal2 = 6.56;
console.log(typeof(decimal2));
