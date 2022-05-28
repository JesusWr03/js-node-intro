/*3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
 miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

function splitText(text, divisor){
  let result = text.split(divisor);
  
	return result
}

splitText('Hello World',' ') //-> ['Hello', 'World']