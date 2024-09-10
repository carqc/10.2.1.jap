let datos = document.getElementById("inputText");
let boton = document.getElementById("buttonText");

function guardarDato (item) {
    const arreglo = JSON.parse(localStorage.getItem('arreglo')) || [];
    arreglo.push (item);
    localStorage.setItem ("arreglo", JSON.stringify(arreglo));
}

boton.addEventListener ("click", () => {
    const item = datos.value.trim ();
    if (item) {
        guardarDato (item);
        datos.value =  "";
    } 
});
