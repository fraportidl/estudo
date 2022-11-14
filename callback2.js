const notas = [7.75,4.3,6,2.3,8.6,9.1,5.6,7.5]

// sem callback
let notasBaixas1 = []

for (let i in notas) {
    if(notas[i] > 7 ) {
        notasBaixas1.push(notas[i])
    }
}



// com callback
let notasBaixas2 = []

notasBaixas2 = notas.filter((nota) => {
    return nota > 7
})


console.log(notasBaixas2)


// 
const notasMenorQue7 = nota => nota < 7
const notasBaixa3 = notas.filter(notasMenorQue7)

console.log(notasBaixa3)

console.log(typeof(notasMenorQue7))


