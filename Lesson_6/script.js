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
let loopCount = 0;
let timer = 3000;
let picCount = 0;

let bigPicture = document.getElementById('bigPicture');
let popUpBigPicture = document.getElementById('popUpBigPicture');

let nextPic = document.getElementById('moreThan');
let prevPic = document.getElementById('lessThan');

let good = document.getElementsByClassName('good');

let images = good[0].querySelectorAll(".sliderImg img");

let popUpSliderImg = document.querySelectorAll('.popUpSliderImg img');

function init() {

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function () {
            changeBigPicture (bigPicture ,i, images[i].src);
        });
        popUpSliderImg[i].addEventListener('click', function () {
            changeBigPicture(popUpBigPicture, i, popUpSliderImg[i].src);
        })
    }
    loopInterval = setInterval(function () {
        loopPics(popUpBigPicture);
    }, timer);
    //Закоментил для удобства
}

function changeBigPicture(bigPicture, index, src) {
    if (src !== undefined) {
        bigPicture.src = src;
    }
    loopCount = index;
    picCount = index;
}


function loopPics(bpicture) {
    loopCount++;
    if (loopCount == images.length) {
        loopCount = 0;
    }
    changeBigPicture(bpicture ,loopCount, images[loopCount].src);
}

function nextPicture() {
    picCount++;
    if (picCount == images.length) {
        picCount = 0;
    }
    changeBigPicture(bigPicture ,picCount, images[picCount].src);
}

nextPic.addEventListener("click", nextPicture);

function previousPicture() {
    picCount--;
    if (picCount === -1) {
        picCount = images.length - 1;
    }
    changeBigPicture(bigPicture ,picCount, images[picCount].src);
}

prevPic.addEventListener("click", previousPicture);

function show(state){
    document.getElementById('window').style.display = state;
    document.getElementById('wrap').style.display = state;
}


window.onload = init();