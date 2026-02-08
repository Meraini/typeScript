function addNum(num : number): number{
    // return "hello"
    return num + 1
}




function getValue(myVal: number){
    if (myVal > 5) {
        return true
    }
    //bunu yazarken şu an uyucam bundan sonrasında  da yarın devam edicem çalışmaya
}

const getHello = (s:string):string => {
    return "hello"
}


const Heros = ["thor", "spiderman", "ironman"]


Heros.map(hero => {
    return "hero is " + hero 
})

function consoleError(errmasg: string): void{
    console.log(errmasg);
}

function handleError(errmsg:string): never{
    throw new Error(errmsg);
}
export{}

