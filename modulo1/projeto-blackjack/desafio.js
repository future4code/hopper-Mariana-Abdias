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

   
   const iniciarJogo = confirm(`Bem vindo ao jogo de Blackjack!
   Quer iniciar uma nova rodada?`)

   switch (iniciarJogo) {
      case false :
         alert("O jogo acabou!")
         break;
   
      default: 
      const carta1Usuario = comprarCarta()
      const carta2Usuario = comprarCarta()
      let valorUsuario = carta1Usuario.valor + carta2Usuario.valor


      const carta1Computador = comprarCarta()
      const carta2Computador = comprarCarta()
      let valorComputador = carta1Computador.valor + carta2Computador.valor
   
      while(valorUsuario === 22) {
         carta1Usuario = comprarCarta()
         carta2Usuario = comprarCarta()
         valorUsuario = carta1Usuario.valor + carta2Usuario.valor
      }

      
      while(valorComputador === 22) {
         carta1Computador = comprarCarta()
         carta2Computador = comprarCarta()
         valorComputador = carta1Computador.valor + carta2Computador.valor
      }   

      let cartasUsuario = `${carta1Usuario.texto} ${carta2Usuario.texto}`
      let cartasComputador = `${carta1Computador.texto} ${carta2Computador.texto}`
      let novasCartas = true

      while (novasCartas && valorUsuario <= 21) {
         novasCartas = confirm(
         `Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${carta1Computador.texto}
         Deseja comprar mais uma carta?`)
         if (novasCartas) {
            const novaCarta = comprarCarta()
            valorUsuario += novaCarta.valor
            cartasUsuario += ` ${novaCarta.texto}`
         } 
      }

      while (valorComputador <= valorUsuario && valorUsuario <= 21) {
            const novaCarta = comprarCarta()
            valorComputador += novaCarta.valor
            cartasComputador += ` ${novaCarta.texto}`
          
      }

      let vencedor = "O Computador ganhou!"
      
      if ((valorUsuario < 22) && (valorUsuario > valorComputador) || (valorComputador > 21)) {
         vencedor = "O usuário ganhou!"
      } else if (valorUsuario === valorComputador) {
         vencedor = "Empatou!"
      }
      
      alert(
      `Usuário - Cartas: ${cartasUsuario} - Pontuação: ${valorUsuario}
      Computador - Cartas: ${cartasComputador} - Pontuação: ${valorComputador}
      ${vencedor}`)

   }
