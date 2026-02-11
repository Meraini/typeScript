class User{
    email: string
    name:string
    city:string
    protected _courseCount = 1
    //protected: sadece bu class ve bu classdan türeyen classlarda erişilebilir. dışarıdan erişilemez.

    constructor(email:string, name:string, city:string){
        this.email = email
        this.name = name
        this.city = city
    }

    get getAppleEmail():string{
        return `apple ${this.email}`
    }

    private deleteToken(){
        console.log("Token deleted")
    }
    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}



const mert = new User("mert@gmail.com", "Mert","izmir")

// class kullanici{
//     readonly city: string = "ankara"
//     constructor(
//         public email: string,
//         public name:string,
//         // private userid:string
//         ){
//             this.email = email
//             this.name = name 
//             // this.userid = userid  
//         }
// }

//getter ve setters

// get getAppleEmail():string{
//     return `apple ${this.email}`
// }