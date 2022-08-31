const prompt = require("prompt-sync")({ sigint: true })


const totalAPagar = (vehiculo, litrosConsumidos) => {

    let precio = 0
    switch (vehiculo) {
        case "auto":
            precio = precio + 86 * litrosConsumidos
            break
        case "moto":
            precio = precio + 70 * litrosConsumidos
            break
        case "autobus":
            precio = precio + 55 * litrosConsumidos
            break
        default: "ingrese un vehiculo valido"
            break
    }


    precio = precio * litrosConsumidos;

    (litrosConsumidos > 0 && litrosConsumidos < 25) ? precio = precio + 50 : precio = precio + 25
    return precio

}

console.log(totalAPagar("moto", 30))

//-----------------------Ejercicio 3----------------------------


let totalPago = 0

const sandwich = (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {

    switch (base) {
        case "pollo": totalPago += 150
            break
        case "carne": totalPago += 200
            break
        case "veggie": totalPago += 100
            break

        default: console.log("ingrese un valor valido")
    }

    switch (pan) {
        case "blanco": totalPago += 50
            break
        case "negro": totalPago += 60
            break
        case "s/gluten": totalPago += 75
            break
        default: console.log("ingrese un valor valido")
    }

    queso == true ? totalPago += 20 : ""
    tomate == true ? totalPago += 15 : ""
    lechuga == true ? totalPago += 10 : ""
    cebolla == true ? totalPago += 15 : ""
    mayonesa == true ? totalPago += 5 : ""
    mostaza == true ? totalPago += 5 : ""


    return totalPago
}


console.log(sandwich("pollo", "blanco", true, true, false, false, true, false));

// ------------------------Extra Bonus-----------------------

// ¿Cuál es el número secreto?
// Creá una función que reciba un parámetro numérico y verifique si el mismo es el
// número secreto.El número secreto deberá ser seleccionado de manera random de
// entre 1 y 10



const numeroSecreto = (miNumero) => {

    const elNumero = Math.round(Math.random() * 10)

    miNumero == elNumero ? console.log(`Exelente ingresaste el numero ${miNumero} y el numero seceto era ${elNumero}`) : console.log(`Vuelve a intentarlo, el numero secreto era ${elNumero}`)
}

numeroSecreto(parseInt(prompt("Ingrese un numero entre 1 y 10 ")))


// abrirParacaidas()
// Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
// altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
// siguiente:
// ● La velocidad debe ser menor a 1000 km/h.
// ● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.

const abrirParacaidas = (velocidad, altura) => {
    if (velocidad < 1000 && altura >= 2000 && altura <= 3000) {
        console.log("El paracaidas debe abrirse")
    } else {
        console.log("El paracaidas no debe abrirse")
    }
}

abrirParacaidas(1100, 2100)



// Estructura switch

// Traductor condicional
// Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.

const traductor = (palabra) => {

    switch(palabra){
        
        case "perro": console.log("dog")
            break
        case "pelota": console.log("ball")
            break
        case "arbol": console.log("tree")
            break
        case "genio": console.log("genius")
            break
        default : console.log("La palabra igresada es incorrecta")
    }
    
}

traductor("perro")



                                // Valoración de películas
// Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
// según la siguiente escala:
// ● Muy mala.
// ● Mala.
// ● Mediocre.
// ● Buena.
// ● Muy buena.
// Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
// por su valoración.
// Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
// En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
// inválido".
// Cuando el usuario haya valorado la película, agradecerle su visita.


const valoracion = (valor)=>{

    switch (valor){
        case "Muy mala" : console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho."); 
            break
        case "Mala" : console.log("Calificaste la película como Mala. Lo lamentamos mucho.");
            break
        case "Mediocre" : console.log("Calificaste la película como Mediocre. Lo lamentamos mucho.");
            break
        case "Buena" : console.log("Calificaste la película como Buena. Nos alegramos mucho.");
            break
        case "Muy buena" : console.log("Calificaste la película como Muy Buena. Nos alegramos mucho.");
            break
        default : console.log("Ingresaste un valor invalido");    
    }
    console.log("Muchas gracias por tu visita")

}

valoracion("Muy mala")