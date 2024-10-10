//Tipos de datos primitivos:
let cadena = "Hola, esto es una variable de tipo string";
console.log(cadena);

let numero = 23;
console.log(numero);

let boolean = true;
console.log(boolean);

let nulo = null;
console.log(nulo);

let tipoundefined;
console.log(tipoundefined);

//Tipos de datos no primitivos (objetos):
const articulo = {name:"lapiz", price:350, category:"material de dibujo"};
console.log(articulo);

const array1 = ["España", "Ecuador", "Alemania"];
console.log(array1);

//Variables:
let colorfavorito = "Verde";
colorfavorito = colorfavorito+" negro"
console.log(colorfavorito)

//Declaración de variables:
let novalor;
let valornull = null;
console.log(novalor + valornull);

//Alcance de las variables:
let fuera = "Variable fuera de la funcion";
function funcion1(){
    let dentro = "Variable dentro de la funcion";
    console.log(fuera);
    console.log(dentro);
}
funcion1();

console.log(fuera);
//console.log(dentro);

//Reglas de nomenclatura de variables:

    // Variables que siguen las reglas de JavaScript
let nombreUsuario = "Jesus";
let edad = 23;
let _apellido = "Jimenez";
let $dinero = 0.01;

    // Variables que NO siguen las reglas de JavaScript
//let 1nombre = "Error1"; // No puede comenzar con un número
//let nombre-guion = "Error2"; // No puede usar el guion
//let variable espacio = "Error3"; // No puede tener espacios
//let var@iable = "Error4"; // No puede usar caracteres especiales
//let null = null; //No puede ser una palabra reservada

console.log(nombreUsuario + edad + _apellido + $dinero);

//Operadores:
let num1 = 3.33;
let num2 = 2;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(++num1);
console.log(--num2);

//Strings:
let cadenalineas = "Linea1\nLinea2\tLinea3";
console.log(cadenalineas);

//Condicionales (if, else if, else):
let edad2 = 23;

if (edad2==0) {
    console.log("El número es 0");
} else if(edad2>0) {
    console.log("El número es mayor que 0");
} else{
    console.log("El número es menor que 0");
}

if (edad2<18) {
    console.log("Esta persona es menor de edad");
} else if(edad2>=18 && edad2<65){
    console.log("Esta persona es adulta");
} else if(edad2>=65){
    console.log("Esta persona es anciana");
}

//Bucles (for, while, do-while):
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("--------");

let contador = 0;
while (contador<5) {
    console.log(contador++);
}

console.log("--------");

let x=0;
do {
    console.log(x);
    x++; 
} while (x<5);

//Interrupción de bucles (break, continue):
console.log("----");
let i=0;
while (true) {
    console.log(i);
    if (i==3) {
        break;
    }
    i++
}

for (let j = 0; j < 5; j++) {
    if (j === 3) { continue; }
    console.log("J vale " + j);
  }

//Condicional (switch):

let num=1;
switch (num) {
    case 1:
        console.log("El mes correspondiente al número 1 es: Enero");
        break;
    case 2:
        console.log("El mes correspondiente al número 2 es: Febrero");
        break;
    case 3:
        console.log("El mes correspondiente al número 3 es: Marzo");
        break;
    case 4:
        console.log("El mes correspondiente al número 4 es: Abril");
        break;
    case 5:
        console.log("El mes correspondiente al número 5 es: Mayo");
        break;
    case 6:
        console.log("El mes correspondiente al número 6 es: Junio");
        break;
    case 7:
        console.log("El mes correspondiente al número 7 es: Julio");
        break;
    case 8:
        console.log("El mes correspondiente al número 8 es: Agosto");
        break;
    case 9:
        console.log("El mes correspondiente al número 9 es: Septiembre");
        break;
    case 10:
        console.log("El mes correspondiente al número 10 es: Octubre");
        break;
    case 11:
        console.log("El mes correspondiente al número 11 es: noviembre");
        break;
    case 12:
        console.log("El mes correspondiente al número 12 es: Diciembre");
        break;
    default:
        break;
}

// FUNCIONES

    let pedir_radio = prompt("Ingresa el radio del circulo: ");
    let radio = parseFloat(pedir_radio);

    function calculararea(radio){
        console.log("El área del circulo es " + (Math.PI * Math.pow(radio, 2)));

    }

    calculararea(radio);

    function calcularperimetro(radio) {
        console.log("El perímetro del circulo es " + (2 * Math.PI * radio));
    }

    calcularperimetro(radio);

    function calculatePower(base, exponent) {
        let result = (Math.pow(base, exponent));
        console.log(result);
    }
    calculatePower(2,3);

    // Arrays

    function listanum() {
        let cantidad = prompt("Ingresa la cantidad de números que quieres introducir");
        const listanum = []
        for (let i = 0; i < cantidad ; i++) {
            let numlista = prompt("Ingresa el numero " + (i+1) + ": ");
            listanum.push(Number(numlista))
                }
        let x = listanum[0];
        listanum.forEach(element => {
            if (element > x) {
                x = element;
            }
        });
        console.log("El mayor numero del array es: " + x);
    }

    listanum();

    // Bucle For

    for (let i = 20; i <= 30; i++) {
        console.log(i);
    }

    for (let i = 30; i <= 50; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

    let suma = 0;
    for (let i = 1; i <= 50; i++) {
        suma += i;
    }
    console.log("La suma de los primeros 50 números naturales es: " + suma);

    for (let i = 1; i <= 10; i++) {
        console.log("8 x " + i + " = " + (8 * i));
    }

    const array = [1, 2, 3, 4, 5];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    const altura = 9; // Altura del triángulo

    for (let i = 1; i <= altura; i++) {
        // Imprimir espacios para centrar el triángulo
        let espacios = ' '.repeat(altura - i);
        let asteriscos = '*'.repeat(2 * i - 1); // Asteriscos en forma de triángulo
        console.log(espacios + asteriscos); // Combina espacios y asteriscos
    }
    

    let sumaPares = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            sumaPares += i;
        }
    }
    console.log("La suma de los números pares del 1 al 50 es: " + sumaPares);

    for (let i = 30; i >= 20; i--) {
        console.log(i);
    }

    const numeros = [10, 20, 30, 40, 50];
    let sumaNumeros = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaNumeros += numeros[i];
    }

    let promedio = sumaNumeros / numeros.length;
    console.log("El promedio del array es: " + promedio);





