//====Variables=====//
var arreglo = [1, 2, 3, 4, 5];
var entero = 1;
var cadena_texto = "Hola Mundo";
var booleano = true;

//===Constantes====//
const PI = 3.1416;


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

console.log(botonBuscar);

//==== Eventos===== //
botonBuscar.addEventListener("click", function(){
    //alert("Hiciste clic al boton");
    botonBuscar.classList.add("rojo");
});

//==== Variables ejercicio clase ===== //
var mas=document.getElementById("mas");
var verTotos=document.getElementById("verTodos");
var verFotos=document.getElementById("verFotos");

//Eventos de los elementos
mas.addEventListener("click",function(){
    alert("Seccion en progreso...")
});

verTodos.addEventListener("click",function(){
    if(post.classList.contains("ocultar")){
        post.classList.remove("ocultar");
        post.classList.add("mostrar");
    }else{
        post.classList.remove("mostrar");
        post.classList.remove(ocultar);
    }
});

verFotos.addEventListener("click",function(){
});