function getInteiroAleatorioEntre(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}

let opcao // nao preciso inicialiar a variavel com valor

do {
    opcao = getInteiroAleatorioEntre(-1,5)
    console.log(`
    A opção escolhida foi ${opcao}.`)
} while (opcao != -1 ) // uma repetiçao sempre vai acontecer
console.log(`Até a proxima`)