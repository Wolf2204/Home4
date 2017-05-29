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
            value: function (count1, count2, img1, img2, deck1, deck2) {
                let p1 = Array.prototype.slice.call(img1);
                let p2 = Array.prototype.slice.call(img2);

                function turns (finalTurn, gamePlay, winner) {
                    let countTurns = 17,
                        gameProcess = function () {
                            if (countTurns > finalTurn) {
                                gamePlay(countTurns, function () {
                                    gameProcess();
                                });
                                countTurns--;
                            } else {
                                winner(count1, count2);
                            }
                        };
                    gameProcess();
                }

                setTimeout(function () {

                    turns(-1, function (i, next) {
                        let a = deck1[i][0];
                        let b = deck2[i][0];
                        let c = document.body.querySelector('.petya'),
                            d = document.body.querySelector('.vasia');
                        p1[i].classList.add('an1');
                        p2[i].classList.add('an2');
                        p1[i].addEventListener('animationend', function an1() {
                            p1[i].classList.remove('an1');
                            p2[i].classList.remove('an2');
                            p1[i].src = a.card;
                            p2[i].src = b.card;
                            p1[i].classList.add('an11');
                            p2[i].classList.add('an21');
                            p1[i].removeEventListener('animationend', an1);
                            p1[i].addEventListener('animationend', function an2() {
                                p1[i].classList.remove('an11');
                                p2[i].classList.remove('an21');

                                if (a.val > b.val) {
                                    count1 += 1;
                                    c.innerText = count1;
                                    p1[i].classList.add('win1');
                                    p2[i].classList.add('loose2');
                                } else if (a.val < b.val) {
                                    count2 += 1;
                                    d.innerText = count2;
                                    p1[i].classList.add('loose1');
                                    p2[i].classList.add('win2');
                                } else {
                                    p1[i].classList.add('loose1');
                                    p2[i].classList.add('loose2');

                                }
                                p1[i].removeEventListener('animationend', an2);

                                p1[i].addEventListener('animationend', function an3() {

                                    p1[i].style.transition = 'transform 1s linear';
                                    p2[i].style.transition = 'transform 1s linear';
                                    let position = 200;
                                    for (let j = i; j <= 17; j++) {
                                        p1[j].style.transform = `translateY(${position}px)`;
                                        p2[j].style.transform = `translateY(${position}px)`;
                                        position += 200;
                                    }

                                    p1[i].removeEventListener('animationend', an3);
                                })

                            })
                        });
                        setTimeout(next, 3000);

                    }, function (c1, c2) {
                        p1[0].addEventListener('transitionend', function tr () {
                            if (c1 > c2) {
                                alert("Winner: Петя");
                            } else if (c1 < c2) {
                                alert("Winner: Вася");
                            } else {
                                alert("Ничья");
                            }
                            p1[0].removeEventListener('transitionend', tr);
                        })

                    });
                }, 3500);


            }
        }
    });

    let game = new Game();
    game.suit(rand);
    game.start(resultPetya, resultVasya, img1, img2, deckPetya, deckVasya);


}());