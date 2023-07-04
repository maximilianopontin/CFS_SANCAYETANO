

// captura los datos mediante el objeto formdata
const ventanaReserva=document.getElementById ('ventanaReserva');/*capturo la ventana emergente*/
const botonVentana=document.getElementById ('botonVentana');
botonVentana.addEventListener ('click',cerrarVentana);

const form = document.querySelector('form');
form.addEventListener ('submit', SubmitHandler);/*cuando el usuario presiona el evento submit, dispara una funcion que es un evento*/

function SubmitHandler (evento){
  evento.preventDefault();/*esto previene el comportamiento por defecto del evento, no se recarga la pagina*/
  const userInfo= new FormData(form);
  const user= {
    name: userInfo.get('nombre'),
    fecha: userInfo.get("fecha"),
    hora: userInfo.get("hora"),
    personas: userInfo.get("personas"),
  };
  mostrarReserva(user);
  form.reset();/* cuando presiono submit se elimina el formulario*/
}
   function mostrarReserva(datos) { /*la funcion recibe un parametro de datos y lo muestra por consola*/
    console.log (datos);
    ventanaReserva.showModal(); /*me permite cuando le doy al submit, ademas de mostrar los datos, me abre la ventana*/
  }
function cerrarVentana(){
 ventanaReserva.close();
}