/*  ========== Arreglo de servicios para la lista de la sección conoce nuestros productos ========== */
const servicios2 = [
    "Diseño Editorial",
    "Identidad",
    "Diseño Publicitario",
    "Community Managment",
    "Diseño Web"
  ];

  /* ========== Modificar Título de sección SERVICIOS desde el DOM  ========== */

const tituloServicios = document.querySelector("#tituloServicios"); 
tituloServicios.innerText = "CONOCE NUESTROS SERVICIOS";

/* ========== Modificar listado de SERVICIOS desde el DOM  ========== */

const cargarServicios = () => {
    for (serv of servicios2){ 
        let itemList ="<li class='list-group-item'>" + serv + "</li>" 
        listadoServicios.innerHTML += itemList;}
    }

cargarServicios();



/* ========== Arreglo de productos y listado de productos para el catálogo generado usando AJAX aquí se usa el archivo productos.json ========== */
const inputFiltrar = document.querySelector("#filtrar")
const tbody = document.querySelector("tbody")
let arrayProductos = ""
const URL = "js/productos.json"




/* ========== Declaración de variables para el archivo json , después de la declaracion se usa el archivo json.js para guardar los datos capturados ============ */
/* ========== Sección FORMULARIO PARA SOLICITAR SERVICIO  ========== */
const selectServicios = document.querySelector("#selectServicios")

const newservices = document.querySelector("#txServicio")
const descripcionServicio = document.querySelector("#txDescripcion")
const precioServicio = document.querySelector("#txprecio")
const impuestoServicio = document.querySelector("#impuestoServicio")
const btnGuardarServicio = document.querySelector("#btnGuardarServicio")


/* Variables del formulario, se almacena el valor de los datos capturados por el usuario SECCIÓN FORMULARIO DE CONTACTO*/
const inputNombre = document.querySelector("#inputNombre");
const inputEmail = document.querySelector("#inputEmail");
const inputSubject = document.querySelector("#inputSubject");
const inputMessage = document.querySelector("#inputMessage");

let datosdeInput = ""

/* ========== Modificar el color del campo NOMBRE al momento de que adquiere el foco  DESDE EL DOM en el formulario de CONTACTO ========== */

inputNombre.addEventListener("focus", () => {
  inputNombre.className = "maincss";
  
})

inputNombre.addEventListener("blur", () => {
  inputNombre.className = ""
  mostrar();
  
})

function mostrar() {
  let nom = document.querySelector('#inputNombre').value;
  console.log('Ingreso el nombre:' + nom);   
}

mostrar();
/* ========== Botón de enviar  ========== */


btnSubmit.addEventListener("mousemove", ()=>{
  btnSubmit.title="Complete los datos antes de pulsar ENVIAR";
})

document.addEventListener("btnSubmit", (event)=> {
  event.preventDefault();
  alert("Formulario enviado");
})







