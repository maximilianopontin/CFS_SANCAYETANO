var reservaId = 1;//Esta variable se utiliza para asignar identificadores únicos a cada reserva que se agregue a la lista.

// Agregar evento de clic al botón con el id "agregar-reserva". Cuando se haga clic en este botón, se llamará a la función agregarReserva().
document.getElementById("agregar-reserva").addEventListener("click", agregarReserva);

//Dentro de esta función, se obtiene el valor de la reserva ingresada en el campo de entrada (reservaInput)
function agregarReserva() {
    var reservaInput = document.getElementById("reserva");/*buscamos en el documento el id que tenga el elemento reserva */
    var reservaText = reservaInput.value.trim();  
    console.log(reservaText);/*muestra valor que escribimos en el placeholder */
    console.log(reservaInput);/*muestra todo lo que esta en el input */

    // Se realiza una validación para asegurarse de que el valor no esté vacío.
    if (reservaText === "") {
        alert("Por favor, ingrese una tarea válida.");
        return;
    }

    /*se crea una li dinamicamente y se almacena en la variable listaitem*/
    var listaItem = document.createElement("li");
    listaItem.setAttribute("id", "reserva" + reservaId);//El atributo "id" se utiliza para identificar de manera única un elemento.
    //El id se compone concatenando la cadena "reserva" con el valor de la variable reservaId. 

     // Crear el botón "Borrar reserva"
    var botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = '<i class="fas fa-trash"></i> Eliminar reserva';
    botonBorrar.classList.add("eliminarReserva");
    botonBorrar.setAttribute("data-reserva-id", reservaId);// el atributo "data-reserva-id" se establece con el valor de la variable reservaId

    /*agregamos listas de clases: */
    
    listaItem.classList.add("Nueva");
    botonBorrar.classList.add("borrarReserva");
    /*se le asigna al elemento listaitem el contenido html /*se muestra el valor de la reserva ingresada*//*se crea opcion de seleccionar 4 opciones*/
    listaItem.innerHTML  = `<span class="reserva-text">${reservaText}</span> 
                          <select class="estado-reserva">
                              <option value="Nueva">Nueva</option>
                              <option value="in-progress">En Desarrollo</option>
                              <option value="Reservada">Reservada</option>
                              <option value="Libre">Libre</option>
                          </select>`;
                      

    /*se agrega listaitem a la lista con el id lista /*se utiliza para agregar un nuevo elemento hijo a un elemento padre existente*/
    document.getElementById("lista").appendChild(listaItem);

    // Agregar el botón al elemento de la lista de reserva
    listaItem.appendChild(botonBorrar);
    //escucha el boton borrarReserva al hacer click
    botonBorrar.addEventListener("click", borrarReserva);
    
    reservaInput.value = "";
    reservaId++;

}

// Utiliza el evento para obtener el valor de reservaId desde el atributo data-reserva-id del botón y 
//luego obtiene el elemento de reserva correspondiente
function borrarReserva(event) {
    var reservaId = event.target.getAttribute("data-reserva-id");
    var reservaElement = document.getElementById("reserva" + reservaId);
    reservaElement.remove();
  }

// Agregar evento de cambio al selector de estado para cambiar el estado de la tarea
document.getElementById("lista").addEventListener("change", cambiarEstado);

//Dentro de esta función, se obtiene el elemento padre (li) del elemento select que desencadenó el evento, 
//y se realiza una serie de acciones relacionadas con el cambio de estado de la reserva.
function cambiarEstado(event) {
    var reservaItem = event.target.parentNode;
    console.log(reservaItem);

    var estadoReserva = event.target.value;
    console.log("estadoReserva:", estadoReserva)

    reservaItem.classList.remove("Nueva", "in-progress", "Reservada", "Libre");/*elimina las clases que se encuentran en el elemento reservaitem*/
    reservaItem.classList.add(estadoReserva);/*agrega la clase que esta en estadoreserva*/
}

