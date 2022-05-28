//Programa una función que elimine cierto patrón de caracteres de un texto dado,
//miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const removePattern = (text, pattern) => {
  return text.replaceAll(pattern, "");
};

console.log(removePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz", "xyz"));