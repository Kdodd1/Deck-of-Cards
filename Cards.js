class Deck {
  constructor() {
    this.cards = [];
    let suits = ['Hearts','Diamonds','Spades','Clubs'];
    let nums = {'Ace': 1 ,'Two': 2 ,'Three': 3 ,'Four': 4 ,'Five': 5 ,'Six': 6 ,'Seven': 7 ,'Eight': 8 ,'Nine': 9 ,'Ten': 10 ,'Jack': 11 ,'Queen': 12 ,'King': 13}
    for ( let i = 0; i < suits.length; i++) {
      for ( var key in nums ) {
        let temp = new Card(suits[i], key, nums[key]);
        this.cards.push(temp);
      }
    }
  }
  shuffle() {
    let newArray = [];
    let size = this.cards.length;
    for (var i = 0; i < size; i++) {
      let pick = Math.floor(Math.random() * this.cards.length );
      newArray.push(this.cards[pick]);
      this.cards[pick] = this.cards[this.cards.length - 1];
      this.cards.length = this.cards.length -1;
    }
    this.cards = newArray;
  }
  spread() {
    for (var i = 0; i < 52; i++) {
      this.cards[i].show();
    }
  }
  reset(){
    this.cards = [];
    let suits = ['Hearts','Diamonds','Spades','Clubs'];
    let nums = {'Ace': 1 ,'Two': 2 ,'Three': 3 ,'Four': 4 ,'Five': 5 ,'Six': 6 ,'Seven': 7 ,'Eight': 8 ,'Nine': 9 ,'Ten': 10 ,'Jack': 11 ,'Queen': 12 ,'King': 13}
    for ( let i = 0; i < suits.length; i++) {
      for ( var key in nums ) {
        let temp = new Card(suits[i], key, nums[key]);
        this.cards.push(temp);
      }
    }
  }
  deal(player){
    if(player instanceof Player){
      this.dealToPlayer = player;
      var dealtCard = this.cards[this.cards.length -1];
      player.hand.push(dealtCard)
      this.cards.pop();

  }else{
    console.log("This is not a player!")
      }
    }
  }

class Card {
  constructor(suit,key,val) {
    this.suit = suit;
    this.key = key;
    this.val = val;
  }
  show(){
    console.log( this.key + " of " + this.suit);
  }
}
class Player {
  constructor(name){
    this.name = name;
    this.hand = [];
  }
  discard(){
    this.hand.pop();
  }
  showCards(){
    for(var i = 0; i < this.hand.length; i++){
      this.hand[i].show();
    }
  }
}
Player1 = new Player("Kyle");
Deck1 = new Deck();
Deck1.shuffle();
