const textArea = document.getElementById("textArea");
const mensaje = document.getElementById("mensaje");
const copia = document.querySelector(".copia");
const asideContainer = document.querySelector(".aside__container");
const parrafo1 = document.getElementById("textOculto1");
const parrafo2 = document.getElementById("textOculto2");
const imagen = document.getElementById("imagen");

copia.style.display = "none";

function validarTexto() {
  let textoEscrito = textArea.value;
  let validador = textoEscrito.match(/^[a-z]*$/);

  if (!validador || validador === 0) {
    alert("Solo se permiten letras minúsculas y sin acentos");
    return false;
  }

  return true;
}

function btnEncriptar() {
  if (validarTexto()) {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    textArea.value = "";
    copia.style.display = "block";
    ocultarElementos(asideContainer, [parrafo1, parrafo2, imagen]);
  }
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }

  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }

  return stringDesencriptada;
}

function copiar() {
  mensaje.select();
  document.execCommand("copy");
  alert("Texto copiado: " + mensaje.value);
}

copia.addEventListener("click", copiar);

function verificarTexto() {
  var textbox2 = document.getElementById('mensaje');
  var imagen = document.getElementById('imagen');

  if (textbox2.value !== '') {
    imagen.style.display = 'none';
  } else {
    imagen.style.display = 'block';
  }
}

var textarea = document.getElementById('mensaje');
var copiar = document.getElementById('copiar');
var alturaOriginal = textarea.scrollHeight;

function ajustarAltura() {
  textarea.style.height = 'auto';
  var alturaContenido = textarea.scrollHeight;
  textarea.style.height = alturaContenido + 'px';

  if (textarea.value !== '') {
    parrafo1.style.display = 'none';
    parrafo2.style.display = 'none';
    imagen.style.display = 'none';
    copiar.style.display = 'block';

    asideContainer.classList.add('has-text');
  } else {
    parrafo1.style.display = 'block';
    parrafo2.style.display = 'block';
    imagen.style.display = 'block';
    copiar.style.display = 'none';
    textarea.style.height = alturaOriginal + 'px';

      asideContainer.classList.remove('has-text');

  }
}

function ocultarElementos(container, elementos) {
  elementos.forEach((elemento) => {
    elemento.style.display = "none";
  });
}


function verificarTexto() {
  var textbox2 = document.getElementById('mensaje');
  var imagen = document.getElementById('imagen');

  if (textbox2.value !== '') {
    asideContainer.classList.add('has-text');
    imagen.style.display = 'none'; // Oculta la imagen si el textbox2 tiene texto
  } else {
    asideContainer.classList.remove('has-text');
    if (!asideContainer.classList.contains('has-text')) {
      imagen.style.display = 'none'; // Oculta la imagen si el textbox2 está vacío y el contenedor aside no tiene la clase "has-text"
    }
  }
}