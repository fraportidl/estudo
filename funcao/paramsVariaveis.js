function soma(){
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return Math.floor(soma)
}

console.log(soma(2,4,4,5,7.7,3.1))