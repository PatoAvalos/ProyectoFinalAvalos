
/* Datos del formulario para solicitar un servicio */

const guardoDatosJSON = () => {
  const datosForm = { servicio: "", descripcion: "", precio: 0 };

  var s1 = document.getElementById('txServicio');
  datosForm.newservices = s1.innerHTML;

  var d1 = document.getElementById('txDescripcion');
  datosForm.descripcionServicio = d1.innerHTML;

  var p1 = document.getElementById('txPrecio');
  datosForm.precioServicio = p1.innerHTML;

  /*datosForm.descripcionServicio = `$ ${txDescripcion}`
  datosForm.precioServicio = precioServicio.value;*/
  localStorage.setItem("datosDelForm", JSON.stringify(datosForm));
  Swal.fire({
    title: "¡LISTO!",
    text: "¡El servicio se ha Guardado!",
    icon: "success"							
   } );

  /*console.info("Se ha almacenado el array en LocalStorage.");*/
};

btnGuardarServicio.addEventListener("click", guardoDatosJSON); 

const recuperoDatosJSON = () => {
  //debugger
  if (localStorage.getItem("datosDelForm") != null) {
    datosDelForm = JSON.parse(localStorage.getItem("datosDelForm"));
    newservices.value = datosDelForm.newservices;
    descripcionServicio.value = datosDelForm.descripcionServicio;
    precioServicio.value = datosDelForm.precioServicio;
    impuestoServicio.value = precioServicio.value * 0.21;
  }
};

recuperoDatosJSON(); 
/* Datos formulario de Usuario */

const guardoDatosUsuarioJSON = () => {
  //debugger
  const DatosUsuario = { usuario: "", email: "", tituloMsj: "", Mensaje: "" };
  DatosUsuario.inputNombre = inputNombre.value;
  DatosUsuario.inputEmail = inputEmail.value;
  DatosUsuario.inputSubject = inputSubject.value;
  DatosUsuario.inputMessage = inputMessage.value;
  localStorage.setItem("datosDelUsuario1", JSON.stringify(DatosUsuario));

  Swal.fire({
    title: "PERFECTO",
    text: "¡Los datos del usuario se han guardado!",
    icon: "success"							
   } );
};

btnGuardar.addEventListener("click", guardoDatosUsuarioJSON);

const recuperoDatosUsuarioJSON = () => {
  if (localStorage.getItem("datosDelUsuario1") != null) {
    datosDelUsuario1 = JSON.parse(localStorage.getItem("datosDelUsuario1"));
    inputNombre.value = datosDelUsuario1.inputNombre;
    inputEmail.value = datosDelUsuario1.inputEmail;
    inputSubject.value = datosDelUsuario1.inputSubject;
    inputMessage.value = datosDelUsuario1.inputMessage;
  }
};

recuperoDatosUsuarioJSON();

/* ---- Creación de un objeto -----

const newservices = {
  nuevoServicio: "Identidad",
  descripcionServicio:
    "Emblema, Imagotipo, Logotipo, Paleta de colores, Fuentes Tipográficas, Papelería corporativa, 2 mockup",
  precioServicio: 4000,
  };

/* convertir un objeto en formato JSON 
const enJSON = JSON.stringify(newservices);
console.log(enJSON);

/* Guardar el objeto JSON en el local Storage 
localStorage.setItem("miServicio", enJSON);

/* Vuelve a convertir el formato JSON a un objeto de JS 
const jsonRecuperado = JSON.parse(localStorage.getItem("miServicio"));
console.log(jsonRecuperado); */
