

function test(a) {
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
