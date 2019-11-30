class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(array) {
    
      var currentIndex = this.cards.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  
    return this.cards;
    
  }
  checkIfPair(card1, card2) {
    this.pairsClicked +=1;
    if (card1 === card2){
      this.pairsGuessed +=1;
      return true;
    }else return false;
  }

  isFinished() {
      if (this.pairsGuessed === this.cards.length/2){
      return true;
    }else return false;
  }
}