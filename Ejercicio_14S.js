// Ejercicios
// A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


// Obtener en un nuevo array las edades menores a 18.
// Obtener en un nuevo array las edades mayor o igual a 18.
// Obtener en un nuevo array las edades igual a 18.

const nuevoArrayMenor = arr => {
    let menor18 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 18) {
            menor18.push(arr[i])
        }
    }
    return menor18
}
const nuevoArrayMayor = arr => {
    let mayor18 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 18) {
            mayor18.push(arr[i])
        }
    }
    return mayor18
}
const nuevoArrayigual = arr => {
    let igual18 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 18) {
            igual18.push(arr[i])

        }
    }
    return igual18
}

console.log(nuevoArrayMenor(edades));
console.log(nuevoArrayMayor(edades));
console.log(nuevoArrayigual(edades));

// Obtener el menor.

const menor = arr => {
    let edadMinima = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (edadMinima > arr[i]) {
            edadMinima = arr[i]
        }
    }
    return edadMinima
}

console.log(menor(edades));

// Obtener el mayor. 
const mayor = arr => {
    let edadMaxima = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (edadMaxima < arr[i]) {
            edadMaxima = arr[i]
        }
    }
    return edadMaxima
}

console.log(mayor(edades));
// Obtener el promedio de edades.

const promedio = arr => {
    let suma = 0
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i]
    }
    return suma / arr.length
}

console.log(promedio(edades));
// Incrementar en 1 todas las edades.
const incremento = arr => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 1
    }

}
incremento(edades)
console.log(edades);

// Recordemos que hay muchas formas de resolver, nuestra tarea será pensar cuál es la mejor para poder reutilizar nuestro código con diferentes array de edades.

const edadesGrupo1 = [21, 12, 15, 18, 25];
const edadesGrupo2 = [2, 11, 54, 63, 24];


// Excelente, ahora, como ya trabajamos un array, sabemos que este puede tener como elemento cualquier tipo de dato —Number, String, Objetos Literales, Array, etc—. Para continuar con la Mesa de Trabajo trabajaremos con un array de objetos literales, para ello invitamos a repasar la clase de Objetos Literales para tener en claro su estructura y sintaxis. Podemos decir que un objeto literal es una colección de propiedades y cada propiedad es una asociación entre una clave y un valor.

// /*
//  Observamos que es un array por su sintaxis que comienza y termina con corchetes []
//    y sus elementos tienen la sintaxis de objetos literales {}
//    Entonces, podemos decir que tenemos una array de objetos literales, 
//    o una colección de objetos literales
// */
// const arrayDeObjetosLiterales =
// [
//     {},
//     {},
//     {},
//     {}
// ];



// Tenemos como base un array de cuentas bancarias, donde a cada una la representamos con un objeto literal. A partir de este array trabajaremos sobre los siguientes enunciados, resolviendo de la forma que nos parezca más adecuada
const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: true,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

const arrayMenores30 = arr => {
    let menores30 = []
    for (let i = 0; i < arr.length; i++) {
        arr[i].edadTitular < 30 ? menores30.push(arr[i]) : ""
    }
    return menores30

}
let menos30 = arrayMenores30(arrayCuentas)
console.log(menos30)

// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
const arrayMayores30 = arr => {
    let mayores30 = []
    for (let i = 0; i < arr.length; i++) {
        arr[i].edadTitular > 30 ? mayores30.push(arr[i]) : ""
    }
    return mayores30

}
let mas30 = arrayMayores30(arrayCuentas)
console.log("-------------------------------------------------")
console.log(mas30)
// Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
const arrayiguales30 = arr => {
    let iguales30 = []
    for (let i = 0; i < arr.length; i++) {
        arr[i].edadTitular === 30 ? iguales30.push(arr[i]) : ""
    }
    return iguales30

}
let igual30 = arrayiguales30(arrayCuentas)
console.log("-------------------------------------------------")
console.log(igual30)
// Obtener la cuenta con el titular de la misma más joven.

const masJoven = arr => {
    let joven = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i].edadTitular < joven.edadTitular ? joven = arr[i] : ""
    }
    return joven

}
let objetoJoven = masJoven(arrayCuentas)
console.log("-------------------------------------------------")
console.log(objetoJoven)

// Obtener un array con las cuentas habilitadas.

const habilitadas = arr => {
    let acHabilitadas = []
    for (let i = 0; i < arr.length; i++) {
        arr[i].estaHabilitada ? acHabilitadas.push(arr[i]) : ""
    }
    return acHabilitadas

}
let cuentasHabilitadas = habilitadas(arrayCuentas)
console.log("-------------------------------------------------")
console.log(cuentasHabilitadas)
// Obtener un array con las cuentas deshabilitadas.

const deshabilitadas = arr => {
    let acDesHabilitadas = []
    for (let i = 0; i < arr.length; i++) {
        arr[i].estaHabilitada ? "" : acDesHabilitadas.push(arr[i])
    }
    return acDesHabilitadas

}
let cuentasDesHabilitadas = deshabilitadas(arrayCuentas)
console.log("-------------------------------------------------")
console.log(cuentasDesHabilitadas)
// Obtener la cuenta con el menor saldo.

const menorSaldo = arr => {
    let saldo = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i].saldo < saldo.saldo ? saldo = arr[i] : ""
    }
    return saldo

}
let ctaMenorSaldo = menorSaldo(arrayCuentas)
console.log("-------------------------------------------------")
console.log(ctaMenorSaldo)

// Obtener la cuenta con el mayor saldo.

const mayorSaldo = arr => {
    let saldo = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i].saldo > saldo.saldo ? saldo = arr[i] : ""
    }
    return saldo

}
let ctaMayorSaldo = mayorSaldo(arrayCuentas)
console.log("-------------------------------------------------")
console.log(ctaMayorSaldo)




// Extras:
// Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico

const agregarID = arr => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].Id = i + 1
    }

}
console.log("-------------------------------------------------")
agregarID(arrayCuentas)
console.log(arrayCuentas)

// Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null
const buscarPorId = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].Id === id) {
            return arr[i]
        }  

    }
    return null

}
let resultadoBusqueda = buscarPorId(arrayCuentas, 7)
console.log("-------------------------------------------------")
console.log(resultadoBusqueda)


// Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro

// Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined
// Reutilizando la función  buscarPorId 


//funncion que reciba un array de edades y retorne un objeto con 2 propiedades array de edades mayores y menores a 18
// ej. obj{
//     menores18:[]
//     mayores18:[]
// }


const separarEdades = arr =>{
    let objetoEdad = {
        menores18:[],
        mayores18:[]
    }
    for(let i = 0 ; i < arr.length; i++){
        
        if(arr[i]<18){
            objetoEdad.menores18.push(arr[i])
        }else{
            objetoEdad.mayores18.push(arr[i])
        }
    }
    return objetoEdad
}

console.log(separarEdades(edades));