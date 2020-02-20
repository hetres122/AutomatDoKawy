


class Automat {
    constructor(cena, pieniadze) {
        this.cena = cena;
        this.pieniadze = pieniadze;
    }
    
    reszta = {
        half: {
            value: 0.5,
            quantity: 100
        },
        one: {
            value: 1,
            quantity: 100
        },
        two: {
            value: 2,
            quantity: 100
        },
        five: {
            value: 5,
            quantity: 100
        },
    }

    wydawanie() {
        this.pieniadze -= this.cena;
        while (this.pieniadze !== 0) {
            if (this.pieniadze >= this.reszta.five.value) {
                this.pieniadze -= this.reszta.five.value;
                this.reszta.five.quantity--;
                console.log("5");

            }
            if (this.pieniadze >= this.reszta.two.value) {
                this.pieniadze -= this.reszta.two.value;
                this.reszta.two.quantity--;
                console.log("2");
            }
            if (this.pieniadze >= this.reszta.one.value) {
                this.pieniadze -= this.reszta.one.value;
                this.reszta.one.quantity--;
                console.log("1");
            }
            if (this.pieniadze >= this.reszta.half.value) {
                this.pieniadze -= this.reszta.half.value;
                this.reszta.half.quantity--;
                console.log("0.5");

            }

        }

    }
    dodwanie(){

const baton1 =  document.querySelector('.b1');
const baton2 =  document.querySelector('.b2');
const baton3 =  document.querySelector('.b3');
const baton4 =  document.querySelector('.b4');

baton1.addEventListener('click', function(event){
console.log(event.target.value);


});
baton2.addEventListener('click', function(event){
console.log(event.target.value);

});
baton3.addEventListener('click', function(event){
console.log(event.target.value);

});
baton4.addEventListener('click', function(event){
console.log(event.target.value);

});



    }
    
    info(){
document.write("Ilość: ",this.cena,);

    }

}

const automat = new Automat(5, 10);
automat.wydawanie();
automat.info();
automat.dodwanie();


