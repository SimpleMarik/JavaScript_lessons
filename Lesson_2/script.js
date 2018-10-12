

//Задание 1

let a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 - сначала прибавили к "a" единицу, потом приравняли к "c".
// "a" стало равно 2;
d = b++; alert(d); // 1 - сначала приравняли "b" к "d", потом прибавили к "b" единицу.
// "b" стало равно 2;
c = (2+ ++a); alert(c); // 5 - меняем значение "c" по формуле. "a" уже равно 2.
// Далее сначала прибавляем к "a" единицу,
// потом сложение с 2. 2 + 3 = 5. "a" теперь равняется 3.
d = (2+ b++); alert(d); // 4 - меняем значение "d" по формуле. "b" уже равно 2.
// Далее сначала сначала складываем 2 и "b" (2 + 2 = 4),
// потом прибавляем к "b" единицу. "b" равняется 3.
alert(a); // 3 - смотри строку 10-12.
alert(b); // 3 - смотри строку 13-15.

function test(a, b , x) {

    //Задание 2

    b = 2;
    x = 1 + (b *= 2);
    alert(x);

    // (b *= 2) присваивание с умножением. Смысл: b = b * 2;

    //Задание 4

    a = +prompt("Введите число меньше 15 для срабатывания счётчика до 15:");
    switch (a) {
        case a:

        function hard(a) {
            if (a < 15) {
                alert(a);
                a = hard(++a);
            }
            return a;
        }

            alert(hard(a));
            break;
    }
}


    /*

    //Тестовая рекурсия сложения от n до 1;

    function sumTo(n) {
        if (n == 1) return 1;
        return n + sumTo(n - 1);
    }

    alert( sumTo(5) );

    //Тестовая рекурсия факториала (Умножение от num до 1)

    function factorial(num) {

        // If the number is less than 0, reject it.
        if (num < 0) {
            return -1;
        }
        // If the number is 0, its factorial is 1.
        else if (num == 0) {
            return 1;
        }
        // Otherwise, call this recursive procedure again.
        else {
            return (num * factorial(num - 1));
        }
    }

    var result = factorial(8);
    document.write(result);

    // Output: 40320

    */

