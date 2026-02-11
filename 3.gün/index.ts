class User{
    email: string
    name:string
    city:string

    constructor(email:string, name:string, city:string){
        this.email = email
        this.name = name
        this.city = city
    }
}

const mert = new User("mert@gmail.com", "Mert","izmir")