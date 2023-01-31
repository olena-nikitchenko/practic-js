class Car {
    // Change code below this line
    static MAX_PRICE = 50000;

    #price;
    #role;

    constructor({ price, role }) {
        this.#price = price;
        this.#role = role;
    }
    get role() {
        return this.#role;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        this.#price = newPrice > Car.MAX_PRICE ? this.#price : newPrice;
    }
    // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
