
const notas = [6.7, 5.3, 5, 2.5, 8.6, 9.4, 7.4]

for (let i in notas) { 
    console.log(`indice = ${i}, nota =  ${notas[i]}`)
}

const pessoa = {
    nome: "Douglas",
    sobrenome: "Fraporti",
    idade: 32,
    peso: 90.4
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

