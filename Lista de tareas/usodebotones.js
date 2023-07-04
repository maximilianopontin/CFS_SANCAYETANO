var contador = 0;
var mensaje = document.getElementById("mensaje");
var contadorValueElement = document.getElementById("contadorValue");

function actualizarDom() {
    // Obtener el elemento con el ID "contador"
    contadorValueElement.textContent = contador;
    // Actualizar el contenido del elemento con el valor de la variable contador
    contadorElement.textContent = "Contador: " + contador;
}

// Función para sumar 1 punto con el botón 1
document.getElementById("button1").addEventListener("click", function() {
    contador++
    mensaje.textContent = "Sumaste un punto :)";
    actualizarDom()
});

// Función para sumar 5 puntos con el botón 2
document.getElementById("button2").addEventListener("click", function() {
    contador= contador +5
    mensaje.textContent = "Sumaste 5 puntos! :) :) :)";
    actualizarDom()
});

// Función para restar 1 punto con el botón 3
document.getElementById("button3").addEventListener("click", function() {
    contador = contador - 1;
    mensaje.textContent = "Restaste  1 punto! :(";
    actualizarDom()
});

// Función para restar 5 puntos con el botón 4
document.getElementById("button4").addEventListener("click", function() {
    contador = contador - 5
    mensaje.textContent = "Restaste  5 puntos! :() :() :(";

    actualizarDom()
});

// Función para Resetear el contador con boton 5
document.getElementById("button5").addEventListener("click", function() {
    contador = 0;
    mensaje.textContent = "";
    actualizarDom()
});

console.log(contador)