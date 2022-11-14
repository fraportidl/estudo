const nums = [1,2,3,4,5,6,7,8,9,10 ]


// break e continue nao atual no if() o bloco dele é o superior

for (x in nums) {
    if (x == 5) {
        break // Quando a condição for atendida o break sai do laço que ele esta ligado
    }
  //  console.log(`x = ${nums[x]}`)
}


for (y in nums) {
    if (y == 5) {
        continue // interrompe na condição atual do if e continua para a proxima iteração
    }
//    console.log(`${y} = ${nums[y]}`)
}


// rotulos nao sao bem vistos, sempre que ver necessidade de usar, olhe novamente para o codigo
// e veja outras alternativas ( criar metodos!!??)
externo: //atribuição de rotulo
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b ==3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}