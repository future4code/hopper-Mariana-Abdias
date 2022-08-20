// Exercício 1
const minhaString: string = ""
// Quando atribui um número aparece uma mensagem de erro que o type number não é atruível ao type string.

const meuNumero: number | string = 1
// Para a variável atribuir mais de um tipo de de valor, é preciso criar o Union Type conforme acima, inserindo uma | entre os tipos.

type person = { 
  nome: string, 
  idade: number,
  corFavorita: string
}

enum CorFavorita {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta"
}
  

const mariana: person = {
  nome: "Mariana Abdias", 
  idade: 30,
  corFavorita: CorFavorita.VIOLETA
}

const felipe: person = {
  nome: "Luis Felipe Ribeiro", 
  idade: 31,
  corFavorita: CorFavorita.AZUL
}

const fabiana: person = {
  nome: "Fabiana Ribeiro", 
  idade: 28,
  corFavorita: CorFavorita.AMARELO
}


// Exercício 2
function obterEstatisticas(numeros: number[] ) {

  const numerosOrdenados: number[] = numeros.sort(
      (a, b) => a - b
  )

  let soma: number = 0

  for (let num of numeros) {
      soma += num
  }

  const estatisticas: {maior: number, menor: number, media: number} = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
  }

  return estatisticas
}
  
// a) Entrada: Array type number e Saída: Objeto type number
// b) numerosOrdenados, soma e estatisticas


type AmostraDeIdades = {
  numeros: number[],
  obterEstatisticas: (numeros: number[]) => Object
}


// Exercício 3
// a)
type TypePosts = { 
  autor: string, 
  texto: string
}
  
const posts: TypePosts[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

// b) Entrada: posts e o autor | Saída: nome do autor filtrado

function buscarPostsPorAutor(posts: TypePosts[], autorInformado: string) {
  return posts.filter(
    (post) => {
      return post.autor === autorInformado
    }
  )
}
   
  