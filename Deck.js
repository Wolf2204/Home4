(function () {
    'use strict';



    function Deck() {

    }

    Object.defineProperties(Deck.prototype, {
        deckList: {
            value: function (...arg) {
                let sumCards = 36,
                suitLength = sumCards / 4,
                suitCard = ['бубна', 'черви', 'пика', 'крести'],
                number = 0,
                deckLength = 'cards36/';

                for (let i = 0; i < 4; i++) {
                    for (let j = 1; j <= suitLength; j++) {
                        arg[i].push({
                            val: j,
                            card: deckLength + (j + number) + '.jpg',
                            suit: suitCard[i]
                        })
                    }
                    number += suitLength;

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
