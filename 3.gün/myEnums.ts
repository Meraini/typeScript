// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2

// if (l === AISLE) {
    
// }

enum SeatChoice{
    AISLE = 10,
    MIDDLE = 22,
    WINDOW,
    FOURTH = 44
}
//enum yapısı bize daha okunabilir ve yönetilebilir bir kod yapısı sağlar çünkü enum yapısında tanımladığımız değerler anlamlı isimlere sahip olur ve bu sayede kodun ne yaptığı daha kolay anlaşılır hale gelir ayrıca enum yapısı sayesinde değerlerin birbirleriyle ilişkili olduğunu göstermek de mümkün olur bu da kodun daha düzenli ve anlaşılır olmasını sağlar
const  hcSeat = SeatChoice.AISLE
