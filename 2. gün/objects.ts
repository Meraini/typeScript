//burda objectlerin mantığını göreceğiz
// const User = {
//     name: "mert",
//     email: "mert@gmail.com",
//     isActive: true
// }

// function createUser(user: {name: string, isPaid: boolean}){}

// ///bi tık garipmiş bruası ama adaha iyi anladığüım bir kısım vart 

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price:600}
// }
// //önceden veriyi locklama mantığı günveli yapıyor galiba şu ana akladar anladığım ve gördüğüm kadarıyla bu şekilde bir veri yapısı oluşturup onu kullanarak istediğimiz gibi veri oluşturabiliyoruz ve bu bize daha güvenli bir yapı sağlıyor gibi gözüküyor


type User = {
    name:string,
    email:string,
    isActive:boolean
}

type Mystring = string

function createUser(user: User): User{
    return {name:"",email:"", isActive: true}
}



createUser({name:"",email:"", isActive: true})


export {}