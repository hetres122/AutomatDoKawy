const automat = {

    price: 0,
    sum: 0,
    showVar: 0,
    showPrice: 0,
    showRest: 0,
    batonReset: 0,
    rest: {
        half: {
            value: 0.5,
            quantity: 0
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
    },
    products: {
        blackCoffee: {
            value: 2.5,
            quantity: 100
        },
        chocolate: {
            value: 3,
            quantity: 100
        },
        tea: {
            value: 1.5,
            quantity: 100
        },
        espresso: {
            value: 1.5,
            quantity: 100

        },
        coffeeWithMilk: {
            value: 3,
            quantity: 100
        },
        cappuccino: {
            value: 2,
            quantity: 100
        },
    },
    select() {

        const product1 = document.querySelector('.p1');
        const product2 = document.querySelector('.p2');
        const product3 = document.querySelector('.p3');
        const product4 = document.querySelector('.p4');
        const product5 = document.querySelector('.p5');
        const product6 = document.querySelector('.p6');

        product1.addEventListener('click', (event) => {
            showPrice = document.querySelector('.showPrice');
            this.price += this.products.blackCoffee.value;
            showPrice.innerText = this.price;

        });
        product2.addEventListener('click', (event) => {
            showPrice = document.querySelector('.showPrice');
            this.price += this.products.chocolate.value;
            showPrice.innerText = this.price;
        });
        product3.addEventListener('click', (event) => {
            showPrice = document.querySelector('.showPrice');
            this.price += this.products.tea.value;
            showPrice.innerText = this.price;
        });
        product4.addEventListener('click', (event) => {
            showPrice = document.querySelector('.showPrice');
            this.price += this.products.espresso.value;
            showPrice.innerText = this.price;
        });
        product5.addEventListener('click', (event) => {
            showPrice = document.querySelector('.showPrice');
            this.price += this.products.coffeeWithMilk.value;
            showPrice.innerText = this.price;
        });
        product6.addEventListener('click', (event) => {
            showPrice = document.querySelector('.showPrice');
            this.price += this.products.cappuccino.value;
            showPrice.innerText = this.price;
        });
    },

    dodwanie() {

        const baton1 = document.querySelector('.b1');
        const baton2 = document.querySelector('.b2');
        const baton3 = document.querySelector('.b3');
        const baton4 = document.querySelector('.b4');

        baton1.addEventListener('click', (event) => {
            showVar = document.querySelector('.showVar');
            this.rest.half.quantity++;
            this.sum += this.rest.half.value;
            showVar.innerText = this.sum;
        });

        baton2.addEventListener('click', (event) => {
            showVar = document.querySelector('.showVar');
            this.rest.one.quantity++;
            this.sum += this.rest.one.value;
            showVar.innerText = this.sum;
        });

        baton3.addEventListener('click', (event) => {
            showVar = document.querySelector('.showVar');
            this.rest.two.quantity++;
            this.sum += this.rest.two.value;
            showVar.innerText = this.sum;
        });

        baton4.addEventListener('click', (event) => {
            showVar = document.querySelector('.showVar');
            this.rest.five.quantity++;
            this.sum += this.rest.five.value;
            showVar.innerText = this.sum;
        });
    },
    payy() {
        const pay = document.querySelector('.z1');

        pay.addEventListener('click', (event) => {
            this.wydawanie();
            showPrice = document.querySelector('.showPrice');
            showVar = document.querySelector('.showVar');
            showPrice.innerText = 0;
            showVar.innerText = 0;
            this.price = 0;



        });
    },

    wydawanie() {

        if (this.sum >= this.price) {
            this.sum -= this.price;
            while (this.sum !== 0) {
                if (this.sum >= this.rest.five.value) {
                    this.sum -= this.rest.five.value;
                    this.rest.five.quantity--;
                    showRest = document.querySelector('.showRest0');
                    showRest.innerText++;


                }
                if (this.sum >= this.rest.two.value) {
                    this.sum -= this.rest.two.value;
                    this.rest.two.quantity--;
                    showRest = document.querySelector('.showRest1');
                    showRest.innerText++;

                }
                if (this.sum >= this.rest.one.value) {
                    this.sum -= this.rest.one.value;
                    this.rest.one.quantity--;
                    showRest = document.querySelector('.showRest2');
                    showRest.innerText++;

                }
                if (this.sum >= this.rest.half.value) {
                    this.sum -= this.rest.half.value;
                    this.rest.half.quantity--;
                    showRest = document.querySelector('.showRest3');
                    showRest.innerText++;

                }
            }

        } else {


            while (this.sum !== 0) {
                if (this.sum >= this.rest.five.value) {
                    this.sum -= this.rest.five.value;
                    this.rest.five.quantity--;
                    showRest = document.querySelector('.showRest0');
                    showRest.innerText++;
                }
                if (this.sum >= this.rest.two.value) {
                    this.sum -= this.rest.two.value;
                    this.rest.two.quantity--;
                    showRest = document.querySelector('.showRest1');
                    showRest.innerText++;
                }
                if (this.sum >= this.rest.one.value) {
                    this.sum -= this.rest.one.value;
                    this.rest.one.quantity--;
                    showRest = document.querySelector('.showRest2');
                    showRest.innerText++;
                }
                if (this.sum >= this.rest.half.value) {
                    this.sum -= this.rest.half.value;
                    this.rest.half.quantity--;
                    showRest = document.querySelector('.showRest3');
                    showRest.innerText++;
                }
            }
        }
    },
    take() {
        batonReset = document.querySelector('.reset');
        batonReset.addEventListener('click', (event) => {
            showRest = document.querySelector('.showRest0');
            showRest.innerText = 0;
            showRest = document.querySelector('.showRest1');
            showRest.innerText = 0;
            showRest = document.querySelector('.showRest2');
            showRest.innerText = 0;
            showRest = document.querySelector('.showRest3');
            showRest.innerText = 0;
        });

    },

    init() {
        this.payy()
        this.select();
        this.take();
        this.dodwanie();
    }
}

automat.init();