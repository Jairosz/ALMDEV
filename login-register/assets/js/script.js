document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

//FUNCIONES

function anchoPage() {

    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
    }
}

anchoPage();


function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

// TABLA DINÁMICA INDEX
function mostrarPecho() {
    var divPecho = document.getElementById("PECHO");
    var divEspalda = document.getElementById("ESPALDA");
    var divPierna = document.getElementById("PIERNA");
    var divHombro = document.getElementById("HOMBRO");



    divPecho.classList.remove("oculto");
    divEspalda.classList.add("oculto");
    divPierna.classList.add("oculto");
    divHombro.classList.add("oculto");
}
function mostrarEspalda() {
    var divPecho = document.getElementById("PECHO");
    var divEspalda = document.getElementById("ESPALDA");
    var divPierna = document.getElementById("PIERNA");
    var divHombro = document.getElementById("HOMBRO");



    divPecho.classList.add("oculto");
    divEspalda.classList.remove("oculto");
    divPierna.classList.add("oculto");
    divHombro.classList.add("oculto");
}
function mostrarPierna() {
    var divPecho = document.getElementById("PECHO");
    var divEspalda = document.getElementById("ESPALDA");
    var divPierna = document.getElementById("PIERNA");
    var divHombro = document.getElementById("HOMBRO");



    divPecho.classList.add("oculto");
    divEspalda.classList.add("oculto");
    divPierna.classList.remove("oculto");
    divHombro.classList.add("oculto");
}
function mostrarHombro() {
    var divPecho = document.getElementById("PECHO");
    var divEspalda = document.getElementById("ESPALDA");
    var divPierna = document.getElementById("PIERNA");
    var divHombro = document.getElementById("HOMBRO");



    divPecho.classList.add("oculto");
    divEspalda.classList.add("oculto");
    divPierna.classList.add("oculto");
    divHombro.classList.remove("oculto");
}


var contadorFilas = 1;

function agregarFilaPecho() {
    var tablaBody = document.getElementById("tablaBody");

    var ejercicio = document.getElementById("selectEjercicio").value;
    var kgRM = document.getElementById("kgRM").value;
    var kgSeries = document.getElementById("kgSeries").value;
    var fecha = new Date().toLocaleDateString();


    if (ejercicio == 1) {
        ejercicio = "Press Banca";
    } else if (ejercicio == 2) {
        ejercicio = "Press Inclinado";
    } else if (ejercicio == 3) {
        ejercicio = "Fondos";
    } else if (ejercicio == 4) {
        ejercicio = "Contractora";
    } else if (ejercicio == 5) {
        ejercicio = "Triceps";
    } else if (ejercicio == "Listado de Ejercicios") {
        alert('Selecciona un ejercicio valido perro');
        return;
    }

    contadorFilas++;

    var nuevaFila = "<tr id='fila-" + contadorFilas + "'>" +
        "<td>" + ejercicio + "</td>" +
        "<td>" + kgRM + " KGs</td>" +
        "<td>" + kgSeries + " KGs</td>" +
        "<td>" + fecha + "</td>" +
        "<td><button onclick=\"eliminarFila('fila-" + contadorFilas + "')\">Eliminar</button></td>" +
        "</tr>";

    tablaBody.innerHTML += nuevaFila;
}

function eliminarFila(idFila) {
    var fila = document.getElementById(idFila);
    fila.parentNode.removeChild(fila);
}