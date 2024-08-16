let categoria = parseInt(prompt("Ingrese categoria (1, 2 o 3) para salarios de usd 1000, usd 1500, usd 2000"));

let subcategoria = prompt("Eliga la subcategoria (a, b o c) para multiplicadores 1.5, 2 y 2.5");

let sueldo;

// Asigno la categoria
if (categoria == 1) {
     sueldo = 1000;
}
else if (categoria == 2) {
     sueldo = 1500;
}
else if (categoria == 3){
     sueldo = 2000;
}

alert(`El sueldo es ${sueldo}`);

// Multiplicador de acuerdo a la subcategoria
switch (subcategoria.toUpperCase()) {
    
    case "A":
    sueldo *= 1.5;
    // Es lo mismo que sueldo = sueldo * 2.5;
    break;

    case "B":
    sueldo *= 2;
    break;
    
    case "C":
    sueldo *= 2.5;
    break;

    default:
    sueldo = 0;
    break;
}

alert(`El sueldo es de ${sueldo}`);

 
if (sueldo >= 1500 && sueldo <= 3000) {
    alert(`El sueldo de $${sueldo} es de rango inicial`);
}
else if (sueldo >= 4000 && sueldo <= 3001) {
    alert(`El sueldo de $${sueldo} es de rango intermedio`);
}else{
    alert(`El sueldo de $${sueldo} es de rango avanzado`);
}