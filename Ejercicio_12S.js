const alicia = [10, 80, 75];
const bob = [90, 20, 25];

let concurso = {
    etapa: [],

    ganador: "",


    encontrarGanador: function (a, b) {
        let puntosPrimerParticipante = 0;
        let puntosSegundoParticipante = 0;
        for (let i = 0; i < 3; i++) {
            if (a[i] > b[i]) {
                puntosPrimerParticipante += 1
            } else if (a[i] < b[i]) {
                puntosSegundoParticipante += 1
            }
        }
        if (puntosPrimerParticipante > puntosSegundoParticipante) {
            return this.ganador = "primer"
        }else if(puntosPrimerParticipante < puntosSegundoParticipante){
            return this.ganador = "segundo"
        }return this.ganador = ""
    }



}




console.log("El ganador es: " + concurso.encontrarGanador(alicia, bob) + " participante");

console.log(concurso.ganador);