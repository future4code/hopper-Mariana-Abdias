// Exercícios de interpretação de código:

// EXERCÍCIO 1

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 // bool3 = true

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
// a. false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 
// b. false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)
// c. true

// console.log("d. ", typeof resultado)
// d. boolean



// EXERCÍCIO 2.

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// O erro é porque ele não converteu de string para number.
// Quando isso acontece a soma (contatena) o número e não faz a soma de fato de dois valores.



// EXERCíCIO 3.
// O código correto do exercicio anterior é:

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)



// Exercícios de escrita de código:

// Exercício 1.

const idadeDoUsuario = Number(prompt("Qual a sua idade?"))
const idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)"))
const diferenca = idadeDoUsuario - idadeMelhorAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeDoUsuario > idadeMelhorAmigo)
console.log(diferenca)



// Exercício 2.

const numeroPar = Number(prompt("Insira um número par"))
console.log(numeroPar % 2)
// Notei que todas as vezes o Console me devolveu o número zero.
// Se o resto da divisão for zero, quer dizer sempre que esse número é par.

// Quando o usuário imprimir um número impar, o console vai trazer o número 1.
// Se o resto da divisão for 1, quer dizer sempre que esse número é ímpar.



// Exercício 3.

const idadeDoUsuario = Number(prompt("Qual a sua idade?"))
const idadeMeses = (idadeDoUsuario * 12)
const idadeDias = (idadeDoUsuario * 365)
const idadeHoras = (idadeDoUsuario * (365*24))


console.log("Você tem ", idadeDoUsuario, "anos.")
console.log("Você tem ", idadeMeses, "meses.")
console.log("Você tem ", idadeDias, "dias.")
console.log("Você tem ", idadeHoras, "horas.")


// Exercício 4.

const primeiroNumero = Number(prompt("Informe um número"))
const segundoNumero = Number(prompt("Informe outro número"))
const moduloPrimeiroSegundo = primeiroNumero % segundoNumero
const moduloSegundoPrimeiro = segundoNumero % primeiroNumero


console.log(primeiroNumero > segundoNumero)
console.log(primeiroNumero === segundoNumero)
console.log(moduloPrimeiroSegundo === 0)
console.log(moduloSegundoPrimeiro === 0)


// Desafio

// Desafio 1.

// a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
let grausFahrenheit = 77
let grausFahrenheitParaKelvin = (grausFahrenheit - 32) * (5/9) + 273.15

console.log("77ºF é", grausFahrenheitParaKelvin, "ºK")

// b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
let grausCelsius = 80
let grausCelciusParaFahrenheit = (grausCelsius) * (9/5) + 32

console.log("80ºC é", grausCelciusParaFahrenheit, "ºF")

// c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
let grausCelsius = 30
let grausCelciusParaFahrenheit = (grausCelsius) * (9/5) + 32
let grausFahrenheitParaKelvin2 = (grausCelciusParaFahrenheit - 32) * (5/9) + 273.15

console.log("30ºC é", grausCelciusParaFahrenheit, "ºF", "e", grausFahrenheitParaKelvin2, "ºK")

// d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
let grausCelsius = Number(prompt("Insira um valor para converter graus Celsius para Fahrenheit e Kelvin"))
let grausCelciusParaFahrenheit = (grausCelsius) * (9/5) + 32
let grausFahrenheitParaKelvin2 = (grausCelciusParaFahrenheit - 32) * (5/9) + 273.15

console.log(grausCelsius, "é", grausCelciusParaFahrenheit, "ºF", "e", grausFahrenheitParaKelvin2, "ºK")


// Desafio 2.

// a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
const quilowattHora = 0.05
let consumo = 280
let resultado = quilowattHora * consumo
console.log("O valor a ser pago por uma residência que consome 280 quilowatt-hora por mês, é R$", resultado, "reais")

// b. Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto
const quilowattHora = 0.05
let consumo = 280
let resultadoComDesconto = (quilowattHora * consumo) * 0.85
console.log("Com desconto de 15%, o valor a ser pago por uma residência que consome 280 quilowatt-hora por mês, é R$", resultadoComDesconto, "reais")


// Desafio 3.

// a. Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
const lbParaKg = 0.453592
const libra = 20
resultado = libra * lbParaKg

console.log("20lb equivalem a ", resultado, "kg")

// b. Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
const ozParaKg = 0.0283495
const onca = 10.5
resultado = onca * ozParaKg

console.log("10.5oz equivalem a ", resultado, "kg")

// c. Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
const milhasParaMetro = 1609.34
const milhas = 100
resultado = milhas * milhasParaMetro

console.log("100mi equivalem a ", resultado, "m")

// d. Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
const pesParaMetro = 0.3048
const pes = 50
resultado = pes * pesParaMetro

console.log("50ft equivalem a ", resultado, "m")

// e. Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
// Para esse caso usei o Galão Imperial
const galaoParaLitro = 4.54609
const galao = 103.56
resultado = galao * galaoParaLitro

console.log("103.56gal equivalem a ", resultado, "l")


// f. Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
// Para esse caso usei o Galão Imperial
const xicaraParaLitro = 0.284131
const xicara = 450
resultado = xicara * xicaraParaLitro

console.log("450xic equivalem a ", resultado, "l")

// g. Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter
const kiloDoUsuario = Number(prompt("Digite seu peso"))
const kiloParaLibra = 2.20462
resultado = kiloDoUsuario * kiloParaLibra

console.log("O seu peso ", kiloDoUsuario, "em Libras é", resultado)