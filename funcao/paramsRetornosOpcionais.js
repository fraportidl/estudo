function area(largura = 0, altura = 0){
    const area = largura * altura
    if(area > 20 || area == 0){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2,4))