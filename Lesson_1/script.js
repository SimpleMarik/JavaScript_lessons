
function grades() {
    let tC = prompt("Введите градусы в цельсиях:");
    let tF = (9 / 5) * tC + 32;
    alert ("Градусы по Фаренгейту: " + tF);
    console.log (typeof tC);
}

function nameCopy () {
    let admin;
    let name = prompt("Введите имя администратора:");

    admin = name;

    console.log (typeof name);

    if (name == 0 || name == null) {
        alert("Постарайтесь и введите что-нибудь");
    } else {
        alert("Админа будут звать: " + admin);
    }
}

function jsqstn() {
    alert("Результат: " + 1000 + "108");
}
