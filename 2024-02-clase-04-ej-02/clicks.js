function cargarAlumno() {
    //  Pido el nombre del alumno
     alumno = validarString('Ingrese el nombre del alumno');
    
}

function cargarMateria() {
        //Pido la materia y valido
        let materia = validarString('Ingrese el nombre de la materia');
        // Guardo la materia en su array mediante un .push
        materias.push(materia);   
        //Pido la nota y valido
        let nota = validarNota(`Ingrese la nota final de ${materia}`);
        notas.push(nota);
}

function mostrar() {
    // Encuentro el container en el documento atraves del metodo .querySelector
    const container = document.querySelector('.container');
    // Limpio el container
    container.innerHTML = "";
    // Creo el h1 con el nombre del alumno
    container.innerHTML += `<h1>${alumno}</h1>`;
    container.innerHTML += `<h2>Materias</h2>`;
    // Creo la lista donde se van a mostrar las materias con las notas (Se cierra sola la etiqueta)
    container.innerHTML += `<ul class= "list-group">`;
    // Encuentro la lista que genere recien
    const ul = document.querySelector('ul');
    
    
    // Agrego las materias con un for normal
    // 
    // for(let i = 0; i < materias.length; i++){
    //     ul.innerHTML += `<li class="list-group-item">${materias[i]} - ${notas[i]}</li>`;
    // }

    // Con un for in que es lo mismo que el for normal solo que con menos sintaxis
    for(let i in materias){
        ul.innerHTML += `<li class="list-group-item">${materias[i]} - ${notas[i]}</li>`
    }
}