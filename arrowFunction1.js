let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a =>  2 * a //return é implicito quando é somente de uma linha
console.log(dobro(3))

let ola = function (){
    return `Olá`
}

ola = () => `Olá`
ola = _ => `Olá` //possui uma parametro
console.log(ola())


