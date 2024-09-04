/**
 * Pide y valida un string
 * @param {string} msg 
 * @returns un string validado
 */
function validarString(msg = '') {
    // Variable auxiliar
    let aux;
    // Booleano para validar
    let datoValido;

    do {
        // Pido y valido el string
        aux = prompt(msg);

        //Valido que no sea un numero
        if (!isNaN(aux)) {
            alert('Ingrese texto');
            datoValido = false;
        }
        // Valido que no se pueda cancelar
        else if (aux === null) {
            alert('Complete el campo');
            datoValido = false;
        }
        else if (aux.trim() === '') {
            alert('Por favor, no deje el campo vacio');
            datoValido = false;
        }
        else{
            datoValido = true;
        }
    } while (!datoValido);
    // Devuelvo el dato validado
    return aux;
}

/**
 * Pide y valida una nota
 * @param {string} msg 
 * @returns nota validada entre 4 y 10
 */
function validarNota(msg = '') {
    // Variable auxiliar
    let aux;
    // Booleano para validar
    let datoValido;

    do {
        aux = parseInt(prompt(msg));
        //Validaciones
        if (isNaN(aux)) {
            alert('Ingrese un numero');
            datoValido = false;
        }
        else if (aux > 4 || aux < 10) {
            alert('La nota debe ser entre 4 y 10');
            datoValido = false;
        }
        else{
            datoValido = true;
        }
    } while (!datoValido);
    // Devuelvo dato validado
    return aux;
}