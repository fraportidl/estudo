const pessoa = {
    nome: 'douglas',
    saudacao: `Bom dia! `,
    falar() {
        console.log(this.saudacao)
    }
}
const pessoa2 = {
    nome: 'Natalia',
    saudacao: `Bom dia!  ${this.nome}`,
    falar() {
        console.log(this.saudacao)
    }
}

const falar = pessoa.falar
falar( )// conflito entre paradigmanas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()