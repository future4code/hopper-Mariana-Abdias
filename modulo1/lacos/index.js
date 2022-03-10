// Exercícios de interpretação de código

// Exercício 1.
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// O código acima esta somando todos os valores do laço de 1 a 4 porque é menor que cinco, sendo assim: 1 + 2 + 3 + 4 = 10
// O valor impresso no console é igual a 10.

// Exercício 2.
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a. O código vai imprimir os números [19, 21, 23, 25, 27, 30]
// Todos os números que são maior que 18.

// b. O for... of... não acessa o índice de cada elemento, ele apenas retorna os elementos.
// Para acessar o índice deve-se utilizar o for.

// Exercício 3.
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// No console log vai aparecer 4 linhas que o usuário digitou
// E em cada linha um asterisco a mais, assim:
// *
// **
// ***
// ****

// Exercícios de escrita de código

// Exercício 1.

const quantosAnimais = Number(prompt("Quantos animais de estimação você tem?"));
const array = [];

if (quantosAnimais === 0) {
  console.log("Que pena! Você pode adotar um pet!");
} else {
  for (let contador = 0; contador < quantosAnimais; contador++) {
    const nome = prompt("Qual o nome do seu animal de estimação?");
    array.push(nome);
  }
  console.log(array);
}

// Exercício 2.

const array2 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// a.
for (const numero of array2) {
    console.log(numero)
}

// b.
for (const numero of array2) {
    console.log(numero/10)
}

// c.
const novoArray = []
for (const numero of array2) {
    if (numero % 2 === 0) {
        novoArray.push(numero)
    }

}
console.log(novoArray)

// d.
const novoArray2 = []
for (let index = 0; index < array2.length; index++) {
    const element = array2[index];
    const frase = `O elemento do índex ${index} é: ${element}`
    novoArray2.push(frase)
}
console.log(novoArray2)

// e.

// maior
let maior = 0;
let indexmaior = 0;
while (indexmaior <= array2.length - 1) {
  if (array2[indexmaior] > maior) {
    maior = array2[indexmaior];
  }
  indexmaior++;
}

console.log(`O maior número é ${maior}`);

// menor
let menor = array2[0];
let indexmenor = 0;
while (indexmenor <= array2.length - 1) {
  if (array2[indexmenor] < menor) {
    menor = array2[indexmenor];
  }
  indexmenor++;
}

console.log(`O menor número é ${menor}`);

// Desafio

// 1.
const numeroPrimeiroJogador = Number(prompt("Digite um número"));
console.log(`Vamos jogar!`);
let tentativas = 1
let numeroChutado = -1
while (numeroChutado !== numeroPrimeiroJogador) {
  numeroChutado = Number(prompt("Qual o número que foi pensado?"));
  console.log(`O número chutado foi: ${numeroChutado}`);
  if (numeroPrimeiroJogador > numeroChutado) {
    console.log("Errou. O número escolhido é maior");
  } else if (numeroPrimeiroJogador < numeroChutado) {
    console.log("Errou. O número escolhido é menor");
  } else {
    console.log("Acertou!!");
    console.log(`O número de tentativas foi: ${tentativas}`);
  }
  tentativas++
}

// 2.

const numeroSorteado = Math.floor(Math.random() * 100 + 1);
console.log(`Vamos jogar!`);
let tentativasUsuario = 1;
let numeroChutadoUsuario = -1
while (numeroChutadoUsuario !== numeroSorteado) {
  numeroChutadoUsuario = Number(prompt("Qual o número que eu pensei?"));
  console.log(`O número chutado foi: ${numeroChutadoUsuario}`);
  if (numeroSorteado > numeroChutadoUsuario) {
    console.log("Errou. O número escolhido é maior");
  } else if (numeroSorteado < numeroChutadoUsuario) {
    console.log("Errou. O número escolhido é menor");
  } else {
    console.log("Acertou!!");
    console.log(`O número de tentativas foi: ${tentativasUsuario}`);
  }
  tentativasUsuario++;
}
