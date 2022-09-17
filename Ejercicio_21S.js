// Mesa de trabajo

// Desarrollar una función que reciba un array e indique si se encuentran ordenados de menor a mayor o no.
// si están ordenados retornar true
// caso contrario retorna false
// ejemplos de arrays
let arr1 = [4, 9, 2, 5, 6, 7, 1, 2]; // false
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8]; // true

const estaOrdenado = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

console.log(estaOrdenado(arr1));
console.log(estaOrdenado(arr2));

// Desarrollar una función que genere una matriz, deberá recibir por parámetros la cantidad de filas y columnas y retornar con valores secuenciales numéricos.

const generarMatriz = (fila, columna) => {
  let matriz = [];
  for (let i = 0; i < fila; i++) {
    matriz.push([]);
    for (let j = 0; j < columna; j++) {
      matriz[i].push(i * columna + j + 1);
    }
  }

  return matriz;
};
let resultado = generarMatriz(10, 15);
//console.table(resultado);

// Dado él siguiente array de personas

const personas = [
  {
    nombre: "Arlene Barr",
    legajo: 3955,
    edad: 33,
  },
  {
    nombre: "Roslyn Torres",
    legajo: 3925,
    edad: 27,
  },
  {
    nombre: "Cleo Lopez",
    legajo: 1965,
    edad: 34,
  },
  {
    nombre: "Daniel Malone",
    legajo: 3925,
    edad: 30,
  },
  {
    nombre: "Ethel Leon",
    legajo: 1915,
    edad: 34,
  },
  {
    nombre: "Harding Mitchell",
    legajo: 1905,
    edad: 25,
  },
];

// Desarrollar una función llamada orderAscLegajo que reciba por parámetro él array de personas y realice un ordenamiento de forma ascendente
// Desarrollar una función llamada orderDescLegajo que reciba por parámetro él array de personas y realice un ordenamiento de forma descendente
// Pensar de qué forma se puede realizar los dos ítems anteriores en una sola función

const orderLegajo = (arr, orden) => {

  if (orden != "ASC" && orden != "DESC") {
    console.log("Ingresar Orden Valido (ASC o DESC)");
    return
  }
  let or = orden === "ASC" ? ">" : "<"

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - (1 + i); j++) {
      if (eval("arr[j].edad" + or + "arr[j+1].edad")) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }

  }



}

orderLegajo(personas, "ASC")
console.log(personas);
orderLegajo(personas, "DESC")
console.log(personas);
// Teniendo 3 arrays:
fila1 = [4, 9, 2]
fila2 = [3, 5, 7]
fila3 = [8, 1, 6]

// Realiza las siguientes tareas:
// Crea una matriz con esta forma:
const crearMatriz = (arr1, arr2, arr3) => {
  let matriz = []
  for (let i = 1; i <= 3; i++) {
    matriz.push(eval("arr" + i))

  }
  return matriz
}
let miMatriz = crearMatriz(fila1, fila2, fila3)
console.table(miMatriz)

// Luego, a partir de esta matriz, desarrollar una función que reciba la matriz por parámetro y retorne lo solicitado:

// Función que reciba por parámetro la fila y retornar la suma de la misma.

const sumaFila = (arr, fila) => {
  let acc = 0
  for (let i = 0; i < arr.length; i++) {
    acc += arr[fila][i]

  }
  return acc
}

let resultado1 = sumaFila(miMatriz, 2)
console.log(resultado1);

// Función que retorne en un array la suma de las diagonales [15 , 15], sumando él centro las dos veces

const sumaDiagonales = mat => {
  let accPrincipal = 0
  let accSecundario = 0
  for (let i = 0; i < mat.length; i++) {
    accPrincipal += mat[i][i]
    accSecundario += mat[i][mat.length - (i + 1)]
  }
  return [accPrincipal, accSecundario]
}

let arraySumaDiagonales = sumaDiagonales(miMatriz)
console.log(arraySumaDiagonales);
// Función que retorne en un array los elementos pares ejemplo [4, 2, 8, 6]

const arrayPares = mat => {
  let array = []
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] % 2 === 0) {
        array.push(mat[i][j])
      }
    }

  }
  return array
}

let arrayDePares = arrayPares(miMatriz)
console.log(arrayDePares);
// Función que retorne en un array los elementos mayores a 5
const arrayMasCinco = mat => {
  let array = []
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] > 5) {
        array.push(mat[i][j])
      }
    }

  }
  return array
}

let masCinco = arrayMasCinco(miMatriz)
console.log(masCinco);

// Función que retorne un objeto literal con dos propiedades
// pares : [4, 2, 8, 6], // array de pares
// impares : [9, 3, 5, 7, 1], // array de impares

const paresImpares = mat => {
  let obj = { Pares: [], Impares: [] }
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] % 2 === 0) {
        obj.Pares.push(mat[i][j])
      } else {
        obj.Impares.push(mat[i][j])
      }
    }

  }
  return obj
}

let objParesImpares = paresImpares(miMatriz)
console.log(objParesImpares);
