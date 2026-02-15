interface TakePhoto {
    cameraMode: string
    filter: string
    burstMode: number
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number
    ){}
}

interface Stroy{
    createStory(): void
}

class Youtube implements TakePhoto, Stroy{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number,
        public short:string
    ){}
    createStory(): void {
        console.log("Story created")
    }
}//bir class birden fazla interface'i implement edebilir. interface'ler birbirinden bağımsızdır. birbirleriyle ilişkili olmak zorunda değiller.