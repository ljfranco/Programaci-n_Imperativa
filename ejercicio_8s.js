// Bucles y repeticiones
// 1) Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.
console.log("-----------------Ejercicio 1------------------")
const numerosSiguientes = (numero) => {
    for (let i = numero; i <= numero + 10; i++) {
        console.log(i)
    }
}

numerosSiguientes(25)

// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
console.log("-----------------Ejercicio 2------------------")
for (let i = 5; i <= 20; i += 3) {
    console.log(i);
}

// 3) Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100
console.log("-----------------Ejercicio 3------------------")

const sumatoria = () => {
    let resultado = 0
    for (let i = 0; i <= 100; i++) {
        resultado += i
        console.log(i + " +")
    }
    console.log("--------")
    console.log(resultado)
}
sumatoria()


// 4) Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.
console.log("-----------------Ejercicio 4------------------")

const factorial = (numero) => {
    let resultado = 1
    for (let i = 1; i <= numero; i++) {
        resultado *= i
    }
    console.log(`${numero} ! = ${resultado}`)
}

factorial(10)


// 5) Crear una función que muestre todos los números de la secuencia de
// fibonacci hasta el valor ingresado por parámetro.

const fibonacci = (numero) => {

    let resultado1 = 0
    let resultado2 = 1

    while (resultado2 <= numero || resultado1 <= numero) {
        numero >= resultado1 ? console.log(resultado1) : ""
        numero >= resultado2 ? console.log(resultado2) : ""
        resultado1 += resultado2
        resultado2 += resultado1
    }
}
fibonacci(2250)