(function () {
    'use strict';

    let sumCards = 36;
    let suitLength = sumCards / 4;

    function Deck() {

    }

    Object.defineProperties(Deck.prototype, {
        deckList: {
            value: function (...arg) {
                let suitCard = ['бубна', 'черви', 'пика', 'крести'];
                let number = 0;
                let deckLength = 'cards36/';

                for (let i = 0; i < 4; i++) {
                    for (let j = 1; j <= suitLength; j++) {
                        arg[i].push({
                            val: j,
                            card: deckLength + (j + number) + '.jpg',
                            suit: suitCard[i]
                        })
                    }
                    number += 9;

                }
                return arg;
            }
        },

        suitValue: {
            value: function (suit) {
                for (let i = 0; i < suit.length; i++) {
                    suit[i].val = suit[i].val * 100;
                }
            }
        }

    });


    window.Deck = Deck;
}());
