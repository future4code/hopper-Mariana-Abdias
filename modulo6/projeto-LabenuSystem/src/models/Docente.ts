export type TDocente = {
    id: number,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: number,
}

export class Docente {
    constructor(
        private id: number,
        private nome: string,
        private email: string,
        private data_nasc: string,
        private turma_id: number,
    ) {
        this.id = id
        this.nome = nome
        this.email = email
        this.data_nasc = data_nasc
        this.turma_id = turma_id
    }

    public getId() {
        return this.id
    }

    public getNome() {
        return this.nome
    }

    public getEmail() {
        return this.email
    }

    public getDataNasc() {
        return this.data_nasc
    }

    public getTurmaId() {
        return this.turma_id
    }

    public setId(newId: number) {
        this.id = newId
    }

    public setNome(newNome: string) {
        this.nome = newNome
    }

    public setEmail(newEmail: string) {
        this.email = newEmail
    }   

    public setDataNasc(newDataNasc: string) {
        this.data_nasc = newDataNasc
    }

    public setTurmaId(newTurmaId: number) {
        this.turma_id = newTurmaId
    }
}