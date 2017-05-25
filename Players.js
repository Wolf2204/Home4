(function () {
    'use strict';



    function Players() {

    }

    Object.defineProperties(Players.prototype, {
        deckPlayers: {
            value: function (player1, player2, deck) {
                let deck1 = document.body.querySelector('.deck1');
                let deck2 = document.body.querySelector('.deck2');
                let a = 50;



                for (let i = 18; i > 0; i--) {
                    let img1 = document.createElement('img'),
                        img2 = document.createElement('img');
                    img1.src = 'cards36/cardback.jpg';
                    img2.src = 'cards36/cardback.jpg';
                    img2.style.right = '0px';

                    let card1 = deck.splice((Math.random() * deck.length), 1);
                    player1.push(card1);
                    img1.style.top = `${a}px`;
                    deck1.appendChild(img1);

                    let card2 = deck.splice((Math.random() * deck.length), 1);
                    player2.push(card2);
                    img2.style.top = `${a}px`;
                    deck2.appendChild(img2);

                    a += 1;
                }
            }
        },

    });

    window.Players = Players;

}());
