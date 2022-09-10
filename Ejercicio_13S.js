// /*Loop de pares
// Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.

const loopDPares = num =>{
    for (let i=0; i <= 100; i++){
        (i + num) % 2  === 0 ? console.log(`El numero ${i+num} es par`): console.log(i)
    }
}

//loopDPares(5)


// Loop de impares con palabra
// Deberás crear una función llamada loopDeImpares que reciba como parámetros un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.*/


const loopDeImpares = (num, palabra) =>{
    for (let i=0; i <= 100; i++){
        (i + num) % 2  !== 0 ? console.log(palabra): console.log(i)
    }
}

//loopDeImpares(5,"hola")





// /*Sumatoria
// Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)
// sumatoria(8) debe retornar 36*/

const sumatoria = num => {
    let resultado = 0
    for (let i = 1 ; i <= num ; i++){
        resultado += i
    }
    return resultado
}

let suma = sumatoria(100)
//console.log(suma)

// Nuevo arreglo
// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]


function nuevoArreglo(num){
    let arr = []
    for(let i = 0 ; i < num; i++){
        arr.push(i+1)
    }
    return arr
}

let miArreglo = nuevoArreglo(100)
//console.log(miArreglo)

// Similar String.split()
// Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

const split = texto => {
    let arr = []
    for(let i = 0; i < texto.length; i++){
        arr[i]= texto[i]
    }
    return arr
}
let miSplit = split("hola")
//console.log(miSplit)

// Manejando dos arreglos
// Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a


const arrayHandler = (arr1, arr2) => {
    if(arr1.length === arr2.length){
    for(let i = 0 ; i<arr1.length; i++){
        console.log(`Soy ${arr1[i]} y yo soy ${arr2[i]}`);
    }
}else console.log("Los array son de diferente tamaño");
}

//arrayHandler([1,2,3,4], ["h","o","l","a"])

// /*Palíndromo
// Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false*/

const palindromo = palabra =>{
    let reverso = ""
    for (let i = palabra.length-1 ; i >= 0; i--){
    reverso += palabra[i]
    }
    console.log(palabra + " / " + reverso)
    return palabra === reverso 
}

let resultadoPalindromo = palindromo("anilina")
console.log(resultadoPalindromo)
