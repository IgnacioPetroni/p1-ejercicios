// Variables globales
let numero1, numero2, suma,resta, multiplicacion, division, operacionActual;

/**
 * Funcion que atiende el click para pedir el primer numero
 */
function pedirNumero1() {
    // Copio el numero validado en la variable global
    numero1 = validarNumero("Ingrese el primer numero");
}

/**
 * Funcion que atiende el click para pedir el segundo numero
 */
function pedirNumero2() {
    // Copio el numero validado en la variable global
    numero2 = validarNumero("Ingrese el segundo numero");
}

/**
 * Funcion que suma los dos numeros pedidos
 */
function sumar() {
    suma = numero1 + numero2;
    // Le asigno a la variable un string para luego en la funcion de resultado hacer las distintas comparaciones
    operacionActual = 'suma'

}
function restar() {
    resta = numero1 - numero2;
    operacionActual = 'resta'

}
/**
 * Funcion que multiplica los dos numeros pedidos
 */
function multiplicar() {
    multiplicacion = (numero1 * numero2);
    operacionActual = 'multiplicacion'
}
/**
 * Funcion que divide los dos numeros pedidos
 */
function dividir(){
    // Evito que se divida por cero mediante un condicional
    if (numero2 === 0) {
        alert('No se puede dividir por cero');
        division = 'Error'
    }
    // Sino dejo que se haga la operacion
    else{
        division = (numero1/numero2).toFixed(2);
    }
    operacionActual = 'division';
}
/**
 * Funcion que muestra el resultado de las operaciones
 */
function resultado() {
    let operacion;
    if (operacionActual === 'suma') {
        alert(`${numero1}+${numero2} dio: ${suma}`);
    }
    else if (operacionActual === 'resta') {
        alert(`${numero1}-${numero2} dio: ${resta}`);
    }
    else if (operacionActual === 'multiplicacion') {
        alert(`${numero1}*${numero2} dio: ${multiplicacion}`);
    }
    else if(operacionActual === 'division'){
        alert(`${numero1}/${numero2} dio: ${division}`);
    }
}

/**
 * Funcion encargada de pedir y validar un numero
 * @param {String} msg mensaje que aparece en el prompt
 * @returns numero valido
 */
function validarNumero(msg = "") {
    // Variable local para validar
    let numero;
    do {
        numero = parseInt(prompt(msg));

        if(isNaN(numero)) {
            alert("Solo se aceptan numeros");
        }

    } while(isNaN(numero));

    // Retorno numero validado a quien lo llamo
    return numero;

    // Este mensaje nunca aparece porque se corta en seco la funcion con el return
    alert("Mensaje post return");
}



// // Error
// restar(2, 4);

// // Funcion declarada como variable
// const restar = function(num1, num2) {
//     suma = num1 - num2;
// }

// // Aca si puedo llamarla
// restar(2, 4);