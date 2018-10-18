console.log("***Задание 1***")

let enterNumber = +prompt("Введите число от 0 до 999");

let numbers = {
    units: 0,
    tens: 0,
    hundreds: 0
};

if (enterNumber <= 9 && enterNumber > 0) {
    numbers.units = enterNumber;
} else if (enterNumber <= 99 && enterNumber > 0) {
    numbers.units = enterNumber % 10;
    numbers.tens = Math.floor(enterNumber / 10 % 10);
} else if (enterNumber <= 999 && enterNumber > 0) {
    numbers.units = enterNumber % 10;
    numbers.tens = Math.floor(enterNumber / 10 % 10);
    numbers.hundreds = Math.floor(enterNumber / 100 % 10);
} else if (enterNumber < 0 || enterNumber > 999) {
    alert("Вы ввели неверное число!");
}

console.log(numbers);

console.log("***Задание 2***")

let bee = {
    price: 30,
    name: "Toy Bee",
    addPrice: function () {
        this.price = +prompt();
    }

};

let shrek = {
    price: 40,
    name: "Toy Shrek",
    addPrice: function () {
        this.price = +prompt();
    }
};


myBasket = [bee, shrek];

function addBasket() {
    myBasket.push(+prompt("Добавьте цену: "))
    console.log(myBasket);
}

function basketDelete(array) {
    array.length = 0;
}

function countBasketPrice(array) {
    let price = 0;
    for (i = 0; i < array.length; i++) {
        price += array[i].price;
    }
    console.log("Сумма вашей покупки: " + price + " рубля!");
}

countBasketPrice(myBasket);

