/*const map = {
    1:[id-1,Tom, Fox],
    2:[id-2,Ann, Smith],
    3:[id-3,Jack, Cros],
}

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