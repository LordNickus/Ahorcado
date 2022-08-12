//crear funcion para dibujar ahorcado

let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
  function dibBase(){
		pincel.fillRect(100, 246, 224, 4.5);
	};

	function dibPalo(){
    	pincel.fillRect(124, 12, 4.5, 330);
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
		
	dibBase()
	dibPalo()
	dibArriba()
	dibujarCabeza(244,84,24,"black");
	dibCuerpo()
	brazoIz();
	brazoDer();
	piernaIz();
	piernaDer();



//crear funcion para escoger palabra secreta
function palabraRandom(palabras){
	let aleatorio = Math.floor(Math.random()*palabras.length);
	let aValor = palabras[aleatorio];
	return aValor;
}



//logica para escoger una palabra en forma aleatoria
let palabras = ['SALIDA', 'CODIGO', 'ESCRIBIR', 'TECNICA', 'TUTORIAL', 'PROGRAMA','PRESENTE', 'PERSONAS', 'ADELANTE','GOBIERNO', 'ETIQUETA', 'HISTORIA', 'ESTRELLA', 'CALIENTE', 'JUSTICIA', 'PREGUNTA', 'NOSOTROS'];
let aValor = palabraRandom(palabras);
console.log(aValor);

//mostrar aValor en pantalla separado por letras

let palabraSeparada = aValor.split('');
console.log(palabraSeparada);

//crear funcion para dibujar los guiones para cada letra



//agregado de palabras
	//toUpperCase()
