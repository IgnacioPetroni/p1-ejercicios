//Declaro las variables para el ejercicio
let ciudad;
let sexo;
let edad;
let datoValido = true;

// Declaro las variables necesarias para hacer los promedios
let acumuladorEdadMujeres = 0, acumuladorEdadHombres = 0; acumuladorGeneral = 0;
let contadorMujeresMenores21 = 0, contadorEdadMujeres = 0, contadorHombresMayores21 = 0, contadorEdadHombres = 0; contadorGeneral = 0;
let mayorEdadMujeres = 0;
let menorEdadHombres = 110;

// Validacion de ciudad
do{

    do{
        ciudad = prompt('Ingrese una ciudad');
            //Esta validacon la hacemos con los strings proque si pone un numero es distinto a un string.
        if (!isNaN(ciudad)) {
            alert('Ingrese texto, no números');
            datoValido = false;
            
        }
        else if (ciudad === null) {
            alert('Por favor, complete el campo');
            datoValido = false;
        }
        else if(ciudad.trim() === ''){ // .trim() es para evitar espacios 
            alert('No dejar el prompr vacio');
            datoValido = false;
        }
        else{
            datoValido = true;
        }
    } while (!datoValido);

    // Validacion sexo
    do {
        sexo = prompt ('Ingrese el sexo (H, M, X)').toLowerCase();
        if (!isNaN(sexo)) {
            alert('Ingrese texto, no numeros');
            datoValido = false;
        }
        else if (sexo === null){
            alert('Por favor, complete el campo');
            datoValido = false;
        }
        else if (sexo.trim() === '') {
            alert('No dejar el prompt vacio');
            datoValido = false;
        }
        else if (sexo.toLowerCase() !== 'h' && sexo.toLowerCase() !== 'm' && sexo.toLowerCase() !== 'x') {
            alert ('Complete con una opcion valida (H, M , X)');
            datoValido = false;
        }
    } while (!datoValido);

    //Validacion edad
    do {
        edad = parseInt(prompt('Ingrese la edad entre (0 y 110)'));
        if (isNaN(edad)) {
            alert('Ingrese un numero');
            datoValido = false;
        }
        else if (edad <= 0 || edad >= 110){
            alert('edad fuera de rango, ingrese entre 0 y 110');
            datoValido = false;
        }
        else{
            datoValido = true;
        }
    } while (!datoValido);
//sacamos los promedios
    if (sexo === 'm') {
        acumuladorEdadMujeres += edad;
        contadorEdadMujeres++;
        if (edad < 21) {
            contadorMujeresMenores21++;
        }
        if (edad > mayorEdadMujeres) {
            mayorEdadMujeres = edad;
        }
    } else if (sexo === 'h') {
        acumuladorEdadHombres += edad;
        contadorEdadHombres ++;
        if (edad > 21) {
            contadorHombresMayores21++;
        }
        if (edad < menorEdadHombres) {
            menorEdadHombres = edad;
        }
    }
// Preguntamos si desean ingresar mas datos    
} while (confirm('¿Desea agregar mas datos?'));

//Mostramos los resultados obtenidos a traves de un alert
alert(`El promedio general de las mujeres fue el siguiente: ${(acumuladorEdadMujeres/contadorEdadMujeres).toFixed(1)}`);
alert(`El promedio general de los hombres fue el siguiente: ${(acumuladorEdadHombres/contadorEdadHombres).toFixed(1)}`);
// Mayo y menor edad
alert(`La mayor edad ingresada de las mujeres fue: ${mayorEdadMujeres}`);
alert(`La menor edad de los hombres fue: ${menorEdadHombres}`);
// Porcentajes 
alert(`Un % ${100 * contadorHombresMayores21/contadorGeneral} de personas son hombres mayores a 21`);
alert (`Un % ${100 * contadorMujeresMenores21/contadorGeneral} de personas son mujeres menores a 21`);


