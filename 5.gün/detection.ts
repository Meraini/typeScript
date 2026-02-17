function detectType(val: number | string){
    if (typeof val === "string") {
       return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null){
    if (!id) {
        console.log("please provide id")
        return
    }
    id.toLowerCase()
}

interface User{
    name: string,
    email:string
}

interface Admin{
    name: string,
    email:string,
    isAdmin: boolean
}

function isAdmin(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}