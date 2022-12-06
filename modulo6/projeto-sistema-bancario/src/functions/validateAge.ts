const getIdade = (valor: string) => {
  const spliter: string[] = valor.split("/")
  const DAY: number = Number(spliter[0])
  const MONTH: number = Number(spliter[1])
  const YEAR: number = Number(spliter[2])

  const dataAtual: Date = new Date()
  const diaAtual: number = dataAtual.getDate()
  const mesAtual: number = dataAtual.getMonth() + 1
  const anoAtual: number = dataAtual.getFullYear()

  let date: number

  mesAtual >= MONTH && diaAtual >= DAY ? date = anoAtual - YEAR : date = anoAtual - YEAR - 1

  return date
}

export const validate = (birthDate: string): boolean => {
  const age = getIdade(birthDate)

  return age >= 18 ? true : false
}