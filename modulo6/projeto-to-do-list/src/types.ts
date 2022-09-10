export enum STATUS {
  TODO = "a fazer",
  DOING = "fazendo",
  DONE = "feita"
}

export type ToDoList = {
  id: number,
  title: string,
  description: string,
  limitDate: string,
  status: STATUS,
  creatorUserId: number
}

export type Users = {
  id: number,
  name: string,
  nickname: string,
  email: string
}