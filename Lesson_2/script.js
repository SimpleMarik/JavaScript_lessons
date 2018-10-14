

    //Задание 1

function test1() {

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

}

function test2(a, b , x) {

    //Задание 2

    b = 2;
    x = 1 + (b *= 2);
    alert(x);

    // (b *= 2) присваивание с умножением. Смысл: b = b * 2;

    //Задание 4

    a = +prompt("Введите число от 0 до 15 для срабатывания счётчика:");
    switch (a) {
        case a:

        function hard(a) {
            if (a >= 0 && a < 16) {
                alert(a);
                a = hard(++a);
            } else {
                alert("Неверное число!")
            }
            return a;
        }

        hard(a);
        break;
    }
}

function test3() {

    //Задание 3

    let a = +prompt();
    let b = +prompt();
    let c;

    if (a >= 0 && b >= 0) {
        c = a - b;
        alert(c);
    } else if (a < 0 && b < 0) {
        c = a * b;
        alert(c);
    } else {
        c = a + b;
        alert(c);
    }

}

function test4() {

    //Задания 5 и 6
    
    function addition(a, b) {
        return c = a + b;
    }

    function subtraction(a, b) {
        return c = a - b;
    }

    function multiplication(a, b) {
        return c = a * b;
    }
    
    function division(a, b) {
        return c = a / b;
    }

    function mathOperation(arg1, arg2, operation) {

        arg1 = +prompt("Введите первое число:");
        arg2 = +prompt("Введите второе число:");
        operation = +prompt("1 - сложение, 2 - вычитание, 3 - умножение 4 - деление:");

        switch (operation) {
            case 1:
                alert(addition(arg1, arg2));
                break;
            case 2:
                alert(subtraction(arg1, arg2));
                break;
            case 3:
                alert(multiplication(arg1, arg2));
            case 4:
                alert(division(arg1, arg2));
                break;
            default:
                alert("Что - то пошло не так!");
                break;
        }

    }

    mathOperation();
}

    // Задание 7* - "0" — это значение.
    // "Null" - специальное значение, которое имеет смысл "Ничего" или "Значение неизвестно".
    // "Undefined" - значение не присвоено.
    // https://cs9.pikabu.ru/post_img/2017/03/25/11/149047014916869290.jpg - наглядно.

    function test5() {
        //Задание 8

        function power(val, pow) {
            if (pow != 1) {
                return val * power(val, pow - 1);
            } else {
                return val;
            }
        }

        alert(power(+prompt(), +prompt()));
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

