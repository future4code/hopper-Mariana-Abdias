/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    const carta = [
      {texto: "A♥️", valor: 11},
      {texto: "A♣️", valor: 11},
      {texto: "A♦️", valor: 11},
      {texto: "A♠️", valor: 11},
      {texto: "2♥️", valor: 2},
      {texto: "2♣️", valor: 2},
      {texto: "2♦️", valor: 2},
      {texto: "2♠️", valor: 2},
      {texto: "3♥️", valor: 3},
      {texto: "3♣️", valor: 3},
      {texto: "3♦️", valor: 3},
      {texto: "3♠️", valor: 3},
      {texto: "4♥️", valor: 4},
      {texto: "4♣️", valor: 4},
      {texto: "4♦️", valor: 4},
      {texto: "4♠️", valor: 4},
      {texto: "5♥️", valor: 5},
      {texto: "5♣️", valor: 5},
      {texto: "5♦️", valor: 5},
      {texto: "5♠️", valor: 5},
      {texto: "6♥️", valor: 6},
      {texto: "6♣️", valor: 6},
      {texto: "6♦️", valor: 6},
      {texto: "6♠️", valor: 6},
      {texto: "7♥️", valor: 7},
      {texto: "7♣️", valor: 7},
      {texto: "7♦️", valor: 7},
      {texto: "7♠️", valor: 7},
      {texto: "8♥️", valor: 8},
      {texto: "8♣️", valor: 8},
      {texto: "8♦️", valor: 8},
      {texto: "8♠️", valor: 8},
      {texto: "9♥️", valor: 9},
      {texto: "9♣️", valor: 9},
      {texto: "9♦️", valor: 9},
      {texto: "9♠️", valor: 9},
      {texto: "10♥️", valor: 10},
      {texto: "10♣️", valor: 10},
      {texto: "10♦️", valor: 10},
      {texto: "10♠️", valor: 10},
      {texto: "J♥️", valor: 10},
      {texto: "J♣️", valor: 10},
      {texto: "J♦️", valor: 10},
      {texto: "J♠️", valor: 10},
      {texto: "Q♥️", valor: 10},
      {texto: "Q♣️", valor: 10},
      {texto: "Q♦️", valor: 10},
      {texto: "Q♠️", valor: 10},
      {texto: "K♥️", valor: 10},
      {texto: "K♣️", valor: 10},
      {texto: "K♦️", valor: 10},
      {texto: "K♠️", valor: 10}
      ]    

   console.log("Boas vindas ao jogo de Blackjack!")
   const comecarJogo = confirm("Quer iniciar uma nova rodada?")

   switch (comecarJogo) {
      case false :
         console.log("O jogo acabou.")
         break;
   
      default: 
         const carta1Usuario = comprarCarta()
         const carta2Usuario = comprarCarta()
         const valorUsuario = carta1Usuario.valor + carta2Usuario.valor

         const carta1Computador = comprarCarta()
         const carta2Computador = comprarCarta()
         const valorComputador = carta1Computador.valor + carta2Computador.valor
      
         console.log(`
         Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação ${valorUsuario} 
         Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - pontuação ${valorComputador}`)

     
         if (valorUsuario > valorComputador) {
            console.log("O usuário ganhou!")

         } else if (valorUsuario < valorComputador) {
            console.log("O computador ganhou!")
               } else  {
               console.log("Empate!")
         }      
           
      }
   
// E armazena numa variavel:
// carta1Usuario = comprarCartas( )
// carta2Usuario = comprarCartas( )


   //  DOIS JOGADORES:
   //  USUÁRIO 
   //  COMPUTADOR
    
   //  TEM 52 CARTAS
   //  (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J , Q, K) 
   //  CADA UMA DELAS COM OS NAIPE (Copas (♥️), Paus (♣️), Ouros(♦️) e Espadas(♠️)
    
   //  A - 11
   //  2 - 2
   //  3 - 3
   //  4 - 4
   //  5 - 5
   //  6 - 6
   //  7 - 7
   //  8 - 8
   //  9 - 9
   //  J - 10
   //  Q - 10
   //  K - 10
    
   //  CADA JOGADOR RECEBE DUAS CARTAS
   //  O JOGADOR COM MAIOR PONTUAÇÃO GANHA A RODADA
    
    
   //  => MONTAR UM PROGRAMA QUE IMPRIMA NO CONSOLE:
   //  console.log("Boas vindas ao jogo de Blackjack!")
    
   //  => Envia um confirm 
   //  confirm é um comando que cria uma caixa com dois botões: ok e cancelar, permitindo fazer perguntas de "sim" e "não"
   //  const perguntUsuario = confirm("Quer iniciar uma nova rodada?")
    
   //  pode-se usar condicionais nesse caso:
   //  if(confirm("pergunta de sim ou não")) {
   //     // o que fazer se o usuário clicar "ok"
   //  } else {
   //     // o que fazer se o usuário clicar "cancelar"
   //  }
    
   //  - Se o usuário responder cancel, imprime uma mensagem no console "O jogo acabou".
   //  - Se o usuário responder Ok, o programa deve iniciar uma nova rodada. 
    
   //  => Começando uma rodada: 
   //  A rodada consiste em sortear 2 cartas para cada jogador, definir a pontuação de cada jogador e informar o vencedor (usuário ou computador), ou empate, caso as pontuações sejam iguais.
    
   //  método para sortear uma carta, já esta pronto, só precisa invocá-lo.
   //  Cada carta sorteada é um objeto com duas propriedades: um texto que representa o que é escrito na carta; e um valor que mostra a pontuação da carta. 
    
   //  const carta = comprarCarta(); 
   //  // Sorteia uma carta. Por exemplo, o rei de ouros
    
   //  console.log(carta.texto) 
   //  // imprime o texto da carta. Nesse caso: "K♦️"
    
   //  console.log(carta.valor) 
   //  // imprime o valor da carta (um número). Nesse caso: 10)
    
    
   //  => O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato mostrado abaixo
   //  "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
   //  "Computador - cartas: Q♣️ 10♣️  - pontuação 20"
    
   //  =>  Além disso, deve indicar o vencedor ou um empate
   //  "Empate!"
   //  "O usuário ganhou!"
   //  "O computador ganhou!"
    
    