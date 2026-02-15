abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia():void
    getReelTime(): number{
        //reel time hesaplama kodları
        return 10
    }
}
//abstract class'lar newlenemezler. sadece extend edilebilirler. abstract class'lar içinde abstract method'lar tanımlanabilir. abstract method'lar sadece imzalarıyla tanımlanır. gövdeleri olmaz. abstract method'lar subclass'larda override edilmek zorundadır.
// const mert = new TakePhoto("TESXT", "TEST")

class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter: string,
        public burstMode: number
    ){
        super(cameraMode, filter)
        
    }
    getSepia(): void {
        console.log("sepia")
    }
}

const c = new Instagram("TEST", "TEST",1 )

// const mert = new Instagram("TESXT", "TEST")

//abstract class'lar sadece diğer class'lar tarafından extend edilebilirler. newlenemezler. abstract method'lar sadece imzalarıyla tanımlanır. gövdeleri olmaz. abstract method'lar subclass'larda override edilmek zorundadır.

