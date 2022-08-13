const prompt = require("prompt-sync")({ sigint: true })

let ejercicio

while (ejercicio != 0) {

    ejercicio = parseInt(prompt("¿Que ejercicio quieres probar? (1 a 12)(0 = Salir): "))

    switch (ejercicio) {

        case 1:
            // -----Ejercicio 1----
            let frase = prompt("ingresa una frase: ")

            console.log(frase);

            break

        case 2:
            // -----Ejercicio 2----

            let nombre = prompt("ingresa tu nombre: ")

            console.log("Hola " + nombre + "!");

            break

        case 3:
            // -----Ejercicio 3----
            let num1 = parseInt(prompt("ingresa un numero: "))

            let num2 = parseInt(prompt("ingresa otro numero: "))

            console.log(`La suma de ambos numeros es ${num1 + num2}`);

            break

        case 4:
            // -----Ejercicio 4----

            let año = parseInt(prompt("Ingrese su año de naciomiento: "))

            let añoActual = new Date()
            console.log(`Tienes ${añoActual.getFullYear() - año} años`)

            break

        case 5:
            // -----Ejercicio 5---- 

            let numero = Math.round(Math.random() * 10)
            let numeroUsuario = 50
            let resultado = ""
            do {
                numeroUsuario = prompt("Ingresa un numero del 1 al 10: ")
                resultado = numero == numeroUsuario ? "Exelente, ese es el numero " : "Numero incorrecto, prueba nuevamente"
                console.log(resultado);
            } while (numero != numeroUsuario)

            break

        case 6:
            // -----Ejercicio 6----

            for (let i = 0; i <= 100; i++) {
                i % 2 == 0 ? console.log(i) : ""
            }

            break

        case 7:
            // -----Ejercicio 7----

            const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"]

            for (let i = 0; i <= 4; i++) {
                console.log(nombres[i])
            }

            break

        case 8:
            // -----Ejercicio 8----

            let num = parseInt(prompt("Ingrese un numero: "))
            num > 500 ? console.log(num * .18) : console.log("El numero es <= a 500, no se calcula")

            break

        case 9:
            // -----Ejercicio 9----

            const nomb = ["Pedro", "Pablo", "Maria", "Juan", "Diana"]
            const elemento = () => {
                if (nomb.length >= 3) {
                    return nomb[2]
                } else {
                    return -1;
                }
            }
            console.log(elemento(...nomb));

            break

        case 10:
            // -----Ejercicio 10----

            let numeroNatural = parseInt(prompt("Ingresa un numero natural de 1 o 2 cifras: "))
            if (numeroNatural < 10) {
                console.log(`A tu numero le faltan ${10 - numeroNatural} para ser de 2 cifras`)
            } else {
                console.log(`A tu numero le faltan ${100 - numeroNatural} para ser de 3 cifras`);
            }
            break

        case 11:
            // -----Ejercicio 11----

            let cantidadDeNotas = parseInt(prompt("¿Cuantas notas quieres promediar?: "))
            let sumatoria = 0
            let promedio = (numero, n) => numero / n


            for (let i = 1; i <= cantidadDeNotas; i++) {
                sumatoria = sumatoria + parseInt(prompt("Nota N° " + i + ": "))
            }
            console.log("La nota promedio es: " + promedio(sumatoria, cantidadDeNotas))

            break

        case 12:
            // -----Ejercicio 12----

            let numSuma = parseInt(prompt("Ingresa el numero hasta el cual deseas sumar: "))
            let result = 0
            for (let i = 0; i <= numSuma; i++) {
                result = result + i
            }

            console.log("El resultado es: " + result);

            break

    }
}
