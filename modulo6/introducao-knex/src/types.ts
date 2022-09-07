export enum CATEGORIAS {
  ACESSORIOS = "acessórios",
  CALCADOS = "calçados",
  ROUPAS = "roupas"
}

export type Produto = {
  id: number,
  nome: string,
  preco: number,
  categoria: CATEGORIAS
}

export type Usuario = {
  id: number,
  nome: string,
  email: string
}