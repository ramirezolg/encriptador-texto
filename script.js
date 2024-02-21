
let botonencriptar =document.querySelector(".boton1");//boton encriptar
let botondesencriptar =document.querySelector(".boton2");//boton desencriptar
let muñeco =document.querySelector(".figura");//imagen del muñeco
let tituloSubtitulo =document.querySelector(".imagen");//div de los parrafos
let resultado =document.querySelector(".resultado");// div de resultado

//activar botones
botonencriptar.onclick =encriptar;
botondesencriptar.onclick=desencriptar;


//funcion encriptar para activar boton

function encriptar(){
    ocultarAdelante();
    let texto=recuperarTexto()//textarea  html
    resultado.textContent =encriptartexto(texto);
}
//funcion desencriptar para activar boton
function desencriptar(){
    ocultarAdelante();
    let texto=recuperarTexto()//textarea  html
    resultado.textContent =desencriptartexto(texto);
}
//recuperar texto encriptado
function recuperarTexto(){
    let texto = document.querySelector(".texto")//textarea
    return texto.value
}
//ocultar seccion 2 al encriptar
function ocultarAdelante(){
    let texto = recuperarTexto();
   if(texto.trim() === "" || tieneMayusculas(texto)){
        muñeco.classList.remove("ocultar");
        tituloSubtitulo.classList.remove("ocultar");
        
    }else{
        muñeco.classList.add("ocultar");
        tituloSubtitulo.classList.add("ocultar");
    }
}
function tieneMayusculas(texto) {
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === texto[i].toUpperCase() && texto[i].match(/[a-z]/i)) {
            return true;
        }
    }
    return false;
}
//funcion encriptar texto ingresado
function soloLetrasMinusculasSinAcento(mensaje) {
    let mayusculas = /[A-ZÁÉÍÓÚ]/;
    let acentos = /[áéíóúÁÉÍÓÚ]/;
    if (mayusculas.test(mensaje) || acentos.test(mensaje)) {
        alert("No se permiten letras mayúsculas o con acento")
        return false;
    }
    return true;
}
function encriptartexto(mensaje) {
    if (!soloLetrasMinusculasSinAcento(mensaje)) {
        return "";
    }

    let texto = mensaje;
    let textofinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textofinal = textofinal + "ai";
        } else if (texto[i] == "e") {
            textofinal = textofinal + "enter";
        } else if (texto[i] == "i") {
            textofinal = textofinal + "imes";
        } else if (texto[i] == "o") {
            textofinal = textofinal + "ober";
        } else if (texto[i] == "u") {
            textofinal = textofinal + "ufat";
        } else {
            textofinal = textofinal + texto[i];
        }
    }
    return textofinal;
}
function desencriptartexto(mensaje){
    if (!soloLetrasMinusculasSinAcento(mensaje)) {
        return "";
    }

    let texto = mensaje;
    let textofinal="";
 
    for(let i =0; i <texto.length; i++){
        if(texto[i]== "a"){
            textofinal=textofinal +"a";
            
        }
        else if (texto[i] == "e"){
            textofinal=textofinal +"e";
            
        }
        else if (texto[i] == "i"){
            textofinal=textofinal +"i";
            
        }
        else if (texto[i] == "o"){
            textofinal=textofinal +"o";
           
        }
        else if (texto[i] == "u"){
            textofinal=textofinal +"u";
            
        }
        else {
            textofinal=textofinal + texto[i];
        }
    }
 
    return textofinal;
}
