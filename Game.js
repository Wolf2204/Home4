(function () {
    'use strict';
    let arr1 = [],
        arr2 = [],
        arr3 = [],
        arr4 = [];

    let rand = [arr1, arr2, arr3, arr4];
    let choiceSuit = rand[Math.floor(Math.random() * rand.length)];

    let deck = new Deck();
    deck.deckList(arr1, arr2, arr3, arr4);
    deck.suitValue(choiceSuit);
    let gameDeck = arr1.concat(arr2, arr3, arr4);

    let deckPetya = [],
        deckVasya = [];

    let players = new Players();
    players.deckPlayers(deckPetya, deckVasya, gameDeck);

    let resultPetya = 0,
        resultVasya = 0;

    let img1 = document.body.querySelectorAll(".deck1 img");
    let img2 = document.body.querySelectorAll(".deck2 img");

    function Game() {

    }

    Object.defineProperties(Game.prototype, {
        suit: {
            value: function (arr) {
                let el1 = document.body.querySelector('.suit'),
                    el2 = document.body.querySelector('.suit img');
                let rotate = 1128;
                if (arr[0][0].val === 100) {
                    el2.style.transition = 'transform 2s linear';
                    setTimeout(function () {
                        el2.style.transform = `rotate(${rotate}deg)`;
                    }, 1);


                } else if (arr[1][0].val === 100) {
                    rotate += 270;
                    el2.style.transition = 'transform 2s linear';
                    setTimeout(function () {
                        el2.style.transform = `rotate(${rotate}deg)`;
                    }, 1);

                } else if (arr[2][0].val === 100) {
                    rotate += 180;
                    el2.style.transition = 'transform 2s linear';
                    setTimeout(function () {
                        el2.style.transform = `rotate(${rotate}deg)`;
                    }, 1);

                } else {
                    rotate += 90;
                    el2.style.transition = 'transform 2s linear';
                    setTimeout(function () {
                        el2.style.transform = `rotate(${rotate}deg)`;
                    }, 1);

                }
                el2.addEventListener("transitionend", function () {

                    setTimeout(function () {
                        if (rotate === 1128) {
                            el1.style.backgroundImage = 'url("forGame/бубна.jpg")';
                        } else if (rotate === 1218) {
                            el1.style.backgroundImage = 'url("forGame/крести.jpg")';
                        } else if (rotate === 1308) {
                            el1.style.backgroundImage = 'url("forGame/пика.jpg")';
                        } else {
                            el1.style.backgroundImage = 'url("forGame/черви.jpg")';
                        }
                        el1.style.transition = 'opacity 1s linear';
                        el1.style.opacity = 0.5;
                        el2.remove()
                    }, 600);

                })


            }
        },

        start: {
            value: function (count1, count2, img1, img2) {
                let time = 3500;

                for (let i = 17; i >= 0; i--) {
                    let a = deckPetya[i][0].val,
                        b = deckVasya[i][0].val;

                    let c = document.body.querySelector('.petya');
                    let d = document.body.querySelector('.vasia');

                    setTimeout(function () {

                        img1[i].classList.add('an1');
                        img2[i].classList.add('an2');

                        img1[i].addEventListener('animationend', function an1() {
                            img1[i].classList.remove('an1');
                            img2[i].classList.remove('an2');
                            img1[i].src = deckPetya[i][0].card;
                            img2[i].src = deckVasya[i][0].card;

                            img1[i].classList.add('an11');
                            img2[i].classList.add('an21');
                            img1[i].removeEventListener('animationend', an1);

                            img1[i].addEventListener('animationend', function an2() {
                                img1[i].classList.remove('an11');
                                img2[i].classList.remove('an21');
                                if (a > b) {
                                    count1 += 1;
                                    c.innerText = count1;
                                    img1[i].classList.add('win1');
                                    img2[i].classList.add('loose2');
                                } else if (a < b) {
                                    count2 += 1;
                                    d.innerText = count2;
                                    img1[i].classList.add('loose1');
                                    img2[i].classList.add('win2');
                                } else {
                                    img1[i].classList.add('loose1');
                                    img2[i].classList.add('loose2');

                                }
                                img1[i].removeEventListener('animationend', an2);

                                img1[i].addEventListener('animationend', function an3() {

                                    img1[i].style.transition = 'transform 1s linear';
                                    img2[i].style.transition = 'transform 1s linear';
                                    let position = 200;
                                    for (let j = i; j <= 17; j++) {
                                        img1[j].style.transform = `translateY(${position}px)`;
                                        img2[j].style.transform = `translateY(${position}px)`;
                                        position += 200;
                                    }
                                    img1[i].removeEventListener('animationend', an3);
                                })


                            });

                        });

                    }, time);
                    time += 3000;


                }

            }
        }
    });

    let game = new Game();
    game.suit(rand);
    game.start(resultPetya, resultVasya, img1, img2);


}());
