// // Exercícios de interpretação de código

// // Exercício 1.

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// // a. O código esta testando se o número que o usuário digitou, o resto da divisão dele é igual a zero.
// // Se sim, ele imprime no console que passou no teste, se não, ele não passou no teste.

// // b. Para os números pares, onde o resto da divisão vai ser sempre zero, ele imprime no console que passou no teste.

// // c. Para os números ímpares, onde o resto da divisão vai ser diferente de zero, ele imprime no console que não passou no teste.


// // Exercício 2.

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// // a. O código acima serve para informar o usuário o valor da fruta escolhida.

// // b. Se o usuário escolher a fruta "Maça", vai imprimir no console a frase:
// // O preço da fruta Maçã é  R$ 2.25

// // c. Se não houver um break encerrando o bloco acima, vai imprimir no console sempre a mensagem que estiver como default.
// // O preço da fruta Pêra é  R$ 5.00


// // Exercício 3.

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// // a. A primeira linha esta pedindo para o usuário digitar um número, e transformando a variável em número.

// // b. Se o usuário digitar o número 10, vai imprimir no console que o número dele passou no teste, porque atende a condição que é maior que 0.
// // Se o usuário digitar o número -10, não vai imprimir nada no console.
// // Para os dois casos haverá um erro da impressão do console.log(mensagem)

// // c. O erro do console é porque a variável mensagem foi definida dentro da condição if e o console.log foi chamado para fora da condição.
// // Se a variável fosse definida após o fechamento da condição if, a mensagem seria impressa no console.


// Exercício de escrita de código

// Exercício 1.

// const idadeDoUsuario = Number(prompt("Qual a sua idade?"))

// if (idadeDoUsuario >= 18) {
//     console.log("Você pode dirigir.")
// } else {
//     console.log("Você não pode dirigir.")
// }

// Exercício 2.

// const turno = prompt("Qual turno você estuda? Digite M para (Matutino) ou digite V para (Vespertino) ou digite N para (Noturno)")

// if (turno === "M") {
//     console.log("Bom Dia!")
// } else if (turno === "V") {
//     console.log("Boa Tarde!")
// } else {
//     console.log("Boa Noite")
// }

// Exercício 3.

// const turno = prompt("Qual turno você estuda? Digite M para (Matutino) ou digite V para (Vespertino) ou digite N para (Noturno)")

// switch (turno) {
//     case "M":
//       console.log("Bom Dia!")
//       break;
//     case "V":
//       console.log("Boa Tarde!")
//       break;
//     default:
//       console.log("Boa Noite")
//       break;
// }

// Exercício 4.

// const generoFilme = prompt("Qual o gênero do filme?")
// const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

// if (generoFilme === "fantasia" && valorIngresso < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }


// Desafios

// Exercício 1.

// const generoFilme = prompt("Qual o gênero do filme?")
// const valorIngresso = Number(prompt("Qual o valor do ingresso?"))
// const lanche = prompt("Qual lanche você gostaria de comprar?")

// if (generoFilme === "fantasia" && valorIngresso < 15) {
//     console.log(`Bom filme!
// Aproveite o seu ${lanche}`)
// } else {
//     console.log("Escolha outro filme :(")
// }

// Exercício 2.

const nomeCompleto = prompt("Qual o seu nome completo?")
const tipoJogo = prompt("Qual tipo de jogo você quer ver? Digite IN para (Jogos Internacionais) ou digite DO para (Jogos Nacionais)").toUpperCase()
const etapaJogo = prompt("Qual etapa do jogo você quer ver? Digite SF para (jogos da SemiFinais), digite DT para (decisão de terceiro lugar) ou digite FI para (decisão da final)").toUpperCase()
const categoria = Number(prompt("Qual a categoria você quer? Digite 1, 2, 3 ou 4"))
const quantidadeIngressos = Number(prompt("Quantos ingressos?"))

const nacionalSemiFinal = {
    tipoDeJogo: 'Nacional',
    jogo: 'Semi Final',
    categoria1: 1320,
    categoria2: 880,
    categoria3: 550,
    categoria4: 220
}

const nacionalTerceiroLugar = {
    tipoDeJogo: 'Nacional',
    jogo: 'Terceiro Lugar',
    categoria1: 660,
    categoria2: 440,
    categoria3: 330,
    categoria4: 170
}

const nacionalFinal = {
    tipoDeJogo: 'Nacional',
    jogo: 'Final',
    categoria1: 1980,
    categoria2: 1320,
    categoria3: 880,
    categoria4: 330
}

const internacionalSemiFinal = {
    tipoDeJogo: 'Internacional',
    jogo: 'Semi Final',
    categoria1: 1320 / 4.10,
    categoria2: 880 / 4.10,
    categoria3: 550 / 4.10,
    categoria4: 220 / 4.10
}

const internacionalTerceiroLugar = {
    tipoDeJogo: 'Internacional',
    jogo: 'Terceiro Lugar',
    categoria1: 660 / 4.10,
    categoria2: 440 / 4.10,
    categoria3: 330 / 4.10,
    categoria4: 170 / 4.10
}

const internacionalFinal = {
    tipoDeJogo: 'Internacional',
    jogo: 'Final',
    categoria1: 1980 / 4.10,
    categoria2: 1320 / 4.10,
    categoria3: 880 / 4.10,
    categoria4: 330 / 4.10
}


if (tipoJogo === "DO" && etapaJogo === "SF" && categoria === 1) {
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${nacionalSemiFinal.tipoDeJogo}
    Etapa do jogo: ${nacionalSemiFinal.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: R$ ${nacionalSemiFinal.categoria1}
    Valor total:  R$ ${nacionalSemiFinal.categoria1 * quantidadeIngressos}`)
} else if (tipoJogo === "DO" && etapaJogo === "SF" && categoria === 2) {
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${nacionalSemiFinal.tipoDeJogo}
    Etapa do jogo: ${nacionalSemiFinal.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: R$ ${nacionalSemiFinal.categoria2}
    Valor total:  R$ ${nacionalSemiFinal.categoria2 * quantidadeIngressos}`)
} else if (tipoJogo === "DO" && etapaJogo === "SF" && categoria === 3) {
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${nacionalSemiFinal.tipoDeJogo}
    Etapa do jogo: ${nacionalSemiFinal.jogo}
    Categoria: ${categoria}  
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: R$ ${nacionalSemiFinal.categoria3}
    Valor total:  R$ ${nacionalSemiFinal.categoria3 * quantidadeIngressos}`)
} else if (tipoJogo === "DO" && etapaJogo === "SF" && categoria === 4) {
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${nacionalSemiFinal.tipoDeJogo}
    Etapa do jogo: ${nacionalSemiFinal.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: R$ ${nacionalSemiFinal.categoria4}
    Valor total:  R$ ${nacionalSemiFinal.categoria4 * quantidadeIngressos}`)
} else if (tipoJogo === "DO" && etapaJogo === "DT" && categoria === 1){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${nacionalTerceiroLugar.tipoDeJogo}
    Etapa do jogo: ${nacionalTerceiroLugar.jogo}
    Categoria: ${categoria}  
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: R$ ${nacionalTerceiroLugar.categoria1}
    Valor total:  R$ ${nacionalTerceiroLugar.categoria1 * quantidadeIngressos}`)
} else if (tipoJogo === "DO" && etapaJogo === "DT" && categoria === 2){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${nacionalTerceiroLugar.tipoDeJogo}
    Etapa do jogo: ${nacionalTerceiroLugar.jogo}
    Categoria: ${categoria}  
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: R$ ${nacionalTerceiroLugar.categoria2}
    Valor total:  R$ ${nacionalTerceiroLugar.categoria2 * quantidadeIngressos}`)
} else if (tipoJogo === "DO" && etapaJogo === "DT" && categoria === 3){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${nacionalTerceiroLugar.tipoDeJogo}
    Etapa do jogo: ${nacionalTerceiroLugar.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: R$ ${nacionalTerceiroLugar.categoria3}
    Valor total:  R$ ${nacionalTerceiroLugar.categoria3 * quantidadeIngressos}`)
} else if (tipoJogo === "DO" && etapaJogo === "DT" && categoria === 4){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${nacionalTerceiroLugar.tipoDeJogo}
    Etapa do jogo: ${nacionalTerceiroLugar.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: R$ ${nacionalTerceiroLugar.categoria4}
    Valor total:  R$ ${nacionalTerceiroLugar.categoria4 * quantidadeIngressos}`)
} else if (tipoJogo === "DO" && etapaJogo === "FI" && categoria === 1){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${nacionalFinal.tipoDeJogo}
    Etapa do jogo: ${nacionalFinal.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: R$ ${nacionalFinal.categoria1}
    Valor total:  R$ ${nacionalFinal.categoria1 * quantidadeIngressos}`)
} else if (tipoJogo === "DO" && etapaJogo === "FI" && categoria === 2){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${nacionalFinal.tipoDeJogo}
    Etapa do jogo: ${nacionalFinal.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: R$ ${nacionalFinal.categoria2}
    Valor total:  R$ ${nacionalFinal.categoria2 * quantidadeIngressos}`)
} else if (tipoJogo === "DO" && etapaJogo === "FI" && categoria === 3){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${nacionalFinal.tipoDeJogo}
    Etapa do jogo: ${nacionalFinal.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: R$ ${nacionalFinal.categoria3}
    Valor total:  R$ ${nacionalFinal.categoria3 * quantidadeIngressos}`)
} else if (tipoJogo === "DO" && etapaJogo === "FI" && categoria === 4){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${nacionalFinal.tipoDeJogo}
    Etapa do jogo: ${nacionalFinal.jogo}
    Categoria: ${categoria}  
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: R$ ${nacionalFinal.categoria4}
    Valor total:  R$ ${nacionalFinal.categoria4 * quantidadeIngressos}`)
} else if (tipoJogo === "IN" && etapaJogo === "SF" && categoria === 1) {
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${internacionalSemiFinal.tipoDeJogo}
    Etapa do jogo: ${internacionalSemiFinal.jogo}
    Categoria: ${categoria}  
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: U$ ${internacionalSemiFinal.categoria1}
    Valor total:  U$ ${internacionalSemiFinal.categoria1 * quantidadeIngressos}`)
} else if (tipoJogo === "IN" && etapaJogo === "SF" && categoria === 2) {
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${internacionalSemiFinal.tipoDeJogo}
    Etapa do jogo: ${internacionalSemiFinal.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: U$ ${internacionalSemiFinal.categoria2}
    Valor total:  U$ ${internacionalSemiFinal.categoria2 * quantidadeIngressos}`)
} else if (tipoJogo === "IN" && etapaJogo === "SF" && categoria === 3) {
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${internacionalSemiFinal.tipoDeJogo}
    Etapa do jogo: ${internacionalSemiFinal.jogo}
    Categoria: ${categoria}  
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: U$ ${internacionalSemiFinal.categoria3}
    Valor total:  U$ ${internacionalSemiFinal.categoria3 * quantidadeIngressos}`)
} else if (tipoJogo === "IN" && etapaJogo === "SF" && categoria === 4) {
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${internacionalSemiFinal.tipoDeJogo}
    Etapa do jogo: ${internacionalSemiFinal.jogo}
    Categoria: ${categoria}  
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: U$ ${internacionalSemiFinal.categoria4}
    Valor total:  U$ ${internacionalSemiFinal.categoria4 * quantidadeIngressos}`)
} else if (tipoJogo === "IN" && etapaJogo === "DT" && categoria === 1){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${internacionalTerceiroLugar.tipoDeJogo}
    Etapa do jogo: ${internacionalTerceiroLugar.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: U$ ${internacionalTerceiroLugar.categoria1}
    Valor total:  U$ ${internacionalTerceiroLugar.categoria1 * quantidadeIngressos}`)
} else if (tipoJogo === "IN" && etapaJogo === "DT" && categoria === 2){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${internacionalTerceiroLugar.tipoDeJogo}
    Etapa do jogo: ${internacionalTerceiroLugar.jogo}
    Categoria: ${categoria}  
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: U$ ${internacionalTerceiroLugar.categoria2}
    Valor total:  U$ ${internacionalTerceiroLugar.categoria2 * quantidadeIngressos}`)
} else if (tipoJogo === "IN" && etapaJogo === "DT" && categoria === 3){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${internacionalTerceiroLugar.tipoDeJogo}
    Etapa do jogo: ${internacionalTerceiroLugar.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: U$ ${internacionalTerceiroLugar.categoria3}
    Valor total:  U$ ${internacionalTerceiroLugar.categoria3 * quantidadeIngressos}`)
} else if (tipoJogo === "IN" && etapaJogo === "DT" && categoria === 4){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${internacionalTerceiroLugar.tipoDeJogo}
    Etapa do jogo: ${internacionalTerceiroLugar.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: U$ ${internacionalTerceiroLugar.categoria4}
    Valor total:  U$ ${internacionalTerceiroLugar.categoria4 * quantidadeIngressos}`)
} else if (tipoJogo === "IN" && etapaJogo === "FI" && categoria === 1){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${internacionalFinal.tipoDeJogo}
    Etapa do jogo: ${internacionalFinal.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: U$ ${internacionalFinal.categoria1}
    Valor total:  U$ ${internacionalFinal.categoria1 * quantidadeIngressos}`)
} else if (tipoJogo === "IN" && etapaJogo === "FI" && categoria === 2){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${internacionalFinal.tipoDeJogo}
    Etapa do jogo: ${internacionalFinal.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: U$ ${internacionalFinal.categoria2}
    Valor total:  U$ ${internacionalFinal.categoria2 * quantidadeIngressos}`)
} else if (tipoJogo === "IN" && etapaJogo === "FI" && categoria === 3){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${internacionalFinal.tipoDeJogo}
    Etapa do jogo: ${internacionalFinal.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: U$ ${internacionalFinal.categoria3}
    Valor total:  U$ ${internacionalFinal.categoria3 * quantidadeIngressos}`)
} else if (tipoJogo === "IN" && etapaJogo === "FI" && categoria === 4){
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${internacionalFinal.tipoDeJogo}
    Etapa do jogo: ${internacionalFinal.jogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso: U$ ${internacionalFinal.categoria4}
    Valor total:  U$ ${internacionalFinal.categoria4 * quantidadeIngressos}`)
} else {
    console.log("Não há nenhum ingresso nessas condições, por favor, tente novamente!")
}

