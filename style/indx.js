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
        }else{console.log("You doesn`t have some bonus")}
    },
}
worker.greet();
worker.sall();