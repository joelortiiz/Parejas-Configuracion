let imagenes_animales = ["cabra.jpg", "cerdo.jpg", "conejo.png", "conejo2.jpg", "cordero.png", "elefante.jpg", "erizo.jpg", "gato.png", "jirafa.png", "leon.png", "mono.jpg", "oso.jpg", "osoblanco.png", "osopanda.png", "pato.png", "perro.png", "pollo.png", "pradera.jpg", "tigre.jpg", "vaca.png", "tucan.jpg", "loro.jpg", "cigueña.jpg", "foca.jpg", "koala.jpg", "cebra.jpg", "canguro.jpg", "pinguino.jpg", "zorro.jpg", "potro.jpg", "tortuga.jpg", "lobo.jpg"];

let imagenes_cartas = ["atras1.jpg", "atras2.jpg", "atras3.jpg", "atras4.jpg", "atras5.jpg", "atras6.jpg", "atras7.jpg", "atras8.jpg"];

let header_title = document.getElementById("header_title");
let configurador = document.getElementById("configurador");
let juego = document.getElementById("juego");
let tiempo = document.getElementById("tiempo");
let ayuda = document.getElementById("ayuda");
let botones = document.getElementById("botones");
let finjuego = document.getElementById("finjuego");

let configuracion_tama = document.getElementById("configuracion_tama");
let configuracion_cartas = document.getElementById("configuracion_cartas");
let configuracion_juego = document.getElementById("configuracion_juego");
let configuracion_ayuda = document.getElementById("configuracion_ayuda");

let config_card_body = document.getElementById("config_card_body");
let visor_imagenes_juego = document.getElementById("visor_imagenes_juego");
let visor_marcador = document.getElementById("visor_marcador");
let visor_tiempo = document.getElementById("visor_tiempo");
let visor_ayuda = document.getElementById("visor_ayuda");

let btn_comprobar = document.getElementById("btn_comprobar");
let btn_validar = document.getElementById("btn_validar");
let btn_nueva_partida = document.getElementById("btn_nueva_partida");


let imagenes = document.getElementsByTagName("img");


let num_imagenes ="";
let tipo_carta="";
let tiempo_juego="";
let nivel_ayuda="";


const cargarImagenes = () => {
    finjuego.style.display = "none";
    btn_comprobar.style.display = "none";
    btn_nueva_partida.style.display = "none";
    juego.style.display = "none";


    imagenes_cartas.forEach(element => {
        let container = document.createElement("DIV");
        container.setAttribute("class", "container-carta-juego");
        config_card_body.append(container);
        container.setAttribute("id", "visor_imagenes_carta")

        let imagen = document.createElement("IMG");
        imagen.setAttribute("src", "./assets/images/cartas/" + element)
        imagen.setAttribute("class", "config-card__img")
        container.append(imagen)
    });

}

let seleccionTama = null;
let numeroCartas =0;
const configTama = (event) => {
    let seleccion = false;
    if (event.target.nodeName.toLowerCase() == "input") {
       
        let numeroCartas = event.target.value;
        console.log(numeroCartas);

       
    //    let span = event.target.nextElementSibling;
       

        if(seleccionTama) {
            seleccionTama.classList.remove("seleccionado")
        }

        event.target.nextElementSibling.classList.add("seleccionado")
        seleccionTama = event.target.nextElementSibling;
        configuracion_tama.classList.remove("error");
    
}
    
}

let seleccion_imagen = null;
let imagenCarta ="";
const selecionarImagen = (event) => {
    let seleccion;
    if (event.target.nodeName.toLowerCase() == "img") {

        //  console.log(event.target.src.substring(event.target.src.lastIndexOf("/")+1, event.target.src.lastIndexOf(".")))
       
        if(seleccion_imagen) {
            seleccion_imagen.classList.remove("carta-seleccionada")
        }
        
        event.target.classList.add("carta-seleccionada")
        seleccion_imagen = event.target;
        configuracion_cartas.classList.remove("error");
        
        if(event.target.classList == "seleccionado") {
            imagenCarta = event.target.src.substring(event.target.src.lastIndexOf("/") + 1, event.target.src.lastIndexOf("."))
            console.log(imagenCarta)

        }

    }
}

let seleccionTiempo = null;
const configJuego=(event)=> {
    let seleccion = false;
    if (event.target.nodeName.toLowerCase() == "input") {
       
        let numeroCartas = event.target.value;
        console.log(numeroCartas);

       
    //    let span = event.target.nextElementSibling;
       

        if(seleccionTiempo) {
            seleccionTiempo.classList.remove("seleccionado")
        }

        event.target.nextElementSibling.classList.add("seleccionado")
        seleccionTiempo = event.target.nextElementSibling;
        visor_tiempo.classList.remove("error");
    
}
}

let seleccionAyuda = null;
const configAyuda =(event)=> {
    
    let seleccion = false;
    if (event.target.nodeName.toLowerCase() == "input") {
       
        let numeroCartas = event.target.value;
        console.log(numeroCartas);

       
    //    let span = event.target.nextElementSibling;
       

        if(seleccionAyuda) {
            seleccionAyuda.classList.remove("seleccionado")
        }
        event.target.nextElementSibling.classList.add("seleccionado")
        seleccionAyuda = event.target.nextElementSibling;
        visor_ayuda.classList.remove("error");
    
}
}

const validarConfig=()=> {
    
  //  console.log("seleccionado")
    if(!seleccionTama) {
       configuracion_tama.classList.add("error");
    }
    if(!seleccion_imagen) {
        configuracion_cartas.classList.add("error");
     }
     if(!seleccionTiempo) {
        visor_tiempo.classList.add("error");
     }
     if(!seleccionAyuda) {
        visor_ayuda.classList.add("error")
     }
     if(seleccionTama && seleccion_imagen && seleccionTiempo && seleccionAyuda) {
        configuracion_tama.style.display="none"
        configuracion_cartas.style.display="none"
        ayuda.style.display="none"
        tiempo.style.display="none"
        btn_validar.style.display="none"
        juego.style.display="block"

        cargarJuego()
     }
}
const cargarJuego =()=> {

    for(let i=0;i<numeroCartas; i++) {

        let container = document.createElement("DIV");
        container.setAttribute("class", "container-carta-juego");
        config_card_body.append(container);
      
        let imagen = document.createElement("IMG");
        imagen.setAttribute("src", "./assets/images/cartas/" + imagenCarta)
        imagen.setAttribute("class", "config-card__img")
        container.append(imagen)
    }
}

document.addEventListener("DOMContentLoaded", cargarImagenes)
configuracion_tama.addEventListener("click", configTama)
configuracion_cartas.addEventListener("click", selecionarImagen)
visor_tiempo.addEventListener("click", configJuego)
visor_ayuda.addEventListener("click", configAyuda)
btn_validar.addEventListener("click", validarConfig)