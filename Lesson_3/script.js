console.log("***NO BUTTONS!!!***")

console.log("***Первое Задание***");
// Метки зло!
primeNumbers:
    for (i = 0; i < 100; i++) {
        for (j = 2; j < i; j++) {
            if (i % j === 0) continue primeNumbers; //Webstorm предложил использовать
            // строгое неравенство. Почему?
        }
        console.log(i);
    }

console.log("***Второе Задание***");

i = 0;
let n = 10;

function numbers(i) {
    if (i == 0){
        console.log(i + " - Это ноль!")
    } else if (i % 2) { // Насколько я понял, необязательно писать i%2 == 1,
        // компилятор проверяет есть ли остаток. Верно?
        console.log(i + " - Нечётное число")
    } else {
        console.log(i + " - Чётное число")
    }
}

do {
    numbers(i);
    i++;
} while (i <= n);



console.log("***Третье Задание***");

i = 1;
n = 10;

for (i; i < n; console.log(i++)) {

}

console.log("***Четвертое Задание***");

//Способ через переменную

let str = "";

for(let i = 0; i <= 20; i++) {
    str += "x";
    console.log(str);
}
//Способ через массив

let arr = [];

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

