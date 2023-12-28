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
function entendido(){
    var divPecho = document.getElementById("PECHO");
    var divPecho2 = document.getElementById("PECHO2");
    var divPecho3 = document.getElementById("PECHO3");
    var divPecho4 = document.getElementById("PECHO4");
    var divPecho5 = document.getElementById("PECHO5");
   var explanation = document.getElementById("explanation");
    var section = document.getElementById("section");
   explanation.classList.add("oculto");
   divPecho.classList.remove("oculto");
   divPecho2.classList.remove("oculto");
   divPecho3.classList.remove("oculto");
   divPecho4.classList.remove("oculto");
   divPecho5.classList.remove("oculto");
   section.classList.remove("oculto");
}
// TABLA DINÁMICA INDEX
function mostrarPecho() {
    var divPecho = document.getElementById("PECHO");
    var divEspalda = document.getElementById("ESPALDA");
    var divPierna = document.getElementById("PIERNA");
    var divHombro = document.getElementById("HOMBRO");
    var divPecho2 = document.getElementById("PECHO2");
    var divEspalda2 = document.getElementById("ESPALDA2");
    var divPierna2 = document.getElementById("PIERNA2");
    var divHombro2 = document.getElementById("HOMBRO2");
    var divPecho3 = document.getElementById("PECHO3");
    var divEspalda3 = document.getElementById("ESPALDA3");
    var divPierna3 = document.getElementById("PIERNA3");
    var divHombro3 = document.getElementById("HOMBRO3");
    var divPecho4 = document.getElementById("PECHO4");
    var divEspalda4 = document.getElementById("ESPALDA4");
    var divPierna4 = document.getElementById("PIERNA4");
    var divHombro4 = document.getElementById("HOMBRO4");
    var divPecho5 = document.getElementById("PECHO5");
    var divEspalda5 = document.getElementById("ESPALDA5");
    var divPierna5 = document.getElementById("PIERNA5");
    var divHombro5 = document.getElementById("HOMBRO5");
    divPecho.classList.remove("oculto");
    divEspalda.classList.add("oculto");
    divPierna.classList.add("oculto");
    divHombro.classList.add("oculto");
    divPecho2.classList.remove("oculto");
    divEspalda2.classList.add("oculto");
    divPierna2.classList.add("oculto");
    divHombro2.classList.add("oculto");
    divPecho3.classList.remove("oculto");
    divEspalda3.classList.add("oculto");
    divPierna3.classList.add("oculto");
    divHombro3.classList.add("oculto");
    divPecho4.classList.remove("oculto");
    divEspalda4.classList.add("oculto");
    divPierna4.classList.add("oculto");
    divHombro4.classList.add("oculto");
    divPecho5.classList.remove("oculto");
    divEspalda5.classList.add("oculto");
    divPierna5.classList.add("oculto");
    divHombro5.classList.add("oculto");
}
function mostrarEspalda() {
    var divPecho = document.getElementById("PECHO");
    var divEspalda = document.getElementById("ESPALDA");
    var divPierna = document.getElementById("PIERNA");
    var divHombro = document.getElementById("HOMBRO");
    var divPecho2 = document.getElementById("PECHO2");
    var divEspalda2 = document.getElementById("ESPALDA2");
    var divPierna2 = document.getElementById("PIERNA2");
    var divHombro2 = document.getElementById("HOMBRO2");
    var divPecho3 = document.getElementById("PECHO3");
    var divEspalda3 = document.getElementById("ESPALDA3");
    var divPierna3 = document.getElementById("PIERNA3");
    var divHombro3 = document.getElementById("HOMBRO3");
    var divPecho4 = document.getElementById("PECHO4");
    var divEspalda4 = document.getElementById("ESPALDA4");
    var divPierna4 = document.getElementById("PIERNA4");
    var divHombro4 = document.getElementById("HOMBRO4");
    var divPecho5 = document.getElementById("PECHO5");
    var divEspalda5 = document.getElementById("ESPALDA5");
    var divPierna5 = document.getElementById("PIERNA5");
    var divHombro5 = document.getElementById("HOMBRO5");
    divPecho.classList.add("oculto");
    divEspalda.classList.remove("oculto");
    divPierna.classList.add("oculto");
    divHombro.classList.add("oculto");
    divPecho2.classList.add("oculto");
    divEspalda2.classList.remove("oculto");
    divPierna2.classList.add("oculto");
    divHombro2.classList.add("oculto");
    divPecho3.classList.add("oculto");
    divEspalda3.classList.remove("oculto");
    divPierna3.classList.add("oculto");
    divHombro3.classList.add("oculto");
    divPecho4.classList.add("oculto");
    divEspalda4.classList.remove("oculto");
    divPierna4.classList.add("oculto");
    divHombro4.classList.add("oculto");
    divPecho5.classList.add("oculto");
    divEspalda5.classList.remove("oculto");
    divPierna5.classList.add("oculto");
    divHombro5.classList.add("oculto");
}
function mostrarPierna() {
    var divPecho = document.getElementById("PECHO");
    var divEspalda = document.getElementById("ESPALDA");
    var divPierna = document.getElementById("PIERNA");
    var divHombro = document.getElementById("HOMBRO");
    var divPecho2 = document.getElementById("PECHO2");
    var divEspalda2 = document.getElementById("ESPALDA2");
    var divPierna2 = document.getElementById("PIERNA2");
    var divHombro2 = document.getElementById("HOMBRO2");
    var divPecho3 = document.getElementById("PECHO3");
    var divEspalda3 = document.getElementById("ESPALDA3");
    var divPierna3 = document.getElementById("PIERNA3");
    var divHombro3 = document.getElementById("HOMBRO3");
    var divPecho4 = document.getElementById("PECHO4");
    var divEspalda4 = document.getElementById("ESPALDA4");
    var divPierna4 = document.getElementById("PIERNA4");
    var divHombro4 = document.getElementById("HOMBRO4");
    var divPecho5 = document.getElementById("PECHO5");
    var divEspalda5 = document.getElementById("ESPALDA5");
    var divPierna5 = document.getElementById("PIERNA5");
    var divHombro5 = document.getElementById("HOMBRO5");
    divPecho.classList.add("oculto");
    divEspalda.classList.add("oculto");
    divPierna.classList.remove("oculto");
    divHombro.classList.add("oculto");
    divPecho2.classList.add("oculto");
    divEspalda2.classList.add("oculto");
    divPierna2.classList.remove("oculto");
    divHombro2.classList.add("oculto");
    divPecho3.classList.add("oculto");
    divEspalda3.classList.add("oculto");
    divPierna3.classList.remove("oculto");
    divHombro3.classList.add("oculto");
    divPecho4.classList.add("oculto");
    divEspalda4.classList.add("oculto");
    divPierna4.classList.remove("oculto");
    divHombro4.classList.add("oculto");
    divPecho5.classList.add("oculto");
    divEspalda5.classList.add("oculto");
    divPierna5.classList.remove("oculto");
    divHombro5.classList.add("oculto");
}
function mostrarHombro() {
    var divPecho = document.getElementById("PECHO");
    var divEspalda = document.getElementById("ESPALDA");
    var divPierna = document.getElementById("PIERNA");
    var divHombro = document.getElementById("HOMBRO");
    var divPecho2 = document.getElementById("PECHO2");
    var divEspalda2 = document.getElementById("ESPALDA2");
    var divPierna2 = document.getElementById("PIERNA2");
    var divHombro2 = document.getElementById("HOMBRO2");
    var divPecho3 = document.getElementById("PECHO3");
    var divEspalda3 = document.getElementById("ESPALDA3");
    var divPierna3 = document.getElementById("PIERNA3");
    var divHombro3 = document.getElementById("HOMBRO3");
    var divPecho4 = document.getElementById("PECHO4");
    var divEspalda4 = document.getElementById("ESPALDA4");
    var divPierna4 = document.getElementById("PIERNA4");
    var divHombro4 = document.getElementById("HOMBRO4");
    var divPecho5 = document.getElementById("PECHO5");
    var divEspalda5 = document.getElementById("ESPALDA5");
    var divPierna5 = document.getElementById("PIERNA5");
    var divHombro5 = document.getElementById("HOMBRO5");
    divPecho.classList.add("oculto");
    divEspalda.classList.add("oculto");
    divPierna.classList.add("oculto");
    divHombro.classList.remove("oculto");
    divPecho2.classList.add("oculto");
    divEspalda2.classList.add("oculto");
    divPierna2.classList.add("oculto");
    divHombro2.classList.remove("oculto");
    divPecho3.classList.add("oculto");
    divEspalda3.classList.add("oculto");
    divPierna3.classList.add("oculto");
    divHombro3.classList.remove("oculto");
    divPecho4.classList.add("oculto");
    divEspalda4.classList.add("oculto");
    divPierna4.classList.add("oculto");
    divHombro4.classList.remove("oculto");
    divPecho5.classList.add("oculto");
    divEspalda5.classList.add("oculto");
    divPierna5.classList.add("oculto");
    divHombro5.classList.remove("oculto");
}
var contadorFilas = 1;
function agregarFilaPecho() {
    var tablaBody = document.getElementById("tablaBodyPecho");
    var ejercicio = document.getElementById("selectEjercicioPecho").value;
    var kgRM = document.getElementById("kgRMPecho").value;
    var kgSeries = document.getElementById("kgSeriesPecho").value;
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
    } else if (ejercicio == "Listado de Ejercicios DIA 1") {
        alert('Selecciona un ejercicio valido perro');
        return;
    }
    contadorFilas++;
    var nuevaFila = "<tr id='fila-" + contadorFilas + "'>" +
        "<td>" + ejercicio + "</td>" +
        "<td>" + kgRM + " KGs</td>" +
        "<td>" + kgSeries + " KGs</td>" +
        "<td>" + fecha + "</td>" +
        "<td>" +
        "<button type='button' class='btn btn-primary2'  onclick=\"eliminarFila('fila-" + contadorFilas + "')\">Eliminar</button>" +
        "</td>" +
        "</tr>";

    tablaBody.innerHTML += nuevaFila;
}
function eliminarFila(idFila) {
    var fila = document.getElementById(idFila);
    fila.parentNode.removeChild(fila);
}

function agregarFilaEspalda() {
    var tablaBody = document.getElementById("tablaBodyEspalda");
    var ejercicio = document.getElementById("selectEjercicioEspalda").value;
    var kgRM = document.getElementById("kgRMEspalda").value;
    var kgSeries = document.getElementById("kgSeriesEspalda").value;
    var fecha = new Date().toLocaleDateString();
    if (ejercicio == 1) {
        ejercicio = "Remo";
    } else if (ejercicio == 2) {
        ejercicio = "Remo 90º";
    } else if (ejercicio == 3) {
        ejercicio = "Remo 90º abierto";
    } else if (ejercicio == 4) {
        ejercicio = "Jalón";
    } else if (ejercicio == 5) {
        ejercicio = "Biceps Máquina";
    } else if (ejercicio == "Listado de Ejercicios DIA 2") {
        alert('Selecciona un ejercicio valido perro');
        return;
    } else if (ejercicio == 6) {
        ejercicio = "Biceps Martillo";
    } else if (ejercicio == 7) {
        ejercicio = "Curl de biceps";
    }
    contadorFilas++;
    var nuevaFila = "<tr id='fila-" + contadorFilas + "'>" +
    "<td>" + ejercicio + "</td>" +
    "<td>" + kgRM + " KGs</td>" +
    "<td>" + kgSeries + " KGs</td>" +
    "<td>" + fecha + "</td>" +
    "<td>" +
    "<button type='button' class='btn btn-primary2'  onclick=\"eliminarFila('fila-" + contadorFilas + "')\">Eliminar</button>" +
    "</td>" +
    "</tr>";
tablaBody.innerHTML += nuevaFila;
}
function agregarFilaPierna() {
    var tablaBody = document.getElementById("tablaBodyPierna");

    var ejercicio = document.getElementById("selectEjercicioPierna").value;
    var kgRM = document.getElementById("kgRMPierna").value;
    var kgSeries = document.getElementById("kgSeriesPierna").value;
    var fecha = new Date().toLocaleDateString();
    if (ejercicio == 1) {
        ejercicio = "Sentadilla";
    } else if (ejercicio == 2) {
        ejercicio = "Prensa";
    } else if (ejercicio == 3) {
        ejercicio = "Cuadriceps";
    } else if (ejercicio == 4) {
        ejercicio = "Isquios";
    } else if (ejercicio == 5) {
        ejercicio = "Gemelo";
    } else if (ejercicio == "Listado de Ejercicios DIA 3") {
        alert('Selecciona un ejercicio valido perro');
        return;
    } else if (ejercicio == 6) {
        ejercicio = "Soleo";
    }
    contadorFilas++;
    var nuevaFila = "<tr id='fila-" + contadorFilas + "'>" +
        "<td>" + ejercicio + "</td>" +
        "<td>" + kgRM + " KGs</td>" +
        "<td>" + kgSeries + " KGs</td>" +
        "<td>" + fecha + "</td>" +
        "<td>" +
        "<button type='button' class='btn btn-primary2'  onclick=\"eliminarFila('fila-" + contadorFilas + "')\">Eliminar</button>" +
        "</td>" +
        "</tr>";

    tablaBody.innerHTML += nuevaFila;
}
function agregarFilaHombro() {
    var tablaBody = document.getElementById("tablaBodyHombro");
    var ejercicio = document.getElementById("selectEjercicioHombro").value;
    var kgRM = document.getElementById("kgRMHombro").value;
    var kgSeries = document.getElementById("kgSeriesHombro").value;
    var fecha = new Date().toLocaleDateString();
    if (ejercicio == 1) {
        ejercicio = "Press Militar";
    } else if (ejercicio == 2) {
        ejercicio = "Piramide";
    } else if (ejercicio == 3) {
        ejercicio = "Hombro con huevos negros";
    } else if (ejercicio == "Listado de Ejercicios DIA 4") {
        alert('Selecciona un ejercicio valido perro');
        return;
    }
    contadorFilas++;
    var nuevaFila = "<tr id='fila-" + contadorFilas + "'>" +
        "<td>" + ejercicio + "</td>" +
        "<td>" + kgRM + " KGs</td>" +
        "<td>" + kgSeries + " KGs</td>" +
        "<td>" + fecha + "</td>" +
        "<td>" +
        "<button type='button' class='btn btn-primary2'  onclick=\"eliminarFila('fila-" + contadorFilas + "')\">Eliminar</button>" +
        "</td>" +
        "</tr>";
    tablaBody.innerHTML += nuevaFila;
}