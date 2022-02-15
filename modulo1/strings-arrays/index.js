// Exercícios de interpretação de código

// Exercício 1.

/*
let array
console.log('a. ', array)
// a. undefined

array = null
console.log('b. ', array)
// b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// c. 11

let i = 0
console.log('d. ', array[i])
// d. 3

array[i+1] = 19
console.log('e. ', array)
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
// f. 9
*/

// Exercício 2.

/*
Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NUM ÔNIBUS EM MIRROCOS 27
*/


// Exercícios de escrita de código

// Exercício 1.

const nomeDoUsuario = prompt("Qual seu nome?")
const emailDoUsuario = prompt("Qual seu e-mail?")
console.log(`O e-mail ${emailDoUsuario.trim()} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// Exercício 2.

// a.
const minhasComidasPreferidas = ["estrogonofe", "lanche", "pizza", "lasanha", "sorvete"]

console.log(minhasComidasPreferidas)

// b.
const minhasComidasPreferidas = ["estrogonofe", "lanche", "pizza", "lasanha", "sorvete"]
for(let i=0; i < minhasComidasPreferidas.length; i++){

console.log("Estas são minhas comidas preferidas", minhasComidasPreferidas[i], i)

}

// c. 
const minhasComidasPreferidas = ["estrogonofe", "lanche", "pizza", "lasanha", "sorvete"]
const comidaPreferidaDoUsuario = prompt("Qual a sua comida Favorita?")
const i = 0
minhasComidasPreferidas[i+1] = comidaPreferidaDoUsuario

console.log(minhasComidasPreferidas)


// Exercício 3.

const listaDeTarefas = []
const tarefa1 = prompt("Informe uma tarefa que você precisa realizar no dia.")
const tarefa2 = prompt("Informe outra tarefa que você precisa realizar no dia.")
const tarefa3 = prompt("Informe mais uma tarefa que você precisa realizar no dia.")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

const tarefasRealizadas = Number(prompt("De 1 a 3, qual tarefa você já realizou?"))
console.log(tarefasRealizadas)
console.log(listaDeTarefas[tarefasRealizadas -1])

listaDeTarefas.splice([tarefasRealizadas -1], 1)

console.log(listaDeTarefas)


// Desafio

// 1. 

const frase = "Estou amando estudar na Labenu!"
const array = frase.split(" ")
console.log(array)

// 2. 

const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(array.indexOf("Abacaxi"))
console.log(array.length)

