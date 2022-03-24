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
    const objeto = {
        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
        diferenca: Math.max(num1, num2) - Math.min(num1, num2)
    }
    return objeto
 

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let primeirosPares = []
    for (let i = 0; primeirosPares.length < n; i++) {
        if (i % 2 === 0) {
            primeirosPares.push(i)
        }
        
    }
    
    return primeirosPares
   
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
  

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const maiorEMenor = []
    const arrayOrdenado = retornaArrayOrdenado(array)
    maiorEMenor.push(arrayOrdenado[arrayOrdenado.length - 2])
    maiorEMenor.push(arrayOrdenado[1])
    
    return maiorEMenor
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme = {
        nome: "O Diabo Veste Prada",
        ano: 2006,
        diretor: "David Frankel",
        atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }
    const chamada = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

    return chamada
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa.nome = "ANÔNIMO"
        let novaPessoa ={
        ...pessoa
    }

    return novaPessoa

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = []
    for (const autorizado of pessoas) {
        if (autorizado.altura >= 1.5 && autorizado.idade > 14 && autorizado.idade < 60) {
            pessoasAutorizadas.push(autorizado)
        }
    }
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = []
    for (const naoAutorizado of pessoas) {
        if (naoAutorizado.altura < 1.5 || naoAutorizado.idade <= 14 || naoAutorizado.idade >= 60) {
            pessoasNaoAutorizadas.push(naoAutorizado)
        }
    }
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.map((conta) => {
        const valorCompras = conta.compras.reduce((acc, curr) => acc + curr, 0)
        conta.saldoTotal -= valorCompras
        conta.compras = []
    })
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => a.nome.localeCompare(b.nome))

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort((a, b) => {
        a = a.dataDaConsulta.split("/").reverse().join()
        b = b.dataDaConsulta.split("/").reverse().join()
        return a.localeCompare(b)
    })
}