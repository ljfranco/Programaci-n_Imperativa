// Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

let likes = [10, 25, 33, 54, 51, 20, 5, 85, 100, 545, 12, 336, 51, 542, 85]

const ordenarLikes = arr => {
    let aux = undefined
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {

                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
    return resultados = {
        primerPuesto: arr[0],
        segundoPuesto: arr[1],
        tercerPuesto: arr[2],
        ultimoPuesto: arr[arr.length - 1]
    }
}
let resultado = ordenarLikes(likes)
console.log(likes);
console.log(resultado);


// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

let temperatura = [
    {
        dia: 22,
        mes: 02,
        tempMinima: 16,
        tempMaxima: 23
},
    {
        dia: 23,
        mes: 02,
        tempMinima: 15,
        tempMaxima: 22
},
    {
        dia: 24,
        mes: 02,
        tempMinima: 12,
        tempMaxima: 28
},
    {
        dia: 2,
        mes: 02,
        tempMinima: 18,
        tempMaxima: 30
}
]

const ordenarTemperaturas = (arr,criterio,orden) =>{
    if (orden !== "ASC" && orden !== "DESC") {
        return
    }
    let aux = undefined
    if (orden === "ASC") {
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - (i+1); j++) {
                if(arr[j][criterio]>arr[j+1][criterio]){
                    aux = arr[j][criterio]
                    arr[j][criterio]=arr[j+1][criterio]
                    arr[j+1][criterio] =aux
                }
            }
            
        }
    }else {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - (i+1); j++) {
                if(arr[j][criterio]<arr[j+1][criterio]){
                    aux = arr[j][criterio]
                    arr[j][criterio]=arr[j+1][criterio]
                    arr[j+1][criterio] =aux
                }
            }
            
        }
    }
}

ordenarTemperaturas(temperatura,"tempMaxima","ASC")


console.log(temperatura);
