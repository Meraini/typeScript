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
 

//array

const data : number[] = [1,2,3,4,5]
const data2 : string[] = ["1","2","3"]
const data4: string[] | number[] = [1,2,3,4,5] //bu şekilde hem string hemde number arrayi oluşturabiliriz ama tek bir array türü olabilir yani hem string hemde number arrayi aynı anda olamaz
