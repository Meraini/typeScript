//generics 

const score :  Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean| number):boolean| number{
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val
}
identityThree(3)
identityThree("Hello")


//generics arrow funcs and  arrays
function getSearchProducts<T>(products: T[]): T {
    const index = 3
    return products[index]!
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
    //business logic
    const index = 4
    return products[index]!
}    

 