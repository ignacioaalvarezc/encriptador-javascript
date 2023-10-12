var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var imagen = document.querySelector(".contenedor-imagen");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    var cajaTexto = recuperarTexto()
    if (cajaTexto.trim() !== "") {
        ocultarAdelante();
        resultado.textContent = encriptarTexto(cajaTexto);
    } else {
        mostrarAdelante();
        areaTexto.placeholder = "Ingrese el texto aquí...";
        resultado.textContent = "";
    }
}

function desencriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto()
    if (cajaTexto === "") {
        resultado.textContent = "";
    } else {
        resultado.textContent = desencriptarTexto(cajaTexto);
    }
}

function recuperarTexto(){
    var cajaTexto = document.querySelector(".texto")
    cajaTexto.placeholder = "";
    return cajaTexto.value
}

function ocultarAdelante(){
    imagen.style.display = "none";
    parrafo.style.display = "none";
}

function mostrarAdelante(){
    imagen.style.display = "flex";
    parrafo.style.display = "table-column";
}

//Función que encripta el texto.
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

//Función que desencripta el texto.
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }       
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
});

var btnPegar = document.querySelector(".btn-pegar");
btnPegar.onclick = pegarTexto;

function pegarTexto() {
    navigator.clipboard.readText()
        .then(text => {
            var cajaTexto = document.querySelector(".texto");
            cajaTexto.value = text;
        })
        .catch(error => {
            console.error("Error al pegar texto:", error);
        });
}

var areaTexto = document.querySelector(".texto");
areaTexto.addEventListener("click", function() {
    areaTexto.focus();
});
areaTexto.addEventListener("focus", function() {
    areaTexto.removeAttribute("placeholder");
});
areaTexto.addEventListener("blur", function() {
    if (areaTexto.value === "") {
        areaTexto.placeholder = "Ingrese el texto aquí...";
    }
});