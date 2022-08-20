type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// a) usando o comando tsc no terminal

// b) rodar o comando npm start (mudando o script index.ts para exercicio-4.ts conforme abaixo)
// "start": "tsc && node ./build/exercicio-4.js"

// b) para transpilar vários arquivos deve-se colocar os nomes separados por um espaço.
// "tsc && node ./build/index.js ./build/exercicio-4.js"