// Pedimos un valor al usuario para saber cuantas veces se repite el ciclo.
let ingresarNumero = parseInt(prompt("Ingrese el número de canciones que quiere agregar: "));
console.log("Quiere agregar " + ingresarNumero + " canciones a su PlayList")
for (let i = 1; i <= ingresarNumero; i++) {
    // En cada repetición solicitamos una canción nueva.
    let ingresarNombre = prompt("Ingresar nombre de la canción");
    // Informamos la posición de la canción usando el número de repetición (i).
    console.log(+ i + " " + ingresarNombre);
    alert("Se posicionó " + i + " " + ingresarNombre);
}