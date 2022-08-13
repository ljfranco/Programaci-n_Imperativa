    const prompt = require("prompt-sync")({sigint: true})

    const sumar = (num1,num2)=> num1+num2

    const restar = (num1,num2)=> num1-num2

    const multiplicar = (num1,num2)=> num1*num2

    const dividir = (num1,num2)=> num1/num2


    console.log("-------------- Testeo de Operaciones / Calculadora --------------")

    let num1 = parseInt(prompt( " inserte num1 " ))
    let num2 = parseInt(prompt( " inserte num2 " ))

    console.log(sumar(num1,num2))

    console.log(restar(num1,num2))

    console.log(multiplicar(num1,num2))

    console.log(dividir(num1,num2))

    const cuadradoDeUnNumero = (num) => multiplicar(num, num)

    const promedioTresNumeros = (num1,num2,num3) => {
        let sumaDeTres = sumar(sumar(num1,num2),num3)

        return dividir(sumaDeTres,3)
    }

    const calcularPorcentaje = (num1, num2) => dividir(multiplicar(num1,num2),100)

    console.log(cuadradoDeUnNumero(2))
    console.log(promedioTresNumeros(2,3,4))
    console.log(calcularPorcentaje(300,15))

    const generadorPorcentaje = (num1, num2) => multiplicar(dividir(num1,num2),100)

    console.log(generadorPorcentaje(2,200))