import { checaItensDuplicados } from './ex3'

describe('Checa itens duplicados', () => {
  it("retorna false para '[0, 1, 2, 3, 4, 5]'", () => {
    const ehDuplicado = checaItensDuplicados([0, 1, 2, 3, 4, 5])
    expect(ehDuplicado).toEqual(false)
  })
  it("retorna false para '[0, 1, 1, 1, 2, 3, 4, 5]'", () => {
    const ehDuplicado = checaItensDuplicados([0, 1, 2, 3, 4, 5])
    expect(ehDuplicado).toEqual(false)
  })
})
