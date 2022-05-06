/* Declaración de arreglo con los datos de los servicios */
const tipoServicio = [
  {
    servicio: "IDENTIDAD 1", 
    descripcion: "Rediseño de Marca: Brief y Logotipo.",
    precio: 2000,
    tiempo: "3 días",
  },
  {
    servicio: "IDENTIDAD 2",
    descripcion:
      "Emblema, Logotipo, Paleta de colores, tipografías, Papeleria corporativa, Aplicaciones.",
    precio: 4000,
    tiempo: "4 días",
  },
  {
    servicio: "IDENTIDAD 3",
    descripcion:
      "Emblema, Logotipo, Paleta de colores, tipografías, Papeleria corporativa, Aplicaciones, manual de Identidad y archivos editables",
    precio: 9000,
    tiempo: "7 días",
  },
  {
      servicio: "DISEÑO PUBLICITARIO",
      descripcion: "Flyers, dipticos, tripticos, gifs, cartel, Infografía, etiquetas y envases, Souvenirs",
      precio: 1000,
      tiempo: "3 días",
    },
  {
    servicio: "DISEÑO PUBLICITARIO",
    descripcion: "Señaletica",
    precio: 2500,
    tiempo: "3 días",
  },
    {
    servicio: "EDITORIAL",
    descripcion: "Catálogo de servicios, Menú, Manuales, Curriculum Vitae",
    precio: 2300,
    tiempo: "3 días",
    },
    {
    servicio: "DISEÑO WEB 1",
    descripcion: "Sitio Web corporativo: Diseño UX/IU, Programación, Publicación, 5 secciones",
    precio: 7000,
    tiempo: "Variable",
    },

    {   
     servicio: "DISEÑO WEB 2:",
     descripcion: "Tienda en línea",
     precio: 21000,
     tiempo: "21 días",
    },

    {    
    servicio: "COMMUNITY MANAGMENT:",
    descripcion: "Manejo de redes sociales del negocio con calendario de publicaciones mensual y gráficos de resultados",
    precio: 3500,
    tiempo: "mensual"
    }
  ]
/* Declaración de Variables */

const selectServicio = document.querySelector("#selectServicio");
const valorTotal = document.querySelector("#valorTotal");
const valorImpuesto = 0.21;

const btnCotizar = document.querySelector("#btnCotizar");
const btnLimpiar = document.querySelector("#btnLimpiar");
const btnPedido = document.querySelector("#btnPedido");

/* Cargar los datos del arreglo tipoServicio en el elemento Select  selectServicio*/
const cargoTipoServicio = () => {
  let optionServicio;
  for (elemento of tipoServicio) {
    optionServicio += `<option value="${elemento.servicio}">${elemento.servicio},${elemento.descripcion}</option>`;
  }
  return optionServicio;
};

/* Objeto para calcular el valor total del Servicio */
class CotizadorServicio {
  constructor(jsServicio, valorImpuesto) {
    this.arraytipoServicio = jsServicio;
    this.costoImpuesto = valorImpuesto;
    console.table(jsServicio);
  }

  valorDeServicio(impuesto2, precioServicio) {
    const valorTotal =
      parseFloat(precioServicio) * parseFloat(this.costoImpuesto) +
      parseFloat(precioServicio);
    console.log("valorTotal ", valorTotal);
    return valorTotal;
  }
}

/* Busca Datos en el select */
const faltanCargarDatos = () => {
  return isNaN(selectServicio.value.trim() == "");
};

const cotizarTipoServicio = () => {
  /*debugger; */
  if (faltanCargarDatos()) {
    alert("Selecciona el tipo de Servicio para poder cotizar.");
    return;
  } else {
    servicio1 = selectServicio.value;
    
    impuesto1 = parseFloat(valorImpuesto);
    txImpuesto.innerHTML = `$ ${impuesto1}`; /*ok */
    for (i = 0; i < tipoServicio.length; i++) {
      if (servicio1 == tipoServicio[i].servicio) {
        txServicio.innerHTML = tipoServicio[i].servicio;
        txDescripcion.innerHTML = tipoServicio[i].descripcion;
        txTiempo.innerHTML = tipoServicio[i].tiempo;
        precio1 = tipoServicio[i].precio;
        txPrecio.innerHTML = `$ ${precio1}`;
        break;
      }
    }

    valorDelServicio = cotServ.valorDeServicio(impuesto1, precio1);
    valorTotal.innerText = `$ ${valorDelServicio}`;
  }
};

/*  Inicializar la aplicación*/
const cotServ = new CotizadorServicio(tipoServicio, valorImpuesto);

selectServicio.innerHTML += cargoTipoServicio();

btnCotizar.addEventListener("click", () => cotizarTipoServicio());
btnLimpiar.addEventListener("click", () => location.reload());
btnGuardarServicio.addEventListener("click", () => guardoDatosJSON());
