// Micro Desafíos 🐭
// ● Desarrollar una matriz de Strings llamada mice que represente la imagen.
// ● Mostrar a luisa.
// ● Cambiar él valor null por Jerry
// ● Crear una función que reciba por parámetro la matriz creada e imprimir por consola
// él saludo de cada elemento:
// ○ Hola soy lucas
// ○ Hola soy camila
// ○ ….

let mice = [
    ["Lucas", "Camila","Pedro"],
    ["Juan", "Luisa", ]
]

console.log(mice[1][1]);
mice [1][2]= "Jerry"

const saludo = matriz =>{
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log("Hola soy " + matriz[i][j]);
        }
        
    }
}
saludo(mice)