// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  const altura = Number(prompt("Digite a altura do retângulo."))
  const largura = Number(prompt("Digite a largura do retângulo."))
  const area = altura * largura

  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano que estamos."))
  const anoDeNascimento = Number(prompt("Digite seu ano de nascimento"))
  const idade = anoAtual - anoDeNascimento

  console.log(idade)


}

// EXERCÍCIO 03

function calculaIMC(peso, altura) {
  // implemente sua lógica aqui


  return imc = (peso / (altura * altura))
  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  
  const nomeDoUsuario = prompt("Digite seu nome")
  const idade = Number(prompt("Digite a sua idade"))
  const emailDoUsuario = prompt("Digite seu email")

  console.log(`Meu nome é ${nomeDoUsuario}, tenho ${idade} anos, e o meu email é ${emailDoUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const cor1 = prompt("Digite sua primeira cor favorita")
  const cor2 = prompt("Digite sua segunda cor favorita")
  const cor3 = prompt("Digite sua terceira cor favorita")
  const listaDeCores = [cor1, cor2, cor3]

  console.log(listaDeCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length  === string2.length


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const primeiroElemento = array.shift()
  const ultimoElemento = array.pop()

  array.push(primeiroElemento)
  array.unshift(ultimoElemento)

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  const checaIgualdadeDesconsiderandoCase = string1.toUpperCase() === string2.toUpperCase()
  return checaIgualdadeDesconsiderandoCase 

  
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNascimento = Number(prompt("Qual ano você nasceu?"))
  const anoCarteiradeIdentidade = Number(prompt("Em que ano sua carteira de identidade foi emitida?"))
  const idade = anoAtual - anoNascimento
  const anoRg = anoAtual - anoCarteiradeIdentidade

    if (idade <= 20) {
       console.log(anoRg >= 5);
    }else if (idade > 20 && idade <= 50) {
       console.log(anoRg >= 10);
    }else if (idade > 50) {
      console.log(anoRg >= 15);
    }
    
}




// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  const bissextoMultiplo400 = ano % 400
  const bissextoMultiplo4 = ano % 4 
  const bissextoMultiplo100 = ano % 100
  
  if (bissextoMultiplo4 === 0 && (bissextoMultiplo100 !== 0 || bissextoMultiplo400 === 0)) {
    return true;
  } else {
    return false;
  }

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const idadeUsuario = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidadeHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log(idadeUsuario === "sim" && ensinoMedio === "sim" && disponibilidadeHorario === "sim")

}
