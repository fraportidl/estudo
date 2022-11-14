// Funçoes podem ser criadas de 3 formas. (literal, anonima, arrow function)
// Função de alta ordem (quer dizer que a liguagem trata a função como um dado.), função pode ser retornada como resposta de função, ser passada como parametro
// 


// função de forma literal

function fun1() { }

// Armazenar em um variavel
const fun2 = function() { }

// Armazenar em um array
const arr = [1, 'segundo item', function(a,b) {return a +b}, fun1, fun2]
console.log(arr[2](2,3))


const obj = {}
obj.falar = function () {return `Opa  ${arr[1]}`}
console.log(obj.falar())


// Passar funçao como param
function run(fun){
    fun()
}

run(function() {console.log(`Executando.....`)})

// Uma funçao pode retornar/conter uma funçao
function soma(a,b){
    return function(c){
        console.log((a+b)*c)
        console.log(a+b+c)
    }
}

soma(2,5)(10) //funçao retornando outra funçao, brincadeira interessante.