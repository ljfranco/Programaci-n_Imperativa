let numeros = [1,5,10,58,63,52,54]

// A. Acceder a elementos específicos de un array.

//console.log(numeros[3]);
// B. Modificar cada uno de sus elementos e imprimirlos.

numeros = [2,8,6,5,41,47]
//console.log(numeros);
// C. Agregar elementos a un array.

numeros.push(8,6,52)
//console.log(numeros);
// D. Extraer elementos de un array.

let extraer = numeros.pop()
// console.log(extraer);
// console.log(numeros);
// E. Comparar elementos de un array con los elementos de otro.

let palabras =["hola",8,"cosa",true,false,47]

// for(let i=0; i<numeros.length; i++){
//     if(numeros[i]==palabras[i]){
//         //console.log(`El elemento en la posicion ${i} del array numeros es igual al elemento en la posicion ${i} del array palabras y es igual a ${numeros[i]}`);
//     }else { //console.log("no hay coincidencias");}
// }

let numbers =[22, 33, 54, 66, 72]
//console.log(numbers[numbers.length])

let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
"Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
//console.log(grupoDeAmigos[5])

let str = "un string cualquiera"
let arrayAleatorio= ["Digital", "House", true, "string", "123","false", 54, str ]
//console.log(arrayAleatorio[arrayAleatorio.length - 1])

// Colecciones de películas (y más...)
// El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
// Para esto, deberás:
// 1. Crear la estructura adecuada para guardar las siguientes películas:
// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
// Importante: verificá que todo funciona correctamente accediendo a alguna de
// las películas una vez creada la estructura correspondiente.

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
console.log(peliculas);



// 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
// en mayúsculas. Para esto solicitan que crees una función que reciba por
// parámetro un array y convierta el contenido de cada elemento a mayúsculas.
// Pista: revisá qué hace el método de strings .toUpperCase().

const mayuscula =(arreglo)=>{
    for(let i=0 ; i < arreglo.length; i++){
        arreglo[i]=arreglo[i].toUpperCase()
    }
    
    
    return arreglo
}

console.log(mayuscula(peliculas))
// 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
// crear otra estructura similar a la primera, pero con las siguientes películas
// animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
// para poder agregar los elementos contenidos en el segundo array dentro del
// primero, y así retornar un solo array con todas las películas como sus elementos.
// Importante: las películas animadas también deberían convertirse a mayúsculas.

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

const juntarPeliculas = (array1,array2)=> {

    let juego = array2.pop()
    for(let i = 0; i<array2.length; i++){
        array1.push(array2[i])
    }

    return mayuscula(array1)
}
console.log(juntarPeliculas(peliculas,peliculasAnimadas));

// 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
// array de películas animadas es un videojuego. Ahora tenés que editar el código y
// modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
// contenido al array que contenga todas las películas.
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.




// 5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
// del mundo sobre las películas con el siguiente formato:
// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];

// 2

// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
// Te piden crear una función que compare las calificaciones e indique si son iguales
// o diferentes. Te confirman que están en el orden adecuado y que solo traen
// valores numéricos del 1 al 10.
// PD: los elementos de los scores tanto de Asia como de Europa corresponden en
// orden al del array resultante de combinar películas con películas animadas. Es
// decir, el primer elemento del array de películas general corresponde al primer
// elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.
// Para verificar que hasta acá viene todo bien, te recomendamos probar cada una de las
// funciones y testear su correcto funcionamiento.
// Si llegaste hasta este punto y está todo bien, el tech leader del equipo debe estar
// extremadamente alegre con tu trabajo y desempeño. ¡Buen trabajo!