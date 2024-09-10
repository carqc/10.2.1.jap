let DATAJSON = JSON.parse(localStorage.getItem('arreglo'));
const contenedor = document.getElementById("data");

function mostrarDatos (array){
    for (let item of array) {
        let dato = document.createElement("p");
        dato.appendChild(document.createTextNode(item));
        contenedor.appendChild(dato);
    }
}



mostrarDatos(DATAJSON);

