function generarMatriz10por10() {
    let matriz = [];
    let fila = [];
    let acc = 1;
    for (let i = 0; i < 10; i++) {
        fila = []
        for (let j = 0; j < 10; j++) {
            fila[j] = acc;
            acc++;
            //console.table(fila);
        }
        //console.table(fila);
        matriz.push(fila)
       // console.table(matriz)
    }

    return matriz;
}

let matriz10por10 = generarMatriz10por10();
console.table(matriz10por10);

//  3) Por último, vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único.

// Rojo: 505
// Verde 505
// Trabajar en el mismo sandbox del ejercicio 2.

const diagonalVerde = (arr) => {
    let acc = 0
    for (let i = 0; i < arr.length; i++) {
        acc += arr[i][i]
    }
    return acc
}

const diagonalRoja = (arr) => {
    let acc = 0
    let j = 9
    for (let i = 0; i < arr.length; i++) {
        acc += arr[j][i]
        j --
    }
    return acc
}



let resultadoVerde = diagonalVerde(matriz10por10)
console.log(resultadoVerde)
let resultadoRojo = diagonalRoja(matriz10por10)
console.log(resultadoRojo)