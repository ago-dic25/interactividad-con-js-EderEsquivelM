//====Variables=====//
var arreglo = [1, 2, 3, 4, 5];
var entero = 1;
var cadena_texto = "Hola Mundo";
var booleano = true;

//===Constantes====//
//const PI = 3.1416;


//====Funciones====//
function suma(x, y){
    var resultado = x + y;
    console.log("El resultado de la suma es: " + resultado);
    return resultado;
}

function imprimirMensaje(mensaje){
    console.log("Este es mi mensaje " + mensaje);
}

imprimirMensaje("Hola");
imprimirMensaje("Vacaciones 1 semana :D");
imprimirMensaje(true);

suma(1, 2);
suma(10, 20);
suma(100, 200);


//===Elementos de la pagina como variables===///
var botonBuscar = document.getElementById("buscar");

/*console.log(botonBuscar);

//==== Eventos===== //
botonBuscar.addEventListener("click", function(){
    //alert("Hiciste clic al boton");
    botonBuscar.classList.add("rojo");
});*/

//==== Variables ejercicio clase ===== //
var mas=document.getElementById("mas");
var verTodos=document.getElementById("verTodos");
var verFotos=document.getElementById("verFotos");

var posts=document.getElementById("posts")
var fotos=document.getElementById("fotos")

var botonDark = document.getElementById("modoOscuro");

var contador = 0;
var mostrarContador = document.getElementById("contadorLikes");

var tarjetas = document.querySelectorAll(".tarjeta");

var seeAll = document.getElementById("seeAll");
var imagenPrincipal = seeAll.querySelector("img");

var imagenesGaleria = [
    "imagenes/soundtrap-n30_i7mx62o-unsplash.jpg",
    "imagenes/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg",
    "imagenes/jukka-aalho-OaPksPcVp50-unsplash.jpg",
    "imagenes/rachel-coyne-mTsotT-gMrY-unsplash.jpg",
];

var indice = 0;
var intervalo; 

//Eventos de los elementos
/*mas.addEventListener("click",function(){
    alert("Seccion en progreso...")
});*/

verTodos.addEventListener("click", function(e) {
    e.preventDefault();

    if(posts.classList.contains("ocultar")) {
        posts.classList.remove("ocultar");
        posts.classList.add("mostrar");
    } else {
        posts.classList.remove("mostrar");
        posts.classList.add("ocultar");
    }
});

verFotos.addEventListener("click",function(){
    if(fotos.classList.contains("ocultar")){
        fotos.classList.remove("ocultar");
        fotos.classList.add("mostrar");
    }else{
        fotos.classList.remove("mostrar")
        fotos.classList.add("ocultar")
    }
});

botonDark.addEventListener("click", function() {
    document.body.classList.toggle("modoOscuro");
    
    if(document.body.classList.contains("modoOscuro")) {
        botonDark.textContent = "☀️"; 
    } else {
        botonDark.textContent = "🌙"; 
    }
});

mas.addEventListener("click", function() {
    contador++; 
    mostrarContador.textContent = contador;
});

botonBuscar.addEventListener("click", function() {
    var palabra = prompt("Escribe tu búsqueda");
    if (!palabra) {
        tarjetas.forEach(tarjeta => {
            tarjeta.classList.remove("ocultar");
        });
        return;
    }

    tarjetas.forEach(tarjeta => {
        if (tarjeta.textContent.toLowerCase().includes(palabra.toLowerCase())) {
            tarjeta.classList.remove("ocultar"); 
        } else {
            tarjeta.classList.add("ocultar"); 
        }
    });
});

function cambiarImagen() {
    indice++; 
    if (indice >= imagenesGaleria.length) {
        indice = 0;
    }
    imagenPrincipal.src = imagenesGaleria[indice];
}

seeAll.addEventListener("mouseover", function() {
    clearInterval(intervalo); 
    cambiarImagen();         
    intervalo = setInterval(cambiarImagen, 2000); 
});

seeAll.addEventListener("mouseout", function() {
    clearInterval(intervalo);
});