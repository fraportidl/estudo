// estrategia 1  - para gerar valor padrao

function soma1(a,b,c) {
    a = a || 1 // muito usado para atribuir valor padrao a variaveis.
    b = b || 1
    c = c || 1
    return a+b+c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(0,0,0))


// segunda estrategia
function soma2(a,b,c) {
    a = a !== undefined ? a : 1 //se usar != o null entrará nessa validaçao
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))


// ES2015 com valor padrao

function soma3(a = 1, b = 1, c = 1){
    return a + b + c 
}