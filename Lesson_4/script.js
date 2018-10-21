console.log("***Задание 1***");

console.log("Математический способ");

let enterNumber = +prompt("Введите число от 0 до 999");

let numbers = {
    units: 0,
    tens: 0,
    hundreds: 0
};

if (enterNumber <= 999 && enterNumber > 0) {
    numbers.units = enterNumber % 10;
    numbers.tens = Math.floor(enterNumber / 10 % 10);
    numbers.hundreds = Math.floor(enterNumber / 100 % 10);
} else if (enterNumber < 0 || enterNumber > 999) {
    alert("Вы ввели неверное число!");
}

console.log(numbers);

console.log("Метод через *split*");

//Насколько я понимаю, данный метод невозможно реализовать с +prompt.
//Возвращает ошибку mNumbers.split is not a function.

let mNumbers = prompt("Введите число от 0 до 999");

let base = mNumbers.split('');

if (base.length > 3 || base.length <= 0) {
    alert("Вы ввели неверное число");
    base = [];
} else if (base.length < 3) {
    while (base.length < 3) {
        base.unshift(0);
    }
} else if (base[0] == '-') {
    alert('Вы ввели отрицательное число');
    base = [];
}

let objNum = {
    units: base[2],
    tens: base[1],
    hundreds: base[0]
};

console.log(objNum);

console.log("***Задание 2***");

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
    myBasket.push(+prompt("Добавьте цену: "));
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
    console.log("Сумма вашей покупки: " + price + " руб!");
}

countBasketPrice(myBasket);



