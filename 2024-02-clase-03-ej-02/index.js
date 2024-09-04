// Variables globales
let numero1, numero2, suma,resta, multiplicacion, division;

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

}
function restar() {
    resta = numero1 - numero2;

}
/**
 * Funcion que multiplica los dos numeros pedidos
 */
function multiplicar() {
    multiplicacion = (numero1 * numero2);
}
/**
 * Funcion que divide los dos numeros pedidos
 */
function dividir(){
    division = (numero1/numero2).toFixed(2);
}
/**
 * Funcion que muestra el resultado de las operaciones
 */
function resultado() {
    let operacion;
    if (operacion = suma) {
        alert(`${numero1}+${numero2} dio: ${suma}`);
    }
    else if (operacion = resta) {
        alert(`${numero1}-${numero2} dio: ${resta}`);
    }
    else if (operacion = multiplicacion) {
        alert(`${numero1}*${numero2} dio: ${multiplicacion}`);
    }
    else if(operacion = division){
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