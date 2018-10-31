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

let inCart = document.getElementsByClassName('incart');
let innerIncart = document.getElementsByClassName('innerIncart');

let summa = document.getElementsByClassName('costitem');


inCart[0].addEventListener('click', function () {
    addBasket(myBasket, 1, 15.99, 'MacBook');
});
inCart[1].addEventListener('click', function () {
    addBasket(myBasket, 2, 20.99, 'MacBook');
});
inCart[2].addEventListener('click', function () {
    addBasket(myBasket, 3, 30.99, 'MacBook');
});

innerIncart[0].addEventListener('click', function () {
    addBasket(myBasket, 1, 15.99, 'MacBook');
});
innerIncart[1].addEventListener('click', function () {
    addBasket(myBasket, 2, 20.99, 'MacBook');
});
innerIncart[2].addEventListener('click', function () {
    addBasket(myBasket, 3, 30.99, 'MacBook');
});
//Работа с изображениями



let loopInterval = [];
let loopCount = -1;
let timer = 3000;
let picCount = 0;

let bigPicture = document.getElementsByClassName('bigPicture');
let popUpBigPicture = document.getElementsByClassName('popUpBigPicture');

let nextPic = document.getElementsByClassName('morethan');
let prevPic = document.getElementsByClassName('lessthan');

let good = document.getElementsByClassName('good');
let popUpWindow = document.getElementsByClassName('window');

let mImages = [];
let popUpSliderImg = [];

for (let i = 0; i < good.length; i++) {
    mImages[i] = good[i].querySelectorAll(".sliderImg img");
    popUpSliderImg[i] = popUpWindow[i].querySelectorAll('.popUpSliderImg img');
}

let images = good[0].querySelectorAll(".sliderImg img");





function init() {

    for (let j = 0; j < mImages.length; j++) {
        for (let i = 0; i < mImages[j].length; i++) {
            mImages[j][i].addEventListener('mouseover', function () {
                changeBigPicture (bigPicture[j] ,i, mImages[j][i].src);
            });
        }

        function nextPicture() {
            picCount++;
            if (picCount >= mImages[j].length) {
                picCount = 0;
            }
            changeBigPicture(bigPicture[j] ,picCount, mImages[j][picCount].src);
        }
        nextPic[j].addEventListener("click", nextPicture);


        function previousPicture() {
            picCount--;
            if (picCount <= -1) {
                picCount = mImages[j].length - 1;
            }
            changeBigPicture(bigPicture[j] ,picCount, mImages[j][picCount].src);
        }

        prevPic[j].addEventListener("click", previousPicture);


    }
    for (let j = 0; j < popUpBigPicture.length; j++) {

        for (let i = 0; i < popUpSliderImg[j].length; i++) {
            popUpSliderImg[j][i].addEventListener('click', function () {
                changeBigPicture(popUpBigPicture[j], j, popUpSliderImg[j][i].src);
            })
        }

        function loopPics() {

            let myTimer = setTimeout(loopPics, timer);

            if (document.getElementsByClassName('window')[j].style.display == ('none')) {
                clearTimeout(myTimer);
                loopCount = -1;
                return;
            }

            loopCount++;

            if (loopCount >= popUpSliderImg[j].length) {
                loopCount = 0;
            }
            changeBigPicture(popUpBigPicture[j] ,loopCount, popUpSliderImg[j][loopCount].src);

        }

        document.getElementsByClassName('more')[j].addEventListener('click', loopPics);

    }


}



function changeBigPicture(wantedBigPicture, index, src) {
    if (src !== undefined) {
        wantedBigPicture.src = src;
    }
    loopCount = index;
    picCount = index;
}

//Всплывающее окно

let popUpWindows = document.getElementsByClassName('window');

for (let i = 0; i < popUpWindows.length; i++) {
    function show(state) {
        document.getElementsByClassName('window')[i].style.display = state;
        document.getElementsByClassName('wrap')[i].style.display = state;
    }
    document.getElementsByClassName('more')[i].addEventListener('click', function () {
        show('flex');
    });
    document.getElementsByClassName('wrap')[i].addEventListener('click', function () {
        show('none');
    });
    document.getElementsByClassName('close')[i].addEventListener('click', function () {
        show('none');
    });

}


let ggg = setTimeout(function () {
    alert('gsgas');
}, 3000);

window.onload = init();