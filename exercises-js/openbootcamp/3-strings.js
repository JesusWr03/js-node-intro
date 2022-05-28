const nombre = 'jesus';
const area = 'frontend';

// concatenar ambas variables
const estudiante = ` ${nombre} | ${area} `;

//metodo para transformar a mayusculas y minusculas
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();

//la longitud de esa cadena
const longitudEstudiante = estudiante.length;

//obtener primera letra de esta cadena
const startCharName = nombre.charAt(0);

//obtener la última letra de esta cadena
const endCharArea = area.charAt(area.length - 1);

// remover espacios
const removeSpaceStudent = estudiante.trim();

//saber si var. nombre esta contenido en var. estudiante
const nombreIncludesEstudiante = estudiante.includes(nombre);
