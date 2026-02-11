interface user {
    readonly dbId: number,
    email:string,
    name:string,
    userId:number
}
const mertsecme: user ={email:"mert@gmail.com", name:"Mert", userId:123456, dbId:123456789}
mertsecme.email = "m.@mgail.com" //readonly olarak tanımladığımız dbId özelliği sadece okunabilir olduğu için bu özelliğe değer atayamayız ama diğer özelliklere değer atayabiliriz
