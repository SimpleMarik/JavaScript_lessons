//Работа с корзиной

myBasket = [];

function toy(id, price, name) {
    this.id = id;
    this.price = price;
    this.name = name;
}



function addBasket(array, id, price, name) {
    newtoy = new toy(id, price, name);
    array.push(newtoy);
    let summ = document.getElementById('summ');
    summ.innerHTML = countBasketPrice(myBasket) + ' р.';
    let products = document.getElementById('products');
    products.innerHTML = myBasket.length;
}

console.log(myBasket);

function basketDelete(array) {
    array.length = 0;
    let summ = document.getElementById('summ');
    summ.innerHTML = countBasketPrice(myBasket) + ' р.';
    let products = document.getElementById('products');
    products.innerHTML = myBasket.length;
}

function countBasketPrice(array) {
    let price = 0;
    for (i = 0; i < array.length; i++) {
        price += array[i].price;
    }
    console.log("Сумма вашей покупки: " + price.toFixed(2) + " р.");
    return price.toFixed(2);
}

countBasketPrice(myBasket);


let summ = document.getElementById('summ');

let inCart = document.getElementsByClassName('incart');

inCart[0].addEventListener('click', function () {
    addBasket(myBasket, 4, 15.99, 'MacBook');
});

//Работа с изображениями

let loopInterval;
let loopCount = 1;
let timer = 3000;
let picCount = 0;

let nextPic = document.getElementById('moreThan');
let prevPic = document.getElementById('lessThan');

let images = document.querySelectorAll(".sliderImg img");

function init() {

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function () {
            changeBigPicture (i, images[i].src);
        });
        }
    //loopInterval = setInterval(loopPics, timer, images);
    //Закоментил для удобства
}

function changeBigPicture(index, src) {
    let bigPicture = document.getElementById('bigPicture');
    if (src !== undefined) {
        bigPicture.src = src;
    }
    loopCount = index;
    picCount = index;
}


function loopPics(images) {
    changeBigPicture(loopCount, images[loopCount].src);
    loopCount++;
    if (loopCount == images.length) {
        loopCount = 0;
    }
}

function nextPicture() {
    picCount++;
    if (picCount == images.length) {
        picCount = 0;
    }
    changeBigPicture(picCount, images[picCount].src);
}

nextPic.addEventListener("click", nextPicture);

function previousPicture() {
    picCount--;
    if (picCount === -1) {
        picCount = images.length - 1;
    }
    changeBigPicture(picCount, images[picCount].src);
}

prevPic.addEventListener("click", previousPicture);


window.onload = init();