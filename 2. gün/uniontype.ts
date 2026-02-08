let score: number | string = 33

score = 44

score = "55"

type User = {
    name:string,
    email:string,
    isActive:boolean
}

type Admin = {
    name:string,
    email:string,
    isActive:boolean,
    role: "admin"
}
let mert: User | Admin = {
    name: "mert",
    email: "mert@example.com",
    isActive: true
}
//admin de olabilir ama duruma bağlı olarak user da olabilir bu şekilde bir yapı oluşturabiliyoruz bu bize daha esnek bir yapı sağlıyor
 