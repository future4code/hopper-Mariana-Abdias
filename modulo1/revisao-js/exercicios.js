// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a, b) {
        if (a > b) {return 1}
        if (a < b) {return -1}
        })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let pares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i])
        }
        
    }

    return pares
}



// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let paresElevadosADois = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            paresElevadosADois.push(array[i] ** 2) 
        }
        
    }

    return paresElevadosADois

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0;
    let indexmaior = 0;
    while (indexmaior <= array.length - 1) {
      if (array[indexmaior] > maior) {
        maior = array[indexmaior];
      }
      indexmaior++;
    }

    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = Math.max(num1, num2)
    const menorNumero = Math.min(num1, num2)
    const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    const diferenca = maiorNumero - menorNumero
    return `{maiorNumero: ${maiorNumero}, maiorDivisivelPorMenor: ${maiorDivisivelPorMenor}, diferenca: ${diferenca}}`

   

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}