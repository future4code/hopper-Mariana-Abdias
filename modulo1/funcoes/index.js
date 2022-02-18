// Exercícios de interpretação de código

// Exercício 1

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2)) // 10
// console.log(minhaFuncao(10)) // 50

// a. Vai ser impresso no primeiro console: 10 e no segundo console: 50

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// minhaFuncao(2)
// minhaFuncao(10)

// b. o Resultado no console seria o mesmo 10 e 50 porque a variável nesse caso continua sendo multiplicada por 5.


// Exercício 2.
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Essa função retorna um booleano se na frase do usuário estiver incluso a palavra cenoura.
// Independente de a palavra cenoura estiver com letra maiúscula ou minúscula.
// Porque o código esta convertendo o texto para maísculo.

// b. 
// i. Quando a frase for: "Eu gosto de cenoura" a resposta vai ser um true. 
// Porque contém na frase o elemento cenoura.

// ii. Quando a frase for: "CENOURA é bom pra vista" a resposta vai ser um true. 
// Porque contém na frase o elemento cenoura.

// iii. Quando a frase for: "Cenouras crescem na terra" a resposta vai ser um true. 
// Porque contém na frase o elemento cenoura, independente se ela tem um s no final, o programa executa, encontra o elemento cenoura, ele não continua mais e retorna um true.


// Exercícios de escrita de código

// Exercício 1. 

// a. 
// function meusDados() {
// const meuNome = "Mariana"
// const minhaIdade = 29
// const minhaCidade = "Itajuba"
// const seEuSouEstudante = "sou estudante"

// console.log(`Eu sou ${meuNome}, tenho ${minhaIdade} anos, moro em ${minhaCidade} e ${seEuSouEstudante}.`)

// }

// meusDados()

// b. 
// function dadosDoUsuario(nome, idade, endereco, profissao) {
    
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)
    
//     }
    
//     dadosDoUsuario()
//     dadosDoUsuario("Laís", 23, "São Paulo", "instrutora")


// Exercício 2. 

// a. 
// function recebaNumeros(num1, num2) {

//     const soma = num1 + num2

//     return soma

// }

// console.log(recebaNumeros(3, 5))

// b. 
// function recebaNumerosNovamente(num1, num2) {

//     const primeiroMaiorQueSegundo = num1 > num2

//     return primeiroMaiorQueSegundo

// }

// console.log(recebaNumerosNovamente(3, 5))

// c. 
// function numeroParOuNao(num1) {

//     const restoDaDivisao = num1 % 2 === 0
        
//     return restoDaDivisao
    
// }

// console.log(numeroParOuNao(10))

// d. 
// function recebaString(string) {


// console.log(string.length,string.toUpperCase())
// }

// recebaString("eu adoro as aulas da labenu!")

// Exercício 3. 


// const num1 = Number(prompt("Informe um número"))
// const num2 = Number(prompt("Informe um número"))

// function soma(num1, num2){
//     return num1 + num2
// }
// function subtração(num1, num2){
//     return num1 - num2
// }
// function multiplicacao(num1, num2){
//     return num1 * num2
// }
// function divisao(num1, num2){
//     return num1 / num2

// }

// console.log("Números inseridos: ", num1, "e", num2)
// console.log("Soma: ", soma(num1, num2))
// console.log("Diferença: ", subtração(num1, num2))
// console.log("Multiplicação: ", multiplicacao(num1, num2))
// console.log("Divisão: ", divisao(num1, num2))


// Desafio 
// 1. 

// a.
// const parametro = (string) => {
    
//     console.log(string)

// }

// parametro("Meu nome é Mariana")

// b. 
// const somarDoisNumeros = (num1, num2) => {
    
//     const soma = num1 + num2
//     parametro(soma)

// }

// somarDoisNumeros(3, 5)


// 2. 

// function teoremaDePitagoras(cateto1, cateto2) {

//     const hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))
//     return hipotenusa

// }

// console.log(teoremaDePitagoras(2, 4))

