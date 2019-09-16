console.log("hello");
var cards = [
   { rank: "queen",
    suit: "hearts",
    cardImage:"images/queen-of-hearts.png"
   },
    { rank: "queen",
    suit: "diamonds",
    cardImage:"images/queen-of-diamonds.png"
    },
   { rank: "king",
    suit: "hearts",
    cardImage:"images/king-of-hearts.png"

   },
   { rank: "king",
    suit: "diamonds",
    cardImage:"images/king-of-diamonds.png"
   }
];
var cardsInPlay = [];

function flippedCard(){
    var cardId = this.getAttribute('data-id');
    console.log("user flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute('src',cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
		checkForMatch();
	}
    

}



function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}
function createBoard(){
    for(let i = 0; i < cards.length; i++){
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src',"images/back.png");
        cardElement.setAttribute('data-id',i);
        cardElement.addEventListener('click',flippedCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

createBoard();