export type User = {
  cpf: string
  name: string
  birthDate: string
  balance: number
  extract: Extract[]
}

export type Extract = {
  value: number
  date: string
  description: string
}

export let baseUsers: User[] = [
  {
    cpf: "12345678900",
    name: 'Alice Magalhães',
    birthDate: '05/05/1990',
    balance: 0,
    extract: [{ value: 0, date: '', description: '' }]
  },
  {
    cpf: "12345678901",
    name: 'Paulo Eduardo Vasconcelos',
    birthDate: '18/08/1991',
    balance: 0,
    extract: [{ value: 0, date: '', description: '' }]
  },
  {
    cpf: "12345678902",
    name: 'Matheus de Assis',
    birthDate: '01/12/1984',
    balance: 0,
    extract: [{ value: 0, date: '', description: '' }]
  }
]

