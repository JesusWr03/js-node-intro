/* Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
 miFuncion("Hola Mundo", 4) devolverá "Hola".*/

function cutText(txt,cut){
  
  let final = txt.slice(0,cut)
  
  console.log(final)
}

cutText('hello world',2) // --> he