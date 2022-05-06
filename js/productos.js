const cargoGrillaProductos = (arr) => {
  let detalleTabla = ""
  arr.forEach((producto) => {
    detalleTabla += `<tr>
                <td>${producto.id}</td>
                <td>${producto.servicio}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.precio}</td>
                <td>${producto.tiempo}</td>
                </tr>`
  })
  tbody.innerHTML = detalleTabla
}


const obtenerDatos = () => {

  fetch(URL)

    .then((response) => response.json()) /* convierte los datos que obtuvo a un archivo json */
    .then((data) => {arrayProductos = data})
    .catch(error => arrayProductos = [{id: "Error :(", descripcion: "", precio: "" }])
    .finally(() => cargoGrillaProductos(arrayProductos))
}

document.addEventListener("DOMContentLoaded", obtenerDatos)
