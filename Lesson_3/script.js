console.log("***NO BUTTONS!!!***")

console.log("***Первое Задание***");
primeNumbers:
    for (i = 1; i < 100; i++) {
        for (j = 2; j < i; j++) {
            if (i % j == 0) continue primeNumbers;
        }
        console.log(i);
    }

console.log("***Второе Задание***");

i = 0;
let n = 10;

function numbers(i) {
    if (i == 0){
        console.log(i + " - Это ноль!")
    } else if (i % 2) {
        console.log(i + " - Нечётное число")
    } else {
        console.log(i + " - Чётное число")
    }
}

do {
    numbers(i);
    i++;
} while (i < n);



console.log("***Третье Задание***");

i = 1;
n = 10;

for (i; i <= n; console.log(i++)) {

}

console.log("***Четвертое Задание***");

var arr = [];
    for (i = 1; i < 21; i++) {
        arr.push('x');
        console.log(arr);
    }


console.log("***Пятое Задание***");

let myBasket = [3,6,7,3,2,1];

function countBasketPrice(array) {
    let price = 0;
    for (i = 0; i < array.length; i++) {
        price += array[i];
    }
    console.log("Сумма вашей покупки: " + price + " рубля!");
}

countBasketPrice(myBasket);

