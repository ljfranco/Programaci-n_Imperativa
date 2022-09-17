// EJERCICIO EXTRA La Siguiente matriz representa un mes calendario, se ncesita determinar los dias trabajados en diferentes sucursales de una empresa, las sucursales pueden ser de tipo shopping o no, esto determina que trabajan todos los dias de la semanas  
// 1 - Representar la matriz para poder manipular en JS
// 2 - Desarrollar una funcion que reciba la matriz y el tipo de sucursal (mes, tipoSuc)
//   - 'shopping'   => trabajan todos los dias de la semana
//   - 'NoShopping' => trabaja de lunes a viernes
// la función deberá retornar la cantidad de dias trabajados, según el tipo de sucursal 

let calendario = [
    [0, 0, 0, 0, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 0, 0, 0]
]

const diasTrabajados = (mes, tipoSuc) => {
    let acc = 0

    if (tipoSuc === "Shopping") {
        for (let i = 0; i < mes.length; i++) {
            for (let j = 0; j < mes[i].length; j++) {
                if (mes[i][j] !== 0) {
                    acc++
                }
            }

        }
    } else {
        for (let i = 0; i < mes.length; i++) {
            for (let j = 1; j < mes[i].length - 1; j++) {
                if (mes[i][j] !== 0) {
                    acc++
                }

            }
        }
    }
    return acc
}

console.log(diasTrabajados(calendario, "otro"));
