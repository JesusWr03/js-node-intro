/*Programa una función para contar el número de veces que se repite una palabra en un texto largo,
 miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

let findWord = (text, search)=> {
	let test = text.match(new RegExp("[^\sA-Za-z0-9]" + search,'gi'))

    return result = test === null ? 'no se encontró' : test.length;
}

console.log(findWord('hello,world , bye world','world'))