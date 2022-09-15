const Textoingresar = document.querySelector(".Textoingresar");
const Mensaje = document.querySelector(".Mensaje");
var Imagenniño = document.getElementById("Imagenniño");

function btnEncriptar(){
	const Textoencriptado = encriptamiento(Textoingresar.value);
	Mensaje.value = Textoencriptado;
	Textoingresar.value = "";
	Imagenniño.parentNode.removeChild(Imagenniño);
}

function encriptamiento(StringTexto){

	let Matrizconversion = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];

	StringTexto = StringTexto.toLowerCase();

	for (let i = 0; i < Matrizconversion.length; i++){

		if (StringTexto.includes(Matrizconversion[i][0])) {

			StringTexto = StringTexto.replaceAll(Matrizconversion[i][0], Matrizconversion[i][1]);
		}
	}

	return StringTexto;
}

function btnDesencriptar(){
	const Textodesencriptado = desencriptamiento(Textoingresar.value);
	Mensaje.value = Textodesencriptado;
	Textoingresar.value = "";
	Imagenniño.parentNode.removeChild(Imagenniño);
}

function desencriptamiento(StringTextodesen){

	let Matrizconversion = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];

	StringTextodesen = StringTextodesen.toLowerCase();

	for (let i = 0; i < Matrizconversion.length; i++){

		if (StringTextodesen.includes(Matrizconversion[i][1])) {
			
			StringTextodesen = StringTextodesen.replaceAll(Matrizconversion[i][1], Matrizconversion[i][0]);
		}
	}

	return StringTextodesen;
}

function btnCopiar(){

	var Copiar = document.getElementById("Mensaje");

	Copiar.select();
	document.execCommand("copy");
	Mensaje.value = "";

	alert("Se ha copiado el texto");
}

