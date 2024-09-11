// Variable para el tablero de batalla naval (matriz)
let tablero = [];

// Tengo que crear las 10 filas en total
for (let i = 0; i < 10; i++){
    // Nueva fila vacia
    let fila = [];
    // LLeno la fila con las 10 columnas
    for (let j = 0; j < 10; j++){

        fila.push(" ");
    }
    // Agrego la fila que arme en el tablero
    tablero.push(fila);
}

function agregarBarco() {
    let largo = parseInt(prompt('¿Cual es el largo del barco?'));
    // Pregunta por la fila y la columna tantas veces indique el largo del barco
    for (let i = 0; i < largo; i++) {

        let fila = parseInt(prompt('¿En que fila va el barco?'));
        let col = parseInt(prompt('¿En que columna va el barco?'));

        // Asigno el barco en barco en fila y columna

        tablero[fila][col] = '#';
    }
}

function disparar() {

        let fila = parseInt(prompt('¿A que fila queres disparar?'));
        let col = parseInt(prompt('¿A que columna queres disparar?'));

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
    
    for (let fila of tablero) {
        
        console.log(fila);
        
    }
}