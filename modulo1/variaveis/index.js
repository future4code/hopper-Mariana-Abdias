// Exercícios de interpretação de código

/* 
Nº 1 Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
Será impresso no console: 10 5
*/

/* 
Nº 2 Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
c = 10 / b = 10 / a = 10 
Será impresso no console: 10 10 10
*/

/*
Nº 3 Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

Novas variáveis:
    p = horasPorDia 
    t = valorPorDia

    let horasPorDia = prompt("Quantas horas você trabalha por dia?")
    let valorPorDia = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${valorPorDia/horasPorDia} por hora`)
*/

// Exercícios de escrita de código

// Exercício 1.
// a)
const nome

// b)
const idade

// c)
console.log(typeof nome)
console.log(typeof idade)

// d) Vai imprimir um tipo undefined porque representa a falta de um "valor" a variável.

// e)
const nome = prompt("Qual é o seu nome?")
const idade = prompt("Qual é a sua idade?")
console.log(nome)
console.log(idade)

// f)
console.log(typeof nome)
console.log(typeof idade)

/*
Vai imprimir:
Nome da Pessoa
Idade da pessoa
string 
string

Ou seja retornou que os dois tipos de variável são strings.
Porque não foi feito a transformaçao da variável idade para Numbers
*/

// g)
const nome = prompt("Qual é o seu nome?")
const idade = prompt("Qual é a sua idade?")
console.log("Olá", nome, "você tem", idade, "anos.")

/*
Olá Mariana você tem 29 anos.
*/

// Exercício 2.

const estudante = prompt("Você é estudante?")
const professor = prompt("Você é professor?")
const idade = prompt("Você tem 29 anos?")

console.log(estudante, professor, idade)

roupaVerde = estudante
roupaRosa = professor
roupaPreta = idade

console.log("Você é estudante?", roupaVerde, "Você é professor?", roupaRosa, "Você tem 29 anos?", roupaPreta)

/* Vai imprimir: 
Você é estudante? Sim Você é professor? Não Você tem 29 anos? Sim
*/

// Exercício 3.

let a = 10
let b = 25

a = c
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

/* Vai imprimir: 
O novo valor de a é 25
O novo valor de b é 10
*/