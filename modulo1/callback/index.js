// Exercícios de interpretação de código

// 1.

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// a. O código acima vai trazer o array principal com os nomes listados e apelido, mas também vai trazer o index de cada objeto dentro do array, o que vai ser impresso no console:
/* [{ nome: "Amanda Rangel", apelido: "Mandi" }, 0
    { nome: "Laís Petra", apelido: "Laura" }, 1
    { nome: "Letícia Chijo", apelido: "Chijo" }, 2]
*/

// 2.

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })

//   console.log(novoArrayB)

// a. O código acima vai trazer apenas um array com os nomes listados no array principal, o que vai ser impresso no console: ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

// 3.

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })

//   console.log(novoArrayC)

// a. Vai ser impresso no console apenas os usuários que não tiverem apelido Chijo:
/*   [{ nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" }]
  */

// Exercícios de escrita de código

// Exercício 1.

const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

// a.
const novoArrayPets = pets.map((item) => {
  return item.nome;
});

console.log(novoArrayPets);

// b.
const novoArrayPets2 = pets.filter((item) => {
  return item.raca === "Salsicha";
});

console.log(novoArrayPets2);

// c.
const selecionaPoodle = (item, index, array) => {
    return item.raca === "Poodle"
}

const poodle = pets.filter(selecionaPoodle)

const pegarNomePet = (item) => {
    return item.nome
}

const nomesPets = poodle.map(pegarNomePet)

const arrayMensagem = []
for (let index = 1; index < nomesPets.length; index++) {
    const element = nomesPets[index];
    arrayMensagem.push(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomesPets[0]}`)
    arrayMensagem.push(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomesPets[1]}`)
}
console.log(arrayMensagem)

// Exercício 2

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

// a.
const novoArrayProdutos = produtos.map((item) => {
  return item.nome;
});
console.log(novoArrayProdutos);

// b.
const novoPreco = produtos.map((itemComDesconto) => {
  return {
    nome: itemComDesconto.nome,
    precosComDescontos: ((itemComDesconto.preco * 0.95)).toFixed(2),
  };
});

console.log(novoPreco);

// c.
const bebidas = produtos.filter((item, index, array) => {
  return item.categoria === "Bebidas";
});
console.log(bebidas);

// d.
const produtosYpe = produtos.filter((item, index, array) => {
  return item.nome.includes("Ypê");
});

console.log(produtosYpe);

// e.
produtosYpe.map((produto) =>
  console.log(`Compre ${produto.nome} por ${produto.preco}`)
);


// Desafio

// Exercício 1.
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

// a.
const pokemonsEmOrdem = pokemons.map(
    (pokemon) => pokemon.nome).sort()
    console.log(pokemonsEmOrdem)

// b.
const tipoSemRepeticao = new Set()
pokemons.map((pokemon) => {
    tipoSemRepeticao.add(pokemon.tipo)

})
console.log(tipoSemRepeticao)


