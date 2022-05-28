const listaCompra = ["arroz", "pan", "azucar", "sal", "fideos"];

// agregar nuevo item
listaCompra.push("Aceite de Girasol");

// eliminar aceite de girasol (o el ultimo)
listaCompra.pop();

// peliculas
const peliculasSeries = [
  {
    titulo: "Interestellar",
    director: "Christopher Nolan",
    fecha: 2014,
  },
  {
    titulo: "Moon Knight",
    director: "Mohamed Diab",
    fecha: 2022,
  },
  {
    titulo: "The Martian",
    director: "Ridley Scott",
    fecha: 2015,
  },
];

// peliculas fecha posterior a 2014
const peliculas2014 = peliculasSeries.filter((i) => i.fecha > 2014);

// obtener directores
const directoresPeliculas = peliculasSeries.map((mov) => mov.director);

// obtener los titulos
const titulosPeliculas = peliculasSeries.map((mov) => mov.titulo);

// concatenar directos y peliculas en 1 array
const concatDirector = directoresPeliculas.concat(titulosPeliculas);

// concatenar con el factor de propagacion
const propagacionDirectorTitulo = [...directoresPeliculas, ...titulosPeliculas];