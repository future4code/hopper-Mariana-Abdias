export class User {
    private id: string
    private email: string
    private password: string

    constructor(id: string, email: string, password: string)
    {
        this.id = id, 
        this.email = email,
        this.password = password
    }

    getId(): string{
        return this.id
    }

    getEmail():string{
        return this.email
    }

    getPassword(): string{
        return this.password
    }

    setEmail(newEmail:string):void {
        this.email = newEmail
    }

    setPassword(newPassword:string):void {
        this.password = newPassword
    }
}