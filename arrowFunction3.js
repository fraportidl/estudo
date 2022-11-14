let comparaComThis = function (param) {
    console.log(this === param )
}

comparaComThis(global)


const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)


let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow()


// O this muda conforme o contexto que ele esta sendo atribuido e chamado, ele constantemente 
// é atribuido dentro do escopo global conforme na linha 5


comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)