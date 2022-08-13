const prompt = require("prompt-sync")({ sigint: true })

let nombreUsuario = prompt("Por favor ingrese su nombre de usuario ")

console.log("Hola " + nombreUsuario + " como estas?")

console.log(`Hola ${nombreUsuario} todo bien?`)


function tablaDeMultiplicar(numero) {
    let i = 1
    while (i <= 10) {
        console.log(` ${numero} * ${i} = ${numero * i}`)
		i++
	}   
}

console.log(tablaDeMultiplicar(5))
