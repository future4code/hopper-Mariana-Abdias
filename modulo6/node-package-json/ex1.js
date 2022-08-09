// a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node? A partir do process.argv[2], nós podemos atribuir valores. Podemos passar informações, ao rodar os comandos utilizando o argv.

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

console.log(
  `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${
    idade + 7
  } anos.`
)
