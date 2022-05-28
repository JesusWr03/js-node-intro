/*4) Programa una función que repita un texto X veces. 
miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

function loop(txt, repeat){
  for(let i = 0; i < repeat;i++){
    console.log(txt)
  }
}

loop('hello world', 4)