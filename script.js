

//crear funcion para dibujar ahorcado

let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

  function dibBase(){
		pincel.fillRect(100, 246, 224, 4.5);
	};

	function dibPalo(){
    	pincel.fillRect(120, 12, 4.5, 238);
            // palo //coordenadas y , x y ancho y largo
	};

	function dibArriba(){	
		pincel.fillRect(124, 12, 124, 4.5);
		pincel.fillRect(244, 12, 4.5, 48);	
	};		

	function dibujarCabeza(x, y, radio, color) {
		pincel.fillStyle = color;
		pincel.beginPath();
		pincel.arc(x, y, radio, 0, 2*3.14);
		pincel.stroke();
	};
	
	function dibCuerpo(){
		pincel.fillRect(244, 108, 2.5, 60);
		
	};

	function brazoIz(x,y){
		pincel.beginPath();
		pincel.moveTo(244, 118);
		pincel.lineTo(220,160);
		pincel.stroke();	
	};
	
	function brazoDer(x,y){
		pincel.beginPath();
		pincel.moveTo(244, 118);
		pincel.lineTo(274, 154);
		pincel.stroke();		
	};
	
	function piernaIz(x,y){
		pincel.beginPath();
		pincel.moveTo(244, 168);
		pincel.lineTo(280,200);
		pincel.stroke();
	};
	
	function piernaDer(x,y){
		pincel.beginPath();
		pincel.moveTo(244, 168);
		pincel.lineTo(210,200);
		pincel.stroke();
	};

//logica para escoger una palabra en forma aleatoria y guardarla en LocalStorage
let palabras = ['SALIDA', 'CODIGO', 'ESCRIBIR', 'TECNICA', 'TUTORIAL', 'PROGRAMA','PRESENTE', 'PERSONAS', 'ADELANTE','GOBIERNO', 'ETIQUETA', 'HISTORIA', 'ESTRELLA', 'CALIENTE', 'JUSTICIA', 'PREGUNTA', 'NOSOTROS'];
if(localStorage.getItem("palabras") === null) {
	localStorage.setItem('palabras', JSON.stringify(palabras))
}

//funcion para agregar nuevas palabras y tenerlas en LocalStorage
function agregarPalabras(){
	let entraPalabra = document.getElementById("nuevaPalabra").value.toUpperCase();
	let palabraLocal = JSON.parse(localStorage.getItem("palabras"));
	palabraLocal.push(entraPalabra);
	let nuevasPalabras = JSON.stringify(palabraLocal);
	console.log(nuevasPalabras);
	localStorage.setItem('palabras', nuevasPalabras);
};

let nuevasPalabras = JSON.parse(localStorage.getItem('palabras'));

//usa la funcion para elegir aleatoriamente la palabra, la muestro por consola
let aValor = palabraRandom(nuevasPalabras);
console.log(aValor);

//separa la palabra y reemplaza por "_ " cada letra, luego lo muestra por consola
let palabraGuiones = aValor.replace(/./g,"_ ");
console.log(palabraGuiones);

//separa la palabra y muestra aValor en consola separado por letras
let palabraSeparada = aValor.split('');
console.log(palabraSeparada);

function palabraRandom(nuevasPalabras){
	let aleatorio = Math.floor(Math.random()*nuevasPalabras.length);
	let aValor = nuevasPalabras[aleatorio];
	return aValor;
}



String.prototype.replaceAt=function(index, character) {
	 return this.substring(0, index) + character + this.substring(index+character.length); } 

//mostrar aValor en pantalla separado por letras
function ocultarPalabra(){
	let stringOculto = document.querySelector(".palabraOculta").value;
	document.querySelector(".palabraOculta").value;
}

//adivinando letras
let contadorEquivocado = 0;
let letrasEscritas = [];

//Para que la tecla Enter funcione como click en el boton de verificar letra
document.getElementById("letrasUsadas")
		.addEventListener("keydown", function(e){
			if(e.key === 'Enter'){
				document.getElementById("verificar").click();
			}
		});

//busco el evento donde se ingresa la letra y la comparo con las de la palabra, si coincide la reemplaza
//por el guion correspondiente, si no dibuja una parte del ahorcado.
document.querySelector('#verificar').addEventListener('click',()=>{
	let letra = document.querySelector('.letrasUsadas').value.toUpperCase();
	letrasEscritas.push(letra);
	let equivocado = true;

	for(let i in aValor){
		if(letra == aValor[i]){
			palabraGuiones = palabraGuiones.replaceAt(i*2, letra);
			equivocado = false;
		}
	}
	if(equivocado){
		contadorEquivocado++;
	}if (contadorEquivocado == 1) {
		{dibBase();}
	}if (contadorEquivocado == 2) {
		{dibBase();
			dibPalo();
			dibArriba();
		}
	}if (contadorEquivocado == 3) {
		{dibBase();
			dibPalo();
			dibArriba();
			dibujarCabeza(244,84,24,"black");
	}
	}if (contadorEquivocado == 4) {
		{dibBase();
			dibPalo();
			dibArriba();
			dibujarCabeza(244,84,24,"black");
			dibCuerpo();
		}
	}if (contadorEquivocado == 5) {
		{dibBase();
			dibPalo();
			dibArriba();
			dibujarCabeza(244,84,24,"black");
			dibCuerpo();
			brazoIz();
	}
	}if (contadorEquivocado == 6) {
		{dibBase();
			dibPalo();
			dibArriba();
			dibujarCabeza(244,84,24,"black");
			dibCuerpo()
			brazoIz();
			brazoDer();
	}
	}if (contadorEquivocado == 7) {
		{dibBase();
			dibPalo();
			dibArriba();
			dibujarCabeza(244,84,24,"black");
			dibCuerpo()
			brazoIz();
			brazoDer();
			piernaIz();
	}
	}if (contadorEquivocado == 8) {
		{dibBase();
			dibPalo();
			dibArriba();
			dibujarCabeza(244,84,24,"black");
			dibCuerpo()
			brazoIz();
			brazoDer();
			piernaIz();
			piernaDer();
			document.querySelector('.perdedor').style.display = 'flex';}
	}else{
		if(palabraGuiones.indexOf('_') < 0){
			document.querySelector('.ganador').style.display = 'flex';
		}
	}

	document.querySelector('#input').innerHTML = palabraGuiones;
	document.querySelector('#letrasYaUsadas').innerHTML = letrasEscritas;
	document.querySelector('.letrasUsadas').value = '';
	document.querySelector('.letrasUsadas').focus();

});

//ver por consola el nuevo listado y el original
console.log(nuevasPalabras);
console.log(palabras);

//agregado de palabras

//comprueba que la palabra ingresada solo tenga letras y si es asi la agrega al listado.
function soloLetras(inputtxt){
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {agregarPalabras();
      return true;
     }
   else
     {
     alert("Ingrese solo letras y palabras coherentes por favor...");
	 document.querySelector('#nuevaPalabra').value = '';
     return false;
     }
  };


	//function unaLetra(inputtxt){
	//	var letters = /^[A-Za-z]+$/;
	//	if(inputtxt.value.match(letters))
	//	{
	//	return true;
	//	}
	//	else
	//	{
	//	alert("Ingrese solo letras por favor...");
	//	document.querySelector('#letrasUsadas').value = '';
	//	return false;
	//	}
	//};