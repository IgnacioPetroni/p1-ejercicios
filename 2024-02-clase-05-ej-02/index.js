// Variable para el tablero de batalla naval (matriz)
let tablero = [];

// Indices para las filas
let filas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J'];

// Tengo que crear las 10 filas en total
for (let i = 0; i < 10; i++){
    // Nueva fila vacia
    let fila = [];
    // LLeno la fila con las 10 columnas
    for (let j = 0; j < 10; j++){

        fila.push(" ");
    }
    // Consigo la letra de la fila
    let letra = filas[i];
    // Agrego la fila que arme en el tablero
    tablero[letra] = fila;
}

function agregarBarco() {
    let largo = parseInt(prompt('¿Cual es el largo del barco?'));
    // Pregunta por la fila y la columna tantas veces indique el largo del barco
    for (let i = 0; i < largo; i++) {

        let fila = prompt('¿En que fila va el barco?');
        let col = parseInt(prompt('¿En que columna va el barco?')) - 1;

        // Asigno el barco en barco en fila y columna

        tablero[fila][col] = '#';
    }
}

function disparar() {

        let fila = prompt('¿A que fila queres disparar?');
        let col = parseInt(prompt('¿A que columna queres disparar?')) - 1;

        if (tablero[fila][col] === '#'){
            tablero[fila][col] = 'X';
            alert ('Le diste!');
        }
        else if(tablero[fila][col] === ' '){
            tablero[fila][col] = 'O';
            alert('Agua!')
        }
        else{
            alert('Ya se disparo en esta posicion!')
        }   
}

function mostrar() {
    
    for (let fila of filas) {
        
        console.log(tablero[fila]);
        
    }
}