let nomeJogador = "João Otranto"
let experienciaJogador = 5001
let nivelJogador

switch (true) {
    case experienciaJogador <= 1000:
        nivelJogador = "Ferro"
        break
    case experienciaJogador <= 2000:
        nivelJogador = "Bronze"
        break
    case experienciaJogador <= 5000:
        nivelJogador = "Prata"
        break
    case experienciaJogador <= 7000:
        nivelJogador = "Ouro"
        break
    case experienciaJogador <= 8000:
        nivelJogador = "Platina"
        break
    case experienciaJogador <= 9000:
        nivelJogador = "Ascendente"
        break
    case experienciaJogador <= 10000:
        nivelJogador = "Imortal"
        break
    case experienciaJogador >= 10001:
        nivelJogador = "Radiante"
        break
}

console.log("O Herói de nome " + nomeJogador + " está no nível de " + nivelJogador);