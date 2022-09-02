const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const noMensaje = document.querySelector(".no-mensaje");

function validarInput(texto) {
  texto = texto.toLowerCase();
  let acentos = [["á","a"],
                  ["é","e"],
                  ["í","i"],
                  ["ó","o"],
                  ["ú","u"]];
  for(let i = 0; i < acentos.length; i++) {
    texto = texto.replaceAll(acentos[i][0], acentos[i][1]);
  }

  return texto;
}

function encriptar(texto) {
    let matrizCodigo = [["e","enter"],
                        ["i","imes"],
                        ["a","ai"],
                        ["o","ober"],
                        ["u","ufat"]];

    texto = validarInput(texto);

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return texto;
}

function desencriptar(texto) {
    let matrizCodigo = [["e","enter"],
                        ["i","imes"],
                        ["a","ai"],
                        ["o","ober"],
                        ["u","ufat"]];

    texto = validarInput(texto);

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(texto.includes(matrizCodigo[i][1])) {
            texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return texto;
}

function mostrarPlaceholder(texto) {
  if(texto != "") {
    mensaje.style.backgroundImage = "none";
    noMensaje.style.visibility = "hidden";
  }
  else {
    mensaje.style.backgroundImage = "url('img/Muñeco.png')";
    noMensaje.style.visibility = "visible";
  }
}

function btnEncriptar() {
    let textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
    mostrarPlaceholder(textoEncriptado);
}

function btnDesencriptar() {
    let textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
    mostrarPlaceholder(textoEncriptado);
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    mostrarPlaceholder("");
}
