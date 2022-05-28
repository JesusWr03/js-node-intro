//Programa una función que obtenga un numero aleatorio entre 501 y 600.

const randomNum = (min = 0, max = 1) => {
  if (typeof min !== "number" && typeof max !== "number") console.warn("Ingresa solo numeros");
  else if (min >= max) console.warn("Debes especificar un minimo y maximo valido");
  else console.log(Math.floor(Math.random() * (max - min)) + min);
};

randomNum(5, 2);
