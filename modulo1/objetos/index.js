// Exercícios de interpretação de código
// Exercício 1

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a
// console.log(filme.elenco[0]) // Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish
// console.log(filme.transmissoesHoje[2]) // canal: "Globo", horario: "14h"


// Exercício 2

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a. 
// console.log(cachorro) // {nome: "Juca", idade: 3, raca: "SRD"}
// console.log(gato) // {nome: "Juba", idade: 3, raca: "SRD"}
// console.log(tartaruga) // {nome: "Jubo", idade: 3, raca: "SRD"}

// b. A sintaxe de três pontos antes do nome do objeto, copia o objeto anterior e altera uma propriedade dentro do objeto, acessando pelo nome da propriedade)


// Exercício 3

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender")) 
// console.log(minhaFuncao(pessoa, "altura"))

// a. 
// console.log(minhaFuncao(pessoa, "backender")) // false
// console.log(minhaFuncao(pessoa, "altura")) // undefined

// b. O primeiro retorno do console, devolveu que backender é false porque esse era o valor da propriedade backender.
// O segundo retorno no console, devolveu undefined, porque no objeto pessoa, não foi definida a propriedade altura.


// Exercícios de escrita de código

// Exercício 1

// a.
const pessoa = {
    nome: "Mariana Abdias",
    apelidos: ["Mari", "Ma", "Marianinha"]

}

function apelidosPessoa() {

    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

}

apelidosPessoa(pessoa)

// b.
const novaPessoa = {
    ...pessoa,
    apelidos: ["Loira", "Malinha", "Mah"]
}


console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)


// Exercício 2.
// a)  

const usuario = {
    nome: "Luana Vieira",
    idade: 25,
    profissao: "Médica"
}

const novoUsuario = {
    nome: "Marisa Monteiro",
    idade: 30,
    profissao: "Engenheira"
}

// b) 
function informacoesDasPessoas(parametro) {

 
    return [parametro.nome, parametro.nome.length, parametro.idade, parametro.profissao, parametro.profissao.length]
}

console.log(informacoesDasPessoas(usuario))
console.log(informacoesDasPessoas(novoUsuario))

// Exercício 3.

const carrinho = []

const primeiraFruta = {
    nome: "Banana",
    disponibilidade: true
}

const segundaFruta = {
    nome: "Abacaxi",
    disponibilidade: true
}

const terceiraFruta = {
    nome: "Morango",
    disponibilidade: true
}

function recebaFruta(fruta) {
  carrinho.push(fruta)
}

recebaFruta(primeiraFruta)
recebaFruta(segundaFruta)
recebaFruta(terceiraFruta)
console.log(carrinho)


// Desafio

// 1.

function dadosDoUsuario() {
    const nome = prompt("Qual é o seu nome?")
    const idade = Number(prompt("Qual é a sua idade?"))
    const profissao2 = prompt("Qual é a sua profissão?")

    console.log(`{nome: ${nome}, profissao: ${profissao2}, idade: ${idade}}`)
}

dadosDoUsuario()

// 2.

const filme = {
    nome: "Não olhe para cima",
    anoDeLancamento: 2021
}

const novoFilme = {
    nome: "As Branquelas",
    anoDeLancamento: 2004
}

function lancamentoDosFilmes(filme, novoFilme) {

    console.log(`O primeiro filme foi lançado antes do segundo? ${filme.anoDeLancamento > novoFilme.anoDeLancamento}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${novoFilme.anoDeLancamento > filme.anoDeLancamento}`)

}

lancamentoDosFilmes(filme, novoFilme)


// 3.

const carrinho = []

const primeiraFruta = {
    nome: "Banana",
    disponibilidade: true
}

const segundaFruta = {
    nome: "Abacaxi",
    disponibilidade: true
}

const terceiraFruta = {
    nome: "Morango",
    disponibilidade: true
}

function recebaFruta(fruta) {
  carrinho.push(fruta)
}

recebaFruta(primeiraFruta)
recebaFruta(segundaFruta)
recebaFruta(terceiraFruta)
console.log(carrinho)

function controleDeEstoque(temFruta){
    return segundaFruta.disponibilidade = false
}

controleDeEstoque(segundaFruta)