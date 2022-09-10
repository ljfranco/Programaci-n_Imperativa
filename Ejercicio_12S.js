const alicia = [10, 80, 75];
const bob = [10, 20, 25];

let concurso = {
    participantes: [],
    etapa: [],
    ganador: "",

    encontrarGanador: function (a, b) {
        let puntosPrimerParticipante = 0;
        let puntosSegundoParticipante = 0;
        for (let i = 0; i < 3; i++) {
            if (a[i] > b[i]) {
                puntosPrimerParticipante += 1
                this.etapa[i] = "1er Participante"
            } else if (a[i] < b[i]) {
                puntosSegundoParticipante += 1
                this.etapa[i] = "2do Participante"
            }
        }
        if (puntosPrimerParticipante > puntosSegundoParticipante) {
            return this.ganador = "primer"
        } else if (puntosPrimerParticipante < puntosSegundoParticipante) {
            return this.ganador = "segundo"
        } else return this.ganador = ""


    }


}




//console.log("El ganador es: " + concurso.encontrarGanador(alicia, bob) + " participante");

//console.log(concurso);
//--------------------------------------------------------------------------------
//                              Extras
/*digitalHouse()
Creá la función digitalHouse() que recibirá 2 números como parámetros. La función
deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los
siguientes criterios:
● Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá
mostrar el string “Digital” en lugar del número.
● Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá
mostrar el string “House” en su lugar del número.
● Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string
“Digital House” en lugar del número.*/

const digitalHouse = (num1, num2) => {
    for (let i = 1; i <= 100; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            console.log("Digital House")
        } else if (i % num1 === 0) {
            console.log("Digital")
        } else if (i % num2 === 0) {
            console.log("House")
        } else {
            console.log(i)
        }
    }
}

//digitalHouse(2, 3)

/*sumArray()... Reloaded
Vamos a retomar el ejercicio sumArray() que hicimos en la clase de arrays, pero esta vez
lo modificaremos para que pueda recibir un array de números de cualquier cantidad de
elementos.
Si no recordás el enunciado original: deberás crear una función sumaArray que acepte
un arreglo de números y devuelva la suma de todos ellos.
Ejemplo:● sumArray([1,2,3]) // 6
● sumArray([10, 3, 10, 4]) // 27
● sumArray([-5,100]) // 95*/


const sumArray = (arr) => {
    let resultado = 0
    for (let i = 0; i < arr.length; i++) {
        resultado += arr[i]
    }
    return resultado
}

let suma = sumArray([2, 5, 8, 10])

console.log(`El resultado es ${suma}`)

/*Ya que estamos retocando funciones, hagamos lo propio con la función del ejercicio
simulación join(). Deberás modificar la función join() de manera que pueda recibir un
array de strings de cualquier cantidad de elementos.
Importante: no podés usar el método Array.join() original.
Por ejemplo:
join(["h","o","l","a"]) debe retornar el string "hola".
join(["c","h","a,"u"]) debe retornar el string "chau".*/

let arr1 = ["h","o","l","a"]
let arr2 = ["c","h","a","u"]

const join = (arr) => {
    let texto = ""
    for (let i = 0; i < arr.length; i++) {
        texto += arr[i]
    }
    return texto
}

let palabra = join(arr2)
console.log(palabra)