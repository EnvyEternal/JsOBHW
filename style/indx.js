/*const map = {
    1:[id-1,Tom, Fox],
    2:[id-2,Ann, Smith],
    3:[id-3,Jack, Cros],
}

const user1 = {
    id: 21,
    name: Tom,
    surname: Fox,
}
const user2 = {
    id: 322,
    name: Ann,
    surname: Smith,
}
const user3 = {
    id: 417,
    name: Jack,
    surname: Cros,
}*/












/*
let map = new Map();
map.set(1,{name:"Tom",surname:"Fox",})
console.log(map.get(1))
*/
const worker = {
    name: 'Jack',
    surname: 'Frod',
    expiriance: 9,
    salary: 8000,
    greet: function (){
        console.log(`I, ${this.name} ${this.surname}`)

    },
    sall: function (){
        
        if(this.expiriance>=5 && this.expiriance <= 7){
           console.log(("Bonus:")+((this.salary/100)*5))
        }else if(this.expiriance<=8){
            console.log(("Bonus:")+((this.salary/100)*8))
        }
    },
}
//worker.greet();
worker.sall();