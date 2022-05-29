const Myinfo = {
  name: "Jesus",
  age: 19,
  height: 183,
  isDev: true,
};

const myAge = Myinfo.age;

const listaObj = [
  { ...Myinfo },
  {
    name: "Jesús",
    age: 50,
    height: 183,
    isDev: true,
  },
  {
    name: "Jesuss",
    age: 80,
    height: 183,
    isDev: true,
  },
];

const ordenarLista = listaObj.sort((a, b) => b.age - a.age);