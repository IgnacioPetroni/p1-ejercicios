let notas;
let alumno;
let promedios;
let maxNotas;
let minNotas;


// Ingreso el nombre del alumno
do {
    alumno = prompt('Ingrese el nombre del alumno');
    document.write(`<h2>Las notas del alumno ${alumno} son:</h2>`);
    
// cuando el indice llegue a las 4 vueltas termina el ciclo
    for(i = 0; i < 4; i++) {
        let notas = parseInt(prompt('Ingrese las notas del alumno'));
        document.write(`${notas}<br>`)
    }

// Le indico al usuario si quiere ingresar las notas de otro alumno ya que llegue al limite de vueltas
} while (confirm('Desea agregar las notas de otro alumno'));
