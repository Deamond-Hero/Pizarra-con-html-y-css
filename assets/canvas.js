const canvasContainer = document.getElementById("canvas");
const context = canvasContainer.getContext("2d")

const canvas = document.getElementsByClassName("canvas");


//Defino las variables que contendrán mis coordenadas en donde se alamacenará la ubicación del puntero del mouse y propiedades de la linea a trazar.
let coordenadaX; //variable con valor la ubicación del mouse en el eje X
let coordenadaY; //variable con valor la ubicación del mouse en el eje Y
let colorTrazo = "#000"; //variable con valor color de trazo
let grosorTrazo = 16; //variable con valor grosor de trazo
let formaTrazo = "round"; //variable con valor forma de trazo
let formaPunto = "round"; //variable con valor forma de punto

const dibujar = (cursorEjeX, cursorEjeY)=>{
    context.beginPath(); //nos permite comenzar un nuevo trazo, y no seguir a donde habíamos terminado el trazo anterior
    context.moveTo(coordenadaX,coordenadaY) // asigmación de valores del cursor
    context.lineWidth = grosorTrazo; // grosor del trazo
    context.strokeStyle = colorTrazo; //color de la linea
    context.lineCap = formaPunto 
    context.lineJoin = formaTrazo;
    context.lineTo(cursorEjeX, cursorEjeY) //ubicación del puntero donde se va a trazar

    context.stroke()  //ejecuta el trazo

    coordenadaX = cursorEjeX;
    coordenadaY = cursorEjeY;
}

//"mouseDown" es la encargada de ejecutar la función dibujar cuando es invocada por el evento en las coordenadas especificas.
const mouseDown= (event)=>{
    coordenadaX = event.offsetX;
    coordenadaY = event.offsetY;
    dibujar(coordenadaX,coordenadaY)
    canvasContainer.addEventListener("mousemove", mouseMoving)
    
}

//Toma en tiempo real la ubicación del cursor y ejecuta la función dibujar en donde se encuentra el cursor.
const mouseMoving= (event) => {
    dibujar(event.offsetX, event.offsetY)
}


//La función de "mouseStop" es elimiar la acción dibujar cuando se suelta el click izquierdo
const mouseStop = () =>{
    canvasContainer.removeEventListener("mousemove", mouseMoving)
}


//Llamamos a las funciones cada vez que son invocadas por los eventos
canvasContainer.addEventListener("mousedown", mouseDown)
canvasContainer.addEventListener("mouseup", mouseStop)


//Esta función se encarga de limpiar nuestro lienzo sin necesidad de tener que recargar toda nuestra página.
const limpiarLienzo = () => {
    context.clearRect(0, 0, canvasContainer.width, canvasContainer.height);
}
